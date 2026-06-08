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
  const [loc1, setLoc1] = useState(null);
  const [loc2, setLoc2] = useState(null);
  const [loc3, setLoc3] = useState(null);
  const [loc4, setLoc4] = useState(null);
  const [tel1, setTel1] = useState(null);
  const [tel2, setTel2] = useState(null);
  const [tel3, setTel3] = useState(null);
  const [tel4, setTel4] = useState(null);
  const [tp, setTp] = useState(null);
  const [circuitFlip, setCircuitFlip] = useState(false);
  const [circuitTurns, setCircuitTurns] = useState(20);
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
    setTp(null);
    setLoc1(null);
    setLoc2(null);
    setLoc3(null);
    setLoc4(null);
    setTel1(null);
    setTel2(null);
    setTel3(null);
    setTel4(null);
    setProg?.(0);
    setPlay?.(false);
  }, [setPlay, setProg]);

  const clearReplaySlot = useCallback((slot) => {
    if (slot === 1) {
      setLoc1(null);
      setTel1(null);
    }
    if (slot === 2) {
      setLoc2(null);
      setTel2(null);
    }
    if (slot === 3) {
      setLoc3(null);
      setTel3(null);
    }
    if (slot === 4) {
      setLoc4(null);
      setTel4(null);
    }
  }, []);

  const applyReplayStreams = useCallback(
    (streams, meeting) => {
      const bySlot = new Map(streams.map((stream) => [stream.slot, stream]));
      const stream1 = bySlot.get(1);
      const stream2 = bySlot.get(2);
      const stream3 = bySlot.get(3);
      const stream4 = bySlot.get(4);
      const geometry = buildReplayGeometry(meeting, stream1.location);

      setLoc1(stream1.location);
      setLoc2(stream2.location);
      setTel1(stream1.telemetry);
      setTel2(stream2.telemetry);
      setLoc3(stream3?.location || null);
      setTel3(stream3?.telemetry || null);
      setLoc4(stream4?.location || null);
      setTel4(stream4?.telemetry || null);
      setCircuitFlip(geometry.circuitFlip);
      setCircuitTurns(geometry.circuitTurns);
      setTp(geometry.trackPath);
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
      progress = { locations: 20, telemetry: 55 },
      loadingMessage = "Ανάκτηση τηλεμετρίας...",
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
      applyReplayStreams(streams, meeting);
      setLdPct(100);
      return streams;
    },
    [applyReplayStreams, isActiveLoad]
  );

  const loadReplayComparison = useCallback(
    async ({ sessionKey, meeting, drivers, preserveError = false }) => {
      const controller = beginCancelableLoad("Ανάκτηση τηλεμετρίας...", { preserveError });
      try {
        setLdPct(15);
        await loadReplayForActiveLoad({
          controller,
          sessionKey,
          meeting,
          drivers,
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
  };
}
