import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────
// F1 PHANTOM CARS — 3D Ghost Lap Visualizer
// ─────────────────────────────────────────────

const API = "https://api.openf1.org/v1";

// Team colors (2024-2025 palette)
const TEAM_COLORS = {
  "Red Bull Racing": "#3671C6",
  "Red Bull": "#3671C6",
  "McLaren": "#FF8000",
  "Ferrari": "#E8002D",
  "Mercedes": "#27F4D2",
  "Aston Martin": "#229971",
  "Alpine": "#0093CC",
  "Williams": "#64C4FF",
  "RB": "#6692FF",
  "Racing Bulls": "#6692FF",
  "Kick Sauber": "#52E252",
  "Sauber": "#52E252",
  "Haas F1 Team": "#B6BABD",
  "Haas": "#B6BABD",
  "Cadillac": "#FFD700",
};

const getTeamColor = (teamName) => {
  if (!teamName) return "#ffffff";
  for (const [key, val] of Object.entries(TEAM_COLORS)) {
    if (teamName.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return "#ffffff";
};

// ─── API helpers ───
async function fetchJSON(endpoint, params = {}) {
  const url = new URL(`${API}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") url.searchParams.append(k, v);
  });
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API ${res.status}: ${endpoint}`);
  return res.json();
}

async function fetchMeetings(year) {
  return fetchJSON("/meetings", { year });
}

async function fetchSessions(meetingKey) {
  return fetchJSON("/sessions", { meeting_key: meetingKey });
}

async function fetchDrivers(sessionKey) {
  return fetchJSON("/drivers", { session_key: sessionKey });
}

async function fetchLaps(sessionKey, driverNumber) {
  return fetchJSON("/laps", {
    session_key: sessionKey,
    driver_number: driverNumber,
  });
}

async function fetchLocation(sessionKey, driverNumber, dateGt, dateLt) {
  const params = {
    session_key: sessionKey,
    driver_number: driverNumber,
  };
  if (dateGt) params["date>"] = dateGt;
  if (dateLt) params["date<"] = dateLt;
  return fetchJSON("/location", params);
}

async function fetchCarData(sessionKey, driverNumber, dateGt, dateLt) {
  const params = {
    session_key: sessionKey,
    driver_number: driverNumber,
  };
  if (dateGt) params["date>"] = dateGt;
  if (dateLt) params["date<"] = dateLt;
  return fetchJSON("/car_data", params);
}

// ─── Interpolation / data helpers ───
function interpolateTrackPoint(points, t) {
  if (!points || points.length === 0) return { x: 0, y: 0, z: 0 };
  const clampedT = Math.max(0, Math.min(1, t));
  const idx = clampedT * (points.length - 1);
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, points.length - 1);
  const frac = idx - i0;
  return {
    x: points[i0].x + (points[i1].x - points[i0].x) * frac,
    y: points[i0].y + (points[i1].y - points[i0].y) * frac,
    z: points[i0].z + (points[i1].z - points[i0].z) * frac,
  };
}

function normalizeTrackPoints(points) {
  if (!points || points.length === 0) return [];
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;
  points.forEach((p) => {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
    if (p.z < minZ) minZ = p.z;
    if (p.z > maxZ) maxZ = p.z;
  });
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;
  const rangeZ = maxZ - minZ || 1;
  const scale = Math.max(rangeX, rangeY);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  return points.map((p) => ({
    x: ((p.x - cx) / scale) * 40,
    y: ((p.z - cz) / scale) * 4,
    z: ((p.y - cy) / scale) * 40,
  }));
}

function findTelemetryAtT(telemetry, t) {
  if (!telemetry || telemetry.length === 0) {
    return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0 };
  }
  const idx = Math.floor(t * (telemetry.length - 1));
  return telemetry[Math.min(idx, telemetry.length - 1)];
}

// ─── Icons ───
const SpeedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="14" r="8" />
    <path d="M12 14l3-6" />
  </svg>
);
const ThrottleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M2 12h20" />
  </svg>
);
const BrakeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

