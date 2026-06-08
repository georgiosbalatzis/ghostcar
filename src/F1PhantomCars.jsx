import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PRESETS, CAM_MODES, formatSessionLabel } from "./constants.js";
import { telAt, useIsMobile, ds, encodeURL, decodeURL } from "./helpers.js";

// Components
import AppShell from "./components/AppShell.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AuxiliaryContentArea from "./components/AuxiliaryContentArea.jsx";
import ComparisonSelectors from "./components/ComparisonSelectors.jsx";
import CountdownOverlay from "./components/CountdownOverlay.jsx";
import ErrorBanner from "./components/ErrorBanner.jsx";
import HeaderToolbar from "./components/HeaderToolbar.jsx";
import InlineTabBar from "./components/InlineTabBar.jsx";
import LoadingStatusBar from "./components/LoadingStatusBar.jsx";
import ModalLayer from "./components/ModalLayer.jsx";
import MobileToolMenu from "./components/MobileToolMenu.jsx";
import PlaybackBar from "./components/PlaybackBar.jsx";
import ReplayStage from "./components/ReplayStage.jsx";
import Toast from "./components/Toast.jsx";
import { getDriverColor } from "./domain/drivers.js";
import { findLapByNumber, getCompoundForLap } from "./domain/laps.js";
import useAuxiliaryData from "./hooks/useAuxiliaryData.js";
import useAuxiliaryViews from "./hooks/useAuxiliaryViews.js";
import useComparisonSelectors from "./hooks/useComparisonSelectors.js";
import usePlaybackController, { PLAYBACK_SPEEDS } from "./hooks/usePlaybackController.js";
import usePresetLoader from "./hooks/usePresetLoader.js";
import useReplayLoader from "./hooks/useReplayLoader.js";
import useShareAndGallery from "./hooks/useShareAndGallery.js";
import useThemePreference from "./hooks/useThemePreference.js";
import useTrackViewPreference from "./hooks/useTrackViewPreference.js";

const AVAILABLE_YEARS = [2026, 2025, 2024, 2023];
const UNAVAILABLE_PRESET_YEARS = [2026];
const DEFAULT_YEAR = 2025;
const VIZ_MODES = ["normal", "heatmap", "brake"];
const SUPPORTED_SESSION_NAMES = ["Qualifying", "Race", "Sprint", "Sprint Qualifying", "Sprint Shootout", "Practice 1", "Practice 2", "Practice 3"];
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;
const APP_NAME = "F1 Stories Ghost Car";
const APP_SUBTITLE = "Σύγκριση γύρων F1";
const APP_DESCRIPTION = "Σύγκρινε γύρους Formula 1 σε 3D και 2D με πραγματική τηλεμετρία από το OpenF1.";

function normalizeCamMode(value) {
  return CAM_MODES.includes(value) ? value : null;
}

function normalizeVizMode(value) {
  return VIZ_MODES.includes(value) ? value : null;
}

function createRestoreFlags() {
  return {
    meeting: false,
    session: false,
    drivers: false,
    lap1: false,
    lap2: false,
    lap3: false,
    lap4: false,
  };
}

function formatMeetingLabel(value) {
  return String(value || "").replace(/Grand Prix/g, "Γκραν Πρι");
}

function formatMeetingShortLabel(value) {
  return String(value || "").replace(/Grand Prix/g, "GP");
}

