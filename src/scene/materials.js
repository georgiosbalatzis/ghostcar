import {
  CanvasTexture,
  Color,
  DoubleSide,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  NearestFilter,
  ShaderMaterial,
  SpriteMaterial,
  SRGBColorSpace,
} from "three";

// Road, run-off and skirts are lit, so the relief reads; the colours come from sceneTheme.js.
export function createRoadMaterial(color) {
  return new MeshStandardMaterial({ color, roughness: 0.95, metalness: 0, side: DoubleSide, envMapIntensity: 0.25 });
}

// Paint and the start line sit on the road: polygon offset wins the depth test at any distance.
export function createPaintMaterial(color) {
  return new MeshBasicMaterial({
    color,
    side: DoubleSide,
    toneMapped: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
}

export function createTrackOverlayMaterial(opacity) {
  return new MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity,
    side: DoubleSide,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
}

// The chequered start strip: 8 × 2 squares, redrawn when the theme changes.
export function createStartStripMaterial() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 16;
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.magFilter = NearestFilter;
  const material = createPaintMaterial(0xffffff);
  material.map = texture;
  material.userData.draw = (a, b) => {
    const ctx = canvas.getContext("2d");
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 8; col++) {
        ctx.fillStyle = `#${new Color((row + col) % 2 ? a : b).getHexString()}`;
        ctx.fillRect(col * 8, row * 8, 8, 8);
      }
    }
    texture.needsUpdate = true;
  };
  return material;
}

export function createSpriteLabelMaterial(map) {
  // Not tone-mapped: the plate shows the exact driver colour and page-white text, like the 2D labels.
  return new SpriteMaterial({ map, transparent: true, depthWrite: false, sizeAttenuation: false, toneMapped: false });
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

export function createTrailMaterial({ color, ghost }) {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uColor: { value: new Color(color) } },
    vertexShader: `attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }`,
    fragmentShader: `uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${ghost ? "0.3" : "0.55"}); }`,
  });
}
