import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import * as THREE from "three";

const API = "https://api.openf1.org/v1";

// ─── F1 Broadcast Design System ───
const F1 = {
  red: "#E10600", redDark: "#B30500", carbon: "#15151e", carbonLight: "#1c1c28",
  carbonMid: "#222230", panelBg: "rgba(18,18,28,0.96)", overlay: "rgba(12,12,20,0.92)",
  cardBg: "rgba(25,25,38,0.85)", inputBg: "rgba(28,28,42,0.95)",
  text: "#e8e8f0", textDim: "#8b8ba0", textMuted: "#505068",
  border: "rgba(80,80,120,0.25)", borderLight: "rgba(60,60,90,0.18)",
  green: "#00d26a", greenDim: "#00a854", yellow: "#ffd700",
  purple: "#9b59b6", white: "#ffffff",
  fogColor: 0x0e0e16, groundColor: 0x111119, gridC1: 0x1a1a2a, gridC2: 0x141420,
  trackColor: 0x2a2a3e, lineColor: 0xe10600,
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

const TIRE_COLORS = { SOFT: "#ff3333", MEDIUM: "#ffcc00", HARD: "#cccccc", INTERMEDIATE: "#44cc44", WET: "#4488ff" };
const TEAM_COLORS = { "Red Bull Racing": "#3671C6", "Red Bull": "#3671C6", "McLaren": "#FF8000", "Ferrari": "#E8002D", "Mercedes": "#27F4D2", "Aston Martin": "#229971", "Alpine": "#0093CC", "Williams": "#64C4FF", "RB": "#6692FF", "Racing Bulls": "#6692FF", "Kick Sauber": "#52E252", "Sauber": "#52E252", "Haas F1 Team": "#B6BABD", "Haas": "#B6BABD", "Cadillac": "#FFD700" };
const getTeamColor = (t) => { if (!t) return "#888"; for (const [k, v] of Object.entries(TEAM_COLORS)) if (t.toLowerCase().includes(k.toLowerCase())) return v; return "#888"; };

const PRESETS = [
  { label: "VER vs NOR — Monza 2024 Q", year: 2024, meeting: "Italian Grand Prix", session: "Qualifying", d1: 1, d2: 4 },
  { label: "HAM vs VER — Bahrain 2024 R", year: 2024, meeting: "Bahrain Grand Prix", session: "Race", d1: 44, d2: 1 },
  { label: "NOR vs PIA — Silverstone 2024 Q", year: 2024, meeting: "British Grand Prix", session: "Qualifying", d1: 4, d2: 81 },
  { label: "LEC vs SAI — Monaco 2024 Q", year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 55 },
  { label: "VER vs NOR — Abu Dhabi 2024 Q", year: 2024, meeting: "Abu Dhabi Grand Prix", session: "Qualifying", d1: 1, d2: 4 },
  { label: "RUS vs HAM — Spa 2024 Q", year: 2024, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 44 },
];

const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
const CAM_LABELS = { orbit: "Free", follow1: "Chase D1", follow2: "Chase D2", top: "Heli", cinematic: "Film" };

// ─── API ───
async function fetchJSON(ep, params = {}, retries = 2) {
  const url = new URL(`${API}${ep}`);
  Object.entries(params).forEach(([k, v]) => { if (v != null && v !== "") url.searchParams.append(k, v); });
  for (let a = 0; a <= retries; a++) {
    try { const r = await fetch(url.toString()); if (r.status === 429) { await new Promise((x) => setTimeout(x, 1500 * (a + 1))); continue; } if (!r.ok) throw new Error(`API ${r.status}`); return r.json(); } catch (e) { if (a === retries) throw e; await new Promise((x) => setTimeout(x, 800 * (a + 1))); }
  }
}
const fetchMeetings = (y) => fetchJSON("/meetings", { year: y });
const fetchSessions = (mk) => fetchJSON("/sessions", { meeting_key: mk });
const fetchDrivers = (sk) => fetchJSON("/drivers", { session_key: sk });
const fetchLaps = (sk, dn) => fetchJSON("/laps", { session_key: sk, driver_number: dn });
const fetchStints = (sk, dn) => fetchJSON("/stints", { session_key: sk, driver_number: dn });
function fetchLocation(sk, dn, gt, lt) { const p = { session_key: sk, driver_number: dn }; if (gt) p["date>"] = gt; if (lt) p["date<"] = lt; return fetchJSON("/location", p); }
function fetchCarData(sk, dn, gt, lt) { const p = { session_key: sk, driver_number: dn }; if (gt) p["date>"] = gt; if (lt) p["date<"] = lt; return fetchJSON("/car_data", p); }

// ─── Helpers ───
function lerp(pts, t) { if (!pts?.length) return { x: 0, y: 0, z: 0 }; const idx = Math.max(0, Math.min(1, t)) * (pts.length - 1), i0 = Math.floor(idx), i1 = Math.min(i0 + 1, pts.length - 1), f = idx - i0; return { x: pts[i0].x + (pts[i1].x - pts[i0].x) * f, y: pts[i0].y + (pts[i1].y - pts[i0].y) * f, z: pts[i0].z + (pts[i1].z - pts[i0].z) * f }; }
function norm(points) { if (!points?.length) return []; let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity, mnZ = Infinity, mxZ = -Infinity; for (const p of points) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.y < mnY) mnY = p.y; if (p.y > mxY) mxY = p.y; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; } const sc = Math.max(mxX - mnX, mxY - mnY) || 1, cx = (mnX + mxX) / 2, cy = (mnY + mxY) / 2, cz = (mnZ + mxZ) / 2; return points.map((p) => ({ x: ((p.x - cx) / sc) * 40, y: ((p.z - cz) / sc) * 4, z: ((p.y - cy) / sc) * 40 })); }
function telAt(tel, t) { if (!tel?.length) return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0, n_gear: 0 }; return tel[Math.min(Math.floor(t * (tel.length - 1)), tel.length - 1)]; }
function bestLap(laps) { const v = laps.filter((l) => l.lap_duration > 10 && l.date_start); return v.length ? v.reduce((a, b) => a.lap_duration < b.lap_duration ? a : b) : null; }
function useIsMobile() { const [m, setM] = useState(typeof window !== "undefined" && window.innerWidth < 768); useEffect(() => { const h = () => setM(window.innerWidth < 768); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []); return m; }
function ds(a, max) { if (!a || a.length <= max) return a || []; const s = a.length / max, o = []; for (let i = 0; i < max; i++) o.push(a[Math.floor(i * s)]); return o; }
function fmt(s) { if (!s || s <= 0) return "0:00.000"; const m = Math.floor(s / 60), sec = s - m * 60; return `${m}:${sec < 10 ? "0" : ""}${sec.toFixed(3)}`; }
function encodeURL(s) { const p = new URLSearchParams(); if (s.year) p.set("y", s.year); if (s.mk) p.set("mk", s.mk); if (s.sk) p.set("sk", s.sk); if (s.d1) p.set("d1", s.d1); if (s.d2) p.set("d2", s.d2); if (s.l1) p.set("l1", s.l1); if (s.l2) p.set("l2", s.l2); return `${window.location.origin}${window.location.pathname}?${p.toString()}`; }
function decodeURL() { const p = new URLSearchParams(window.location.search); return { year: p.get("y"), mk: p.get("mk"), sk: p.get("sk"), d1: p.get("d1"), d2: p.get("d2"), l1: p.get("l1"), l2: p.get("l2") }; }

// ─── Three.js Scene ───
function useScene(ref, tp, l1, l2, prog, c1, c2, cam, lab1, lab2, telData1, vizMode) {
  const R = useRef({}); const CS = useRef({ angle: 0, pitch: 0.6, dist: 55, drag: false, lx: 0, ly: 0, cinT: 0 }); const cmRef = useRef(cam);
  const n1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const n2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);

  useEffect(() => {
    const el = ref.current; if (!el || !tp || tp.length < 10) return;
    if (R.current.ren) { R.current.ren.dispose(); if (el.contains(R.current.ren.domElement)) el.removeChild(R.current.ren.domElement); }
    if (R.current.fr) cancelAnimationFrame(R.current.fr);
    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x121218);
    scene.fog = new THREE.Fog(0x121218, 80, 200);
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    const ren = new THREE.WebGLRenderer({ antialias: true });
    ren.setSize(w, h); ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(ren.domElement);

    // ─── Clean bright lighting ───
    scene.add(new THREE.AmbientLight(0xdddde8, 0.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.0); sun.position.set(40, 80, 30); scene.add(sun);
    scene.add(new THREE.HemisphereLight(0xbbc4dd, 0x333340, 0.4));

    // ─── Ground: clean dark plane ───
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshLambertMaterial({ color: 0x18181f })
    );
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.2; scene.add(ground);

    // ─── Track curve ───
    const curve = new THREE.CatmullRomCurve3(tp.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true);
    const seg = Math.min(tp.length * 3, 800);
    const trackW = 2.0;

    // ─── Build smooth flat ribbon ───
    const curvePts = curve.getPoints(seg);
    const ribbonPos = [], ribbonNorm = [], ribbonIdx = [];
    const leftEdgePts = [], rightEdgePts = [];
    // Smooth tangents by averaging neighbors
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
      if (i < curvePts.length - 1) {
        const v = i * 2;
        ribbonIdx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
      }
    }
    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(ribbonPos, 3));
    ribbonGeo.setAttribute("normal", new THREE.Float32BufferAttribute(ribbonNorm, 3));
    ribbonGeo.setIndex(ribbonIdx);

    // Track surface
    const trackMesh = new THREE.Mesh(ribbonGeo, new THREE.MeshStandardMaterial({
      color: 0x3a3a48, roughness: 0.8, metalness: 0.1, side: THREE.DoubleSide
    }));
    scene.add(trackMesh);

    // ─── Speed heatmap overlay ───
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
      const heatMesh = new THREE.Mesh(heatGeo, new THREE.MeshBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false
      }));
      heatMesh.position.y += 0.01; scene.add(heatMesh);
    }

    // ─── White edge lines ───
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftEdgePts), edgeMat));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightEdgePts), edgeMat));

    // ─── Sector markers — just thin colored lines across the track ───
    const sColors = [0x00d26a, 0xffd700, 0xe10600];
    [0, 0.33, 0.66].forEach((t, i) => {
      const sp = curve.getPointAt(t);
      const tan2 = curve.getTangentAt(t);
      const perp2 = new THREE.Vector3(-tan2.z, 0, tan2.x).normalize();
      const L2 = sp.clone().add(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      const R2 = sp.clone().sub(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      L2.y += 0.03; R2.y += 0.03;
      const sLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([L2, R2]),
        new THREE.LineBasicMaterial({ color: sColors[i], linewidth: 2 })
      );
      scene.add(sLine);
    });

    // ─── Start/finish — simple white line ───
    const sf = curve.getPointAt(0), sfTan = curve.getTangentAt(0);
    const sfPerp = new THREE.Vector3(-sfTan.z, 0, sfTan.x).normalize();
    const sfL = sf.clone().add(sfPerp.clone().multiplyScalar(trackW / 2)); sfL.y += 0.03;
    const sfR = sf.clone().sub(sfPerp.clone().multiplyScalar(trackW / 2)); sfR.y += 0.03;
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([sfL, sfR]),
      new THREE.LineBasicMaterial({ color: 0xffffff })
    ));

    // F1 Car factory — sleeker, with translucent ghost effect
    function makeCar(color, label, isGhost) {
      const g = new THREE.Group();
      const col = new THREE.Color(color);
      const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: isGhost ? 0.6 : 0.35, metalness: 0.7, roughness: 0.25, transparent: isGhost, opacity: isGhost ? 0.55 : 1 });
      // Monocoque body
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 1.6), mat); body.position.y = 0.2; g.add(body);
      // Front wing
      const fw = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.25), mat); fw.position.set(0, 0.12, 0.85); g.add(fw);
      // Rear wing
      const rw = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.08), mat); rw.position.set(0, 0.45, -0.75); g.add(rw);
      // Rear wing endplates
      [-0.35, 0.35].forEach((x) => { const ep = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.22, 0.15), mat); ep.position.set(x, 0.42, -0.75); g.add(ep); });
      // Nose cone
      const nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5, 4), mat); nose.geometry.rotateX(-Math.PI / 2); nose.position.set(0, 0.18, 1.05); g.add(nose);
      // Halo
      const haloMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.9, roughness: 0.1 });
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 6, 12, Math.PI), haloMat); halo.rotation.z = Math.PI; halo.position.set(0, 0.35, 0.15); g.add(halo);
      // Ground glow
      const glowMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: isGhost ? 0.1 : 0.06, side: THREE.DoubleSide });
      const glow2 = new THREE.Mesh(new THREE.CircleGeometry(1.2, 16), glowMat); glow2.rotation.x = -Math.PI / 2; glow2.position.y = 0.02; g.add(glow2);
      // Car light
      const carLight = new THREE.PointLight(col, isGhost ? 0.7 : 0.4, 10); carLight.position.set(0, 0.5, 0); g.add(carLight);
      // Label
      if (label) {
        const cv = document.createElement("canvas"); cv.width = 160; cv.height = 56; const ctx = cv.getContext("2d");
        ctx.fillStyle = color; ctx.globalAlpha = 0.9;
        ctx.beginPath(); const r2 = 6; ctx.moveTo(r2, 0); ctx.lineTo(160 - r2, 0); ctx.quadraticCurveTo(160, 0, 160, r2); ctx.lineTo(160, 56 - r2); ctx.quadraticCurveTo(160, 56, 160 - r2, 56); ctx.lineTo(r2, 56); ctx.quadraticCurveTo(0, 56, 0, 56 - r2); ctx.lineTo(0, r2); ctx.quadraticCurveTo(0, 0, r2, 0); ctx.fill();
        // Team color stripe on left
        ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.15; ctx.fillRect(0, 0, 6, 56);
        ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.font = "bold 30px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(label, 80, 30);
        const tex2 = new THREE.CanvasTexture(cv); const sp2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex2, transparent: true, depthWrite: false }));
        sp2.position.set(0, 1.6, 0); sp2.scale.set(2.8, 1, 1); g.add(sp2);
      }
      return g;
    }
    const car1 = makeCar(c1, lab1, false); const car2 = makeCar(c2, lab2, true);
    scene.add(car1); scene.add(car2);

    // Trails — wider, more visible
    function makeTrail(color, ghost) { const max = 80, pos = new Float32Array(max * 3), geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setDrawRange(0, 0); const ln2 = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: ghost ? 0.35 : 0.6, linewidth: 2 })); scene.add(ln2); return { line: ln2, positions: pos, max, count: 0 }; }
    const tr1 = makeTrail(c1, false), tr2 = makeTrail(c2, true);

    R.current = { scene, camera, ren, car1, car2, tr1, tr2, n1, n2, curve, fr: null };

    const cs = CS.current;
    const onDown = (e) => { cs.drag = true; cs.lx = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.ly = e.clientY ?? e.touches?.[0]?.clientY ?? 0; };
    const onMove = (e) => { if (!cs.drag) return; const x2 = e.clientX ?? e.touches?.[0]?.clientX ?? 0, y2 = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (x2 - cs.lx) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (y2 - cs.ly) * 0.005)); cs.lx = x2; cs.ly = y2; };
    const onUp = () => { cs.drag = false; };
    const onWheel = (e) => { cs.dist = Math.max(15, Math.min(120, cs.dist + e.deltaY * 0.05)); };
    const de = ren.domElement;
    de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove); de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
    de.addEventListener("wheel", onWheel, { passive: true }); de.addEventListener("touchstart", onDown, { passive: true }); de.addEventListener("touchmove", onMove, { passive: true }); de.addEventListener("touchend", onUp);

    function animate() {
      R.current.fr = requestAnimationFrame(animate); cs.cinT += 0.0003;
      const cm = cmRef.current;
      if (cm === "orbit") { if (!cs.drag) cs.angle += 0.0008; camera.position.set(Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch), cs.dist * Math.sin(cs.pitch), Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch)); camera.lookAt(0, 0, 0); }
      else if (cm === "top") { camera.position.set(0, 65, 0.01); camera.lookAt(0, 0, 0); }
      ren.render(scene, camera);
    }
    animate();

    let rt; const onR = () => { clearTimeout(rt); rt = setTimeout(() => { if (!el) return; camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); ren.setSize(el.clientWidth, el.clientHeight); }, 100); };
    window.addEventListener("resize", onR);
    return () => { window.removeEventListener("resize", onR); de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove); de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp); de.removeEventListener("wheel", onWheel); de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp); cancelAnimationFrame(R.current.fr); ren.dispose(); if (el.contains(ren.domElement)) el.removeChild(ren.domElement); };
  }, [tp, c1, c2, lab1, lab2, vizMode, speedArr]);

  useEffect(() => { R.current.n1 = n1; }, [n1]); useEffect(() => { R.current.n2 = n2; }, [n2]); useEffect(() => { cmRef.current = cam; }, [cam]);

  useEffect(() => {
    const { car1, car2, tr1, tr2, camera: cam2 } = R.current; if (!car1 || !car2 || !tp || tp.length < 2) return; const cs = CS.current;
    function upd(car, trail, data, t) { const pts = data?.length >= 2 ? data : tp; const p = lerp(pts, t); if (isNaN(p.x) || isNaN(p.y) || isNaN(p.z)) return { x: 0, y: 0, z: 0 }; car.position.set(p.x, p.y + 0.2, p.z); const p2 = lerp(pts, Math.min(1, t + 0.005)); if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001 && !isNaN(p2.x)) car.lookAt(p2.x, p.y + 0.2, p2.z); if (trail) { const c = Math.min(trail.count + 1, trail.max); for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; } trail.positions[0] = p.x; trail.positions[1] = p.y + 0.2; trail.positions[2] = p.z; trail.count = c; trail.line.geometry.attributes.position.needsUpdate = true; trail.line.geometry.setDrawRange(0, c); } return p; }
    const p1 = upd(car1, tr1, R.current.n1, prog); const p2 = upd(car2, tr2, R.current.n2, prog);
    if (cam2) { const cm = cmRef.current; if (cm === "follow1" || cm === "follow2") { const tgt = cm === "follow1" ? p1 : p2; const pts = cm === "follow1" ? (R.current.n1 || tp) : (R.current.n2 || tp); const ah = lerp(pts, Math.min(1, prog + 0.02)); const dx = ah.x - tgt.x, dz = ah.z - tgt.z, len = Math.sqrt(dx * dx + dz * dz) || 1; cam2.position.set(tgt.x - (dx / len) * 8, tgt.y + 4.5, tgt.z - (dz / len) * 8); cam2.lookAt(ah.x, tgt.y + 0.3, ah.z); } else if (cm === "cinematic" && R.current.curve) { const ct = (cs.cinT + prog * 0.3) % 1; const cp = R.current.curve.getPointAt(ct); cam2.position.set(cp.x + 8, cp.y + 5, cp.z + 8); cam2.lookAt((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2); } }
  }, [prog, tp, cam]);
}

