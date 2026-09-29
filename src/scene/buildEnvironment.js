import {
  Color,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MathUtils,
  PlaneGeometry,
  PMREMGenerator,
  ShaderMaterial,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { SCENE_THEME } from "./sceneTheme.js";

// A 100 m grid (a heavier line every 500 m) on a ground the colour of the page, fading out with distance from
// the circuit, so scale and height are readable and there is no visible horizon edge. Lines also fade before
// they get closer than a few pixels, so the grid never shimmers.
const GROUND_VERTEX = `
  varying vec3 vWorld;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`;
const GROUND_FRAGMENT = `
  varying vec3 vWorld;
  uniform vec3 uGround;
  uniform vec3 uMinor;
  uniform vec3 uMajor;
  uniform float uRadius;
  uniform float uMinorOn;
  float gridLine(vec2 p, float size) {
    vec2 q = p / size;
    vec2 fw = fwidth(q);
    vec2 d = abs(fract(q - 0.5) - 0.5) / max(fw, vec2(1e-5));
    float line = 1.0 - min(min(d.x, d.y), 1.0);
    return line * (1.0 - smoothstep(0.08, 0.35, max(fw.x, fw.y)));
  }
  void main() {
    float reach = 1.0 - smoothstep(0.7 * uRadius, uRadius, length(vWorld.xz));
    vec3 col = mix(uGround, uMinor, gridLine(vWorld.xz, 100.0) * reach * uMinorOn);
    col = mix(col, uMajor, gridLine(vWorld.xz, 500.0) * reach);
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;

// Sun at 50° elevation from the south-east: the same light in both themes, only its strength differs.
const SUN_DIRECTION = (() => {
  const elevation = MathUtils.degToRad(50);
  const azimuth = MathUtils.degToRad(135);
  return [Math.cos(elevation) * Math.sin(azimuth), Math.sin(elevation), Math.cos(elevation) * Math.cos(azimuth)];
})();

export function buildEnvironment({ scene, renderer, isDark, bounds, groundY }) {
  const extent = Math.max(bounds.width, bounds.depth, 200);
  const ground = new Mesh(
    new PlaneGeometry(6 * extent, 6 * extent),
    new ShaderMaterial({
      vertexShader: GROUND_VERTEX,
      fragmentShader: GROUND_FRAGMENT,
      uniforms: {
        uGround: { value: new Color() },
        uMinor: { value: new Color() },
        uMajor: { value: new Color() },
        uRadius: { value: 1.6 * extent },
        uMinorOn: { value: 1 },
      },
    })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = groundY;
  ground.updateMatrix();
  ground.matrixAutoUpdate = false;

  // Reflections for the cars and a soft fill from every direction, from a small studio-style room.
  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  room.dispose?.();
  pmrem.dispose();

  const sun = new DirectionalLight();
  sun.position.set(...SUN_DIRECTION).multiplyScalar(bounds.diagonal);
  const hemisphere = new HemisphereLight();
  scene.add(ground, sun, hemisphere);

  // Theme change in place: only colours and strengths differ.
  function applyTheme(dark) {
    const theme = dark ? SCENE_THEME.dark : SCENE_THEME.light;
    ground.material.uniforms.uGround.value.setHex(theme.ground);
    ground.material.uniforms.uMinor.value.setHex(theme.gridMinor);
    ground.material.uniforms.uMajor.value.setHex(theme.gridMajor);
    // Lit like a physical scene: a surface facing up under the sun (2.4 × sin 50°) and the sky (1.3) receives
    // about π, which renders an albedo as itself, so the road keeps the palette's colour in both themes. The
    // hemisphere's ground colour is what a vertical face gets from below: the skirts read darker than the road.
    sun.color.setHex(0xffffff);
    sun.intensity = 2.4;
    hemisphere.color.setHex(0xffffff);
    hemisphere.groundColor.setHex(dark ? 0x606060 : 0x808080);
    hemisphere.intensity = 1.3;
  }
  applyTheme(isDark);
  // Quality tier 1 and up drops the fine grid, the busiest thing on the ground.
  const setDetail = (full) => {
    ground.material.uniforms.uMinorOn.value = full ? 1 : 0;
  };
  return {
    applyTheme,
    setDetail,
    dispose: () => {
      scene.environment?.dispose();
      scene.environment = null;
      ground.geometry.dispose();
      ground.material.dispose();
    },
  };
}
