import {
  Color,
  DoubleSide,
  LineBasicMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  ShaderMaterial,
  SpriteMaterial,
} from "three";

export function createVertexColorLineMaterial(opacity = 1) {
  return new LineBasicMaterial({ vertexColors: true, transparent: opacity < 1, opacity });
}

// The road is flat, unlit and not tone-mapped, so the canvas matches the page tokens exactly.
export function createTrackRibbonMaterial({ theme }) {
  return new MeshBasicMaterial({ color: theme.trackColor, side: DoubleSide, toneMapped: false });
}

export function createTrackOverlayMaterial(opacity) {
  return new MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity,
    side: DoubleSide,
    depthWrite: false,
  });
}

export function createSpriteLabelMaterial(map) {
  // Not tone-mapped: the plate shows the exact driver colour and page-white text, like the 2D labels.
  return new SpriteMaterial({ map, transparent: true, depthWrite: false, sizeAttenuation: false, toneMapped: false });
}

export function createStartLineMaterial() {
  return new LineBasicMaterial({ color: 0xffffff });
}

export function createCarShadowMaterial() {
  return new MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.2,
    side: DoubleSide,
    depthWrite: false,
  });
}

export function createFallbackCarMaterial({ color, isGhost }) {
  return new MeshPhongMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.2,
    transparent: isGhost,
    opacity: isGhost ? 0.5 : 1,
  });
}

export function createDeltaLineMaterial() {
  return new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
}

export function createRacingLineMaterial() {
  return new LineBasicMaterial({ color: 0x44aaff, transparent: true, opacity: 0.12 });
}

export function createTrailMaterial({ color, ghost }) {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uColor: { value: new Color(color) } },
    vertexShader: `attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }`,
    fragmentShader: `uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${ghost ? "0.3" : "0.55"}); }`,
  });
}