// ─── Mini-map ───
const MiniMap = memo(function MM({ tp, l1, l2, prog, c1, c2 }) {
  const ref = useRef(null); const nn1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const nn2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  useEffect(() => {
    const c = ref.current; if (!c || !tp?.length) return; const ctx = c.getContext("2d"), s = c.width, pad = 14;
    ctx.clearRect(0, 0, s, s); ctx.fillStyle = F1.overlay; ctx.beginPath(); ctx.moveTo(8,0); ctx.lineTo(s-8,0); ctx.quadraticCurveTo(s,0,s,8); ctx.lineTo(s,s-8); ctx.quadraticCurveTo(s,s,s-8,s); ctx.lineTo(8,s); ctx.quadraticCurveTo(0,s,0,s-8); ctx.lineTo(0,8); ctx.quadraticCurveTo(0,0,8,0); ctx.fill();
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of tp) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    const proj = (p) => ({ x: pad + ((p.x - mnX) / range) * (s - pad * 2), y: pad + ((p.z - mnZ) / range) * (s - pad * 2) });
    ctx.strokeStyle = "rgba(225,6,0,0.3)"; ctx.lineWidth = 2.5; ctx.beginPath(); tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); }); ctx.closePath(); ctx.stroke();
    function dot(data, color) { const pts = data?.length >= 2 ? data : tp; const pt = lerp(pts, prog); const pp = proj(pt); ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(pp.x, pp.y, 5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
    dot(nn1, c1); dot(nn2, c2);
  }, [tp, prog, l1, l2, c1, c2]);
  return <canvas ref={ref} width={150} height={150} style={{ width: 150, height: 150, borderRadius: 8 }} />;
});

