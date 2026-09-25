import test from "node:test";
import assert from "node:assert/strict";
import { getDistinctDriverColors } from "../src/domain/drivers.js";
import { normalizeRailTab } from "../src/features/analysis/railTabs.js";
import { buildReplayModel, formatMeetingShort } from "../src/features/replay/replayModel.js";

test("teammates get distinguishable colours; distinct teams keep theirs", () => {
  const [a, b, c] = getDistinctDriverColors(["#3671C6", "#3671C6", "#FF8000"]);
  assert.equal(a, "#3671C6");
  assert.notEqual(b.toLowerCase(), a.toLowerCase());
  assert.match(b, /^#[0-9a-f]{6}$/);
  assert.equal(c, "#FF8000");
});

test("rail tab normalisation keeps old share links working", () => {
  assert.equal(normalizeRailTab("telemetry"), "telemetry");
  assert.equal(normalizeRailTab("laps"), "laps");
  assert.equal(normalizeRailTab("stats"), "sectors");
  assert.equal(normalizeRailTab("3d"), "live");
  assert.equal(normalizeRailTab("h2h"), "live");
  assert.equal(normalizeRailTab(null), "live");
  assert.equal(normalizeRailTab("nonsense"), "live");
});

function lap(number, duration) {
  return {
    lap_number: number,
    lap_duration: duration,
    duration_sector_1: 26,
    duration_sector_2: 27,
    duration_sector_3: duration - 53,
  };
}

const path = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 },
];

test("replay model describes the loaded snapshot, not the live selection", () => {
  const model = buildReplayModel({
    trackPath: path,
    circuitFlip: false,
    circuitTurns: 11,
    meta: {
      year: 2025,
      meeting: { meeting_name: "Italian Grand Prix" },
      session: { session_name: "Qualifying" },
      slots: [
        {
          slot: 1,
          driver: { driver_number: 1, name_acronym: "VER", team_name: "Red Bull Racing" },
          lap: lap(7, 78.792),
          stints: [{ lap_start: 1, lap_end: 9, compound: "soft" }],
        },
        {
          slot: 2,
          driver: { driver_number: 11, name_acronym: "PER", team_name: "Red Bull Racing" },
          lap: lap(4, 78.945),
          stints: [],
        },
        {
          slot: 3,
          driver: { driver_number: 16, name_acronym: "LEC", team_name: "Ferrari" },
          lap: lap(9, 79.1),
          stints: [],
        },
      ],
    },
    // Slot 3's streams never arrived: it must not appear in the replay.
    streams: { 1: { location: path, telemetry: [] }, 2: { location: path, telemetry: [] } },
  });

  assert.equal(model.meetingName, "Italian GP");
  assert.equal(model.sessionLabel, "Κατατακτήριες");
  assert.deepEqual(
    model.drivers.map((driver) => driver.label),
    ["VER", "PER"]
  );
  assert.equal(model.drivers[0].compound, "SOFT");
  assert.notEqual(model.drivers[0].color, model.drivers[1].color, "teammates must not share a colour");
  assert.equal(model.drivers[0].gap, 0);
  assert.ok(Math.abs(model.drivers[1].gap - 0.153) < 1e-9);
  // Final lap-time difference A − B (negative: A faster).
  assert.ok(Math.abs(model.delta + 0.153) < 1e-9);
});

test("no replay model without geometry or snapshot", () => {
  assert.equal(buildReplayModel(null), null);
  assert.equal(buildReplayModel({ trackPath: null, meta: {} }), null);
  assert.equal(formatMeetingShort("Abu Dhabi Grand Prix"), "Abu Dhabi GP");
});
