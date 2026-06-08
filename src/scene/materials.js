import {
  BackSide,
  Color,
  DoubleSide,
  LineBasicMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  ShaderMaterial,
  SpriteMaterial,
} from "three";

export function createVertexColorLineMaterial(opacity = 1) {
  return new LineBasicMaterial({ vertexColors: true, transparent: opacity < 1, opacity });
}

export function createGroundMaterial({ isDark, theme }) {
  return isDark
    ? new MeshStandardMaterial({ color: 0x0a0a14, roughness: 0.95, metalness: 0.05 })
    : new MeshBasicMaterial({ color: theme.groundColor });
}

export function createTexturePlaneMaterial(map) {
  return new MeshBasicMaterial({ map, transparent: true, depthWrite: false });
}

export function createSkyMaterial() {
  return new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false });
}

export function createStarMaterial() {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `attribute float alpha; varying float vAlpha; uniform float uTime; void main() { vAlpha = alpha * (0.6 + 0.4 * sin(uTime * 0.5 + position.x * 0.1)); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = alpha * 2.5; }`,
    fragmentShader: `varying float vAlpha; void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard; gl_FragColor = vec4(0.8, 0.85, 1.0, vAlpha * (1.0 - d * d)); }`,
  });
}

export function createTrackRibbonMaterial({ isDark, theme }) {
  return isDark
    ? new MeshStandardMaterial({ color: theme.trackColor, roughness: 0.8, metalness: 0.1, side: DoubleSide })
    : new MeshBasicMaterial({ color: theme.trackColor, side: DoubleSide });
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
  return new SpriteMaterial({ map, transparent: true, depthWrite: false });
}

export function createSectorMarkerMaterial(isLowDetail) {
  return new MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: isLowDetail ? 0.72 : 0.82,
    side: DoubleSide,
    depthWrite: false,
  });
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

export function createCarGlowMaterial({ color, isGhost }) {
  return new MeshBasicMaterial({
    color,
    transparent: true,
    opacity: isGhost ? 0.05 : 0.025,
    side: DoubleSide,
    depthWrite: false,
  });
}

export function createCarPoleMaterial(color) {
  return new LineBasicMaterial({ color, transparent: true, opacity: 0.5 });
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
