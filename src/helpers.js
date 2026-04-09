import { useState, useEffect } from "react";

const DEFAULT_URL_BASE = "https://f1stories.gr/ghostcar/";

// ─── Smooth cubic Catmull-Rom interpolation (replaces linear lerp) ───
export function lerp(pts, t) {
  if (!pts?.length) return { x: 0, y: 0, z: 0 };
  const len = pts.length;
  if (len === 1) return { x: pts[0].x, y: pts[0].y, z: pts[0].z };
  const ct = Math.max(0, Math.min(1, t));
  const idx = ct * (len - 1);
  const i1 = Math.floor(idx);
  const i2 = Math.min(i1 + 1, len - 1);
  const f = idx - i1;

  // Catmull-Rom spline with 4 control points
  const i0 = Math.max(i1 - 1, 0);
  const i3 = Math.min(i2 + 1, len - 1);
  const p0 = pts[i0], p1 = pts[i1], p2 = pts[i2], p3 = pts[i3];

  const f2 = f * f;
  const f3 = f2 * f;

  return {
    x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * f + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * f2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * f3),
    y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * f + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * f2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * f3),
    z: 0.5 * ((2 * p1.z) + (-p0.z + p2.z) * f + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * f2 + (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * f3),
  };
}

export function norm(points, flip = false) {
  if (!points?.length) return [];
  let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity, mnZ = Infinity, mxZ = -Infinity;
  for (const p of points) {
    if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x;
    if (p.y < mnY) mnY = p.y; if (p.y > mxY) mxY = p.y;
    if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z;
  }
  const sc = Math.max(mxX - mnX, mxY - mnY) || 1;
  const cx = (mnX + mxX) / 2, cy = (mnY + mxY) / 2, cz = (mnZ + mxZ) / 2;
  const fx = flip ? -1 : 1;
  return points.map((p) => ({
    x: fx * ((p.x - cx) / sc) * 40,
    y: ((p.z - cz) / sc) * 4,
    z: ((p.y - cy) / sc) * 40,
  }));
}

export function telAt(tel, t) {
  if (!tel?.length) return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0, n_gear: 0 };
  const len = tel.length;
  const idx = Math.max(0, Math.min(1, t)) * (len - 1);
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, len - 1);
  const f = idx - i0;
  const a = tel[i0], b = tel[i1];
  // Smooth interpolation for telemetry values too
  return {
    speed: a.speed + (b.speed - a.speed) * f,
    throttle: a.throttle + (b.throttle - a.throttle) * f,
    brake: f > 0.5 ? b.brake : a.brake, // brake is binary, use nearest
    rpm: a.rpm + ((b.rpm || 0) - (a.rpm || 0)) * f,
    gear: f > 0.5 ? (b.gear || b.n_gear || 0) : (a.gear || a.n_gear || 0),
    drs: f > 0.5 ? (b.drs || 0) : (a.drs || 0),
    n_gear: f > 0.5 ? (b.n_gear || b.gear || 0) : (a.n_gear || a.gear || 0),
  };
}

export function bestLap(laps) {
  const v = laps.filter((l) => l.lap_duration > 10 && l.date_start);
  return v.length ? v.reduce((a, b) => (a.lap_duration < b.lap_duration ? a : b)) : null;
}

export function useIsMobile() {
  const [m, setM] = useState(typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    let t;
    const h = () => { clearTimeout(t); t = setTimeout(() => setM(window.innerWidth < 768), 150); };
    window.addEventListener("resize", h, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("resize", h); };
  }, []);
  return m;
}

// Resample a path to n evenly-spaced points using Catmull-Rom.
// Call once at load time so per-frame lerp is always between closely-packed smooth points.
export function smoothPath(pts, n = 1200) {
  if (!pts?.length || pts.length < 2) return pts || [];
  const out = new Array(n + 1);
  for (let i = 0; i <= n; i++) out[i] = lerp(pts, i / n);
  return out;
}

export function ds(a, max) {
  if (!a || a.length <= max) return a || [];
  const s = a.length / max, o = [];
  for (let i = 0; i < max; i++) o.push(a[Math.floor(i * s)]);
  return o;
}

export function fmt(s) {
  if (!s || s <= 0) return "0:00.000";
  const m = Math.floor(s / 60), sec = s - m * 60;
  return `${m}:${sec < 10 ? "0" : ""}${sec.toFixed(3)}`;
}

export function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function getUrlBase(baseURL) {
  if (baseURL) return baseURL;
  if (typeof window !== "undefined") return `${window.location.origin}${window.location.pathname}`;
  return DEFAULT_URL_BASE;
}

function parseUrl(input) {
  if (input instanceof URL) return input;
  if (typeof input === "string" && input) {
    try {
      return new URL(input, getUrlBase());
    } catch {
      return new URL(getUrlBase());
    }
  }
  if (typeof window !== "undefined") return new URL(window.location.href);
  return new URL(DEFAULT_URL_BASE);
}

export function encodeURL(s, options = {}) {
  const url = new URL(getUrlBase(options.baseURL));
  const p = url.searchParams;
  if (s.year) p.set("y", s.year);
  if (s.mk) p.set("mk", s.mk);
  if (s.sk) p.set("sk", s.sk);
  if (s.d1) p.set("d1", s.d1);
  if (s.d2) p.set("d2", s.d2);
  if (s.d3) p.set("d3", s.d3);
  if (s.d4) p.set("d4", s.d4);
  if (s.l1) p.set("l1", s.l1);
  if (s.l2) p.set("l2", s.l2);
  if (s.l3) p.set("l3", s.l3);
  if (s.l4) p.set("l4", s.l4);
  if (s.numDrivers && Number(s.numDrivers) > 2) p.set("nd", s.numDrivers);
  if (s.trackView === "2d") p.set("tv", "2d");
  if (s.cam && s.cam !== "orbit") p.set("cam", s.cam);
  if (s.vizMode && s.vizMode !== "normal") p.set("vz", s.vizMode);
  if (s.theme === "dark" || s.theme === "light") p.set("th", s.theme);
  if (s.speed && Number(s.speed) !== 1) p.set("spd", s.speed);
  if (s.loop) p.set("lp", "1");
  if (s.tab && s.tab !== "3d") p.set("tab", s.tab);
  if (s.embed) p.set("embed", "1");
  if ([...p.keys()].length) p.set("v", "2");
  return url.toString();
}

export function decodeURL(input) {
  const p = parseUrl(input).searchParams;
  return {
    version: p.get("v") || "1",
    year: p.get("y") || p.get("year"),
    mk: p.get("mk"),
    sk: p.get("sk"),
    d1: p.get("d1"),
    d2: p.get("d2"),
    d3: p.get("d3"),
    d4: p.get("d4"),
    l1: p.get("l1"),
    l2: p.get("l2"),
    l3: p.get("l3"),
    l4: p.get("l4"),
    numDrivers: p.get("nd"),
    trackView: p.get("tv"),
    cam: p.get("cam"),
    vizMode: p.get("vz"),
    theme: p.get("th"),
    speed: p.get("spd"),
    loop: p.get("lp"),
    tab: p.get("tab"),
    embed: p.get("embed"),
  };
}