// ─── Telemetry Chart ───
const TelChart = memo(function TC({ data1, data2, color1, color2, maxVal, h: ch }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return; const ctx = c.getContext("2d"), w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    function draw(data, col) { if (!data?.length) return; const step = Math.max(1, Math.floor(data.length / w)); ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.beginPath(); let f = true; for (let i = 0; i < data.length; i += step) { const x = (i / (data.length - 1)) * w, y = h - (data[i] / maxVal) * h * 0.9 - h * 0.05; f ? ctx.moveTo(x, y) : ctx.lineTo(x, y); f = false; } ctx.stroke(); }
    draw(data1, color1); draw(data2, color2);
  }, [data1, data2, color1, color2, maxVal]);
  return <canvas ref={ref} width={320} height={ch || 45} style={{ width: "100%", height: ch || 45, borderRadius: 3 }} />;
});

// ─── Sector Delta ───
const SD = memo(function SD({ s, t1, t2, c1, c2 }) {
  const d = t1 && t2 ? t1 - t2 : null; const sC = [F1.green, F1.yellow, F1.red];
  return (<div style={{ flex: 1, padding: "5px 8px", background: F1.cardBg, borderRadius: 4, borderTop: `2px solid ${sC[s - 1]}` }}>
    <div style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono, textTransform: "uppercase", letterSpacing: "0.1em" }}>Sector {s}</div>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
      <span style={{ fontSize: 12, color: c1, fontFamily: F1.mono, fontWeight: 600 }}>{t1 ? t1.toFixed(3) : "—"}</span>
      <span style={{ fontSize: 12, color: c2, fontFamily: F1.mono, fontWeight: 600 }}>{t2 ? t2.toFixed(3) : "—"}</span>
    </div>
    {d !== null && <div style={{ fontSize: 11, fontWeight: 700, color: d > 0 ? F1.red : F1.green, fontFamily: F1.mono, textAlign: "center", marginTop: 2 }}>{d > 0 ? "+" : ""}{d.toFixed(3)}</div>}
  </div>);
});

