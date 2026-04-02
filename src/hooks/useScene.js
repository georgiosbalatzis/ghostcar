import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { F1_DARK, F1_LIGHT } from "../constants.js";
import { lerp, norm } from "../helpers.js";

function getSceneSupportError() {
  if (typeof window === "undefined") return "";
  if (!window.WebGLRenderingContext) return "This browser does not support WebGL.";
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return gl ? "" : "WebGL is disabled or unavailable on this device.";
  } catch {
    return "WebGL is disabled or unavailable on this device.";
  }
}

function formatSceneError(error) {
  const message = error instanceof Error ? error.message : String(error || "");
  if (!message) return "Unable to start the 3D scene.";
  if (/webgl|context/i.test(message)) return message;
  return `Unable to start the 3D scene. ${message}`;
}

export default function useScene(ref, tp, l1, l2, progRef, c1, c2, cam, lab1, lab2, telData1, vizMode, isDark, l3, l4, c3, c4, lab3, lab4, onError) {
  const R = useRef({}); const CS = useRef({ angle: 0, pitch: 0.6, dist: 55, drag: false, lx: 0, ly: 0, cinT: 0 }); const cmRef = useRef(cam);
  const camTargetPos = useRef(new THREE.Vector3(40, 30, 40));
  const camTargetLook = useRef(new THREE.Vector3(0, 0, 0));
  const n1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const n2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  const n3 = useMemo(() => l3 ? norm(l3) : null, [l3]); const n4 = useMemo(() => l4 ? norm(l4) : null, [l4]);
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);
  const brakeArr = useMemo(() => telData1?.map((t) => t.brake > 0 ? 1 : 0) || [], [telData1]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !tp || tp.length < 10) {
      onError?.("");
      return;
    }

    const supportError = getSceneSupportError();
    if (supportError) {
      onError?.(supportError);
      return;
    }

    let ren;
    let de;
    let rt;
    let contextLost = false;
    let onContextLost;

    const clearRenderer = () => {
      if (R.current.fr) cancelAnimationFrame(R.current.fr);
      if (de && onContextLost) de.removeEventListener("webglcontextlost", onContextLost);
      if (ren) ren.dispose();
      if (el && ren?.domElement && el.contains(ren.domElement)) el.removeChild(ren.domElement);
    };

    const fail = (error) => {
      clearRenderer();
      onError?.(formatSceneError(error));
    };

    if (R.current.ren) { R.current.ren.dispose(); if (el.contains(R.current.ren.domElement)) el.removeChild(R.current.ren.domElement); }
    if (R.current.fr) cancelAnimationFrame(R.current.fr);

    try {
      const w = Math.max(el.clientWidth, 1), h = Math.max(el.clientHeight, 1);
      const isMob = w < 768;
      const scene = new THREE.Scene();
      const T = isDark ? F1_DARK : F1_LIGHT;

      if (isDark) {
        scene.background = new THREE.Color(0x080812);
        scene.fog = new THREE.FogExp2(0x080812, 0.006);
      } else {
        scene.background = new THREE.Color(T.sceneBg);
        scene.fog = new THREE.Fog(T.sceneBg, 120, 350);
      }

      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
      ren = new THREE.WebGLRenderer({ antialias: !isMob, preserveDrawingBuffer: true });
      ren.setSize(w, h); ren.setPixelRatio(Math.min(window.devicePixelRatio, isMob ? 1.5 : 2));
      ren.toneMapping = THREE.ACESFilmicToneMapping;
      ren.toneMappingExposure = isDark ? 1.1 : 1.0;
      el.appendChild(ren.domElement);
      de = ren.domElement;
      onContextLost = (event) => {
        event.preventDefault();
        contextLost = true;
        fail("WebGL context was lost. Reload the page or enable hardware acceleration.");
      };
      de.addEventListener("webglcontextlost", onContextLost, false);
      onError?.("");

      // Lighting — cinematic night race feel
      scene.add(new THREE.AmbientLight(isDark ? 0x8899bb : 0xdddde8, isDark ? 0.4 : 1.2));
      const sun = new THREE.DirectionalLight(isDark ? 0xffeedd : 0xffffff, isDark ? 0.8 : 1.4);
      sun.position.set(40, 80, 30); scene.add(sun);
      scene.add(new THREE.HemisphereLight(isDark ? 0x334466 : 0xeeeeff, isDark ? 0x111118 : 0x889988, isDark ? 0.5 : 0.6));
      // Warm fill light from below-horizon (simulates floodlight bounce)
      if (isDark) {
        const fill = new THREE.DirectionalLight(0xff8844, 0.15);
        fill.position.set(-30, 5, -20); scene.add(fill);
      }

    // ─── Ground — layered for depth ───
    // Base ground (dark)
    const groundMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0a0a14 : T.groundColor,
      roughness: 0.95, metalness: 0.05
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.2; scene.add(ground);

    // Lit area around track — soft radial glow on the ground
    if (isDark) {
      const glowSize = isMob ? 128 : 256;
      const glowGeo = new THREE.PlaneGeometry(200, 200, 1, 1);
      const glowTex = (() => {
        const cv = document.createElement("canvas"); cv.width = glowSize; cv.height = glowSize;
        const ctx = cv.getContext("2d");
        const half = glowSize / 2;
        const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
        grad.addColorStop(0, "rgba(30,35,60,0.5)");
        grad.addColorStop(0.5, "rgba(15,18,35,0.3)");
        grad.addColorStop(1, "rgba(8,8,18,0)");
        ctx.fillStyle = grad; ctx.fillRect(0, 0, glowSize, glowSize);
        return new THREE.CanvasTexture(cv);
      })();
      const glowPlane = new THREE.Mesh(glowGeo, new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false }));
      glowPlane.rotation.x = -Math.PI / 2; glowPlane.position.y = -0.18; scene.add(glowPlane);

      // Subtle grid lines — skip on mobile (saves a 512×512 canvas + draw calls)
      if (!isMob) {
        const gridTex = (() => {
          const cv = document.createElement("canvas"); cv.width = 512; cv.height = 512;
          const ctx = cv.getContext("2d");
          ctx.strokeStyle = "rgba(255,255,255,0.03)"; ctx.lineWidth = 1;
          for (let i = 0; i <= 512; i += 32) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
          }
          return new THREE.CanvasTexture(cv);
        })();
        gridTex.wrapS = gridTex.wrapT = THREE.RepeatWrapping;
        gridTex.repeat.set(12, 12);
        const gridPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(400, 400),
          new THREE.MeshBasicMaterial({ map: gridTex, transparent: true, depthWrite: false })
        );
        gridPlane.rotation.x = -Math.PI / 2; gridPlane.position.y = -0.15; scene.add(gridPlane);
      }
    }

    // ─── Sky dome — rich gradient with stars ───
    const skyGeo = new THREE.SphereGeometry(200, isMob ? 24 : 48, isMob ? 12 : 24);
    const skyVColors = new Float32Array(skyGeo.attributes.position.count * 3);
    for (let i = 0; i < skyGeo.attributes.position.count; i++) {
      const y = skyGeo.attributes.position.getY(i);
      const t = Math.max(0, Math.min(1, (y + 20) / 220));
      if (isDark) {
        // Horizon: warm amber → mid: deep navy → zenith: near-black with blue tint
        const horizonR = 0.12, horizonG = 0.06, horizonB = 0.04;
        const midR = 0.04, midG = 0.05, midB = 0.12;
        const zenithR = 0.02, zenithG = 0.02, zenithB = 0.06;
        if (t < 0.15) {
          // Horizon glow band
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
        // Light mode: soft white-blue gradient
        skyVColors[i * 3] = 0.85 + t * 0.1;
        skyVColors[i * 3 + 1] = 0.88 + t * 0.08;
        skyVColors[i * 3 + 2] = 0.95 + t * 0.05;
      }
    }
    skyGeo.setAttribute("color", new THREE.Float32BufferAttribute(skyVColors, 3));
    scene.add(new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false })));

    // Stars (dark mode only)
    if (isDark) {
      const starCount = isMob ? 250 : 600;
      const starPos = new Float32Array(starCount * 3);
      const starAlphas = new Float32Array(starCount);
      for (let i = 0; i < starCount; i++) {
        // Distribute on upper hemisphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.45 + 0.1; // above horizon
        const r = 195;
        starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        starPos[i * 3 + 1] = r * Math.cos(phi);
        starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        starAlphas[i] = 0.3 + Math.random() * 0.7;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
      starGeo.setAttribute("alpha", new THREE.Float32BufferAttribute(starAlphas, 1));
      const starMat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, fog: false,
        uniforms: { uTime: { value: 0 } },
        vertexShader: `attribute float alpha; varying float vAlpha; uniform float uTime; void main() { vAlpha = alpha * (0.6 + 0.4 * sin(uTime * 0.5 + position.x * 0.1)); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = alpha * 2.5; }`,
        fragmentShader: `varying float vAlpha; void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard; gl_FragColor = vec4(0.8, 0.85, 1.0, vAlpha * (1.0 - d * d)); }`,
      });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);
      // Store for animation
      R.current._starMat = starMat;
    }

    const curve = new THREE.CatmullRomCurve3(tp.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true);
    const seg = Math.min(tp.length * 3, 800);
    const trackW = 2.0;

    const curvePts = curve.getPoints(seg);
    const ribbonPos = [], ribbonNorm = [], ribbonIdx = [];
    const leftEdgePts = [], rightEdgePts = [];
    const tangents = curvePts.map((_, i) => {
      const next = curvePts[(i + 1) % curvePts.length];
      const prev = curvePts[(i - 1 + curvePts.length) % curvePts.length];
      return new THREE.Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
    });
    for (let i = 0; i < curvePts.length; i++) {
      const p = curvePts[i], tan = tangents[i];
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const L = new THREE.Vector3(p.x + perp.x * trackW / 2, p.y, p.z + perp.z * trackW / 2);
      const Ri = new THREE.Vector3(p.x - perp.x * trackW / 2, p.y, p.z - perp.z * trackW / 2);
      ribbonPos.push(L.x, L.y, L.z, Ri.x, Ri.y, Ri.z);
      ribbonNorm.push(0, 1, 0, 0, 1, 0);
      leftEdgePts.push(new THREE.Vector3(L.x, L.y + 0.02, L.z));
      rightEdgePts.push(new THREE.Vector3(Ri.x, Ri.y + 0.02, Ri.z));
      if (i < curvePts.length - 1) { const v = i * 2; ribbonIdx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3); }
    }
    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(ribbonPos, 3));
    ribbonGeo.setAttribute("normal", new THREE.Float32BufferAttribute(ribbonNorm, 3));
    ribbonGeo.setIndex(ribbonIdx);
    scene.add(new THREE.Mesh(ribbonGeo, new THREE.MeshStandardMaterial({ color: T.trackColor, roughness: 0.8, metalness: 0.1, side: THREE.DoubleSide })));

    if (vizMode === "heatmap" && speedArr.length > 10) {
      const heatColors = new Float32Array((curvePts.length * 2) * 3);
      for (let i = 0; i < curvePts.length; i++) {
        const t = i / (curvePts.length - 1);
        const si = Math.min(Math.floor(t * (speedArr.length - 1)), speedArr.length - 1);
        const ratio = Math.max(0, Math.min(1, (speedArr[si] - 50) / 300));
        let r, g, b;
        if (ratio < 0.25) { r = 0; g = ratio * 4; b = 1; }
        else if (ratio < 0.5) { r = 0; g = 1; b = 1 - (ratio - 0.25) * 4; }
        else if (ratio < 0.75) { r = (ratio - 0.5) * 4; g = 1; b = 0; }
        else { r = 1; g = 1 - (ratio - 0.75) * 4; b = 0; }
        const vi = i * 2;
        heatColors[vi * 3] = r; heatColors[vi * 3 + 1] = g; heatColors[vi * 3 + 2] = b;
        heatColors[(vi + 1) * 3] = r; heatColors[(vi + 1) * 3 + 1] = g; heatColors[(vi + 1) * 3 + 2] = b;
      }
      const heatGeo = ribbonGeo.clone();
      heatGeo.setAttribute("color", new THREE.Float32BufferAttribute(heatColors, 3));
      const heatMesh = new THREE.Mesh(heatGeo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }));
      heatMesh.position.y += 0.01; scene.add(heatMesh);
    }

    // Brake heatmap overlay
    if (vizMode === "brake" && brakeArr.length > 10) {
      const brakeColors = new Float32Array((curvePts.length * 2) * 3);
      for (let i = 0; i < curvePts.length; i++) {
        const t = i / (curvePts.length - 1);
        const si = Math.min(Math.floor(t * (brakeArr.length - 1)), brakeArr.length - 1);
        // Sample a small window around the point for smoother visualization
        let brakeVal = 0;
        for (let w = -2; w <= 2; w++) {
          const wi = Math.max(0, Math.min(brakeArr.length - 1, si + w));
          brakeVal += brakeArr[wi];
        }
        brakeVal /= 5;
        // Braking zones: red, non-braking: green/transparent
        const r = brakeVal > 0.3 ? 0.9 : 0.0;
        const g = brakeVal > 0.3 ? 0.05 : 0.15;
        const b = brakeVal > 0.3 ? 0.05 : 0.08;
        const vi = i * 2;
        brakeColors[vi * 3] = r; brakeColors[vi * 3 + 1] = g; brakeColors[vi * 3 + 2] = b;
        brakeColors[(vi + 1) * 3] = r; brakeColors[(vi + 1) * 3 + 1] = g; brakeColors[(vi + 1) * 3 + 2] = b;
      }
      const brakeGeo = ribbonGeo.clone();
      brakeGeo.setAttribute("color", new THREE.Float32BufferAttribute(brakeColors, 3));
      const brakeMesh = new THREE.Mesh(brakeGeo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }));
      brakeMesh.position.y += 0.01; scene.add(brakeMesh);
    }

    // Edge lines colored by sector
    const sColorHex = [0x00d26a, 0xffd700, 0xe10600];
    [leftEdgePts, rightEdgePts].forEach((edgePts) => {
      const totalPts = edgePts.length;
      for (let s = 0; s < 3; s++) {
        const start = Math.floor((s / 3) * totalPts);
        const end = Math.min(Math.floor(((s + 1) / 3) * totalPts) + 1, totalPts);
        const sectorPts = edgePts.slice(start, end);
        if (sectorPts.length > 1) {
          scene.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(sectorPts),
            new THREE.LineBasicMaterial({ color: sColorHex[s], transparent: true, opacity: 0.6 })
          ));
        }
      }
    });

    const sColors = [0x00d26a, 0xffd700, 0xe10600];
    const sColorCSS = ["#00d26a", "#ffd700", "#e10600"];
    const sectorMarkers = [];
    [0, 0.33, 0.66].forEach((t, i) => {
      const sp = curve.getPointAt(t); const tan2 = curve.getTangentAt(t);
      const perp2 = new THREE.Vector3(-tan2.z, 0, tan2.x).normalize();
      const L2 = sp.clone().add(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      const R2 = sp.clone().sub(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      L2.y += 0.03; R2.y += 0.03;
      // Dashed sector line across track
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([L2, R2]), new THREE.LineBasicMaterial({ color: sColors[i], transparent: true, opacity: 0.7 })));
      // Small glowing dot on each side of the track
      [-1, 1].forEach((side) => {
        const dotGeo = new THREE.CircleGeometry(0.25, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: sColors[i], transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        const off = perp2.clone().multiplyScalar(side * (trackW / 2 + 0.15));
        dot.position.set(sp.x + off.x, sp.y + 0.04, sp.z + off.z);
        dot.rotation.x = -Math.PI / 2;
        scene.add(dot);
        sectorMarkers.push({ mesh: dot, sector: i });
      });
      // Floating "S1/S2/S3" label sprite — small, offset to the outside of the track
      const cv = document.createElement("canvas"); cv.width = 64; cv.height = 32;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = sColorCSS[i]; ctx.globalAlpha = 0.85;
      ctx.beginPath(); ctx.roundRect(0, 0, 64, 32, 6); ctx.fill();
      ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.font = "bold 20px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(`S${i + 1}`, 32, 17);
      const tex = new THREE.CanvasTexture(cv);
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      const labelOff = perp2.clone().multiplyScalar(trackW / 2 + 1.8);
      label.position.set(sp.x + labelOff.x, sp.y + 1.0, sp.z + labelOff.z);
      label.scale.set(1.0, 0.5, 1);
      scene.add(label);
    });

    const corners = []; const cSamp = 250;
    for (let i = 0; i < cSamp - 2; i++) {
      const t0 = i / cSamp, t1 = (i + 1) / cSamp, t2 = (i + 2) / cSamp;
      const p0 = curve.getPointAt(t0), p1c = curve.getPointAt(t1), p2c = curve.getPointAt(t2);
      const cross = Math.abs((p1c.x - p0.x) * (p2c.z - p1c.z) - (p1c.z - p0.z) * (p2c.x - p1c.x));
      if (cross > 0.12 && (corners.length === 0 || Math.abs(t1 - corners[corners.length - 1].t) > 0.035)) corners.push({ t: t1, p: p1c });
    }
    corners.slice(0, 20).forEach((c, i) => {
      const cv = document.createElement("canvas"); cv.width = 48; cv.height = 48;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = "rgba(225,6,0,0.75)"; ctx.beginPath(); ctx.arc(24, 24, 20, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "bold 22px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(`${i + 1}`, 24, 25);
      const tex = new THREE.CanvasTexture(cv);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      const tan3 = curve.getTangentAt(c.t); const perp3 = new THREE.Vector3(-tan3.z, 0, tan3.x).normalize();
      const off = perp3.clone().multiplyScalar(trackW / 2 + 1.5);
      sp.position.set(c.p.x + off.x, c.p.y + 1.5, c.p.z + off.z); sp.scale.set(1.3, 1.3, 1); scene.add(sp);
    });

    const sf = curve.getPointAt(0), sfTan = curve.getTangentAt(0);
    const sfPerp = new THREE.Vector3(-sfTan.z, 0, sfTan.x).normalize();
    const sfL = sf.clone().add(sfPerp.clone().multiplyScalar(trackW / 2)); sfL.y += 0.03;
    const sfR = sf.clone().sub(sfPerp.clone().multiplyScalar(trackW / 2)); sfR.y += 0.03;
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([sfL, sfR]), new THREE.LineBasicMaterial({ color: 0xffffff })));

    function makeCarGroup(color, label, isGhost) {
      const g = new THREE.Group(); const col = new THREE.Color(color);
      const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.0, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false }));
      shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.01; g.add(shadow);
      const glow = new THREE.Mesh(new THREE.CircleGeometry(1.3, 16), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: isGhost ? 0.05 : 0.025, side: THREE.DoubleSide, depthWrite: false }));
      glow.rotation.x = -Math.PI / 2; glow.position.y = 0.005; g.add(glow);
      const carLight = new THREE.PointLight(col, isGhost ? 0.5 : 0.25, 8); carLight.position.set(0, 0.3, 0); g.add(carLight);
      if (label) {
        // Vertical pole line from car to flag
        const poleGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(0, 2.0, 0)]);
        const pole = new THREE.Line(poleGeo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.5 }));
        g.add(pole);
        // Flag-style name badge — tall, bold, high contrast
        const cv = document.createElement("canvas"); cv.width = 200; cv.height = 80; const ctx = cv.getContext("2d");
        // Dark background pill
        ctx.fillStyle = "#000"; ctx.globalAlpha = 0.85;
        ctx.beginPath(); const r2 = 10; ctx.moveTo(r2, 0); ctx.lineTo(200 - r2, 0); ctx.quadraticCurveTo(200, 0, 200, r2); ctx.lineTo(200, 80 - r2); ctx.quadraticCurveTo(200, 80, 200 - r2, 80); ctx.lineTo(r2, 80); ctx.quadraticCurveTo(0, 80, 0, 80 - r2); ctx.lineTo(0, r2); ctx.quadraticCurveTo(0, 0, r2, 0); ctx.fill();
        // Team color left accent bar
        ctx.globalAlpha = 1; ctx.fillStyle = color; ctx.fillRect(0, 0, 8, 80);
        // Team color top strip
        ctx.fillStyle = color; ctx.fillRect(8, 0, 192, 4);
        // Driver name — large bold white
        ctx.fillStyle = "#fff"; ctx.font = "bold 42px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(label, 104, 44);
        const tex = new THREE.CanvasTexture(cv);
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
        sp.position.set(0, 2.3, 0); sp.scale.set(2.8, 1.1, 1); g.add(sp);
      }
      g.userData = { color, isGhost, modelLoaded: false }; return g;
    }

    const car1 = makeCarGroup(c1, lab1, false); const car2 = makeCarGroup(c2, lab2, true);
    scene.add(car1); scene.add(car2);
    const car3 = l3?.length > 0 && lab3 ? makeCarGroup(c3, lab3, true) : null;
    const car4 = l4?.length > 0 && lab4 ? makeCarGroup(c4, lab4, true) : null;
    if (car3) scene.add(car3); if (car4) scene.add(car4);

      const loader = new GLTFLoader();
      const basePath = (import.meta.env.BASE_URL || "/") + "f1car.glb";
      loader.load(basePath, (gltf) => {
        const template = gltf.scene; const modelScale = 0.12;
        function applyModel(carGroup) {
          if (!carGroup) return;
          const clone = template.clone(true); clone.scale.set(modelScale, modelScale, modelScale);
          const box = new THREE.Box3().setFromObject(clone); const center = box.getCenter(new THREE.Vector3());
          clone.position.set(-center.x, -box.min.y + 0.02, -center.z);
          const col = new THREE.Color(carGroup.userData.color); const isGhost = carGroup.userData.isGhost;
          clone.traverse((child) => {
            if (child.isMesh && child.material) {
              try {
                const mat = child.material.clone(); const name = (mat.name || "").toLowerCase();
                if (name.includes("base") || name.includes("2nd") || name.includes("bloody") || name.includes("red")) { mat.color.copy(col); if (mat.emissive) { mat.emissive.copy(col); mat.emissiveIntensity = isGhost ? 0.4 : 0.15; } }
                else if (name.includes("3rd")) { mat.color.copy(col).multiplyScalar(0.6); if (mat.emissive) { mat.emissive.copy(col); mat.emissiveIntensity = 0.1; } }
                else if (name.includes("mirror")) { mat.color.setHex(0x888888); }
                if (isGhost) { mat.transparent = true; mat.opacity = 0.5; }
                child.material = mat;
              } catch (e) { /* skip */ }
            }
          });
          carGroup.add(clone); carGroup.userData.modelLoaded = true;
        }
        applyModel(car1); applyModel(car2); applyModel(car3); applyModel(car4);
      }, undefined, () => {
        [car1, car2, car3, car4].filter(Boolean).forEach((g) => {
          const col = new THREE.Color(g.userData.color);
          const m = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 1.2), new THREE.MeshPhongMaterial({ color: col, emissive: col, emissiveIntensity: 0.2, transparent: g.userData.isGhost, opacity: g.userData.isGhost ? 0.5 : 1 }));
          m.position.y = 0.15; g.add(m);
        });
      });

      const spot1 = new THREE.SpotLight(new THREE.Color(c1), 0.6, 25, Math.PI / 6, 0.5, 1); spot1.position.set(0, 12, 0); scene.add(spot1);
      const spot2 = new THREE.SpotLight(new THREE.Color(c2), 0.4, 25, Math.PI / 6, 0.5, 1); spot2.position.set(0, 12, 0); scene.add(spot2);

      const deltaGeo = new THREE.BufferGeometry(); const deltaPos = new Float32Array(6);
      deltaGeo.setAttribute("position", new THREE.Float32BufferAttribute(deltaPos, 3));
      const deltaLine = new THREE.Line(deltaGeo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }));
      deltaLine.frustumCulled = false; scene.add(deltaLine);

      const rlLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(seg)), new THREE.LineBasicMaterial({ color: 0x44aaff, transparent: true, opacity: 0.12 }));
      rlLine.position.y += 0.015; scene.add(rlLine);

      function makeTrail(color, ghost) {
        const max = 120, pos = new Float32Array(max * 3);
        const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const alphas = new Float32Array(max); alphas.fill(0); geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1)); geo.setDrawRange(0, 0);
        const mat = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, uniforms: { uColor: { value: new THREE.Color(color) } },
          vertexShader: `attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }`,
          fragmentShader: `uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${ghost ? "0.3" : "0.55"}); }`,
        });
        const points = new THREE.Points(geo, mat); scene.add(points);
        return { mesh: points, positions: pos, alphas, max, count: 0 };
      }
      const tr1 = makeTrail(c1, false), tr2 = makeTrail(c2, true);
      const tr3 = car3 ? makeTrail(c3, true) : null; const tr4 = car4 ? makeTrail(c4, true) : null;

      R.current = { scene, camera, ren, car1, car2, car3, car4, tr1, tr2, tr3, tr4, n1, n2, n3, n4, curve, spot1, spot2, deltaLine, deltaPos, sectorMarkers, fr: null };

      const cs = CS.current;
      let pinchDist = null;
      const onDown = (e) => {
        if (e.touches && e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          pinchDist = Math.sqrt(dx * dx + dy * dy);
          cs.drag = false;
          return;
        }
        cs.drag = true; cs.lx = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.ly = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
      };
      const onMove = (e) => {
        if (e.touches && e.touches.length === 2) {
          e.preventDefault();
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const newDist = Math.sqrt(dx * dx + dy * dy);
          if (pinchDist !== null) cs.dist = Math.max(15, Math.min(200, cs.dist * (pinchDist / newDist)));
          pinchDist = newDist;
          return;
        }
        if (!cs.drag) return; const x2 = e.clientX ?? e.touches?.[0]?.clientX ?? 0, y2 = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (x2 - cs.lx) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (y2 - cs.ly) * 0.005)); cs.lx = x2; cs.ly = y2;
      };
      const onUp = () => { cs.drag = false; pinchDist = null; };
      const onWheel = (e) => { cs.dist = Math.max(15, Math.min(200, cs.dist + e.deltaY * 0.05)); };
      de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove); de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
      de.addEventListener("wheel", onWheel, { passive: true }); de.addEventListener("touchstart", onDown, { passive: false }); de.addEventListener("touchmove", onMove, { passive: false }); de.addEventListener("touchend", onUp);

      // Store progRef for render loop access
      R.current._progRef = progRef;
      R.current._telData1 = telData1;

      const TARGET_MS = isMob ? 34 : 0; // ~30fps on mobile, uncapped on desktop
      let lastFrameTime = 0;
      function animate() {
        if (contextLost) return;
        R.current.fr = requestAnimationFrame(animate);
        if (isMob) {
          const now = performance.now();
          if (now - lastFrameTime < TARGET_MS) return;
          lastFrameTime = now;
        }
        cs.cinT += 0.0003;
        if (R.current._starMat) R.current._starMat.uniforms.uTime.value = performance.now() * 0.001;

      // ─── Car updates (60fps, no React) ───
      const prog = R.current._progRef?.current ?? 0;
      const { car1, car2, tr1, tr2, spot1: sp1, spot2: sp2, deltaLine: dL, deltaPos: dP, sectorMarkers, _telData1: td1 } = R.current;
      if (car1 && car2 && tp && tp.length >= 2) {
        function updCar(car, trail, data, t, lateralOff) {
          const pts = data?.length >= 2 ? data : tp;
          const p = lerp(pts, t); if (isNaN(p.x)) return { x: 0, y: 0, z: 0 };
          const p2 = lerp(pts, Math.min(1, t + 0.005));
          // Lateral offset for overtaking visualization
          let ox = 0, oz = 0;
          if (lateralOff !== 0) {
            const dx = p2.x - p.x, dz = p2.z - p.z;
            const len = Math.sqrt(dx * dx + dz * dz) || 1;
            ox = (-dz / len) * lateralOff; oz = (dx / len) * lateralOff;
          }
          car.position.set(p.x + ox, p.y + 0.2, p.z + oz);
          if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001 && !isNaN(p2.x)) car.lookAt(p2.x + ox, p.y + 0.2, p2.z + oz);
          if (trail) {
            const c = Math.min(trail.count + 1, trail.max);
            for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; }
            trail.positions[0] = p.x + ox; trail.positions[1] = p.y + 0.05; trail.positions[2] = p.z + oz;
            for (let i = c - 1; i >= 1; i--) trail.alphas[i] = trail.alphas[i - 1] * 0.97; trail.alphas[0] = 1.0; trail.count = c;
            trail.mesh.geometry.attributes.position.needsUpdate = true; trail.mesh.geometry.attributes.alpha.needsUpdate = true; trail.mesh.geometry.setDrawRange(0, c);
          }
          return { x: p.x + ox, y: p.y, z: p.z + oz };
        }

        // Calculate proximity — if cars are close, offset them laterally
        const rawP1 = lerp(R.current.n1?.length >= 2 ? R.current.n1 : tp, prog);
        const rawP2 = lerp(R.current.n2?.length >= 2 ? R.current.n2 : tp, prog);
        const dist = Math.sqrt((rawP1.x - rawP2.x) ** 2 + (rawP1.z - rawP2.z) ** 2);
        const closeThreshold = 3.0; // start offsetting when within 3 units
        const maxOffset = 0.7; // max lateral offset
        const proximity = Math.max(0, 1 - dist / closeThreshold);
        const lateralOff = proximity * maxOffset;

        const p1 = updCar(car1, tr1, R.current.n1, prog, lateralOff);
        const p2 = updCar(car2, tr2, R.current.n2, prog, -lateralOff);
        if (R.current.car3) updCar(R.current.car3, R.current.tr3, R.current.n3, prog, lateralOff * 0.5);
        if (R.current.car4) updCar(R.current.car4, R.current.tr4, R.current.n4, prog, -lateralOff * 0.5);

        if (sp1) { sp1.position.set(p1.x, p1.y + 12, p1.z); sp1.target = car1; }
        if (sp2) { sp2.position.set(p2.x, p2.y + 12, p2.z); sp2.target = car2; }
        if (dL && dP) { dP[0] = p1.x; dP[1] = p1.y + 0.5; dP[2] = p1.z; dP[3] = p2.x; dP[4] = p2.y + 0.5; dP[5] = p2.z; dL.geometry.attributes.position.needsUpdate = true; const gap = Math.sqrt((p1.x - p2.x) ** 2 + (p1.z - p2.z) ** 2); dL.material.opacity = Math.min(0.6, gap * 0.08); }
        const curSector = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
        if (sectorMarkers) sectorMarkers.forEach((sm) => { sm.mesh.material.opacity = sm.sector === curSector ? 0.9 + Math.sin(Date.now() * 0.006) * 0.1 : 0.4; });

        // Camera follow
        const cm = cmRef.current;
        if (cm === "follow1" || cm === "follow2") {
          const tgt = cm === "follow1" ? p1 : p2; const pts = cm === "follow1" ? (R.current.n1 || tp) : (R.current.n2 || tp);
          const ah = lerp(pts, Math.min(1, prog + 0.02)); const dx = ah.x - tgt.x, dz = ah.z - tgt.z, len = Math.sqrt(dx * dx + dz * dz) || 1;
          const telNow = td1?.length ? td1[Math.floor(prog * (td1.length - 1))] : null; const braking = telNow?.brake > 0 ? 1 : 0;
          const shakeX = braking * (Math.random() - 0.5) * 0.12; const shakeY = braking * (Math.random() - 0.5) * 0.08;
          camTargetPos.current.set(tgt.x - (dx / len) * 8 + shakeX, tgt.y + 4.5 + shakeY, tgt.z - (dz / len) * 8);
          camTargetLook.current.set(ah.x + shakeX * 0.5, tgt.y + 0.3, ah.z);
        } else if (cm === "cinematic" && R.current.curve) {
          const cinT2 = (cs.cinT + prog * 0.3) % 1; const cp = R.current.curve.getPointAt(cinT2);
          const telNow2 = td1?.length ? td1[Math.floor(prog * (td1.length - 1))] : null; const shk = telNow2?.brake > 0 ? 0.06 : 0;
          camTargetPos.current.set(cp.x + 8 + (Math.random() - 0.5) * shk, cp.y + 5, cp.z + 8 + (Math.random() - 0.5) * shk);
          camTargetLook.current.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2);
        }
      }

        const cm = cmRef.current;
        if (cm === "orbit") { if (!cs.drag) cs.angle += 0.0008; camTargetPos.current.set(Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch), cs.dist * Math.sin(cs.pitch), Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch)); camTargetLook.current.set(0, 0, 0); }
        else if (cm === "top") { camTargetPos.current.set(0, 65, 0.01); camTargetLook.current.set(0, 0, 0); }
        camera.position.lerp(camTargetPos.current, 0.08); camera.lookAt(camTargetLook.current);
        try {
          ren.render(scene, camera);
        } catch (error) {
          contextLost = true;
          fail(error);
        }
      }
      animate();

      const onR = () => { clearTimeout(rt); rt = setTimeout(() => { if (!el || contextLost) return; camera.aspect = el.clientWidth / Math.max(el.clientHeight, 1); camera.updateProjectionMatrix(); ren.setSize(Math.max(el.clientWidth, 1), Math.max(el.clientHeight, 1)); }, 100); };
      window.addEventListener("resize", onR);
      return () => {
        clearTimeout(rt);
        window.removeEventListener("resize", onR);
        de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove); de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp); de.removeEventListener("wheel", onWheel); de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp);
        clearRenderer();
      };
    } catch (error) {
      fail(error);
      return;
    }
  }, [tp, c1, c2, cam, lab1, lab2, vizMode, speedArr, brakeArr, isDark, l3, l4, c3, c4, lab3, lab4, onError]);

  useEffect(() => { R.current.n1 = n1; }, [n1]); useEffect(() => { R.current.n2 = n2; }, [n2]);
  useEffect(() => { R.current.n3 = n3; }, [n3]); useEffect(() => { R.current.n4 = n4; }, [n4]);
  useEffect(() => { cmRef.current = cam; }, [cam]);
  useEffect(() => { R.current._telData1 = telData1; }, [telData1]);
}
