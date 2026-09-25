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

function hasEncodedValue(value) {
  return value !== "" && value != null;
}

function hasResolvedValue(value) {
  return value != null;
}

function formatRestoreCode(value) {
  return hasEncodedValue(value) ? ` με κωδικό ${value}` : "";
}

function setRestoreWarning(setErr, message) {
  if (!message || !setErr) return;
  setErr((current) => current || message);
}

function markRestoreFlags(restoreFlags, flags) {
  flags.forEach((flag) => {
    restoreFlags[flag] = true;
  });
}

function markDownstreamRestoreFlags(restoreFlags, startAt) {
  const flagsByStep = {
    meeting: ["session", "drivers", "lap1", "lap2", "lap3", "lap4"],
    session: ["drivers", "lap1", "lap2", "lap3", "lap4"],
    drivers: ["lap1", "lap2", "lap3", "lap4"],
  };
  markRestoreFlags(restoreFlags, flagsByStep[startAt] || []);
}

export function buildRestoreMeetingError(meetingKey) {
  return `Δεν βρέθηκε το Γκραν Πρι${formatRestoreCode(meetingKey)} από τον κοινόχρηστο σύνδεσμο. Διάλεξε διαθέσιμο Γκραν Πρι.`;
}

export function buildRestoreSessionError(sessionKey) {
  return `Δεν βρέθηκε το σκέλος${formatRestoreCode(sessionKey)} από τον κοινόχρηστο σύνδεσμο. Διάλεξε διαθέσιμο σκέλος.`;
}

export function buildRestoreDriversError(missingDrivers = []) {
  const labels = missingDrivers.map(({ slot, driverNumber }) => `Οδηγός ${slot} (#${driverNumber})`).join(", ");
  return `Δεν βρέθηκε οδηγός από τον κοινόχρηστο σύνδεσμο: ${labels}. Διάλεξε οδηγό χειροκίνητα.`;
}

export function buildRestoreLapError(slot, lapNumber) {
  return `Δεν βρέθηκε διαθέσιμος γύρος L${lapNumber} για τον Οδηγό ${slot} από τον κοινόχρηστο σύνδεσμο. Κρατήθηκε ο ταχύτερος διαθέσιμος γύρος.`;
}

export function resolveRestoredDrivers(restoreState = {}, drivers = []) {
  const availableDriverNumbers = new Set(
    drivers.map((driver) => Number(driver.driver_number)).filter((driverNumber) => Number.isFinite(driverNumber))
  );
  const requestedDrivers = [1, 2, 3, 4]
    .map((slot) => {
      const encodedValue = restoreState?.[`d${slot}`];
      if (!hasEncodedValue(encodedValue)) return null;
      const driverNumber = Number(encodedValue);
      return {
        slot,
        driverNumber,
        labelValue: Number.isFinite(driverNumber) ? driverNumber : encodedValue,
      };
    })
    .filter(Boolean);
  const driverNumbers = [1, 2, 3, 4].map((slot) => {
    const requestedDriver = requestedDrivers.find((driver) => driver.slot === slot);
    if (!requestedDriver || !Number.isFinite(requestedDriver.driverNumber)) return null;
    return availableDriverNumbers.has(requestedDriver.driverNumber) ? requestedDriver.driverNumber : null;
  });
  const missingDrivers = requestedDrivers
    .filter((driver) => !Number.isFinite(driver.driverNumber) || !availableDriverNumbers.has(driver.driverNumber))
    .map((driver) => ({
      slot: driver.slot,
      driverNumber: driver.labelValue,
    }));
  const encodedCount = Number(restoreState?.numDrivers);
  const nextCount =
    encodedCount >= 2 && encodedCount <= 4
      ? encodedCount
      : hasResolvedValue(driverNumbers[3])
        ? 4
        : hasResolvedValue(driverNumbers[2])
          ? 3
          : 2;

  return {
    driverNumbers,
    missingDrivers,
    hasRequestedDrivers: requestedDrivers.length > 0,
    nextCount,
  };
}