export default function App({ embed }) {
  const mob = useIsMobile();
  const initialURL = useMemo(() => decodeURL(), []);
  const { isDark, setThemeMode, themeValue, F1, toggleTheme } = useThemePreference(initialURL.theme);
  const { trackView, setTrackViewMode, setTrackViewFromValue, is2DView } = useTrackViewPreference(
    initialURL.trackView
  );
  const {
    prog,
    setProg,
    progRef,
    play,
    setPlay,
    playRef,
    spd,
    setSpd,
    spdRef,
    loop,
    setLoop,
    countdown,
    cancelCountdown,
    setSpeedFromValue,
    setLoopFromValue,
    resetPlayback,
    startWithCountdown,
    handleReplayTouchStart,
    handleReplayTouchEnd,
    handleReplayTouchCancel,
  } = usePlaybackController({ initialSpeed: initialURL.speed, initialLoop: initialURL.loop, embed, trackView });
  const {
    showDash,
    setShowDash,
    showKeys,
    setShowKeys,
    showH2H,
    setShowH2H,
    showGallery,
    setShowGallery,
    showEmbed,
    setShowEmbed,
    showTel,
    setShowTel,
    mobTab,
    setMobTab,
    showTelOverlay,
    setShowTelOverlay,
    showPresets,
    setShowPresets,
    showStats,
    setShowStats,
    showLaps,
    setShowLaps,
    showMobMenu,
    setShowMobMenu,
    anyAuxiliaryModal,
    closeStatsModal,
    closeLapsModal,
    closeKeysModal,
    closePresetsModal,
    closeGalleryModal,
    closeEmbedModal,
    closeTelemetryOverlay,
    closeAuxiliaryModals,
    resetAuxiliaryViews,
    restoreAuxiliaryTab,
  } = useAuxiliaryViews({ initialTab: initialURL.tab, embed });

  // ─── State ───
  const [cam, setCam] = useState(() => normalizeCamMode(initialURL.cam) ?? "orbit");
  const [vizMode, setVizMode] = useState(() => normalizeVizMode(initialURL.vizMode) ?? "normal");
  const [showTour, setShowTour] = useState(() => { if (embed) return false; try { return !localStorage.getItem("f1s-toured"); } catch { return true; } });
  const [showreel, setShowreel] = useState(false); const showreelRef = useRef(false);
  const [toast, setToast] = useState(null);
  const [highlightConfig, setHighlightConfig] = useState(false);
  const selectorsRef = useRef(null);
  const yearSelectRef = useRef(null);
  const cRef = useRef(null); const urlLoaded = useRef(Boolean(initialURL.year && initialURL.mk));
  const autoLoadRef = useRef(false); const presetActiveRef = useRef(false);
  const restoreStateRef = useRef(initialURL);
  const restoreFlagsRef = useRef(createRestoreFlags());
  const toastTimerRef = useRef(null);
  const highlightConfigTimerRef = useRef(null);
  const showreelTimerRef = useRef(null);
  const handleCancelLoad = useCallback(() => {
    presetActiveRef.current = false;
  }, []);
  const {
    loc1,
    loc2,
    loc3,
    loc4,
    tel1,
    tel2,
    tel3,
    tel4,
    tp,
    circuitFlip,
    circuitTurns,
    loading,
    ldPct,
    err,
    sceneErr,
    canCancelLoad,
    setLoading,
    setLdPct,
    setErr,
    setSceneErr,
    clearLoadIndicator,
    beginCancelableLoad,
    finishCancelableLoad,
    isActiveLoad,
    cancelLoading,
    clearReplayData,
    clearReplaySlot,
    loadReplayComparison,
    loadReplayForActiveLoad,
  } = useReplayLoader({ setProg, setPlay, onCancelLoad: handleCancelLoad });
  const {
    year,
    setYear,
    mts,
    selMt,
    sess,
    selSe,
    drvs,
    selectorSlots,
    resetForUrlRestore,
    applyPresetSelectorData,
    selectMeeting,
    selectSession,
    selectDriverSlot,
    selectLapSlot,
    d1,
    d2,
    d3,
    d4,
    sl1,
    sl2,
    sl3,
    sl4,
    laps1,
    laps2,
    laps3,
    laps4,
    st1,
    st2,
    st3,
    st4,
    numDrivers,
    setNumDrivers,
    lapSelect1,
    lapSelect2,
    lapSelect3,
    lapSelect4,
    resetDriverSelections,
  } = useComparisonSelectors({
    initialURL,
    defaultYear: DEFAULT_YEAR,
    supportedSessionNames: SUPPORTED_SESSION_NAMES,
    restoreStateRef,
    restoreFlagsRef,
    presetActiveRef,
    clearReplayData,
    clearReplaySlot,
    setLoading,
    setErr,
    setSceneErr,
  });
  const {
    h2hData,
    h2hProgress,
    dashData,
    cancelAuxLoading,
    resetAuxiliaryData,
    loadH2H,
    loadSeasonDash,
  } = useAuxiliaryData({
    year,
    driver1Number: d1,
    driver2Number: d2,
    mob,
    embed,
    setShowH2H,
    setShowDash,
  });
  useEffect(() => {
    if (is2DView) setSceneErr("");
  }, [is2DView, setSceneErr]);

  // ─── Derived ───
  const di1 = drvs.find((x) => x.driver_number === d1), di2 = drvs.find((x) => x.driver_number === d2);
  const di3 = drvs.find((x) => x.driver_number === d3), di4 = drvs.find((x) => x.driver_number === d4);
  const co1 = getDriverColor(di1, "#4488ff"), co2 = getDriverColor(di2, "#ff4488");
  const co3 = getDriverColor(di3, "#44cc44"), co4 = getDriverColor(di4, "#ffaa00");
  const li1 = laps1.find((l) => l.lap_number === sl1), li2 = laps2.find((l) => l.lap_number === sl2);
  const li3 = laps3.find((l) => l.lap_number === sl3), li4 = laps4.find((l) => l.lap_number === sl4);
  const delta = li1?.lap_duration && li2?.lap_duration ? li1.lap_duration - li2.lap_duration : null;
  const tire1 = getCompoundForLap(st1, sl1);
  const tire2 = getCompoundForLap(st2, sl2);
  const tire3 = getCompoundForLap(st3, sl3);
  const tire4 = getCompoundForLap(st4, sl4);
  const ms = mob ? 200 : 400;
  const s1 = useMemo(() => ds(tel1?.map((t) => t.speed || 0), ms), [tel1, ms]); const s2 = useMemo(() => ds(tel2?.map((t) => t.speed || 0), ms), [tel2, ms]);
  const s3 = useMemo(() => ds(tel3?.map((t) => t.speed || 0), ms), [tel3, ms]); const s4 = useMemo(() => ds(tel4?.map((t) => t.speed || 0), ms), [tel4, ms]);
  const t1 = useMemo(() => ds(tel1?.map((t) => t.throttle || 0), ms), [tel1, ms]); const t2 = useMemo(() => ds(tel2?.map((t) => t.throttle || 0), ms), [tel2, ms]);
  const t3 = useMemo(() => ds(tel3?.map((t) => t.throttle || 0), ms), [tel3, ms]); const t4 = useMemo(() => ds(tel4?.map((t) => t.throttle || 0), ms), [tel4, ms]);
  const b1 = useMemo(() => ds(tel1?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel1, ms]); const b2 = useMemo(() => ds(tel2?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel2, ms]);
  const b3 = useMemo(() => ds(tel3?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel3, ms]); const b4 = useMemo(() => ds(tel4?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel4, ms]);
  const isSceneVisible = !is2DView && (!(mob || embed) || mobTab === "3d");
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
  // Memoized — excludes live ct* so it stays stable between prog ticks
  const allDrivers = useMemo(() => [
    { di: di1, co: co1, li: li1, tire: tire1, tel: tel1, s: s1, t: t1, b: b1, st: st1, laps: laps1, sl: sl1 },
    { di: di2, co: co2, li: li2, tire: tire2, tel: tel2, s: s2, t: t2, b: b2, st: st2, laps: laps2, sl: sl2 },
    ...(numDrivers >= 3 && di3 ? [{ di: di3, co: co3, li: li3, tire: tire3, tel: tel3, s: s3, t: t3, b: b3, st: st3, laps: laps3, sl: sl3 }] : []),
    ...(numDrivers >= 4 && di4 ? [{ di: di4, co: co4, li: li4, tire: tire4, tel: tel4, s: s4, t: t4, b: b4, st: st4, laps: laps4, sl: sl4 }] : []),
  ].filter((d) => d.di), [di1, co1, li1, tire1, tel1, s1, t1, b1, st1, laps1, sl1, di2, co2, li2, tire2, tel2, s2, t2, b2, st2, laps2, sl2, numDrivers, di3, co3, li3, laps3, sl3, tire3, tel3, s3, t3, b3, st3, di4, co4, li4, laps4, sl4, tire4, tel4, s4, t4, b4, st4]);

  const shareURLState = useMemo(() => ({
    year,
    mk: selMt?.meeting_key,
    sk: selSe?.session_key,
    d1,
    d2,
    d3: numDrivers >= 3 ? d3 : null,
    d4: numDrivers >= 4 ? d4 : null,
    l1: sl1,
    l2: sl2,
    l3: numDrivers >= 3 ? sl3 : null,
    l4: numDrivers >= 4 ? sl4 : null,
    numDrivers,
    trackView,
    cam,
    vizMode,
    theme: isDark ? "dark" : "light",
    speed: spd,
    loop,
    tab: (mob || embed) ? mobTab : (showTel ? "telemetry" : "3d"),
  }), [year, selMt, selSe, d1, d2, d3, d4, sl1, sl2, sl3, sl4, numDrivers, trackView, cam, vizMode, isDark, spd, loop, mob, embed, mobTab, showTel]);
  const shareUrl = useMemo(() => (
    selMt?.meeting_key && selSe?.session_key ? encodeURL(shareURLState) : ""
  ), [selMt, selSe, shareURLState]);
  const shareTitle = useMemo(
    () => (selMt ? `${APP_NAME} | ${formatMeetingLabel(selMt.meeting_name)} ${year}` : APP_NAME),
    [selMt, year]
  );
  const shareComparison = useMemo(
    () => ({
      driver1Label: di1?.name_acronym,
      driver2Label: di2?.name_acronym,
      meetingName: selMt?.meeting_name,
      meetingLabel: formatMeetingLabel(selMt?.meeting_name || ""),
      year,
      delta,
      lap1Duration: li1?.lap_duration,
      lap2Duration: li2?.lap_duration,
      color1: co1,
      color2: co2,
    }),
    [di1, di2, selMt, year, delta, li1, li2, co1, co2]
  );

  useEffect(() => {
    const title = selMt && di1 && di2
      ? `${APP_NAME} | ${di1.name_acronym} εναντίον ${di2.name_acronym} • ${formatMeetingLabel(selMt.meeting_name)} ${year}`
      : `${APP_NAME} | ${APP_SUBTITLE}`;
    const description = selMt && di1 && di2 && selSe
      ? `Σύγκριση ${di1.name_acronym} εναντίον ${di2.name_acronym} στο ${formatMeetingLabel(selMt.meeting_name)} ${year}, με ${formatSessionLabel(selSe.session_name).toLowerCase()} και ζωντανή τηλεμετρία.`
      : APP_DESCRIPTION;
    const canonicalUrl = shareUrl || "https://f1stories.gr/ghostcar/";
    document.title = title;
    document.documentElement.lang = "el";
    const setMeta = (selector, content) => {
      const node = document.querySelector(selector);
      if (node) node.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [year, selMt, selSe, di1, di2, shareUrl]);

  useEffect(() => () => {
    cancelCountdown();
    if (showreelTimerRef.current) window.clearTimeout(showreelTimerRef.current);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    if (highlightConfigTimerRef.current) window.clearTimeout(highlightConfigTimerRef.current);
  }, [cancelCountdown]);

  const clearShowreelTimer = useCallback(() => {
    if (!showreelTimerRef.current) return;
    window.clearTimeout(showreelTimerRef.current);
    showreelTimerRef.current = null;
  }, []);

  const stopShowreelRuntime = useCallback((abortLoad = false) => {
    showreelRef.current = false;
    clearShowreelTimer();
    if (abortLoad) cancelLoading();
    setPlay(false);
  }, [cancelLoading, clearShowreelTimer, setPlay]);

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

  const {
    gallery,
    shareMsg,
    shareDialogUrl,
    shareDialogNotice,
    clearShareDialog,
    copyShareDialogUrl,
    share,
    saveToGallery,
    generateSocialCard,
    takeScreenshot,
    clearGallery,
  } = useShareAndGallery({
    shareUrl,
    shareTitle,
    canShare: Boolean(selMt && selSe && shareUrl),
    canNativeShare: mob && !embed,
    comparison: shareComparison,
    screenshotRef: cRef,
    is2DView,
    mob,
    pushToast,
  });

  const closeTour = useCallback(() => {
    try { localStorage.setItem("f1s-toured", "1"); } catch {}
    setShowTour(false);
  }, []);

  const restoreComparisonFromUrl = useCallback((rawUrl) => {
    const nextState = decodeURL(rawUrl);
    if (!nextState?.year || !nextState?.mk) {
      pushToast("Αυτή η αποθηκευμένη σύγκριση δεν μπορεί να επανέλθει. Ο σύνδεσμος ίσως είναι παλιός.", "info");
      return;
    }
    cancelLoading();
    cancelAuxLoading();
    cancelCountdown();
    stopShowreelRuntime(false);
    presetActiveRef.current = false;
    autoLoadRef.current = false;
    setShowreel(false);
    setErr("");
    setSceneErr("");
    resetAuxiliaryViews();
    resetAuxiliaryData();
    clearShareDialog();
    setThemeMode(nextState.theme);
    setTrackViewFromValue(nextState.trackView);
    const nextCam = normalizeCamMode(nextState.cam);
    if (nextCam) setCam(nextCam);
    const nextVizMode = normalizeVizMode(nextState.vizMode);
    if (nextVizMode) setVizMode(nextVizMode);
    setSpeedFromValue(nextState.speed);
    if (nextState.loop != null) setLoopFromValue(nextState.loop);
    restoreAuxiliaryTab(nextState.tab);
    restoreStateRef.current = nextState;
    restoreFlagsRef.current = createRestoreFlags();
    urlLoaded.current = true;
    resetForUrlRestore(nextState);
    const nextUrl = encodeURL(nextState);
    window.history.replaceState(null, "", nextUrl.split(window.location.origin)[1]);
    pushToast("Η σύγκριση επανήλθε από τη συλλογή.", "success");
  }, [cancelAuxLoading, cancelCountdown, cancelLoading, clearShareDialog, pushToast, resetAuxiliaryData, resetAuxiliaryViews, resetForUrlRestore, restoreAuxiliaryTab, setErr, setLoopFromValue, setSceneErr, setSpeedFromValue, setThemeMode, setTrackViewFromValue, stopShowreelRuntime]);

  const changeMatchup = useCallback(() => {
    cancelLoading();
    cancelAuxLoading();
    cancelCountdown();
    stopShowreelRuntime(false);
    setShowreel(false);
    clearReplayData();
    setSceneErr("");
    setErr("");
    resetAuxiliaryViews({ resetTelemetry: true, resetTab: mob || embed });
    if (highlightConfigTimerRef.current) window.clearTimeout(highlightConfigTimerRef.current);
    setHighlightConfig(true);
    highlightConfigTimerRef.current = window.setTimeout(() => setHighlightConfig(false), 2200);
    focusConfiguration();
    pushToast("Η μπάρα επιλογών είναι έτοιμη. Διάλεξε νέα σεζόν, πίστα ή σύγκριση οδηγών.", "info");
  }, [cancelAuxLoading, cancelCountdown, cancelLoading, clearReplayData, embed, mob, focusConfiguration, pushToast, resetAuxiliaryViews, setErr, setSceneErr, stopShowreelRuntime]);

  const openAuxView = useCallback((mode) => {
    if (mode === "telemetry" && !embed && !mob) {
      setShowTel(true);
      setShowTelOverlay(true);
      pushToast("Άνοιξαν τα γραφήματα τηλεμετρίας.", "info");
      return;
    }
    if (embed || mob) {
      if (mode !== "h2h" && mode !== "season") cancelAuxLoading();
      setMobTab(mode);
      return;
    }
    if (mode === "stats") setShowStats(true);
    if (mode === "laps") setShowLaps(true);
  }, [cancelAuxLoading, embed, mob, pushToast, setMobTab, setShowLaps, setShowStats, setShowTel, setShowTelOverlay]);

  // ─── Actions ───
  const loadData = useCallback(async ({ preserveError = false } = {}) => {
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return;
    cancelCountdown();
    if (showreelRef.current) {
      stopShowreelRuntime(false);
      setShowreel(false);
    }
    await loadReplayComparison({
      sessionKey: selSe.session_key,
      meeting: selMt,
      drivers: [
        { slot: 1, driverNumber: d1, lap: findLapByNumber(laps1, sl1) },
        { slot: 2, driverNumber: d2, lap: findLapByNumber(laps2, sl2) },
        ...(numDrivers >= 3 && d3 && sl3
          ? [{ slot: 3, driverNumber: d3, lap: findLapByNumber(laps3, sl3) }]
          : []),
        ...(numDrivers >= 4 && d4 && sl4
          ? [{ slot: 4, driverNumber: d4, lap: findLapByNumber(laps4, sl4) }]
          : []),
      ],
      preserveError,
    });
  }, [cancelCountdown, selSe, selMt, d1, d2, d3, d4, sl1, sl2, sl3, sl4, laps1, laps2, laps3, laps4, numDrivers, stopShowreelRuntime, loadReplayComparison]);

  // Auto-load when URL params are fully restored (shared links + embed)
  useEffect(() => {
    if (!urlLoaded.current || autoLoadRef.current) return;
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return;
    autoLoadRef.current = true;
    const timer = window.setTimeout(() => {
      loadData({ preserveError: true });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [selSe, d1, d2, sl1, sl2, loadData]);

  const loadPreset = usePresetLoader({
    unavailablePresetYears: UNAVAILABLE_PRESET_YEARS,
    supportedSessionNames: SUPPORTED_SESSION_NAMES,
    presetActiveRef,
    showreelRef,
    cancelCountdown,
    stopShowreelRuntime,
    setShowreel,
    beginCancelableLoad,
    clearLoadIndicator,
    finishCancelableLoad,
    isActiveLoad,
    loadReplayForActiveLoad,
    setErr,
    setLdPct,
    cancelAuxLoading,
    resetAuxiliaryData,
    resetDriverSelections,
    applyPresetSelectorData,
    setShowH2H,
    setShowDash,
    setMobTab,
    setShowPresets,
    setShowMobMenu,
  });

  // ─── Scene — pass progRef for direct 60fps reads ───
  const selectComparisonTab = useCallback((tabId) => {
    if (tabId !== "h2h" && tabId !== "season") cancelAuxLoading();
    setMobTab(tabId);
    if (tabId === "h2h" && !h2hData) loadH2H();
    if (tabId === "season" && !dashData) loadSeasonDash();
    if (tabId === "3d") window.setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
  }, [cancelAuxLoading, dashData, h2hData, loadH2H, loadSeasonDash, setMobTab]);
  const closeH2HModal = useCallback(() => {
    cancelAuxLoading();
    setShowH2H(false);
  }, [cancelAuxLoading, setShowH2H]);
  const closeDashModal = useCallback(() => {
    cancelAuxLoading();
    setShowDash(false);
  }, [cancelAuxLoading, setShowDash]);
  const closeInlineTab = useCallback(() => selectComparisonTab("3d"), [selectComparisonTab]);
  const toggleShowreel = useCallback(() => {
    if (showreel) {
      stopShowreelRuntime(true);
      setShowreel(false);
      return;
    }
    setShowreel(true);
  }, [showreel, stopShowreelRuntime]);
  const lapModalDrivers = useMemo(() => ([
    { lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: (lapNumber) => selectLapSlot(1, lapNumber) },
    { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: (lapNumber) => selectLapSlot(2, lapNumber) },
  ]), [di1, co1, laps1, sl1, selectLapSlot, di2, co2, laps2, sl2]);
  const comparisonSelectorSlots = useMemo(
    () => [
      {
        slot: 1,
        label: "Οδηγός 1",
        color: co1,
        driver: di1,
        driverNumber: d1,
        lapNumber: sl1,
        selectedLap: li1,
        lapSelect: lapSelect1,
        lapLoading: selectorSlots[0]?.lapLoading,
        lapsLoaded: selectorSlots[0]?.lapsLoaded,
      },
      {
        slot: 2,
        label: "Οδηγός 2",
        color: co2,
        driver: di2,
        driverNumber: d2,
        lapNumber: sl2,
        selectedLap: li2,
        lapSelect: lapSelect2,
        lapLoading: selectorSlots[1]?.lapLoading,
        lapsLoaded: selectorSlots[1]?.lapsLoaded,
      },
      {
        slot: 3,
        label: "Οδηγός 3",
        color: co3,
        driver: di3,
        driverNumber: d3,
        lapNumber: sl3,
        selectedLap: li3,
        lapSelect: lapSelect3,
        lapLoading: selectorSlots[2]?.lapLoading,
        lapsLoaded: selectorSlots[2]?.lapsLoaded,
      },
      {
        slot: 4,
        label: "Οδηγός 4",
        color: co4,
        driver: di4,
        driverNumber: d4,
        lapNumber: sl4,
        selectedLap: li4,
        lapSelect: lapSelect4,
        lapLoading: selectorSlots[3]?.lapLoading,
        lapsLoaded: selectorSlots[3]?.lapsLoaded,
      },
    ],
    [
      co1,
      di1,
      d1,
      sl1,
      li1,
      lapSelect1,
      co2,
      di2,
      d2,
      sl2,
      li2,
      lapSelect2,
      co3,
      di3,
      d3,
      sl3,
      li3,
      lapSelect3,
      co4,
      di4,
      d4,
      sl4,
      li4,
      lapSelect4,
      selectorSlots,
    ]
  );
  const canTouchScrubReplay = mob && Boolean(tp) && is2DView;
  const startReplay = useCallback(() => startWithCountdown(Boolean(tp)), [startWithCountdown, tp]);

  // ─── Modal backdrop ───
  const anyModal = anyAuxiliaryModal || !!shareDialogUrl;
  const closeAll = useCallback(() => {
    cancelAuxLoading();
    closeAuxiliaryModals();
    clearShareDialog();
  }, [cancelAuxLoading, clearShareDialog, closeAuxiliaryModals]);

  // ─── Keyboard ───
  const lastLeftRef = useRef(0);
  useEffect(() => {
    const h = (e) => {
      if (e.code === "Escape") {
        if (showMobMenu) { setShowMobMenu(false); return; }
        if (showTour) { closeTour(); return; }
        if (anyModal) { closeAll(); return; }
        if ((mob || embed) && mobTab !== "3d") { setMobTab("3d"); return; }
        if (!mob && !embed && showTel) { setShowTel(false); return; }
        return;
      }
      if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "?" || (e.shiftKey && e.code === "Slash")) { setShowKeys((k) => !k); return; }
      if (e.code === "Space") { e.preventDefault(); if (tp) startReplay(); }
      if (e.code === "KeyR") { resetPlayback(); }
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
  }, [
    tp,
    startReplay,
    resetPlayback,
    showMobMenu,
    showTour,
    closeTour,
    anyModal,
    closeAll,
    mob,
    embed,
    mobTab,
    showTel,
    toggleTheme,
    setTrackViewMode,
    is2DView,
    setLoop,
    setProg,
    setMobTab,
    setShowKeys,
    setShowMobMenu,
    setShowTel,
  ]);

  // Showreel
  useEffect(() => {
    clearShowreelTimer();
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
      await loadPreset(playablePresets[idx], { preserveShowreel: true });
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
      stopShowreelRuntime(true);
    };
  }, [clearShowreelTimer, loadPreset, playablePresets, setPlay, showreel, stopShowreelRuntime]);

  // ─── RENDER ───
  return (
    <AppShell themeValue={themeValue} F1={F1} embed={embed} mob={mob}>
      <ModalLayer
        mob={mob}
        embed={embed}
        F1={F1}
        showBackdrop={anyModal}
        onCloseAll={closeAll}
        flags={{
          showPresets,
          showTelemetryOverlay: showTelOverlay,
          showStats,
          showLaps,
          showKeys,
          showH2H,
          showDash,
          showGallery,
          showEmbed,
          showTour,
        }}
        handlers={{
          onClosePresets: closePresetsModal,
          onLoadPreset: loadPreset,
          onCloseTelemetryOverlay: closeTelemetryOverlay,
          onCloseStats: closeStatsModal,
          onCloseLaps: closeLapsModal,
          onCloseKeys: closeKeysModal,
          onCloseH2H: closeH2HModal,
          onCloseDash: closeDashModal,
          onCloseGallery: closeGalleryModal,
          onClearGallery: clearGallery,
          onSelectGallery: restoreComparisonFromUrl,
          onCloseEmbed: closeEmbedModal,
          onCloseTour: closeTour,
        }}
        data={{
          unavailablePresetYears: UNAVAILABLE_PRESET_YEARS,
          tp,
          telemetryPanelProps: {
            mob,
            tp,
            prog,
            allDrivers,
            numDrivers,
            di1,
            di2,
            co1,
            co2,
            li1,
            li2,
            s1,
            s2,
            laps1,
            st1,
            sl1,
          },
          allDrivers,
          lapModalDrivers,
          year,
          di1,
          di2,
          co1,
          co2,
          h2hData,
          h2hProgress,
          dashData,
          gallery,
          shareState: shareURLState,
        }}
        shareDialog={{
          url: shareDialogUrl,
          notice: shareDialogNotice,
          onClose: clearShareDialog,
          onCopy: copyShareDialogUrl,
        }}
      />

      {/* Countdown */}
      <CountdownOverlay F1={F1} countdown={countdown} />

      {/* Header */}
      {!embed && (
        <HeaderToolbar
          mob={mob}
          F1={F1}
          isDark={isDark}
          logoSrc={LOGO_SRC}
          meetingShortLabel={selMt ? formatMeetingShortLabel(selMt.meeting_name) : ""}
          year={year}
          hasSession={Boolean(selSe)}
          hasReplay={Boolean(tp)}
          hasPrimaryDrivers={Boolean(d1 && d2)}
          shareMsg={shareMsg}
          showMobileMenu={showMobMenu}
          showreel={showreel}
          onOpenPresets={() => setShowPresets(true)}
          onShare={share}
          onSaveToGallery={saveToGallery}
          onToggleTheme={toggleTheme}
          onToggleMobileMenu={() => setShowMobMenu((value) => !value)}
          onOpenStats={() => setShowStats(true)}
          onOpenLaps={() => setShowLaps(true)}
          onLoadH2H={loadH2H}
          onLoadSeasonDash={loadSeasonDash}
          onOpenGallery={() => setShowGallery(true)}
          onGenerateSocialCard={generateSocialCard}
          onOpenEmbed={() => setShowEmbed(true)}
          onTakeScreenshot={takeScreenshot}
          onToggleShowreel={toggleShowreel}
          onOpenKeys={() => setShowKeys(true)}
        />
      )}

      {/* Mobile menu panel */}
      {mob && showMobMenu && !embed && (
        <MobileToolMenu
          F1={F1}
          isDark={isDark}
          hasReplay={Boolean(tp)}
          hasPrimaryDrivers={Boolean(d1 && d2)}
          hasSession={Boolean(selSe)}
          onClose={() => setShowMobMenu(false)}
          onSelectTab={selectComparisonTab}
          onOpenGallery={() => setShowGallery(true)}
          onGenerateSocialCard={generateSocialCard}
          onOpenEmbed={() => setShowEmbed(true)}
          onTakeScreenshot={takeScreenshot}
        />
      )}

      {/* Selectors */}
      {!embed && (
        <ComparisonSelectors
          containerRef={selectorsRef}
          yearSelectRef={yearSelectRef}
          mob={mob}
          F1={F1}
          highlightConfig={highlightConfig}
          availableYears={AVAILABLE_YEARS}
          year={year}
          meetings={mts}
          selectedMeeting={selMt}
          sessions={sess}
          selectedSession={selSe}
          drivers={drvs}
          slots={comparisonSelectorSlots}
          numDrivers={numDrivers}
          loading={loading}
          noMeetings={noMeetings}
          formatMeetingLabel={formatMeetingLabel}
          onYearChange={setYear}
          onSelectMeeting={selectMeeting}
          onSelectSession={selectSession}
          onSelectDriver={selectDriverSlot}
          onSelectLap={selectLapSlot}
          onAddDriver={() => setNumDrivers((count) => Math.min(4, count + 1))}
          onRemoveDriver={() => setNumDrivers((count) => Math.max(2, count - 1))}
          onLoadData={loadData}
        />
      )}

      {!embed && (
        <ErrorBanner
          F1={F1}
          message={alertErr}
          onClose={() => {
            setErr("");
            setSceneErr("");
          }}
        />
      )}
      {!embed && (
        <LoadingStatusBar F1={F1} message={loading} progress={ldPct} canCancel={canCancelLoad} onCancel={cancelLoading} />
      )}
      {tp && ((mob && !embed) || embed) && (
        <InlineTabBar F1={F1} mob={mob} embed={embed} activeTab={mobTab} onSelectTab={selectComparisonTab} />
      )}

      {/* Main area */}
      <div style={{ display: "flex", flexDirection: mob || embed ? "column" : "row", flex: (embed || mob) ? 1 : undefined, minHeight: (embed || mob) ? 0 : undefined, height: (embed || mob) ? undefined : `calc(100vh - ${tp ? 175 : 130}px)`, overflow: "hidden" }}>
        <ReplayStage
          mob={mob}
          embed={embed}
          F1={F1}
          logoSrc={LOGO_SRC}
          appName={APP_NAME}
          appSubtitle={APP_SUBTITLE}
          containerRef={cRef}
          tp={tp}
          mobTab={mobTab}
          is2DView={is2DView}
          isSceneVisible={isSceneVisible}
          sceneError={effectiveSceneErr}
          trackView={trackView}
          onTrackViewMode={setTrackViewMode}
          cam={cam}
          onCameraModeChange={setCam}
          vizMode={vizMode}
          onVizModeChange={setVizMode}
          loc1={loc1}
          loc2={loc2}
          loc3={loc3}
          loc4={loc4}
          prog={prog}
          progRef={progRef}
          playRef={playRef}
          speedRef={spdRef}
          co1={co1}
          co2={co2}
          co3={co3}
          co4={co4}
          di1={di1}
          di2={di2}
          di3={di3}
          di4={di4}
          li1={li1}
          li2={li2}
          tel1={tel1}
          replayDrivers={replayDrivers}
          replayDriverCards={replayDriverCards}
          delta={delta}
          circuitFlip={circuitFlip}
          circuitTurns={circuitTurns}
          isDark={isDark}
          loading={loading}
          loadingProgress={ldPct}
          canCancelLoad={canCancelLoad}
          alertErr={alertErr}
          onCancelLoad={cancelLoading}
          onSceneError={setSceneErr}
          onReplayTouchStart={handleReplayTouchStart}
          onReplayTouchEnd={handleReplayTouchEnd}
          onReplayTouchCancel={handleReplayTouchCancel}
          canTouchScrubReplay={canTouchScrubReplay}
          onOpenAuxView={openAuxView}
          onChangeMatchup={changeMatchup}
          onOpenPresets={() => setShowPresets(true)}
        />

        <AuxiliaryContentArea
          mob={mob}
          embed={embed}
          F1={F1}
          tp={tp}
          activeTab={mobTab}
          showTelemetry={showTel}
          sceneError={effectiveSceneErr}
          telemetryProps={{
            tp,
            prog,
            allDrivers,
            numDrivers,
            di1,
            di2,
            co1,
            co2,
            li1,
            li2,
            s1,
            s2,
            laps1,
            st1,
            sl1,
          }}
          inlineTabProps={{
            allDrivers,
            lapModalDrivers,
            year,
            di1,
            di2,
            co1,
            co2,
            h2hData,
            h2hProgress,
            dashData,
            onClose: closeInlineTab,
          }}
        />
      </div>

      {/* Playback bar */}
      {tp && (
        <PlaybackBar
          mob={mob}
          embed={embed}
          F1={F1}
          play={play}
          loop={loop}
          progress={prog}
          speed={spd}
          playbackSpeeds={PLAYBACK_SPEEDS}
          drivers={allDrivers}
          showTelemetry={showTel}
          shareMsg={shareMsg}
          shareUrl={shareUrl}
          onReset={resetPlayback}
          onStart={startReplay}
          onToggleLoop={() => setLoop((value) => !value)}
          onProgressChange={(value) => {
            progRef.current = value;
            setProg(value);
          }}
          onSetup={changeMatchup}
          onSpeedChange={setSpd}
          onToggleTelemetry={() => setShowTel((value) => !value)}
          onShare={share}
        />
      )}

      {/* Footer */}
      {!embed && <AppFooter mob={mob} F1={F1} logoSrc={LOGO_SRC} />}
      <Toast mob={mob} F1={F1} toast={toast} hasPlaybackBar={Boolean(tp)} />
    </AppShell>
  );
}
