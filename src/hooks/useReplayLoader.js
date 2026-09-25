import { useCallback, useEffect, useRef, useState } from "react";
import { buildReplayGeometry, getReplayDataIssue } from "../domain/replay.js";
import { loadReplayStreams } from "../services/openf1.js";

function isAbortError(error) {
  return error?.name === "AbortError";
}

function formatReplayDataIssue(issue, fallbackMessage) {
  if (issue?.type === "missing-location") {
    return `Δεν υπάρχουν δεδομένα θέσης για τον Οδηγό ${issue.slot}. Δοκίμασε άλλο γύρο ή σκέλος.`;
  }
  if (issue?.type === "insufficient-location") {
    return `Δεν υπάρχουν αρκετά δεδομένα θέσης για τον Οδηγό ${issue.slot}. Δοκίμασε άλλο γύρο ή σκέλος.`;
  }
  if (issue?.type === "missing-telemetry") {
    return `Δεν υπάρχουν δεδομένα τηλεμετρίας για τον Οδηγό ${issue.slot}. Δοκίμασε άλλο γύρο ή σκέλος.`;
  }
  return fallbackMessage;
}

export default function useReplayLoader({ setProg, setPlay, onCancelLoad } = {}) {
  // The loaded replay: geometry, per-slot streams and a snapshot of what was requested (meta).
  // Everything that describes the replay reads meta, never the live selector state.
  const [replay, setReplay] = useState(null);
  const [loading, setLoading] = useState("");
  const [ldPct, setLdPct] = useState(undefined);
  const [err, setErr] = useState("");
  const [sceneErr, setSceneErr] = useState("");
  const [canCancelLoad, setCanCancelLoad] = useState(false);
  const loadAbortRef = useRef(null);

  const clearLoadIndicator = useCallback(() => {
    setLoading("");
    setLdPct(undefined);
  }, []);

  const isActiveLoad = useCallback(
    (controller) => loadAbortRef.current === controller && !controller?.signal?.aborted,
    []
  );

  const beginCancelableLoad = useCallback((message = "", { preserveError = false } = {}) => {
    loadAbortRef.current?.abort();
    const controller = new AbortController();
    loadAbortRef.current = controller;
    setCanCancelLoad(true);
    setLoading(message);
    if (!preserveError) setErr("");
    setSceneErr("");
    setLdPct(0);
    return controller;
  }, []);

  const finishCancelableLoad = useCallback((controller) => {
    if (loadAbortRef.current !== controller) return;
    loadAbortRef.current = null;
    setCanCancelLoad(false);
  }, []);

  const cancelLoading = useCallback(() => {
    if (!loadAbortRef.current) return;
    loadAbortRef.current.abort();
    loadAbortRef.current = null;
    onCancelLoad?.();
    setCanCancelLoad(false);
    clearLoadIndicator();
    setPlay?.(false);
  }, [clearLoadIndicator, onCancelLoad, setPlay]);

  const clearReplayData = useCallback(() => {
    setReplay(null);
    setProg?.(0);
    setPlay?.(false);
  }, [setPlay, setProg]);

  const clearReplaySlot = useCallback((slot) => {
    setReplay((current) => {
      if (!current?.streams[slot]) return current;
      const streams = { ...current.streams };
      delete streams[slot];
      return { ...current, streams };
    });
  }, []);

  const applyReplayStreams = useCallback(
    (streams, meeting, meta) => {
      const bySlot = Object.fromEntries(
        streams.map((stream) => [stream.slot, { location: stream.location, telemetry: stream.telemetry }])
      );
      const geometry = buildReplayGeometry(meeting, bySlot[1].location);
      setReplay({
        trackPath: geometry.trackPath,
        circuitFlip: geometry.circuitFlip,
        circuitTurns: geometry.circuitTurns,
        streams: bySlot,
        meta,
      });
      setProg?.(0);
      setPlay?.(false);
    },
    [setPlay, setProg]
  );

  const loadReplayForActiveLoad = useCallback(
    async ({
      controller,
      sessionKey,
      meeting,
      drivers,
      meta,
      progress = { locations: 20, telemetry: 55 },
      loadingMessage = "Φόρτωση τηλεμετρίας…",
      insufficientDataMessage = "Τα δεδομένα δεν επαρκούν.",
    }) => {
      setLoading(loadingMessage);
      const streams = await loadReplayStreams(
        {
          sessionKey,
          drivers,
          onProgress: setLdPct,
          progress,
        },
        { signal: controller.signal }
      );
      if (!isActiveLoad(controller)) return streams;
      const replayDataIssue = getReplayDataIssue(streams);
      if (replayDataIssue) throw new Error(formatReplayDataIssue(replayDataIssue, insufficientDataMessage));
      applyReplayStreams(streams, meeting, meta);
      setLdPct(100);
      return streams;
    },
    [applyReplayStreams, isActiveLoad]
  );

  const loadReplayComparison = useCallback(
    async ({ sessionKey, meeting, drivers, meta, preserveError = false }) => {
      const controller = beginCancelableLoad("Φόρτωση τηλεμετρίας…", { preserveError });
      try {
        setLdPct(15);
        await loadReplayForActiveLoad({
          controller,
          sessionKey,
          meeting,
          drivers,
          meta,
          progress: { locations: 20, telemetry: 55 },
          insufficientDataMessage: "Τα δεδομένα δεν επαρκούν.",
        });
        if (!isActiveLoad(controller)) return false;
        clearLoadIndicator();
        return true;
      } catch (error) {
        if (isActiveLoad(controller)) {
          if (!isAbortError(error)) setErr(error.message);
          clearLoadIndicator();
        }
        return false;
      } finally {
        finishCancelableLoad(controller);
      }
    },
    [beginCancelableLoad, clearLoadIndicator, finishCancelableLoad, isActiveLoad, loadReplayForActiveLoad]
  );

  useEffect(
    () => () => {
      loadAbortRef.current?.abort();
    },
    []
  );

  return {
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
  };
}