export function resolveRestoredLap(encodedLapNumber, lapSelect = {}) {
  if (!hasEncodedValue(encodedLapNumber)) {
    return {
      hasRequestedLap: false,
      requestedLapNumber: null,
      lapNumber: null,
      missingLap: false,
    };
  }

  const parsedLapNumber = Number(encodedLapNumber);
  const requestedLapNumber = Number.isFinite(parsedLapNumber) ? parsedLapNumber : encodedLapNumber;
  const options = Array.isArray(lapSelect.options) ? lapSelect.options : [];
  const lap = Number.isFinite(parsedLapNumber)
    ? options.find((option) => Number(option.lap_number) === parsedLapNumber)
    : null;

  return {
    hasRequestedLap: true,
    requestedLapNumber,
    lapNumber: lap?.lap_number ?? null,
    missingLap: !lap,
  };
}

function createEmptySlot() {
  return {
    driverNumber: null,
    lapNumber: null,
    laps: [],
    lapLoading: false,
    lapsLoaded: false,
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
        lapLoading: false,
        lapsLoaded: false,
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
        ...(action.loading !== undefined ? { lapLoading: action.loading } : {}),
        ...(action.loaded !== undefined ? { lapsLoaded: action.loaded } : {}),
      }));
    case "setLapFetchState":
      return updateSlot(slots, action.slot, (slot) => ({
        ...slot,
        ...(action.loading !== undefined ? { lapLoading: action.loading } : {}),
        ...(action.loaded !== undefined ? { lapsLoaded: action.loaded } : {}),
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
          lapLoading: false,
          lapsLoaded: true,
          stints: action.stints1,
        },
        {
          driverNumber: action.driver2Number,
          lapNumber: action.lap2Number,
          laps: action.laps2,
          lapLoading: false,
          lapsLoaded: true,
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

// Loads laps and stints for one slot whenever its driver or the session changes.
// Request ids guard against stale responses; the abort signal cancels superseded requests.
function useSlotLaps({ slot, sessionKey, driverNumber, presetActiveRef, dispatchSlots, clearReplaySlot }) {
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    if (!sessionKey || !driverNumber) {
      dispatchSlots({ type: "setLaps", slot, value: [], loading: false, loaded: false });
      dispatchSlots({ type: "setLap", slot, value: null });
      dispatchSlots({ type: "setStints", slot, value: [] });
      // Optional slots also drop their replay streams when emptied.
      if (slot > 2) clearReplaySlot?.(slot);
      return;
    }
    const controller = new AbortController();
    const requestId = ++requestIdRef.current;
    const isCurrent = () => requestIdRef.current === requestId;
    dispatchSlots({ type: "setLapFetchState", slot, loading: true, loaded: false });
    fetchLaps(sessionKey, driverNumber, { signal: controller.signal })
      .then((laps) => {
        if (controller.signal.aborted || !isCurrent()) return;
        dispatchSlots({ type: "setLaps", slot, value: laps, loading: false, loaded: true });
        dispatchSlots({ type: "setLap", slot, value: null });
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrent()) return;
        dispatchSlots({ type: "setLaps", slot, value: [], loading: false, loaded: true });
      });
    fetchStints(sessionKey, driverNumber, { signal: controller.signal })
      .then((stints) => {
        if (controller.signal.aborted || !isCurrent()) return;
        dispatchSlots({ type: "setStints", slot, value: stints });
      })
      .catch((error) => {
        if (isAbortError(error) || !isCurrent()) return;
        dispatchSlots({ type: "setStints", slot, value: [] });
      });
    return () => controller.abort();
  }, [clearReplaySlot, dispatchSlots, driverNumber, presetActiveRef, sessionKey, slot]);
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
  const [meetingsLoaded, setMeetingsLoaded] = useState(false);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);
  const [driversLoaded, setDriversLoaded] = useState(false);
  const [slots, dispatchSlots] = useReducer(selectorSlotsReducer, undefined, createInitialSlots);
  const [numDrivers, setNumDrivers] = useState(() => getInitialDriverCount(initialURL));
  const [restoreTick, setRestoreTick] = useState(0);
  const selectorRequestIdsRef = useRef({ meetings: 0, sessions: 0, drivers: 0 });
  const supportedSessionNameSet = useMemo(() => new Set(supportedSessionNames), [supportedSessionNames]);
  const sessionKey = selSe?.session_key;

  const nextSelectorRequestId = useCallback((key) => {
    const next = (selectorRequestIdsRef.current[key] || 0) + 1;
    selectorRequestIdsRef.current[key] = next;
    return next;
  }, []);

  const isCurrentSelectorRequest = useCallback(
    (key, requestId) => selectorRequestIdsRef.current[key] === requestId,
    []
  );

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
      setMeetingsLoaded(false);
      setSessionsLoaded(false);
      setDriversLoaded(false);
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
      setMeetingsLoaded(true);
      setSessionsLoaded(true);
      setDriversLoaded(true);
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
    (nextSessionKey) => {
      const key = toNullableNumber(nextSessionKey);
      setSelSe(sess.find((session) => session.session_key === key) || null);
    },
    [sess]
  );

  const selectDriverSlot = useCallback((slot, driverNumber) => {
    dispatchSlots({ type: "selectDriver", slot, driverNumber: toNullableNumber(driverNumber) });
  }, []);

  const selectLapSlot = useCallback((slot, lapNumber) => {
    dispatchSlots({ type: "setLap", slot, value: toNullableNumber(lapNumber) });
  }, []);

  useEffect(() => {
    dispatchSlots({ type: "clearInactive", driverCount: numDrivers });
    if (numDrivers < 4) clearReplaySlot?.(4);
    if (numDrivers < 3) clearReplaySlot?.(3);
  }, [clearReplaySlot, numDrivers]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("meetings");
    setLoading?.("Φόρτωση Γκραν Πρι…");
    setErr?.("");
    setSceneErr?.("");
    setMts([]);
    setSelMt(null);
    setSelSe(null);
    setSess([]);
    setDrvs([]);
    setMeetingsLoaded(false);
    setSessionsLoaded(false);
    setDriversLoaded(false);
    resetDriverSelections();
    fetchMeetings(year, { signal: controller.signal })
      .then((meetings) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("meetings", requestId)) return;
        setMts(meetings.filter((meeting) => meeting.meeting_name));
        setMeetingsLoaded(true);
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
      setSessionsLoaded(false);
      setDriversLoaded(false);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("sessions");
    setLoading?.("Φόρτωση σκελών…");
    setErr?.("");
    setDrvs([]);
    setSelSe(null);
    setSessionsLoaded(false);
    setDriversLoaded(false);
    resetDriverSelections();
    fetchSessions(selMt.meeting_key, { signal: controller.signal })
      .then((sessions) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("sessions", requestId)) return;
        setSess(sessions.filter((session) => supportedSessionNameSet.has(session.session_name)));
        setSessionsLoaded(true);
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
      setDriversLoaded(false);
      resetDriverSelections();
      return;
    }
    const controller = new AbortController();
    const requestId = nextSelectorRequestId("drivers");
    setLoading?.("Φόρτωση οδηγών…");
    setErr?.("");
    setDriversLoaded(false);
    resetDriverSelections();
    fetchDrivers(selSe.session_key, { signal: controller.signal })
      .then((drivers) => {
        if (controller.signal.aborted || !isCurrentSelectorRequest("drivers", requestId)) return;
        setDrvs(uniqueDrivers(drivers));
        setDriversLoaded(true);
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
    if (presetActiveRef?.current) return;
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.mk || !meetingsLoaded || !restoreFlags || restoreFlags.meeting) return;
    const meeting = mts.find((item) => String(item.meeting_key) === restoreState.mk);
    restoreFlags.meeting = true;
    if (!meeting) {
      markDownstreamRestoreFlags(restoreFlags, "meeting");
      setRestoreWarning(setErr, buildRestoreMeetingError(restoreState.mk));
      return;
    }
    setSelMt(meeting);
  }, [meetingsLoaded, mts, presetActiveRef, restoreFlagsRef, restoreStateRef, restoreTick, setErr]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreState?.sk || !sessionsLoaded || !restoreFlags || restoreFlags.session) return;
    const session = sess.find((item) => String(item.session_key) === restoreState.sk);
    restoreFlags.session = true;
    if (!session) {
      markDownstreamRestoreFlags(restoreFlags, "session");
      setRestoreWarning(setErr, buildRestoreSessionError(restoreState.sk));
      return;
    }
    setSelSe(session);
  }, [presetActiveRef, restoreFlagsRef, restoreStateRef, restoreTick, sess, sessionsLoaded, setErr]);

  const slotArgs = { sessionKey, presetActiveRef, dispatchSlots, clearReplaySlot };
  useSlotLaps({ ...slotArgs, slot: 1, driverNumber: slots[0].driverNumber });
  useSlotLaps({ ...slotArgs, slot: 2, driverNumber: slots[1].driverNumber });
  useSlotLaps({ ...slotArgs, slot: 3, driverNumber: slots[2].driverNumber });
  useSlotLaps({ ...slotArgs, slot: 4, driverNumber: slots[3].driverNumber });

  const [laps1, laps2, laps3, laps4] = slots.map((slotState) => slotState.laps);
  const lapSelect1 = useMemo(() => prepareLapSelectModel(laps1), [laps1]);
  const lapSelect2 = useMemo(() => prepareLapSelectModel(laps2), [laps2]);
  const lapSelect3 = useMemo(() => prepareLapSelectModel(laps3), [laps3]);
  const lapSelect4 = useMemo(() => prepareLapSelectModel(laps4), [laps4]);
  const lapSelects = useMemo(
    () => [lapSelect1, lapSelect2, lapSelect3, lapSelect4],
    [lapSelect1, lapSelect2, lapSelect3, lapSelect4]
  );

  // Fastest-lap fallback: an unselected slot takes its fastest valid lap. Runs before URL lap restore.
  useEffect(() => {
    lapSelects.forEach((lapSelect, index) => {
      if (lapSelect.fastestLapNumber && !slots[index].lapNumber) {
        dispatchSlots({ type: "setLap", slot: index + 1, value: lapSelect.fastestLapNumber });
      }
    });
  }, [lapSelects, slots]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!driversLoaded || !restoreFlags || restoreFlags.drivers) return;
    const { driverNumbers, missingDrivers, hasRequestedDrivers, nextCount } = resolveRestoredDrivers(
      restoreState,
      drvs
    );
    restoreFlags.drivers = true;
    if (!hasRequestedDrivers) {
      markDownstreamRestoreFlags(restoreFlags, "drivers");
      return;
    }
    if (missingDrivers.length) {
      markRestoreFlags(
        restoreFlags,
        missingDrivers.map((driver) => `lap${driver.slot}`)
      );
      setRestoreWarning(setErr, buildRestoreDriversError(missingDrivers));
    }
    dispatchSlots({ type: "restoreDrivers", driverNumbers });
    setNumDrivers(nextCount);
  }, [driversLoaded, drvs, presetActiveRef, restoreFlagsRef, restoreStateRef, restoreTick, setErr]);

  useEffect(() => {
    if (presetActiveRef?.current) return;
    const restoreState = restoreStateRef?.current;
    const restoreFlags = restoreFlagsRef?.current;
    if (!restoreFlags) return;
    slots.forEach((slotState, index) => {
      const slot = index + 1;
      const flag = `lap${slot}`;
      if (restoreFlags[flag] || !slotState.driverNumber || !slotState.lapsLoaded) return;
      const { hasRequestedLap, requestedLapNumber, lapNumber, missingLap } = resolveRestoredLap(
        restoreState?.[`l${slot}`],
        lapSelects[index]
      );
      if (!hasRequestedLap) return;
      restoreFlags[flag] = true;
      if (missingLap) {
        setRestoreWarning(setErr, buildRestoreLapError(slot, requestedLapNumber));
        return;
      }
      dispatchSlots({ type: "setLap", slot, value: lapNumber });
    });
  }, [lapSelects, presetActiveRef, restoreFlagsRef, restoreStateRef, restoreTick, setErr, slots]);

  const selectorSlots = useMemo(
    () => slots.map((slotState, index) => ({ ...slotState, slot: index + 1, lapSelect: lapSelects[index] })),
    [lapSelects, slots]
  );

  return useMemo(
    () => ({
      year,
      setYear,
      meetings: mts,
      meeting: selMt,
      sessions: sess,
      session: selSe,
      drivers: drvs,
      slots: selectorSlots,
      numDrivers,
      setNumDrivers,
      resetForUrlRestore,
      applyPresetSelectorData,
      selectMeeting,
      selectSession,
      selectDriverSlot,
      selectLapSlot,
      resetDriverSelections,
    }),
    [
      applyPresetSelectorData,
      drvs,
      mts,
      numDrivers,
      resetDriverSelections,
      resetForUrlRestore,
      selMt,
      selSe,
      selectDriverSlot,
      selectLapSlot,
      selectMeeting,
      selectSession,
      selectorSlots,
      sess,
      year,
    ]
  );
}
