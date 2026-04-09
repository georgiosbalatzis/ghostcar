import { Suspense, lazy, startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getTeamColor, PRESETS, CAM_MODES, CAM_LABELS, DRIVER_NAME_BY_NUMBER, getCircuitInfo } from "./constants.js";
import { fetchMeetings, fetchSessions, fetchDrivers, fetchLaps, fetchStints, fetchLocation, fetchCarData } from "./api.js";
import { norm, telAt, bestLap, useIsMobile, ds, fmt, encodeURL, decodeURL, normalizeText } from "./helpers.js";
import { ThemeProvider, getThemePalette } from "./theme.js";

// Components
import MiniMap from "./components/MiniMap.jsx";
import SectorDelta from "./components/SectorDelta.jsx";
import TelemetryPanel from "./components/TelemetryPanel.jsx";
import TrackReplay2D from "./components/TrackReplay2D.jsx";
import { getModalCloseButtonStyle } from "./modals/modalStyles.js";

const AVAILABLE_YEARS = [2026, 2025, 2024, 2023];
const UNAVAILABLE_PRESET_YEARS = [2026];
const DEFAULT_YEAR = 2025;
const TRACK_VIEW_STORAGE_KEY = "f1s-track-view";
const TRACK_VIEW_MODES = ["3d", "2d"];
const SUPPORTED_SESSION_NAMES = ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"];
const LOGO_SRC = `${import.meta.env.BASE_URL}f1-stories-logo.svg`;
const SceneStage3D = lazy(() => import("./components/SceneStage3D.jsx"));
const PresetsModal = lazy(() => import("./modals/PresetsModal.jsx"));
const StatsModal = lazy(() => import("./modals/StatsModal.jsx"));
const LapsModal = lazy(() => import("./modals/LapsModal.jsx"));
const KeysModal = lazy(() => import("./modals/KeysModal.jsx"));
const H2HModal = lazy(() => import("./modals/H2HModal.jsx"));
const DashModal = lazy(() => import("./modals/DashModal.jsx"));
const GalleryModal = lazy(() => import("./modals/GalleryModal.jsx"));
const EmbedModal = lazy(() => import("./modals/EmbedModal.jsx"));
const TelemetryModal = lazy(() => import("./modals/TelemetryModal.jsx"));
const TourOverlay = lazy(() => import("./modals/TourOverlay.jsx"));

function createAbortError() {
  const error = new Error("Aborted");
  error.name = "AbortError";
  return error;
}

function isAbortError(error) {
  return error?.name === "AbortError";
}

function abortableSleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }
    const timer = window.setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      window.clearTimeout(timer);
      reject(createAbortError());
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

function prepareLapSelectModel(laps) {
  const valid = laps.filter((lap) => lap.lap_duration > 10);
  let fastestLapNumber = null;
  let fastestLapDuration = Infinity;
  for (const lap of valid) {
    if (lap.lap_duration < fastestLapDuration) {
      fastestLapDuration = lap.lap_duration;
      fastestLapNumber = lap.lap_number;
    }
  }
  return {
    options: [...valid].sort((a, b) => a.lap_duration - b.lap_duration),
    fastestLapNumber,
  };
}

function getComparisonCacheKey(year, d1, d2) {
  return `${year}:${d1}:${d2}`;
}