// ─── Three.js 3D Track Scene ───
function useThreeScene(containerRef, trackPoints, driver1Data, driver2Data, progress, driver1Color, driver2Color) {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef(null);
  const car1Ref = useRef(null);
  const car2Ref = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);
  const cameraAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const cameraDistRef = useRef(55);
  const cameraPitchRef = useRef(0.6);

  useEffect(() => {
    if (!containerRef.current || !trackPoints || trackPoints.length < 10) return;

    // Cleanup previous
    if (rendererRef.current) {
      rendererRef.current.dispose();
      if (containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    }
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a12, 0.006);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a12, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambient = new THREE.AmbientLight(0x334466, 0.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0x4488ff, 0.6, 100);
    pointLight.position.set(0, 15, 0);
    scene.add(pointLight);

    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(200, 200);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d18,
      roughness: 0.95,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    scene.add(ground);

    // Grid
    const gridHelper = new THREE.GridHelper(200, 60, 0x1a1a2e, 0x12121e);
    gridHelper.position.y = -0.45;
    scene.add(gridHelper);

    // Track surface
    const trackCurve = new THREE.CatmullRomCurve3(
      trackPoints.map((p) => new THREE.Vector3(p.x, p.y, p.z)),
      true
    );
    const tubeGeo = new THREE.TubeGeometry(trackCurve, trackPoints.length * 2, 0.8, 8, true);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x222233,
      roughness: 0.7,
      metalness: 0.3,
      transparent: true,
      opacity: 0.8,
    });
    const trackMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(trackMesh);

    // Track center line (glowing)
    const linePoints = trackCurve.getPoints(trackPoints.length * 4);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3344aa,
      transparent: true,
      opacity: 0.4,
    });
    const trackLine = new THREE.Line(lineGeo, lineMat);
    trackLine.position.y += 0.05;
    scene.add(trackLine);

    // Sector markers (simple posts along track)
    const sectorColors = [0x00ff88, 0xffaa00, 0xff3366];
    [0, 0.33, 0.66].forEach((t, i) => {
      const pt = trackCurve.getPointAt(t);
      const postGeo = new THREE.CylinderGeometry(0.1, 0.1, 3, 8);
      const postMat = new THREE.MeshStandardMaterial({
        color: sectorColors[i],
        emissive: sectorColors[i],
        emissiveIntensity: 0.6,
      });
      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(pt.x, pt.y + 1.5, pt.z);
      scene.add(post);
    });

    // Start/finish line
    const sfPt = trackCurve.getPointAt(0);
    const sfGeo = new THREE.BoxGeometry(3, 0.1, 0.3);
    const sfMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.5,
    });
    const sfLine = new THREE.Mesh(sfGeo, sfMat);
    sfLine.position.set(sfPt.x, sfPt.y + 0.1, sfPt.z);
    scene.add(sfLine);

    // Cars
    function createCar(color) {
      const group = new THREE.Group();
      // Body
      const bodyGeo = new THREE.BoxGeometry(0.6, 0.25, 1.4);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.4,
        metalness: 0.6,
        roughness: 0.3,
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.25;
      group.add(body);
      // Nose cone
      const noseGeo = new THREE.ConeGeometry(0.2, 0.6, 4);
      noseGeo.rotateX(-Math.PI / 2);
      const nose = new THREE.Mesh(noseGeo, bodyMat);
      nose.position.set(0, 0.25, 0.9);
      group.add(nose);
      // Glow ring
      const glowGeo = new THREE.RingGeometry(0.6, 0.9, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.rotation.x = -Math.PI / 2;
      glow.position.y = 0.05;
      group.add(glow);
      // Point light on car
      const carLight = new THREE.PointLight(new THREE.Color(color), 0.5, 8);
      carLight.position.y = 0.5;
      group.add(carLight);
      return group;
    }

    const car1 = createCar(driver1Color);
    const car2 = createCar(driver2Color);
    scene.add(car1);
    scene.add(car2);
    car1Ref.current = car1;
    car2Ref.current = car2;

    // Trails
    function createTrail(color) {
      const maxPts = 80;
      const positions = new Float32Array(maxPts * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setDrawRange(0, 0);
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.5,
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      return { line, positions, maxPts, count: 0 };
    }

    trail1Ref.current = createTrail(driver1Color);
    trail2Ref.current = createTrail(driver2Color);

    // Camera controls
    const el = renderer.domElement;
    const onDown = (e) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX || e.touches?.[0]?.clientX || 0, y: e.clientY || e.touches?.[0]?.clientY || 0 };
    };
    const onMove = (e) => {
      if (!isDraggingRef.current) return;
      const cx = e.clientX || e.touches?.[0]?.clientX || 0;
      const cy = e.clientY || e.touches?.[0]?.clientY || 0;
      const dx = cx - lastMouseRef.current.x;
      const dy = cy - lastMouseRef.current.y;
      cameraAngleRef.current += dx * 0.005;
      cameraPitchRef.current = Math.max(0.1, Math.min(1.4, cameraPitchRef.current + dy * 0.005));
      lastMouseRef.current = { x: cx, y: cy };
    };
    const onUp = () => { isDraggingRef.current = false; };
    const onWheel = (e) => {
      cameraDistRef.current = Math.max(15, Math.min(120, cameraDistRef.current + e.deltaY * 0.05));
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("wheel", onWheel);
    el.addEventListener("touchstart", onDown);
    el.addEventListener("touchmove", onMove);
    el.addEventListener("touchend", onUp);

    // Render loop
    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      if (!isDraggingRef.current) {
        cameraAngleRef.current += 0.001;
      }
      const d = cameraDistRef.current;
      const pitch = cameraPitchRef.current;
      camera.position.x = Math.cos(cameraAngleRef.current) * d * Math.cos(pitch);
      camera.position.y = d * Math.sin(pitch);
      camera.position.z = Math.sin(cameraAngleRef.current) * d * Math.cos(pitch);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    // Resize
    const onResize = () => {
      if (!containerRef.current) return;
      const nw = containerRef.current.clientWidth;
      const nh = containerRef.current.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [trackPoints, driver1Color, driver2Color]);

  // Update car positions
  useEffect(() => {
    if (!car1Ref.current || !car2Ref.current || !trackPoints || trackPoints.length < 2) return;

    const d1 = driver1Data?.location;
    const d2 = driver2Data?.location;

    function updateCar(car, trail, data, t) {
      if (!data || data.length < 2) {
        const fallback = interpolateTrackPoint(trackPoints, t);
        car.position.set(fallback.x, fallback.y + 0.3, fallback.z);
        return;
      }
      const pt = interpolateTrackPoint(data, t);
      car.position.set(pt.x, pt.y + 0.3, pt.z);

      // Direction
      const t2 = Math.min(1, t + 0.005);
      const pt2 = interpolateTrackPoint(data, t2);
      const dir = new THREE.Vector3(pt2.x - pt.x, 0, pt2.z - pt.z);
      if (dir.length() > 0.001) {
        car.lookAt(pt2.x, pt.y + 0.3, pt2.z);
      }

      // Trail
      if (trail) {
        const c = Math.min(trail.count + 1, trail.maxPts);
        // Shift old positions
        for (let i = (c - 1) * 3; i >= 3; i -= 3) {
          trail.positions[i] = trail.positions[i - 3];
          trail.positions[i + 1] = trail.positions[i - 2];
          trail.positions[i + 2] = trail.positions[i - 1];
        }
        trail.positions[0] = pt.x;
        trail.positions[1] = pt.y + 0.3;
        trail.positions[2] = pt.z;
        trail.count = c;
        trail.line.geometry.attributes.position.needsUpdate = true;
        trail.line.geometry.setDrawRange(0, c);
      }
    }

    updateCar(car1Ref.current, trail1Ref.current, d1 ? normalizeTrackPoints(d1) : null, progress);
    updateCar(car2Ref.current, trail2Ref.current, d2 ? normalizeTrackPoints(d2) : null, progress);
  }, [progress, trackPoints, driver1Data, driver2Data]);
}

