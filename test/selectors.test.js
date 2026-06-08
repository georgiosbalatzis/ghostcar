import test from "node:test";
import assert from "node:assert/strict";
import {
  buildRestoreDriversError,
  buildRestoreLapError,
  buildRestoreMeetingError,
  buildRestoreSessionError,
  resolveRestoredDrivers,
  resolveRestoredLap,
} from "../src/hooks/useComparisonSelectors.js";

test("resolveRestoredDrivers keeps valid shared-link drivers and reports invalid slots", () => {
  const result = resolveRestoredDrivers(
    {
      d1: "81",
      d2: "999",
      d3: "16",
      d4: "abc",
      numDrivers: "4",
    },
    [{ driver_number: 81 }, { driver_number: 16 }]
  );

  assert.deepEqual(result.driverNumbers, [81, null, 16, null]);
  assert.deepEqual(result.missingDrivers, [
    { slot: 2, driverNumber: 999 },
    { slot: 4, driverNumber: "abc" },
  ]);
  assert.equal(result.hasRequestedDrivers, true);
  assert.equal(result.nextCount, 4);
});

test("resolveRestoredDrivers derives driver count from valid restored optional slots", () => {
  const result = resolveRestoredDrivers({ d1: "81", d4: "4" }, [{ driver_number: 81 }, { driver_number: 4 }]);

  assert.deepEqual(result.driverNumbers, [81, null, null, 4]);
  assert.deepEqual(result.missingDrivers, []);
  assert.equal(result.nextCount, 4);
});

test("resolveRestoredDrivers ignores links without encoded drivers", () => {
  const result = resolveRestoredDrivers({}, [{ driver_number: 81 }]);

  assert.equal(result.hasRequestedDrivers, false);
  assert.deepEqual(result.driverNumbers, [null, null, null, null]);
  assert.equal(result.nextCount, 2);
});

test("resolveRestoredLap keeps valid laps and reports unavailable encoded laps", () => {
  assert.deepEqual(resolveRestoredLap("5", { options: [{ lap_number: 3 }, { lap_number: 5 }] }), {
    hasRequestedLap: true,
    requestedLapNumber: 5,
    lapNumber: 5,
    missingLap: false,
  });
  assert.deepEqual(resolveRestoredLap("7", { options: [{ lap_number: 3 }, { lap_number: 5 }] }), {
    hasRequestedLap: true,
    requestedLapNumber: 7,
    lapNumber: null,
    missingLap: true,
  });
  assert.deepEqual(resolveRestoredLap("abc", { options: [{ lap_number: 3 }] }), {
    hasRequestedLap: true,
    requestedLapNumber: "abc",
    lapNumber: null,
    missingLap: true,
  });
  assert.equal(resolveRestoredLap("").hasRequestedLap, false);
});

test("restore warning builders return clear Greek messages", () => {
  assert.match(buildRestoreMeetingError(123), /Δεν βρέθηκε το Γκραν Πρι/);
  assert.match(buildRestoreSessionError(456), /Δεν βρέθηκε το σκέλος/);
  assert.match(buildRestoreDriversError([{ slot: 4, driverNumber: "abc" }]), /Οδηγός 4 \(#abc\)/);
  assert.match(buildRestoreLapError(2, 99), /διαθέσιμος γύρος L99 για τον Οδηγό 2/);
});