// ═══════════════════════════════════════════
export default function App() {
  const mob = useIsMobile();
  const [year, setYear] = useState(2026);
  const [mts, setMts] = useState([]); const [selMt, setSelMt] = useState(null);
  const [sess, setSess] = useState([]); const [selSe, setSelSe] = useState(null);
  const [drvs, setDrvs] = useState([]); const [d1, setD1] = useState(null); const [d2, setD2] = useState(null);
  const [sl1, setSl1] = useState(null); const [sl2, setSl2] = useState(null);
  const [laps1, setLaps1] = useState([]); const [laps2, setLaps2] = useState([]);
  const [loc1, setLoc1] = useState(null); const [loc2, setLoc2] = useState(null);
  const [tel1, setTel1] = useState(null); const [tel2, setTel2] = useState(null);
  const [tp, setTp] = useState(null);
  const [st1, setSt1] = useState([]); const [st2, setSt2] = useState([]);
  const [prog, setProg] = useState(0); const [play, setPlay] = useState(false); const [spd, setSpd] = useState(1); const [loop, setLoop] = useState(false);
  const [cam, setCam] = useState("orbit");
  const [vizMode, setVizMode] = useState("normal"); // "normal" | "heatmap"
  const [loading, setLoading] = useState(""); const [ldPct, setLdPct] = useState(undefined); const [err, setErr] = useState("");
  const [showTel, setShowTel] = useState(true); const [mobTab, setMobTab] = useState("3d");
  const [showPresets, setShowPresets] = useState(false); const [showStats, setShowStats] = useState(false); const [showLaps, setShowLaps] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const cRef = useRef(null); const rafRef = useRef(null); const ltRef = useRef(null); const urlLoaded = useRef(false);

  const di1 = drvs.find((x) => x.driver_number === d1), di2 = drvs.find((x) => x.driver_number === d2);
  const co1 = di1 ? getTeamColor(di1.team_name) : "#4488ff", co2 = di2 ? getTeamColor(di2.team_name) : "#ff4488";
  const li1 = laps1.find((l) => l.lap_number === sl1), li2 = laps2.find((l) => l.lap_number === sl2);
  const delta = li1?.lap_duration && li2?.lap_duration ? li1.lap_duration - li2.lap_duration : null;
  const el1 = li1?.lap_duration ? prog * li1.lap_duration : 0, el2 = li2?.lap_duration ? prog * li2.lap_duration : 0;
  const tire1 = st1.find((s) => sl1 >= s.lap_start && sl1 <= s.lap_end)?.compound?.toUpperCase();
  const tire2 = st2.find((s) => sl2 >= s.lap_start && sl2 <= s.lap_end)?.compound?.toUpperCase();
  const ms = mob ? 200 : 400;
  const s1 = useMemo(() => ds(tel1?.map((t) => t.speed || 0), ms), [tel1, ms]); const s2 = useMemo(() => ds(tel2?.map((t) => t.speed || 0), ms), [tel2, ms]);
  const t1 = useMemo(() => ds(tel1?.map((t) => t.throttle || 0), ms), [tel1, ms]); const t2 = useMemo(() => ds(tel2?.map((t) => t.throttle || 0), ms), [tel2, ms]);
  const b1 = useMemo(() => ds(tel1?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel1, ms]); const b2 = useMemo(() => ds(tel2?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel2, ms]);
  const ct1 = telAt(tel1, prog), ct2 = telAt(tel2, prog);
  const topS1 = useMemo(() => tel1 ? Math.max(...tel1.map((t) => t.speed || 0)) : 0, [tel1]);
  const topS2 = useMemo(() => tel2 ? Math.max(...tel2.map((t) => t.speed || 0)) : 0, [tel2]);
  const avgS1 = useMemo(() => tel1?.length ? tel1.reduce((a, t) => a + (t.speed || 0), 0) / tel1.length : 0, [tel1]);
  const avgS2 = useMemo(() => tel2?.length ? tel2.reduce((a, t) => a + (t.speed || 0), 0) / tel2.length : 0, [tel2]);

  // Data loading
  useEffect(() => { setLoading("Loading..."); setErr(""); fetchMeetings(year).then((d) => { setMts(d.filter((m) => m.meeting_name)); setSelMt(null); setSelSe(null); setSess([]); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [year]);
  useEffect(() => { if (!selMt) return; setLoading("Loading sessions..."); fetchSessions(selMt.meeting_key).then((d) => { setSess(d.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name))); setSelSe(null); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selMt]);
  useEffect(() => { if (!selSe) return; setLoading("Loading drivers..."); fetchDrivers(selSe.session_key).then((d) => { const seen = new Set(); setDrvs(d.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; })); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selSe]);
  useEffect(() => { if (selSe && d1) { fetchLaps(selSe.session_key, d1).then((l) => { setLaps1(l); setSl1(null); }).catch(() => setLaps1([])); fetchStints(selSe.session_key, d1).then(setSt1).catch(() => setSt1([])); } }, [selSe, d1]);
  useEffect(() => { if (selSe && d2) { fetchLaps(selSe.session_key, d2).then((l) => { setLaps2(l); setSl2(null); }).catch(() => setLaps2([])); fetchStints(selSe.session_key, d2).then(setSt2).catch(() => setSt2([])); } }, [selSe, d2]);
  useEffect(() => { if (laps1.length && !sl1) { const f = bestLap(laps1); if (f) setSl1(f.lap_number); } }, [laps1]);
  useEffect(() => { if (laps2.length && !sl2) { const f = bestLap(laps2); if (f) setSl2(f.lap_number); } }, [laps2]);

  // URL restore
  useEffect(() => { if (urlLoaded.current) return; const u = decodeURL(); if (u.year && u.mk) { urlLoaded.current = true; setYear(Number(u.year)); } }, []);
  useEffect(() => { const u = decodeURL(); if (u.mk && mts.length && !selMt) { const m = mts.find((x) => String(x.meeting_key) === u.mk); if (m) setSelMt(m); } }, [mts]);
  useEffect(() => { const u = decodeURL(); if (u.sk && sess.length && !selSe) { const s = sess.find((x) => String(x.session_key) === u.sk); if (s) setSelSe(s); } }, [sess]);
  useEffect(() => { const u = decodeURL(); if (u.d1 && u.d2 && drvs.length && !d1 && !d2) { setD1(Number(u.d1)); setD2(Number(u.d2)); } }, [drvs]);
  useEffect(() => { const u = decodeURL(); if (u.l1 && laps1.length && !sl1) setSl1(Number(u.l1)); }, [laps1]);
  useEffect(() => { const u = decodeURL(); if (u.l2 && laps2.length && !sl2) setSl2(Number(u.l2)); }, [laps2]);

  const loadData = useCallback(async () => {
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return; setLoading("Fetching telemetry..."); setErr(""); setLdPct(0);
    try {
      const sk = selSe.session_key; const la1 = laps1.find((l) => l.lap_number === sl1), la2 = laps2.find((l) => l.lap_number === sl2);
      if (!la1?.date_start || !la2?.date_start) { setErr("Lap timing unavailable."); setLoading(""); return; }
      const e1 = new Date(new Date(la1.date_start).getTime() + (la1.lap_duration || 120) * 1000).toISOString();
      const e2 = new Date(new Date(la2.date_start).getTime() + (la2.lap_duration || 120) * 1000).toISOString();
      setLdPct(20); const [lo1, lo2] = await Promise.all([fetchLocation(sk, d1, la1.date_start, e1), fetchLocation(sk, d2, la2.date_start, e2)]);
      setLdPct(60); const [ca1, ca2] = await Promise.all([fetchCarData(sk, d1, la1.date_start, e1), fetchCarData(sk, d2, la2.date_start, e2)]);
      if (lo1.length < 5 || lo2.length < 5) { setErr("Insufficient data."); setLoading(""); setLdPct(undefined); return; }
      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2); setTp(norm(lo1)); setProg(0); setPlay(false);
      setLdPct(100); setTimeout(() => { setLoading(""); setLdPct(undefined); }, 300);
    } catch (e) { setErr(e.message); setLoading(""); setLdPct(undefined); }
  }, [selSe, d1, d2, sl1, sl2, laps1, laps2]);

  const loadPreset = useCallback(async (pr) => {
    setShowPresets(false); setLoading("Loading preset..."); setErr("");
    try { setYear(pr.year); const m = await fetchMeetings(pr.year); setMts(m.filter((x) => x.meeting_name)); const mt = m.find((x) => x.meeting_name === pr.meeting); if (!mt) throw new Error("Not found"); setSelMt(mt);
      const ss = await fetchSessions(mt.meeting_key); const fi = ss.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name)); setSess(fi); const se = fi.find((s) => s.session_name === pr.session); if (!se) throw new Error("Not found"); setSelSe(se);
      const dr = await fetchDrivers(se.session_key); const seen = new Set(); setDrvs(dr.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; })); setD1(pr.d1); setD2(pr.d2); setLoading("");
    } catch (e) { setErr(e.message); setLoading(""); }
  }, []);

  const share = useCallback(() => { if (!selMt || !selSe) return; const url = encodeURL({ year, mk: selMt.meeting_key, sk: selSe.session_key, d1, d2, l1: sl1, l2: sl2 }); navigator.clipboard?.writeText(url).then(() => { setShareMsg("Copied!"); setTimeout(() => setShareMsg(""), 2000); }); window.history.replaceState(null, "", url.split(window.location.origin)[1]); }, [year, selMt, selSe, d1, d2, sl1, sl2]);

  useScene(cRef, tp, loc1, loc2, prog, co1, co2, cam, di1?.name_acronym || "", di2?.name_acronym || "", tel1, vizMode);

  // Playback
  useEffect(() => { if (!play) { ltRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; } function tick(ts) { if (!ltRef.current) ltRef.current = ts; const dt = (ts - ltRef.current) / 1000; ltRef.current = ts; setProg((p) => { const n = p + dt * 0.015 * spd; if (n >= 1) { if (loop) return 0; setPlay(false); return 1; } return n; }); rafRef.current = requestAnimationFrame(tick); } rafRef.current = requestAnimationFrame(tick); return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }; }, [play, spd, loop]);

  // Keys
  useEffect(() => { const h = (e) => { if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return; if (e.code === "Space") { e.preventDefault(); if (tp) setPlay((p) => !p); } if (e.code === "KeyR") { setProg(0); setPlay(false); } if (e.code === "KeyT") setShowTel((s) => !s); if (e.code === "KeyC") setCam((m) => CAM_MODES[(CAM_MODES.indexOf(m) + 1) % CAM_MODES.length]); if (e.code === "KeyL") setLoop((l) => !l); if (e.code === "ArrowRight") setProg((p) => Math.min(1, p + 0.01)); if (e.code === "ArrowLeft") setProg((p) => Math.max(0, p - 0.01)); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [tp]);

  // Backdrop + modals
  const modBg = (showPresets || showStats || showLaps) && <div onClick={() => { setShowPresets(false); setShowStats(false); setShowLaps(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99, backdropFilter: "blur(4px)" }} />;

  const presetsModal = showPresets && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 24, zIndex: 100, minWidth: mob ? "92%" : 400, animation: "fadeIn .2s" }}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}><span style={{ fontWeight: 700, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>QUICK PRESETS</span><button onClick={() => setShowPresets(false)} style={{ marginLeft: "auto" }}>✕</button></div>
    {PRESETS.map((p, i) => <button key={i} onClick={() => loadPreset(p)} style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 14px", marginBottom: 6, fontSize: 13, fontFamily: F1.mono, borderLeft: `3px solid ${F1.red}` }}>{p.label}</button>)}
  </div>);

  const statsModal = showStats && tp && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 24, zIndex: 100, minWidth: mob ? "92%" : 420, animation: "fadeIn .2s" }}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}><span style={{ fontWeight: 700, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>COMPARISON</span><button onClick={() => setShowStats(false)} style={{ marginLeft: "auto" }}>✕</button></div>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: F1.mono }}>
      <thead><tr style={{ color: F1.textMuted, fontSize: 10, letterSpacing: "0.1em" }}><th style={{ textAlign: "left", padding: "6px 8px", borderBottom: `1px solid ${F1.red}22` }}>METRIC</th><th style={{ textAlign: "center", padding: "6px 8px", color: co1, borderBottom: `1px solid ${co1}33` }}>{di1?.name_acronym || "D1"}</th><th style={{ textAlign: "center", padding: "6px 8px", color: co2, borderBottom: `1px solid ${co2}33` }}>{di2?.name_acronym || "D2"}</th></tr></thead>
      <tbody>{[
        { m: "LAP TIME", v1: li1?.lap_duration ? fmt(li1.lap_duration) : "—", v2: li2?.lap_duration ? fmt(li2.lap_duration) : "—" },
        { m: "TOP SPEED", v1: `${Math.round(topS1)}`, v2: `${Math.round(topS2)}` },
        { m: "AVG SPEED", v1: `${Math.round(avgS1)}`, v2: `${Math.round(avgS2)}` },
        { m: "SECTOR 1", v1: li1?.duration_sector_1?.toFixed(3) || "—", v2: li2?.duration_sector_1?.toFixed(3) || "—" },
        { m: "SECTOR 2", v1: li1?.duration_sector_2?.toFixed(3) || "—", v2: li2?.duration_sector_2?.toFixed(3) || "—" },
        { m: "SECTOR 3", v1: li1?.duration_sector_3?.toFixed(3) || "—", v2: li2?.duration_sector_3?.toFixed(3) || "—" },
        { m: "TYRE", v1: tire1 || "—", v2: tire2 || "—" },
      ].map((r) => <tr key={r.m} style={{ borderBottom: `1px solid ${F1.borderLight}` }}><td style={{ padding: "8px 8px", color: F1.textDim, letterSpacing: "0.05em" }}>{r.m}</td><td style={{ padding: "8px", textAlign: "center", fontWeight: 700, color: co1 }}>{r.v1}</td><td style={{ padding: "8px", textAlign: "center", fontWeight: 700, color: co2 }}>{r.v2}</td></tr>)}</tbody>
    </table>
  </div>);

  const lapsModal = showLaps && (<div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: mob ? "100%" : 380, background: F1.carbon, borderLeft: `1px solid ${F1.red}22`, zIndex: 100, display: "flex", flexDirection: "column", animation: "fadeIn .2s" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: `1px solid ${F1.borderLight}` }}><span style={{ fontWeight: 700, fontSize: 14, fontFamily: F1.sans, letterSpacing: "0.05em" }}>LAP TIMES</span><button onClick={() => setShowLaps(false)} style={{ marginLeft: "auto" }}>✕</button></div>
    <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
      {[{ lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: setSl1 }, { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: setSl2 }].map((drv) => {
        const vl = drv.laps.filter((l) => l.lap_duration > 10); const best = vl.length ? Math.min(...vl.map((l) => l.lap_duration)) : 0; const worst = vl.length ? Math.max(...vl.map((l) => l.lap_duration)) : 0;
        return (<div key={drv.lab} style={{ marginBottom: 18 }}><div style={{ fontSize: 12, fontWeight: 700, color: drv.col, marginBottom: 8, fontFamily: F1.mono, letterSpacing: "0.1em", borderLeft: `3px solid ${drv.col}`, paddingLeft: 8 }}>{drv.lab}</div>
          {vl.sort((a, b) => a.lap_duration - b.lap_duration).map((l) => { const pct = worst > best ? (l.lap_duration - best) / (worst - best) : 0; return (<div key={l.lap_number} onClick={() => drv.set(l.lap_number)} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 8px", borderRadius: 4, cursor: "pointer", background: l.lap_number === drv.sel ? `${drv.col}18` : "transparent", borderLeft: l.lap_number === drv.sel ? `2px solid ${drv.col}` : "2px solid transparent", marginBottom: 2, fontSize: 12, fontFamily: F1.mono }}>
            <span style={{ width: 30, color: F1.textMuted }}>L{l.lap_number}</span>
            <span style={{ fontWeight: l.lap_duration === best ? 800 : 400, color: l.lap_duration === best ? F1.green : F1.text }}>{fmt(l.lap_duration)}</span>
            {l.lap_duration === best && <span style={{ fontSize: 9, color: F1.green, fontWeight: 700, background: `${F1.green}15`, padding: "1px 5px", borderRadius: 3 }}>P1</span>}
            <div style={{ marginLeft: "auto", width: 36, height: 3, background: F1.borderLight, borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${(1 - pct) * 100}%`, background: pct < 0.1 ? F1.green : pct > 0.7 ? F1.red : F1.yellow, borderRadius: 2 }} /></div>
          </div>); })}
        </div>);
      })}
    </div>
  </div>);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: F1.carbon, color: F1.text, fontFamily: F1.sans, overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${F1.red}44;border-radius:2px}
        select,button{font-family:${F1.sans}}
        select{background:${F1.inputBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${F1.red}88}
        button{background:${F1.cardBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${F1.red}88;background:${F1.carbonMid}}
        .f1-btn{background:${F1.red};border-color:${F1.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${F1.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${F1.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}</style>

      {modBg}{presetsModal}{statsModal}{lapsModal}

      {/* ─── HEADER — F1 broadcast bar ─── */}
      <div style={{ padding: mob ? "8px 10px" : "0", display: "flex", alignItems: "stretch", borderBottom: `2px solid ${F1.red}`, background: `linear-gradient(180deg, ${F1.carbonLight} 0%, ${F1.carbon} 100%)`, zIndex: 10, position: "relative", overflow: "hidden" }}>
        {/* Red accent strip */}
        <div style={{ width: mob ? 4 : 6, background: F1.red, flexShrink: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: mob ? 8 : 14, padding: mob ? "0 8px" : "10px 18px", flex: 1, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: mob ? 16 : 22, fontWeight: 900, letterSpacing: "0.04em", color: "#fff", textTransform: "uppercase" }}>Phantom</span>
            <span style={{ fontSize: mob ? 16 : 22, fontWeight: 300, color: F1.red, letterSpacing: "0.04em" }}>Cars</span>
          </div>
          {selMt && <span style={{ fontSize: 11, color: F1.textDim, fontWeight: 600, letterSpacing: "0.05em" }}>{selMt.meeting_name?.replace("Grand Prix", "GP")} {year}</span>}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <button onClick={() => setShowPresets(true)} style={{ fontSize: 10, padding: "4px 10px", letterSpacing: "0.05em" }}>⚡ PRESETS</button>
            {selSe && <button onClick={share} style={{ fontSize: 10, padding: "4px 10px" }}>{shareMsg || "SHARE"}</button>}
            {tp && <button onClick={() => setShowStats(true)} style={{ fontSize: 10, padding: "4px 10px" }}>STATS</button>}
            {tp && <button onClick={() => setShowLaps(true)} style={{ fontSize: 10, padding: "4px 10px" }}>LAPS</button>}
          </div>
        </div>
      </div>

      {/* ─── SELECTORS ─── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", padding: mob ? "8px 10px" : "8px 18px", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight }}>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>{[2026,2025,2024,2023].map((y) => <option key={y} value={y}>{y}</option>)}</select>
        <select value={selMt?.meeting_key || ""} onChange={(e) => setSelMt(mts.find((m) => m.meeting_key === Number(e.target.value)) || null)} style={{ minWidth: mob ? 110 : 155 }}><option value="">Grand Prix</option>{mts.map((m) => <option key={m.meeting_key} value={m.meeting_key}>{m.meeting_name}</option>)}</select>
        <select value={selSe?.session_key || ""} onChange={(e) => setSelSe(sess.find((s) => s.session_key === Number(e.target.value)) || null)} disabled={!sess.length} style={{ minWidth: mob ? 85 : 115 }}><option value="">Session</option>{sess.map((s) => <option key={s.session_key} value={s.session_key}>{s.session_name}</option>)}</select>
        {!mob && <div style={{ width: 1, height: 20, background: `${F1.red}33` }} />}
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 3, height: 18, background: co1, borderRadius: 1 }} />
          <select value={d1 || ""} onChange={(e) => { setD1(Number(e.target.value)); setSl1(null); setLaps1([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 68 : 100 }}><option value="">Driver 1</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || `#${x.driver_number}`}</option>)}</select>
          {laps1.length > 0 && <select value={sl1 || ""} onChange={(e) => setSl1(Number(e.target.value))} style={{ width: mob ? 56 : 72 }}><option value="">Lap</option>{laps1.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number}</option>)}</select>}
        </div>
        <span style={{ color: F1.red, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em" }}>VS</span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 3, height: 18, background: co2, borderRadius: 1 }} />
          <select value={d2 || ""} onChange={(e) => { setD2(Number(e.target.value)); setSl2(null); setLaps2([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 68 : 100 }}><option value="">Driver 2</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || `#${x.driver_number}`}</option>)}</select>
          {laps2.length > 0 && <select value={sl2 || ""} onChange={(e) => setSl2(Number(e.target.value))} style={{ width: mob ? 56 : 72 }}><option value="">Lap</option>{laps2.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number}</option>)}</select>}
        </div>
        <button className="f1-btn" onClick={loadData} disabled={!d1 || !d2 || !sl1 || !sl2 || !!loading}>{loading ? "..." : "COMPARE"}</button>
      </div>

      {err && <div style={{ padding: "8px 18px", background: `${F1.red}11`, borderBottom: `1px solid ${F1.red}22`, fontSize: 12, color: F1.red, display: "flex", alignItems: "center", gap: 8 }}><span style={{ flex: 1 }}>{err}</span><button onClick={() => setErr("")} style={{ padding: "2px 8px", fontSize: 10 }}>✕</button></div>}
      {loading && <div style={{ padding: "8px 18px", borderBottom: `1px solid ${F1.borderLight}` }}><div style={{ fontSize: 11, color: F1.textDim, fontFamily: F1.mono, marginBottom: 4 }}>{loading}</div>{ldPct !== undefined && <div style={{ height: 2, background: F1.borderLight, borderRadius: 1, overflow: "hidden" }}><div style={{ height: "100%", width: `${ldPct}%`, background: F1.red, borderRadius: 1, transition: "width .3s" }} /></div>}</div>}

      {mob && tp && <div style={{ display: "flex", borderBottom: `1px solid ${F1.borderLight}` }}>{["3d","telemetry"].map((tab) => <button key={tab} onClick={() => setMobTab(tab)} style={{ flex: 1, borderRadius: 0, borderBottom: mobTab === tab ? `2px solid ${F1.red}` : "2px solid transparent", background: mobTab === tab ? F1.cardBg : "transparent", fontWeight: mobTab === tab ? 700 : 400, fontSize: 11, padding: "7px 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>{tab === "3d" ? "Track" : "Telemetry"}</button>)}</div>}

      {/* ─── MAIN ─── */}
      <div style={{ display: "flex", flexDirection: mob ? "column" : "row", height: mob ? "auto" : `calc(100vh - ${tp ? 175 : 130}px)` }}>
        {(!mob || mobTab === "3d") && (
          <div style={{ flex: 1, position: "relative", minHeight: mob ? "50vh" : "auto" }}>
            <div ref={cRef} style={{ width: "100%", height: "100%", background: F1.carbon, cursor: "grab", minHeight: mob ? "50vh" : "auto" }} />

            {/* Camera mode */}
            {tp && <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 3 }}>
              {CAM_MODES.map((m) => <button key={m} onClick={() => setCam(m)} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.05em", textTransform: "uppercase", background: cam === m ? F1.red : F1.overlay, color: cam === m ? "#fff" : F1.textDim, borderColor: cam === m ? F1.red : F1.borderLight, fontWeight: 700 }}>{CAM_LABELS[m]}</button>)}
              <div style={{ width: 1, height: 16, background: F1.borderLight }} />
              <button onClick={() => setVizMode((v) => v === "normal" ? "heatmap" : "normal")} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.05em", textTransform: "uppercase", background: vizMode === "heatmap" ? "#0088ff" : F1.overlay, color: vizMode === "heatmap" ? "#fff" : F1.textDim, borderColor: vizMode === "heatmap" ? "#0088ff" : F1.borderLight, fontWeight: 700 }}>🌡 Speed</button>
            </div>}

            {/* Mini-map */}
            {tp && !mob && <div style={{ position: "absolute", top: 44, left: 10, zIndex: 2 }}><MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} /></div>}

            {/* Delta badge — F1 broadcast style */}
            {delta !== null && tp && (
              <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 2, animation: "fadeIn .4s" }}>
                <div style={{ background: F1.overlay, backdropFilter: "blur(8px)", borderRadius: 6, padding: mob ? "6px 16px" : "8px 24px", border: `1px solid ${F1.red}33`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: 8, color: F1.textMuted, letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase" }}>Interval</div>
                  <div style={{ fontSize: mob ? 20 : 28, fontWeight: 900, fontFamily: F1.mono, color: delta > 0 ? F1.red : F1.green, lineHeight: 1.1 }}>
                    {delta > 0 ? "+" : ""}{delta.toFixed(3)}<span style={{ fontSize: "0.5em", opacity: 0.7 }}>s</span>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginTop: 3 }}>
                    <span style={{ fontSize: 10, color: co1, fontFamily: F1.mono, fontWeight: 700 }}>{di1?.name_acronym} {fmt(li1?.lap_duration)}</span>
                    <span style={{ fontSize: 10, color: co2, fontFamily: F1.mono, fontWeight: 700 }}>{di2?.name_acronym} {fmt(li2?.lap_duration)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sectors */}
            {tp && li1 && li2 && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4, zIndex: 2, maxWidth: "95%" }}>
              <SD s={1} t1={li1.duration_sector_1} t2={li2.duration_sector_1} c1={co1} c2={co2} />
              <SD s={2} t1={li1.duration_sector_2} t2={li2.duration_sector_2} c1={co1} c2={co2} />
              <SD s={3} t1={li1.duration_sector_3} t2={li2.duration_sector_3} c1={co1} c2={co2} />
            </div>}

            {!tp && !loading && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
              <div style={{ fontSize: 72, fontWeight: 900, color: F1.red, opacity: 0.08, letterSpacing: "-0.03em", lineHeight: 1 }}>F1</div>
              <div style={{ fontSize: mob ? 14 : 17, fontWeight: 700, color: F1.textMuted, marginBottom: 8, letterSpacing: "0.03em" }}>GHOST CAR COMPARISON</div>
              <div style={{ fontSize: 12, color: F1.textMuted, maxWidth: 340 }}>Select a Grand Prix, session & two drivers above — or try ⚡ Presets for instant comparisons.</div>
            </div>}
          </div>
        )}

        {/* Telemetry */}
        {((!mob && showTel && tp) || (mob && mobTab === "telemetry" && tp)) && (
          <div style={{ width: mob ? "100%" : 310, borderLeft: mob ? "none" : `1px solid ${F1.borderLight}`, background: F1.panelBg, display: "flex", flexDirection: "column", maxHeight: mob ? "55vh" : "auto", animation: "fadeIn .2s" }}>
            <div style={{ padding: mob ? 10 : 14, overflowY: "auto", flex: 1 }}>
              {/* Driver cards */}
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {[{ di: di1, co: co1, ct: ct1, tire: tire1 }, { di: di2, co: co2, ct: ct2, tire: tire2 }].map((x, i) => (
                  <div key={i} style={{ flex: 1, background: F1.cardBg, borderRadius: 6, padding: "8px 10px", borderTop: `3px solid ${x.co}`, position: "relative" }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: x.co, fontFamily: F1.mono, letterSpacing: "0.05em" }}>{x.di?.name_acronym || "—"}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: F1.mono, lineHeight: 1.1 }}>{Math.round(x.ct.speed)}<span style={{ fontSize: 10, color: F1.textMuted, fontWeight: 400 }}> km/h</span></div>
                    <div style={{ display: "flex", gap: 8, marginTop: 4, fontSize: 10, fontFamily: F1.mono }}>
                      <span style={{ color: x.ct.throttle > 50 ? F1.green : F1.textMuted }}>THR {Math.round(x.ct.throttle)}%</span>
                      <span style={{ color: x.ct.brake > 0 ? F1.red : F1.textMuted }}>BRK {x.ct.brake > 0 ? "ON" : "OFF"}</span>
                      <span style={{ color: F1.textDim }}>G{x.ct.n_gear ?? x.ct.gear ?? "—"}</span>
                    </div>
                    {x.tire && <div style={{ position: "absolute", top: 8, right: 8, display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: TIRE_COLORS[x.tire] || "#888" }} /><span style={{ fontSize: 9, fontFamily: F1.mono, color: F1.textMuted }}>{x.tire}</span></div>}
                    {x.ct.drs >= 10 && <div style={{ position: "absolute", bottom: 8, right: 8, fontSize: 9, fontWeight: 700, color: F1.green, fontFamily: F1.mono, background: `${F1.green}15`, padding: "1px 5px", borderRadius: 3, animation: "pulse 1s infinite" }}>DRS</div>}
                  </div>
                ))}
              </div>
              {/* Trace labels + charts */}
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>SPEED</div>
              <TelChart data1={s1} data2={s2} color1={co1} color2={co2} maxVal={370} />
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>THROTTLE</div>
              <TelChart data1={t1} data2={t2} color1={co1} color2={co2} maxVal={100} />
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>BRAKE</div>
              <TelChart data1={b1} data2={b2} color1={co1} color2={co2} maxVal={100} h={35} />
            </div>
          </div>
        )}
      </div>

      {/* ─── PLAYBACK BAR — F1 broadcast style ─── */}
      {tp && (
        <div style={{ display: "flex", alignItems: "center", gap: mob ? 6 : 10, padding: mob ? "6px 10px" : "6px 18px", background: `linear-gradient(180deg, ${F1.carbonLight}, ${F1.carbon})`, borderTop: `1px solid ${F1.red}22` }}>
          <button onClick={() => { setProg(0); setPlay(false); }} style={{ padding: "3px 7px", fontSize: 11 }}>⏮</button>
          <button onClick={() => setPlay(!play)} style={{ padding: "3px 9px", fontSize: 13, background: play ? `${F1.red}33` : F1.cardBg, borderColor: play ? F1.red : F1.border }}>{play ? "⏸" : "▶"}</button>
          <button onClick={() => setLoop(!loop)} style={{ padding: "3px 7px", opacity: loop ? 1 : 0.35, fontSize: 11 }}>🔁</button>
          <input type="range" min="0" max="1" step="0.001" value={prog} onChange={(e) => setProg(parseFloat(e.target.value))} style={{ flex: 1, height: 4, accentColor: F1.red }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: mob ? 55 : 70, gap: 0 }}>
            <span style={{ fontSize: 10, color: co1, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(el1)}</span>
            <span style={{ fontSize: 10, color: co2, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(el2)}</span>
          </div>
          <select value={spd} onChange={(e) => setSpd(parseFloat(e.target.value))} style={{ width: 48, padding: "2px 3px", fontSize: 10 }}>
            <option value={0.25}>.25x</option><option value={0.5}>.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
          </select>
          {!mob && <button onClick={() => setShowTel(!showTel)} style={{ padding: "3px 7px", fontSize: 10, opacity: showTel ? 1 : 0.35 }}>📊</button>}
        </div>
      )}
    </div>
  );
}
