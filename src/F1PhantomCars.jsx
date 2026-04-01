import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { F1_DARK, F1_LIGHT, TIRE_COLORS, getTeamColor, PRESETS, CAM_MODES, CAM_LABELS, DRIVER_NAME_BY_NUMBER } from "./constants.js";
import { fetchMeetings, fetchSessions, fetchDrivers, fetchLaps, fetchStints, fetchLocation, fetchCarData } from "./api.js";
import { lerp, norm, telAt, bestLap, useIsMobile, ds, fmt, encodeURL, decodeURL, normalizeText } from "./helpers.js";
import { setThemeMode, getF1 } from "./theme.js";

// Hooks
import useScene from "./hooks/useScene.js";

// Components
import MiniMap from "./components/MiniMap.jsx";
import SectorDelta from "./components/SectorDelta.jsx";
import TelemetryPanel from "./components/TelemetryPanel.jsx";

// Modals
import PresetsModal from "./modals/PresetsModal.jsx";
import StatsModal from "./modals/StatsModal.jsx";
import LapsModal from "./modals/LapsModal.jsx";
import KeysModal from "./modals/KeysModal.jsx";
import H2HModal from "./modals/H2HModal.jsx";
import DashModal from "./modals/DashModal.jsx";
import GalleryModal from "./modals/GalleryModal.jsx";
import EmbedModal from "./modals/EmbedModal.jsx";
import TourOverlay from "./modals/TourOverlay.jsx";

const AVAILABLE_YEARS = [2026, 2025, 2024, 2023];
const UNAVAILABLE_PRESET_YEARS = [2026];
const DEFAULT_YEAR = 2025;

