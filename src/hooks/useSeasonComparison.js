import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    const onAbort = () => {
      window.clearTimeout(timer);
      reject(createAbortError());
    };
    const timer = window.setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

// Qualifying head-to-head across one season: best qualifying lap of each driver per Grand Prix.
// Replaces the former separate H2H and season-dashboard scans, which fetched the same data twice.
// Incremental (rows appear as they resolve), cached per year/driver pair, throttled for OpenF1 and cancellable.
export default function useSeasonComparison({ year, driver1Number, driver2Number }) {
  const [rows, setRows] = useState(null);
  const [progress, setProgress] = useState(null);
  const abortRef = useRef(null);
  const cacheRef = useRef(new Map());

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setProgress(null);
  }, []);

  useEffect(() => () => abortRef.current?.abort(), []);

  const load = useCallback(async () => {
    if (!driver1Number || !driver2Number) return;
    const cacheKey = `${year}:${driver1Number}:${driver2Number}`;
    const cached = cacheRef.current.get(cacheKey);
    abortRef.current?.abort();
    if (cached) {
      setRows(cached);
      setProgress(null);
      return;
    }
    const controller = new AbortController();
    abortRef.current = controller;
    const options = { signal: controller.signal };
    setRows(null);
    setProgress({ checked: 0, total: 0, current: "" });
    const results = [];
    try {
      const meetings = (await fetchMeetings(year, options)).filter((meeting) => meeting.meeting_name);
      for (let index = 0; index < meetings.length; index++) {
        if (controller.signal.aborted) throw createAbortError();
        const meeting = meetings[index];
        setProgress({ checked: index, total: meetings.length, current: meeting.meeting_name });
        try {
          if (index > 0 && index % 3 === 0) await abortableSleep(1200, controller.signal);
          const sessions = await fetchSessions(meeting.meeting_key, options);
          const qualifying = sessions.find((session) => session.session_name === "Qualifying");
          if (!qualifying) continue;
          await abortableSleep(400, controller.signal);
          const [laps1, laps2] = await Promise.all([
            fetchLaps(qualifying.session_key, driver1Number, options),
            fetchLaps(qualifying.session_key, driver2Number, options),
          ]);
          const best1 = bestLap(laps1);
          const best2 = bestLap(laps2);
          if (best1 && best2) {
            results.push({
              gp: meeting.meeting_name.replace("Grand Prix", "GP"),
              t1: best1.lap_duration,
              t2: best2.lap_duration,
              d: best1.lap_duration - best2.lap_duration,
            });
            startTransition(() => setRows([...results]));
          }
        } catch (error) {
          if (isAbortError(error)) throw error;
          if (String(error).includes("429")) await abortableSleep(3000, controller.signal);
        }
      }
      cacheRef.current.set(cacheKey, [...results]);
      setRows([...results]);
    } catch (error) {
      if (!isAbortError(error)) setRows([...results]);
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        setProgress(null);
      }
    }
  }, [driver1Number, driver2Number, year]);

  return useMemo(() => ({ rows, progress, load, cancel }), [cancel, load, progress, rows]);
}
