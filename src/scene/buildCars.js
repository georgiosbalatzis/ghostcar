import {
  Box3,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  DynamicDrawUsage,
  Group,
  Mesh,
  Points,
  Sprite,
  SRGBColorSpace,
  Vector3,
} from "three";
import { loadCarTemplate } from "./carModel.js";
import {
  createCarShadowMaterial,
  createFallbackCarMaterial,
  createSpriteLabelMaterial,
  createTrailMaterial,
} from "./materials.js";

function freezeObjectTransform(object) {
  if (!object) return object;
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

const CAR_LENGTH = 5.63; // metres
const LABEL_PX = 24;
const LABEL_ASPECT = 200 / 80;

// Labels keep one on-screen size at any camera distance (sizeAttenuation is off), so they stay legible
// on a phone-sized stage and do not balloon in the follow camera. Called on every stage resize.
export function sizeCarLabels(cars, viewportHeight, fov) {
  const height = (2 * LABEL_PX * Math.tan((fov * Math.PI) / 360)) / (viewportHeight || 1);
  for (const car of cars) {
    const sprite = car?.userData.label;
    if (!sprite) continue;
    sprite.scale.set(height * LABEL_ASPECT, height, 1);
    sprite.updateMatrix();
  }
}

// Name chips as in 2D: an ink plate with a team-colour edge and the acronym in Barlow Condensed.
const LABEL_FONT = '700 46px "Barlow Condensed", "IBM Plex Sans", sans-serif';
const LABEL_INK = { dark: { plate: "#eee8db", text: "#1b1a19" }, light: { plate: "#20251f", text: "#f2eee4" } };

function drawLabel(ctx, { label, color, isDark }) {
  const ink = LABEL_INK[isDark ? "dark" : "light"];
  ctx.clearRect(0, 0, 200, 80);
  ctx.fillStyle = ink.plate;
  ctx.fillRect(0, 0, 200, 80);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 14, 80);
  ctx.fillStyle = ink.text;
  ctx.font = LABEL_FONT;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 107, 43);
}

// One label plate per car: the canvas is redrawn in place when the theme, colour or name change.
function createLabel({ label, color, isDark }) {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 80;
  const ctx = canvas.getContext("2d");
  const texture = new CanvasTexture(canvas);
  // Canvas pixels are sRGB; untagged, three treats them as linear and the colours wash out.
  texture.colorSpace = SRGBColorSpace;
  const state = { args: { label, color, isDark } };
  const draw = () => {
    drawLabel(ctx, state.args);
    texture.needsUpdate = true;
  };
  draw();
  // Barlow may still be loading when the scene is built; redraw once it has, and the next frame uploads it.
  if (!document.fonts.check(LABEL_FONT)) {
    document.fonts
      .load(LABEL_FONT)
      .then(draw)
      .catch(() => {});
  }
  return {
    texture,
    update(args) {
      state.args = args;
      draw();
    },
  };
}

function makeCarGroup({ color, label, isGhost, isLowDetail, isDark, tier = 0 }) {
  const group = new Group();
  let sprite = null;
  let labelPlate = null;

  const shadow = new Mesh(new CircleGeometry(1.0, 24), createCarShadowMaterial());
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(1.3, 3, 1); // a car-sized ellipse in metres
  shadow.position.y = 0.03;
  group.add(freezeObjectTransform(shadow));

  // Shown at once and replaced when the shared model arrives (or kept if it never does).
  const placeholder = new Mesh(new BoxGeometry(2, 0.7, 5.6), createFallbackCarMaterial({ color, isGhost }));
  placeholder.position.y = 0.35;
  group.add(freezeObjectTransform(placeholder));

  if (label && !isLowDetail) {
    labelPlate = createLabel({ label, color, isDark });
    sprite = new Sprite(createSpriteLabelMaterial(labelPlate.texture));
    sprite.position.set(0, 1.6, 0);
    // Anchored at the plate's bottom edge and lifted one plate per slot, in screen space, so the labels
    // of cars running together stack instead of overlapping at any zoom.
    sprite.center.set(0.5, -tier * 1.2);
    group.add(freezeObjectTransform(sprite));
  }

  group.userData = { color, isGhost, modelLoaded: false, label: sprite, labelPlate, placeholder };
  return group;
}

// Colours of one car material by role: the team colour on the body, a darker tint on the trim.
function materialRole(name) {
  const lower = (name || "").toLowerCase();
  if (["base", "2nd", "bloody", "red"].some((key) => lower.includes(key))) return "body";
  if (lower.includes("3rd")) return "trim";
  if (lower.includes("mirror")) return "mirror";
  return "other";
}

