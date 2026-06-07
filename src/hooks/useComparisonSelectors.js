import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { fetchDrivers, fetchLaps, fetchMeetings, fetchSessions, fetchStints } from "../api.js";
import { uniqueDrivers } from "../domain/drivers.js";
import { prepareLapSelectModel } from "../domain/laps.js";

function isAbortError(error) {
  return error?.name === "AbortError";
}

function getInitialDriverCount(initialURL = {}) {
  const encodedCount = Number(initialURL.numDrivers);
  if (encodedCount >= 2 && encodedCount <= 4) return encodedCount;
  if (initialURL.d4) return 4;
  if (initialURL.d3) return 3;
  return 2;
}

function getInitialYear(initialURL = {}, defaultYear) {
  return Number(initialURL.year) || defaultYear;
}

function toNullableNumber(value) {
  if (value === "" || value == null) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function createEmptySlot() {
  return {
    driverNumber: null,
    lapNumber: null,
    laps: [],
    stints: [],
  };
}

function createInitialSlots() {
  return [createEmptySlot(), createEmptySlot(), createEmptySlot(), createEmptySlot()];
}

function resolveNextValue(value, currentValue) {
  return typeof value === "function" ? value(currentValue) : value;
}

function updateSlot(slots, slot, updater) {
  const index = slot - 1;
  if (index < 0 || index >= slots.length) return slots;
  const nextSlot = updater(slots[index]);
  const nextSlots = [...slots];
  nextSlots[index] = nextSlot;
  return nextSlots;
}

function clearSlotsAfterCount(slots, driverCount) {
  return slots.map((slot, index) => (index + 1 > driverCount ? createEmptySlot() : slot));
}

function selectorSlotsReducer(slots, action) {
  switch (action.type) {
    case "reset":
      return createInitialSlots();
    case "clearSlot":
      return updateSlot(slots, action.slot, () => createEmptySlot());
    case "clearInactive":
      return clearSlotsAfterCount(slots, action.driverCount);
    case "setDriver":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        driverNumber: resolveNextValue(action.value, slot.driverNumber),
      }));
    case "selectDriver":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        driverNumber: action.driverNumber,
        lapNumber: null,
        laps: [],
        stints: [],
      }));
    case "setLap":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        lapNumber: resolveNextValue(action.value, slot.lapNumber),
      }));
    case "setLaps":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        laps: resolveNextValue(action.value, slot.laps),
      }));
    case "setStints":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        stints: resolveNextValue(action.value, slot.stints),
      }));
    case "applyPreset":
      return [
        {
          driverNumber: action.driver1Number,
          lapNumber: action.lap1Number,
          laps: action.laps1,
          stints: action.stints1,
        },
        {
          driverNumber: action.driver2Number,
          lapNumber: action.lap2Number,
          laps: action.laps2,
          stints: action.stints2,
        },
        createEmptySlot(),
        createEmptySlot(),
      ];
    case "restoreDrivers":
      return slots.map((slot, index) => ({
        ...slot,
        driverNumber: action.driverNumbers[index] ?? null,
      }));
    default:
      return slots;
  }
}

