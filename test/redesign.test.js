import test from "node:test";
import assert from "node:assert/strict";
import { getDistinctDriverColors } from "../src/domain/drivers.js";
import { normalizePageTab } from "../src/features/analysis/pageTabs.js";
import { buildKeyFacts, buildReplayModel, formatMeetingShort } from "../src/features/replay/replayModel.js";

test("teammates get distinguishable colours; distinct teams keep theirs", () => {
  const [a, b, c] = getDistinctDriverColors(["#3671C6", "#3671C6", "#FF8000"]);
  assert.equal(a, "#3671C6");
  assert.notEqual(b.toLowerCase(), a.toLowerCase());
  assert.match(b, /^#[0-9a-f]{6}$/);
  assert.equal(c, "#FF8000");
});

test("page tab normalisation keeps old share links working", () => {
  assert.equal(normalizePageTab("laps"), "laps");
  assert.equal(normalizePageTab("season"), "season");
  // Rail and mobile tab names from redesign-v2 and earlier links.
  assert.equal(normalizePageTab("live"), "replay");
  assert.equal(normalizePageTab("telemetry"), "replay");
  assert.equal(normalizePageTab("stats"), "sectors");
  assert.equal(normalizePageTab("3d"), "replay");
  assert.equal(normalizePageTab("h2h"), "season");
  assert.equal(normalizePageTab(null), "replay");
  assert.equal(normalizePageTab("nonsense"), "replay");
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
  // Real-time playback: the replay lasts as long as the slowest lap, and each driver has a time index.
  assert.equal(model.duration, 78.945);
  assert.equal(model.drivers[0].pathTimes.length, path.length);
});

test("key facts name the fastest lap, the final difference, the biggest sector swing and top speeds", () => {
  const driver = (slot, label, name, lapDuration, sectors, top) => ({
    slot,
    label,
    name,
    lapDuration,
    lapNumber: slot + 6,
    sectors,
    tel: [{ speed: top - 20 }, { speed: top }],
  });
  const facts = buildKeyFacts({
    drivers: [
      driver(1, "VER", "Max Verstappen", 78.792, [26.841, 27.012, 24.939], 345),
      driver(2, "NOR", "Lando Norris", 78.945, [26.8, 27.124, 25.021], 341),
    ],
  });
  assert.deepEqual(facts, [
    { label: "Ταχύτερος", value: "Max Verstappen", note: "1:18.792 · Γύρος 7" },
    { label: "Τελική διαφορά", value: "0.153 s", note: "VER μπροστά από NOR" },
    { label: "Μεγαλύτερο κέρδος", value: "Τομέας 2", note: "VER −0.112 s" },
    { label: "Μέγιστη ταχύτητα", value: "345 km/h", note: "VER · NOR 341" },
  ]);
});

test("no replay model without geometry or snapshot", () => {
  assert.equal(buildReplayModel(null), null);
  assert.equal(buildReplayModel({ trackPath: null, meta: {} }), null);
  assert.equal(formatMeetingShort("Abu Dhabi Grand Prix"), "Abu Dhabi GP");
});
