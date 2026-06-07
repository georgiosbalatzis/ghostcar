import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { fetchLaps, fetchMeetings, fetchSessions } from "../api.js";
import { bestLap } from "../domain/laps.js";

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

function getComparisonCacheKey(year, driver1Number, driver2Number) {
  return `${year}:${driver1Number}:${driver2Number}`;
}

export default function useAuxiliaryData({ year, driver1Number, driver2Number, mob, embed, setShowH2H, setShowDash }) {
  const [h2hData, setH2hData] = useState(null);
  const [h2hProgress, setH2hProgress] = useState(null);
  const [dashData, setDashData] = useState(null);
  const auxAbortRef = useRef(null);
  const h2hCacheRef = useRef(new Map());
  const dashCacheRef = useRef(new Map());

  useEffect(
    () => () => {
      auxAbortRef.current?.abort();
    },
    []
  );

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

  const resetAuxiliaryData = useCallback(() => {
    setH2hData(null);
    setDashData(null);
    setH2hProgress(null);
  }, []);

  const loadH2H = useCallback(async () => {
    if (!driver1Number || !driver2Number) return;
    const cacheKey = getComparisonCacheKey(year, driver1Number, driver2Number);
    const cachedResults = h2hCacheRef.current.get(cacheKey);
    if (cachedResults) {
      if (!mob && !embed) setShowH2H?.(true);
      setH2hData(cachedResults);
      setH2hProgress(null);
      return;
    }
    const controller = beginAuxLoad();
    const reqOptions = { signal: controller.signal };
    if (!mob && !embed) setShowH2H?.(true);
    setH2hData(null);
    setH2hProgress({ checked: 0, total: 0, currentGp: "", found: 0 });
    try {
      const allMeetings = await fetchMeetings(year, reqOptions);
      const validMeetings = allMeetings.filter((meeting) => meeting.meeting_name);
      const results = [];
      setH2hProgress({
        checked: 0,
        total: validMeetings.length,
        currentGp: validMeetings[0]?.meeting_name || "",
        found: 0,
      });
      for (let index = 0; index < validMeetings.length && results.length < 12; index++) {
        if (controller.signal.aborted) throw createAbortError();
        const meeting = validMeetings[index];
        setH2hProgress({
          checked: index,
          total: validMeetings.length,
          currentGp: meeting.meeting_name,
          found: results.length,
        });
        try {
          if (index > 0 && index % 3 === 0) await abortableSleep(1200, controller.signal);
          const sessions = await fetchSessions(meeting.meeting_key, reqOptions);
          const qualifying = sessions.find((session) => session.session_name === "Qualifying");
          if (!qualifying) {
            setH2hProgress({
              checked: index + 1,
              total: validMeetings.length,
              currentGp: meeting.meeting_name,
              found: results.length,
            });
            continue;
          }
          await abortableSleep(400, controller.signal);
          const [driver1Laps, driver2Laps] = await Promise.all([
            fetchLaps(qualifying.session_key, driver1Number, reqOptions),
            fetchLaps(qualifying.session_key, driver2Number, reqOptions),
          ]);
          const bestDriver1Lap = bestLap(driver1Laps);
          const bestDriver2Lap = bestLap(driver2Laps);
          if (bestDriver1Lap && bestDriver2Lap) {
            results.push({
              gp: meeting.meeting_name?.replace("Grand Prix", "GP"),
              t1: bestDriver1Lap.lap_duration,
              t2: bestDriver2Lap.lap_duration,
            });
            startTransition(() => setH2hData([...results]));
          }
        } catch (error) {
          if (isAbortError(error)) throw error;
          if (String(error).includes("429")) await abortableSleep(3000, controller.signal);
        } finally {
          if (!controller.signal.aborted) {
            setH2hProgress({
              checked: index + 1,
              total: validMeetings.length,
              currentGp: meeting.meeting_name,
              found: results.length,
            });
          }
        }
      }
      if (!controller.signal.aborted) {
        const finalResults = results.length ? [...results] : [];
        h2hCacheRef.current.set(cacheKey, finalResults);
        if (finalResults.length === 0) setH2hData([]);
      }
    } catch (error) {
      if (!isAbortError(error)) setH2hData([]);
    } finally {
      if (!controller.signal.aborted) {
        setH2hProgress((previous) => (previous ? { ...previous, currentGp: "" } : null));
      }
      finishAuxLoad(controller);
    }
  }, [beginAuxLoad, driver1Number, driver2Number, embed, finishAuxLoad, mob, setShowH2H, year]);

  const loadSeasonDash = useCallback(async () => {
    if (!driver1Number || !driver2Number) return;
    const cacheKey = getComparisonCacheKey(year, driver1Number, driver2Number);
    const cachedResults = dashCacheRef.current.get(cacheKey);
    if (cachedResults) {
      if (!mob && !embed) setShowDash?.(true);
      setDashData(cachedResults);
      return;
    }
    const controller = beginAuxLoad();
    const reqOptions = { signal: controller.signal };
    if (!mob && !embed) setShowDash?.(true);
    setDashData(null);
    try {
      const allMeetings = await fetchMeetings(year, reqOptions);
      const results = [];
      for (let index = 0; index < allMeetings.length && results.length < 15; index++) {
        if (controller.signal.aborted) throw createAbortError();
        const meeting = allMeetings[index];
        if (!meeting.meeting_name) continue;
        try {
          if (index > 0 && index % 3 === 0) await abortableSleep(1200, controller.signal);
          const sessions = await fetchSessions(meeting.meeting_key, reqOptions);
          const qualifying = sessions.find((session) => session.session_name === "Qualifying");
          if (!qualifying) continue;
          await abortableSleep(400, controller.signal);
          const [driver1Laps, driver2Laps] = await Promise.all([
            fetchLaps(qualifying.session_key, driver1Number, reqOptions),
            fetchLaps(qualifying.session_key, driver2Number, reqOptions),
          ]);
          const bestDriver1Lap = bestLap(driver1Laps);
          const bestDriver2Lap = bestLap(driver2Laps);
          if (bestDriver1Lap && bestDriver2Lap) {
            results.push({
              gp: meeting.meeting_name?.replace("Grand Prix", "GP"),
              t1: bestDriver1Lap.lap_duration,
              t2: bestDriver2Lap.lap_duration,
              d: bestDriver1Lap.lap_duration - bestDriver2Lap.lap_duration,
            });
            startTransition(() => setDashData([...results]));
          }
        } catch (error) {
          if (isAbortError(error)) throw error;
          if (String(error).includes("429")) await abortableSleep(3000, controller.signal);
        }
      }
      if (!controller.signal.aborted) {
        const finalResults = results.length ? [...results] : [];
        dashCacheRef.current.set(cacheKey, finalResults);
        if (finalResults.length === 0) setDashData([]);
      }
    } catch (error) {
      if (!isAbortError(error)) setDashData([]);
    } finally {
      finishAuxLoad(controller);
    }
  }, [beginAuxLoad, driver1Number, driver2Number, embed, finishAuxLoad, mob, setShowDash, year]);

  return {
    h2hData,
    h2hProgress,
    dashData,
    cancelAuxLoading,
    resetAuxiliaryData,
    loadH2H,
    loadSeasonDash,
  };
}
