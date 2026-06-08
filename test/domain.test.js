import test from "node:test";
import assert from "node:assert/strict";
import { calculateTrackArea, getCircuitInfo, getCircuitReplayConfig } from "../src/domain/circuit.js";
import { formatDriverOption, getDriverFullName, uniqueDrivers } from "../src/domain/drivers.js";
import { bestLap, getCompoundForLap, getLapTimeRange } from "../src/domain/laps.js";
import { buildReplayGeometry, getReplayDataIssue, hasMinimumReplayData } from "../src/domain/replay.js";
import { buildReplayStreamRequests } from "../src/services/openf1.js";

test("bestLap chooses the fastest valid lap with a timestamp", () => {
  const lap = bestLap([
    { lap_number: 1, lap_duration: 89.5 },
    { lap_number: 2, lap_duration: 10, date_start: "2025-04-06T06:00:00Z" },
    { lap_number: 3, lap_duration: 91.2, date_start: "2025-04-06T06:01:30Z" },
    { lap_number: 4, lap_duration: 90.1, date_start: "2025-04-06T06:03:00Z" },
  ]);

  assert.equal(lap.lap_number, 4);
  assert.equal(bestLap(null), null);
});

test("getLapTimeRange builds timestamp bounds and rejects invalid starts", () => {
  assert.deepEqual(getLapTimeRange({ date_start: "2025-04-06T06:00:00.000Z", lap_duration: 90.5 }), {
    start: "2025-04-06T06:00:00.000Z",
    end: "2025-04-06T06:01:30.500Z",
    duration: 90.5,
  });
  assert.equal(getLapTimeRange({ lap_duration: 90.5 }), null);
  assert.equal(getLapTimeRange({ date_start: "not-a-date", lap_duration: 90.5 }), null);
});

test("getCompoundForLap resolves stint compound by lap", () => {
  const stints = [
    { lap_start: 1, lap_end: 8, compound: "medium" },
    { lap_start: 9, lap_end: 20, compound: "soft" },
  ];

  assert.equal(getCompoundForLap(stints, 12), "SOFT");
  assert.equal(getCompoundForLap(stints, 21), null);
});

test("circuit helpers resolve metadata and replay flip decisions", () => {
  assert.deepEqual(getCircuitInfo({ circuit_short_name: "Suzuka" }), {
    turns: 18,
    clockwise: true,
  });
  assert.deepEqual(getCircuitInfo({ meeting_name: "Sao Paulo Grand Prix" }), {
    turns: 15,
    clockwise: false,
  });

  const clockwisePoints = [
    { x: 0, z: 0 },
    { x: 1, z: 0 },
    { x: 1, z: 1 },
    { x: 0, z: 1 },
  ];

  assert.equal(calculateTrackArea(clockwisePoints), 2);
  assert.deepEqual(getCircuitReplayConfig({ circuit_short_name: "Suzuka" }, clockwisePoints), {
    turns: 18,
    clockwise: true,
    area: 2,
    flip: true,
  });
});

test("driver helpers dedupe, name, and format drivers", () => {
  const drivers = uniqueDrivers([
    { driver_number: 4, name_acronym: "NOR", full_name: "Lando Norris", team_name: "McLaren" },
    { driver_number: 4, name_acronym: "NOR", full_name: "Lando Norris", team_name: "McLaren" },
    { driver_number: 81, name_acronym: "PIA", first_name: "Oscar", last_name: "Piastri", team_name: "McLaren" },
  ]);

  assert.deepEqual(
    drivers.map((driver) => driver.driver_number),
    [4, 81]
  );
  assert.equal(getDriverFullName({ driver_number: 16 }), "Charles Leclerc");
  assert.equal(formatDriverOption(drivers[0]), "NOR • Lando Norris • McLaren");
});

test("replay helpers validate primary slots and build geometry", () => {
  const location = [
    { x: 0, y: 0, z: 0 },
    { x: 10, y: 0, z: 1 },
    { x: 10, y: 10, z: 2 },
    { x: 0, y: 10, z: 3 },
    { x: 0, y: 0, z: 4 },
  ];

  assert.equal(
    hasMinimumReplayData([
      { slot: 2, location },
      { slot: 1, location },
      { slot: 3, location: [] },
    ]),
    true
  );
  assert.equal(hasMinimumReplayData([{ slot: 1, location }]), false);
  assert.equal(
    getReplayDataIssue([
      { slot: 1, location, telemetry: [{ speed: 280 }] },
      { slot: 2, location, telemetry: [{ speed: 275 }] },
    ]),
    null
  );
  assert.deepEqual(getReplayDataIssue([{ slot: 1, location }], { requireTelemetry: false }), {
    type: "missing-location",
    slot: 2,
    points: 0,
    minimumPoints: 5,
  });
  assert.deepEqual(
    getReplayDataIssue(
      [
        { slot: 1, location, telemetry: [{ speed: 280 }] },
        { slot: 2, location: location.slice(0, 2), telemetry: [{ speed: 275 }] },
      ],
      { requireTelemetry: false }
    ),
    {
      type: "insufficient-location",
      slot: 2,
      points: 2,
      minimumPoints: 5,
    }
  );
  assert.deepEqual(
    getReplayDataIssue([
      { slot: 1, location, telemetry: [] },
      { slot: 2, location, telemetry: [{ speed: 275 }] },
    ]),
    {
      type: "missing-telemetry",
      slot: 1,
    }
  );

  const geometry = buildReplayGeometry({ circuit_short_name: "Suzuka" }, location);
  assert.equal(geometry.circuitTurns, 18);
  assert.equal(typeof geometry.circuitFlip, "boolean");
  assert.equal(geometry.trackPath.length, location.length);
});

test("buildReplayStreamRequests keeps only drivers with valid lap ranges", () => {
  const requests = buildReplayStreamRequests("session-1", [
    {
      slot: 1,
      driverNumber: 4,
      lap: { lap_number: 12, date_start: "2025-04-06T06:00:00.000Z", lap_duration: 91 },
    },
    { slot: 2, driverNumber: 81, lap: { lap_number: 13, lap_duration: 92 } },
  ]);

  assert.equal(requests.length, 1);
  assert.equal(requests[0].sessionKey, "session-1");
  assert.equal(requests[0].driverNumber, 4);
  assert.equal(requests[0].range.end, "2025-04-06T06:01:31.000Z");
});
