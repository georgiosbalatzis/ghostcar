import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────
// F1 PHANTOM CARS — 3D Ghost Lap Visualizer
// v3.0 — Presets, Camera Modes, Mini-map, Share,
//         Lap List, Elapsed Time, Loop, Stats,
//         Car Labels, Corners, Tire Compounds
// ─────────────────────────────────────────────

const API = "https://api.openf1.org/v1";

const THEMES = {
  dark: {
    bg: "#0a0a12", bgAlt: "#0d0d18", bgPanel: "rgba(8,8,15,0.95)",
    bgCard: "rgba(15,15,25,0.8)", bgOverlay: "rgba(8,8,15,0.9)",
    bgInput: "rgba(20,20,35,0.9)", bgButton: "rgba(30,30,50,0.9)",
    text: "#c8c8dd", textDim: "#8888aa", textMuted: "#555566",
    border: "rgba(60,60,100,0.4)", borderLight: "rgba(40,40,70,0.3)",
    gridColor1: 0x1a1a2e, gridColor2: 0x12121e,
    groundColor: 0x0d0d18, fogColor: 0x0a0a12,
    trackColor: 0x222233, lineColor: 0x3344aa,
    accent: "#6666ff", accentAlt: "#ff4488",
    positive: "#00ff88", negative: "#ff4466",
    miniTrack: "#334", miniTrackStroke: "#6666ff",
  },
  light: {
    bg: "#f0f1f5", bgAlt: "#e4e5eb", bgPanel: "rgba(255,255,255,0.97)",
    bgCard: "rgba(240,241,248,0.9)", bgOverlay: "rgba(255,255,255,0.95)",
    bgInput: "rgba(255,255,255,0.95)", bgButton: "rgba(230,232,240,0.95)",
    text: "#1a1a2e", textDim: "#5a5a7a", textMuted: "#9999aa",
    border: "rgba(100,105,140,0.25)", borderLight: "rgba(100,105,140,0.15)",
    gridColor1: 0xccccdd, gridColor2: 0xddddee,
    groundColor: 0xe8e8f0, fogColor: 0xf0f1f5,
    trackColor: 0xaaaacc, lineColor: 0x6666aa,
    accent: "#4444cc", accentAlt: "#dd2266",
    positive: "#00aa55", negative: "#dd2244",
    miniTrack: "#ccc", miniTrackStroke: "#6666aa",
  },
};

const TEAM_COLORS = {
  "Red Bull Racing": "#3671C6", "Red Bull": "#3671C6",
  "McLaren": "#FF8000", "Ferrari": "#E8002D", "Mercedes": "#27F4D2",
  "Aston Martin": "#229971", "Alpine": "#0093CC", "Williams": "#64C4FF",
  "RB": "#6692FF", "Racing Bulls": "#6692FF",
  "Kick Sauber": "#52E252", "Sauber": "#52E252",
  "Haas F1 Team": "#B6BABD", "Haas": "#B6BABD", "Cadillac": "#FFD700",
};
const getTeamColor = (t) => { if (!t) return "#888"; for (const [k, v] of Object.entries(TEAM_COLORS)) if (t.toLowerCase().includes(k.toLowerCase())) return v; return "#888"; };

const TIRE_COLORS = { SOFT: "#ff3333", MEDIUM: "#ffcc00", HARD: "#cccccc", INTERMEDIATE: "#44cc44", WET: "#4488ff" };

// ─── Quick Presets ───
const PRESETS = [
  { label: "VER vs NOR — Monza 2024 Q", year: 2024, meeting: "Italian Grand Prix", session: "Qualifying", d1: 1, d2: 4 },
  { label: "HAM vs VER — Bahrain 2024 R", year: 2024, meeting: "Bahrain Grand Prix", session: "Race", d1: 44, d2: 1 },
  { label: "NOR vs PIA — Silverstone 2024 Q", year: 2024, meeting: "British Grand Prix", session: "Qualifying", d1: 4, d2: 81 },
  { label: "LEC vs SAI — Monaco 2024 Q", year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 55 },
  { label: "VER vs NOR — Abu Dhabi 2024 Q", year: 2024, meeting: "Abu Dhabi Grand Prix", session: "Qualifying", d1: 1, d2: 4 },
  { label: "RUS vs HAM — Spa 2024 Q", year: 2024, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 44 },
];

