import {
  AmbientLight,
  BufferGeometry,
  CanvasTexture,
  DirectionalLight,
  Float32BufferAttribute,
  HemisphereLight,
  Mesh,
  PlaneGeometry,
  Points,
  RepeatWrapping,
  SphereGeometry,
} from "three";
import {
  createGroundMaterial,
  createSkyMaterial,
  createStarMaterial,
  createTexturePlaneMaterial,
} from "./materials.js";

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

  if (isDark) {
    const fill = new DirectionalLight(0xff8844, 0.15);
    fill.position.set(-30, 5, -20);
    scene.add(fill);
  }
}

function createGroundGlowTexture(size) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, "rgba(30,35,60,0.5)");
  grad.addColorStop(0.5, "rgba(15,18,35,0.3)");
  grad.addColorStop(1, "rgba(8,8,18,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
}

function createGroundGridTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "rgba(255,255,255,0.03)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 512; i += 32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 512);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(512, i);
    ctx.stroke();
  }
  return new CanvasTexture(canvas);
}

function addGround({ scene, isDark, theme, isMob }) {
  const ground = new Mesh(new PlaneGeometry(500, 500), createGroundMaterial({ isDark, theme }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.2;
  scene.add(freezeObjectTransform(ground));

  if (!isDark) return;

  const glowSize = isMob ? 128 : 256;
  const glowTex = createGroundGlowTexture(glowSize);
  const glowPlane = new Mesh(new PlaneGeometry(200, 200, 1, 1), createTexturePlaneMaterial(glowTex));
  glowPlane.rotation.x = -Math.PI / 2;
  glowPlane.position.y = -0.18;
  scene.add(freezeObjectTransform(glowPlane));

  if (isMob) return;

  const gridTex = createGroundGridTexture();
  gridTex.wrapS = gridTex.wrapT = RepeatWrapping;
  gridTex.repeat.set(12, 12);
  const gridPlane = new Mesh(new PlaneGeometry(400, 400), createTexturePlaneMaterial(gridTex));
  gridPlane.rotation.x = -Math.PI / 2;
  gridPlane.position.y = -0.15;
  scene.add(freezeObjectTransform(gridPlane));
}

function addSky({ scene, isDark, isLowDetail }) {
  const skyGeo = new SphereGeometry(200, isLowDetail ? 20 : 48, isLowDetail ? 10 : 24);
  const skyVColors = new Float32Array(skyGeo.attributes.position.count * 3);
  for (let i = 0; i < skyGeo.attributes.position.count; i++) {
    const y = skyGeo.attributes.position.getY(i);
    const t = Math.max(0, Math.min(1, (y + 20) / 220));
    if (isDark) {
      const horizonR = 0.12;
      const horizonG = 0.06;
      const horizonB = 0.04;
      const midR = 0.04;
      const midG = 0.05;
      const midB = 0.12;
      const zenithR = 0.02;
      const zenithG = 0.02;
      const zenithB = 0.06;
      if (t < 0.15) {
        const ht = t / 0.15;
        skyVColors[i * 3] = horizonR * (1 - ht) + midR * ht;
        skyVColors[i * 3 + 1] = horizonG * (1 - ht) + midG * ht;
        skyVColors[i * 3 + 2] = horizonB * (1 - ht) + midB * ht;
      } else {
        const mt = (t - 0.15) / 0.85;
        skyVColors[i * 3] = midR * (1 - mt) + zenithR * mt;
        skyVColors[i * 3 + 1] = midG * (1 - mt) + zenithG * mt;
        skyVColors[i * 3 + 2] = midB * (1 - mt) + zenithB * mt;
      }
    } else {
      skyVColors[i * 3] = 0.85 + t * 0.1;
      skyVColors[i * 3 + 1] = 0.88 + t * 0.08;
      skyVColors[i * 3 + 2] = 0.95 + t * 0.05;
    }
  }
  skyGeo.setAttribute("color", new Float32BufferAttribute(skyVColors, 3));
  scene.add(freezeObjectTransform(new Mesh(skyGeo, createSkyMaterial())));
}

function addStars({ scene, isDark, isLowDetail }) {
  if (!isDark) return null;

  const starCount = isLowDetail ? 160 : 600;
  const starPos = new Float32Array(starCount * 3);
  const starAlphas = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.45 + 0.1;
    const r = 195;
    starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starPos[i * 3 + 1] = r * Math.cos(phi);
    starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    starAlphas[i] = 0.3 + Math.random() * 0.7;
  }

  const starGeo = new BufferGeometry();
  starGeo.setAttribute("position", new Float32BufferAttribute(starPos, 3));
  starGeo.setAttribute("alpha", new Float32BufferAttribute(starAlphas, 1));
  const starMaterial = createStarMaterial();
  const stars = new Points(starGeo, starMaterial);
  scene.add(freezeObjectTransform(stars));
  return starMaterial;
}

export function buildEnvironment({ scene, isDark, theme, isMob, isLowDetail }) {
  addLighting({ scene, isDark });
  addGround({ scene, isDark, theme, isMob });
  addSky({ scene, isDark, isLowDetail });
  const starMaterial = addStars({ scene, isDark, isLowDetail });

  return { starMaterial };
}
