import { AmbientLight, DirectionalLight, HemisphereLight, Mesh, PlaneGeometry } from "three";
import { createGroundMaterial } from "./materials.js";

function freezeObjectTransform(object) {
  if (!object) return object;
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

function addLighting({ scene, isDark }) {
  scene.add(new AmbientLight(isDark ? 0x8899bb : 0xdddde8, isDark ? 0.4 : 1.2));

  const sun = new DirectionalLight(isDark ? 0xffeedd : 0xffffff, isDark ? 0.8 : 1.4);
  sun.position.set(40, 80, 30);
  scene.add(sun);

  scene.add(new HemisphereLight(isDark ? 0x334466 : 0xeeeeff, isDark ? 0x111118 : 0x889988, isDark ? 0.5 : 0.6));
}

function addGround({ scene, isDark, theme }) {
  const ground = new Mesh(new PlaneGeometry(500, 500), createGroundMaterial({ isDark, theme }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.2;
  scene.add(freezeObjectTransform(ground));
}

// Deliberately plain: lights and a ground plane under the track. No sky dome, stars, glow or grid.
export function buildEnvironment({ scene, isDark, theme }) {
  addLighting({ scene, isDark });
  addGround({ scene, isDark, theme });
}
