import {
  Box3,
  BoxGeometry,
  Color,
  Group,
  LessEqualDepth,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Vector3,
} from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { fractionAtTime } from "../domain/timing.js";
import { loadCarTemplate } from "./carModel.js";
import { placeOnRoad, poseAt } from "./carPose.js";
import {
  createCarShadowMaterial,
  createFallbackCarMaterial,
  createGhostPrepassMaterial,
  createShadowTexture,
} from "./materials.js";
import { SCENE_THEME } from "./sceneTheme.js";
import { surfaceAt } from "./trackGeometry.js";

const roadColor = (dark) => (dark ? SCENE_THEME.dark : SCENE_THEME.light).road;

function freezeObjectTransform(object) {
  if (!object) return object;
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

const CAR_LENGTH = 5.63; // metres
function makeCarGroup({ color, isGhost, tier = 0, shadowTexture }) {
  const group = new Group();

  // 2.6 × 6.4 m, a little larger than the car so the soft edge shows.
  const shadow = new Mesh(new PlaneGeometry(2.6, 6.4), createCarShadowMaterial(shadowTexture));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  shadow.renderOrder = 1;
  shadow.userData.noPick = true;
  group.add(freezeObjectTransform(shadow));

  // Shown at once and replaced when the shared model arrives (or kept if it never does).
  const placeholder = new Mesh(new BoxGeometry(2, 0.7, 5.6), createFallbackCarMaterial({ color, isGhost }));
  placeholder.position.y = 0.35;
  group.add(freezeObjectTransform(placeholder));

  group.userData = { color, isGhost, tier, modelLoaded: false, placeholder, shadow };
  return group;
}

// The model's materials by role. The GLB's own names decide it: paint (BaseColor, Bloody_Red), accent (2ndColor),
// carbon (3rdColor, Dark_Black) and mirror.
function materialRole(name) {
  const lower = (name || "").toLowerCase();
  if (lower.includes("mirror")) return "mirror";
  if (lower.includes("2nd")) return "accent";
  if (lower.includes("3rd") || lower.includes("black")) return "carbon";
  if (["base", "bloody", "red"].some((key) => lower.includes(key))) return "body";
  return "other";
}

const CARBON = 0x151515;
const WHITE = new Color(0xffffff);
const BLACK = new Color(0x000000);
const GHOST_OPACITY = 0.45;

function createCarMaterial(role, source) {
  let material;
  if (role === "body") {
    material = new MeshPhysicalMaterial({ metalness: 0.3, roughness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  } else if (role === "accent") {
    material = new MeshPhysicalMaterial({ metalness: 0.3, roughness: 0.4 });
  } else if (role === "carbon") {
    material = new MeshStandardMaterial({ color: CARBON, roughness: 0.55, metalness: 0 });
  } else if (role === "mirror") {
    material = new MeshStandardMaterial({ color: 0x9a9a9a, roughness: 0.3, metalness: 0.8 });
  } else {
    material = source.clone();
  }
  material.userData.role = role;
  return material;
}

// Team colour on the paint; the accent is the same colour lifted toward white on the dark stage and pulled toward
// black on the paper one, so it stays a separate shade. Ghosts are one translucent layer (see ghostPass).
function paintMaterial(material, color, isDark, isGhost) {
  const { role } = material.userData;
  if (role === "body") material.color.copy(color);
  else if (role === "accent") material.color.copy(color).lerp(isDark ? WHITE : BLACK, 0.25);
  if (isGhost) {
    material.transparent = true;
    material.opacity = GHOST_OPACITY;
    material.depthWrite = false;
    material.depthFunc = LessEqualDepth;
  }
}

const SHADOW_OPACITY = { dark: 0.5, light: 0.35 };

function applyModelToCar(template, carGroup, shared) {
  if (!carGroup) return;
  const clone = template.clone(true);
  // The model's long axis is z (12.15 model units) and its nose points to +z, which is the direction
  // a pose's heading turns toward; scale it to a real car's length in metres.
  const modelLength = new Box3().setFromObject(clone).getSize(new Vector3()).z;
  clone.scale.setScalar(CAR_LENGTH / modelLength);

  const box = new Box3().setFromObject(clone);
  const center = box.getCenter(new Vector3());
  clone.position.set(-center.x, -box.min.y + 0.02, -center.z);

  const color = new Color(carGroup.userData.color);
  const { isGhost, tier } = carGroup.userData;
  const meshes = [];
  clone.traverse((child) => child.isMesh && meshes.push(child));
  for (const mesh of meshes) {
    // Geometry stays shared with the template; the material is this car's own.
    mesh.material = createCarMaterial(materialRole(mesh.material.name), mesh.material);
    paintMaterial(mesh.material, color, shared.isDark, isGhost);
    if (isGhost) {
      // A depth-only copy first, then the colour: only the ghost's front surface is drawn, never its insides.
      const prepass = new Mesh(mesh.geometry, shared.prepass);
      prepass.renderOrder = 10 + tier * 2;
      mesh.renderOrder = 11 + tier * 2;
      clone.add(prepass);
    }
  }

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

// Recolour a car in place (theme or colour changed; the paths did not).
function restyleCar(carGroup, { color, isDark }) {
  if (!carGroup) return;
  const paint = new Color(color);
  const { isGhost, placeholder, shadow } = carGroup.userData;
  carGroup.userData.color = color;
  shadow.material.opacity = SHADOW_OPACITY[isDark ? "dark" : "light"];
  if (placeholder) {
    placeholder.material.color.copy(paint);
    placeholder.material.emissive.copy(paint);
  }
  carGroup.traverse((child) => {
    if (child.isMesh && child.material?.userData.role) paintMaterial(child.material, paint, isDark, isGhost);
  });
}

const TAIL_SECONDS = 1.5;
const TAIL_LIFT = 0.12; // metres above the road

// The last TAIL_SECONDS of a driver's own line as a fading ribbon 0.5 m wide. Nothing is recorded per frame:
// the points are cut from the driver's path by time, so a scrub shows the right tail at once.
function makeTail({ scene, color, isMob }) {
  const max = isMob ? 96 : 160; // segments
  const geometry = new LineGeometry();
  geometry.setPositions(new Float32Array((max + 1) * 3));
  geometry.setColors(new Float32Array((max + 1) * 3));
  geometry.instanceCount = 0;
  const material = new LineMaterial({ linewidth: 0.5, worldUnits: true, vertexColors: true });
  const line = new Line2(geometry, material);
  line.frustumCulled = false;
  line.visible = false;
  line.renderOrder = 5;
  scene.add(line);
  return {
    line,
    max,
    segments: geometry.attributes.instanceStart.data,
    colors: geometry.attributes.instanceColorStart.data,
    color: new Color(color),
    fade: new Color(),
    surface: {},
  };
}

// Points of the tail: newest first, walked back along the driver's dense path from the car.
function writeEnd(array, offset, x, y, z) {
  array[offset] = x;
  array[offset + 1] = y;
  array[offset + 2] = z;
}

function updateTail(tail, { path, times, time, centreline, carIndex }) {
  const f1 = fractionAtTime(times, time);
  const f0 = fractionAtTime(times, time - TAIL_SECONDS);
  const last = path.count - 1;
  const i1 = Math.min(last, Math.ceil(f1 * last));
  const i0 = Math.floor(f0 * last);
  const stride = Math.max(1, Math.ceil((i1 - i0) / tail.max));
  const count = Math.floor((i1 - i0) / stride) + 1;
  if (count < 2) {
    tail.line.geometry.instanceCount = 0;
    return;
  }
  const points = tail.segments.array;
  const colors = tail.colors.array;
  const { color, fade } = tail;
  let hint = carIndex;
  for (let k = 0; k < count; k++) {
    // Newest at k = 0, so the road search follows the path backwards from the car's own place on the road.
    const p = path.points[Math.max(i0, i1 - k * stride)];
    surfaceAt(centreline, p.x, p.z, hint, tail.surface, p.y);
    hint = tail.surface.index;
    const y = tail.surface.y + TAIL_LIFT;
    // Segment k runs from point k to point k + 1: each point is the start of one and the end of the previous.
    // Full colour at the car, fading to the road colour toward the oldest point.
    const mix = (1 - k / (count - 1)) ** 2;
    const r = fade.r + (color.r - fade.r) * mix;
    const g = fade.g + (color.g - fade.g) * mix;
    const b = fade.b + (color.b - fade.b) * mix;
    if (k < count - 1) {
      writeEnd(points, 6 * k, p.x, y, p.z);
      writeEnd(colors, 6 * k, r, g, b);
    }
    if (k > 0) {
      writeEnd(points, 6 * (k - 1) + 3, p.x, y, p.z);
      writeEnd(colors, 6 * (k - 1) + 3, r, g, b);
    }
  }
  tail.segments.needsUpdate = true;
  tail.colors.needsUpdate = true;
  tail.line.geometry.instanceCount = count - 1;
}

export function buildCars({
  scene,
  drivers,
  isDark,
  isMob,
  resolution,
  isActive = () => true,
  isContextLost = () => false,
}) {
  // drivers: one { path, color, label } per slot; slots 1 and 2 always exist, 3 and 4 only with a path.
  const shared = { isDark, prepass: createGhostPrepassMaterial() };
  const shadowTexture = createShadowTexture();
  const cars = drivers.map((driver, index) =>
    index < 2 || driver?.path?.length > 0
      ? makeCarGroup({ color: driver.color, isGhost: index > 0, tier: index, shadowTexture })
      : null
  );
  cars.forEach((car) => car && scene.add(car));
  const tails = cars.map((car, index) => (car ? makeTail({ scene, color: drivers[index].color, isMob }) : null));
  tails.forEach((tail) => {
    if (!tail) return;
    tail.fade.set(roadColor(isDark));
    tail.line.material.resolution.set(resolution.width, resolution.height);
  });

  // Settles once the shared model is on the cars (or has failed: the placeholders stay).
  const settled = loadCarTemplate()
    .then((template) => {
      if (isActive() && !isContextLost()) cars.forEach((car) => applyModelToCar(template, car, shared));
    })
    .catch(() => {});

  function restyle(next, dark) {
    shared.isDark = dark;
    cars.forEach((car, index) => {
      if (!car) return;
      restyleCar(car, { color: next[index].color, isDark: dark });
      tails[index].color.set(next[index].color);
      tails[index].fade.set(roadColor(dark));
    });
  }

  function setResolution(width, height) {
    tails.forEach((tail) => tail?.line.material.resolution.set(width, height));
  }

  return { cars, tails, restyle, setResolution, settled };
}

export function createCarState() {
  return {
    pose: {},
    place: { x: 0, y: 0, z: 0, pitch: 0, heading: 0 },
    last: { x: Infinity, y: 0, z: 0, heading: NaN },
  };
}

/**
 * Place every car for this frame from the shared clock: position on its own line at its own fraction, height and
 * pitch from the road, heading along its line. Returns whether anything moved and the first two cars' places
 * (the cameras follow them).
 */
export function placeCars({ sceneState, fractions, time, pathTimes, showTails }) {
  const { cars, driverPaths, centreline, carStates, tails } = sceneState;
  let needsRender = false;
  const places = cars.map((car, slot) => {
    const path = driverPaths[slot];
    if (!car || !path) return null;
    const state = carStates[slot];
    const pose = poseAt(path, fractions[slot], state.pose);
    placeOnRoad(centreline, pose, state);
    const last = state.last;
    if (
      Math.abs(last.x - pose.x) + Math.abs(last.y - state.y) + Math.abs(last.z - pose.z) > 1e-4 ||
      last.heading !== pose.heading
    ) {
      needsRender = true;
      last.x = pose.x;
      last.y = state.y;
      last.z = pose.z;
      last.heading = pose.heading;
    }
    car.position.set(pose.x, state.y, pose.z);
    // Yaw first, then pitch about the car's own side axis (nose up on a climb).
    car.rotation.set(-state.pitch, pose.heading, 0, "YXZ");
    state.place.x = pose.x;
    state.place.y = state.y;
    state.place.z = pose.z;
    state.place.pitch = state.pitch;
    state.place.heading = pose.heading;
    const tail = tails[slot];
    const show = showTails && !!pathTimes[slot]?.length;
    if (tail.line.visible !== show) {
      tail.line.visible = show;
      needsRender = true;
    }
    if (show) {
      updateTail(tail, { path, times: pathTimes[slot], time, centreline, carIndex: state.index });
      needsRender = true;
    }
    return state.place;
  });
  return { needsRender, p1: places[0], p2: places[1] };
}