// ─── API ───
async function fetchJSON(ep, params = {}, retries = 2) {
  const url = new URL(`${API}${ep}`);
  Object.entries(params).forEach(([k, v]) => { if (v != null && v !== "") url.searchParams.append(k, v); });
  for (let a = 0; a <= retries; a++) {
    try {
      const r = await fetch(url.toString());
      if (r.status === 429) { await new Promise((x) => setTimeout(x, 1500 * (a + 1))); continue; }
      if (!r.ok) throw new Error(`API ${r.status}: ${ep}`);
      return r.json();
    } catch (e) { if (a === retries) throw e; await new Promise((x) => setTimeout(x, 800 * (a + 1))); }
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
function interpolate(pts, t) {
  if (!pts?.length) return { x: 0, y: 0, z: 0 };
  const idx = Math.max(0, Math.min(1, t)) * (pts.length - 1), i0 = Math.floor(idx), i1 = Math.min(i0 + 1, pts.length - 1), f = idx - i0;
  return { x: pts[i0].x + (pts[i1].x - pts[i0].x) * f, y: pts[i0].y + (pts[i1].y - pts[i0].y) * f, z: pts[i0].z + (pts[i1].z - pts[i0].z) * f };
}
function normalize(points) {
  if (!points?.length) return [];
  let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity, mnZ = Infinity, mxZ = -Infinity;
  for (const p of points) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.y < mnY) mnY = p.y; if (p.y > mxY) mxY = p.y; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
  const sc = Math.max(mxX - mnX, mxY - mnY) || 1, cx = (mnX + mxX) / 2, cy = (mnY + mxY) / 2, cz = (mnZ + mxZ) / 2;
  return points.map((p) => ({ x: ((p.x - cx) / sc) * 40, y: ((p.z - cz) / sc) * 4, z: ((p.y - cy) / sc) * 40 }));
}
function telAt(tel, t) { if (!tel?.length) return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0, n_gear: 0 }; return tel[Math.min(Math.floor(t * (tel.length - 1)), tel.length - 1)]; }
function fastestLap(laps) { const v = laps.filter((l) => l.lap_duration > 10 && l.date_start); return v.length ? v.reduce((a, b) => a.lap_duration < b.lap_duration ? a : b) : null; }
function useIsMobile() { const [m, setM] = useState(typeof window !== "undefined" && window.innerWidth < 768); useEffect(() => { const h = () => setM(window.innerWidth < 768); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []); return m; }
function downsample(a, max) { if (!a || a.length <= max) return a || []; const s = a.length / max, o = []; for (let i = 0; i < max; i++) o.push(a[Math.floor(i * s)]); return o; }
function formatTime(s) { if (!s || s <= 0) return "0:00.000"; const m = Math.floor(s / 60), sec = s - m * 60; return `${m}:${sec < 10 ? "0" : ""}${sec.toFixed(3)}`; }

// ─── Share URL ───
function encodeShareURL(state) {
  const p = new URLSearchParams();
  if (state.year) p.set("y", state.year);
  if (state.meetingKey) p.set("mk", state.meetingKey);
  if (state.sessionKey) p.set("sk", state.sessionKey);
  if (state.d1) p.set("d1", state.d1);
  if (state.d2) p.set("d2", state.d2);
  if (state.l1) p.set("l1", state.l1);
  if (state.l2) p.set("l2", state.l2);
  return `${window.location.origin}${window.location.pathname}?${p.toString()}`;
}
function decodeShareURL() {
  const p = new URLSearchParams(window.location.search);
  return { year: p.get("y"), meetingKey: p.get("mk"), sessionKey: p.get("sk"), d1: p.get("d1"), d2: p.get("d2"), l1: p.get("l1"), l2: p.get("l2") };
}

// ─── Camera modes ───
const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
const CAM_LABELS = { orbit: "Orbit", follow1: "Follow D1", follow2: "Follow D2", top: "Top Down", cinematic: "Cinematic" };

// ─── Three.js Scene ───
function useThreeScene(containerRef, trackPoints, loc1, loc2, progress, c1, c2, theme, camMode, d1Label, d2Label) {
  const refs = useRef({});
  const camState = useRef({ angle: 0, pitch: 0.6, dist: 55, dragging: false, lastX: 0, lastY: 0, cinT: 0 });
  const norm1 = useMemo(() => loc1 ? normalize(loc1) : null, [loc1]);
  const norm2 = useMemo(() => loc2 ? normalize(loc2) : null, [loc2]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !trackPoints || trackPoints.length < 10) return;
    if (refs.current.renderer) { refs.current.renderer.dispose(); if (el.contains(refs.current.renderer.domElement)) el.removeChild(refs.current.renderer.domElement); }
    if (refs.current.frame) cancelAnimationFrame(refs.current.frame);

    const T = THEMES[theme], w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(T.fogColor, 0.006);
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio < 2, alpha: true });
    renderer.setSize(w, h); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); renderer.setClearColor(T.fogColor, 1);
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x334466, theme === "dark" ? 0.5 : 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, theme === "dark" ? 0.8 : 1.0); dir.position.set(20, 40, 20); scene.add(dir);
    scene.add(Object.assign(new THREE.PointLight(theme === "dark" ? 0x4488ff : 0x8888cc, 0.6, 100), { position: new THREE.Vector3(0, 15, 0) }));

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: T.groundColor, roughness: 0.95 }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.5; scene.add(ground);
    const grid = new THREE.GridHelper(200, 60, T.gridColor1, T.gridColor2); grid.position.y = -0.45; scene.add(grid);

    const curve = new THREE.CatmullRomCurve3(trackPoints.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true);
    const seg = Math.min(trackPoints.length * 2, 600);
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, seg, 0.8, 6, true), new THREE.MeshStandardMaterial({ color: T.trackColor, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 0.8 })));
    const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(seg)), new THREE.LineBasicMaterial({ color: T.lineColor, transparent: true, opacity: 0.4 }));
    ln.position.y += 0.05; scene.add(ln);

    // Sector posts
    const sC = [0x00ff88, 0xffaa00, 0xff3366];
    [0, 0.33, 0.66].forEach((t, i) => { const sp = curve.getPointAt(t); const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3, 6), new THREE.MeshStandardMaterial({ color: sC[i], emissive: sC[i], emissiveIntensity: 0.6 })); post.position.set(sp.x, sp.y + 1.5, sp.z); scene.add(post); });

    // Corner markers — place numbered markers at high-curvature points
    const cornerPositions = [];
    const curveSamples = 200;
    for (let i = 0; i < curveSamples; i++) {
      const t0 = i / curveSamples, t1 = (i + 1) / curveSamples, t2 = (i + 2) / curveSamples;
      if (t2 > 1) break;
      const p0 = curve.getPointAt(t0), p1 = curve.getPointAt(t1), p2 = curve.getPointAt(t2);
      const d1x = p1.x - p0.x, d1z = p1.z - p0.z, d2x = p2.x - p1.x, d2z = p2.z - p1.z;
      const cross = Math.abs(d1x * d2z - d1z * d2x);
      if (cross > 0.15) {
        if (cornerPositions.length === 0 || Math.abs(t1 - cornerPositions[cornerPositions.length - 1].t) > 0.04) {
          cornerPositions.push({ t: t1, point: p1 });
        }
      }
    }
    cornerPositions.slice(0, 20).forEach((c, i) => {
      const sp = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.3 }));
      sp.position.set(c.point.x, c.point.y + 0.3, c.point.z); scene.add(sp);
      // Number sprite
      const canvas = document.createElement("canvas"); canvas.width = 48; canvas.height = 48;
      const ctx = canvas.getContext("2d"); ctx.fillStyle = "rgba(0,0,0,0.5)"; ctx.beginPath(); ctx.arc(24, 24, 20, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "bold 22px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(`${i + 1}`, 24, 24);
      const tex = new THREE.CanvasTexture(canvas);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      sprite.position.set(c.point.x, c.point.y + 2.5, c.point.z); sprite.scale.set(1.5, 1.5, 1); scene.add(sprite);
    });

    // Start/finish
    const sf = curve.getPointAt(0);
    scene.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 })), { position: new THREE.Vector3(sf.x, sf.y + 0.1, sf.z) }));

    // Cars
    function makeCar(color, label) {
      const g = new THREE.Group();
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), emissive: new THREE.Color(color), emissiveIntensity: 0.4, metalness: 0.6, roughness: 0.3 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 1.4), mat); body.position.y = 0.25; g.add(body);
      const nose = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 4), mat); nose.geometry.rotateX(-Math.PI / 2); nose.position.set(0, 0.25, 0.9); g.add(nose);
      const glow = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.9, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.15, side: THREE.DoubleSide }));
      glow.rotation.x = -Math.PI / 2; glow.position.y = 0.05; g.add(glow);
      g.add(new THREE.PointLight(new THREE.Color(color), 0.5, 8));
      // Label sprite
      if (label) {
        const c2d = document.createElement("canvas"); c2d.width = 128; c2d.height = 48;
        const ctx2 = c2d.getContext("2d"); ctx2.fillStyle = color; ctx2.globalAlpha = 0.85;
        ctx2.beginPath(); const r = 8; ctx2.moveTo(r, 0); ctx2.lineTo(128 - r, 0); ctx2.quadraticCurveTo(128, 0, 128, r); ctx2.lineTo(128, 48 - r); ctx2.quadraticCurveTo(128, 48, 128 - r, 48); ctx2.lineTo(r, 48); ctx2.quadraticCurveTo(0, 48, 0, 48 - r); ctx2.lineTo(0, r); ctx2.quadraticCurveTo(0, 0, r, 0); ctx2.fill();
        ctx2.globalAlpha = 1; ctx2.fillStyle = "#fff"; ctx2.font = "bold 28px sans-serif"; ctx2.textAlign = "center"; ctx2.textBaseline = "middle"; ctx2.fillText(label, 64, 26);
        const tex2 = new THREE.CanvasTexture(c2d);
        const sp2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex2, transparent: true, depthWrite: false }));
        sp2.position.set(0, 1.8, 0); sp2.scale.set(2.5, 1, 1); g.add(sp2);
      }
      return g;
    }
    const car1 = makeCar(c1, d1Label), car2 = makeCar(c2, d2Label);
    scene.add(car1); scene.add(car2);

    function makeTrail(color) { const max = 60, pos = new Float32Array(max * 3), geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setDrawRange(0, 0); const l2 = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.5 })); scene.add(l2); return { line: l2, positions: pos, max, count: 0 }; }
    const tr1 = makeTrail(c1), tr2 = makeTrail(c2);

    refs.current = { scene, camera, renderer, car1, car2, tr1, tr2, norm1, norm2, curve, frame: null };

    const cs = camState.current;
    const onDown = (e) => { cs.dragging = true; cs.lastX = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.lastY = e.clientY ?? e.touches?.[0]?.clientY ?? 0; };
    const onMove = (e) => { if (!cs.dragging) return; const cx2 = e.clientX ?? e.touches?.[0]?.clientX ?? 0, cy2 = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (cx2 - cs.lastX) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (cy2 - cs.lastY) * 0.005)); cs.lastX = cx2; cs.lastY = cy2; };
    const onUp = () => { cs.dragging = false; };
    const onWheel = (e) => { cs.dist = Math.max(15, Math.min(120, cs.dist + e.deltaY * 0.05)); };
    const de = renderer.domElement;
    de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove); de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
    de.addEventListener("wheel", onWheel, { passive: true }); de.addEventListener("touchstart", onDown, { passive: true }); de.addEventListener("touchmove", onMove, { passive: true }); de.addEventListener("touchend", onUp);

    function animate() {
      refs.current.frame = requestAnimationFrame(animate);
      cs.cinT += 0.0003;
      if (!cs.dragging && camMode === "orbit") cs.angle += 0.001;
      renderer.render(scene, camera);
    }
    animate();

    let rt; const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { if (!el) return; camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth, el.clientHeight); }, 100); };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove); de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp);
      de.removeEventListener("wheel", onWheel); de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp);
      cancelAnimationFrame(refs.current.frame); renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [trackPoints, c1, c2, theme, d1Label, d2Label]);

  useEffect(() => { refs.current.norm1 = norm1; }, [norm1]);
  useEffect(() => { refs.current.norm2 = norm2; }, [norm2]);

  // Update cars + camera per frame
  useEffect(() => {
    const { car1, car2, tr1, tr2, camera, curve } = refs.current;
    if (!car1 || !car2 || !trackPoints || trackPoints.length < 2) return;
    const cs = camState.current;

    function updateCar(car, trail, data, t) {
      const pts = data?.length >= 2 ? data : trackPoints;
      const p = interpolate(pts, t); car.position.set(p.x, p.y + 0.3, p.z);
      const p2 = interpolate(pts, Math.min(1, t + 0.005));
      if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001) car.lookAt(p2.x, p.y + 0.3, p2.z);
      if (trail) {
        const c = Math.min(trail.count + 1, trail.max);
        for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; }
        trail.positions[0] = p.x; trail.positions[1] = p.y + 0.3; trail.positions[2] = p.z;
        trail.count = c; trail.line.geometry.attributes.position.needsUpdate = true; trail.line.geometry.setDrawRange(0, c);
      }
      return p;
    }

    const p1 = updateCar(car1, tr1, refs.current.norm1, progress);
    const p2 = updateCar(car2, tr2, refs.current.norm2, progress);

    // Camera modes
    if (camera) {
      if (camMode === "orbit") {
        camera.position.set(Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch), cs.dist * Math.sin(cs.pitch), Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch));
        camera.lookAt(0, 0, 0);
      } else if (camMode === "follow1" || camMode === "follow2") {
        const target = camMode === "follow1" ? p1 : p2;
        const pts = camMode === "follow1" ? (refs.current.norm1 || trackPoints) : (refs.current.norm2 || trackPoints);
        const ahead = interpolate(pts, Math.min(1, progress + 0.02));
        const dx = ahead.x - target.x, dz = ahead.z - target.z;
        const len = Math.sqrt(dx * dx + dz * dz) || 1;
        camera.position.set(target.x - (dx / len) * 8, target.y + 5, target.z - (dz / len) * 8);
        camera.lookAt(ahead.x, target.y + 0.5, ahead.z);
      } else if (camMode === "top") {
        camera.position.set(0, 70, 0); camera.lookAt(0, 0, 0);
      } else if (camMode === "cinematic" && curve) {
        const ct = (cs.cinT + progress * 0.3) % 1;
        const cp = curve.getPointAt(ct);
        camera.position.set(cp.x + 8, cp.y + 6, cp.z + 8);
        const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2, z: (p1.z + p2.z) / 2 };
        camera.lookAt(mid.x, mid.y, mid.z);
      }
    }
  }, [progress, trackPoints, camMode]);
}

