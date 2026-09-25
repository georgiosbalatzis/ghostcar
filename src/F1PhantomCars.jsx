import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CAM_MODES } from "./constants.js";
import { findLapByNumber } from "./domain/laps.js";
import { decodeURL, encodeURL, useIsMobile } from "./helpers.js";
import Dialog from "./components/ui/Dialog.jsx";
import Icon, { IconButton } from "./components/ui/Icon.jsx";
import { BuilderHeader, WorkspaceHeader } from "./app/AppHeader.jsx";
import useDocumentMeta from "./app/useDocumentMeta.js";
import useKeyboardShortcuts from "./app/useKeyboardShortcuts.js";
import useShowreel from "./app/useShowreel.js";
import AnalysisRail from "./features/analysis/AnalysisRail.jsx";
import { normalizeRailTab } from "./features/analysis/railTabs.js";
import ComparisonBuilder from "./features/comparison/ComparisonBuilder.jsx";
import { FeaturedComparisons, FeaturedDialog, getPlayablePresets } from "./features/comparison/FeaturedComparisons.jsx";
import SeasonDialog from "./features/insights/SeasonDialog.jsx";
import PlaybackBar from "./features/replay/PlaybackBar.jsx";
import ReplayStage from "./features/replay/ReplayStage.jsx";
import { buildReplayModel } from "./features/replay/replayModel.js";
import { EmbedDialog, LinkDialog, SavedDialog, ShortcutsDialog } from "./features/sharing/SharingDialogs.jsx";
import useComparisonSelectors from "./hooks/useComparisonSelectors.js";
import usePlaybackController, { PLAYBACK_SPEEDS } from "./hooks/usePlaybackController.js";
import usePresetLoader from "./hooks/usePresetLoader.js";
import useReplayLoader from "./hooks/useReplayLoader.js";
import useSeasonComparison from "./hooks/useSeasonComparison.js";
import useShareAndGallery from "./hooks/useShareAndGallery.js";
import useThemePreference from "./hooks/useThemePreference.js";
import useTrackViewPreference from "./hooks/useTrackViewPreference.js";

const AVAILABLE_YEARS = [2026, 2025, 2024, 2023];
const UNAVAILABLE_PRESET_YEARS = [2026];
const DEFAULT_YEAR = 2025;
const VIZ_MODES = ["normal", "heatmap", "brake"];
const SUPPORTED_SESSION_NAMES = [
  "Qualifying",
  "Race",
  "Sprint",
  "Sprint Qualifying",
  "Sprint Shootout",
  "Practice 1",
  "Practice 2",
  "Practice 3",
];
const PLAYABLE_PRESETS = getPlayablePresets(UNAVAILABLE_PRESET_YEARS);

function createRestoreFlags() {
  return { meeting: false, session: false, drivers: false, lap1: false, lap2: false, lap3: false, lap4: false };
}

function pick(list, value) {
  return list.includes(value) ? value : null;
}

function useToast() {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const push = useCallback((message) => {
    window.clearTimeout(timerRef.current);
    setToast({ message, id: Date.now() });
    timerRef.current = window.setTimeout(() => setToast(null), 2800);
  }, []);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);
  return [toast, push];
}

// Raw transport errors ("API 500", "Failed to fetch") become a sentence a reader can act on.
function describeError(message) {
  if (/^API \d+|fetch|network/i.test(message)) {
    return "Το OpenF1 δεν απαντά αυτή τη στιγμή. Οι επιλογές σου παραμένουν· δοκίμασε ξανά σε λίγο.";
  }
  return message;
}

function Notice({ message, onClose }) {
  return (
    <div className="notice" role="alert">
      <p>{describeError(message)}</p>
      <IconButton icon="close" label="Απόκρυψη μηνύματος" onClick={onClose} />
    </div>
  );
}

