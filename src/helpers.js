import { useState, useEffect } from "react";

export function lerp(pts, t) {
  if (!pts?.length) return { x: 0, y: 0, z: 0 };
  const idx = Math.max(0, Math.min(1, t)) * (pts.length - 1);
  const i0 = Math.floor(idx), i1 = Math.min(i0 + 1, pts.length - 1), f = idx - i0;
  return {
    x: pts[i0].x + (pts[i1].x - pts[i0].x) * f,
    y: pts[i0].y + (pts[i1].y - pts[i0].y) * f,
    z: pts[i0].z + (pts[i1].z - pts[i0].z) * f,
  };
}

export function norm(points) {
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

export function telAt(tel, t) {
  if (!tel?.length) return { speed: 0, throttle: 0, brake: 0, rpm: 0, gear: 0, drs: 0, n_gear: 0 };
  return tel[Math.min(Math.floor(t * (tel.length - 1)), tel.length - 1)];
}

export function bestLap(laps) {
  const v = laps.filter((l) => l.lap_duration > 10 && l.date_start);
  return v.length ? v.reduce((a, b) => (a.lap_duration < b.lap_duration ? a : b)) : null;
}

export function useIsMobile() {
  const [m, setM] = useState(typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
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

export function encodeURL(s) {
  const p = new URLSearchParams();
  if (s.year) p.set("y", s.year);
  if (s.mk) p.set("mk", s.mk);
  if (s.sk) p.set("sk", s.sk);
  if (s.d1) p.set("d1", s.d1);
  if (s.d2) p.set("d2", s.d2);
  if (s.l1) p.set("l1", s.l1);
  if (s.l2) p.set("l2", s.l2);
  return `${window.location.origin}${window.location.pathname}?${p.toString()}`;
}

export function decodeURL() {
  const p = new URLSearchParams(window.location.search);
  return {
    year: p.get("y"), mk: p.get("mk"), sk: p.get("sk"),
    d1: p.get("d1"), d2: p.get("d2"), l1: p.get("l1"), l2: p.get("l2"),
  };
}
