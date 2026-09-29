// Records a real-circuit OpenF1 fixture for the e2e tests and screenshot scripts (live network, run rarely).
// Usage: node scripts/record-openf1-fixture.mjs
// Suzuka 2025 Qualifying, VER (1) vs NOR (4), each driver's fastest lap: the "Μαγική pole στη Suzuka" preset.
// Output: e2e/fixtures/suzuka-2025-q.json, served by routeOpenF1(page, { circuit: "suzuka" }).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const API = "https://api.openf1.org/v1";
const YEAR = 2025;
const MEETING_NAME = "Japanese Grand Prix";
const SESSION_NAME = "Qualifying";
const DRIVER_NUMBERS = [1, 4];
const OUT = path.resolve("e2e/fixtures/suzuka-2025-q.json");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function get(endpoint, params) {
  const url = new URL(`${API}${endpoint}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.append(key, value);
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await fetch(url);
    if (response.ok) return response.json();
    if (response.status !== 429 && response.status < 500) throw new Error(`${response.status} ${url}`);
    await sleep(1500 * (attempt + 1));
  }
  throw new Error(`Gave up on ${url}`);
}

const pick = (rows, keys) => rows.map((row) => Object.fromEntries(keys.map((key) => [key, row[key]])));

const meeting = (await get("/meetings", { year: YEAR })).find((item) => item.meeting_name === MEETING_NAME);
if (!meeting) throw new Error(`No ${MEETING_NAME} ${YEAR}`);
const session = (await get("/sessions", { meeting_key: meeting.meeting_key })).find(
  (item) => item.session_name === SESSION_NAME
);
if (!session) throw new Error(`No ${SESSION_NAME} session`);
const sk = session.session_key;

const drivers = await get("/drivers", { session_key: sk });
const laps = {};
const stints = {};
const location = {};
const telemetry = {};
const lapNumbers = {};

for (const number of DRIVER_NUMBERS) {
  laps[number] = await get("/laps", { session_key: sk, driver_number: number });
  stints[number] = await get("/stints", { session_key: sk, driver_number: number });
  // The app's fastest-lap fallback: the shortest timed lap.
  const fastest = laps[number]
    .filter((lap) => lap.lap_duration > 0 && lap.date_start)
    .reduce((best, lap) => (lap.lap_duration < best.lap_duration ? lap : best));
  lapNumbers[number] = fastest.lap_number;
  // Same window the app requests (getLapTimeRange in src/domain/laps.js).
  const range = {
    "date>": fastest.date_start,
    "date<": new Date(Date.parse(fastest.date_start) + fastest.lap_duration * 1000).toISOString(),
  };
  location[number] = pick(await get("/location", { session_key: sk, driver_number: number, ...range }), [
    "date",
    "driver_number",
    "x",
    "y",
    "z",
  ]);
  await sleep(500);
  telemetry[number] = pick(await get("/car_data", { session_key: sk, driver_number: number, ...range }), [
    "date",
    "driver_number",
    "speed",
    "throttle",
    "brake",
    "rpm",
    "n_gear",
    "drs",
  ]);
  await sleep(500);
  console.log(
    `driver ${number}: lap ${fastest.lap_number} (${fastest.lap_duration}s), ${location[number].length} location, ${telemetry[number].length} car_data samples`
  );
}

const fixture = {
  recordedAt: new Date().toISOString(),
  year: YEAR,
  meeting,
  session,
  drivers,
  lapNumbers,
  laps,
  stints,
  location,
  telemetry,
};
await mkdir(path.dirname(OUT), { recursive: true });
await writeFile(OUT, `${JSON.stringify(fixture)}\n`);
console.log(`wrote ${OUT}`);