// ─── Mini-map ───
const MiniMap = memo(function MM({ trackPoints, loc1, loc2, progress, c1, c2, theme }) {
  const canvasRef = useRef(null);
  const norm1 = useMemo(() => loc1 ? normalize(loc1) : null, [loc1]);
  const norm2 = useMemo(() => loc2 ? normalize(loc2) : null, [loc2]);

  useEffect(() => {
    const c = canvasRef.current; if (!c || !trackPoints?.length) return;
    const ctx = c.getContext("2d"), s = c.width, pad = 12;
    ctx.clearRect(0, 0, s, s);
    // BG
    ctx.fillStyle = THEMES[theme].bgOverlay; ctx.beginPath(); ctx.roundRect(0, 0, s, s, 8); ctx.fill();

    // Project to 2D (use x,z)
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of trackPoints) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    const proj = (p) => ({ x: pad + ((p.x - mnX) / range) * (s - pad * 2), y: pad + ((p.z - mnZ) / range) * (s - pad * 2) });

    // Track line
    ctx.strokeStyle = THEMES[theme].miniTrackStroke; ctx.lineWidth = 2; ctx.globalAlpha = 0.4; ctx.beginPath();
    trackPoints.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); });
    ctx.closePath(); ctx.stroke(); ctx.globalAlpha = 1;

    // Cars
    function drawCar(data, color) {
      const pts = data?.length >= 2 ? data : trackPoints;
      const pt = interpolate(pts, progress); const pp = proj(pt);
      ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 6;
      ctx.beginPath(); ctx.arc(pp.x, pp.y, 4, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    }
    drawCar(norm1, c1); drawCar(norm2, c2);
  }, [trackPoints, progress, loc1, loc2, c1, c2, theme]);

  return <canvas ref={canvasRef} width={140} height={140} style={{ width: 140, height: 140, borderRadius: 8, border: "1px solid var(--border-light)" }} />;
});

// ─── Telemetry Chart ───
const TelChart = memo(function TC({ label, data1, data2, color1, color2, maxVal, unit, icon }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"), w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "rgba(10,10,18,0.4)"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(60,60,100,0.15)"; ctx.lineWidth = 0.5;
    for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(0, (h / 4) * i); ctx.lineTo(w, (h / 4) * i); ctx.stroke(); }
    function draw(data, col) { if (!data?.length) return; const step = Math.max(1, Math.floor(data.length / w)); ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.beginPath(); let f = true; for (let i = 0; i < data.length; i += step) { const x = (i / (data.length - 1)) * w, y = h - (data[i] / maxVal) * h; f ? ctx.moveTo(x, y) : ctx.lineTo(x, y); f = false; } ctx.stroke(); }
    draw(data1, color1); draw(data2, color2);
  }, [data1, data2, color1, color2, maxVal]);
  return (<div style={{ marginBottom: 8 }}><div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--mono)" }}>{icon}<span>{label}</span><span style={{ marginLeft: "auto", color: "var(--text-muted)" }}>{unit}</span></div><canvas ref={ref} width={320} height={55} style={{ width: "100%", height: 55, borderRadius: 4, border: "1px solid var(--border-light)" }} /></div>);
});

