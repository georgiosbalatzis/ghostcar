import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

// Deliberately plain: lights only. The scene background is the page colour, so the track sits on the page
// itself; no ground plane, sky dome, stars, glow or grid.
export function buildEnvironment({ scene, isDark }) {
  scene.add(new AmbientLight(isDark ? 0x8899bb : 0xdddde8, isDark ? 0.4 : 1.2));

  const sun = new DirectionalLight(isDark ? 0xffeedd : 0xffffff, isDark ? 0.8 : 1.4);
  sun.position.set(40, 80, 30);
  scene.add(sun);

  scene.add(new HemisphereLight(isDark ? 0x334466 : 0xeeeeff, isDark ? 0x111118 : 0x889988, isDark ? 0.5 : 0.6));
}