function paintMaterial(mat, color, isGhost) {
  const role = mat.userData.role;
  if (role === "body") {
    mat.color.copy(color);
    if (mat.emissive) {
      mat.emissive.copy(color);
      mat.emissiveIntensity = isGhost ? 0.4 : 0.15;
    }
  } else if (role === "trim") {
    mat.color.copy(color).multiplyScalar(0.6);
    if (mat.emissive) {
      mat.emissive.copy(color);
      mat.emissiveIntensity = 0.1;
    }
  } else if (role === "mirror") {
    mat.color.setHex(0x888888);
  }
  if (isGhost) {
    mat.transparent = true;
    mat.opacity = 0.5;
  }
}

function applyModelToCar(template, carGroup) {
  if (!carGroup) return;
  const clone = template.clone(true);
  // The model's long axis is z (12.15 model units); scale it to a real car's length in metres.
  const modelLength = new Box3().setFromObject(clone).getSize(new Vector3()).z;
  clone.scale.setScalar(CAR_LENGTH / modelLength);

  const box = new Box3().setFromObject(clone);
  const center = box.getCenter(new Vector3());
  clone.position.set(-center.x, -box.min.y + 0.02, -center.z);

  const color = new Color(carGroup.userData.color);
  const isGhost = carGroup.userData.isGhost;
  clone.traverse((child) => {
    if (child.isMesh && child.material) {
      // Geometry stays shared with the template; the material is this car's own.
      const mat = child.material.clone();
      mat.userData.role = materialRole(mat.name);
      paintMaterial(mat, color, isGhost);
      child.material = mat;
    }
  });

  const { placeholder } = carGroup.userData;
  if (placeholder) {
    carGroup.remove(placeholder);
    placeholder.geometry.dispose();
    placeholder.material.dispose();
    carGroup.userData.placeholder = null;
  }
  carGroup.add(clone);
  carGroup.userData.modelLoaded = true;
}

// Recolour and relabel a car in place (theme, colour or acronym changed; the paths did not).
function restyleCar(carGroup, { color, label, isDark }) {
  if (!carGroup) return;
  const paint = new Color(color);
  const { isGhost, labelPlate, placeholder } = carGroup.userData;
  carGroup.userData.color = color;
  labelPlate?.update({ label, color, isDark });
  if (placeholder) {
    placeholder.material.color.copy(paint);
    placeholder.material.emissive.copy(paint);
  }
  carGroup.traverse((child) => {
    if (child.isMesh && child.material?.userData.role) paintMaterial(child.material, paint, isGhost);
  });
}

function makeTrail({ scene, color, ghost, isMob }) {
  const max = isMob ? 72 : 120;
  const positions = new Float32Array(max * 3);
  const geometry = new BufferGeometry();
  const posAttr = new BufferAttribute(positions, 3);
  posAttr.setUsage(DynamicDrawUsage);
  geometry.setAttribute("position", posAttr);

  const alphas = new Float32Array(max);
  alphas.fill(0);
  const alphaAttr = new BufferAttribute(alphas, 1);
  alphaAttr.setUsage(DynamicDrawUsage);
  geometry.setAttribute("alpha", alphaAttr);
  geometry.setDrawRange(0, 0);

  const material = createTrailMaterial({ color, ghost });
  const points = freezeObjectTransform(new Points(geometry, material));
  scene.add(points);
  return { mesh: points, positions, alphas, max, count: 0 };
}

export function buildCars({
  scene,
  drivers,
  isLowDetail,
  isDark,
  isMob,
  isActive = () => true,
  isContextLost = () => false,
}) {
  // drivers: one { path, color, label } per slot; slots 1 and 2 always exist, 3 and 4 only with a path.
  const cars = drivers.map((driver, index) =>
    index < 2 || driver?.path?.length > 0
      ? makeCarGroup({
          color: driver.color,
          label: driver.label,
          isGhost: index > 0,
          isLowDetail,
          isDark,
          tier: index,
        })
      : null
  );
  cars.forEach((car) => car && scene.add(car));
  const trails = cars.map((car, index) =>
    car ? makeTrail({ scene, color: drivers[index].color, ghost: index > 0, isMob }) : null
  );

  // Settles once the shared model is on the cars (or has failed: the placeholders stay).
  const settled = loadCarTemplate()
    .then((template) => {
      if (isActive() && !isContextLost()) cars.forEach((car) => applyModelToCar(template, car));
    })
    .catch(() => {});

  function restyle(next, dark) {
    cars.forEach((car, index) => {
      if (!car) return;
      restyleCar(car, { color: next[index].color, label: next[index].label, isDark: dark });
      trails[index].mesh.material.uniforms.uColor.value.set(next[index].color);
    });
  }

  return { cars, trails, restyle, settled };
}