// ─── Sector Delta ───
const SectorDelta = memo(function SD({ sector, d1Time, d2Time, color1, color2 }) {
  const d = d1Time && d2Time ? d1Time - d2Time : null;
  const sC = ["#00ff88", "#ffaa00", "#ff3366"];
  return (<div style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 10px", borderLeft: `3px solid ${sC[sector - 1]}`, flex: 1, minWidth: 75 }}>
    <div style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--mono)", marginBottom: 3 }}>S{sector}</div>
    <div style={{ fontSize: 11, color: color1, fontFamily: "var(--mono)" }}>{d1Time ? d1Time.toFixed(3) : "—"}</div>
    <div style={{ fontSize: 11, color: color2, fontFamily: "var(--mono)" }}>{d2Time ? d2Time.toFixed(3) : "—"}</div>
    {d !== null && <div style={{ fontSize: 11, fontWeight: 700, color: d > 0 ? "var(--negative)" : "var(--positive)", fontFamily: "var(--mono)", marginTop: 2 }}>{d > 0 ? "+" : ""}{d.toFixed(3)}</div>}
  </div>);
});

function LoadingBar({ text, pct }) {
  return (<div style={{ padding: "10px 16px", background: "rgba(60,60,255,0.04)", borderBottom: "1px solid var(--border-light)" }}>
    <div style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--mono)", marginBottom: 6 }}>{text}</div>
    {pct !== undefined && <div style={{ height: 3, background: "var(--border-light)", borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${pct}%`, background: "var(--accent)", borderRadius: 2, transition: "width 0.3s" }} /></div>}
  </div>);
}

// Icons
const SpeedIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="14" r="8" /><path d="M12 14l3-6" /></svg>);
const ThrottleIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>);
const BrakeIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9l6 6M15 9l-6 6" /></svg>);
const SunIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>);
const MoonIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);
const ShareIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>);
const LoopIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>);

// ═══════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════
export default function F1PhantomCars() {
  const isMobile = useIsMobile();
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("phantom-theme") || "dark"; } catch { return "dark"; } });
  const T = THEMES[theme];
  const toggleTheme = useCallback(() => { const n = theme === "dark" ? "light" : "dark"; setTheme(n); try { localStorage.setItem("phantom-theme", n); } catch {} }, [theme]);

  const [year, setYear] = useState(2026);
  const [meetings, setMeetings] = useState([]);
  const [selMeeting, setSelMeeting] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [selSession, setSelSession] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [selLap1, setSelLap1] = useState(null);
  const [selLap2, setSelLap2] = useState(null);
  const [laps1, setLaps1] = useState([]);
  const [laps2, setLaps2] = useState([]);
  const [loc1, setLoc1] = useState(null);
  const [loc2, setLoc2] = useState(null);
  const [tel1, setTel1] = useState(null);
  const [tel2, setTel2] = useState(null);
  const [trackPts, setTrackPts] = useState(null);
  const [stints1, setStints1] = useState([]);
  const [stints2, setStints2] = useState([]);

  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const [camMode, setCamMode] = useState("orbit");
  const rafRef = useRef(null); const ltRef = useRef(null);

  const [loading, setLoading] = useState("");
  const [loadPct, setLoadPct] = useState(undefined);
  const [error, setError] = useState("");
  const [showTel, setShowTel] = useState(true);
  const [mobileTab, setMobileTab] = useState("3d");
  const [showPresets, setShowPresets] = useState(false);
  const [showLapList, setShowLapList] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  const canvasRef = useRef(null);
  const shareUrlLoadedRef = useRef(false);

  const d1Info = drivers.find((x) => x.driver_number === d1);
  const d2Info = drivers.find((x) => x.driver_number === d2);
  const c1 = d1Info ? getTeamColor(d1Info.team_name) : "#4488ff";
  const c2 = d2Info ? getTeamColor(d2Info.team_name) : "#ff4488";
  const l1Info = laps1.find((l) => l.lap_number === selLap1);
  const l2Info = laps2.find((l) => l.lap_number === selLap2);
  const totalDelta = l1Info?.lap_duration && l2Info?.lap_duration ? l1Info.lap_duration - l2Info.lap_duration : null;

  // Elapsed time
  const elapsed1 = l1Info?.lap_duration ? progress * l1Info.lap_duration : 0;
  const elapsed2 = l2Info?.lap_duration ? progress * l2Info.lap_duration : 0;

  // Tire compound for selected lap
  const tire1 = stints1.find((s) => selLap1 >= s.lap_start && selLap1 <= s.lap_end)?.compound?.toUpperCase();
  const tire2 = stints2.find((s) => selLap2 >= s.lap_start && selLap2 <= s.lap_end)?.compound?.toUpperCase();

  const maxS = isMobile ? 200 : 400;
  const spd1 = useMemo(() => downsample(tel1?.map((t) => t.speed || 0), maxS), [tel1, maxS]);
  const spd2 = useMemo(() => downsample(tel2?.map((t) => t.speed || 0), maxS), [tel2, maxS]);
  const thr1 = useMemo(() => downsample(tel1?.map((t) => t.throttle || 0), maxS), [tel1, maxS]);
  const thr2 = useMemo(() => downsample(tel2?.map((t) => t.throttle || 0), maxS), [tel2, maxS]);
  const brk1 = useMemo(() => downsample(tel1?.map((t) => (t.brake > 0 ? 100 : 0)), maxS), [tel1, maxS]);
  const brk2 = useMemo(() => downsample(tel2?.map((t) => (t.brake > 0 ? 100 : 0)), maxS), [tel2, maxS]);
  const ct1 = telAt(tel1, progress), ct2 = telAt(tel2, progress);

  // Stats
  const topSpeed1 = useMemo(() => tel1 ? Math.max(...tel1.map((t) => t.speed || 0)) : 0, [tel1]);
  const topSpeed2 = useMemo(() => tel2 ? Math.max(...tel2.map((t) => t.speed || 0)) : 0, [tel2]);
  const avgSpeed1 = useMemo(() => tel1?.length ? tel1.reduce((a, t) => a + (t.speed || 0), 0) / tel1.length : 0, [tel1]);
  const avgSpeed2 = useMemo(() => tel2?.length ? tel2.reduce((a, t) => a + (t.speed || 0), 0) / tel2.length : 0, [tel2]);
  const maxBrk1 = useMemo(() => tel1 ? tel1.filter((t) => t.brake > 0).length / (tel1.length || 1) * 100 : 0, [tel1]);
  const maxBrk2 = useMemo(() => tel2 ? tel2.filter((t) => t.brake > 0).length / (tel2.length || 1) * 100 : 0, [tel2]);

  // ─── Data loading ───
  useEffect(() => { setLoading("Loading calendar..."); setError(""); fetchMeetings(year).then((d) => { setMeetings(d.filter((m) => m.meeting_name)); setSelMeeting(null); setSelSession(null); setSessions([]); setDrivers([]); setD1(null); setD2(null); setTrackPts(null); setLoading(""); }).catch((e) => { setError(e.message); setLoading(""); }); }, [year]);
  useEffect(() => { if (!selMeeting) return; setLoading("Loading sessions..."); fetchSessions(selMeeting.meeting_key).then((d) => { setSessions(d.filter((s) => ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"].includes(s.session_name))); setSelSession(null); setDrivers([]); setD1(null); setD2(null); setTrackPts(null); setLoading(""); }).catch((e) => { setError(e.message); setLoading(""); }); }, [selMeeting]);
  useEffect(() => { if (!selSession) return; setLoading("Loading drivers..."); fetchDrivers(selSession.session_key).then((d) => { const seen = new Set(); setDrivers(d.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; })); setD1(null); setD2(null); setTrackPts(null); setLoading(""); }).catch((e) => { setError(e.message); setLoading(""); }); }, [selSession]);
  useEffect(() => { if (selSession && d1) { fetchLaps(selSession.session_key, d1).then((l) => { setLaps1(l); setSelLap1(null); }).catch(() => setLaps1([])); fetchStints(selSession.session_key, d1).then(setStints1).catch(() => setStints1([])); } }, [selSession, d1]);
  useEffect(() => { if (selSession && d2) { fetchLaps(selSession.session_key, d2).then((l) => { setLaps2(l); setSelLap2(null); }).catch(() => setLaps2([])); fetchStints(selSession.session_key, d2).then(setStints2).catch(() => setStints2([])); } }, [selSession, d2]);
  useEffect(() => { if (laps1.length && !selLap1) { const f = fastestLap(laps1); if (f) setSelLap1(f.lap_number); } }, [laps1]);
  useEffect(() => { if (laps2.length && !selLap2) { const f = fastestLap(laps2); if (f) setSelLap2(f.lap_number); } }, [laps2]);

  // Share URL restore
  useEffect(() => {
    if (shareUrlLoadedRef.current) return;
    const u = decodeShareURL();
    if (u.year && u.meetingKey) { shareUrlLoadedRef.current = true; setYear(Number(u.year)); }
  }, []);
  useEffect(() => {
    if (!shareUrlLoadedRef.current) return;
    const u = decodeShareURL();
    if (u.meetingKey && meetings.length) {
      const m = meetings.find((x) => String(x.meeting_key) === u.meetingKey);
      if (m && !selMeeting) setSelMeeting(m);
    }
  }, [meetings]);
  useEffect(() => {
    const u = decodeShareURL();
    if (u.sessionKey && sessions.length && !selSession) {
      const s = sessions.find((x) => String(x.session_key) === u.sessionKey);
      if (s) setSelSession(s);
    }
  }, [sessions]);
  useEffect(() => {
    const u = decodeShareURL();
    if (u.d1 && u.d2 && drivers.length && !d1 && !d2) {
      setD1(Number(u.d1)); setD2(Number(u.d2));
    }
  }, [drivers]);
  useEffect(() => {
    const u = decodeShareURL();
    if (u.l1 && laps1.length && !selLap1) setSelLap1(Number(u.l1));
  }, [laps1]);
  useEffect(() => {
    const u = decodeShareURL();
    if (u.l2 && laps2.length && !selLap2) setSelLap2(Number(u.l2));
  }, [laps2]);

  const loadRaceData = useCallback(async () => {
    if (!selSession || !d1 || !d2 || !selLap1 || !selLap2) return;
    setLoading("Fetching telemetry..."); setError(""); setLoadPct(0);
    try {
      const sk = selSession.session_key;
      const la1 = laps1.find((l) => l.lap_number === selLap1), la2 = laps2.find((l) => l.lap_number === selLap2);
      if (!la1?.date_start || !la2?.date_start) { setError("Lap timing unavailable — try another lap."); setLoading(""); return; }
      const e1 = new Date(new Date(la1.date_start).getTime() + (la1.lap_duration || 120) * 1000).toISOString();
      const e2 = new Date(new Date(la2.date_start).getTime() + (la2.lap_duration || 120) * 1000).toISOString();
      setLoadPct(15); setLoading("Fetching location data...");
      const [lo1, lo2] = await Promise.all([fetchLocation(sk, d1, la1.date_start, e1), fetchLocation(sk, d2, la2.date_start, e2)]);
      setLoadPct(55); setLoading("Fetching car telemetry...");
      const [ca1, ca2] = await Promise.all([fetchCarData(sk, d1, la1.date_start, e1), fetchCarData(sk, d2, la2.date_start, e2)]);
      setLoadPct(85);
      if (lo1.length < 5 || lo2.length < 5) { setError("Insufficient location data — try different laps."); setLoading(""); setLoadPct(undefined); return; }
      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2);
      setTrackPts(normalize(lo1)); setProgress(0); setIsPlaying(false);
      setLoadPct(100); setTimeout(() => { setLoading(""); setLoadPct(undefined); }, 300);
    } catch (e) { setError(`Load failed: ${e.message}`); setLoading(""); setLoadPct(undefined); }
  }, [selSession, d1, d2, selLap1, selLap2, laps1, laps2]);

  // Preset loader
  const loadPreset = useCallback(async (preset) => {
    setShowPresets(false); setLoading("Loading preset..."); setError("");
    try {
      setYear(preset.year);
      const mts = await fetchMeetings(preset.year); setMeetings(mts.filter((m) => m.meeting_name));
      const mt = mts.find((m) => m.meeting_name === preset.meeting);
      if (!mt) throw new Error(`Meeting "${preset.meeting}" not found`);
      setSelMeeting(mt);
      const ss = await fetchSessions(mt.meeting_key);
      const filtered = ss.filter((s) => ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"].includes(s.session_name));
      setSessions(filtered);
      const se = filtered.find((s) => s.session_name === preset.session);
      if (!se) throw new Error(`Session "${preset.session}" not found`);
      setSelSession(se);
      const dr = await fetchDrivers(se.session_key);
      const seen = new Set(); setDrivers(dr.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; }));
      setD1(preset.d1); setD2(preset.d2);
      setLoading("");
    } catch (e) { setError(e.message); setLoading(""); }
  }, []);

  // Share URL
  const shareURL = useCallback(() => {
    if (!selMeeting || !selSession) return;
    const url = encodeShareURL({ year, meetingKey: selMeeting.meeting_key, sessionKey: selSession.session_key, d1, d2, l1: selLap1, l2: selLap2 });
    navigator.clipboard?.writeText(url).then(() => { setShareMsg("Link copied!"); setTimeout(() => setShareMsg(""), 2000); }).catch(() => { setShareMsg("Copy failed"); setTimeout(() => setShareMsg(""), 2000); });
    window.history.replaceState(null, "", url.split(window.location.origin)[1]);
  }, [year, selMeeting, selSession, d1, d2, selLap1, selLap2]);

  // 3D
  useThreeScene(canvasRef, trackPts, loc1, loc2, progress, c1, c2, theme, camMode, d1Info?.name_acronym || "", d2Info?.name_acronym || "");

  // Playback RAF
  useEffect(() => {
    if (!isPlaying) { ltRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    function tick(ts) {
      if (!ltRef.current) ltRef.current = ts;
      const dt = (ts - ltRef.current) / 1000; ltRef.current = ts;
      setProgress((p) => { const n = p + dt * 0.015 * speed; if (n >= 1) { if (loop) return 0; setIsPlaying(false); return 1; } return n; });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isPlaying, speed, loop]);

  // Keyboard
  useEffect(() => {
    const h = (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
      if (e.code === "Space") { e.preventDefault(); if (trackPts) setIsPlaying((p) => !p); }
      if (e.code === "KeyR") { setProgress(0); setIsPlaying(false); }
      if (e.code === "KeyT") setShowTel((s) => !s);
      if (e.code === "KeyD") toggleTheme();
      if (e.code === "KeyC") setCamMode((m) => CAM_MODES[(CAM_MODES.indexOf(m) + 1) % CAM_MODES.length]);
      if (e.code === "KeyL") setLoop((l) => !l);
      if (e.code === "ArrowRight") setProgress((p) => Math.min(1, p + 0.01));
      if (e.code === "ArrowLeft") setProgress((p) => Math.max(0, p - 0.01));
    };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [trackPts, toggleTheme]);

  const cssVars = { "--bg": T.bg, "--bg-alt": T.bgAlt, "--bg-panel": T.bgPanel, "--bg-card": T.bgCard, "--bg-overlay": T.bgOverlay, "--bg-input": T.bgInput, "--bg-button": T.bgButton, "--text": T.text, "--text-dim": T.textDim, "--text-muted": T.textMuted, "--border": T.border, "--border-light": T.borderLight, "--accent": T.accent, "--accent-alt": T.accentAlt, "--positive": T.positive, "--negative": T.negative, "--mono": "'JetBrains Mono','SF Mono',monospace", "--sans": "'Outfit','Segoe UI',system-ui,sans-serif" };

  // ─── Lap list panel ───
  const lapListPanel = showLapList && (
    <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: isMobile ? "100%" : 360, background: "var(--bg-panel)", borderLeft: "1px solid var(--border)", zIndex: 100, display: "flex", flexDirection: "column", animation: "fadeIn .2s" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid var(--border-light)" }}>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Lap List</span>
        <button onClick={() => setShowLapList(false)} style={{ marginLeft: "auto", padding: "2px 8px" }}>✕</button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
        {[{ label: d1Info?.name_acronym || "D1", color: c1, laps: laps1, sel: selLap1, setSel: setSelLap1 }, { label: d2Info?.name_acronym || "D2", color: c2, laps: laps2, sel: selLap2, setSel: setSelLap2 }].map((drv) => {
          const valid = drv.laps.filter((l) => l.lap_duration > 10);
          const best = valid.length ? Math.min(...valid.map((l) => l.lap_duration)) : 0;
          const worst = valid.length ? Math.max(...valid.map((l) => l.lap_duration)) : 0;
          return (
            <div key={drv.label} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: drv.color, marginBottom: 6, fontFamily: "var(--mono)" }}>{drv.label}</div>
              {valid.sort((a, b) => a.lap_duration - b.lap_duration).map((l) => {
                const pct = worst > best ? (l.lap_duration - best) / (worst - best) : 0;
                const bg = pct < 0.1 ? "rgba(0,255,100,0.08)" : pct > 0.8 ? "rgba(255,60,60,0.06)" : "transparent";
                return (
                  <div key={l.lap_number} onClick={() => drv.setSel(l.lap_number)} style={{ display: "flex", gap: 8, alignItems: "center", padding: "4px 8px", borderRadius: 4, cursor: "pointer", background: l.lap_number === drv.sel ? `${drv.color}22` : bg, border: l.lap_number === drv.sel ? `1px solid ${drv.color}44` : "1px solid transparent", marginBottom: 2, fontSize: 12, fontFamily: "var(--mono)" }}>
                    <span style={{ width: 32, color: "var(--text-muted)" }}>L{l.lap_number}</span>
                    <span style={{ fontWeight: l.lap_duration === best ? 800 : 400, color: l.lap_duration === best ? "var(--positive)" : "var(--text)" }}>{formatTime(l.lap_duration)}</span>
                    {l.lap_duration === best && <span style={{ fontSize: 9, color: "var(--positive)", fontWeight: 700 }}>BEST</span>}
                    <div style={{ marginLeft: "auto", width: 40, height: 3, background: "var(--border-light)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(1 - pct) * 100}%`, background: pct < 0.1 ? "var(--positive)" : pct > 0.8 ? "var(--negative)" : "var(--accent)", borderRadius: 2 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ─── Stats modal ───
  const statsPanel = showStats && trackPts && (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, zIndex: 100, minWidth: isMobile ? "90%" : 400, animation: "fadeIn .2s" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Comparison Stats</span>
        <button onClick={() => setShowStats(false)} style={{ marginLeft: "auto", padding: "2px 8px" }}>✕</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "var(--mono)" }}>
        <thead><tr style={{ color: "var(--text-muted)", fontSize: 10 }}>
          <th style={{ textAlign: "left", padding: "4px 8px" }}>METRIC</th>
          <th style={{ textAlign: "center", padding: "4px 8px", color: c1 }}>{d1Info?.name_acronym || "D1"}</th>
          <th style={{ textAlign: "center", padding: "4px 8px", color: c2 }}>{d2Info?.name_acronym || "D2"}</th>
        </tr></thead>
        <tbody>
          {[
            { m: "Lap Time", v1: l1Info?.lap_duration ? formatTime(l1Info.lap_duration) : "—", v2: l2Info?.lap_duration ? formatTime(l2Info.lap_duration) : "—" },
            { m: "Top Speed", v1: `${Math.round(topSpeed1)} km/h`, v2: `${Math.round(topSpeed2)} km/h` },
            { m: "Avg Speed", v1: `${Math.round(avgSpeed1)} km/h`, v2: `${Math.round(avgSpeed2)} km/h` },
            { m: "Braking %", v1: `${maxBrk1.toFixed(1)}%`, v2: `${maxBrk2.toFixed(1)}%` },
            { m: "S1", v1: l1Info?.duration_sector_1?.toFixed(3) || "—", v2: l2Info?.duration_sector_1?.toFixed(3) || "—" },
            { m: "S2", v1: l1Info?.duration_sector_2?.toFixed(3) || "—", v2: l2Info?.duration_sector_2?.toFixed(3) || "—" },
            { m: "S3", v1: l1Info?.duration_sector_3?.toFixed(3) || "—", v2: l2Info?.duration_sector_3?.toFixed(3) || "—" },
            { m: "Tire", v1: tire1 || "—", v2: tire2 || "—" },
          ].map((r) => (
            <tr key={r.m} style={{ borderTop: "1px solid var(--border-light)" }}>
              <td style={{ padding: "6px 8px", color: "var(--text-dim)" }}>{r.m}</td>
              <td style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600, color: c1 }}>{r.v1}</td>
              <td style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600, color: c2 }}>{r.v2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ─── Presets modal ───
  const presetsPanel = showPresets && (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, zIndex: 100, minWidth: isMobile ? "90%" : 380, animation: "fadeIn .2s" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontWeight: 700, fontSize: 14 }}>Quick Presets</span>
        <button onClick={() => setShowPresets(false)} style={{ marginLeft: "auto", padding: "2px 8px" }}>✕</button>
      </div>
      {PRESETS.map((p, i) => (
        <button key={i} onClick={() => loadPreset(p)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 6, borderRadius: 6, fontSize: 13, fontFamily: "var(--mono)" }}>
          {p.label}
        </button>
      ))}
    </div>
  );

  // Backdrop
  const backdrop = (showPresets || showStats || showLapList) && (
    <div onClick={() => { setShowPresets(false); setShowStats(false); setShowLapList(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 99 }} />
  );

  // ─── Telemetry panel ───
  const telPanel = (
    <div style={{ padding: isMobile ? 12 : 16, overflowY: "auto", flex: 1 }}>
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 10, color: "var(--text-dim)", letterSpacing: "0.05em" }}>LIVE TELEMETRY</div>
      {/* Tire compounds */}
      {(tire1 || tire2) && (
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          {[{ t: tire1, c: c1 }, { t: tire2, c: c2 }].map((x, i) => x.t && (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, background: "var(--bg-card)", borderRadius: 4, padding: "3px 8px" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: TIRE_COLORS[x.t] || "#888" }} />
              <span style={{ fontSize: 10, fontFamily: "var(--mono)", color: x.c }}>{x.t}</span>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 12 }}>
        {[
          { l: "SPD", v1: ct1.speed, v2: ct2.speed, u: "km/h" },
          { l: "THR", v1: ct1.throttle, v2: ct2.throttle, u: "%" },
          { l: "BRK", v1: ct1.brake > 0 ? "ON" : "OFF", v2: ct2.brake > 0 ? "ON" : "OFF", u: "" },
          { l: "GEAR", v1: ct1.n_gear ?? ct1.gear ?? "—", v2: ct2.n_gear ?? ct2.gear ?? "—", u: "" },
        ].map((item) => (
          <div key={item.l} style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 8px", border: "1px solid var(--border-light)" }}>
            <div style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)", marginBottom: 3 }}>{item.l}{item.u ? ` (${item.u})` : ""}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: c1, fontFamily: "var(--mono)" }}>{typeof item.v1 === "number" ? Math.round(item.v1) : item.v1}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: c2, fontFamily: "var(--mono)" }}>{typeof item.v2 === "number" ? Math.round(item.v2) : item.v2}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        {[{ c: c1, n: d1Info?.name_acronym || "D1" }, { c: c2, n: d2Info?.name_acronym || "D2" }].map((x) => (
          <div key={x.n} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 12, height: 3, background: x.c, borderRadius: 1 }} /><span style={{ fontSize: 11, color: x.c, fontFamily: "var(--mono)" }}>{x.n}</span></div>
        ))}
      </div>
      <TelChart label="SPEED" data1={spd1} data2={spd2} color1={c1} color2={c2} maxVal={370} unit="km/h" icon={<SpeedIcon />} />
      <TelChart label="THROTTLE" data1={thr1} data2={thr2} color1={c1} color2={c2} maxVal={100} unit="%" icon={<ThrottleIcon />} />
      <TelChart label="BRAKE" data1={brk1} data2={brk2} color1={c1} color2={c2} maxVal={100} unit="on/off" icon={<BrakeIcon />} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
        {[
          { l: "DRS", v1: ct1.drs >= 10 ? "OPEN" : "—", v2: ct2.drs >= 10 ? "OPEN" : "—", k1: ct1.drs >= 10 ? "var(--positive)" : "var(--text-muted)", k2: ct2.drs >= 10 ? "var(--positive)" : "var(--text-muted)" },
          { l: "RPM", v1: ct1.rpm ? Math.round(ct1.rpm).toLocaleString() : "—", v2: ct2.rpm ? Math.round(ct2.rpm).toLocaleString() : "—", k1: c1, k2: c2 },
        ].map((item) => (
          <div key={item.l} style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 8px" }}>
            <div style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>{item.l}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: item.k1, fontFamily: "var(--mono)" }}>{item.v1}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: item.k2, fontFamily: "var(--mono)" }}>{item.v2}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Stats + Lap list buttons */}
      <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
        <button onClick={() => setShowStats(true)} style={{ flex: 1, fontSize: 11, padding: "6px 0" }}>📊 Stats</button>
        <button onClick={() => setShowLapList(true)} style={{ flex: 1, fontSize: 11, padding: "6px 0" }}>📋 Laps</button>
      </div>
    </div>
  );

  return (
    <div style={{ ...cssVars, width: "100%", minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--sans)", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
        select,button{font-family:var(--sans)}
        select{background:var(--bg-input);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .2s}
        select:hover,select:focus{border-color:var(--accent)}
        button{background:var(--bg-button);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .15s}
        button:hover{background:var(--bg-alt);border-color:var(--accent)}
        .btn-primary{background:linear-gradient(135deg,#4444cc,#6644ff);border-color:#6655ff;color:#fff;font-weight:600;font-size:12px}
        .btn-primary:hover{background:linear-gradient(135deg,#5555dd,#7755ff)}
        .btn-primary:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
      `}</style>

      {backdrop}{presetsPanel}{statsPanel}{lapListPanel}

      {/* Header */}
      <div style={{ padding: isMobile ? "8px 12px" : "10px 20px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--border-light)", background: "var(--bg-panel)", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <span style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, letterSpacing: "-0.02em", background: `linear-gradient(135deg,${T.accent},${T.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PHANTOM CARS</span>
        <span style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>v3.0</span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <button onClick={() => setShowPresets(true)} style={{ padding: "3px 8px", fontSize: 11 }}>⚡ Presets</button>
          {selSession && <button onClick={shareURL} style={{ padding: "3px 8px", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}><ShareIcon />{shareMsg || "Share"}</button>}
          {!isMobile && <span style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>Space R T D C L ←→</span>}
          <button onClick={toggleTheme} style={{ padding: "3px 6px", display: "flex", alignItems: "center" }}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>
        </div>
      </div>

      {/* Selectors */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", padding: isMobile ? "8px 10px" : "8px 20px", borderBottom: "1px solid var(--border-light)", background: "var(--bg-alt)" }}>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>{[2026, 2025, 2024, 2023].map((y) => <option key={y} value={y}>{y}</option>)}</select>
        <select value={selMeeting?.meeting_key || ""} onChange={(e) => setSelMeeting(meetings.find((m) => m.meeting_key === Number(e.target.value)) || null)} style={{ minWidth: isMobile ? 110 : 160 }}><option value="">Grand Prix</option>{meetings.map((m) => <option key={m.meeting_key} value={m.meeting_key}>{m.meeting_name}</option>)}</select>
        <select value={selSession?.session_key || ""} onChange={(e) => setSelSession(sessions.find((s) => s.session_key === Number(e.target.value)) || null)} disabled={!sessions.length} style={{ minWidth: isMobile ? 90 : 120 }}><option value="">Session</option>{sessions.map((s) => <option key={s.session_key} value={s.session_key}>{s.session_name}</option>)}</select>
        {!isMobile && <div style={{ width: 1, height: 20, background: "var(--border-light)" }} />}
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: c1, boxShadow: `0 0 5px ${c1}` }} />
          <select value={d1 || ""} onChange={(e) => { setD1(Number(e.target.value)); setSelLap1(null); setLaps1([]); }} disabled={!drivers.length} style={{ minWidth: isMobile ? 70 : 100 }}><option value="">Driver 1</option>{drivers.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || x.last_name || `#${x.driver_number}`}</option>)}</select>
          {laps1.length > 0 && <select value={selLap1 || ""} onChange={(e) => setSelLap1(Number(e.target.value))} style={{ width: isMobile ? 58 : 75 }}><option value="">Lap</option>{laps1.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number} {l.lap_duration?.toFixed(1)}</option>)}</select>}
        </div>
        <span style={{ color: "var(--text-muted)", fontSize: 10, fontWeight: 700 }}>VS</span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: c2, boxShadow: `0 0 5px ${c2}` }} />
          <select value={d2 || ""} onChange={(e) => { setD2(Number(e.target.value)); setSelLap2(null); setLaps2([]); }} disabled={!drivers.length} style={{ minWidth: isMobile ? 70 : 100 }}><option value="">Driver 2</option>{drivers.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || x.last_name || `#${x.driver_number}`}</option>)}</select>
          {laps2.length > 0 && <select value={selLap2 || ""} onChange={(e) => setSelLap2(Number(e.target.value))} style={{ width: isMobile ? 58 : 75 }}><option value="">Lap</option>{laps2.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number} {l.lap_duration?.toFixed(1)}</option>)}</select>}
        </div>
        <button className="btn-primary" onClick={loadRaceData} disabled={!d1 || !d2 || !selLap1 || !selLap2 || !!loading}>{loading ? "..." : isMobile ? "Load" : "Load Laps"}</button>
      </div>

      {error && <div style={{ padding: "8px 16px", background: theme === "dark" ? "rgba(255,40,60,0.08)" : "rgba(255,40,60,0.06)", borderBottom: "1px solid var(--border-light)", fontSize: 12, color: T.negative, display: "flex", alignItems: "center", gap: 8 }}><span style={{ flex: 1 }}>{error}</span><button onClick={() => setError("")} style={{ padding: "2px 8px", fontSize: 11 }}>✕</button></div>}
      {loading && <LoadingBar text={loading} pct={loadPct} />}

      {isMobile && trackPts && <div style={{ display: "flex", borderBottom: "1px solid var(--border-light)" }}>{["3d", "telemetry"].map((tab) => <button key={tab} onClick={() => setMobileTab(tab)} style={{ flex: 1, borderRadius: 0, borderBottom: mobileTab === tab ? `2px solid var(--accent)` : "2px solid transparent", background: mobileTab === tab ? "var(--bg-card)" : "transparent", fontWeight: mobileTab === tab ? 600 : 400, fontSize: 12, padding: "7px 0" }}>{tab === "3d" ? "3D Track" : "Telemetry"}</button>)}</div>}

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : `calc(100vh - ${trackPts ? 180 : 140}px)` }}>
        {(!isMobile || mobileTab === "3d") && (
          <div style={{ flex: 1, position: "relative", minHeight: isMobile ? "48vh" : "auto" }}>
            <div ref={canvasRef} style={{ width: "100%", height: "100%", background: "var(--bg)", cursor: "grab", minHeight: isMobile ? "48vh" : "auto" }} />

            {/* Camera mode selector */}
            {trackPts && <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 4 }}>
              {CAM_MODES.map((m) => <button key={m} onClick={() => setCamMode(m)} style={{ padding: "3px 8px", fontSize: 10, background: camMode === m ? "var(--accent)" : "var(--bg-overlay)", color: camMode === m ? "#fff" : "var(--text-dim)", borderColor: camMode === m ? "var(--accent)" : "var(--border-light)" }}>{CAM_LABELS[m]}</button>)}
            </div>}

            {/* Mini-map */}
            {trackPts && !isMobile && <div style={{ position: "absolute", top: 40, left: 10, zIndex: 2 }}><MiniMap trackPoints={trackPts} loc1={loc1} loc2={loc2} progress={progress} c1={c1} c2={c2} theme={theme} /></div>}

            {/* Delta badge */}
            {totalDelta !== null && trackPts && (
              <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", background: "var(--bg-overlay)", backdropFilter: "blur(8px)", borderRadius: 8, padding: isMobile ? "5px 12px" : "6px 18px", border: "1px solid var(--border)", zIndex: 2, animation: "fadeIn .4s" }}>
                <div style={{ fontSize: 9, color: "var(--text-muted)", textAlign: "center", fontFamily: "var(--mono)" }}>LAP DELTA</div>
                <div style={{ fontSize: isMobile ? 16 : 22, fontWeight: 800, textAlign: "center", fontFamily: "var(--mono)", color: totalDelta > 0 ? "var(--negative)" : "var(--positive)" }}>{totalDelta > 0 ? "+" : ""}{totalDelta.toFixed(3)}s</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 2 }}>
                  <span style={{ fontSize: 10, color: c1, fontFamily: "var(--mono)" }}>{d1Info?.name_acronym} {formatTime(l1Info?.lap_duration)}</span>
                  <span style={{ fontSize: 10, color: c2, fontFamily: "var(--mono)" }}>{d2Info?.name_acronym} {formatTime(l2Info?.lap_duration)}</span>
                </div>
              </div>
            )}

            {/* Sectors */}
            {trackPts && l1Info && l2Info && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5, zIndex: 2, maxWidth: "95%" }}>
              <SectorDelta sector={1} d1Time={l1Info.duration_sector_1} d2Time={l2Info.duration_sector_1} color1={c1} color2={c2} />
              <SectorDelta sector={2} d1Time={l1Info.duration_sector_2} d2Time={l2Info.duration_sector_2} color1={c1} color2={c2} />
              <SectorDelta sector={3} d1Time={l1Info.duration_sector_3} d2Time={l2Info.duration_sector_3} color1={c1} color2={c2} />
            </div>}

            {!trackPts && !loading && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.15 }}>🏎</div>
              <div style={{ fontSize: isMobile ? 14 : 17, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6 }}>Select a Grand Prix, session & two drivers</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", maxWidth: 360, marginBottom: 12 }}>Or try a quick preset from the ⚡ button above.</div>
            </div>}
          </div>
        )}

        {((!isMobile && showTel && trackPts) || (isMobile && mobileTab === "telemetry" && trackPts)) && (
          <div style={{ width: isMobile ? "100%" : 320, borderLeft: isMobile ? "none" : "1px solid var(--border-light)", background: "var(--bg-panel)", display: "flex", flexDirection: "column", maxHeight: isMobile ? "55vh" : "auto", animation: "fadeIn .2s" }}>{telPanel}</div>
        )}
      </div>

      {/* Playback */}
      {trackPts && (
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 10, padding: isMobile ? "7px 10px" : "7px 16px", background: "var(--bg-overlay)", backdropFilter: "blur(8px)", borderTop: "1px solid var(--border-light)" }}>
          <button onClick={() => { setProgress(0); setIsPlaying(false); }} style={{ padding: "3px 7px", fontSize: 12 }}>⏮</button>
          <button onClick={() => setIsPlaying(!isPlaying)} style={{ padding: "3px 9px", fontSize: 14 }}>{isPlaying ? "⏸" : "▶"}</button>
          <button onClick={() => setLoop(!loop)} style={{ padding: "3px 7px", opacity: loop ? 1 : 0.4, display: "flex", alignItems: "center" }}><LoopIcon /></button>
          <input type="range" min="0" max="1" step="0.001" value={progress} onChange={(e) => setProgress(parseFloat(e.target.value))} style={{ flex: 1, accentColor: "var(--accent)", height: 4 }} />
          {/* Elapsed time */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: isMobile ? 55 : 70 }}>
            <span style={{ fontSize: 10, color: c1, fontFamily: "var(--mono)", lineHeight: 1.2 }}>{formatTime(elapsed1)}</span>
            <span style={{ fontSize: 10, color: c2, fontFamily: "var(--mono)", lineHeight: 1.2 }}>{formatTime(elapsed2)}</span>
          </div>
          <select value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} style={{ width: 50, padding: "2px 3px", fontSize: 11 }}>
            <option value={0.25}>0.25x</option><option value={0.5}>0.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
          </select>
          {!isMobile && <button onClick={() => setShowTel(!showTel)} style={{ padding: "3px 7px", fontSize: 11, opacity: showTel ? 1 : 0.4 }}>📊</button>}
        </div>
      )}
    </div>
  );
}
