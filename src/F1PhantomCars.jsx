import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────
// F1 PHANTOM CARS — 3D Ghost Lap Visualizer
// v2.0 — Dark/Light, Mobile, Performance, QoL
// ─────────────────────────────────────────────

const API = "https://api.openf1.org/v1";

// ─── Theme definitions ───
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
  },
};

// ─── Team colors ───
const TEAM_COLORS = {
  "Red Bull Racing": "#3671C6", "Red Bull": "#3671C6",
  "McLaren": "#FF8000", "Ferrari": "#E8002D", "Mercedes": "#27F4D2",
  "Aston Martin": "#229971", "Alpine": "#0093CC", "Williams": "#64C4FF",
  "RB": "#6692FF", "Racing Bulls": "#6692FF",
  "Kick Sauber": "#52E252", "Sauber": "#52E252",
  "Haas F1 Team": "#B6BABD", "Haas": "#B6BABD", "Cadillac": "#FFD700",
};
const getTeamColor = (teamName) => {
  if (!teamName) return "#888888";
  for (const [key, val] of Object.entries(TEAM_COLORS)) {
    if (teamName.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return "#888888";
};

// ─── API helpers with retry + rate-limit backoff ───
async function fetchJSON(endpoint, params = {}, retries = 2) {
  const url = new URL(`${API}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") url.searchParams.append(k, v);
  });
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString());
      if (res.status === 429) {
        await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
        continue;
      }
      if (!res.ok) throw new Error(`API ${res.status}: ${endpoint}`);
      return res.json();
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
    }
  }
}

const fetchMeetings = (year) => fetchJSON("/meetings", { year });
const fetchSessions = (mk) => fetchJSON("/sessions", { meeting_key: mk });
const fetchDrivers = (sk) => fetchJSON("/drivers", { session_key: sk });
const fetchLaps = (sk, dn) => fetchJSON("/laps", { session_key: sk, driver_number: dn });
function fetchLocation(sk, dn, gt, lt) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt; if (lt) p["date<"] = lt;
  return fetchJSON("/location", p);
}
function fetchCarData(sk, dn, gt, lt) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt; if (lt) p["date<"] = lt;
  return fetchJSON("/car_data", p);
}

// ─── Data helpers ───
function interpolateTrackPoint(points, t) {
  if (!points?.length) return { x: 0, y: 0, z: 0 };
  const idx = Math.max(0, Math.min(1, t)) * (points.length - 1);
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, points.length - 1);
  const f = idx - i0;
  return {
    x: points[i0].x + (points[i1].x - points[i0].x) * f,
    y: points[i0].y + (points[i1].y - points[i0].y) * f,
    z: points[i0].z + (points[i1].z - points[i0].z) * f,
  };
}

function normalizeTrackPoints(points) {
  if (!points?.length) return [];
  let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity, mnZ = Infinity, mxZ = -Infinity;
  for (const p of points) {
    if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x;
    if (p.y < mnY) mnY = p.y; if (p.y > mxY) mxY = p.y;
    if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z;
  }
  const sc = Math.max(mxX - mnX, mxY - mnY) || 1;
  const cx = (mnX + mxX) / 2, cy = (mnY + mxY) / 2, cz = (mnZ + mxZ) / 2;
  return points.map((p) => ({
    x: ((p.x - cx) / sc) * 40,
    y: ((p.z - cz) / sc) * 4,
    z: ((p.y - cy) / sc) * 40,
  }));
}

function telemetryAtT(tel, t) {
  if (!tel?.length) return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0, n_gear: 0 };
  return tel[Math.min(Math.floor(t * (tel.length - 1)), tel.length - 1)];
}

function fastestValidLap(laps) {
  const valid = laps.filter((l) => l.lap_duration && l.lap_duration > 10 && l.date_start);
  if (!valid.length) return null;
  return valid.reduce((a, b) => (a.lap_duration < b.lap_duration ? a : b));
}

// ─── Detect mobile ───
function useIsMobile() {
  const [m, setM] = useState(typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

// ─── Downsample array for canvas perf ───
function downsample(arr, max) {
  if (!arr || arr.length <= max) return arr || [];
  const step = arr.length / max;
  const out = [];
  for (let i = 0; i < max; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

// ─── Three.js Scene Hook ───
function useThreeScene(containerRef, trackPoints, loc1, loc2, progress, c1, c2, theme) {
  const refs = useRef({});
  const cameraState = useRef({ angle: 0, pitch: 0.6, dist: 55, dragging: false, lastX: 0, lastY: 0 });

  const norm1 = useMemo(() => loc1 ? normalizeTrackPoints(loc1) : null, [loc1]);
  const norm2 = useMemo(() => loc2 ? normalizeTrackPoints(loc2) : null, [loc2]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !trackPoints || trackPoints.length < 10) return;

    if (refs.current.renderer) {
      refs.current.renderer.dispose();
      if (el.contains(refs.current.renderer.domElement)) el.removeChild(refs.current.renderer.domElement);
    }
    if (refs.current.frame) cancelAnimationFrame(refs.current.frame);

    const T = THEMES[theme];
    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(T.fogColor, 0.006);

    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio < 2, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(T.fogColor, 1);
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x334466, theme === "dark" ? 0.5 : 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, theme === "dark" ? 0.8 : 1.0);
    dir.position.set(20, 40, 20); scene.add(dir);
    const pt = new THREE.PointLight(theme === "dark" ? 0x4488ff : 0x8888cc, 0.6, 100);
    pt.position.set(0, 15, 0); scene.add(pt);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({ color: T.groundColor, roughness: 0.95, metalness: 0.05 })
    );
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.5; scene.add(ground);
    const grid = new THREE.GridHelper(200, 60, T.gridColor1, T.gridColor2);
    grid.position.y = -0.45; scene.add(grid);

    const curve = new THREE.CatmullRomCurve3(trackPoints.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true);
    const segCount = Math.min(trackPoints.length * 2, 600);
    scene.add(new THREE.Mesh(
      new THREE.TubeGeometry(curve, segCount, 0.8, 6, true),
      new THREE.MeshStandardMaterial({ color: T.trackColor, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 0.8 })
    ));
    const lineGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(segCount));
    const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: T.lineColor, transparent: true, opacity: 0.4 }));
    line.position.y += 0.05; scene.add(line);

    const sColors = [0x00ff88, 0xffaa00, 0xff3366];
    [0, 0.33, 0.66].forEach((t, i) => {
      const sp = curve.getPointAt(t);
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 3, 6),
        new THREE.MeshStandardMaterial({ color: sColors[i], emissive: sColors[i], emissiveIntensity: 0.6 })
      );
      post.position.set(sp.x, sp.y + 1.5, sp.z); scene.add(post);
    });

    const sf = curve.getPointAt(0);
    const sfM = new THREE.Mesh(
      new THREE.BoxGeometry(3, 0.1, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 })
    );
    sfM.position.set(sf.x, sf.y + 0.1, sf.z); scene.add(sfM);

    function makeCar(color) {
      const g = new THREE.Group();
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), emissive: new THREE.Color(color), emissiveIntensity: 0.4, metalness: 0.6, roughness: 0.3 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 1.4), mat);
      body.position.y = 0.25; g.add(body);
      const nose = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 4), mat);
      nose.geometry.rotateX(-Math.PI / 2); nose.position.set(0, 0.25, 0.9); g.add(nose);
      const glow = new THREE.Mesh(
        new THREE.RingGeometry(0.6, 0.9, 12),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.15, side: THREE.DoubleSide })
      );
      glow.rotation.x = -Math.PI / 2; glow.position.y = 0.05; g.add(glow);
      g.add(new THREE.PointLight(new THREE.Color(color), 0.5, 8));
      return g;
    }

    const car1 = makeCar(c1), car2 = makeCar(c2);
    scene.add(car1); scene.add(car2);

    function makeTrail(color) {
      const max = 60;
      const pos = new Float32Array(max * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setDrawRange(0, 0);
      const ln = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.5 }));
      scene.add(ln);
      return { line: ln, positions: pos, max, count: 0 };
    }
    const tr1 = makeTrail(c1), tr2 = makeTrail(c2);

    refs.current = { scene, camera, renderer, car1, car2, tr1, tr2, norm1, norm2, frame: null };

    const cs = cameraState.current;
    const onDown = (e) => { cs.dragging = true; cs.lastX = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.lastY = e.clientY ?? e.touches?.[0]?.clientY ?? 0; };
    const onMove = (e) => { if (!cs.dragging) return; const cx = e.clientX ?? e.touches?.[0]?.clientX ?? 0, cy = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (cx - cs.lastX) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (cy - cs.lastY) * 0.005)); cs.lastX = cx; cs.lastY = cy; };
    const onUp = () => { cs.dragging = false; };
    const onWheel = (e) => { cs.dist = Math.max(15, Math.min(120, cs.dist + e.deltaY * 0.05)); };
    const de = renderer.domElement;
    de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove);
    de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
    de.addEventListener("wheel", onWheel, { passive: true });
    de.addEventListener("touchstart", onDown, { passive: true }); de.addEventListener("touchmove", onMove, { passive: true }); de.addEventListener("touchend", onUp);

    function animate() {
      refs.current.frame = requestAnimationFrame(animate);
      if (!cs.dragging) cs.angle += 0.001;
      camera.position.set(
        Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch),
        cs.dist * Math.sin(cs.pitch),
        Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch)
      );
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    let resizeTimer;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { if (!el) return; const nw = el.clientWidth, nh = el.clientHeight; camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh); }, 100); };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove);
      de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp);
      de.removeEventListener("wheel", onWheel);
      de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp);
      cancelAnimationFrame(refs.current.frame);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [trackPoints, c1, c2, theme]);

  useEffect(() => { refs.current.norm1 = norm1; }, [norm1]);
  useEffect(() => { refs.current.norm2 = norm2; }, [norm2]);

  useEffect(() => {
    const { car1, car2, tr1, tr2 } = refs.current;
    if (!car1 || !car2 || !trackPoints || trackPoints.length < 2) return;

    function update(car, trail, data, t) {
      const pts = data && data.length >= 2 ? data : trackPoints;
      const p = interpolateTrackPoint(pts, t);
      car.position.set(p.x, p.y + 0.3, p.z);
      const p2 = interpolateTrackPoint(pts, Math.min(1, t + 0.005));
      if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001) car.lookAt(p2.x, p.y + 0.3, p2.z);
      if (trail) {
        const c = Math.min(trail.count + 1, trail.max);
        for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; }
        trail.positions[0] = p.x; trail.positions[1] = p.y + 0.3; trail.positions[2] = p.z;
        trail.count = c; trail.line.geometry.attributes.position.needsUpdate = true; trail.line.geometry.setDrawRange(0, c);
      }
    }
    update(car1, tr1, refs.current.norm1, progress);
    update(car2, tr2, refs.current.norm2, progress);
  }, [progress, trackPoints]);
}

// ─── Telemetry Chart (memoized) ───
const TelemetryChart = memo(function TelChart({ label, data1, data2, color1, color2, maxVal, unit, icon }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"), w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(10,10,18,0.4)"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(60,60,100,0.15)"; ctx.lineWidth = 0.5;
    for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(0, (h / 4) * i); ctx.lineTo(w, (h / 4) * i); ctx.stroke(); }
    function draw(data, col) {
      if (!data?.length || data.length < 2) return;
      const step = Math.max(1, Math.floor(data.length / w));
      ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.beginPath();
      let first = true;
      for (let i = 0; i < data.length; i += step) {
        const x = (i / (data.length - 1)) * w, y = h - (data[i] / maxVal) * h;
        first ? ctx.moveTo(x, y) : ctx.lineTo(x, y); first = false;
      }
      ctx.stroke();
    }
    draw(data1, color1); draw(data2, color2);
  }, [data1, data2, color1, color2, maxVal]);

  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, fontSize: 11, color: "var(--text-dim)", fontFamily: "var(--mono)" }}>
        {icon}<span>{label}</span><span style={{ marginLeft: "auto", color: "var(--text-muted)" }}>{unit}</span>
      </div>
      <canvas ref={canvasRef} width={320} height={55} style={{ width: "100%", height: 55, borderRadius: 4, border: "1px solid var(--border-light)" }} />
    </div>
  );
});

// ─── Sector Delta (memoized) ───
const SectorDelta = memo(function SD({ sector, d1Time, d2Time, color1, color2 }) {
  const delta = d1Time && d2Time ? d1Time - d2Time : null;
  const sC = ["#00ff88", "#ffaa00", "#ff3366"];
  return (
    <div style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 10px", borderLeft: `3px solid ${sC[sector - 1]}`, minWidth: 80, flex: 1 }}>
      <div style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--mono)", marginBottom: 3 }}>S{sector}</div>
      <div style={{ fontSize: 11, color: color1, fontFamily: "var(--mono)" }}>{d1Time ? d1Time.toFixed(3) : "—"}</div>
      <div style={{ fontSize: 11, color: color2, fontFamily: "var(--mono)" }}>{d2Time ? d2Time.toFixed(3) : "—"}</div>
      {delta !== null && (
        <div style={{ fontSize: 11, fontWeight: 700, color: delta > 0 ? "var(--negative)" : "var(--positive)", fontFamily: "var(--mono)", marginTop: 2 }}>
          {delta > 0 ? "+" : ""}{delta.toFixed(3)}
        </div>
      )}
    </div>
  );
});

// ─── Loading bar ───
function LoadingBar({ text, pct }) {
  return (
    <div style={{ padding: "10px 16px", background: "rgba(60,60,255,0.04)", borderBottom: "1px solid var(--border-light)" }}>
      <div style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "var(--mono)", marginBottom: 6 }}>{text}</div>
      {pct !== undefined && (
        <div style={{ height: 3, background: "var(--border-light)", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "var(--accent)", borderRadius: 2, transition: "width 0.3s" }} />
        </div>
      )}
    </div>
  );
}

// ─── Icons ───
const SpeedIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="14" r="8" /><path d="M12 14l3-6" /></svg>);
const ThrottleIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>);
const BrakeIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9l6 6M15 9l-6 6" /></svg>);
const SunIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>);
const MoonIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);

// ═══════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════
export default function F1PhantomCars() {
  const isMobile = useIsMobile();

  // Theme (persisted)
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("phantom-theme") || "dark"; } catch { return "dark"; } });
  const T = THEMES[theme];
  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("phantom-theme", next); } catch {}
  }, [theme]);

  // Selection
  const [year, setYear] = useState(2026);
  const [meetings, setMeetings] = useState([]);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [driver1, setDriver1] = useState(null);
  const [driver2, setDriver2] = useState(null);
  const [selectedLap1, setSelectedLap1] = useState(null);
  const [selectedLap2, setSelectedLap2] = useState(null);

  // Data
  const [laps1, setLaps1] = useState([]);
  const [laps2, setLaps2] = useState([]);
  const [locationData1, setLocationData1] = useState(null);
  const [locationData2, setLocationData2] = useState(null);
  const [telemetry1, setTelemetry1] = useState(null);
  const [telemetry2, setTelemetry2] = useState(null);
  const [trackPoints, setTrackPoints] = useState(null);

  // Playback
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  // UI
  const [loading, setLoading] = useState("");
  const [loadPct, setLoadPct] = useState(undefined);
  const [error, setError] = useState("");
  const [showTelemetry, setShowTelemetry] = useState(true);
  const [mobileTab, setMobileTab] = useState("3d");

  const canvasRef = useRef(null);

  // Derived
  const d1Info = drivers.find((d) => d.driver_number === driver1);
  const d2Info = drivers.find((d) => d.driver_number === driver2);
  const color1 = d1Info ? getTeamColor(d1Info.team_name) : "#4488ff";
  const color2 = d2Info ? getTeamColor(d2Info.team_name) : "#ff4488";
  const lap1Info = laps1.find((l) => l.lap_number === selectedLap1);
  const lap2Info = laps2.find((l) => l.lap_number === selectedLap2);
  const totalDelta = lap1Info?.lap_duration && lap2Info?.lap_duration ? lap1Info.lap_duration - lap2Info.lap_duration : null;

  const maxSamples = isMobile ? 200 : 400;
  const speedTrace1 = useMemo(() => downsample(telemetry1?.map((t) => t.speed || 0), maxSamples), [telemetry1, maxSamples]);
  const speedTrace2 = useMemo(() => downsample(telemetry2?.map((t) => t.speed || 0), maxSamples), [telemetry2, maxSamples]);
  const throttleTrace1 = useMemo(() => downsample(telemetry1?.map((t) => t.throttle || 0), maxSamples), [telemetry1, maxSamples]);
  const throttleTrace2 = useMemo(() => downsample(telemetry2?.map((t) => t.throttle || 0), maxSamples), [telemetry2, maxSamples]);
  const brakeTrace1 = useMemo(() => downsample(telemetry1?.map((t) => (t.brake > 0 ? 100 : 0)), maxSamples), [telemetry1, maxSamples]);
  const brakeTrace2 = useMemo(() => downsample(telemetry2?.map((t) => (t.brake > 0 ? 100 : 0)), maxSamples), [telemetry2, maxSamples]);
  const curTel1 = telemetryAtT(telemetry1, progress);
  const curTel2 = telemetryAtT(telemetry2, progress);

  // ─── Data fetching ───
  useEffect(() => {
    setLoading("Loading calendar..."); setError("");
    fetchMeetings(year).then((data) => {
      setMeetings(data.filter((m) => m.meeting_name));
      setSelectedMeeting(null); setSelectedSession(null); setSessions([]); setDrivers([]); setDriver1(null); setDriver2(null); setTrackPoints(null); setLoading("");
    }).catch((e) => { setError(e.message); setLoading(""); });
  }, [year]);

  useEffect(() => {
    if (!selectedMeeting) return; setLoading("Loading sessions...");
    fetchSessions(selectedMeeting.meeting_key).then((data) => {
      setSessions(data.filter((s) => ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"].includes(s.session_name)));
      setSelectedSession(null); setDrivers([]); setDriver1(null); setDriver2(null); setTrackPoints(null); setLoading("");
    }).catch((e) => { setError(e.message); setLoading(""); });
  }, [selectedMeeting]);

  useEffect(() => {
    if (!selectedSession) return; setLoading("Loading drivers...");
    fetchDrivers(selectedSession.session_key).then((data) => {
      const seen = new Set();
      setDrivers(data.filter((d) => { if (seen.has(d.driver_number)) return false; seen.add(d.driver_number); return true; }));
      setDriver1(null); setDriver2(null); setTrackPoints(null); setLoading("");
    }).catch((e) => { setError(e.message); setLoading(""); });
  }, [selectedSession]);

  useEffect(() => { if (selectedSession && driver1) fetchLaps(selectedSession.session_key, driver1).then((l) => { setLaps1(l); setSelectedLap1(null); }).catch(() => setLaps1([])); }, [selectedSession, driver1]);
  useEffect(() => { if (selectedSession && driver2) fetchLaps(selectedSession.session_key, driver2).then((l) => { setLaps2(l); setSelectedLap2(null); }).catch(() => setLaps2([])); }, [selectedSession, driver2]);

  useEffect(() => { if (laps1.length && !selectedLap1) { const f = fastestValidLap(laps1); if (f) setSelectedLap1(f.lap_number); } }, [laps1]);
  useEffect(() => { if (laps2.length && !selectedLap2) { const f = fastestValidLap(laps2); if (f) setSelectedLap2(f.lap_number); } }, [laps2]);

  const loadRaceData = useCallback(async () => {
    if (!selectedSession || !driver1 || !driver2 || !selectedLap1 || !selectedLap2) return;
    setLoading("Fetching telemetry..."); setError(""); setLoadPct(0);
    try {
      const sk = selectedSession.session_key;
      const l1 = laps1.find((l) => l.lap_number === selectedLap1);
      const l2 = laps2.find((l) => l.lap_number === selectedLap2);
      if (!l1?.date_start || !l2?.date_start) { setError("Lap timing data unavailable — try another lap."); setLoading(""); return; }
      const end1 = new Date(new Date(l1.date_start).getTime() + (l1.lap_duration || 120) * 1000).toISOString();
      const end2 = new Date(new Date(l2.date_start).getTime() + (l2.lap_duration || 120) * 1000).toISOString();

      setLoadPct(15); setLoading("Fetching location data...");
      const [loc1, loc2] = await Promise.all([fetchLocation(sk, driver1, l1.date_start, end1), fetchLocation(sk, driver2, l2.date_start, end2)]);

      setLoadPct(55); setLoading("Fetching car telemetry...");
      const [car1, car2] = await Promise.all([fetchCarData(sk, driver1, l1.date_start, end1), fetchCarData(sk, driver2, l2.date_start, end2)]);

      setLoadPct(85);
      if (loc1.length < 5 || loc2.length < 5) { setError("Insufficient location data — try different laps or session."); setLoading(""); setLoadPct(undefined); return; }

      setLocationData1(loc1); setLocationData2(loc2);
      setTelemetry1(car1); setTelemetry2(car2);
      setTrackPoints(normalizeTrackPoints(loc1));
      setProgress(0); setIsPlaying(false);
      setLoadPct(100);
      setTimeout(() => { setLoading(""); setLoadPct(undefined); }, 300);
    } catch (e) { setError(`Load failed: ${e.message}`); setLoading(""); setLoadPct(undefined); }
  }, [selectedSession, driver1, driver2, selectedLap1, selectedLap2, laps1, laps2]);

  // ─── 3D ───
  useThreeScene(canvasRef, trackPoints, locationData1, locationData2, progress, color1, color2, theme);

  // ─── RAF playback ───
  useEffect(() => {
    if (!isPlaying) { lastTimeRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    function tick(ts) {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = (ts - lastTimeRef.current) / 1000;
      lastTimeRef.current = ts;
      setProgress((p) => { const n = p + dt * 0.015 * playbackSpeed; if (n >= 1) { setIsPlaying(false); return 1; } return n; });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isPlaying, playbackSpeed]);

  // ─── Keyboard shortcuts ───
  useEffect(() => {
    const h = (e) => {
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
      if (e.code === "Space") { e.preventDefault(); if (trackPoints) setIsPlaying((p) => !p); }
      if (e.code === "KeyR") { setProgress(0); setIsPlaying(false); }
      if (e.code === "KeyT") setShowTelemetry((s) => !s);
      if (e.code === "KeyD") toggleTheme();
      if (e.code === "ArrowRight") setProgress((p) => Math.min(1, p + 0.01));
      if (e.code === "ArrowLeft") setProgress((p) => Math.max(0, p - 0.01));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [trackPoints, toggleTheme]);

  // ─── CSS vars ───
  const cssVars = {
    "--bg": T.bg, "--bg-alt": T.bgAlt, "--bg-panel": T.bgPanel, "--bg-card": T.bgCard,
    "--bg-overlay": T.bgOverlay, "--bg-input": T.bgInput, "--bg-button": T.bgButton,
    "--text": T.text, "--text-dim": T.textDim, "--text-muted": T.textMuted,
    "--border": T.border, "--border-light": T.borderLight,
    "--accent": T.accent, "--accent-alt": T.accentAlt,
    "--positive": T.positive, "--negative": T.negative,
    "--mono": "'JetBrains Mono', 'SF Mono', monospace",
    "--sans": "'Outfit', 'Segoe UI', system-ui, sans-serif",
  };

  // ─── Telemetry panel content ───
  const telPanel = (
    <div style={{ padding: isMobile ? 12 : 16, overflowY: "auto", flex: 1 }}>
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 10, color: "var(--text-dim)", letterSpacing: "0.05em" }}>LIVE TELEMETRY</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 12 }}>
        {[
          { l: "SPD", v1: curTel1.speed, v2: curTel2.speed, u: "km/h" },
          { l: "THR", v1: curTel1.throttle, v2: curTel2.throttle, u: "%" },
          { l: "BRK", v1: curTel1.brake > 0 ? "ON" : "OFF", v2: curTel2.brake > 0 ? "ON" : "OFF", u: "" },
          { l: "GEAR", v1: curTel1.n_gear ?? curTel1.gear ?? "—", v2: curTel2.n_gear ?? curTel2.gear ?? "—", u: "" },
        ].map((item) => (
          <div key={item.l} style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 8px", border: "1px solid var(--border-light)" }}>
            <div style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)", marginBottom: 3 }}>{item.l}{item.u ? ` (${item.u})` : ""}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: color1, fontFamily: "var(--mono)" }}>{typeof item.v1 === "number" ? Math.round(item.v1) : item.v1}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: color2, fontFamily: "var(--mono)" }}>{typeof item.v2 === "number" ? Math.round(item.v2) : item.v2}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        {[{ c: color1, n: d1Info?.name_acronym || "D1" }, { c: color2, n: d2Info?.name_acronym || "D2" }].map((d) => (
          <div key={d.n} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 12, height: 3, background: d.c, borderRadius: 1 }} /><span style={{ fontSize: 11, color: d.c, fontFamily: "var(--mono)" }}>{d.n}</span></div>
        ))}
      </div>
      <TelemetryChart label="SPEED" data1={speedTrace1} data2={speedTrace2} color1={color1} color2={color2} maxVal={370} unit="km/h" icon={<SpeedIcon />} />
      <TelemetryChart label="THROTTLE" data1={throttleTrace1} data2={throttleTrace2} color1={color1} color2={color2} maxVal={100} unit="%" icon={<ThrottleIcon />} />
      <TelemetryChart label="BRAKE" data1={brakeTrace1} data2={brakeTrace2} color1={color1} color2={color2} maxVal={100} unit="on/off" icon={<BrakeIcon />} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
        {[
          { l: "DRS", v1: curTel1.drs >= 10 ? "OPEN" : "—", v2: curTel2.drs >= 10 ? "OPEN" : "—", c1: curTel1.drs >= 10 ? "var(--positive)" : "var(--text-muted)", c2: curTel2.drs >= 10 ? "var(--positive)" : "var(--text-muted)" },
          { l: "RPM", v1: curTel1.rpm ? Math.round(curTel1.rpm).toLocaleString() : "—", v2: curTel2.rpm ? Math.round(curTel2.rpm).toLocaleString() : "—", c1: color1, c2: color2 },
        ].map((item) => (
          <div key={item.l} style={{ background: "var(--bg-card)", borderRadius: 6, padding: "6px 8px" }}>
            <div style={{ fontSize: 9, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>{item.l}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: item.c1, fontFamily: "var(--mono)" }}>{item.v1}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: item.c2, fontFamily: "var(--mono)" }}>{item.v2}</span>
            </div>
          </div>
        ))}
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

      {/* Header */}
      <div style={{ padding: isMobile ? "10px 12px" : "12px 20px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--border-light)", background: "var(--bg-panel)", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <span style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800, letterSpacing: "-0.02em", background: `linear-gradient(135deg,${T.accent},${T.accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PHANTOM CARS</span>
        <span style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>v2.0</span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          {!isMobile && <span style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>Space:play R:reset T:telemetry D:theme &larr;&rarr;:scrub</span>}
          <button onClick={toggleTheme} style={{ padding: "4px 8px", display: "flex", alignItems: "center" }}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>
        </div>
      </div>

      {/* Selectors */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", padding: isMobile ? "10px 12px" : "10px 20px", borderBottom: "1px solid var(--border-light)", background: "var(--bg-alt)" }}>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>{[2026, 2025, 2024, 2023].map((y) => <option key={y} value={y}>{y}</option>)}</select>
        <select value={selectedMeeting?.meeting_key || ""} onChange={(e) => setSelectedMeeting(meetings.find((m) => m.meeting_key === Number(e.target.value)) || null)} style={{ minWidth: isMobile ? 120 : 170 }}><option value="">Grand Prix</option>{meetings.map((m) => <option key={m.meeting_key} value={m.meeting_key}>{m.meeting_name}</option>)}</select>
        <select value={selectedSession?.session_key || ""} onChange={(e) => setSelectedSession(sessions.find((s) => s.session_key === Number(e.target.value)) || null)} disabled={!sessions.length} style={{ minWidth: isMobile ? 95 : 130 }}><option value="">Session</option>{sessions.map((s) => <option key={s.session_key} value={s.session_key}>{s.session_name}</option>)}</select>

        {!isMobile && <div style={{ width: 1, height: 24, background: "var(--border-light)" }} />}

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: color1, boxShadow: `0 0 6px ${color1}` }} />
          <select value={driver1 || ""} onChange={(e) => { setDriver1(Number(e.target.value)); setSelectedLap1(null); setLaps1([]); }} disabled={!drivers.length} style={{ minWidth: isMobile ? 75 : 110 }}><option value="">Driver 1</option>{drivers.map((d) => <option key={d.driver_number} value={d.driver_number}>{d.name_acronym || d.last_name || `#${d.driver_number}`}</option>)}</select>
          {laps1.length > 0 && <select value={selectedLap1 || ""} onChange={(e) => setSelectedLap1(Number(e.target.value))} style={{ width: isMobile ? 62 : 80 }}><option value="">Lap</option>{laps1.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number} {l.lap_duration?.toFixed(1)}s</option>)}</select>}
        </div>

        <span style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700 }}>VS</span>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: color2, boxShadow: `0 0 6px ${color2}` }} />
          <select value={driver2 || ""} onChange={(e) => { setDriver2(Number(e.target.value)); setSelectedLap2(null); setLaps2([]); }} disabled={!drivers.length} style={{ minWidth: isMobile ? 75 : 110 }}><option value="">Driver 2</option>{drivers.map((d) => <option key={d.driver_number} value={d.driver_number}>{d.name_acronym || d.last_name || `#${d.driver_number}`}</option>)}</select>
          {laps2.length > 0 && <select value={selectedLap2 || ""} onChange={(e) => setSelectedLap2(Number(e.target.value))} style={{ width: isMobile ? 62 : 80 }}><option value="">Lap</option>{laps2.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number} {l.lap_duration?.toFixed(1)}s</option>)}</select>}
        </div>

        <button className="btn-primary" onClick={loadRaceData} disabled={!driver1 || !driver2 || !selectedLap1 || !selectedLap2 || !!loading}>
          {loading ? "Loading..." : isMobile ? "Load" : "Load Laps"}
        </button>
      </div>

      {error && (
        <div style={{ padding: "10px 16px", background: theme === "dark" ? "rgba(255,40,60,0.08)" : "rgba(255,40,60,0.06)", borderBottom: "1px solid var(--border-light)", fontSize: 12, color: T.negative, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ flex: 1 }}>{error}</span>
          <button onClick={() => setError("")} style={{ padding: "2px 8px", fontSize: 11 }}>Dismiss</button>
        </div>
      )}
      {loading && <LoadingBar text={loading} pct={loadPct} />}

      {/* Mobile tab switcher */}
      {isMobile && trackPoints && (
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-light)" }}>
          {["3d", "telemetry"].map((tab) => (
            <button key={tab} onClick={() => setMobileTab(tab)} style={{ flex: 1, borderRadius: 0, borderBottom: mobileTab === tab ? `2px solid var(--accent)` : "2px solid transparent", background: mobileTab === tab ? "var(--bg-card)" : "transparent", fontWeight: mobileTab === tab ? 600 : 400, fontSize: 12, padding: "8px 0" }}>
              {tab === "3d" ? "3D Track" : "Telemetry"}
            </button>
          ))}
        </div>
      )}

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : `calc(100vh - ${trackPoints ? 185 : 145}px)` }}>
        {(!isMobile || mobileTab === "3d") && (
          <div style={{ flex: 1, position: "relative", minHeight: isMobile ? "50vh" : "auto" }}>
            <div ref={canvasRef} style={{ width: "100%", height: "100%", background: "var(--bg)", cursor: "grab", minHeight: isMobile ? "50vh" : "auto" }} />

            {totalDelta !== null && trackPoints && (
              <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", background: "var(--bg-overlay)", backdropFilter: "blur(8px)", borderRadius: 8, padding: isMobile ? "6px 14px" : "8px 20px", border: "1px solid var(--border)", animation: "fadeIn .4s", zIndex: 2 }}>
                <div style={{ fontSize: 9, color: "var(--text-muted)", textAlign: "center", fontFamily: "var(--mono)" }}>LAP DELTA</div>
                <div style={{ fontSize: isMobile ? 18 : 24, fontWeight: 800, textAlign: "center", fontFamily: "var(--mono)", color: totalDelta > 0 ? "var(--negative)" : "var(--positive)" }}>
                  {totalDelta > 0 ? "+" : ""}{totalDelta.toFixed(3)}s
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 3 }}>
                  <span style={{ fontSize: 10, color: color1, fontFamily: "var(--mono)" }}>{d1Info?.name_acronym} {lap1Info?.lap_duration?.toFixed(3)}s</span>
                  <span style={{ fontSize: 10, color: color2, fontFamily: "var(--mono)" }}>{d2Info?.name_acronym} {lap2Info?.lap_duration?.toFixed(3)}s</span>
                </div>
              </div>
            )}

            {trackPoints && lap1Info && lap2Info && (
              <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 2, maxWidth: "95%" }}>
                <SectorDelta sector={1} d1Time={lap1Info.duration_sector_1} d2Time={lap2Info.duration_sector_1} color1={color1} color2={color2} />
                <SectorDelta sector={2} d1Time={lap1Info.duration_sector_2} d2Time={lap2Info.duration_sector_2} color1={color1} color2={color2} />
                <SectorDelta sector={3} d1Time={lap1Info.duration_sector_3} d2Time={lap2Info.duration_sector_3} color1={color1} color2={color2} />
              </div>
            )}

            {!trackPoints && !loading && (
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
                <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.15 }}>🏎</div>
                <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6 }}>Select a Grand Prix, session & two drivers</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", maxWidth: 360 }}>Choose drivers and laps above, then tap "Load Laps" to compare ghost laps on a 3D track.</div>
              </div>
            )}
          </div>
        )}

        {((!isMobile && showTelemetry && trackPoints) || (isMobile && mobileTab === "telemetry" && trackPoints)) && (
          <div style={{ width: isMobile ? "100%" : 320, borderLeft: isMobile ? "none" : "1px solid var(--border-light)", background: "var(--bg-panel)", display: "flex", flexDirection: "column", maxHeight: isMobile ? "55vh" : "auto", animation: "fadeIn .2s" }}>
            {telPanel}
          </div>
        )}
      </div>

      {/* Playback bar */}
      {trackPoints && (
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 12, padding: isMobile ? "8px 10px" : "8px 16px", background: "var(--bg-overlay)", backdropFilter: "blur(8px)", borderTop: "1px solid var(--border-light)" }}>
          <button onClick={() => { setProgress(0); setIsPlaying(false); }} style={{ padding: "4px 8px", fontSize: 12 }}>⏮</button>
          <button onClick={() => setIsPlaying(!isPlaying)} style={{ padding: "4px 10px", fontSize: 14 }}>{isPlaying ? "⏸" : "▶"}</button>
          <input type="range" min="0" max="1" step="0.001" value={progress} onChange={(e) => setProgress(parseFloat(e.target.value))} style={{ flex: 1, accentColor: "var(--accent)", height: 4 }} />
          <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--mono)", minWidth: 36 }}>{(progress * 100).toFixed(0)}%</span>
          <select value={playbackSpeed} onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))} style={{ width: 55, padding: "2px 4px", fontSize: 11 }}>
            <option value={0.25}>0.25x</option><option value={0.5}>0.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
          </select>
          {!isMobile && <button onClick={() => setShowTelemetry(!showTelemetry)} style={{ padding: "4px 8px", fontSize: 11, opacity: showTelemetry ? 1 : 0.5 }}>📊</button>}
        </div>
      )}
    </div>
  );
}