// Orchestration only: data hooks, URL restore, load lifecycle and which surface is showing.
// View state is two values: the open dialog (one at a time) and the analysis rail tab.
export default function App({ embed }) {
  const mob = useIsMobile();
  const initialURL = useMemo(() => decodeURL(), []);
  const { isDark, setThemeMode, toggleTheme } = useThemePreference(initialURL.theme);
  const { trackView, setTrackViewMode, setTrackViewFromValue, is2DView } = useTrackViewPreference(initialURL.trackView);
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
    setSpeedFromValue,
    setLoopFromValue,
    resetPlayback,
    togglePlay,
    handleReplayTouchStart,
    handleReplayTouchEnd,
    handleReplayTouchCancel,
  } = usePlaybackController({ initialSpeed: initialURL.speed, initialLoop: initialURL.loop, trackView });

  const [cam, setCam] = useState(() => pick(CAM_MODES, initialURL.cam) ?? "orbit");
  const [vizMode, setVizMode] = useState(() => pick(VIZ_MODES, initialURL.vizMode) ?? "normal");
  const [railTab, setRailTab] = useState(() => normalizeRailTab(initialURL.tab));
  const [dialog, setDialog] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [toast, pushToast] = useToast();
  const stageRef = useRef(null);
  const urlLoaded = useRef(Boolean(initialURL.year && initialURL.mk));
  const autoLoadRef = useRef(false);
  const presetActiveRef = useRef(false);
  const restoreStateRef = useRef(initialURL);
  const restoreFlagsRef = useRef(createRestoreFlags());
  const loadPresetRef = useRef(null);
  const closeDialog = useCallback(() => setDialog(null), []);

  const handleCancelLoad = useCallback(() => {
    presetActiveRef.current = false;
  }, []);
  const {
    replay,
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

  const selection = useComparisonSelectors({
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
  const activeSlots = useMemo(
    () => selection.slots.slice(0, selection.numDrivers),
    [selection.slots, selection.numDrivers]
  );

  const model = useMemo(() => buildReplayModel(replay), [replay]);
  const [driverA, driverB] = model?.drivers || [];
  const season = useSeasonComparison({
    year: model?.year,
    driver1Number: driverA?.driverNumber,
    driver2Number: driverB?.driverNumber,
  });
  const showreel = useShowreel({ presets: PLAYABLE_PRESETS, loadPresetRef, setPlay, cancelLoading });

  // 3D failure: continue in 2D (not persisted) instead of showing an error panel.
  useEffect(() => {
    if (is2DView) setSceneErr("");
  }, [is2DView, setSceneErr]);
  useEffect(() => {
    if (!sceneErr || is2DView) return;
    setTrackViewMode("2d", { persist: false });
    pushToast("Το 3D δεν είναι διαθέσιμο σε αυτή τη συσκευή. Συνέχεια σε 2D.");
  }, [is2DView, pushToast, sceneErr, setTrackViewMode]);

  // ─── Loading a comparison ───
  const loadData = useCallback(
    async ({ preserveError = false } = {}) => {
      const { session, meeting, drivers, year } = selection;
      const requested = activeSlots.filter((slot, index) => index < 2 || (slot.driverNumber && slot.lapNumber));
      if (!session || requested.slice(0, 2).some((slot) => !slot.driverNumber || !slot.lapNumber)) return;
      if (showreel.activeRef.current) showreel.stop();
      const withLaps = requested.map((slot) => ({ ...slot, lap: findLapByNumber(slot.laps, slot.lapNumber) }));
      await loadReplayComparison({
        sessionKey: session.session_key,
        meeting,
        drivers: withLaps.map((slot) => ({ slot: slot.slot, driverNumber: slot.driverNumber, lap: slot.lap })),
        preserveError,
        meta: {
          year,
          meeting,
          session,
          slots: withLaps.map((slot) => ({
            slot: slot.slot,
            driver: drivers.find((driver) => driver.driver_number === slot.driverNumber),
            lap: slot.lap,
            stints: slot.stints,
          })),
        },
      });
    },
    [activeSlots, loadReplayComparison, selection, showreel]
  );
  const loadDataRef = useRef(loadData);
  loadDataRef.current = loadData;

  // Shared links and embeds load automatically once the ordered restore has resolved every active slot.
  const restoreReady =
    Boolean(selection.session) &&
    activeSlots.every(
      (slot, index) =>
        (slot.driverNumber && slot.lapNumber) ||
        (index >= 2 && (!slot.driverNumber || (slot.lapsLoaded && !slot.lapSelect.options.length)))
    );
  useEffect(() => {
    if (!urlLoaded.current || autoLoadRef.current || !restoreReady) return undefined;
    const timer = window.setTimeout(() => {
      autoLoadRef.current = true;
      loadDataRef.current({ preserveError: true });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [restoreReady]);

  const cancelSeason = season.cancel;
  const onPresetStart = useCallback(() => {
    setDialog(null);
    cancelSeason();
  }, [cancelSeason]);
  const loadPreset = usePresetLoader({
    unavailablePresetYears: UNAVAILABLE_PRESET_YEARS,
    supportedSessionNames: SUPPORTED_SESSION_NAMES,
    presetActiveRef,
    showreelRef: showreel.activeRef,
    stopShowreelRuntime: showreel.stopRuntime,
    setShowreel: showreel.setActive,
    beginCancelableLoad,
    clearLoadIndicator,
    finishCancelableLoad,
    isActiveLoad,
    loadReplayForActiveLoad,
    setErr,
    setLdPct,
    resetDriverSelections: selection.resetDriverSelections,
    applyPresetSelectorData: selection.applyPresetSelectorData,
    onStart: onPresetStart,
  });
  loadPresetRef.current = loadPreset;

  // ─── Loaded vs. selected ───
  const loadedLaps = useMemo(
    () => Object.fromEntries((replay?.meta.slots || []).map((slot) => [slot.slot, slot.lap?.lap_number])),
    [replay]
  );
  const isDirty =
    Boolean(replay) &&
    (selection.session?.session_key !== replay.meta.session?.session_key ||
      activeSlots.length !== replay.meta.slots.length ||
      activeSlots.some(
        (slot, index) =>
          slot.driverNumber !== replay.meta.slots[index]?.driver?.driver_number ||
          slot.lapNumber !== replay.meta.slots[index]?.lap?.lap_number
      ));

  // If an edit clears the replay (new event or session), fall back to the page builder and keep focus.
  useEffect(() => {
    if (replay || dialog !== "edit") return;
    const id = document.activeElement?.id?.replace(/^edit-/, "cb-");
    setDialog(null);
    requestAnimationFrame(() => id && document.getElementById(id)?.focus());
  }, [dialog, replay]);

  // ─── Sharing ───
  const shareURLState = useMemo(() => {
    const meta = replay?.meta;
    const slots = meta
      ? meta.slots.map((slot) => ({ d: slot.driver?.driver_number, l: slot.lap?.lap_number }))
      : activeSlots.map((slot) => ({ d: slot.driverNumber, l: slot.lapNumber }));
    return {
      year: meta ? meta.year : selection.year,
      mk: (meta ? meta.meeting : selection.meeting)?.meeting_key,
      sk: (meta ? meta.session : selection.session)?.session_key,
      d1: slots[0]?.d,
      d2: slots[1]?.d,
      d3: slots[2]?.d ?? null,
      d4: slots[3]?.d ?? null,
      l1: slots[0]?.l,
      l2: slots[1]?.l,
      l3: slots[2]?.l ?? null,
      l4: slots[3]?.l ?? null,
      numDrivers: slots.length,
      trackView,
      cam,
      vizMode,
      theme: isDark ? "dark" : "light",
      speed: spd,
      loop,
      tab: railTab === "live" ? null : railTab,
    };
  }, [
    activeSlots,
    cam,
    isDark,
    loop,
    railTab,
    replay,
    selection.meeting,
    selection.session,
    selection.year,
    spd,
    trackView,
    vizMode,
  ]);
  const shareUrl = shareURLState.mk && shareURLState.sk ? encodeURL(shareURLState) : "";
  useDocumentMeta(model, shareUrl);

  const onLinkFallback = useCallback((url) => {
    setLinkUrl(url);
    setDialog("link");
  }, []);
  const comparison = useMemo(
    () =>
      model && {
        drivers: model.drivers,
        meetingName: model.meetingName,
        sessionLabel: model.sessionLabel,
        year: model.year,
        delta: model.delta,
      },
    [model]
  );
  const {
    gallery,
    copyText,
    copyLink,
    saveToGallery,
    removeFromGallery,
    clearGallery,
    generateSocialCard,
    takeScreenshot,
  } = useShareAndGallery({
    shareUrl,
    shareTitle: document.title,
    canNativeShare: mob && !embed,
    comparison,
    screenshotRef: stageRef,
    is2DView,
    mob,
    pushToast,
    onLinkFallback,
  });

  const restoreComparisonFromUrl = useCallback(
    (rawUrl) => {
      const next = decodeURL(rawUrl);
      if (!next?.year || !next?.mk) {
        pushToast("Αυτή η σύγκριση δεν μπορεί να ανοίξει. Ο σύνδεσμος ίσως είναι παλιός.");
        return;
      }
      cancelLoading();
      season.cancel();
      showreel.stop();
      presetActiveRef.current = false;
      autoLoadRef.current = false;
      setErr("");
      setSceneErr("");
      setDialog(null);
      setThemeMode(next.theme);
      setTrackViewFromValue(next.trackView);
      const nextCam = pick(CAM_MODES, next.cam);
      if (nextCam) setCam(nextCam);
      const nextViz = pick(VIZ_MODES, next.vizMode);
      if (nextViz) setVizMode(nextViz);
      setSpeedFromValue(next.speed);
      if (next.loop != null) setLoopFromValue(next.loop);
      setRailTab(normalizeRailTab(next.tab));
      restoreStateRef.current = next;
      restoreFlagsRef.current = createRestoreFlags();
      urlLoaded.current = true;
      selection.resetForUrlRestore(next);
      window.history.replaceState(null, "", encodeURL(next).split(window.location.origin)[1]);
    },
    [
      cancelLoading,
      pushToast,
      season,
      selection,
      setErr,
      setLoopFromValue,
      setSceneErr,
      setSpeedFromValue,
      setThemeMode,
      setTrackViewFromValue,
      showreel,
    ]
  );

  // ─── Header actions and keyboard ───
  const actions = useMemo(
    () => ({
      openDialog: setDialog,
      editComparison: () => setDialog("edit"),
      copyLink,
      saveComparison: saveToGallery,
      takeScreenshot,
      generateSocialCard,
      toggleTheme,
      toggleShowreel: showreel.toggle,
    }),
    [copyLink, generateSocialCard, saveToGallery, showreel.toggle, takeScreenshot, toggleTheme]
  );
  const seasonMenu = useMemo(
    () => (driverA && driverB ? { year: model.year, pair: `${driverA.label}–${driverB.label}` } : null),
    [driverA, driverB, model]
  );

  useKeyboardShortcuts({
    enabled: !dialog,
    handlers: {
      help: () => setDialog("shortcuts"),
      togglePlay: () => replay && togglePlay(),
      reset: resetPlayback,
      toggleTheme,
      toggleTelemetry: () => setRailTab((tab) => (tab === "telemetry" ? "live" : "telemetry")),
      toggleView: () => replay && setTrackViewMode(is2DView ? "3d" : "2d"),
      nextCamera: () => setCam((mode) => CAM_MODES[(CAM_MODES.indexOf(mode) + 1) % CAM_MODES.length]),
      toggleLoop: () => setLoop((value) => !value),
      step: (delta) => setProg((value) => Math.max(0, Math.min(1, value + delta))),
    },
  });

  const touch = useMemo(() => {
    const enabled = mob && is2DView;
    return {
      onStart: (event) => handleReplayTouchStart(event, enabled),
      onEnd: handleReplayTouchEnd,
      onCancel: handleReplayTouchCancel,
    };
  }, [handleReplayTouchCancel, handleReplayTouchEnd, handleReplayTouchStart, is2DView, mob]);

  const applySelection = useCallback(() => loadDataRef.current(), []);
  const compareFromSheet = useCallback(() => {
    setDialog(null);
    loadDataRef.current();
  }, []);

  // ─── Surfaces ───
  const replayLoading = loading && ldPct !== undefined ? loading : "";
  const stage = model && (
    <ReplayStage
      model={model}
      stageRef={stageRef}
      prog={prog}
      progRef={progRef}
      playRef={playRef}
      speedRef={spdRef}
      trackView={trackView}
      onTrackView={setTrackViewMode}
      cam={cam}
      onCam={setCam}
      vizMode={vizMode}
      onVizMode={setVizMode}
      isDark={isDark}
      onSceneError={setSceneErr}
      touch={touch}
      loading={replayLoading}
      loadProgress={ldPct}
      canCancelLoad={canCancelLoad}
      onCancelLoad={cancelLoading}
      embed={embed}
    />
  );
  const transport = model && (
    <PlaybackBar
      play={play}
      loop={loop}
      progress={prog}
      speed={spd}
      speeds={PLAYBACK_SPEEDS}
      onToggle={togglePlay}
      onReset={resetPlayback}
      onLoop={() => setLoop((value) => !value)}
      onSeek={setProg}
      onSpeed={setSpd}
      compact={embed}
    />
  );
  const builderProps = {
    availableYears: AVAILABLE_YEARS,
    selection,
    loading,
    loadProgress: ldPct,
    canCancelLoad,
    onCancelLoad: cancelLoading,
  };
  const notice = err && <Notice message={err} onClose={() => setErr("")} />;

  let surface;
  if (embed) {
    const openUrl = shareUrl.replace(/[?&]embed=1/, "");
    surface = model ? (
      <div className="embed">
        {stage}
        <div className="embed__bar">
          {transport}
          <a className="embed__open" href={openUrl} target="_blank" rel="noopener noreferrer">
            <span>Άνοιγμα στο F1 Stories Ghost Car</span>
            <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    ) : (
      <div className="embed embed--empty" role="status">
        {err ? <p className="embed__error">{err}</p> : <p>{loading || "Φόρτωση σύγκρισης…"}</p>}
      </div>
    );
  } else if (model) {
    surface = (
      <div className="workspace">
        <WorkspaceHeader
          actions={actions}
          isDark={isDark}
          showreel={showreel.active}
          eventLabel={`${model.meetingName} ${model.year}`}
          sessionLabel={model.sessionLabel}
          season={seasonMenu}
        />
        {notice}
        <main className="workspace__main">
          <div className="workspace__player">
            {stage}
            {transport}
          </div>
          <AnalysisRail
            tab={railTab}
            onTab={setRailTab}
            model={model}
            prog={prog}
            onSeek={setProg}
            selection={selection}
            loadedLaps={loadedLaps}
            isDirty={isDirty && !loading}
            onApply={applySelection}
            compact={mob}
          />
        </main>
      </div>
    );
  } else {
    surface = (
      <div className="builder-page">
        <BuilderHeader actions={actions} isDark={isDark} showreel={showreel.active} />
        {notice}
        <main className="builder-page__main">
          <div className="builder-page__intro">
            <h1>Σύγκριση γύρων Formula 1</h1>
            <p>Διάλεξε αγώνα, οδηγούς και γύρους. Η αναπαράσταση δείχνει πού κερδίζεται και πού χάνεται ο χρόνος.</p>
          </div>
          <ComparisonBuilder idPrefix="cb" onCompare={loadData} {...builderProps} />
          <FeaturedComparisons presets={PLAYABLE_PRESETS} onLoad={loadPreset} onShowAll={() => setDialog("featured")} />
        </main>
        <footer className="builder-page__footer">
          Δεδομένα από το OpenF1 · <a href="https://f1stories.gr/">f1stories.gr</a>
        </footer>
      </div>
    );
  }

  return (
    <div className={embed ? "app app--embed" : "app"}>
      {surface}
      {dialog === "edit" && model && (
        <Dialog title="Αλλαγή σύγκρισης" variant="sheet" onClose={closeDialog}>
          <ComparisonBuilder
            idPrefix="edit"
            onCompare={compareFromSheet}
            submitLabel="Φόρτωση σύγκρισης"
            {...builderProps}
          />
        </Dialog>
      )}
      {dialog === "featured" && <FeaturedDialog presets={PLAYABLE_PRESETS} onLoad={loadPreset} onClose={closeDialog} />}
      {dialog === "saved" && (
        <SavedDialog
          gallery={gallery}
          onSelect={restoreComparisonFromUrl}
          onRemove={removeFromGallery}
          onClear={clearGallery}
          onClose={closeDialog}
        />
      )}
      {dialog === "season" && driverA && driverB && (
        <SeasonDialog year={model.year} drivers={model.drivers} season={season} onClose={closeDialog} />
      )}
      {dialog === "embed" && <EmbedDialog shareState={shareURLState} onCopy={copyText} onClose={closeDialog} />}
      {dialog === "link" && <LinkDialog url={linkUrl} onCopy={copyText} onClose={closeDialog} />}
      {dialog === "shortcuts" && <ShortcutsDialog onClose={closeDialog} />}
      <div className="toast-region" role="status" aria-live="polite">
        {toast && (
          <div key={toast.id} className="toast">
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}