export default function App({ embed }) {
  const mob = useIsMobile();
  const initialURL = useMemo(() => decodeURL(), []);
  const [isDark, setIsDark] = useState(() => { try { return localStorage.getItem("f1s-theme") !== "light"; } catch { return true; } });
  const F1 = getThemePalette(isDark);
  const toggleTheme = useCallback(() => { setIsDark((d) => { const next = !d; try { localStorage.setItem("f1s-theme", next ? "dark" : "light"); } catch {} return next; }); }, []);
  const [trackView, setTrackView] = useState(() => {
    try {
      return localStorage.getItem(TRACK_VIEW_STORAGE_KEY) === "2d" ? "2d" : "3d";
    } catch {
      return "3d";
    }
  });

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
  const [circuitFlip, setCircuitFlip] = useState(false);
  const [circuitTurns, setCircuitTurns] = useState(20);
  const [st1, setSt1] = useState([]); const [st2, setSt2] = useState([]);
  const [st3, setSt3] = useState([]); const [st4, setSt4] = useState([]);
  const [numDrivers, setNumDrivers] = useState(2);
  const [showDash, setShowDash] = useState(false); const [dashData, setDashData] = useState(null);
  const [prog, setProg] = useState(0); const [play, setPlay] = useState(false); const [spd, setSpd] = useState(1); const [loop, setLoop] = useState(false);
  const [cam, setCam] = useState("orbit"); const [vizMode, setVizMode] = useState("normal");
  const [showKeys, setShowKeys] = useState(false);
  const [showTour, setShowTour] = useState(() => { if (embed) return false; try { return !localStorage.getItem("f1s-toured"); } catch { return true; } });
  const [showH2H, setShowH2H] = useState(false); const [h2hData, setH2hData] = useState(null); const [h2hProgress, setH2hProgress] = useState(null);
  const [showreel, setShowreel] = useState(false); const showreelRef = useRef(false);
  const [countdown, setCountdown] = useState(null);
  const [gallery, setGallery] = useState(() => { try { return JSON.parse(localStorage.getItem("f1s-gallery") || "[]"); } catch { return []; } });
  const [showGallery, setShowGallery] = useState(false); const [showEmbed, setShowEmbed] = useState(false);
  const [loading, setLoading] = useState(""); const [ldPct, setLdPct] = useState(undefined); const [err, setErr] = useState("");
  const [sceneErr, setSceneErr] = useState("");
  const [canCancelLoad, setCanCancelLoad] = useState(false);
  const [showTel, setShowTel] = useState(!embed); const [mobTab, setMobTab] = useState("3d");
  const [showTelOverlay, setShowTelOverlay] = useState(false);
  const [showPresets, setShowPresets] = useState(false); const [showStats, setShowStats] = useState(false); const [showLaps, setShowLaps] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const [shareDialogUrl, setShareDialogUrl] = useState("");
  const [shareDialogNotice, setShareDialogNotice] = useState("");
  const [toast, setToast] = useState(null);
  const [highlightConfig, setHighlightConfig] = useState(false);
  const [showMobMenu, setShowMobMenu] = useState(false);
  const setTrackViewMode = useCallback((mode) => {
    const next = mode === "2d" ? "2d" : "3d";
    setTrackView(next);
    if (next === "2d") setSceneErr("");
    try { localStorage.setItem(TRACK_VIEW_STORAGE_KEY, next); } catch {}
  }, []);
  const selectorsRef = useRef(null);
  const yearSelectRef = useRef(null);
  const cRef = useRef(null); const rafRef = useRef(null); const ltRef = useRef(null); const urlLoaded = useRef(false);
  const autoLoadRef = useRef(false); const presetActiveRef = useRef(false);
  const loadAbortRef = useRef(null);
  const auxAbortRef = useRef(null);
  const h2hCacheRef = useRef(new Map());
  const dashCacheRef = useRef(new Map());
  const toastTimerRef = useRef(null);
  const shareMsgTimerRef = useRef(null);
  const highlightConfigTimerRef = useRef(null);
  const touchScrubRef = useRef({ active: false, x: 0, y: 0 });
  const countdownIntervalRef = useRef(null);
  const showreelTimerRef = useRef(null);

  const clearReplayData = useCallback(() => {
    setTp(null);
    setLoc1(null); setLoc2(null); setLoc3(null); setLoc4(null);
    setTel1(null); setTel2(null); setTel3(null); setTel4(null);
    setProg(0);
    setPlay(false);
  }, []);

  const resetDriverSelections = useCallback((options = {}) => {
    const { resetDriverCount = false } = options;
    setD1(null); setD2(null); setD3(null); setD4(null);
    setSl1(null); setSl2(null); setSl3(null); setSl4(null);
    setLaps1([]); setLaps2([]); setLaps3([]); setLaps4([]);
    setSt1([]); setSt2([]); setSt3([]); setSt4([]);
    clearReplayData();
    if (resetDriverCount) setNumDrivers(2);
  }, [clearReplayData]);

  const cancelCountdown = useCallback(() => {
    if (countdownIntervalRef.current) {
      window.clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setCountdown(null);
  }, []);

  // ─── Derived ───
  const di1 = drvs.find((x) => x.driver_number === d1), di2 = drvs.find((x) => x.driver_number === d2);
  const di3 = drvs.find((x) => x.driver_number === d3), di4 = drvs.find((x) => x.driver_number === d4);
  const co1 = di1 ? getTeamColor(di1.team_name) : "#4488ff", co2 = di2 ? getTeamColor(di2.team_name) : "#ff4488";
  const co3 = di3 ? getTeamColor(di3.team_name) : "#44cc44", co4 = di4 ? getTeamColor(di4.team_name) : "#ffaa00";
  const li1 = laps1.find((l) => l.lap_number === sl1), li2 = laps2.find((l) => l.lap_number === sl2);
  const li3 = laps3.find((l) => l.lap_number === sl3), li4 = laps4.find((l) => l.lap_number === sl4);
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
  const is2DView = trackView === "2d";
  const effectiveSceneErr = is2DView ? "" : sceneErr;
  const alertErr = effectiveSceneErr || err;
  const noMeetings = !loading && !alertErr && mts.length === 0;
  const playablePresets = useMemo(() => PRESETS.filter((preset) => !UNAVAILABLE_PRESET_YEARS.includes(preset.year)), []);
  const replaySources = useMemo(() => ([
    { label: di1?.name_acronym || "D1", color: co1, path: loc1, lapDuration: li1?.lap_duration, tire: tire1, tel: tel1 },
    { label: di2?.name_acronym || "D2", color: co2, path: loc2, lapDuration: li2?.lap_duration, tire: tire2, tel: tel2 },
    ...(numDrivers >= 3 && di3 && loc3 ? [{ label: di3?.name_acronym || "D3", color: co3, path: loc3, lapDuration: li3?.lap_duration, tire: tire3, tel: tel3 }] : []),
    ...(numDrivers >= 4 && di4 && loc4 ? [{ label: di4?.name_acronym || "D4", color: co4, path: loc4, lapDuration: li4?.lap_duration, tire: tire4, tel: tel4 }] : []),
  ]).filter((driver) => driver.path?.length >= 2), [di1, di2, di3, di4, co1, co2, co3, co4, loc1, loc2, loc3, loc4, li1, li2, li3, li4, tire1, tire2, tire3, tire4, tel1, tel2, tel3, tel4, numDrivers]);
  const replayDrivers = useMemo(() => replaySources.map(({ label, color, path }) => ({ label, color, path })), [replaySources]);
  const replayDriverCards = useMemo(() => replaySources.map((driver) => ({
    label: driver.label,
    color: driver.color,
    lapDuration: driver.lapDuration,
    tire: driver.tire,
    current: telAt(driver.tel, prog),
  })), [replaySources, prog]);
  const lapSelect1 = useMemo(() => prepareLapSelectModel(laps1), [laps1]);
  const lapSelect2 = useMemo(() => prepareLapSelectModel(laps2), [laps2]);
  const lapSelect3 = useMemo(() => prepareLapSelectModel(laps3), [laps3]);
  const lapSelect4 = useMemo(() => prepareLapSelectModel(laps4), [laps4]);
  // Memoized — excludes live ct* so it stays stable between prog ticks
  const allDrivers = useMemo(() => [
    { di: di1, co: co1, li: li1, tire: tire1, tel: tel1, s: s1, t: t1, b: b1, st: st1, laps: laps1, sl: sl1 },
    { di: di2, co: co2, li: li2, tire: tire2, tel: tel2, s: s2, t: t2, b: b2, st: st2, laps: laps2, sl: sl2 },
    ...(numDrivers >= 3 && di3 ? [{ di: di3, co: co3, li: li3, tire: tire3, tel: tel3, s: s3, t: t3, b: b3, st: st3, laps: laps3, sl: sl3 }] : []),
    ...(numDrivers >= 4 && di4 ? [{ di: di4, co: co4, li: li4, tire: tire4, tel: tel4, s: s4, t: t4, b: b4, st: st4, laps: laps4, sl: sl4 }] : []),
  ].filter((d) => d.di), [di1, co1, li1, tire1, tel1, s1, t1, b1, st1, laps1, sl1, di2, co2, li2, tire2, tel2, s2, t2, b2, st2, laps2, sl2, numDrivers, di3, co3, li3, laps3, sl3, tire3, tel3, s3, t3, b3, st3, di4, co4, li4, laps4, sl4, tire4, tel4, s4, t4, b4, st4]);

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
    const controller = new AbortController();
    setLoading("Loading...");
    setErr("");
    setSceneErr("");
    setMts([]);
    setSelMt(null);
    setSelSe(null);
    setSess([]);
    setDrvs([]);
    resetDriverSelections();
    fetchMeetings(year, { signal: controller.signal }).then((d) => {
      if (controller.signal.aborted) return;
      setMts(d.filter((m) => m.meeting_name));
      setLoading("");
    }).catch((e) => {
      if (isAbortError(e)) return;
      setErr(e.message);
      setLoading("");
    });
    return () => controller.abort();
  }, [year, resetDriverSelections]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selMt) {
      setSelSe(null);
      setSess([]);
      setDrvs([]);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    setLoading("Loading sessions...");
    setErr("");
    setDrvs([]);
    setSelSe(null);
    resetDriverSelections();
    fetchSessions(selMt.meeting_key, { signal: controller.signal }).then((d) => {
      if (controller.signal.aborted) return;
      setSess(d.filter((s) => SUPPORTED_SESSION_NAMES.includes(s.session_name)));
      setLoading("");
    }).catch((e) => {
      if (isAbortError(e)) return;
      setErr(e.message);
      setLoading("");
    });
    return () => controller.abort();
  }, [selMt, resetDriverSelections]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selSe) {
      setDrvs([]);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    setLoading("Loading drivers...");
    setErr("");
    resetDriverSelections();
    fetchDrivers(selSe.session_key, { signal: controller.signal }).then((d) => {
      if (controller.signal.aborted) return;
      const seen = new Set();
      setDrvs(d.filter((x) => {
        if (seen.has(x.driver_number)) return false;
        seen.add(x.driver_number);
        return true;
      }));
      setLoading("");
    }).catch((e) => {
      if (isAbortError(e)) return;
      setErr(e.message);
      setLoading("");
    });
    return () => controller.abort();
  }, [selSe, resetDriverSelections]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selSe || !d1) {
      setLaps1([]); setSl1(null); setSt1([]);
      return;
    }
    const controller = new AbortController();
    fetchLaps(selSe.session_key, d1, { signal: controller.signal }).then((l) => {
      if (controller.signal.aborted) return;
      setLaps1(l); setSl1(null);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setLaps1([]);
    });
    fetchStints(selSe.session_key, d1, { signal: controller.signal }).then((stints) => {
      if (controller.signal.aborted) return;
      setSt1(stints);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setSt1([]);
    });
    return () => controller.abort();
  }, [selSe, d1]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selSe || !d2) {
      setLaps2([]); setSl2(null); setSt2([]);
      return;
    }
    const controller = new AbortController();
    fetchLaps(selSe.session_key, d2, { signal: controller.signal }).then((l) => {
      if (controller.signal.aborted) return;
      setLaps2(l); setSl2(null);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setLaps2([]);
    });
    fetchStints(selSe.session_key, d2, { signal: controller.signal }).then((stints) => {
      if (controller.signal.aborted) return;
      setSt2(stints);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setSt2([]);
    });
    return () => controller.abort();
  }, [selSe, d2]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selSe || !d3) {
      setLaps3([]); setSl3(null); setSt3([]); setLoc3(null); setTel3(null);
      return;
    }
    const controller = new AbortController();
    fetchLaps(selSe.session_key, d3, { signal: controller.signal }).then((l) => {
      if (controller.signal.aborted) return;
      setLaps3(l); setSl3(null);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setLaps3([]);
    });
    fetchStints(selSe.session_key, d3, { signal: controller.signal }).then((stints) => {
      if (controller.signal.aborted) return;
      setSt3(stints);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setSt3([]);
    });
    return () => controller.abort();
  }, [selSe, d3]);
  useEffect(() => {
    if (presetActiveRef.current) return;
    if (!selSe || !d4) {
      setLaps4([]); setSl4(null); setSt4([]); setLoc4(null); setTel4(null);
      return;
    }
    const controller = new AbortController();
    fetchLaps(selSe.session_key, d4, { signal: controller.signal }).then((l) => {
      if (controller.signal.aborted) return;
      setLaps4(l); setSl4(null);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setLaps4([]);
    });
    fetchStints(selSe.session_key, d4, { signal: controller.signal }).then((stints) => {
      if (controller.signal.aborted) return;
      setSt4(stints);
    }).catch((e) => {
      if (isAbortError(e)) return;
      setSt4([]);
    });
    return () => controller.abort();
  }, [selSe, d4]);
  useEffect(() => { if (lapSelect1.fastestLapNumber && !sl1) setSl1(lapSelect1.fastestLapNumber); }, [lapSelect1.fastestLapNumber, sl1]);
  useEffect(() => { if (lapSelect2.fastestLapNumber && !sl2) setSl2(lapSelect2.fastestLapNumber); }, [lapSelect2.fastestLapNumber, sl2]);
  useEffect(() => { if (lapSelect3.fastestLapNumber && !sl3) setSl3(lapSelect3.fastestLapNumber); }, [lapSelect3.fastestLapNumber, sl3]);
  useEffect(() => { if (lapSelect4.fastestLapNumber && !sl4) setSl4(lapSelect4.fastestLapNumber); }, [lapSelect4.fastestLapNumber, sl4]);

  // URL restore
  useEffect(() => { if (urlLoaded.current) return; const u = decodeURL(); if (u.year && u.mk) { urlLoaded.current = true; setYear(Number(u.year)); } }, []);
  useEffect(() => { const u = decodeURL(); if (u.mk && mts.length && !selMt) { const m = mts.find((x) => String(x.meeting_key) === u.mk); if (m) setSelMt(m); } }, [mts]);
  useEffect(() => { const u = decodeURL(); if (u.sk && sess.length && !selSe) { const s = sess.find((x) => String(x.session_key) === u.sk); if (s) setSelSe(s); } }, [sess]);
  useEffect(() => { const u = decodeURL(); if (u.d1 && u.d2 && drvs.length && !d1 && !d2) { setD1(Number(u.d1)); setD2(Number(u.d2)); } }, [drvs]);
  useEffect(() => { const u = decodeURL(); if (u.l1 && laps1.length && !sl1) setSl1(Number(u.l1)); }, [laps1]);
  useEffect(() => { const u = decodeURL(); if (u.l2 && laps2.length && !sl2) setSl2(Number(u.l2)); }, [laps2]);

  useEffect(() => () => {
    loadAbortRef.current?.abort();
    auxAbortRef.current?.abort();
    cancelCountdown();
    if (showreelTimerRef.current) window.clearTimeout(showreelTimerRef.current);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    if (shareMsgTimerRef.current) window.clearTimeout(shareMsgTimerRef.current);
    if (highlightConfigTimerRef.current) window.clearTimeout(highlightConfigTimerRef.current);
  }, [cancelCountdown]);

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

  const beginAuxLoad = useCallback(() => {
    auxAbortRef.current?.abort();
    const controller = new AbortController();
    auxAbortRef.current = controller;
    return controller;
  }, []);

  const finishAuxLoad = useCallback((controller) => {
    if (auxAbortRef.current === controller) auxAbortRef.current = null;
  }, []);

  const cancelAuxLoading = useCallback(() => {
    auxAbortRef.current?.abort();
    auxAbortRef.current = null;
    setH2hProgress(null);
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
    const top = selectorsRef.current ? selectorsRef.current.getBoundingClientRect().top + window.scrollY - 12 : 0;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.setTimeout(() => {
      try { yearSelectRef.current?.focus({ preventScroll: true }); } catch { yearSelectRef.current?.focus?.(); }
    }, 220);
  }, []);

  const pushToast = useCallback((message, tone = "info") => {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    setToast({ message, tone });
    toastTimerRef.current = window.setTimeout(() => setToast(null), 2800);
  }, []);

  const bumpShareMsg = useCallback((message) => {
    if (shareMsgTimerRef.current) window.clearTimeout(shareMsgTimerRef.current);
    setShareMsg(message);
    shareMsgTimerRef.current = window.setTimeout(() => setShareMsg(""), 2200);
  }, []);

  const changeMatchup = useCallback(() => {
    cancelLoading();
    cancelAuxLoading();
    cancelCountdown();
    if (showreelTimerRef.current) {
      window.clearTimeout(showreelTimerRef.current);
      showreelTimerRef.current = null;
    }
    setShowreel(false);
    clearReplayData();
    setSceneErr("");
    setErr("");
    setShowTelOverlay(false);
    setShowStats(false);
    setShowLaps(false);
    setShowH2H(false);
    setH2hProgress(null);
    setShowDash(false);
    setShowGallery(false);
    setShowEmbed(false);
    setShowKeys(false);
    setShowMobMenu(false);
    setShowTel(false);
    if (mob || embed) setMobTab("3d");
    if (highlightConfigTimerRef.current) window.clearTimeout(highlightConfigTimerRef.current);
    setHighlightConfig(true);
    highlightConfigTimerRef.current = window.setTimeout(() => setHighlightConfig(false), 2200);
    focusConfiguration();
    pushToast("Selector bar ready. Choose a new season, circuit or driver matchup.", "info");
  }, [cancelAuxLoading, cancelCountdown, cancelLoading, clearReplayData, embed, mob, focusConfiguration, pushToast]);

  const openAuxView = useCallback((mode) => {
    if (mode === "telemetry" && !embed && !mob) {
      setShowTel(true);
      setShowTelOverlay(true);
      pushToast("Telemetry charts opened.", "info");
      return;
    }
    if (embed || mob) {
      if (mode !== "h2h" && mode !== "season") cancelAuxLoading();
      setMobTab(mode);
      return;
    }
    if (mode === "stats") setShowStats(true);
    if (mode === "laps") setShowLaps(true);
  }, [cancelAuxLoading, embed, mob, pushToast]);

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
      const _ci = getCircuitInfo(selMt);
      const _rawTp = norm(locs[0]);
      let _area = 0; for (let _i = 0; _i < _rawTp.length; _i++) { const _j = (_i + 1) % _rawTp.length; _area += _rawTp[_i].x * _rawTp[_j].z - _rawTp[_j].x * _rawTp[_i].z; }
      const _flip = _ci.clockwise !== (_area < 0);
      setCircuitFlip(_flip); setCircuitTurns(_ci.turns);
      setTp(norm(locs[0], _flip)); setProg(0); setPlay(false); setLdPct(100); setLoading(""); setLdPct(undefined);
    } catch (e) {
      if (!isAbortError(e)) setErr(e.message);
      setLoading("");
      setLdPct(undefined);
    } finally {
      finishCancelableLoad(controller);
    }
  }, [selSe, selMt, d1, d2, d3, d4, sl1, sl2, sl3, sl4, laps1, laps2, laps3, laps4, beginCancelableLoad, finishCancelableLoad]);

  // Auto-load when URL params are fully restored (shared links + embed)
  useEffect(() => {
    if (!urlLoaded.current || autoLoadRef.current) return;
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return;
    autoLoadRef.current = true;
    const timer = window.setTimeout(() => {
      loadData();
    }, 300);
    return () => window.clearTimeout(timer);
  }, [selSe, d1, d2, sl1, sl2, loadData]);

  const loadPreset = useCallback(async (pr) => {
    const controller = beginCancelableLoad();
    setShowPresets(false); setShowMobMenu(false); setLoading("Loading preset..."); setErr(""); setSceneErr(""); setLdPct(0); presetActiveRef.current = true;
    try {
      if (UNAVAILABLE_PRESET_YEARS.includes(pr.year)) throw new Error(`Preset data for ${pr.year} is not available yet.`);
      cancelAuxLoading();
      resetDriverSelections({ resetDriverCount: true });
      setShowH2H(false);
      setShowDash(false);
      setH2hData(null);
      setDashData(null);
      setH2hProgress(null);
      setMobTab("3d");
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
      setD3(null); setD4(null);
      setLaps1(l1Data); setLaps2(l2Data); setSl1(fast1.lap_number); setSl2(fast2.lap_number); setSt1(st1Data); setSt2(st2Data); setLdPct(50);
      setLaps3([]); setLaps4([]); setSl3(null); setSl4(null); setSt3([]); setSt4([]);
      setLoc3(null); setLoc4(null); setTel3(null); setTel4(null);
      setLoading("Fetching telemetry..."); const sk = se.session_key;
      const end1 = new Date(new Date(fast1.date_start).getTime() + (fast1.lap_duration || 120) * 1000).toISOString();
      const end2 = new Date(new Date(fast2.date_start).getTime() + (fast2.lap_duration || 120) * 1000).toISOString(); setLdPct(60);
      const [lo1, lo2] = await Promise.all([fetchLocation(sk, pr.d1, fast1.date_start, end1, reqOptions), fetchLocation(sk, pr.d2, fast2.date_start, end2, reqOptions)]); setLdPct(80);
      const [ca1, ca2] = await Promise.all([fetchCarData(sk, pr.d1, fast1.date_start, end1, reqOptions), fetchCarData(sk, pr.d2, fast2.date_start, end2, reqOptions)]);
      if (lo1.length < 5 || lo2.length < 5) throw new Error("Insufficient location data");
      const _ci2 = getCircuitInfo(mt);
      const _rawTp2 = norm(lo1);
      let _area2 = 0; for (let _i = 0; _i < _rawTp2.length; _i++) { const _j = (_i + 1) % _rawTp2.length; _area2 += _rawTp2[_i].x * _rawTp2[_j].z - _rawTp2[_j].x * _rawTp2[_i].z; }
      const _flip2 = _ci2.clockwise !== (_area2 < 0);
      setCircuitFlip(_flip2); setCircuitTurns(_ci2.turns);
      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2); setTp(norm(lo1, _flip2)); setProg(0); setPlay(false); setLdPct(100);
      setLoading(""); setLdPct(undefined);
    } catch (e) {
      if (!isAbortError(e)) setErr(e.message);
      setLoading(""); setLdPct(undefined);
    } finally {
      presetActiveRef.current = false;
      finishCancelableLoad(controller);
    }
  }, [UNAVAILABLE_PRESET_YEARS, beginCancelableLoad, cancelAuxLoading, finishCancelableLoad, resetDriverSelections]);

  const share = useCallback(async () => {
    if (!selMt || !selSe) return;
    const url = encodeURL({ year, mk: selMt.meeting_key, sk: selSe.session_key, d1, d2, l1: sl1, l2: sl2 });
    window.history.replaceState(null, "", url.split(window.location.origin)[1]);
    const shareTitle = `${selMt.meeting_name} ${year} Ghost Car Lab`;
    if (navigator.share && mob && !embed) {
      try {
        await navigator.share({ title: shareTitle, text: "Ghost Car telemetry comparison", url });
        setShareDialogUrl("");
        setShareDialogNotice("");
        bumpShareMsg("SHARED");
        pushToast("Share sheet opened.", "success");
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url);
      setShareDialogUrl(url);
      setShareDialogNotice("Link copied to clipboard. You can share it directly or copy it again below.");
      bumpShareMsg("COPIED");
      pushToast("Share link copied to clipboard.", "success");
    } catch (error) {
      if (error?.name === "AbortError") return;
      setShareDialogUrl(url);
      setShareDialogNotice("Clipboard access was blocked. Copy the link below.");
      bumpShareMsg("LINK READY");
      pushToast("Share link ready to copy.", "info");
    }
  }, [year, selMt, selSe, d1, d2, sl1, sl2, mob, embed, bumpShareMsg, pushToast]);

  const saveToGallery = useCallback(() => {
    if (!di1 || !di2 || !selMt || !li1 || !li2) return;
    const entry = { id: Date.now(), d1n: di1.name_acronym, d2n: di2.name_acronym, gp: selMt.meeting_name, year, delta: delta?.toFixed(3), t1: fmt(li1.lap_duration), t2: fmt(li2.lap_duration), c1: co1, c2: co2, url: encodeURL({ year, mk: selMt.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 }) };
    const newG = [entry, ...gallery].slice(0, 20); setGallery(newG); try { localStorage.setItem("f1s-gallery", JSON.stringify(newG)); } catch {}
    pushToast("Comparison saved to gallery.", "success");
  }, [di1, di2, selMt, selSe, li1, li2, delta, co1, co2, year, d1, d2, sl1, sl2, gallery, pushToast]);

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
    pushToast("Social card downloaded.", "success");
  }, [di1, di2, selMt, li1, li2, delta, co1, co2, pushToast]);

  const takeScreenshot = useCallback(() => {
    if (mob && !is2DView) {
      pushToast("3D screenshots are disabled on mobile to keep playback smooth. Switch to 2D or use desktop.", "info");
      return;
    }
    const el = cRef.current;
    if (!el) return;
    const canvas = el.querySelector("canvas");
    if (canvas) {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `f1stories-ghost-${Date.now()}.png`;
      a.click();
      pushToast("Track screenshot downloaded.", "success");
      return;
    }
    const svg = el.querySelector("svg");
    if (svg) {
      const a = document.createElement("a");
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = `f1stories-ghost-${Date.now()}.svg`;
      a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      pushToast("Track capture downloaded.", "success");
      return;
    }
    pushToast("Nothing to capture yet.", "info");
  }, [is2DView, mob, pushToast]);

  const loadH2H = useCallback(async () => {
    if (!d1 || !d2) return;
    const cacheKey = getComparisonCacheKey(year, d1, d2);
    const cachedResults = h2hCacheRef.current.get(cacheKey);
    if (cachedResults) {
      if (!mob && !embed) setShowH2H(true);
      setH2hData(cachedResults);
      setH2hProgress(null);
      return;
    }
    const controller = beginAuxLoad();
    const reqOptions = { signal: controller.signal };
    if (!mob && !embed) setShowH2H(true);
    setH2hData(null);
    setH2hProgress({ checked: 0, total: 0, currentGp: "", found: 0 });
    try {
      const allMts = await fetchMeetings(year, reqOptions);
      const validMts = allMts.filter((m) => m.meeting_name);
      const results = [];
      setH2hProgress({ checked: 0, total: validMts.length, currentGp: validMts[0]?.meeting_name || "", found: 0 });
      for (let i = 0; i < validMts.length && results.length < 12; i++) {
        if (controller.signal.aborted) throw createAbortError();
        const mt = validMts[i];
        setH2hProgress({ checked: i, total: validMts.length, currentGp: mt.meeting_name, found: results.length });
        try {
          if (i > 0 && i % 3 === 0) await abortableSleep(1200, controller.signal);
          const ss = await fetchSessions(mt.meeting_key, reqOptions);
          const q = ss.find((s) => s.session_name === "Qualifying");
          if (!q) {
            setH2hProgress({ checked: i + 1, total: validMts.length, currentGp: mt.meeting_name, found: results.length });
            continue;
          }
          await abortableSleep(400, controller.signal);
          const [l1d, l2d] = await Promise.all([fetchLaps(q.session_key, d1, reqOptions), fetchLaps(q.session_key, d2, reqOptions)]);
          const b1 = bestLap(l1d), b2 = bestLap(l2d);
          if (b1 && b2) {
            results.push({ gp: mt.meeting_name?.replace("Grand Prix", "GP"), t1: b1.lap_duration, t2: b2.lap_duration });
            startTransition(() => setH2hData([...results]));
          }
        } catch (e) {
          if (isAbortError(e)) throw e;
          if (String(e).includes("429")) await abortableSleep(3000, controller.signal);
        } finally {
          if (!controller.signal.aborted) setH2hProgress({ checked: i + 1, total: validMts.length, currentGp: mt.meeting_name, found: results.length });
        }
      }
      if (!controller.signal.aborted) {
        const finalResults = results.length ? [...results] : [];
        h2hCacheRef.current.set(cacheKey, finalResults);
        if (finalResults.length === 0) setH2hData([]);
      }
    } catch (e) {
      if (!isAbortError(e)) setH2hData([]);
    } finally {
      if (!controller.signal.aborted) setH2hProgress((prev) => prev ? { ...prev, currentGp: "" } : null);
      finishAuxLoad(controller);
    }
  }, [year, d1, d2, beginAuxLoad, finishAuxLoad, mob, embed]);

  const loadSeasonDash = useCallback(async () => {
    if (!d1 || !d2) return;
    const cacheKey = getComparisonCacheKey(year, d1, d2);
    const cachedResults = dashCacheRef.current.get(cacheKey);
    if (cachedResults) {
      if (!mob && !embed) setShowDash(true);
      setDashData(cachedResults);
      return;
    }
    const controller = beginAuxLoad();
    const reqOptions = { signal: controller.signal };
    if (!mob && !embed) setShowDash(true);
    setDashData(null);
    try {
      const allMts = await fetchMeetings(year, reqOptions);
      const results = [];
      for (let i = 0; i < allMts.length && results.length < 15; i++) {
        if (controller.signal.aborted) throw createAbortError();
        const mt = allMts[i];
        if (!mt.meeting_name) continue;
        try {
          if (i > 0 && i % 3 === 0) await abortableSleep(1200, controller.signal);
          const ss = await fetchSessions(mt.meeting_key, reqOptions);
          const q = ss.find((s) => s.session_name === "Qualifying");
          if (!q) continue;
          await abortableSleep(400, controller.signal);
          const [l1d, l2d] = await Promise.all([fetchLaps(q.session_key, d1, reqOptions), fetchLaps(q.session_key, d2, reqOptions)]);
          const b1 = bestLap(l1d), b2 = bestLap(l2d);
          if (b1 && b2) {
            results.push({ gp: mt.meeting_name?.replace("Grand Prix", "GP"), t1: b1.lap_duration, t2: b2.lap_duration, d: b1.lap_duration - b2.lap_duration });
            startTransition(() => setDashData([...results]));
          }
        } catch (e) {
          if (isAbortError(e)) throw e;
          if (String(e).includes("429")) await abortableSleep(3000, controller.signal);
        }
      }
      if (!controller.signal.aborted) {
        const finalResults = results.length ? [...results] : [];
        dashCacheRef.current.set(cacheKey, finalResults);
        if (finalResults.length === 0) setDashData([]);
      }
    } catch (e) {
      if (!isAbortError(e)) setDashData([]);
    } finally {
      finishAuxLoad(controller);
    }
  }, [year, d1, d2, beginAuxLoad, finishAuxLoad, mob, embed]);

  // ─── Scene — pass progRef for direct 60fps reads ───
  const progRef = useRef(0);
  progRef.current = prog;
  const selectComparisonTab = useCallback((tabId) => {
    if (tabId !== "h2h" && tabId !== "season") cancelAuxLoading();
    setMobTab(tabId);
    if (tabId === "h2h" && !h2hData) loadH2H();
    if (tabId === "season" && !dashData) loadSeasonDash();
    if (tabId === "3d") window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
  }, [cancelAuxLoading, dashData, h2hData, loadH2H, loadSeasonDash]);
  const closeStatsModal = useCallback(() => setShowStats(false), []);
  const closeLapsModal = useCallback(() => setShowLaps(false), []);
  const closeKeysModal = useCallback(() => setShowKeys(false), []);
  const closePresetsModal = useCallback(() => setShowPresets(false), []);
  const closeGalleryModal = useCallback(() => setShowGallery(false), []);
  const closeEmbedModal = useCallback(() => setShowEmbed(false), []);
  const closeTelemetryOverlay = useCallback(() => setShowTelOverlay(false), []);
  const closeH2HModal = useCallback(() => {
    cancelAuxLoading();
    setShowH2H(false);
  }, [cancelAuxLoading]);
  const closeDashModal = useCallback(() => {
    cancelAuxLoading();
    setShowDash(false);
  }, [cancelAuxLoading]);
  const closeInlineTab = useCallback(() => selectComparisonTab("3d"), [selectComparisonTab]);
  const lapModalDrivers = useMemo(() => ([
    { lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: setSl1 },
    { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: setSl2 },
  ]), [di1, co1, laps1, sl1, di2, co2, laps2, sl2]);
  const handleReplayTouchStart = useCallback((e) => {
    if (!mob || !tp || !is2DView) return;
    const target = e.target;
    if (target instanceof Element && target.closest("button,a,input,select,textarea,label,[data-no-track-scrub='true']")) return;
    const touch = e.touches?.[0];
    if (!touch) return;
    touchScrubRef.current = { active: true, x: touch.clientX, y: touch.clientY };
  }, [is2DView, mob, tp]);
  const handleReplayTouchEnd = useCallback((e) => {
    const gesture = touchScrubRef.current;
    touchScrubRef.current = { active: false, x: 0, y: 0 };
    if (!gesture.active) return;
    const touch = e.changedTouches?.[0];
    if (!touch) return;
    const dx = touch.clientX - gesture.x;
    const dy = Math.abs(touch.clientY - gesture.y);
    if (Math.abs(dx) <= 50 || Math.abs(dx) <= dy) return;
    setProg((p) => {
      const next = Math.max(0, Math.min(1, p + (dx > 0 ? 0.03 : -0.03)));
      progRef.current = next;
      return next;
    });
  }, []);
  const handleReplayTouchCancel = useCallback(() => {
    touchScrubRef.current = { active: false, x: 0, y: 0 };
  }, []);

  // ─── Playback — write to ref at 60fps, sync React state at ~12fps for UI ───
  const spdRef = useRef(spd); spdRef.current = spd;
  const loopRef = useRef(loop); loopRef.current = loop;
  const trackViewRef = useRef(trackView); trackViewRef.current = trackView;
  const uiSyncRef = useRef(0);
  const startWithCountdown = useCallback(() => {
    if (countdownIntervalRef.current) return;
    if (prog < 0.01 && tp && !play) {
      if (embed) {
        setPlay(true);
        return;
      }
      let c = 5;
      setCountdown(c);
      countdownIntervalRef.current = window.setInterval(() => {
        c -= 1;
        if (c <= 0) {
          cancelCountdown();
          setPlay(true);
          return;
        }
        setCountdown(c);
      }, 1000);
      return;
    }
    setPlay((current) => !current);
  }, [cancelCountdown, embed, play, prog, tp]);
  useEffect(() => {
    if (!play) { ltRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    function tick(ts) {
      if (!ltRef.current) ltRef.current = ts;
      const dt = Math.min((ts - ltRef.current) / 1000, 0.05); ltRef.current = ts;
      let n = progRef.current + dt * 0.015 * spdRef.current;
      if (n >= 1) { if (loopRef.current) { n = 0; } else { n = 1; setPlay(false); } }
      progRef.current = n;
      // 2D mode relies on React for the track animation, so it needs a faster sync.
      if (ts - uiSyncRef.current > (trackViewRef.current === "2d" ? 33 : 80)) { uiSyncRef.current = ts; setProg(n); }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [play]);

  // ─── Modal backdrop ───
  const anyModal = showPresets || showStats || showLaps || showKeys || showH2H || showGallery || showEmbed || showDash || showTelOverlay || !!shareDialogUrl;
  const closeAll = useCallback(() => {
    cancelAuxLoading();
    setShowPresets(false);
    setShowStats(false);
    setShowLaps(false);
    setShowKeys(false);
    setShowH2H(false);
    setH2hProgress(null);
    setShowGallery(false);
    setShowEmbed(false);
    setShowDash(false);
    setShowTelOverlay(false);
    setShareDialogUrl("");
    setShareDialogNotice("");
  }, [cancelAuxLoading]);

  // ─── Keyboard ───
  const lastLeftRef = useRef(0);
  useEffect(() => {
    const h = (e) => {
      if (e.code === "Escape") {
        if (showMobMenu) { setShowMobMenu(false); return; }
        if (showTour) { setShowTour(false); return; }
        if (anyModal) { closeAll(); return; }
        if ((mob || embed) && mobTab !== "3d") { setMobTab("3d"); return; }
        if (!mob && !embed && showTel) { setShowTel(false); return; }
        return;
      }
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "?" || (e.shiftKey && e.code === "Slash")) { setShowKeys((k) => !k); return; }
      if (e.code === "Space") { e.preventDefault(); if (tp) startWithCountdown(); }
      if (e.code === "KeyR") { setProg(0); setPlay(false); }
      if (e.code === "KeyD") { toggleTheme(); return; }
      if (e.code === "KeyT") {
        if (!mob && !embed) setShowTel((s) => !s);
        return;
      }
      if (e.code === "KeyV") {
        if (tp) setTrackViewMode(is2DView ? "3d" : "2d");
        return;
      }
      if (e.code === "KeyC") setCam((m) => CAM_MODES[(CAM_MODES.indexOf(m) + 1) % CAM_MODES.length]);
      if (e.code === "KeyL") setLoop((l) => !l);
      if (e.code === "ArrowRight") setProg((p) => Math.min(1, p + 0.01));
      if (e.code === "ArrowLeft") {
        const now = Date.now();
        if (now - lastLeftRef.current < 300) setProg((p) => Math.max(0, p - 0.05));
        else setProg((p) => Math.max(0, p - 0.01));
        lastLeftRef.current = now;
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [tp, startWithCountdown, showMobMenu, showTour, anyModal, closeAll, mob, embed, mobTab, showTel, toggleTheme, setTrackViewMode, is2DView]);

  // Showreel
  useEffect(() => {
    if (showreelTimerRef.current) {
      window.clearTimeout(showreelTimerRef.current);
      showreelTimerRef.current = null;
    }
    if (!showreel) {
      showreelRef.current = false;
      return;
    }
    showreelRef.current = true;
    let idx = 0;
    async function next() {
      if (!showreelRef.current || idx >= playablePresets.length) {
        setShowreel(false);
        return;
      }
      await loadPreset(playablePresets[idx]);
      if (!showreelRef.current) return;
      setPlay(true);
      idx++;
      showreelTimerRef.current = window.setTimeout(() => {
        setPlay(false);
        if (showreelRef.current) next();
      }, 12000);
    }
    next();
    return () => {
      showreelRef.current = false;
      if (showreelTimerRef.current) {
        window.clearTimeout(showreelTimerRef.current);
        showreelTimerRef.current = null;
      }
    };
  }, [showreel, loadPreset, playablePresets]);

  const renderTrackViewButtons = (compact = false) => TRACK_VIEW_MODES.map((mode) => (
    <button
      key={mode}
      onClick={() => setTrackViewMode(mode)}
      style={{
        padding: compact ? "4px 10px" : "4px 12px",
        fontSize: compact ? 9 : 10,
        textTransform: "uppercase",
        background: trackView === mode ? F1.blue : F1.overlay,
        color: trackView === mode ? "#fff" : F1.textDim,
        borderColor: trackView === mode ? F1.blue : F1.borderLight,
        fontWeight: 800,
        letterSpacing: "0.08em",
      }}
    >
      {mode.toUpperCase()}
    </button>
  ));
  const shellClassName = embed ? "app-shell app-shell-embed" : mob ? "app-shell app-shell-mobile" : "app-shell";

  // ─── RENDER ───
  return (
    <ThemeProvider value={F1}>
      <div className={shellClassName} style={{ width: "100%", minHeight: embed || mob ? undefined : "100vh", background: F1.carbon, color: F1.text, fontFamily: F1.sans, overflowX: "hidden", display: (embed || mob) ? "flex" : "block", flexDirection: (embed || mob) ? "column" : undefined }}>
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        *{box-sizing:border-box;margin:0;padding:0}
        .app-shell-mobile{overflow-y:auto;min-height:100vh}
        .app-shell-embed{height:100vh;min-height:100vh;overflow:hidden}
        @supports (min-height: 100dvh){
          .app-shell-mobile{min-height:100dvh}
          .app-shell-embed{min-height:100dvh;height:100dvh}
        }
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
      <Suspense fallback={null}>
        {showPresets && <PresetsModal mob={mob} onClose={closePresetsModal} onLoadPreset={loadPreset} unavailableYears={UNAVAILABLE_PRESET_YEARS} />}
        {showTelOverlay && <TelemetryModal mob={mob} onClose={closeTelemetryOverlay} panelProps={{ mob, tp, prog, allDrivers, numDrivers, di1, di2, co1, co2, li1, li2, s1, s2, laps1, st1, sl1 }} />}
        {showStats && tp && <StatsModal mob={mob} allDrivers={allDrivers} onClose={closeStatsModal} />}
        {showLaps && <LapsModal mob={mob} onClose={closeLapsModal} drivers={lapModalDrivers} />}
        {showKeys && <KeysModal mob={mob} onClose={closeKeysModal} />}
        {showH2H && <H2HModal mob={mob} year={year} di1={di1} di2={di2} co1={co1} co2={co2} h2hData={h2hData} progress={h2hProgress} onClose={closeH2HModal} />}
        {showDash && <DashModal mob={mob} year={year} di1={di1} di2={di2} co1={co1} co2={co2} dashData={dashData} onClose={closeDashModal} />}
        {showGallery && <GalleryModal mob={mob} gallery={gallery} onClose={closeGalleryModal} onClear={() => { setGallery([]); try { localStorage.removeItem("f1s-gallery"); } catch {} }} />}
        {showEmbed && <EmbedModal mob={mob} year={year} selMt={selMt} selSe={selSe} d1={d1} d2={d2} sl1={sl1} sl2={sl2} onClose={closeEmbedModal} />}
        {showTour && !embed && <TourOverlay onClose={() => setShowTour(false)} />}
      </Suspense>
      {shareDialogUrl && (
        <div role="dialog" aria-modal="true" aria-label="Share link" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 560, maxWidth: "calc(100vw - 24px)", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 22px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>SHARE LINK READY</div>
              <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>{shareDialogNotice || "The share link is ready below."}</div>
            </div>
            <button aria-label="Close share dialog" onClick={() => { setShareDialogUrl(""); setShareDialogNotice(""); }} style={getModalCloseButtonStyle(F1)}>✕</button>
          </div>
          <div style={{ padding: "16px 20px 20px" }}>
            <input readOnly value={shareDialogUrl} onFocus={(e) => e.target.select()} style={{ width: "100%", background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 12, outline: "none" }} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>Select and copy the link manually, or use the copy button again.</div>
              <button
                className="f1-btn"
                onClick={async () => {
                  try {
                    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
                    await navigator.clipboard.writeText(shareDialogUrl);
                    setShareDialogNotice("Link copied to clipboard.");
                    bumpShareMsg("COPIED");
                    pushToast("Share link copied to clipboard.", "success");
                  } catch {
                    pushToast("Clipboard is still unavailable on this device.", "info");
                  }
                }}
                style={{ padding: "8px 14px", fontSize: 11 }}
              >
                COPY LINK
              </button>
            </div>
          </div>
        </div>
      )}

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
            <img src={LOGO_SRC} alt="F1 Stories" style={{ height: mob ? 26 : 32, width: "auto" }} onError={(e) => { e.target.style.display = "none"; }} />
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
            <button title="Close tools menu" aria-label="Close tools menu" onClick={() => setShowMobMenu(false)} style={{ fontSize: 14, padding: "2px 8px", background: "transparent", border: "none", color: F1.textMuted }}>✕</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
            {[
              { icon: "📈", label: "Stats", action: () => { setShowStats(true); setShowMobMenu(false); }, show: !!tp },
              { icon: "⏱", label: "Laps", action: () => { setShowLaps(true); setShowMobMenu(false); }, show: !!tp },
              { icon: "⚔️", label: "H2H", action: () => { selectComparisonTab("h2h"); setShowMobMenu(false); }, show: !!(tp && d1 && d2) },
              { icon: "🏆", label: "Season", action: () => { selectComparisonTab("season"); setShowMobMenu(false); }, show: !!(d1 && d2 && selSe) },
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
      {!embed && <div ref={selectorsRef} style={{ padding: mob ? "6px 8px" : "8px 18px", borderBottom: `1px solid ${highlightConfig ? `${F1.blue}77` : F1.borderLight}`, background: F1.carbonLight, boxShadow: highlightConfig ? `0 0 0 2px ${F1.blue}22 inset, 0 0 24px ${F1.blueGlow}` : "none", transition: "box-shadow .25s ease, border-color .25s ease" }}>
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
            {lapSelect1.options.length > 0 && <select title={li1 ? fmt(li1.lap_duration) : "Select lap"} value={sl1 || ""} onChange={(e) => setSl1(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{lapSelect1.options.map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, lapSelect1.fastestLapNumber)}</option>)}</select>}
          </div>
          <span style={{ color: F1.blue, fontSize: mob ? 9 : 11, fontWeight: 900, letterSpacing: "0.1em" }}>VS</span>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 3, height: 16, background: co2, borderRadius: 1 }} />
            <select title={driverFullName(di2) || "Select driver 2"} value={d2 || ""} onChange={(e) => { setD2(Number(e.target.value)); setSl2(null); setLaps2([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 2</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>
            {lapSelect2.options.length > 0 && <select title={li2 ? fmt(li2.lap_duration) : "Select lap"} value={sl2 || ""} onChange={(e) => setSl2(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{lapSelect2.options.map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, lapSelect2.fastestLapNumber)}</option>)}</select>}
          </div>
          {numDrivers >= 3 && <><span style={{ color: F1.textMuted, fontSize: 9, fontWeight: 700 }}>+</span><div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 3, height: 16, background: co3, borderRadius: 1 }} /><select title={driverFullName(di3) || "Select driver 3"} value={d3 || ""} onChange={(e) => { setD3(Number(e.target.value)); setSl3(null); setLaps3([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 3</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>{lapSelect3.options.length > 0 && <select value={sl3 || ""} onChange={(e) => setSl3(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{lapSelect3.options.map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, lapSelect3.fastestLapNumber)}</option>)}</select>}</div></>}
          {numDrivers >= 4 && <><span style={{ color: F1.textMuted, fontSize: 9, fontWeight: 700 }}>+</span><div style={{ display: "flex", alignItems: "center", gap: 3 }}><div style={{ width: 3, height: 16, background: co4, borderRadius: 1 }} /><select title={driverFullName(di4) || "Select driver 4"} value={d4 || ""} onChange={(e) => { setD4(Number(e.target.value)); setSl4(null); setLaps4([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 150 : 220, fontSize: mob ? 11 : 12 }}><option value="">Driver 4</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{formatDriverOption(x)}</option>)}</select>{lapSelect4.options.length > 0 && <select value={sl4 || ""} onChange={(e) => setSl4(Number(e.target.value))} style={{ width: mob ? 148 : 172, fontSize: mob ? 11 : 12 }}><option value="">Lap</option>{lapSelect4.options.map((l) => <option key={l.lap_number} value={l.lap_number}>{formatLapOption(l, lapSelect4.fastestLapNumber)}</option>)}</select>}</div></>}
          {numDrivers < 4 && drvs.length > 0 && <button onClick={() => setNumDrivers((n) => Math.min(4, n + 1))} style={{ padding: "2px 6px", fontSize: 9, color: F1.green }}>+D{numDrivers + 1}</button>}
          {numDrivers > 2 && <button onClick={() => { setNumDrivers((n) => { if (n === 4) { setD4(null); setLoc4(null); setTel4(null); } if (n >= 3) { setD3(null); setLoc3(null); setTel3(null); } return Math.max(2, n - 1); }); }} style={{ padding: "2px 6px", fontSize: 9, color: F1.red }}>−</button>}
          <button className="f1-btn" onClick={loadData} disabled={!d1 || !d2 || !sl1 || !sl2 || !!loading} style={{ padding: mob ? "4px 10px" : "5px 12px", fontSize: mob ? 10 : 11 }}>{loading ? "..." : "COMPARE"}</button>
        </div>
        {noMeetings && <div style={{ marginTop: 6, fontSize: 11, color: F1.textDim, letterSpacing: "0.02em" }}>No meeting data is available for {year} yet. Try 2025 for the latest complete telemetry season.</div>}
      </div>}

      {!embed && alertErr && <div style={{ padding: "8px 18px", background: `${F1.red}11`, borderBottom: `1px solid ${F1.red}22`, fontSize: 12, color: F1.red, display: "flex", alignItems: "center", gap: 8 }}><span style={{ flex: 1 }}>{alertErr}</span><button aria-label="Dismiss error" onClick={() => { setErr(""); setSceneErr(""); }} style={{ minWidth: 34, minHeight: 34, padding: "0 10px", fontSize: 14, lineHeight: 1 }}>✕</button></div>}
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
        ].map((tab) => <button key={tab.id} onClick={() => selectComparisonTab(tab.id)} style={{ flex: "0 0 auto", borderRadius: 0, border: "none", borderBottom: mobTab === tab.id ? `2px solid ${F1.blue}` : "2px solid transparent", background: mobTab === tab.id ? F1.cardBg : "transparent", fontWeight: mobTab === tab.id ? 700 : 400, fontSize: 10, padding: "7px 10px", textTransform: "none", whiteSpace: "nowrap", color: mobTab === tab.id ? F1.text : F1.textDim }}>{tab.label}</button>)}
      </div>}

      {/* Embed tab bar */}
      {embed && tp && <div style={{ display: "flex", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight, flexShrink: 0, overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        {[
          { id: "3d", label: mob ? "🏎️" : "🏎️ Track", title: "Track" },
          { id: "telemetry", label: mob ? "📊" : "📊 Telemetry", title: "Telemetry" },
          { id: "stats", label: mob ? "📈" : "📈 Stats", title: "Stats" },
          { id: "laps", label: mob ? "⏱" : "⏱ Laps", title: "Laps" },
          { id: "h2h", label: mob ? "⚔️" : "⚔️ H2H", title: "H2H" },
          { id: "season", label: mob ? "🏆" : "🏆 Season", title: "Season" },
        ].map((tab) => <button key={tab.id} title={tab.title} onClick={() => selectComparisonTab(tab.id)} style={{ flex: mob ? "1 0 auto" : 1, borderRadius: 0, border: "none", borderBottom: mobTab === tab.id ? `2px solid ${F1.blue}` : "2px solid transparent", background: mobTab === tab.id ? F1.cardBg : "transparent", fontWeight: mobTab === tab.id ? 700 : 400, fontSize: mob ? 16 : 10, padding: mob ? "8px 0" : "7px 4px", textTransform: "none", whiteSpace: "nowrap", letterSpacing: "0.02em", minWidth: mob ? 0 : undefined, color: mobTab === tab.id ? F1.text : F1.textDim }}>{tab.label}</button>)}
      </div>}

      {/* Main area */}
      <div style={{ display: "flex", flexDirection: mob || embed ? "column" : "row", flex: (embed || mob) ? 1 : undefined, minHeight: (embed || mob) ? 0 : undefined, height: (embed || mob) ? undefined : `calc(100vh - ${tp ? 175 : 130}px)`, overflow: "hidden" }}>
        {/* Track stage */}
        <div style={{ flex: 1, position: "relative", minHeight: embed && mob ? 220 : (embed || mob) ? 0 : "auto", display: (embed && mobTab !== "3d") ? "none" : (mob && mobTab !== "3d") ? "none" : undefined }}>
            <div
              ref={cRef}
              style={{
                width: "100%",
                height: "100%",
                background: F1.carbon,
                cursor: is2DView ? "default" : "grab",
                minHeight: embed && mob ? 220 : (embed || mob) ? 0 : "auto",
                touchAction: is2DView ? "pan-y" : "none",
                display: is2DView ? "flex" : "block",
                alignItems: is2DView ? "center" : undefined,
                justifyContent: is2DView ? "center" : undefined,
                padding: is2DView ? (mob ? 12 : 18) : 0,
                overflow: is2DView ? "auto" : "hidden",
              }}
            >
              {tp && !is2DView && (
                <Suspense fallback={null}>
                  <SceneStage3D
                    containerRef={cRef}
                    tp={tp}
                    l1={loc1}
                    l2={loc2}
                    progRef={progRef}
                    c1={co1}
                    c2={co2}
                    cam={cam}
                    lab1={di1?.name_acronym || ""}
                    lab2={di2?.name_acronym || ""}
                    telData1={tel1}
                    vizMode={vizMode}
                    isDark={isDark}
                    l3={loc3}
                    l4={loc4}
                    c3={co3}
                    c4={co4}
                    lab3={di3?.name_acronym || ""}
                    lab4={di4?.name_acronym || ""}
                    onError={setSceneErr}
                    circuitFlip={circuitFlip}
                    circuitTurns={circuitTurns}
                    enabled={!is2DView}
                  />
                </Suspense>
              )}
              {tp && is2DView && (
                <div style={{ width: "min(1080px, 100%)", display: "grid", gridTemplateColumns: mob ? "1fr" : "minmax(0, 1fr) 304px", gap: mob ? 14 : 18, alignItems: "start", animation: "fadeIn .25s" }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", color: F1.blue, marginBottom: 4 }}>LOW-POWER 2D VIEW</div>
                        <div style={{ fontSize: 12, color: F1.textDim, lineHeight: 1.6 }}>SVG replay with live progress dots. WebGL stays off in this mode for older GPUs, integrated graphics and battery saver setups.</div>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {renderTrackViewButtons()}
                      </div>
                    </div>
                    <div onTouchStart={handleReplayTouchStart} onTouchEnd={handleReplayTouchEnd} onTouchCancel={handleReplayTouchCancel}>
                      <TrackReplay2D tp={tp} drivers={replayDrivers} prog={prog} flip={circuitFlip} />
                    </div>
                    <div style={{ marginTop: 10, fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>The scrubber and playback controls below still drive the replay, and telemetry, stats and lap tables remain available.</div>
                  </div>
                  <div style={{ display: "grid", gap: 10 }}>
                    {delta !== null && (
                      <div style={{ minWidth: 0, padding: "12px 14px", borderRadius: 12, background: F1.cardBg, border: `1px solid ${F1.blue}33` }}>
                        <div style={{ fontSize: 10, fontWeight: 900, color: F1.textMuted, letterSpacing: "0.08em", marginBottom: 6 }}>LAP DELTA</div>
                        <div style={{ fontSize: 28, fontWeight: 900, fontFamily: F1.mono, color: delta > 0 ? F1.red : F1.green, lineHeight: 1.05 }}>{delta > 0 ? "+" : ""}{delta.toFixed(3)}s</div>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8, fontSize: 10, color: F1.textDim }}>
                          <span style={{ color: co1 }}>{di1?.name_acronym} {fmt(li1?.lap_duration)}</span>
                          <span style={{ color: co2 }}>{di2?.name_acronym} {fmt(li2?.lap_duration)}</span>
                        </div>
                      </div>
                    )}
                    {replayDriverCards.map((driver) => (
                      <div key={driver.label} style={{ minWidth: 0, padding: "10px 12px", borderRadius: 12, background: F1.cardBg, border: `1px solid ${driver.color}33`, textAlign: "left" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                          <div style={{ fontSize: 10, fontWeight: 900, color: driver.color, letterSpacing: "0.08em" }}>{driver.label}</div>
                          <div style={{ fontSize: 10, color: F1.textMuted }}>{Math.round(prog * 100)}%</div>
                        </div>
                        <div style={{ fontSize: 14, fontFamily: F1.mono, color: F1.text, fontWeight: 700, marginTop: 4 }}>{fmt((driver.lapDuration || 0) * prog)}</div>
                        <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 10, color: F1.textDim, flexWrap: "wrap" }}>
                          <span>{Math.round(driver.current?.speed || 0)} km/h</span>
                          <span>THR {Math.round(driver.current?.throttle || 0)}%</span>
                          <span>{driver.current?.brake > 0 ? "BRAKE" : "COAST"}</span>
                          {driver.tire && <span>{driver.tire}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {tp && !effectiveSceneErr && !is2DView && (embed && mob ? (
              /* Embed phone: compact cam cycle button + viz toggle */
              <div style={{ position: "absolute", top: 8, left: 8, zIndex: 2, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {renderTrackViewButtons(true)}
                <button onClick={() => setCam((c) => { const i = CAM_MODES.indexOf(c); return CAM_MODES[(i + 1) % CAM_MODES.length]; })} style={{ padding: "4px 10px", fontSize: 9, background: F1.overlay, backdropFilter: "blur(6px)", borderColor: F1.blue, color: "#fff", fontWeight: 700, letterSpacing: "0.04em" }}>📷 {CAM_LABELS[cam]}</button>
                {vizMode !== "normal" && <button onClick={() => setVizMode("normal")} style={{ padding: "4px 8px", fontSize: 9, background: "#0088ff44", backdropFilter: "blur(6px)", borderColor: "#0088ff", color: "#fff", fontWeight: 700 }}>✕ {vizMode === "brake" ? "Brake" : "Speed"}</button>}
              </div>
            ) : (
              <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 3, flexWrap: "wrap" }}>
                {renderTrackViewButtons()}
                <div style={{ width: 1, height: 16, background: F1.borderLight }} />
                {CAM_MODES.map((m) => <button key={m} onClick={() => setCam(m)} style={{ padding: "3px 8px", fontSize: 9, textTransform: "uppercase", background: cam === m ? F1.blue : F1.overlay, color: cam === m ? "#fff" : F1.textDim, borderColor: cam === m ? F1.blue : F1.borderLight, fontWeight: 700 }}>{CAM_LABELS[m]}</button>)}
                <div style={{ width: 1, height: 16, background: F1.borderLight }} />
                <button onClick={() => setVizMode((v) => v === "normal" ? "heatmap" : v === "heatmap" ? "brake" : "normal")} style={{ padding: "3px 8px", fontSize: 9, textTransform: "uppercase", background: vizMode !== "normal" ? "#0088ff" : F1.overlay, color: vizMode !== "normal" ? "#fff" : F1.textDim, borderColor: vizMode !== "normal" ? "#0088ff" : F1.borderLight, fontWeight: 700 }}>{vizMode === "brake" ? "🟥 Brake" : vizMode === "heatmap" ? "🌡 Speed" : "🌡 Heatmap"}</button>
              </div>
            ))}
            {tp && !effectiveSceneErr && !is2DView && !mob && !embed && <div style={{ position: "absolute", top: 44, left: 10, zIndex: 2 }}><MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} flip={circuitFlip} /></div>}
            {/* Interval delta — top-right on embed mobile to avoid bottom overlap */}
            {delta !== null && tp && !is2DView && <div style={{ position: "absolute", ...(embed && mob ? { top: 8, right: 8 } : { bottom: 8, left: 10 }), zIndex: 3, animation: "fadeIn .4s" }}>
              <div style={{ background: F1.overlay, backdropFilter: "blur(8px)", borderRadius: 6, padding: embed && mob ? "4px 10px" : mob ? "5px 12px" : "6px 16px", border: `1px solid ${F1.blue}33`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: 7, color: F1.textMuted, letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase" }}>Δ</div>
                <div style={{ fontSize: embed && mob ? 15 : mob ? 18 : 24, fontWeight: 900, fontFamily: F1.mono, color: delta > 0 ? F1.red : F1.green, lineHeight: 1.1 }}>{delta > 0 ? "+" : ""}{delta.toFixed(3)}<span style={{ fontSize: "0.5em", opacity: 0.7 }}>s</span></div>
                {!(embed && mob) && <div style={{ display: "flex", gap: 12, marginTop: 2 }}>
                  <span style={{ fontSize: 9, color: co1, fontFamily: F1.mono, fontWeight: 700 }}>{di1?.name_acronym} {fmt(li1?.lap_duration)}</span>
                  <span style={{ fontSize: 9, color: co2, fontFamily: F1.mono, fontWeight: 700 }}>{di2?.name_acronym} {fmt(li2?.lap_duration)}</span>
                </div>}
              </div>
            </div>}
            {/* Sector deltas — hide on embed mobile (screen too small) */}
            {tp && li1 && li2 && !is2DView && !(embed && mob) && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 2, maxWidth: "95%" }}>
              <SectorDelta s={1} t1={li1.duration_sector_1} t2={li2.duration_sector_1} c1={co1} c2={co2} />
              <SectorDelta s={2} t1={li1.duration_sector_2} t2={li2.duration_sector_2} c1={co1} c2={co2} />
              <SectorDelta s={3} t1={li1.duration_sector_3} t2={li2.duration_sector_3} c1={co1} c2={co2} />
            </div>}
            {tp && effectiveSceneErr && <div style={{ position: "absolute", inset: mob ? 12 : 20, zIndex: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "min(900px, 100%)", padding: mob ? "18px 16px" : "22px 24px", borderRadius: 16, border: `1px solid ${F1.red}33`, background: `${F1.overlay}`, backdropFilter: "blur(14px)", boxShadow: "0 18px 40px rgba(0,0,0,0.35)" }}>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "minmax(260px, 320px) 1fr", gap: mob ? 16 : 22, alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", color: F1.red, marginBottom: 10 }}>2D FALLBACK PLAYBACK</div>
                    <TrackReplay2D tp={tp} drivers={replayDrivers} prog={prog} flip={circuitFlip} />
                    <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: mob ? "1fr" : `repeat(${Math.max(2, Math.min(4, replayDriverCards.length || 2))}, minmax(0, 1fr))`, gap: 10 }}>
                      {replayDriverCards.map((driver) => (
                        <div key={driver.label} style={{ minWidth: 0, padding: "10px 12px", borderRadius: 10, background: F1.cardBg, border: `1px solid ${driver.color}33`, textAlign: "left" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                            <div style={{ fontSize: 10, fontWeight: 900, color: driver.color, letterSpacing: "0.08em" }}>{driver.label}</div>
                            <div style={{ fontSize: 10, color: F1.textMuted }}>{Math.round(prog * 100)}%</div>
                          </div>
                          <div style={{ fontSize: 14, fontFamily: F1.mono, color: F1.text, fontWeight: 700, marginTop: 4 }}>{fmt((driver.lapDuration || 0) * prog)}</div>
                          <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 10, color: F1.textDim, flexWrap: "wrap" }}>
                            <span>{Math.round(driver.current?.speed || 0)} km/h</span>
                            <span>THR {Math.round(driver.current?.throttle || 0)}%</span>
                            <span>{driver.current?.brake > 0 ? "BRAKE" : "COAST"}</span>
                            {driver.tire && <span>{driver.tire}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 10, fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>The scrubber and playback controls below now drive a 2D track replay with live progress dots.</div>
                  </div>
                  <div style={{ textAlign: mob ? "center" : "left" }}>
                    <div style={{ fontSize: mob ? 15 : 18, fontWeight: 800, color: F1.text, lineHeight: 1.45, marginBottom: 8 }}>{effectiveSceneErr}</div>
                    <div style={{ fontSize: 12, color: F1.textDim, lineHeight: 1.7, marginBottom: 14 }}>The comparison is still usable without WebGL. Open the telemetry charts, stats or lap tables, or jump back to the selector bar to change the matchup.</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: mob ? "center" : "flex-start" }}>
                      <button onClick={() => setTrackViewMode("2d")} className="f1-btn" style={{ padding: "8px 13px", fontSize: 11 }}>USE 2D VIEW</button>
                      <button onClick={() => openAuxView("telemetry")} style={{ padding: "8px 13px", fontSize: 11 }}>TELEMETRY</button>
                      <button onClick={() => openAuxView("stats")} style={{ padding: "8px 13px", fontSize: 11 }}>STATS</button>
                      <button onClick={() => openAuxView("laps")} style={{ padding: "8px 13px", fontSize: 11 }}>LAPS</button>
                      {!embed && <button onClick={changeMatchup} className="f1-btn" style={{ padding: "8px 13px", fontSize: 11 }}>CHANGE MATCHUP</button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
            {!tp && !loading && !embed && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
              <img src={LOGO_SRC} alt="" style={{ height: 60, marginBottom: 16, opacity: 0.6 }} onError={(e) => { e.target.style.display = "none"; }} />
              <div style={{ fontSize: mob ? 14 : 18, fontWeight: 900, color: "#fff", marginBottom: 4 }}>GHOST CAR LAB</div>
              <div style={{ fontSize: 11, color: F1.red, fontWeight: 600, marginBottom: 14, letterSpacing: "0.1em" }}>by F1 STORIES</div>
              <div style={{ fontSize: 12, color: F1.textDim, maxWidth: 360, lineHeight: 1.6 }}>Compare qualifying laps in 3D or switch to a low-power 2D replay when the machine needs a lighter view.</div>
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
        {((!mob && !embed && showTel && tp && !effectiveSceneErr) || ((mob || embed) && mobTab === "telemetry" && tp)) && (
          <div style={{ width: (!mob && !embed) ? 310 : "100%", borderLeft: (!mob && !embed) ? `1px solid ${F1.borderLight}` : "none", background: F1.panelBg, display: "flex", flexDirection: "column", flex: (embed || mob) ? 1 : undefined, minHeight: (embed || mob) ? 0 : undefined, maxHeight: (!mob && !embed) ? "auto" : undefined, overflow: "auto", animation: "fadeIn .2s" }}>
            <TelemetryPanel mob={mob || embed} tp={tp} prog={prog} allDrivers={allDrivers} numDrivers={numDrivers} di1={di1} di2={di2} co1={co1} co2={co2} li1={li1} li2={li2} s1={s1} s2={s2} laps1={laps1} st1={st1} sl1={sl1} />
          </div>
        )}

        {/* Inline Stats tab (embed + mobile) */}
        {(embed || mob) && mobTab === "stats" && tp && (
          <Suspense fallback={null}>
            <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: 0, animation: "fadeIn .2s" }}>
              <StatsModal mob={true} allDrivers={allDrivers} onClose={closeInlineTab} inline />
            </div>
          </Suspense>
        )}

        {/* Inline Laps tab */}
        {(embed || mob) && mobTab === "laps" && tp && (
          <Suspense fallback={null}>
            <div style={{ flex: 1, minHeight: 0, overflow: "auto", animation: "fadeIn .2s" }}>
              <LapsModal mob={true} onClose={closeInlineTab} inline drivers={lapModalDrivers} />
            </div>
          </Suspense>
        )}

        {/* Inline H2H tab */}
        {(embed || mob) && mobTab === "h2h" && tp && (
          <Suspense fallback={null}>
            <div style={{ flex: 1, minHeight: 0, overflow: "auto", animation: "fadeIn .2s" }}>
              <H2HModal mob={true} year={year} di1={di1} di2={di2} co1={co1} co2={co2} h2hData={h2hData} progress={h2hProgress} onClose={closeInlineTab} inline />
            </div>
          </Suspense>
        )}

        {/* Inline Season tab */}
        {(embed || mob) && mobTab === "season" && tp && (
          <Suspense fallback={null}>
            <div style={{ flex: 1, minHeight: 0, overflow: "auto", animation: "fadeIn .2s" }}>
              <DashModal mob={true} year={year} di1={di1} di2={di2} co1={co1} co2={co2} dashData={dashData} onClose={closeInlineTab} inline />
            </div>
          </Suspense>
        )}
      </div>

      {/* Playback bar */}
      {tp && <div style={{ display: "flex", alignItems: "center", gap: embed && mob ? 4 : mob ? 6 : 10, padding: embed && mob ? "5px 8px" : mob ? "6px 10px" : "6px 18px", background: `linear-gradient(180deg, ${F1.carbonLight}, ${F1.carbon})`, borderTop: `1px solid ${F1.blue}22`, flexShrink: 0 }}>
        {!(embed && mob) && <button title="Restart playback" aria-label="Restart playback" onClick={() => { setProg(0); setPlay(false); }} style={{ padding: "3px 7px", fontSize: 11 }}>{mob ? "⏮" : "⏮ RESTART"}</button>}
        <button title={play ? "Pause playback" : "Play comparison"} aria-label={play ? "Pause playback" : "Play comparison"} onClick={startWithCountdown} style={{ padding: embed && mob ? "5px 10px" : "3px 9px", fontSize: embed && mob ? 15 : 12, background: play ? `${F1.blue}33` : F1.cardBg, borderColor: play ? F1.blue : F1.border, fontWeight: 700, letterSpacing: embed && mob ? undefined : "0.04em" }}>{embed && mob ? (play ? "⏸" : "▶") : play ? "⏸ PAUSE" : "▶ PLAY"}</button>
        {!(embed && mob) && <button title={loop ? "Disable loop playback" : "Enable loop playback"} aria-label={loop ? "Disable loop playback" : "Enable loop playback"} onClick={() => setLoop(!loop)} style={{ padding: "3px 7px", opacity: loop ? 1 : 0.35, fontSize: 11 }}>{mob ? "🔁" : "🔁 LOOP"}</button>}
        <input type="range" min="0" max="1" step="0.001" value={prog} onChange={(e) => { const v = parseFloat(e.target.value); progRef.current = v; setProg(v); }} style={{ flex: 1, height: embed && mob ? 6 : 4, accentColor: F1.blue }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: embed && mob ? 46 : mob ? 55 : 70 }}>
          {allDrivers.map((d, i) => <span key={i} style={{ fontSize: embed && mob ? 9 : 10, color: d.co, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(d.li?.lap_duration ? prog * d.li.lap_duration : 0)}</span>)}
        </div>
        {!embed && <button title="Return to setup selectors" aria-label="Return to setup selectors" onClick={changeMatchup} style={{ padding: "3px 8px", fontSize: 10 }}>SETUP</button>}
        <select value={spd} onChange={(e) => setSpd(parseFloat(e.target.value))} style={{ width: embed && mob ? 42 : 48, padding: "2px 3px", fontSize: 10 }}>
          <option value={0.25}>.25x</option><option value={0.5}>.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
        </select>
        {!mob && !embed && <button title={showTel ? "Hide telemetry side panel" : "Show telemetry side panel"} aria-label={showTel ? "Hide telemetry side panel" : "Show telemetry side panel"} onClick={() => setShowTel(!showTel)} style={{ padding: "3px 7px", fontSize: 10, opacity: showTel ? 1 : 0.35 }}>{showTel ? "📊 ON" : "📊 OFF"}</button>}
        {embed && !mob && <button onClick={share} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.04em" }}>{shareMsg || "↗ SHARE"}</button>}
        {embed && <a href={encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 })} target="_blank" rel="noopener noreferrer" style={{ padding: embed && mob ? "5px 8px" : "3px 8px", fontSize: 9, color: F1.blue, textDecoration: "none", fontWeight: 700, border: `1px solid ${F1.blue}44`, borderRadius: 4, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{embed && mob ? "↗" : "VIEW IN APP ↗"}</a>}
        {embed && !mob && <span style={{ fontSize: 8, color: F1.textMuted, whiteSpace: "nowrap", marginLeft: "auto" }}>Powered by <a href="https://f1stories.gr/ghostcar/" target="_blank" rel="noopener noreferrer" style={{ color: F1.blue, textDecoration: "none", fontWeight: 700 }}>F1 Stories</a></span>}
      </div>}

      {/* Footer */}
      {!embed && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: mob ? 8 : 16, padding: "8px 18px", background: F1.carbon, borderTop: `1px solid ${F1.borderLight}`, flexWrap: "wrap" }}>
          <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <img src={LOGO_SRC} alt="" style={{ height: 18 }} onError={(e) => { e.target.style.display = "none"; }} />
            <span style={{ fontSize: 10, color: F1.textDim, fontWeight: 600 }}>f1stories.gr</span>
          </a>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono }}>Data by OpenF1 API</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>© {new Date().getFullYear()} F1 Stories</span>
        </div>
      )}
      {toast && <div role="status" aria-live="polite" style={{ position: "fixed", right: 16, bottom: tp ? 72 : 16, zIndex: 250, maxWidth: mob ? "calc(100vw - 32px)" : 320, padding: "10px 14px", borderRadius: 10, background: toast.tone === "success" ? `${F1.green}22` : `${F1.blue}18`, border: `1px solid ${toast.tone === "success" ? `${F1.green}55` : `${F1.blue}44`}`, color: F1.text, boxShadow: "0 14px 30px rgba(0,0,0,0.25)", fontSize: 12, lineHeight: 1.5 }}>{toast.message}</div>}
      </div>
    </ThemeProvider>
  );
}