export default function useComparisonSelectors({
  initialURL,
  defaultYear,
  supportedSessionNames = [],
  restoreStateRef,
  restoreFlagsRef,
  presetActiveRef,
  clearReplayData,
  clearReplaySlot,
  setLoading,
  setErr,
  setSceneErr,
} = {}) {
  const [year, setYear] = useState(() => getInitialYear(initialURL, defaultYear));
  const [mts, setMts] = useState([]);
  const [selMt, setSelMt] = useState(null);
  const [sess, setSess] = useState([]);
  const [selSe, setSelSe] = useState(null);
  const [drvs, setDrvs] = useState([]);
  const [slots, dispatchSlots] = useReducer(selectorSlotsReducer, undefined, createInitialSlots);
  const [numDrivers, setNumDrivers] = useState(() => getInitialDriverCount(initialURL));
  const [restoreTick, setRestoreTick] = useState(0);
  const selectorRequestIdsRef = useRef({ meetings: 0, sessions: 0, drivers: 0 });
  const lapRequestIdsRef = useRef({ laps1: 0, laps2: 0, laps3: 0, laps4: 0 });
  const supportedSessionNameSet = useMemo(() => new Set(supportedSessionNames), [supportedSessionNames]);
  const sessionKey = selSe?.session_key;
  const [slot1, slot2, slot3, slot4] = slots;
  const d1 = slot1.driverNumber;
  const d2 = slot2.driverNumber;
  const d3 = slot3.driverNumber;
  const d4 = slot4.driverNumber;
  const sl1 = slot1.lapNumber;
  const sl2 = slot2.lapNumber;
  const sl3 = slot3.lapNumber;
  const sl4 = slot4.lapNumber;
  const laps1 = slot1.laps;
  const laps2 = slot2.laps;
  const laps3 = slot3.laps;
  const laps4 = slot4.laps;
  const st1 = slot1.stints;
  const st2 = slot2.stints;
  const st3 = slot3.stints;
  const st4 = slot4.stints;

  const nextSelectorRequestId = useCallback((key) => {
    const next = (selectorRequestIdsRef.current[key] || 0) + 1;
    selectorRequestIdsRef.current[key] = next;
    return next;
  }, []);

  const isCurrentSelectorRequest = useCallback(
    (key, requestId) => selectorRequestIdsRef.current[key] === requestId,
    []
  );

  const nextLapRequestId = useCallback((key) => {
    const next = (lapRequestIdsRef.current[key] || 0) + 1;
    lapRequestIdsRef.current[key] = next;
    return next;
  }, []);

  const isCurrentLapRequest = useCallback((key, requestId) => lapRequestIdsRef.current[key] === requestId, []);

  const setSlotDriver = useCallback((slot, value) => {
    dispatchSlots({ type: "setDriver", slot, value });
  }, []);

  const setSlotLap = useCallback((slot, value) => {
    dispatchSlots({ type: "setLap", slot, value });
  }, []);

  const setSlotLaps = useCallback((slot, value) => {
    dispatchSlots({ type: "setLaps", slot, value });
  }, []);

  const setSlotStints = useCallback((slot, value) => {
    dispatchSlots({ type: "setStints", slot, value });
  }, []);

  const setD1 = useCallback((value) => setSlotDriver(1, value), [setSlotDriver]);
  const setD2 = useCallback((value) => setSlotDriver(2, value), [setSlotDriver]);
  const setD3 = useCallback((value) => setSlotDriver(3, value), [setSlotDriver]);
  const setD4 = useCallback((value) => setSlotDriver(4, value), [setSlotDriver]);
  const setSl1 = useCallback((value) => setSlotLap(1, value), [setSlotLap]);
  const setSl2 = useCallback((value) => setSlotLap(2, value), [setSlotLap]);
  const setSl3 = useCallback((value) => setSlotLap(3, value), [setSlotLap]);
  const setSl4 = useCallback((value) => setSlotLap(4, value), [setSlotLap]);
  const setLaps1 = useCallback((value) => setSlotLaps(1, value), [setSlotLaps]);
  const setLaps2 = useCallback((value) => setSlotLaps(2, value), [setSlotLaps]);
  const setLaps3 = useCallback((value) => setSlotLaps(3, value), [setSlotLaps]);
  const setLaps4 = useCallback((value) => setSlotLaps(4, value), [setSlotLaps]);
  const setSt1 = useCallback((value) => setSlotStints(1, value), [setSlotStints]);
  const setSt2 = useCallback((value) => setSlotStints(2, value), [setSlotStints]);
  const setSt3 = useCallback((value) => setSlotStints(3, value), [setSlotStints]);
  const setSt4 = useCallback((value) => setSlotStints(4, value), [setSlotStints]);

  const resetDriverSelections = useCallback(
    (options = {}) => {
      const { resetDriverCount = false } = options;
      dispatchSlots({ type: "reset" });
      clearReplayData?.();
      if (resetDriverCount) setNumDrivers(2);
    },
    [clearReplayData]
  );

  const resetForUrlRestore = useCallback(
    (nextState = {}) => {
      resetDriverSelections({ resetDriverCount: true });
      setMts([]);
      setSelMt(null);
      setSess([]);
      setSelSe(null);
      setDrvs([]);
      setYear(Number(nextState.year) || defaultYear);
      setRestoreTick((tick) => tick + 1);
    },
    [defaultYear, resetDriverSelections]
  );

  const applyPresetSelectorData = useCallback(
    ({
      year: presetYear,
      meetings,
      meeting,
      sessions,
      session,
      drivers,
      driver1Number,
      driver2Number,
      laps1: nextLaps1,
      laps2: nextLaps2,
      lap1Number,
      lap2Number,
      stints1,
      stints2,
    }) => {
      setYear(presetYear);
      setMts(meetings);
      setSelMt(meeting);
      setSess(sessions);
      setSelSe(session);
      setDrvs(drivers);
      setNumDrivers(2);
      dispatchSlots({
        type: "applyPreset",
        driver1Number,
        driver2Number,
        laps1: nextLaps1,
        laps2: nextLaps2,
        lap1Number,
        lap2Number,
        stints1,
        stints2,
      });
      clearReplaySlot?.(3);
      clearReplaySlot?.(4);
    },
    [clearReplaySlot]
  );

  const selectMeeting = useCallback(
    (meetingKey) => {
      const nextMeetingKey = toNullableNumber(meetingKey);
      setSelMt(mts.find((meeting) => meeting.meeting_key === nextMeetingKey) || null);
    },
    [mts]
  );

  const selectSession = useCallback(
    (sessionKey) => {
      const nextSessionKey = toNullableNumber(sessionKey);
      setSelSe(sess.find((session) => session.session_key === nextSessionKey) || null);
    },
    [sess]
  );

  const selectDriverSlot = useCallback((slot, driverNumber) => {
    const nextDriverNumber = toNullableNumber(driverNumber);
    dispatchSlots({ type: "selectDriver", slot, driverNumber: nextDriverNumber });
  }, []);

  const selectLapSlot = useCallback((slot, lapNumber) => {
    const nextLapNumber = toNullableNumber(lapNumber);
    dispatchSlots({ type: "setLap", slot, value: nextLapNumber });
  }, []);

  const clearInactiveSlots = useCallback(
    (driverCount = numDrivers) => {
      dispatchSlots({ type: "clearInactive", driverCount });
      if (driverCount < 4) clearReplaySlot?.(4);
      if (driverCount < 3) clearReplaySlot?.(3);
    },
    [clearReplaySlot, numDrivers]
  );

  useEffect(() => {
    clearInactiveSlots(numDrivers);
  }, [clearInactiveSlots, numDrivers]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("meetings");
    setLoading?.("Φόρτωση...");
    setErr?.("");
    setSceneErr?.("");
    setMts([]);
    setSelMt(null);
    setSelSe(null);
    setSess([]);
    setDrvs([]);
    resetDriverSelections();
    fetchMeetings(year, { signal: controller.signal })
      .then((meetings) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("meetings", requestId)) return;
        setMts(meetings.filter((meeting) => meeting.meeting_name));
        setLoading?.("");
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentSelectorRequest("meetings", requestId)) return;
        setErr?.(error.message);
        setLoading?.("");
      });
    return () => controller.abort();
  }, [
    isCurrentSelectorRequest,
    nextSelectorRequestId,
    presetActiveRef,
    resetDriverSelections,
    restoreTick,
    setErr,
    setLoading,
    setSceneErr,
    year,
  ]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!selMt) {
      setSelSe(null);
      setSess([]);
      setDrvs([]);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("sessions");
    setLoading?.("Φόρτωση σκελών...");
    setErr?.("");
    setDrvs([]);
    setSelSe(null);
    resetDriverSelections();
    fetchSessions(selMt.meeting_key, { signal: controller.signal })
      .then((sessions) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("sessions", requestId)) return;
        setSess(sessions.filter((session) => supportedSessionNameSet.has(session.session_name)));
        setLoading?.("");
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentSelectorRequest("sessions", requestId)) return;
        setErr?.(error.message);
        setLoading?.("");
      });
    return () => controller.abort();
  }, [
    isCurrentSelectorRequest,
    nextSelectorRequestId,
    presetActiveRef,
    resetDriverSelections,
    selMt,
    setErr,
    setLoading,
    supportedSessionNameSet,
  ]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!selSe) {
      setDrvs([]);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("drivers");
    setLoading?.("Φόρτωση οδηγών...");
    setErr?.("");
    resetDriverSelections();
    fetchDrivers(selSe.session_key, { signal: controller.signal })
      .then((drivers) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("drivers", requestId)) return;
        setDrvs(uniqueDrivers(drivers));
        setLoading?.("");
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentSelectorRequest("drivers", requestId)) return;
        setErr?.(error.message);
        setLoading?.("");
      });
    return () => controller.abort();
  }, [
    isCurrentSelectorRequest,
    nextSelectorRequestId,
    presetActiveRef,
    resetDriverSelections,
    selSe,
    setErr,
    setLoading,
  ]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.mk || !mts.length || !restoreFlags || restoreFlags.meeting) return;
    const meeting = mts.find((item) => String(item.meeting_key) === restoreState.mk);
    if (!meeting) return;
    restoreFlags.meeting = true;
    setSelMt(meeting);
  }, [mts, restoreFlagsRef, restoreStateRef, restoreTick]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.sk || !sess.length || !restoreFlags || restoreFlags.session) return;
    const session = sess.find((item) => String(item.session_key) === restoreState.sk);
    if (!session) return;
    restoreFlags.session = true;
    setSelSe(session);
  }, [restoreFlagsRef, restoreStateRef, restoreTick, sess]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!sessionKey || !d1) {
      setLaps1([]);
      setSl1(null);
      setSt1([]);
      return;
    }
    const controller = new AbortController();
    const requestId = nextLapRequestId("laps1");
    fetchLaps(sessionKey, d1, { signal: controller.signal })
      .then((laps) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps1", requestId)) return;
        setLaps1(laps);
        setSl1(null);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps1", requestId)) return;
        setLaps1([]);
      });
    fetchStints(sessionKey, d1, { signal: controller.signal })
      .then((stints) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps1", requestId)) return;
        setSt1(stints);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps1", requestId)) return;
        setSt1([]);
      });
    return () => controller.abort();
  }, [d1, isCurrentLapRequest, nextLapRequestId, presetActiveRef, sessionKey, setLaps1, setSl1, setSt1]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!sessionKey || !d2) {
      setLaps2([]);
      setSl2(null);
      setSt2([]);
      return;
    }
    const controller = new AbortController();
    const requestId = nextLapRequestId("laps2");
    fetchLaps(sessionKey, d2, { signal: controller.signal })
      .then((laps) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps2", requestId)) return;
        setLaps2(laps);
        setSl2(null);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps2", requestId)) return;
        setLaps2([]);
      });
    fetchStints(sessionKey, d2, { signal: controller.signal })
      .then((stints) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps2", requestId)) return;
        setSt2(stints);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps2", requestId)) return;
        setSt2([]);
      });
    return () => controller.abort();
  }, [d2, isCurrentLapRequest, nextLapRequestId, presetActiveRef, sessionKey, setLaps2, setSl2, setSt2]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!sessionKey || !d3) {
      setLaps3([]);
      setSl3(null);
      setSt3([]);
      clearReplaySlot?.(3);
      return;
    }
    const controller = new AbortController();
    const requestId = nextLapRequestId("laps3");
    fetchLaps(sessionKey, d3, { signal: controller.signal })
      .then((laps) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps3", requestId)) return;
        setLaps3(laps);
        setSl3(null);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps3", requestId)) return;
        setLaps3([]);
      });
    fetchStints(sessionKey, d3, { signal: controller.signal })
      .then((stints) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps3", requestId)) return;
        setSt3(stints);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps3", requestId)) return;
        setSt3([]);
      });
    return () => controller.abort();
  }, [
    clearReplaySlot,
    d3,
    isCurrentLapRequest,
    nextLapRequestId,
    presetActiveRef,
    sessionKey,
    setLaps3,
    setSl3,
    setSt3,
  ]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!sessionKey || !d4) {
      setLaps4([]);
      setSl4(null);
      setSt4([]);
      clearReplaySlot?.(4);
      return;
    }
    const controller = new AbortController();
    const requestId = nextLapRequestId("laps4");
    fetchLaps(sessionKey, d4, { signal: controller.signal })
      .then((laps) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps4", requestId)) return;
        setLaps4(laps);
        setSl4(null);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps4", requestId)) return;
        setLaps4([]);
      });
    fetchStints(sessionKey, d4, { signal: controller.signal })
      .then((stints) => {
        if (controller.signal.aborted || !isCurrentLapRequest("laps4", requestId)) return;
        setSt4(stints);
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrentLapRequest("laps4", requestId)) return;
        setSt4([]);
      });
    return () => controller.abort();
  }, [
    clearReplaySlot,
    d4,
    isCurrentLapRequest,
    nextLapRequestId,
    presetActiveRef,
    sessionKey,
    setLaps4,
    setSl4,
    setSt4,
  ]);

  const lapSelect1 = useMemo(() => prepareLapSelectModel(laps1), [laps1]);
  const lapSelect2 = useMemo(() => prepareLapSelectModel(laps2), [laps2]);
  const lapSelect3 = useMemo(() => prepareLapSelectModel(laps3), [laps3]);
  const lapSelect4 = useMemo(() => prepareLapSelectModel(laps4), [laps4]);

  useEffect(() => {
    if (lapSelect1.fastestLapNumber && !sl1) setSl1(lapSelect1.fastestLapNumber);
  }, [lapSelect1.fastestLapNumber, setSl1, sl1]);
  useEffect(() => {
    if (lapSelect2.fastestLapNumber && !sl2) setSl2(lapSelect2.fastestLapNumber);
  }, [lapSelect2.fastestLapNumber, setSl2, sl2]);
  useEffect(() => {
    if (lapSelect3.fastestLapNumber && !sl3) setSl3(lapSelect3.fastestLapNumber);
  }, [lapSelect3.fastestLapNumber, setSl3, sl3]);
  useEffect(() => {
    if (lapSelect4.fastestLapNumber && !sl4) setSl4(lapSelect4.fastestLapNumber);
  }, [lapSelect4.fastestLapNumber, setSl4, sl4]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!drvs.length || !restoreFlags || restoreFlags.drivers) return;
    const nextDrivers = {
      d1: restoreState?.d1 ? Number(restoreState.d1) : null,
      d2: restoreState?.d2 ? Number(restoreState.d2) : null,
      d3: restoreState?.d3 ? Number(restoreState.d3) : null,
      d4: restoreState?.d4 ? Number(restoreState.d4) : null,
    };
    if (!nextDrivers.d1 && !nextDrivers.d2 && !nextDrivers.d3 && !nextDrivers.d4) return;
    restoreFlags.drivers = true;
    dispatchSlots({
      type: "restoreDrivers",
      driverNumbers: [nextDrivers.d1, nextDrivers.d2, nextDrivers.d3, nextDrivers.d4],
    });
    const encodedCount = Number(restoreState?.numDrivers);
    const nextCount =
      encodedCount >= 2 && encodedCount <= 4 ? encodedCount : nextDrivers.d4 ? 4 : nextDrivers.d3 ? 3 : 2;
    setNumDrivers(nextCount);
  }, [drvs.length, restoreFlagsRef, restoreStateRef, restoreTick]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.l1 || !laps1.length || !restoreFlags || restoreFlags.lap1) return;
    restoreFlags.lap1 = true;
    setSl1(Number(restoreState.l1));
  }, [laps1, restoreFlagsRef, restoreStateRef, restoreTick, setSl1]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.l2 || !laps2.length || !restoreFlags || restoreFlags.lap2) return;
    restoreFlags.lap2 = true;
    setSl2(Number(restoreState.l2));
  }, [laps2, restoreFlagsRef, restoreStateRef, restoreTick, setSl2]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.l3 || !laps3.length || !restoreFlags || restoreFlags.lap3) return;
    restoreFlags.lap3 = true;
    setSl3(Number(restoreState.l3));
  }, [laps3, restoreFlagsRef, restoreStateRef, restoreTick, setSl3]);

  useEffect(() => {
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.l4 || !laps4.length || !restoreFlags || restoreFlags.lap4) return;
    restoreFlags.lap4 = true;
    setSl4(Number(restoreState.l4));
  }, [laps4, restoreFlagsRef, restoreStateRef, restoreTick, setSl4]);

  return {
    year,
    setYear,
    mts,
    setMts,
    selMt,
    setSelMt,
    sess,
    setSess,
    selSe,
    setSelSe,
    drvs,
    setDrvs,
    setRestoreTick,
    resetForUrlRestore,
    applyPresetSelectorData,
    selectMeeting,
    selectSession,
    selectDriverSlot,
    selectLapSlot,
    clearInactiveSlots,
    d1,
    setD1,
    d2,
    setD2,
    d3,
    setD3,
    d4,
    setD4,
    sl1,
    setSl1,
    sl2,
    setSl2,
    sl3,
    setSl3,
    sl4,
    setSl4,
    laps1,
    setLaps1,
    laps2,
    setLaps2,
    laps3,
    setLaps3,
    laps4,
    setLaps4,
    st1,
    setSt1,
    st2,
    setSt2,
    st3,
    setSt3,
    st4,
    setSt4,
    numDrivers,
    setNumDrivers,
    lapSelect1,
    lapSelect2,
    lapSelect3,
    lapSelect4,
    resetDriverSelections,
  };
}
