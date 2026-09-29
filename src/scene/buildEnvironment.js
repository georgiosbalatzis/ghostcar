import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

// Deliberately plain: lights only. The scene background is the page colour, so the track sits on the page
// itself; no ground plane, sky dome, stars, glow or grid.
export function buildEnvironment({ scene, isDark }) {
  const ambient = new AmbientLight();
  const sun = new DirectionalLight();
  sun.position.set(40, 80, 30);
  const hemisphere = new HemisphereLight();

  // Theme change in place: only colours and intensities differ.
  function applyTheme(dark) {
    ambient.color.setHex(dark ? 0x8899bb : 0xdddde8);
    ambient.intensity = dark ? 0.4 : 1.2;
    sun.color.setHex(dark ? 0xffeedd : 0xffffff);
    sun.intensity = dark ? 0.8 : 1.4;
    hemisphere.color.setHex(dark ? 0x334466 : 0xeeeeff);
    hemisphere.groundColor.setHex(dark ? 0x111118 : 0x889988);
    hemisphere.intensity = dark ? 0.5 : 0.6;
  }
  applyTheme(isDark);
  scene.add(ambient, sun, hemisphere);
  return { applyTheme };
}
