import {
  CanvasTexture,
  Color,
  DoubleSide,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  NearestFilter,
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

// A soft car-shaped shadow: black with a gradient alpha (shadowTexture), on the road under the car.
export function createShadowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  // A rounded rectangle (the car seen from above) blurred by drawing it many times, ever smaller and fainter.
  for (let i = 0; i < 12; i++) {
    const inset = 4 + i * 2.6;
    ctx.fillStyle = "rgba(0,0,0,0.11)";
    ctx.beginPath();
    ctx.roundRect(inset, inset * 0.5, 128 - 2 * inset, 64 - inset, 14);
    ctx.fill();
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

export function createCarShadowMaterial(map) {
  return new MeshBasicMaterial({
    map,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
    toneMapped: false,
    polygonOffset: true,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -3,
  });
}

// Writes only depth, a little behind the ghost: the translucent pass then draws just its front surface.
export function createGhostPrepassMaterial() {
  return new MeshBasicMaterial({
    colorWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
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
