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
  Line,
  Mesh,
  Points,
  Sprite,
  Vector3,
} from "three";
import { disposeScene } from "./createRenderer.js";
import {
  createCarPoleMaterial,
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

function makeCarGroup({ color, label, isGhost, isLowDetail, tier = 0 }) {
  const group = new Group();
  const carColor = new Color(color);
  // Each slot's label sits at its own height so labels of cars running together never overlap.
  const labelHeight = 2.3 + tier * 1.8;

  const shadow = new Mesh(new CircleGeometry(1.0, 24), createCarShadowMaterial());
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  group.add(freezeObjectTransform(shadow));

  if (label && !isLowDetail) {
    const poleGeo = new BufferGeometry().setFromPoints([new Vector3(0, 0.3, 0), new Vector3(0, labelHeight - 0.3, 0)]);
    const pole = new Line(poleGeo, createCarPoleMaterial(carColor));
    group.add(freezeObjectTransform(pole));

    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
    // Flat label plate: page colour, a narrow driver-colour key, the acronym in the UI face.
    ctx.fillStyle = "rgba(12,14,15,0.88)";
    ctx.fillRect(0, 0, 200, 80);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 10, 80);
    ctx.fillStyle = "#f1efea";
    ctx.font = '600 40px "IBM Plex Sans", system-ui, sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 106, 42);

    const texture = new CanvasTexture(canvas);
    const sprite = new Sprite(createSpriteLabelMaterial(texture));
    sprite.position.set(0, labelHeight, 0);
    sprite.scale.set(2.8, 1.1, 1);
    group.add(freezeObjectTransform(sprite));
  }

  group.userData = { color, isGhost, modelLoaded: false };
  return group;
}

function addFallbackCars(carGroups) {
  carGroups.filter(Boolean).forEach((group) => {
    if (group.userData.modelLoaded) return;
    const color = new Color(group.userData.color);
    const mesh = new Mesh(
      new BoxGeometry(0.4, 0.15, 1.2),
      createFallbackCarMaterial({ color, isGhost: group.userData.isGhost })
    );
    mesh.position.y = 0.15;
    group.add(freezeObjectTransform(mesh));
    group.userData.modelLoaded = true;
  });
}

function applyModelToCar(template, carGroup) {
  if (!carGroup) return;
  const clone = template.clone(true);
  const modelScale = 0.12;
  clone.scale.set(modelScale, modelScale, modelScale);

  const box = new Box3().setFromObject(clone);
  const center = box.getCenter(new Vector3());
  clone.position.set(-center.x, -box.min.y + 0.02, -center.z);

  const color = new Color(carGroup.userData.color);
  const isGhost = carGroup.userData.isGhost;
  clone.traverse((child) => {
    if (child.isMesh && child.material) {
      try {
        const mat = child.material.clone();
        const name = (mat.name || "").toLowerCase();
        if (name.includes("base") || name.includes("2nd") || name.includes("bloody") || name.includes("red")) {
          mat.color.copy(color);
          if (mat.emissive) {
            mat.emissive.copy(color);
            mat.emissiveIntensity = isGhost ? 0.4 : 0.15;
          }
        } else if (name.includes("3rd")) {
          mat.color.copy(color).multiplyScalar(0.6);
          if (mat.emissive) {
            mat.emissive.copy(color);
            mat.emissiveIntensity = 0.1;
          }
        } else if (name.includes("mirror")) {
          mat.color.setHex(0x888888);
        }
        if (isGhost) {
          mat.transparent = true;
          mat.opacity = 0.5;
        }
        child.material = mat;
      } catch {
        // Keep original imported material if the GLTF child is not cloneable.
      }
    }
  });

  carGroup.add(clone);
  carGroup.userData.modelLoaded = true;
}

function loadDetailedCarModels({ carGroups, isActive, isContextLost }) {
  const basePath = (import.meta.env.BASE_URL || "/") + "f1car.glb";
  Promise.all([
    import("three/examples/jsm/loaders/GLTFLoader.js"),
    import("three/examples/jsm/libs/meshopt_decoder.module.js"),
  ])
    .then(([{ GLTFLoader }, { MeshoptDecoder }]) => {
      if (!isActive() || isContextLost()) return;
      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);
      loader.load(
        basePath,
        (gltf) => {
          if (!isActive()) {
            disposeScene(gltf.scene);
            return;
          }
          const template = gltf.scene;
          carGroups.forEach((carGroup) => applyModelToCar(template, carGroup));
        },
        undefined,
        () => {
          if (!isActive()) return;
          addFallbackCars(carGroups);
        }
      );
    })
    .catch(() => {
      if (!isActive()) return;
      addFallbackCars(carGroups);
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
  isLowDetail,
  isMob,
  l3,
  l4,
  c1,
  c2,
  c3,
  c4,
  lab1,
  lab2,
  lab3,
  lab4,
  isActive = () => true,
  isContextLost = () => false,
}) {
  const car1 = makeCarGroup({ color: c1, label: lab1, isGhost: false, isLowDetail });
  const car2 = makeCarGroup({ color: c2, label: lab2, isGhost: true, isLowDetail, tier: 1 });
  scene.add(car1);
  scene.add(car2);

  const car3 =
    l3?.length > 0 && lab3 ? makeCarGroup({ color: c3, label: lab3, isGhost: true, isLowDetail, tier: 2 }) : null;
  const car4 =
    l4?.length > 0 && lab4 ? makeCarGroup({ color: c4, label: lab4, isGhost: true, isLowDetail, tier: 3 }) : null;
  if (car3) scene.add(car3);
  if (car4) scene.add(car4);

  const carGroups = [car1, car2, car3, car4];
  const shouldLoadDetailedCars = true;
  if (shouldLoadDetailedCars) {
    loadDetailedCarModels({ carGroups, isActive, isContextLost });
  } else {
    addFallbackCars(carGroups);
  }

  const tr1 = makeTrail({ scene, color: c1, ghost: false, isMob });
  const tr2 = makeTrail({ scene, color: c2, ghost: true, isMob });
  const tr3 = car3 ? makeTrail({ scene, color: c3, ghost: true, isMob }) : null;
  const tr4 = car4 ? makeTrail({ scene, color: c4, ghost: true, isMob }) : null;

  return { car1, car2, car3, car4, tr1, tr2, tr3, tr4 };
}