// ─── Telemetry Chart Component ───
function TelemetryChart({ label, data1, data2, color1, color2, maxVal, unit, icon }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = "rgba(10,10,18,0.6)";
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = "rgba(60,60,100,0.2)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 4; i++) {
      const gy = (h / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();
    }

    function drawTrace(data, color) {
      if (!data || data.length < 2) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      data.forEach((val, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - (val / maxVal) * h;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Fill
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = color.replace(")", ",0.08)").replace("rgb", "rgba");
      ctx.fill();
    }

    drawTrace(data1, color1);
    drawTrace(data2, color2);
  }, [data1, data2, color1, color2, maxVal]);

  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, fontSize: 11, color: "#8888aa", fontFamily: "'JetBrains Mono', monospace" }}>
        {icon}
        <span>{label}</span>
        <span style={{ marginLeft: "auto", color: "#555" }}>{unit}</span>
      </div>
      <canvas ref={canvasRef} width={320} height={60} style={{ width: "100%", height: 60, borderRadius: 4, border: "1px solid rgba(50,50,80,0.3)" }} />
    </div>
  );
}

// ─── Sector Delta Component ───
function SectorDelta({ sector, d1Time, d2Time, d1Name, d2Name, color1, color2 }) {
  const delta = d1Time && d2Time ? (d1Time - d2Time) : null;
  const sectorColors = ["#00ff88", "#ffaa00", "#ff3366"];
  return (
    <div style={{
      background: "rgba(15,15,25,0.8)",
      borderRadius: 6,
      padding: "8px 12px",
      borderLeft: `3px solid ${sectorColors[sector - 1]}`,
      minWidth: 90,
    }}>
      <div style={{ fontSize: 10, color: "#666", fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>
        S{sector}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ fontSize: 12, color: color1, fontFamily: "'JetBrains Mono', monospace" }}>
          {d1Time ? d1Time.toFixed(3) + "s" : "—"}
        </div>
        <div style={{ fontSize: 12, color: color2, fontFamily: "'JetBrains Mono', monospace" }}>
          {d2Time ? d2Time.toFixed(3) + "s" : "—"}
        </div>
        {delta !== null && (
          <div style={{
            fontSize: 11,
            color: delta > 0 ? "#ff4466" : "#00ff88",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            marginTop: 2,
          }}>
            {delta > 0 ? "+" : ""}{delta.toFixed(3)}s
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Loading Spinner ───
function Spinner({ text }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: 40 }}>
      <div style={{
        width: 32, height: 32, border: "3px solid rgba(100,100,200,0.2)",
        borderTopColor: "#6666ff", borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <div style={{ fontSize: 13, color: "#8888aa", fontFamily: "'JetBrains Mono', monospace" }}>{text}</div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════
export default function F1PhantomCars() {
  // State: selection
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

  // State: data
  const [laps1, setLaps1] = useState([]);
  const [laps2, setLaps2] = useState([]);
  const [locationData1, setLocationData1] = useState(null);
  const [locationData2, setLocationData2] = useState(null);
  const [telemetry1, setTelemetry1] = useState(null);
  const [telemetry2, setTelemetry2] = useState(null);
  const [trackPoints, setTrackPoints] = useState(null);

  // State: playback
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const playIntervalRef = useRef(null);

  // State: UI
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [showTelemetry, setShowTelemetry] = useState(true);

  const canvasContainerRef = useRef(null);

  // Derived
  const driver1Info = drivers.find((d) => d.driver_number === driver1);
  const driver2Info = drivers.find((d) => d.driver_number === driver2);
  const color1 = driver1Info ? getTeamColor(driver1Info.team_name) : "#4488ff";
  const color2 = driver2Info ? getTeamColor(driver2Info.team_name) : "#ff4488";

  // ─── Load meetings ───
  useEffect(() => {
    setLoading("Loading calendar...");
    setError("");
    fetchMeetings(year)
      .then((data) => {
        const races = data.filter((m) => m.meeting_name);
        setMeetings(races);
        setSelectedMeeting(null);
        setSelectedSession(null);
        setLoading("");
      })
      .catch((e) => {
        setError(e.message);
        setLoading("");
      });
  }, [year]);

  // ─── Load sessions ───
  useEffect(() => {
    if (!selectedMeeting) return;
    setLoading("Loading sessions...");
    fetchSessions(selectedMeeting.meeting_key)
      .then((data) => {
        // Filter to qualifying and race
        const useful = data.filter((s) =>
          ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"].includes(s.session_name)
        );
        setSessions(useful);
        setSelectedSession(null);
        setLoading("");
      })
      .catch((e) => {
        setError(e.message);
        setLoading("");
      });
  }, [selectedMeeting]);

  // ─── Load drivers ───
  useEffect(() => {
    if (!selectedSession) return;
    setLoading("Loading drivers...");
    fetchDrivers(selectedSession.session_key)
      .then((data) => {
        // Deduplicate by driver_number
        const seen = new Set();
        const unique = data.filter((d) => {
          if (seen.has(d.driver_number)) return false;
          seen.add(d.driver_number);
          return true;
        });
        setDrivers(unique);
        setDriver1(null);
        setDriver2(null);
        setLoading("");
      })
      .catch((e) => {
        setError(e.message);
        setLoading("");
      });
  }, [selectedSession]);

  // ─── Load laps for driver 1 ───
  useEffect(() => {
    if (!selectedSession || !driver1) return;
    fetchLaps(selectedSession.session_key, driver1).then(setLaps1).catch(() => setLaps1([]));
  }, [selectedSession, driver1]);

  // ─── Load laps for driver 2 ───
  useEffect(() => {
    if (!selectedSession || !driver2) return;
    fetchLaps(selectedSession.session_key, driver2).then(setLaps2).catch(() => setLaps2([]));
  }, [selectedSession, driver2]);

  // Auto-select fastest lap
  useEffect(() => {
    if (laps1.length > 0 && !selectedLap1) {
      const valid = laps1.filter((l) => l.lap_duration && l.lap_duration > 10);
      if (valid.length > 0) {
        const fastest = valid.reduce((a, b) => (a.lap_duration < b.lap_duration ? a : b));
        setSelectedLap1(fastest.lap_number);
      }
    }
  }, [laps1]);

  useEffect(() => {
    if (laps2.length > 0 && !selectedLap2) {
      const valid = laps2.filter((l) => l.lap_duration && l.lap_duration > 10);
      if (valid.length > 0) {
        const fastest = valid.reduce((a, b) => (a.lap_duration < b.lap_duration ? a : b));
        setSelectedLap2(fastest.lap_number);
      }
    }
  }, [laps2]);

  // ─── Load location + telemetry data ───
  const loadRaceData = useCallback(async () => {
    if (!selectedSession || !driver1 || !driver2 || !selectedLap1 || !selectedLap2) return;

    setLoading("Fetching telemetry data...");
    setError("");

    try {
      const sk = selectedSession.session_key;

      // Get lap timing info for date ranges
      const lap1Info = laps1.find((l) => l.lap_number === selectedLap1);
      const lap2Info = laps2.find((l) => l.lap_number === selectedLap2);

      if (!lap1Info?.date_start || !lap2Info?.date_start) {
        setError("Lap timing data not available. Try a different lap.");
        setLoading("");
        return;
      }

      // Calculate end dates from lap_duration
      const lap1End = new Date(new Date(lap1Info.date_start).getTime() + (lap1Info.lap_duration || 120) * 1000).toISOString();
      const lap2End = new Date(new Date(lap2Info.date_start).getTime() + (lap2Info.lap_duration || 120) * 1000).toISOString();

      setLoading("Loading location data...");
      const [loc1, loc2] = await Promise.all([
        fetchLocation(sk, driver1, lap1Info.date_start, lap1End),
        fetchLocation(sk, driver2, lap2Info.date_start, lap2End),
      ]);

      setLoading("Loading car telemetry...");
      const [car1, car2] = await Promise.all([
        fetchCarData(sk, driver1, lap1Info.date_start, lap1End),
        fetchCarData(sk, driver2, lap2Info.date_start, lap2End),
      ]);

      if (loc1.length < 5 || loc2.length < 5) {
        setError("Insufficient location data for selected laps. Try other laps or session.");
        setLoading("");
        return;
      }

      setLocationData1(loc1);
      setLocationData2(loc2);
      setTelemetry1(car1);
      setTelemetry2(car2);

      // Build track from driver 1's location
      const normalized = normalizeTrackPoints(loc1);
      setTrackPoints(normalized);
      setProgress(0);
      setLoading("");
    } catch (e) {
      setError(`Failed to load data: ${e.message}`);
      setLoading("");
    }
  }, [selectedSession, driver1, driver2, selectedLap1, selectedLap2, laps1, laps2]);

  // ─── 3D Scene ───
  useThreeScene(
    canvasContainerRef,
    trackPoints,
    { location: locationData1 },
    { location: locationData2 },
    progress,
    color1,
    color2
  );

  // ─── Playback ───
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setProgress((p) => {
          const next = p + 0.001 * playbackSpeed;
          if (next >= 1) {
            setIsPlaying(false);
            return 1;
          }
          return next;
        });
      }, 16);
    } else {
      clearInterval(playIntervalRef.current);
    }
    return () => clearInterval(playIntervalRef.current);
  }, [isPlaying, playbackSpeed]);

  // Current telemetry values
  const curTel1 = findTelemetryAtT(telemetry1, progress);
  const curTel2 = findTelemetryAtT(telemetry2, progress);

  // Sector times from lap data
  const lap1Info = laps1.find((l) => l.lap_number === selectedLap1);
  const lap2Info = laps2.find((l) => l.lap_number === selectedLap2);

  // Telemetry trace arrays (sampled)
  const speedTrace1 = useMemo(() => telemetry1?.map((t) => t.speed || 0) || [], [telemetry1]);
  const speedTrace2 = useMemo(() => telemetry2?.map((t) => t.speed || 0) || [], [telemetry2]);
  const throttleTrace1 = useMemo(() => telemetry1?.map((t) => t.throttle || 0) || [], [telemetry1]);
  const throttleTrace2 = useMemo(() => telemetry2?.map((t) => t.throttle || 0) || [], [telemetry2]);
  const brakeTrace1 = useMemo(() => telemetry1?.map((t) => (t.brake > 0 ? 100 : 0)) || [], [telemetry1]);
  const brakeTrace2 = useMemo(() => telemetry2?.map((t) => (t.brake > 0 ? 100 : 0)) || [], [telemetry2]);

  // Total delta
  const totalDelta = lap1Info?.lap_duration && lap2Info?.lap_duration
    ? (lap1Info.lap_duration - lap2Info.lap_duration)
    : null;

  return (
    <div style={{
      width: "100%", minHeight: "100vh", background: "#0a0a12", color: "#c8c8dd",
      fontFamily: "'Outfit', 'Segoe UI', sans-serif", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(20,20,35,0.5); }
        ::-webkit-scrollbar-thumb { background: rgba(80,80,140,0.4); border-radius: 3px; }
        select, button { font-family: 'Outfit', sans-serif; }
        select {
          background: rgba(20,20,35,0.9); color: #c8c8dd; border: 1px solid rgba(60,60,100,0.4);
          border-radius: 6px; padding: 6px 10px; font-size: 13px; cursor: pointer; outline: none;
          transition: border-color 0.2s;
        }
        select:hover { border-color: rgba(100,100,200,0.6); }
        select:focus { border-color: #6666ff; }
        button {
          background: rgba(30,30,50,0.9); color: #c8c8dd; border: 1px solid rgba(60,60,100,0.4);
          border-radius: 6px; padding: 6px 14px; font-size: 13px; cursor: pointer; outline: none;
          transition: all 0.2s;
        }
        button:hover { background: rgba(50,50,80,0.9); border-color: rgba(100,100,200,0.6); }
        .btn-primary {
          background: linear-gradient(135deg, #4444cc, #6644ff); border-color: #6655ff;
          color: #fff; font-weight: 600;
        }
        .btn-primary:hover { background: linear-gradient(135deg, #5555dd, #7755ff); transform: translateY(-1px); }
        .btn-primary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
      `}</style>

      {/* ─── Header ─── */}
      <div style={{
        padding: "16px 24px", display: "flex", alignItems: "center", gap: 16,
        borderBottom: "1px solid rgba(40,40,70,0.5)", background: "rgba(8,8,15,0.95)",
        backdropFilter: "blur(12px)", position: "relative", zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{
            fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #6666ff, #ff4488)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            PHANTOM CARS
          </span>
          <span style={{ fontSize: 11, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>v1.0</span>
        </div>
        <div style={{ fontSize: 11, color: "#556", fontFamily: "'JetBrains Mono', monospace", marginLeft: "auto" }}>
          Powered by OpenF1 API
        </div>
      </div>

      {/* ─── Control Bar ─── */}
      <div style={{
        padding: "12px 24px", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
        borderBottom: "1px solid rgba(40,40,70,0.3)", background: "rgba(12,12,20,0.9)",
      }}>
        {/* Year */}
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {[2026, 2025, 2024, 2023].map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        {/* Meeting */}
        <select
          value={selectedMeeting?.meeting_key || ""}
          onChange={(e) => {
            const m = meetings.find((m) => m.meeting_key === Number(e.target.value));
            setSelectedMeeting(m || null);
          }}
          style={{ minWidth: 180 }}
        >
          <option value="">Select Grand Prix</option>
          {meetings.map((m) => (
            <option key={m.meeting_key} value={m.meeting_key}>
              {m.meeting_name}
            </option>
          ))}
        </select>

        {/* Session */}
        <select
          value={selectedSession?.session_key || ""}
          onChange={(e) => {
            const s = sessions.find((s) => s.session_key === Number(e.target.value));
            setSelectedSession(s || null);
          }}
          style={{ minWidth: 140 }}
          disabled={!sessions.length}
        >
          <option value="">Select Session</option>
          {sessions.map((s) => (
            <option key={s.session_key} value={s.session_key}>
              {s.session_name}
            </option>
          ))}
        </select>

        <div style={{ width: 1, height: 28, background: "rgba(60,60,100,0.3)" }} />

        {/* Driver 1 */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: color1, boxShadow: `0 0 6px ${color1}` }} />
          <select
            value={driver1 || ""}
            onChange={(e) => { setDriver1(Number(e.target.value)); setSelectedLap1(null); setLaps1([]); }}
            disabled={!drivers.length}
            style={{ minWidth: 120 }}
          >
            <option value="">Driver 1</option>
            {drivers.map((d) => (
              <option key={d.driver_number} value={d.driver_number}>
                {d.name_acronym || d.last_name || `#${d.driver_number}`}
              </option>
            ))}
          </select>
          {laps1.length > 0 && (
            <select value={selectedLap1 || ""} onChange={(e) => setSelectedLap1(Number(e.target.value))} style={{ width: 80 }}>
              <option value="">Lap</option>
              {laps1.filter((l) => l.lap_duration && l.lap_duration > 10).map((l) => (
                <option key={l.lap_number} value={l.lap_number}>
                  L{l.lap_number} ({l.lap_duration?.toFixed(1)}s)
                </option>
              ))}
            </select>
          )}
        </div>

        <span style={{ color: "#444", fontSize: 12, fontWeight: 600 }}>VS</span>

        {/* Driver 2 */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: color2, boxShadow: `0 0 6px ${color2}` }} />
          <select
            value={driver2 || ""}
            onChange={(e) => { setDriver2(Number(e.target.value)); setSelectedLap2(null); setLaps2([]); }}
            disabled={!drivers.length}
            style={{ minWidth: 120 }}
          >
            <option value="">Driver 2</option>
            {drivers.map((d) => (
              <option key={d.driver_number} value={d.driver_number}>
                {d.name_acronym || d.last_name || `#${d.driver_number}`}
              </option>
            ))}
          </select>
          {laps2.length > 0 && (
            <select value={selectedLap2 || ""} onChange={(e) => setSelectedLap2(Number(e.target.value))} style={{ width: 80 }}>
              <option value="">Lap</option>
              {laps2.filter((l) => l.lap_duration && l.lap_duration > 10).map((l) => (
                <option key={l.lap_number} value={l.lap_number}>
                  L{l.lap_number} ({l.lap_duration?.toFixed(1)}s)
                </option>
              ))}
            </select>
          )}
        </div>

        <div style={{ width: 1, height: 28, background: "rgba(60,60,100,0.3)" }} />

        <button
          className="btn-primary"
          onClick={loadRaceData}
          disabled={!driver1 || !driver2 || !selectedLap1 || !selectedLap2 || !!loading}
        >
          {loading ? "Loading..." : "Load Ghost Laps"}
        </button>
      </div>

      {/* ─── Error / Loading ─── */}
      {error && (
        <div style={{ padding: "12px 24px", background: "rgba(255,40,60,0.1)", borderBottom: "1px solid rgba(255,40,60,0.2)", fontSize: 13, color: "#ff6677" }}>
          {error}
        </div>
      )}
      {loading && (
        <div style={{ padding: "12px 24px", background: "rgba(60,60,255,0.05)", borderBottom: "1px solid rgba(60,60,255,0.1)" }}>
          <Spinner text={loading} />
        </div>
      )}

      {/* ─── Main Content ─── */}
      <div style={{ display: "flex", height: "calc(100vh - 140px)", position: "relative" }}>
        {/* 3D Viewport */}
        <div style={{ flex: 1, position: "relative" }}>
          <div
            ref={canvasContainerRef}
            style={{
              width: "100%", height: "100%", background: "#0a0a12",
              cursor: "grab",
            }}
          />

          {/* Overlay: Delta Badge */}
          {totalDelta !== null && trackPoints && (
            <div style={{
              position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
              background: "rgba(8,8,15,0.9)", backdropFilter: "blur(8px)",
              borderRadius: 8, padding: "8px 20px", border: "1px solid rgba(60,60,100,0.4)",
              animation: "fadeIn 0.5s ease",
            }}>
              <div style={{ fontSize: 10, color: "#666", textAlign: "center", fontFamily: "'JetBrains Mono', monospace" }}>LAP DELTA</div>
              <div style={{
                fontSize: 24, fontWeight: 800, textAlign: "center",
                fontFamily: "'JetBrains Mono', monospace",
                color: totalDelta > 0 ? "#ff4466" : "#00ff88",
              }}>
                {totalDelta > 0 ? "+" : ""}{totalDelta.toFixed(3)}s
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 4 }}>
                <span style={{ fontSize: 11, color: color1, fontFamily: "'JetBrains Mono', monospace" }}>
                  {driver1Info?.name_acronym} {lap1Info?.lap_duration?.toFixed(3)}s
                </span>
                <span style={{ fontSize: 11, color: color2, fontFamily: "'JetBrains Mono', monospace" }}>
                  {driver2Info?.name_acronym} {lap2Info?.lap_duration?.toFixed(3)}s
                </span>
              </div>
            </div>
          )}

          {/* Overlay: Sector Deltas */}
          {trackPoints && lap1Info && lap2Info && (
            <div style={{
              position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 8,
            }}>
              <SectorDelta sector={1} d1Time={lap1Info.duration_sector_1} d2Time={lap2Info.duration_sector_1}
                d1Name={driver1Info?.name_acronym} d2Name={driver2Info?.name_acronym} color1={color1} color2={color2} />
              <SectorDelta sector={2} d1Time={lap1Info.duration_sector_2} d2Time={lap2Info.duration_sector_2}
                d1Name={driver1Info?.name_acronym} d2Name={driver2Info?.name_acronym} color1={color1} color2={color2} />
              <SectorDelta sector={3} d1Time={lap1Info.duration_sector_3} d2Time={lap2Info.duration_sector_3}
                d1Name={driver1Info?.name_acronym} d2Name={driver2Info?.name_acronym} color1={color1} color2={color2} />
            </div>
          )}

          {/* Overlay: Playback Controls */}
          {trackPoints && (
            <div style={{
              position: "absolute", bottom: 16, left: 16, right: showTelemetry ? 360 : 16,
              background: "rgba(8,8,15,0.9)", backdropFilter: "blur(8px)",
              borderRadius: 8, padding: "10px 16px", border: "1px solid rgba(60,60,100,0.3)",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <button onClick={() => { setProgress(0); setIsPlaying(false); }} style={{ padding: "4px 8px", fontSize: 12 }}>
                ⏮
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} style={{ padding: "4px 10px", fontSize: 14 }}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <input
                type="range" min="0" max="1" step="0.001" value={progress}
                onChange={(e) => setProgress(parseFloat(e.target.value))}
                style={{ flex: 1, accentColor: "#6666ff", height: 4 }}
              />
              <span style={{ fontSize: 11, color: "#888", fontFamily: "'JetBrains Mono', monospace", minWidth: 40 }}>
                {(progress * 100).toFixed(1)}%
              </span>
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                style={{ width: 60, padding: "3px 6px", fontSize: 11 }}
              >
                <option value={0.25}>0.25x</option>
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={4}>4x</option>
              </select>
              <button
                onClick={() => setShowTelemetry(!showTelemetry)}
                style={{ padding: "4px 8px", fontSize: 11, opacity: showTelemetry ? 1 : 0.5 }}
              >
                📊
              </button>
            </div>
          )}

          {/* Empty state */}
          {!trackPoints && !loading && (
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              textAlign: "center", animation: "fadeIn 0.8s ease",
            }}>
              <div style={{
                fontSize: 64, marginBottom: 16, opacity: 0.15,
                background: "linear-gradient(135deg, #6666ff, #ff4488)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                🏎
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#444", marginBottom: 8 }}>
                Select a Grand Prix, session, and two drivers
              </div>
              <div style={{ fontSize: 13, color: "#333", maxWidth: 400 }}>
                Choose drivers and laps above, then click "Load Ghost Laps" to visualize
                their fastest laps as phantom cars racing on a 3D track.
              </div>
            </div>
          )}
        </div>

        {/* ─── Telemetry Panel ─── */}
        {showTelemetry && trackPoints && (
          <div style={{
            width: 340, borderLeft: "1px solid rgba(40,40,70,0.3)",
            background: "rgba(8,8,15,0.95)", padding: 16, overflowY: "auto",
            animation: "fadeIn 0.3s ease",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#8888bb", letterSpacing: "0.05em" }}>
              LIVE TELEMETRY
            </div>

            {/* Current values */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
              {[
                { label: "SPD", val1: curTel1.speed, val2: curTel2.speed, unit: "km/h" },
                { label: "THR", val1: curTel1.throttle, val2: curTel2.throttle, unit: "%" },
                { label: "BRK", val1: curTel1.brake > 0 ? "ON" : "OFF", val2: curTel2.brake > 0 ? "ON" : "OFF", unit: "" },
                { label: "GEAR", val1: curTel1.n_gear ?? curTel1.gear ?? "—", val2: curTel2.n_gear ?? curTel2.gear ?? "—", unit: "" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "rgba(15,15,25,0.8)", borderRadius: 6, padding: "8px 10px",
                  border: "1px solid rgba(40,40,70,0.3)",
                }}>
                  <div style={{ fontSize: 9, color: "#555", fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>
                    {item.label} {item.unit && `(${item.unit})`}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: color1, fontFamily: "'JetBrains Mono', monospace" }}>
                      {typeof item.val1 === "number" ? Math.round(item.val1) : item.val1}
                    </span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: color2, fontFamily: "'JetBrains Mono', monospace" }}>
                      {typeof item.val2 === "number" ? Math.round(item.val2) : item.val2}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Driver legend */}
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 3, background: color1, borderRadius: 1 }} />
                <span style={{ fontSize: 11, color: color1, fontFamily: "'JetBrains Mono', monospace" }}>
                  {driver1Info?.name_acronym || "D1"}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 3, background: color2, borderRadius: 1 }} />
                <span style={{ fontSize: 11, color: color2, fontFamily: "'JetBrains Mono', monospace" }}>
                  {driver2Info?.name_acronym || "D2"}
                </span>
              </div>
            </div>

            {/* Trace charts */}
            <TelemetryChart
              label="SPEED" data1={speedTrace1} data2={speedTrace2}
              color1={color1} color2={color2} maxVal={370} unit="km/h"
              icon={<SpeedIcon />}
            />
            <TelemetryChart
              label="THROTTLE" data1={throttleTrace1} data2={throttleTrace2}
              color1={color1} color2={color2} maxVal={100} unit="%"
              icon={<ThrottleIcon />}
            />
            <TelemetryChart
              label="BRAKE" data1={brakeTrace1} data2={brakeTrace2}
              color1={color1} color2={color2} maxVal={100} unit="on/off"
              icon={<BrakeIcon />}
            />

            {/* DRS indicator */}
            <div style={{
              marginTop: 12, display: "flex", gap: 8,
            }}>
              <div style={{
                flex: 1, background: "rgba(15,15,25,0.8)", borderRadius: 6, padding: "8px 10px",
                border: `1px solid ${curTel1.drs >= 10 ? "rgba(0,255,100,0.4)" : "rgba(40,40,70,0.3)"}`,
              }}>
                <div style={{ fontSize: 9, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>DRS</div>
                <div style={{
                  fontSize: 14, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                  color: curTel1.drs >= 10 ? "#00ff66" : "#555",
                }}>
                  {curTel1.drs >= 10 ? "OPEN" : "CLOSED"}
                </div>
              </div>
              <div style={{
                flex: 1, background: "rgba(15,15,25,0.8)", borderRadius: 6, padding: "8px 10px",
                border: `1px solid ${curTel2.drs >= 10 ? "rgba(0,255,100,0.4)" : "rgba(40,40,70,0.3)"}`,
              }}>
                <div style={{ fontSize: 9, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>DRS</div>
                <div style={{
                  fontSize: 14, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                  color: curTel2.drs >= 10 ? "#00ff66" : "#555",
                }}>
                  {curTel2.drs >= 10 ? "OPEN" : "CLOSED"}
                </div>
              </div>
            </div>

            {/* RPM */}
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <div style={{ flex: 1, background: "rgba(15,15,25,0.8)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontSize: 9, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>RPM</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: color1, fontFamily: "'JetBrains Mono', monospace" }}>
                  {curTel1.rpm ? Math.round(curTel1.rpm).toLocaleString() : "—"}
                </div>
              </div>
              <div style={{ flex: 1, background: "rgba(15,15,25,0.8)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontSize: 9, color: "#555", fontFamily: "'JetBrains Mono', monospace" }}>RPM</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: color2, fontFamily: "'JetBrains Mono', monospace" }}>
                  {curTel2.rpm ? Math.round(curTel2.rpm).toLocaleString() : "—"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
