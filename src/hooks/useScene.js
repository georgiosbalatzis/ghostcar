import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { F1_DARK, F1_LIGHT } from "../constants.js";
import { lerp, norm } from "../helpers.js";

export default function useScene(ref, tp, l1, l2, prog, c1, c2, cam, lab1, lab2, telData1, vizMode, isDark, l3, l4, c3, c4, lab3, lab4) {
  const R = useRef({}); const CS = useRef({ angle: 0, pitch: 0.6, dist: 55, drag: false, lx: 0, ly: 0, cinT: 0 }); const cmRef = useRef(cam);
  const camTargetPos = useRef(new THREE.Vector3(40, 30, 40));
  const camTargetLook = useRef(new THREE.Vector3(0, 0, 0));
  const n1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const n2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  const n3 = useMemo(() => l3 ? norm(l3) : null, [l3]); const n4 = useMemo(() => l4 ? norm(l4) : null, [l4]);
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);

  useEffect(() => {
    const el = ref.current; if (!el || !tp || tp.length < 10) return;
    if (R.current.ren) { R.current.ren.dispose(); if (el.contains(R.current.ren.domElement)) el.removeChild(R.current.ren.domElement); }
    if (R.current.fr) cancelAnimationFrame(R.current.fr);
    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    const T = isDark ? F1_DARK : F1_LIGHT;
    scene.background = new THREE.Color(T.sceneBg);
    scene.fog = new THREE.Fog(T.sceneBg, 120, 350);
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    const ren = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    ren.setSize(w, h); ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(ren.domElement);

    scene.add(new THREE.AmbientLight(0xdddde8, isDark ? 0.7 : 1.2));
    const sun = new THREE.DirectionalLight(0xffffff, isDark ? 1.0 : 1.4); sun.position.set(40, 80, 30); scene.add(sun);
    scene.add(new THREE.HemisphereLight(isDark ? 0xbbc4dd : 0xeeeeff, isDark ? 0x333340 : 0x889988, isDark ? 0.4 : 0.6));

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshLambertMaterial({ color: T.groundColor }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.2; scene.add(ground);

    const skyGeo = new THREE.SphereGeometry(180, 32, 16);
    const skyColors = new Float32Array(skyGeo.attributes.position.count * 3);
    for (let i = 0; i < skyGeo.attributes.position.count; i++) {
      const y = skyGeo.attributes.position.getY(i);
      const t = Math.max(0, Math.min(1, (y + 10) / 190));
      skyColors[i * 3] = 0.06 + t * 0.04; skyColors[i * 3 + 1] = 0.06 + t * 0.07; skyColors[i * 3 + 2] = 0.1 + t * 0.12;
    }
    skyGeo.setAttribute("color", new THREE.Float32BufferAttribute(skyColors, 3));
    scene.add(new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false })));

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

    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftEdgePts), edgeMat));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightEdgePts), edgeMat));

    const sColors = [0x00d26a, 0xffd700, 0xe10600];
    const sectorPanels = [];
    [0, 0.33, 0.66].forEach((t, i) => {
      const sp = curve.getPointAt(t); const tan2 = curve.getTangentAt(t);
      const perp2 = new THREE.Vector3(-tan2.z, 0, tan2.x).normalize();
      const L2 = sp.clone().add(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      const R2 = sp.clone().sub(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      L2.y += 0.03; R2.y += 0.03;
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([L2, R2]), new THREE.LineBasicMaterial({ color: sColors[i], linewidth: 2 })));
      [-1, 1].forEach((side) => {
        const panelGeo = new THREE.BoxGeometry(0.15, 1.2, 2.0);
        const panelMat = new THREE.MeshStandardMaterial({ color: sColors[i], emissive: sColors[i], emissiveIntensity: 0.3, transparent: true, opacity: 0.7 });
        const panel = new THREE.Mesh(panelGeo, panelMat);
        const off = perp2.clone().multiplyScalar(side * (trackW / 2 + 0.8));
        panel.position.set(sp.x + off.x, sp.y + 0.6, sp.z + off.z); panel.lookAt(sp.x, sp.y + 0.6, sp.z);
        scene.add(panel); sectorPanels.push({ mesh: panel, sector: i });
      });
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
        const cv = document.createElement("canvas"); cv.width = 160; cv.height = 56; const ctx = cv.getContext("2d");
        ctx.fillStyle = color; ctx.globalAlpha = 0.9;
        ctx.beginPath(); const r2 = 6; ctx.moveTo(r2, 0); ctx.lineTo(160 - r2, 0); ctx.quadraticCurveTo(160, 0, 160, r2); ctx.lineTo(160, 56 - r2); ctx.quadraticCurveTo(160, 56, 160 - r2, 56); ctx.lineTo(r2, 56); ctx.quadraticCurveTo(0, 56, 0, 56 - r2); ctx.lineTo(0, r2); ctx.quadraticCurveTo(0, 0, r2, 0); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.15; ctx.fillRect(0, 0, 6, 56);
        ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.font = "bold 30px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(label, 80, 30);
        const tex = new THREE.CanvasTexture(cv);
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
        sp.position.set(0, 0.8, 0); sp.scale.set(2.2, 0.8, 1); g.add(sp);
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

    R.current = { scene, camera, ren, car1, car2, car3, car4, tr1, tr2, tr3, tr4, n1, n2, n3, n4, curve, spot1, spot2, deltaLine, deltaPos, sectorPanels, fr: null };

    const cs = CS.current;
    const onDown = (e) => { cs.drag = true; cs.lx = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.ly = e.clientY ?? e.touches?.[0]?.clientY ?? 0; };
    const onMove = (e) => { if (!cs.drag) return; const x2 = e.clientX ?? e.touches?.[0]?.clientX ?? 0, y2 = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (x2 - cs.lx) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (y2 - cs.ly) * 0.005)); cs.lx = x2; cs.ly = y2; };
    const onUp = () => { cs.drag = false; };
    const onWheel = (e) => { cs.dist = Math.max(15, Math.min(200, cs.dist + e.deltaY * 0.05)); };
    const de = ren.domElement;
    de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove); de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
    de.addEventListener("wheel", onWheel, { passive: true }); de.addEventListener("touchstart", onDown, { passive: true }); de.addEventListener("touchmove", onMove, { passive: true }); de.addEventListener("touchend", onUp);

    function animate() {
      R.current.fr = requestAnimationFrame(animate); cs.cinT += 0.0003;
      const cm = cmRef.current;
      if (cm === "orbit") { if (!cs.drag) cs.angle += 0.0008; camTargetPos.current.set(Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch), cs.dist * Math.sin(cs.pitch), Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch)); camTargetLook.current.set(0, 0, 0); }
      else if (cm === "top") { camTargetPos.current.set(0, 65, 0.01); camTargetLook.current.set(0, 0, 0); }
      camera.position.lerp(camTargetPos.current, 0.08); camera.lookAt(camTargetLook.current); ren.render(scene, camera);
    }
    animate();

    let rt; const onR = () => { clearTimeout(rt); rt = setTimeout(() => { if (!el) return; camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); ren.setSize(el.clientWidth, el.clientHeight); }, 100); };
    window.addEventListener("resize", onR);
    return () => { window.removeEventListener("resize", onR); de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove); de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp); de.removeEventListener("wheel", onWheel); de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp); cancelAnimationFrame(R.current.fr); ren.dispose(); if (el.contains(ren.domElement)) el.removeChild(ren.domElement); };
  }, [tp, c1, c2, lab1, lab2, vizMode, speedArr, isDark]);

  useEffect(() => { R.current.n1 = n1; }, [n1]); useEffect(() => { R.current.n2 = n2; }, [n2]);
  useEffect(() => { R.current.n3 = n3; }, [n3]); useEffect(() => { R.current.n4 = n4; }, [n4]);
  useEffect(() => { cmRef.current = cam; }, [cam]);

  useEffect(() => {
    const { car1, car2, tr1, tr2, camera: cam2, spot1: sp1, spot2: sp2, deltaLine: dL, deltaPos: dP } = R.current; if (!car1 || !car2 || !tp || tp.length < 2) return; const cs = CS.current;
    function upd(car, trail, data, t) { const pts = data?.length >= 2 ? data : tp; const p = lerp(pts, t); if (isNaN(p.x) || isNaN(p.y) || isNaN(p.z)) return { x: 0, y: 0, z: 0 }; car.position.set(p.x, p.y + 0.2, p.z); const p2 = lerp(pts, Math.min(1, t + 0.005)); if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001 && !isNaN(p2.x)) car.lookAt(p2.x, p.y + 0.2, p2.z);
      if (trail) {
        const c = Math.min(trail.count + 1, trail.max);
        for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; }
        trail.positions[0] = p.x; trail.positions[1] = p.y + 0.05; trail.positions[2] = p.z;
        for (let i = c - 1; i >= 1; i--) trail.alphas[i] = trail.alphas[i - 1] * 0.97; trail.alphas[0] = 1.0; trail.count = c;
        trail.mesh.geometry.attributes.position.needsUpdate = true; trail.mesh.geometry.attributes.alpha.needsUpdate = true; trail.mesh.geometry.setDrawRange(0, c);
      } return p; }
    const p1 = upd(car1, tr1, R.current.n1, prog); const p2 = upd(car2, tr2, R.current.n2, prog);
    if (R.current.car3) upd(R.current.car3, R.current.tr3, R.current.n3, prog);
    if (R.current.car4) upd(R.current.car4, R.current.tr4, R.current.n4, prog);
    if (sp1) { sp1.position.set(p1.x, p1.y + 12, p1.z); sp1.target = car1; }
    if (sp2) { sp2.position.set(p2.x, p2.y + 12, p2.z); sp2.target = car2; }
    if (dL && dP) { dP[0] = p1.x; dP[1] = p1.y + 0.5; dP[2] = p1.z; dP[3] = p2.x; dP[4] = p2.y + 0.5; dP[5] = p2.z; dL.geometry.attributes.position.needsUpdate = true; const gap = Math.sqrt((p1.x - p2.x) ** 2 + (p1.z - p2.z) ** 2); dL.material.opacity = Math.min(0.6, gap * 0.08); }
    const curSector = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
    if (R.current.sectorPanels) { R.current.sectorPanels.forEach((sp) => { sp.mesh.material.emissiveIntensity = sp.sector === curSector ? 0.8 + Math.sin(Date.now() * 0.006) * 0.2 : 0.2; sp.mesh.material.opacity = sp.sector === curSector ? 0.9 : 0.5; }); }
    if (cam2) { const cm = cmRef.current; if (cm === "follow1" || cm === "follow2") { const tgt = cm === "follow1" ? p1 : p2; const pts = cm === "follow1" ? (R.current.n1 || tp) : (R.current.n2 || tp); const ah = lerp(pts, Math.min(1, prog + 0.02)); const dx = ah.x - tgt.x, dz = ah.z - tgt.z, len = Math.sqrt(dx * dx + dz * dz) || 1;
      const telNow = telData1?.length ? telData1[Math.floor(prog * (telData1.length - 1))] : null; const braking = telNow?.brake > 0 ? 1 : 0;
      const shakeX = braking * (Math.random() - 0.5) * 0.12; const shakeY = braking * (Math.random() - 0.5) * 0.08;
      camTargetPos.current.set(tgt.x - (dx / len) * 8 + shakeX, tgt.y + 4.5 + shakeY, tgt.z - (dz / len) * 8); camTargetLook.current.set(ah.x + shakeX * 0.5, tgt.y + 0.3, ah.z);
    } else if (cm === "cinematic" && R.current.curve) { const cinT2 = (cs.cinT + prog * 0.3) % 1; const cp = R.current.curve.getPointAt(cinT2);
      const telNow2 = telData1?.length ? telData1[Math.floor(prog * (telData1.length - 1))] : null; const shk = telNow2?.brake > 0 ? 0.06 : 0;
      camTargetPos.current.set(cp.x + 8 + (Math.random() - 0.5) * shk, cp.y + 5, cp.z + 8 + (Math.random() - 0.5) * shk); camTargetLook.current.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2); } }
  }, [prog, tp, cam]);
}