export default function App({ embed }) {
  const mob = useIsMobile();
  const initialURL = useMemo(() => decodeURL(), []);
  const [isDark, setIsDark] = useState(() => { try { return localStorage.getItem("f1s-theme") !== "light"; } catch { return true; } });
  setThemeMode(isDark);
  const F1 = getF1();
  const toggleTheme = useCallback(() => { setIsDark((d) => { const next = !d; try { localStorage.setItem("f1s-theme", next ? "dark" : "light"); } catch {} return next; }); }, []);

  // ─── State ───
  const [year, setYear] = useState(() => Number(initialURL.year) || DEFAULT_YEAR);
  const [mts, setMts] = useState([]); const [selMt, setSelMt] = useState(null);
  const [sess, setSess] = useState([]); const [selSe, setSelSe] = useState(null);
  const [drvs, setDrvs] = useState([]); const [d1, setD1] = useState(null); const [d2, setD2] = useState(null);
  const [d3, setD3] = useState(null); const [d4, setD4] = useState(null);
  const [sl1, setSl1] = useState(null); const [sl2, setSl2] = useState(null);
  const [sl3, setSl3] = useState(null); const [sl4, setSl4] = useState(null);
  const [laps1, setLaps1] = useState([]); const [laps2, setLaps2] = useState([]);
  const [laps3, setLaps3] = useState([]); const [laps4, setLaps4] = useState([]);
  const [loc1, setLoc1] = useState(null); const [loc2, setLoc2] = useState(null);
  const [loc3, setLoc3] = useState(null); const [loc4, setLoc4] = useState(null);
  const [tel1, setTel1] = useState(null); const [tel2, setTel2] = useState(null);
  const [tel3, setTel3] = useState(null); const [tel4, setTel4] = useState(null);
  const [tp, setTp] = useState(null);
  const [st1, setSt1] = useState([]); const [st2, setSt2] = useState([]);
  const [st3, setSt3] = useState([]); const [st4, setSt4] = useState([]);
  const [numDrivers, setNumDrivers] = useState(2);
  const [showDash, setShowDash] = useState(false); const [dashData, setDashData] = useState(null);
  const [prog, setProg] = useState(0); const [play, setPlay] = useState(false); const [spd, setSpd] = useState(1); const [loop, setLoop] = useState(false);
  const [cam, setCam] = useState("orbit"); const [vizMode, setVizMode] = useState("normal");
  const [showKeys, setShowKeys] = useState(false);
  const [showTour, setShowTour] = useState(() => { if (embed) return false; try { return !localStorage.getItem("f1s-toured"); } catch { return true; } });
  const [showH2H, setShowH2H] = useState(false); const [h2hData, setH2hData] = useState(null);
  const [showreel, setShowreel] = useState(false); const showreelRef = useRef(false);
  const [countdown, setCountdown] = useState(null);
  const [gallery, setGallery] = useState(() => { try { return JSON.parse(localStorage.getItem("f1s-gallery") || "[]"); } catch { return []; } });
  const [showGallery, setShowGallery] = useState(false); const [showEmbed, setShowEmbed] = useState(false);
  const [loading, setLoading] = useState(""); const [ldPct, setLdPct] = useState(undefined); const [err, setErr] = useState("");
  const [sceneErr, setSceneErr] = useState("");
  const [canCancelLoad, setCanCancelLoad] = useState(false);
  const [showTel, setShowTel] = useState(!embed); const [mobTab, setMobTab] = useState("3d");
  const [showPresets, setShowPresets] = useState(false); const [showStats, setShowStats] = useState(false); const [showLaps, setShowLaps] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const [showMobMenu, setShowMobMenu] = useState(false);
  const selectorsRef = useRef(null);
  const yearSelectRef = useRef(null);
  const cRef = useRef(null); const rafRef = useRef(null); const ltRef = useRef(null); const urlLoaded = useRef(false);
  const autoLoadRef = useRef(false); const presetActiveRef = useRef(false);
  const loadAbortRef = useRef(null);

  // ─── Derived ───
  const di1 = drvs.find((x) => x.driver_number === d1), di2 = drvs.find((x) => x.driver_number === d2);
  const di3 = drvs.find((x) => x.driver_number === d3), di4 = drvs.find((x) => x.driver_number === d4);
  const co1 = di1 ? getTeamColor(di1.team_name) : "#4488ff", co2 = di2 ? getTeamColor(di2.team_name) : "#ff4488";
  const co3 = di3 ? getTeamColor(di3.team_name) : "#44cc44", co4 = di4 ? getTeamColor(di4.team_name) : "#ffaa00";
  const li1 = laps1.find((l) => l.lap_number === sl1), li2 = laps2.find((l) => l.lap_number === sl2);
  const delta = li1?.lap_duration && li2?.lap_duration ? li1.lap_duration - li2.lap_duration : null;
  const tire1 = st1.find((s) => sl1 >= s.lap_start && sl1 <= s.lap_end)?.compound?.toUpperCase();
  const tire2 = st2.find((s) => sl2 >= s.lap_start && sl2 <= s.lap_end)?.compound?.toUpperCase();
  const tire3 = st3.find((s) => sl3 >= s.lap_start && sl3 <= s.lap_end)?.compound?.toUpperCase();
  const tire4 = st4.find((s) => sl4 >= s.lap_start && sl4 <= s.lap_end)?.compound?.toUpperCase();
  const ms = mob ? 200 : 400;
  const s1 = useMemo(() => ds(tel1?.map((t) => t.speed || 0), ms), [tel1, ms]); const s2 = useMemo(() => ds(tel2?.map((t) => t.speed || 0), ms), [tel2, ms]);
  const s3 = useMemo(() => ds(tel3?.map((t) => t.speed || 0), ms), [tel3, ms]); const s4 = useMemo(() => ds(tel4?.map((t) => t.speed || 0), ms), [tel4, ms]);
  const t1 = useMemo(() => ds(tel1?.map((t) => t.throttle || 0), ms), [tel1, ms]); const t2 = useMemo(() => ds(tel2?.map((t) => t.throttle || 0), ms), [tel2, ms]);
  const t3 = useMemo(() => ds(tel3?.map((t) => t.throttle || 0), ms), [tel3, ms]); const t4 = useMemo(() => ds(tel4?.map((t) => t.throttle || 0), ms), [tel4, ms]);
  const b1 = useMemo(() => ds(tel1?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel1, ms]); const b2 = useMemo(() => ds(tel2?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel2, ms]);
  const b3 = useMemo(() => ds(tel3?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel3, ms]); const b4 = useMemo(() => ds(tel4?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel4, ms]);
  const ct1 = telAt(tel1, prog), ct2 = telAt(tel2, prog), ct3 = telAt(tel3, prog), ct4 = telAt(tel4, prog);
  const alertErr = sceneErr || err;
  const noMeetings = !loading && !alertErr && mts.length === 0;
  const playablePresets = useMemo(() => PRESETS.filter((preset) => !UNAVAILABLE_PRESET_YEARS.includes(preset.year)), []);
  const allDrivers = [
    { di: di1, co: co1, ct: ct1, li: li1, tire: tire1, tel: tel1, s: s1, t: t1, b: b1, st: st1, laps: laps1, sl: sl1 },
    { di: di2, co: co2, ct: ct2, li: li2, tire: tire2, tel: tel2, s: s2, t: t2, b: b2, st: st2, laps: laps2, sl: sl2 },
    ...(numDrivers >= 3 && di3 ? [{ di: di3, co: co3, ct: ct3, li: laps3.find((l) => l.lap_number === sl3), tire: tire3, tel: tel3, s: s3, t: t3, b: b3, st: st3, laps: laps3, sl: sl3 }] : []),
    ...(numDrivers >= 4 && di4 ? [{ di: di4, co: co4, ct: ct4, li: laps4.find((l) => l.lap_number === sl4), tire: tire4, tel: tel4, s: s4, t: t4, b: b4, st: st4, laps: laps4, sl: sl4 }] : []),
  ].filter((d) => d.di);

  const driverFullName = useCallback((driver) => {
    if (!driver) return "";
    const byApi = driver.full_name || driver.broadcast_name || [driver.first_name, driver.last_name].filter(Boolean).join(" ").trim();
    return byApi || DRIVER_NAME_BY_NUMBER[driver.driver_number] || "";
  }, []);

  const formatDriverOption = useCallback((driver) => {
    const shortName = driver?.name_acronym || `#${driver?.driver_number ?? "?"}`;
    const fullName = driverFullName(driver);
    const teamName = driver?.team_name ? ` • ${driver.team_name}` : "";
    return fullName ? `${shortName} • ${fullName}${teamName}` : shortName;
  }, [driverFullName]);

  const formatLapOption = useCallback((lap, bestLapNumber) => {
    const prefix = lap.lap_number === bestLapNumber ? "FASTEST • " : "";
    return `${prefix}L${lap.lap_number} • ${fmt(lap.lap_duration)}`;
  }, []);

  // ─── Data loading effects ───
  useEffect(() => {
    if (presetActiveRef.current) return;
    setLoading("Loading...");
    setErr("");
    setSceneErr("");
    fetchMeetings(year).then((d) => {
      const meetings = d.filter((m) => m.meeting_name);
      setMts(meetings); setSelMt(null); setSelSe(null); setSess([]); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading("");
    }).catch((e) => { setErr(e.message); setLoading(""); });
  }, [year]);
  useEffect(() => { if (!selMt || presetActiveRef.current) return; setLoading("Loading sessions..."); fetchSessions(selMt.meeting_key).then((d) => { setSess(d.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name))); setSelSe(null); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selMt]);
  useEffect(() => { if (!selSe || presetActiveRef.current) return; setLoading("Loading drivers..."); fetchDrivers(selSe.session_key).then((d) => { const seen = new Set(); setDrvs(d.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; })); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selSe]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d1) { fetchLaps(selSe.session_key, d1).then((l) => { setLaps1(l); setSl1(null); }).catch(() => setLaps1([])); fetchStints(selSe.session_key, d1).then(setSt1).catch(() => setSt1([])); } }, [selSe, d1]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d2) { fetchLaps(selSe.session_key, d2).then((l) => { setLaps2(l); setSl2(null); }).catch(() => setLaps2([])); fetchStints(selSe.session_key, d2).then(setSt2).catch(() => setSt2([])); } }, [selSe, d2]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d3) { fetchLaps(selSe.session_key, d3).then((l) => { setLaps3(l); setSl3(null); }).catch(() => setLaps3([])); fetchStints(selSe.session_key, d3).then(setSt3).catch(() => setSt3([])); } }, [selSe, d3]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d4) { fetchLaps(selSe.session_key, d4).then((l) => { setLaps4(l); setSl4(null); }).catch(() => setLaps4([])); fetchStints(selSe.session_key, d4).then(setSt4).catch(() => setSt4([])); } }, [selSe, d4]);
  useEffect(() => { if (laps1.length && !sl1) { const f = bestLap(laps1); if (f) setSl1(f.lap_number); } }, [laps1]);
  useEffect(() => { if (laps2.length && !sl2) { const f = bestLap(laps2); if (f) setSl2(f.lap_number); } }, [laps2]);
  useEffect(() => { if (laps3.length && !sl3) { const f = bestLap(laps3); if (f) setSl3(f.lap_number); } }, [laps3]);
  useEffect(() => { if (laps4.length && !sl4) { const f = bestLap(laps4); if (f) setSl4(f.lap_number); } }, [laps4]);

  // URL restore
  useEffect(() => { if (urlLoaded.current) return; const u = decodeURL(); if (u.year && u.mk) { urlLoaded.current = true; setYear(Number(u.year)); } }, []);
  useEffect(() => { const u = decodeURL(); if (u.mk && mts.length && !selMt) { const m = mts.find((x) => String(x.meeting_key) === u.mk); if (m) setSelMt(m); } }, [mts]);
  useEffect(() => { const u = decodeURL(); if (u.sk && sess.length && !selSe) { const s = sess.find((x) => String(x.session_key) === u.sk); if (s) setSelSe(s); } }, [sess]);
  useEffect(() => { const u = decodeURL(); if (u.d1 && u.d2 && drvs.length && !d1 && !d2) { setD1(Number(u.d1)); setD2(Number(u.d2)); } }, [drvs]);
  useEffect(() => { const u = decodeURL(); if (u.l1 && laps1.length && !sl1) setSl1(Number(u.l1)); }, [laps1]);
  useEffect(() => { const u = decodeURL(); if (u.l2 && laps2.length && !sl2) setSl2(Number(u.l2)); }, [laps2]);

  // Auto-load when URL params are fully restored (shared links + embed)
  useEffect(() => { if (!urlLoaded.current || autoLoadRef.current) return; if (selSe && d1 && d2 && sl1 && sl2) { autoLoadRef.current = true; setTimeout(() => loadData(), 300); } }, [selSe, d1, d2, sl1, sl2]);

  useEffect(() => () => { loadAbortRef.current?.abort(); }, []);

  const isAbortError = useCallback((error) => error?.name === "AbortError", []);

  const beginCancelableLoad = useCallback(() => {
    loadAbortRef.current?.abort();
    const controller = new AbortController();
    loadAbortRef.current = controller;
    setCanCancelLoad(true);
    return controller;
  }, []);

  const finishCancelableLoad = useCallback((controller) => {
    if (loadAbortRef.current === controller) loadAbortRef.current = null;
    setCanCancelLoad(false);
  }, []);

  const cancelLoading = useCallback(() => {
    if (!loadAbortRef.current) return;
    loadAbortRef.current.abort();
    loadAbortRef.current = null;
    presetActiveRef.current = false;
    setCanCancelLoad(false);
    setLoading("");
    setLdPct(undefined);
    setPlay(false);
  }, []);

  const focusConfiguration = useCallback(() => {
    selectorsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    try { yearSelectRef.current?.focus({ preventScroll: true }); } catch { yearSelectRef.current?.focus?.(); }
  }, []);

  const openAuxView = useCallback((mode) => {
    if (embed || mob) {
      setMobTab(mode);
      return;
    }
    if (mode === "telemetry") setShowTel(true);
    if (mode === "stats") setShowStats(true);
    if (mode === "laps") setShowLaps(true);
  }, [embed, mob]);

  // ─── Actions ───
  const loadData = useCallback(async () => {
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return;
    const controller = beginCancelableLoad();
    setLoading("Fetching telemetry...");
    setErr("");
    setSceneErr("");
    setLdPct(0);
    try {
      const sk = selSe.session_key;
      const la1 = laps1.find((l) => l.lap_number === sl1), la2 = laps2.find((l) => l.lap_number === sl2);
      if (!la1?.date_start || !la2?.date_start) { setErr("Lap timing unavailable."); setLoading(""); setLdPct(undefined); return; }
      const e1 = new Date(new Date(la1.date_start).getTime() + (la1.lap_duration || 120) * 1000).toISOString();
      const e2 = new Date(new Date(la2.date_start).getTime() + (la2.lap_duration || 120) * 1000).toISOString();
      setLdPct(15);
      const reqOptions = { signal: controller.signal };
      const locProms = [fetchLocation(sk, d1, la1.date_start, e1, reqOptions), fetchLocation(sk, d2, la2.date_start, e2, reqOptions)];
      const telProms = [fetchCarData(sk, d1, la1.date_start, e1, reqOptions), fetchCarData(sk, d2, la2.date_start, e2, reqOptions)];
      const la3 = d3 && sl3 ? laps3.find((l) => l.lap_number === sl3) : null;
      if (la3?.date_start) { const e3 = new Date(new Date(la3.date_start).getTime() + (la3.lap_duration || 120) * 1000).toISOString(); locProms.push(fetchLocation(sk, d3, la3.date_start, e3, reqOptions)); telProms.push(fetchCarData(sk, d3, la3.date_start, e3, reqOptions)); }
      const la4 = d4 && sl4 ? laps4.find((l) => l.lap_number === sl4) : null;
      if (la4?.date_start) { const e4 = new Date(new Date(la4.date_start).getTime() + (la4.lap_duration || 120) * 1000).toISOString(); locProms.push(fetchLocation(sk, d4, la4.date_start, e4, reqOptions)); telProms.push(fetchCarData(sk, d4, la4.date_start, e4, reqOptions)); }
      setLdPct(20); const locs = await Promise.all(locProms); setLdPct(55); const tels = await Promise.all(telProms);
      if (locs[0].length < 5 || locs[1].length < 5) { setErr("Insufficient data."); setLoading(""); setLdPct(undefined); return; }
      setLoc1(locs[0]); setLoc2(locs[1]); setTel1(tels[0]); setTel2(tels[1]);
      if (locs[2]) { setLoc3(locs[2]); setTel3(tels[2]); } else { setLoc3(null); setTel3(null); }
      if (locs[3]) { setLoc4(locs[3]); setTel4(tels[3]); } else { setLoc4(null); setTel4(null); }
      setTp(norm(locs[0])); setProg(0); setPlay(false); setLdPct(100); setLoading(""); setLdPct(undefined);
    } catch (e) {
      if (!isAbortError(e)) setErr(e.message);
      setLoading("");
      setLdPct(undefined);
    } finally {
      finishCancelableLoad(controller);
    }
  }, [selSe, d1, d2, d3, d4, sl1, sl2, sl3, sl4, laps1, laps2, laps3, laps4, beginCancelableLoad, finishCancelableLoad, isAbortError]);

  const loadPreset = useCallback(async (pr) => {
    const controller = beginCancelableLoad();
    setShowPresets(false); setShowMobMenu(false); setLoading("Loading preset..."); setErr(""); setSceneErr(""); setLdPct(0); presetActiveRef.current = true;
    try {
      if (UNAVAILABLE_PRESET_YEARS.includes(pr.year)) throw new Error(`Preset data for ${pr.year} is not available yet.`);
      const reqOptions = { signal: controller.signal };
      const allMts = await fetchMeetings(pr.year, reqOptions); const filteredMts = allMts.filter((x) => x.meeting_name);
      const presetMeeting = normalizeText(pr.meeting).replace(" grand prix", "");
      const mt = filteredMts.find((x) => {
        const meetingName = normalizeText(x.meeting_name).replace(" grand prix", "");
        return meetingName.includes(presetMeeting) || presetMeeting.includes(meetingName);
      });
      if (!mt) throw new Error(`Meeting "${pr.meeting}" not found`); setLdPct(10);
      const allSess = await fetchSessions(mt.meeting_key, reqOptions); const filteredSess = allSess.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name));
      const se = filteredSess.find((s) => s.session_name === pr.session); if (!se) throw new Error(`Session not found`); setLdPct(20);
      const allDrvs = await fetchDrivers(se.session_key, reqOptions); const seen = new Set(); const uniqueDrvs = allDrvs.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; }); setLdPct(30);
      const [l1Data, l2Data] = await Promise.all([fetchLaps(se.session_key, pr.d1, reqOptions), fetchLaps(se.session_key, pr.d2, reqOptions)]);
      const fast1 = bestLap(l1Data), fast2 = bestLap(l2Data); if (!fast1 || !fast2) throw new Error("No valid laps"); setLdPct(45);
      const [st1Data, st2Data] = await Promise.all([fetchStints(se.session_key, pr.d1, reqOptions).catch(() => []), fetchStints(se.session_key, pr.d2, reqOptions).catch(() => [])]);
      setYear(pr.year); setMts(filteredMts); setSelMt(mt); setSess(filteredSess); setSelSe(se); setDrvs(uniqueDrvs); setD1(pr.d1); setD2(pr.d2);
      setLaps1(l1Data); setLaps2(l2Data); setSl1(fast1.lap_number); setSl2(fast2.lap_number); setSt1(st1Data); setSt2(st2Data); setLdPct(50);
      setLoading("Fetching telemetry..."); const sk = se.session_key;
      const end1 = new Date(new Date(fast1.date_start).getTime() + (fast1.lap_duration || 120) * 1000).toISOString();
      const end2 = new Date(new Date(fast2.date_start).getTime() + (fast2.lap_duration || 120) * 1000).toISOString(); setLdPct(60);
      const [lo1, lo2] = await Promise.all([fetchLocation(sk, pr.d1, fast1.date_start, end1, reqOptions), fetchLocation(sk, pr.d2, fast2.date_start, end2, reqOptions)]); setLdPct(80);
      const [ca1, ca2] = await Promise.all([fetchCarData(sk, pr.d1, fast1.date_start, end1, reqOptions), fetchCarData(sk, pr.d2, fast2.date_start, end2, reqOptions)]);
      if (lo1.length < 5 || lo2.length < 5) throw new Error("Insufficient location data");
      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2); setTp(norm(lo1)); setProg(0); setPlay(false); setLdPct(100);
      setLoading(""); setLdPct(undefined);
    } catch (e) {
      if (!isAbortError(e)) setErr(e.message);
      setLoading(""); setLdPct(undefined);
    } finally {
      presetActiveRef.current = false;
      finishCancelableLoad(controller);
    }
  }, [UNAVAILABLE_PRESET_YEARS, beginCancelableLoad, finishCancelableLoad, isAbortError]);

  const share = useCallback(() => { if (!selMt || !selSe) return; const url = encodeURL({ year, mk: selMt.meeting_key, sk: selSe.session_key, d1, d2, l1: sl1, l2: sl2 }); navigator.clipboard?.writeText(url).then(() => { setShareMsg("Copied!"); setTimeout(() => setShareMsg(""), 2000); }); window.history.replaceState(null, "", url.split(window.location.origin)[1]); }, [year, selMt, selSe, d1, d2, sl1, sl2]);

  const saveToGallery = useCallback(() => {
    if (!di1 || !di2 || !selMt || !li1 || !li2) return;
    const entry = { id: Date.now(), d1n: di1.name_acronym, d2n: di2.name_acronym, gp: selMt.meeting_name, year, delta: delta?.toFixed(3), t1: fmt(li1.lap_duration), t2: fmt(li2.lap_duration), c1: co1, c2: co2, url: encodeURL({ year, mk: selMt.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 }) };
    const newG = [entry, ...gallery].slice(0, 20); setGallery(newG); try { localStorage.setItem("f1s-gallery", JSON.stringify(newG)); } catch {}
  }, [di1, di2, selMt, selSe, li1, li2, delta, co1, co2, year, d1, d2, sl1, sl2, gallery]);

  const generateSocialCard = useCallback(() => {
    const cv = document.createElement("canvas"); cv.width = 1200; cv.height = 630; const ctx = cv.getContext("2d");
    ctx.fillStyle = "#15151e"; ctx.fillRect(0, 0, 1200, 630); ctx.fillStyle = "#E10600"; ctx.fillRect(0, 0, 1200, 6);
    ctx.fillStyle = "#fff"; ctx.font = "bold 42px sans-serif"; ctx.textAlign = "center"; ctx.fillText("GHOST CAR LAB", 600, 80);
    ctx.fillStyle = "#E10600"; ctx.font = "bold 20px sans-serif"; ctx.fillText("f1stories.gr", 600, 115);
    ctx.fillStyle = "#888"; ctx.font = "24px sans-serif"; ctx.fillText(selMt?.meeting_name || "", 600, 160);
    ctx.fillStyle = co1; ctx.font = "bold 72px sans-serif"; ctx.textAlign = "right"; ctx.fillText(di1?.name_acronym || "D1", 530, 310);
    ctx.fillStyle = "#E10600"; ctx.font = "bold 36px sans-serif"; ctx.textAlign = "center"; ctx.fillText("VS", 600, 310);
    ctx.fillStyle = co2; ctx.font = "bold 72px sans-serif"; ctx.textAlign = "left"; ctx.fillText(di2?.name_acronym || "D2", 670, 310);
    ctx.fillStyle = co1; ctx.font = "bold 32px sans-serif"; ctx.textAlign = "right"; ctx.fillText(fmt(li1?.lap_duration), 530, 380);
    ctx.fillStyle = co2; ctx.font = "bold 32px sans-serif"; ctx.textAlign = "left"; ctx.fillText(fmt(li2?.lap_duration), 670, 380);
    if (delta !== null) { ctx.fillStyle = delta > 0 ? "#E10600" : "#00d26a"; ctx.font = "bold 48px sans-serif"; ctx.textAlign = "center"; ctx.fillText((delta > 0 ? "+" : "") + delta.toFixed(3) + "s", 600, 470); }
    ctx.fillStyle = "#333"; ctx.fillRect(0, 570, 1200, 60); ctx.fillStyle = "#888"; ctx.font = "16px sans-serif"; ctx.textAlign = "center"; ctx.fillText("Powered by F1 Stories • f1stories.gr/ghostcar", 600, 600);
    const a = document.createElement("a"); a.href = cv.toDataURL("image/png"); a.download = `f1stories-${di1?.name_acronym}-vs-${di2?.name_acronym}.png`; a.click();
  }, [di1, di2, selMt, li1, li2, delta, co1, co2]);

  const takeScreenshot = useCallback(() => { const el = cRef.current; if (!el) return; const canvas = el.querySelector("canvas"); if (!canvas) return; const a = document.createElement("a"); a.href = canvas.toDataURL("image/png"); a.download = `f1stories-ghost-${Date.now()}.png`; a.click(); }, []);

  const loadH2H = useCallback(async () => {
    if (!d1 || !d2) return; setShowH2H(true); setH2hData(null);
    try { const allMts = await fetchMeetings(year); const validMts = allMts.filter((m) => m.meeting_name); const results = [];
      for (let i = 0; i < validMts.length && results.length < 12; i++) { const mt = validMts[i]; try { if (i > 0 && i % 3 === 0) await new Promise((r) => setTimeout(r, 1200)); const ss = await fetchSessions(mt.meeting_key); const q = ss.find((s) => s.session_name === "Qualifying"); if (!q) continue; await new Promise((r) => setTimeout(r, 400)); const [l1d, l2d] = await Promise.all([fetchLaps(q.session_key, d1), fetchLaps(q.session_key, d2)]); const b1 = bestLap(l1d), b2 = bestLap(l2d); if (b1 && b2) { results.push({ gp: mt.meeting_name?.replace("Grand Prix", "GP"), t1: b1.lap_duration, t2: b2.lap_duration }); setH2hData([...results]); } } catch (e) { if (String(e).includes("429")) await new Promise((r) => setTimeout(r, 3000)); } }
      if (results.length === 0) setH2hData([]);
    } catch { setH2hData([]); }
  }, [year, d1, d2]);

  const loadSeasonDash = useCallback(async () => {
    if (!d1 || !d2) return; setShowDash(true); setDashData(null);
    try { const allMts = await fetchMeetings(year); const results = [];
      for (let i = 0; i < allMts.length && results.length < 15; i++) { const mt = allMts[i]; if (!mt.meeting_name) continue; try { if (i > 0 && i % 3 === 0) await new Promise((r) => setTimeout(r, 1200)); const ss = await fetchSessions(mt.meeting_key); const q = ss.find((s) => s.session_name === "Qualifying"); if (!q) continue; await new Promise((r) => setTimeout(r, 400)); const [l1d, l2d] = await Promise.all([fetchLaps(q.session_key, d1), fetchLaps(q.session_key, d2)]); const b1 = bestLap(l1d), b2 = bestLap(l2d); if (b1 && b2) { results.push({ gp: mt.meeting_name?.replace("Grand Prix", "GP"), t1: b1.lap_duration, t2: b2.lap_duration, d: b1.lap_duration - b2.lap_duration }); setDashData([...results]); } } catch (e) { if (String(e).includes("429")) await new Promise((r) => setTimeout(r, 3000)); } }
      if (results.length === 0) setDashData([]);
    } catch { setDashData([]); }
  }, [year, d1, d2]);

  // ─── Scene — pass progRef for direct 60fps reads ───
  const progRef = useRef(0);
  progRef.current = prog;
  useScene(cRef, tp, loc1, loc2, progRef, co1, co2, cam, di1?.name_acronym || "", di2?.name_acronym || "", tel1, vizMode, isDark, loc3, loc4, co3, co4, di3?.name_acronym || "", di4?.name_acronym || "", setSceneErr);

  // ─── Playback — write to ref at 60fps, sync React state at ~12fps for UI ───
  const spdRef = useRef(spd); spdRef.current = spd;
  const loopRef = useRef(loop); loopRef.current = loop;
  const uiSyncRef = useRef(0);
  const startWithCountdown = useCallback(() => {
    if (prog < 0.01 && tp && !play) { if (embed) { setPlay(true); return; } setCountdown(5); let c = 5; const iv = setInterval(() => { c--; setCountdown(c); if (c <= 0) { clearInterval(iv); setCountdown(null); setPlay(true); } }, 600); } else { setPlay(!play); }
  }, [prog, tp, play, embed]);
  useEffect(() => {
    if (!play) { ltRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    function tick(ts) {
      if (!ltRef.current) ltRef.current = ts;
      const dt = (ts - ltRef.current) / 1000; ltRef.current = ts;
      let n = progRef.current + dt * 0.015 * spdRef.current;
      if (n >= 1) { if (loopRef.current) { n = 0; } else { n = 1; setPlay(false); } }
      progRef.current = n;
      // Sync to React state at ~12fps for slider/time display
      if (ts - uiSyncRef.current > 80) { uiSyncRef.current = ts; setProg(n); }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [play]);

  // ─── Keyboard ───
  const lastLeftRef = useRef(0);
  useEffect(() => { const h = (e) => { if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return; if (e.key === "?" || (e.shiftKey && e.code === "Slash")) { setShowKeys((k) => !k); return; } if (e.code === "Escape") { setShowKeys(false); setShowTour(false); return; } if (e.code === "Space") { e.preventDefault(); if (tp) startWithCountdown(); } if (e.code === "KeyR") { setProg(0); setPlay(false); } if (e.code === "KeyT") setShowTel((s) => !s); if (e.code === "KeyC") setCam((m) => CAM_MODES[(CAM_MODES.indexOf(m) + 1) % CAM_MODES.length]); if (e.code === "KeyL") setLoop((l) => !l); if (e.code === "ArrowRight") setProg((p) => Math.min(1, p + 0.01)); if (e.code === "ArrowLeft") { const now = Date.now(); if (now - lastLeftRef.current < 300) setProg((p) => Math.max(0, p - 0.05)); else setProg((p) => Math.max(0, p - 0.01)); lastLeftRef.current = now; } }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [tp, startWithCountdown]);

  // Mobile swipe
  useEffect(() => { if (!mob || !tp) return; let sx = 0; const onTS = (e) => { sx = e.touches[0].clientX; }; const onTE = (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) setProg((p) => Math.max(0, Math.min(1, p + (dx > 0 ? 0.03 : -0.03)))); }; document.addEventListener("touchstart", onTS, { passive: true }); document.addEventListener("touchend", onTE, { passive: true }); return () => { document.removeEventListener("touchstart", onTS); document.removeEventListener("touchend", onTE); }; }, [mob, tp]);

  // Showreel
  useEffect(() => { if (!showreel) { showreelRef.current = false; return; } showreelRef.current = true; let idx = 0; async function next() { if (!showreelRef.current || idx >= playablePresets.length) { setShowreel(false); return; } await loadPreset(playablePresets[idx]); setPlay(true); idx++; setTimeout(() => { setPlay(false); if (showreelRef.current) next(); }, 12000); } next(); return () => { showreelRef.current = false; }; }, [showreel, loadPreset, playablePresets]);

  // ─── Modal backdrop ───
  const anyModal = showPresets || showStats || showLaps || showKeys || showH2H || showGallery || showEmbed || showDash;
  const closeAll = () => { setShowPresets(false); setShowStats(false); setShowLaps(false); setShowKeys(false); setShowH2H(false); setShowGallery(false); setShowEmbed(false); setShowDash(false); };

  // ─── RENDER ───
  return (
    <div style={{ width: "100%", minHeight: (embed || mob) ? "auto" : "100vh", height: (embed || mob) ? "100vh" : "auto", background: F1.carbon, color: F1.text, fontFamily: F1.sans, overflow: "hidden", display: (embed || mob) ? "flex" : "block", flexDirection: (embed || mob) ? "column" : undefined }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${F1.blue}44;border-radius:2px}
        select,button{font-family:${F1.sans}}
        select{background:${F1.inputBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${F1.blue}88}
        button{background:${F1.cardBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${F1.blue}88;background:${F1.carbonMid}}
        .f1-btn{background:linear-gradient(135deg,${F1.blue},${F1.blueDark});border-color:${F1.blue};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:linear-gradient(135deg,${F1.blueDark},#1e40af);box-shadow:0 4px 14px ${F1.blueGlow}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${F1.blue};border-radius:50%;cursor:pointer;border:2px solid #fff}
        .hdr-nav-link{position:relative;font-size:11px;color:${F1.textDim};text-decoration:none;padding:4px 2px;font-weight:600;letter-spacing:0.06em;transition:color .2s ease}
        .hdr-nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,#3b82f6,#2563eb);border-radius:2px;transition:width .25s ease}
        .hdr-nav-link:hover{color:#e4e4ec}.hdr-nav-link:hover::after{width:80%}
        .hdr-logo-link{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;transition:filter .2s ease}
        .hdr-logo-link:hover{filter:drop-shadow(0 0 6px rgba(59,130,246,0.45))}
        .hdr-action-btn{background:rgba(255,255,255,0.05)!important;border:1px solid rgba(255,255,255,0.08)!important;color:${F1.textDim}!important;border-radius:8px!important;font-size:10px!important;padding:6px 10px!important;min-height:34px!important;font-weight:600!important;letter-spacing:0.04em!important;transition:all .18s ease!important}
        .hdr-action-btn:hover{background:rgba(59,130,246,0.12)!important;border-color:rgba(59,130,246,0.3)!important;color:#e4e4ec!important}
        .hdr-action-btn-active{background:rgba(59,130,246,0.15)!important;border-color:rgba(59,130,246,0.4)!important;color:#93c5fd!important}
        .hdr-action-btn-icon{min-width:38px!important;padding:0 10px!important;font-size:14px!important}
      `}</style>

      {/* Modals */}
      {anyModal && <div onClick={closeAll} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99, backdropFilter: "blur(4px)" }} />}
      {showPresets && <PresetsModal mob={mob} onClose={() => setShowPresets(false)} onLoadPreset={loadPreset} unavailableYears={UNAVAILABLE_PRESET_YEARS} />}
      {showStats && tp && <StatsModal mob={mob} allDrivers={allDrivers} onClose={() => setShowStats(false)} />}
      {showLaps && <LapsModal mob={mob} onClose={() => setShowLaps(false)} drivers={[
        { lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: setSl1 },
        { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: setSl2 },
      ]} />}
      {showKeys && <KeysModal mob={mob} onClose={() => setShowKeys(false)} />}
      {showH2H && <H2HModal mob={mob} year={year} di1={di1} di2={di2} co1={co1} co2={co2} h2hData={h2hData} onClose={() => setShowH2H(false)} />}
      {showDash && <DashModal mob={mob} year={year} di1={di1} di2={di2} co1={co1} co2={co2} dashData={dashData} onClose={() => setShowDash(false)} />}
      {showGallery && <GalleryModal mob={mob} gallery={gallery} onClose={() => setShowGallery(false)} onClear={() => { setGallery([]); try { localStorage.removeItem("f1s-gallery"); } catch {} }} />}
      {showEmbed && <EmbedModal mob={mob} year={year} selMt={selMt} selSe={selSe} d1={d1} d2={d2} sl1={sl1} sl2={sl2} onClose={() => setShowEmbed(false)} />}
      {showTour && !embed && <TourOverlay onClose={() => setShowTour(false)} />}

      {/* Countdown */}
      {countdown !== null && (<div style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {[1, 2, 3, 4, 5].map((n) => <div key={n} style={{ width: 40, height: 40, borderRadius: "50%", background: countdown <= (6 - n) ? "#E10600" : F1.cardBg, boxShadow: countdown <= (6 - n) ? "0 0 20px #E10600, 0 0 40px #E1060066" : "none", transition: "all 0.3s", border: `2px solid ${F1.border}` }} />)}
        </div>
        <div style={{ fontSize: countdown === 0 ? 72 : 96, fontWeight: 900, color: countdown === 0 ? "#00d26a" : "#fff", fontFamily: F1.mono, textShadow: countdown === 0 ? "0 0 30px #00d26a" : "none" }}>{countdown === 0 ? "GO!" : countdown}</div>
      </div>)}

      {/* Header */}
      {!embed && <div style={{ display: "flex", alignItems: "center", background: isDark ? "rgba(17,17,24,0.92)" : "rgba(245,245,247,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.08)", boxShadow: "0 2px 12px rgba(0,0,0,0.45)", zIndex: 10, position: "relative", padding: mob ? "0 10px" : "0 20px", minHeight: mob ? 44 : 52, gap: mob ? 8 : 18 }}>
          <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" className="hdr-logo-link">
            <img src="https://f1stories.gr/images/logo.png" alt="F1 Stories" style={{ height: mob ? 26 : 32, width: "auto" }} onError={(e) => { e.target.style.display = "none"; }} />
            {!mob && <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
              <span style={{ fontSize: 15, fontWeight: 900, color: F1.text, letterSpacing: "0.04em" }}>F1 STORIES</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: "#3b82f6", letterSpacing: "0.14em", textTransform: "uppercase" }}>Ghost Car Lab</span>
            </div>}
          </a>
          {mob && <span style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>Ghost Car Lab</span>}
          {mob && selMt && <span style={{ fontSize: 9, color: F1.textDim, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 90 }}>{selMt.meeting_name?.replace("Grand Prix", "GP")}</span>}
          {!mob && <div style={{ display: "flex", gap: 20, marginLeft: 4, paddingTop: 2 }}>
            {[{ label: "Blog", href: "https://f1stories.gr/blog-module/blog/index.html" }, { label: "YouTube", href: "https://www.youtube.com/@F1_Stories_Original" }, { label: "Standings", href: "https://f1stories.gr/standings/" }].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hdr-nav-link">{l.label.toUpperCase()}</a>
            ))}
          </div>}
          {!mob && selMt && <span style={{ fontSize: 10, color: F1.textMuted, fontWeight: 600, letterSpacing: "0.05em", marginLeft: 4, borderLeft: `1px solid ${F1.borderLight}`, paddingLeft: 12 }}>{selMt.meeting_name?.replace("Grand Prix", "GP")} {year}</span>}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: mob ? 4 : 5, flexShrink: 0 }}>
            {mob ? (<>
              <button className="hdr-action-btn hdr-action-btn-icon" title="Open preset battles" aria-label="Open preset battles" onClick={() => setShowPresets(true)}>⚡</button>
              {selSe && <button className="hdr-action-btn hdr-action-btn-icon" title="Share this comparison" aria-label="Share this comparison" onClick={share}>{shareMsg ? "✓" : "↗"}</button>}
              {tp && <button className="hdr-action-btn hdr-action-btn-icon" title="Save to gallery" aria-label="Save to gallery" onClick={saveToGallery}>💾</button>}
              <button className="hdr-action-btn hdr-action-btn-icon" title={isDark ? "Switch to light theme" : "Switch to dark theme"} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleTheme}>{isDark ? "☀️" : "🌙"}</button>
              <button className={`hdr-action-btn hdr-action-btn-icon${showMobMenu ? " hdr-action-btn-active" : ""}`} title="Open tools menu" aria-label="Open tools menu" onClick={() => setShowMobMenu((v) => !v)}>☰</button>
            </>) : (<>
              <button className="hdr-action-btn" title="Open preset battles" onClick={() => setShowPresets(true)}>⚡ PRESETS</button>
              {selSe && <button className="hdr-action-btn" title="Share this comparison" onClick={share}>{shareMsg || "SHARE"}</button>}
              {tp && <button className="hdr-action-btn" title="Open lap stats" onClick={() => setShowStats(true)}>STATS</button>}
              {tp && <button className="hdr-action-btn" title="Browse lap choices" onClick={() => setShowLaps(true)}>LAPS</button>}
              {tp && d1 && d2 && <button className="hdr-action-btn" title="Head to head history" onClick={loadH2H}>H2H</button>}
              {d1 && d2 && selSe && <button className="hdr-action-btn" title="Season dashboard" onClick={loadSeasonDash}>SEASON</button>}
              {tp && <button className="hdr-action-btn hdr-action-btn-icon" title="Save to gallery" aria-label="Save to gallery" onClick={saveToGallery}>💾</button>}
              <button className="hdr-action-btn hdr-action-btn-icon" title="Open saved gallery" aria-label="Open saved gallery" onClick={() => setShowGallery(true)}>📂</button>
              {tp && <button className="hdr-action-btn hdr-action-btn-icon" title="Create social card" aria-label="Create social card" onClick={generateSocialCard}>🖼️</button>}
              {tp && selSe && <button className="hdr-action-btn hdr-action-btn-icon" title="Embed this comparison" aria-label="Embed this comparison" onClick={() => setShowEmbed(true)}>{"</>"}</button>}
              {tp && <button className="hdr-action-btn hdr-action-btn-icon" title="Download screenshot" aria-label="Download screenshot" onClick={takeScreenshot}>📸</button>}
              <button className={`hdr-action-btn hdr-action-btn-icon${showreel ? " hdr-action-btn-active" : ""}`} title={showreel ? "Stop showreel" : "Start showreel"} aria-label={showreel ? "Stop showreel" : "Start showreel"} onClick={() => setShowreel((s) => !s)}>{showreel ? "⏹" : "🎬"}</button>
              <button className="hdr-action-btn hdr-action-btn-icon" title={isDark ? "Switch to light theme" : "Switch to dark theme"} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleTheme}>{isDark ? "☀️" : "🌙"}</button>
              <button className="hdr-action-btn hdr-action-btn-icon" title="Show keyboard shortcuts" aria-label="Show keyboard shortcuts" onClick={() => setShowKeys(true)} style={{ fontWeight: 900 }}>?</button>
            </>)}
          </div>
      </div>}

      {/* Mobile menu panel */}
      {mob && showMobMenu && !embed && (<>
        <div onClick={() => setShowMobMenu(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 49, backdropFilter: "blur(4px)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, background: isDark ? "rgba(17,17,24,0.97)" : "rgba(245,245,247,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(59,130,246,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.6)", animation: "fadeIn .15s", padding: "12px 14px 14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.10em" }}>TOOLS</span>
            <button onClick={() => setShowMobMenu(false)} style={{ fontSize: 14, padding: "2px 8px", background: "transparent", border: "none", color: F1.textMuted }}>✕</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {[
              { icon: "📈", label: "Stats", action: () => { setShowStats(true); setShowMobMenu(false); }, show: !!tp },
              { icon: "⏱", label: "Laps", action: () => { setShowLaps(true); setShowMobMenu(false); }, show: !!tp },
              { icon: "⚔️", label: "H2H", action: () => { loadH2H(); setShowMobMenu(false); }, show: !!(tp && d1 && d2) },
              { icon: "🏆", label: "Season", action: () => { loadSeasonDash(); setShowMobMenu(false); }, show: !!(d1 && d2 && selSe) },
              { icon: "📂", label: "Gallery", action: () => { setShowGallery(true); setShowMobMenu(false); }, show: true },
              { icon: "🖼️", label: "Social", action: () => { generateSocialCard(); setShowMobMenu(false); }, show: !!tp },
              { icon: "</>", label: "Embed", action: () => { setShowEmbed(true); setShowMobMenu(false); }, show: !!(tp && selSe) },
              { icon: "📸", label: "Screenshot", action: () => { takeScreenshot(); setShowMobMenu(false); }, show: !!tp },
            ].filter((a) => a.show).map((a) => (
              <button key={a.label} onClick={a.action} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "10px 4px", borderRadius: 8, background: F1.cardBg, border: `1px solid ${F1.borderLight}`, fontSize: 9, color: F1.textDim, fontWeight: 600, letterSpacing: "0.02em" }}>
                <span style={{ fontSize: 18 }}>{a.icon}</span>
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </>)}

      {/* Selectors */}
      {!embed && <div ref={selectorsRef} style={{ padding: mob ? "6px 8px" : "8px 18px", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight }}>
        {/* Row 1: Event selectors */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: mob ? 4 : 6, alignItems: "center", marginBottom: mob ? 4 : 0 }}>
          <select ref={yearSelectRef} value={year} onChange={(e) => setYear(Number(e.target.value))} style={{ width: mob ? 124 : "auto", fontSize: mob ? 11 : 12 }}>
            {AVAILABLE_YEARS.map((y) => <option key={y} value={y}>{y === 2026 ? "2026 (Early / partial)" : y}</option>)}
          </select>
          <select value={selMt?.meeting_key || ""} onChange={(e) => setSelMt(mts.find((m) => m.meeting_key === Number(e.target.value)) || null)} style={{ minWidth: mob ? 100 : 155, flex: mob ? 1 : undefined, fontSize: mob ? 11 : 12 }}><option value="">Grand Prix</option>{mts.map((m) => <option key={m.meeting_key} value={m.meeting_key}>{m.meeting_name}</option>)}</select>
          <select value={selSe?.session_key || ""} onChange={(e) => setSelSe(sess.find((s) => s.session_key === Number(e.target.value)) || null)} disabled={!sess.length} style={{ minWidth: mob ? 75 : 115, fontSize: mob ? 11 : 12 }}><option value="">Session</option>{sess.map((s) => <option key={s.session_key} value={s.session_key}>{s.session_name}</option>)}</select>
        </div>
        {/* Row 2: Driver selectors */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: mob ? 4 : 6, alignItems: "center" }}>
          {!mob && <div style={{ width: 1, height: 20, background: `${F1.blue}33` }} />}
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 3, height: 16, background: co1, borderRadius: 1 }} />
            <select title={driverFullName(di1) || "Select driver 1"} value={d1 || ""} onChange={(e) => { setD1(Number(e.target.value)); setSl1(null); setLaps1([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 1</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>
            {laps1.length > 0 && <select title={li1 ? fmt(li1.lap_duration) : "Select lap"} value={sl1 || ""} onChange={(e) => setSl1(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{laps1.filter((l) => l.lap_duration > 10).sort((a, b) => a.lap_duration - b.lap_duration).map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, bestLap(laps1)?.lap_number)}</option>)}</select>}
          </div>
          <span style={{ color: F1.blue, fontSize: mob ? 9 : 11, fontWeight: 900, letterSpacing: "0.1em" }}>VS</span>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 3, height: 16, background: co2, borderRadius: 1 }} />
            <select title={driverFullName(di2) || "Select driver 2"} value={d2 || ""} onChange={(e) => { setD2(Number(e.target.value)); setSl2(null); setLaps2([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 2</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>
            {laps2.length > 0 && <select title={li2 ? fmt(li2.lap_duration) : "Select lap"} value={sl2 || ""} onChange={(e) => setSl2(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{laps2.filter((l) => l.lap_duration > 10).sort((a, b) => a.lap_duration - b.lap_duration).map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, bestLap(laps2)?.lap_number)}</option>)}</select>}
          </div>
          {numDrivers >= 3 && <><span style={{ color: F1.textMuted, fontSize: 9, fontWeight: 700 }}>+</span><div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 3, height: 16, background: co3, borderRadius: 1 }} /><select title={driverFullName(di3) || "Select driver 3"} value={d3 || ""} onChange={(e) => { setD3(Number(e.target.value)); setSl3(null); setLaps3([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 3</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>{laps3.length > 0 && <select value={sl3 || ""} onChange={(e) => setSl3(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{laps3.filter((l) => l.lap_duration > 10).sort((a, b) => a.lap_duration - b.lap_duration).map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, bestLap(laps3)?.lap_number)}</option>)}</select>}</div></>}
          {numDrivers >= 4 && <><span style={{ color: F1.textMuted, fontSize: 9, fontWeight: 700 }}>+</span><div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 3, height: 16, background: co4, borderRadius: 1 }} /><select title={driverFullName(di4) || "Select driver 4"} value={d4 || ""} onChange={(e) => { setD4(Number(e.target.value)); setSl4(null); setLaps4([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 4</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>{laps4.length > 0 && <select value={sl4 || ""} onChange={(e) => setSl4(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{laps4.filter((l) => l.lap_duration > 10).sort((a, b) => a.lap_duration - b.lap_duration).map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, bestLap(laps4)?.lap_number)}</option>)}</select>}</div></>}
          {numDrivers < 4 && drvs.length > 0 && <button onClick={() => setNumDrivers((n) => Math.min(4, n + 1))} style={{ padding: "2px 6px", fontSize: 9, color: F1.green }}>+D{numDrivers + 1}</button>}
          {numDrivers > 2 && <button onClick={() => { setNumDrivers((n) => { if (n === 4) { setD4(null); setLoc4(null); setTel4(null); } if (n >= 3) { setD3(null); setLoc3(null); setTel3(null); } return Math.max(2, n - 1); }); }} style={{ padding: "2px 6px", fontSize: 9, color: F1.red }}>−</button>}
          <button className="f1-btn" onClick={loadData} disabled={!d1 || !d2 || !sl1 || !sl2 || !!loading} style={{ padding: mob ? "4px 10px" : "5px 12px", fontSize: mob ? 10 : 11 }}>{loading ? "..." : "COMPARE"}</button>
        </div>
        {noMeetings && <div style={{ marginTop: 6, fontSize: 11, color: F1.textDim, letterSpacing: "0.02em" }}>No meeting data is available for {year} yet. Try 2025 for the latest complete telemetry season.</div>}
      </div>}

      {!embed && alertErr && <div style={{ padding: "8px 18px", background: `${F1.red}11`, borderBottom: `1px solid ${F1.red}22`, fontSize: 12, color: F1.red, display: "flex", alignItems: "center", gap: 8 }}><span style={{ flex: 1 }}>{alertErr}</span><button onClick={() => { setErr(""); setSceneErr(""); }} style={{ padding: "2px 8px", fontSize: 10 }}>✕</button></div>}
      {!embed && loading && <div style={{ padding: "8px 18px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div style={{ flex: 1, fontSize: 11, color: F1.textDim, fontFamily: F1.mono }}>{loading}</div>
          {canCancelLoad && <button onClick={cancelLoading} style={{ padding: "4px 10px", fontSize: 10 }}>CANCEL</button>}
        </div>
        {ldPct !== undefined && <div style={{ height: 2, background: F1.borderLight, borderRadius: 1, overflow: "hidden" }}><div style={{ height: "100%", width: `${ldPct}%`, background: F1.blue, borderRadius: 1, transition: "width .3s" }} /></div>}
      </div>}
      {!embed && mob && tp && <div style={{ display: "flex", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight, overflowX: "auto", flexShrink: 0 }}>
        {[
          { id: "3d", label: "🏎️ Track" },
          { id: "telemetry", label: "📊 Telemetry" },
          { id: "stats", label: "📈 Stats" },
          { id: "laps", label: "⏱ Laps" },
          { id: "h2h", label: "⚔️ H2H" },
          { id: "season", label: "🏆 Season" },
        ].map((tab) => <button key={tab.id} onClick={() => { setMobTab(tab.id); if (tab.id === "h2h" && !h2hData) loadH2H(); if (tab.id === "season" && !dashData) loadSeasonDash(); if (tab.id === "3d") setTimeout(() => window.dispatchEvent(new Event("resize")), 50); }} style={{ flex: "0 0 auto", borderRadius: 0, border: "none", borderBottom: mobTab === tab.id ? `2px solid ${F1.blue}` : "2px solid transparent", background: mobTab === tab.id ? F1.cardBg : "transparent", fontWeight: mobTab === tab.id ? 700 : 400, fontSize: 10, padding: "7px 10px", textTransform: "none", whiteSpace: "nowrap", color: mobTab === tab.id ? F1.text : F1.textDim }}>{tab.label}</button>)}
      </div>}

      {/* Embed tab bar */}
      {embed && tp && <div style={{ display: "flex", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight, flexShrink: 0, overflowX: "auto" }}>
        {[
          { id: "3d", label: "🏎️ Track" },
          { id: "telemetry", label: "📊 Telemetry" },
          { id: "stats", label: "📈 Stats" },
          { id: "laps", label: "⏱ Laps" },
          { id: "h2h", label: "⚔️ H2H" },
          { id: "season", label: "🏆 Season" },
        ].map((tab) => <button key={tab.id} onClick={() => { setMobTab(tab.id); if (tab.id === "h2h" && !h2hData) loadH2H(); if (tab.id === "season" && !dashData) loadSeasonDash(); if (tab.id === "3d") setTimeout(() => window.dispatchEvent(new Event("resize")), 50); }} style={{ flex: 1, borderRadius: 0, border: "none", borderBottom: mobTab === tab.id ? `2px solid ${F1.blue}` : "2px solid transparent", background: mobTab === tab.id ? F1.cardBg : "transparent", fontWeight: mobTab === tab.id ? 700 : 400, fontSize: 10, padding: "7px 4px", textTransform: "none", whiteSpace: "nowrap", letterSpacing: "0.02em", minWidth: 0, color: mobTab === tab.id ? F1.text : F1.textDim }}>{tab.label}</button>)}
      </div>}

      {/* Main area */}
      <div style={{ display: "flex", flexDirection: mob || embed ? "column" : "row", flex: (embed || mob) ? 1 : undefined, height: (embed || mob) ? undefined : `calc(100vh - ${tp ? 175 : 130}px)`, overflow: "hidden" }}>
        {/* 3D Track — always mounted to preserve WebGL context, hidden via display:none */}
        <div style={{ flex: 1, position: "relative", minHeight: (embed || mob) ? 0 : "auto", display: (embed && mobTab !== "3d") ? "none" : (mob && mobTab !== "3d") ? "none" : undefined }}>
            <div ref={cRef} style={{ width: "100%", height: "100%", background: F1.carbon, cursor: "grab", minHeight: (embed || mob) ? 0 : "auto", touchAction: "none" }} />
            {tp && !sceneErr && <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 3 }}>
              {CAM_MODES.map((m) => <button key={m} onClick={() => setCam(m)} style={{ padding: "3px 8px", fontSize: 9, textTransform: "uppercase", background: cam === m ? F1.blue : F1.overlay, color: cam === m ? "#fff" : F1.textDim, borderColor: cam === m ? F1.blue : F1.borderLight, fontWeight: 700 }}>{CAM_LABELS[m]}</button>)}
              <div style={{ width: 1, height: 16, background: F1.borderLight }} />
              <button onClick={() => setVizMode((v) => v === "normal" ? "heatmap" : v === "heatmap" ? "brake" : "normal")} style={{ padding: "3px 8px", fontSize: 9, textTransform: "uppercase", background: vizMode !== "normal" ? "#0088ff" : F1.overlay, color: vizMode !== "normal" ? "#fff" : F1.textDim, borderColor: vizMode !== "normal" ? "#0088ff" : F1.borderLight, fontWeight: 700 }}>{vizMode === "brake" ? "🟥 Brake" : vizMode === "heatmap" ? "🌡 Speed" : "🌡 Heatmap"}</button>
            </div>}
            {tp && !sceneErr && !mob && !embed && <div style={{ position: "absolute", top: 44, left: 10, zIndex: 2 }}><MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} /></div>}
            {delta !== null && tp && <div style={{ position: "absolute", bottom: 8, left: 10, zIndex: 3, animation: "fadeIn .4s" }}>
              <div style={{ background: F1.overlay, backdropFilter: "blur(8px)", borderRadius: 6, padding: mob ? "5px 12px" : "6px 16px", border: `1px solid ${F1.blue}33`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: 7, color: F1.textMuted, letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase" }}>Interval</div>
                <div style={{ fontSize: mob ? 18 : 24, fontWeight: 900, fontFamily: F1.mono, color: delta > 0 ? F1.red : F1.green, lineHeight: 1.1 }}>{delta > 0 ? "+" : ""}{delta.toFixed(3)}<span style={{ fontSize: "0.5em", opacity: 0.7 }}>s</span></div>
                <div style={{ display: "flex", gap: 12, marginTop: 2 }}>
                  <span style={{ fontSize: 9, color: co1, fontFamily: F1.mono, fontWeight: 700 }}>{di1?.name_acronym} {fmt(li1?.lap_duration)}</span>
                  <span style={{ fontSize: 9, color: co2, fontFamily: F1.mono, fontWeight: 700 }}>{di2?.name_acronym} {fmt(li2?.lap_duration)}</span>
                </div>
              </div>
            </div>}
            {tp && li1 && li2 && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 2, maxWidth: "95%" }}>
              <SectorDelta s={1} t1={li1.duration_sector_1} t2={li2.duration_sector_1} c1={co1} c2={co2} />
              <SectorDelta s={2} t1={li1.duration_sector_2} t2={li2.duration_sector_2} c1={co1} c2={co2} />
              <SectorDelta s={3} t1={li1.duration_sector_3} t2={li2.duration_sector_3} c1={co1} c2={co2} />
            </div>}
            {tp && sceneErr && <div style={{ position: "absolute", inset: mob ? 12 : 20, zIndex: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ maxWidth: 520, padding: mob ? "18px 16px" : "22px 24px", borderRadius: 14, border: `1px solid ${F1.red}33`, background: `${F1.overlay}`, backdropFilter: "blur(14px)", textAlign: "center", boxShadow: "0 18px 40px rgba(0,0,0,0.35)" }}>
                <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", color: F1.red, marginBottom: 10 }}>3D VIEW UNAVAILABLE</div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                  <MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} size={mob ? 180 : 220} />
                </div>
                <div style={{ fontSize: mob ? 15 : 16, fontWeight: 700, color: F1.text, lineHeight: 1.5, marginBottom: 10 }}>{sceneErr}</div>
                <div style={{ fontSize: 12, color: F1.textDim, lineHeight: 1.6, marginBottom: 14 }}>Telemetry, lap tables and stats still work. Use the actions below or try a browser with WebGL and hardware acceleration enabled to restore the 3D track.</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  <button onClick={() => openAuxView("telemetry")} style={{ padding: "7px 12px", fontSize: 11 }}>TELEMETRY</button>
                  <button onClick={() => openAuxView("stats")} style={{ padding: "7px 12px", fontSize: 11 }}>STATS</button>
                  <button onClick={() => openAuxView("laps")} style={{ padding: "7px 12px", fontSize: 11 }}>LAPS</button>
                  {!embed && <button onClick={focusConfiguration} className="f1-btn" style={{ padding: "7px 12px", fontSize: 11 }}>CHANGE MATCHUP</button>}
                </div>
              </div>
            </div>}
            {!tp && !loading && !embed && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
              <img src="https://f1stories.gr/images/logo.png" alt="" style={{ height: 60, marginBottom: 16, opacity: 0.6 }} onError={(e) => { e.target.style.display = "none"; }} />
              <div style={{ fontSize: mob ? 14 : 18, fontWeight: 900, color: "#fff", marginBottom: 4 }}>GHOST CAR LAB</div>
              <div style={{ fontSize: 11, color: F1.red, fontWeight: 600, marginBottom: 14, letterSpacing: "0.1em" }}>by F1 STORIES</div>
              <div style={{ fontSize: 12, color: F1.textDim, maxWidth: 360, lineHeight: 1.6 }}>Compare qualifying laps in 3D with real telemetry data.</div>
              <div style={{ marginTop: 18, display: "flex", gap: 8, justifyContent: "center" }}>
                <button onClick={() => setShowPresets(true)} className="f1-btn" style={{ padding: "8px 20px", fontSize: 12 }}>⚡ QUICK START</button>
                <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: F1.textDim, textDecoration: "none", padding: "8px 14px", border: `1px solid ${F1.border}`, borderRadius: 4, fontWeight: 600 }}>f1stories.gr →</a>
              </div>
            </div>}
            {embed && !tp && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .4s" }}>
              {loading ? (<><div style={{ fontSize: 13, fontWeight: 700, color: F1.text, fontFamily: F1.mono, marginBottom: 6 }}>{loading}</div>{ldPct !== undefined && <div style={{ height: 3, width: 220, background: F1.borderLight, borderRadius: 2, overflow: "hidden", margin: "0 auto 10px" }}><div style={{ height: "100%", width: `${ldPct}%`, background: F1.blue, borderRadius: 2, transition: "width .3s" }} /></div>}{canCancelLoad && <button onClick={cancelLoading} style={{ padding: "5px 10px", fontSize: 10 }}>CANCEL</button>}</>) : alertErr ? <div style={{ fontSize: 12, color: F1.red, fontFamily: F1.mono }}>{alertErr}</div> : (<><div style={{ width: 28, height: 28, border: `3px solid ${F1.blue}`, borderTopColor: "transparent", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.8s linear infinite" }} /><div style={{ fontSize: 13, fontWeight: 700, color: F1.textDim, fontFamily: F1.mono }}>LOADING COMPARISON</div><style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></>)}
            </div>}
          </div>

        {/* Telemetry panel — desktop sidebar or mobile/embed tab */}
        {((!mob && !embed && showTel && tp) || ((mob || embed) && mobTab === "telemetry" && tp)) && (
          <div style={{ width: (!mob && !embed) ? 310 : "100%", borderLeft: (!mob && !embed) ? `1px solid ${F1.borderLight}` : "none", background: F1.panelBg, display: "flex", flexDirection: "column", flex: (embed || mob) ? 1 : undefined, maxHeight: (!mob && !embed) ? "auto" : undefined, overflow: "auto", animation: "fadeIn .2s" }}>
            <TelemetryPanel mob={mob || embed} tp={tp} prog={prog} allDrivers={allDrivers} numDrivers={numDrivers} di1={di1} di2={di2} co1={co1} co2={co2} li1={li1} li2={li2} s1={s1} s2={s2} laps1={laps1} st1={st1} sl1={sl1} />
          </div>
        )}

        {/* Inline Stats tab (embed + mobile) */}
        {(embed || mob) && mobTab === "stats" && tp && (
          <div style={{ flex: 1, overflow: "auto", padding: 0, animation: "fadeIn .2s" }}>
            <StatsModal mob={true} allDrivers={allDrivers} onClose={() => setMobTab("3d")} inline />
          </div>
        )}

        {/* Inline Laps tab */}
        {(embed || mob) && mobTab === "laps" && tp && (
          <div style={{ flex: 1, overflow: "auto", animation: "fadeIn .2s" }}>
            <LapsModal mob={true} onClose={() => setMobTab("3d")} inline drivers={[
              { lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: setSl1 },
              { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: setSl2 },
            ]} />
          </div>
        )}

        {/* Inline H2H tab */}
        {(embed || mob) && mobTab === "h2h" && tp && (
          <div style={{ flex: 1, overflow: "auto", animation: "fadeIn .2s" }}>
            <H2HModal mob={true} year={year} di1={di1} di2={di2} co1={co1} co2={co2} h2hData={h2hData} onClose={() => setMobTab("3d")} inline />
          </div>
        )}

        {/* Inline Season tab */}
        {(embed || mob) && mobTab === "season" && tp && (
          <div style={{ flex: 1, overflow: "auto", animation: "fadeIn .2s" }}>
            <DashModal mob={true} year={year} di1={di1} di2={di2} co1={co1} co2={co2} dashData={dashData} onClose={() => setMobTab("3d")} inline />
          </div>
        )}
      </div>

      {/* Playback bar */}
      {tp && <div style={{ display: "flex", alignItems: "center", gap: mob ? 6 : 10, padding: mob ? "6px 10px" : "6px 18px", background: `linear-gradient(180deg, ${F1.carbonLight}, ${F1.carbon})`, borderTop: `1px solid ${F1.blue}22`, flexShrink: 0 }}>
        <button onClick={() => { setProg(0); setPlay(false); }} style={{ padding: "3px 7px", fontSize: 11 }}>⏮</button>
        <button onClick={startWithCountdown} style={{ padding: "3px 9px", fontSize: 13, background: play ? `${F1.blue}33` : F1.cardBg, borderColor: play ? F1.blue : F1.border }}>{play ? "⏸" : "▶"}</button>
        <button onClick={() => setLoop(!loop)} style={{ padding: "3px 7px", opacity: loop ? 1 : 0.35, fontSize: 11 }}>🔁</button>
        <input type="range" min="0" max="1" step="0.001" value={prog} onChange={(e) => { const v = parseFloat(e.target.value); progRef.current = v; setProg(v); }} style={{ flex: 1, height: 4, accentColor: F1.blue }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: mob ? 55 : 70 }}>
          {allDrivers.map((d, i) => <span key={i} style={{ fontSize: 10, color: d.co, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(d.li?.lap_duration ? prog * d.li.lap_duration : 0)}</span>)}
        </div>
        {!embed && <button onClick={focusConfiguration} style={{ padding: "3px 8px", fontSize: 10 }}>SETUP</button>}
        <select value={spd} onChange={(e) => setSpd(parseFloat(e.target.value))} style={{ width: 48, padding: "2px 3px", fontSize: 10 }}>
          <option value={0.25}>.25x</option><option value={0.5}>.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
        </select>
        {!mob && !embed && <button onClick={() => setShowTel(!showTel)} style={{ padding: "3px 7px", fontSize: 10, opacity: showTel ? 1 : 0.35 }}>📊</button>}
        {embed && <button onClick={share} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.04em" }}>{shareMsg || "↗ SHARE"}</button>}
        {embed && <a href={encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 })} target="_blank" rel="noopener noreferrer" style={{ padding: "3px 8px", fontSize: 9, color: F1.blue, textDecoration: "none", fontWeight: 700, border: `1px solid ${F1.blue}44`, borderRadius: 4, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>VIEW IN APP ↗</a>}
        {embed && <span style={{ fontSize: 8, color: F1.textMuted, whiteSpace: "nowrap", marginLeft: "auto" }}>Powered by <a href="https://f1stories.gr/ghostcar/" target="_blank" rel="noopener noreferrer" style={{ color: F1.blue, textDecoration: "none", fontWeight: 700 }}>F1 Stories</a></span>}
      </div>}

      {/* Footer */}
      {!embed && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: mob ? 8 : 16, padding: "8px 18px", background: F1.carbon, borderTop: `1px solid ${F1.borderLight}`, flexWrap: "wrap" }}>
          <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <img src="https://f1stories.gr/images/logo.png" alt="" style={{ height: 18 }} onError={(e) => { e.target.style.display = "none"; }} />
            <span style={{ fontSize: 10, color: F1.textDim, fontWeight: 600 }}>f1stories.gr</span>
          </a>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono }}>Data by OpenF1 API</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>© {new Date().getFullYear()} F1 Stories</span>
        </div>
      )}
    </div>
  );
}
