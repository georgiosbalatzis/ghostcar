// Deterministic OpenF1 fixtures shared by the Chromium smoke tests. Not live API validation.
export const APP_PATH = "/ghostcar/";
export const MEETING_KEY = 9001;
export const SESSION_KEY = 9101;

const meeting = { meeting_key: MEETING_KEY, meeting_name: "Monza Grand Prix", circuit_short_name: "Monza", year: 2025 };
const session = { session_key: SESSION_KEY, meeting_key: MEETING_KEY, session_name: "Qualifying" };

const DRIVERS = [
  { number: 1, acronym: "VER", name: "Max Verstappen", team: "Red Bull Racing", lap: 7, time: 82.1 },
  { number: 4, acronym: "NOR", name: "Lando Norris", team: "McLaren", lap: 8, time: 82.6 },
  { number: 16, acronym: "LEC", name: "Charles Leclerc", team: "Ferrari", lap: 9, time: 82.9 },
  { number: 63, acronym: "RUS", name: "George Russell", team: "Mercedes", lap: 6, time: 83.0 },
];

const drivers = DRIVERS.map((driver) => ({
  session_key: SESSION_KEY,
  driver_number: driver.number,
  name_acronym: driver.acronym,
  full_name: driver.name,
  team_name: driver.team,
}));

function lapsFor(driver, index) {
  return [
    {
      session_key: SESSION_KEY,
      driver_number: driver.number,
      lap_number: driver.lap,
      lap_duration: driver.time,
      duration_sector_1: 27.2 + index * 0.1,
      duration_sector_2: 28.4,
      duration_sector_3: driver.time - 55.6 - index * 0.1,
      date_start: `2025-09-06T14:0${index}:00.000Z`,
    },
    {
      session_key: SESSION_KEY,
      driver_number: driver.number,
      lap_number: driver.lap - 2,
      lap_duration: driver.time + 0.9,
      duration_sector_1: 27.5,
      duration_sector_2: 28.8,
      duration_sector_3: driver.time - 55.4,
      date_start: `2025-09-06T13:5${index}:00.000Z`,
    },
  ];
}

function buildLocation(driverNumber, index) {
  const offset = index * 0.17;
  const points = [];
  for (let i = 0; i < 96; i++) {
    const t = (i / 96) * Math.PI * 2;
    points.push({
      date: new Date(Date.parse("2025-09-06T14:00:00.000Z") + i * 850).toISOString(),
      driver_number: driverNumber,
      x: Math.round(Math.cos(t + offset) * (520 + Math.sin(t * 3) * 24)),
      y: Math.round(Math.sin(t + offset) * (360 + Math.cos(t * 2) * 18)),
      z: Math.round(Math.sin(t * 2 + offset) * 12),
    });
  }
  return points;
}

function buildTelemetry(driverNumber, index) {
  const samples = [];
  for (let i = 0; i < 96; i++) {
    const wave = Math.sin((i / 95) * Math.PI * 2 + index * 0.45);
    samples.push({
      date: new Date(Date.parse("2025-09-06T14:00:00.000Z") + i * 850).toISOString(),
      driver_number: driverNumber,
      speed: Math.round(210 + wave * 58),
      throttle: wave > -0.35 ? 92 : 38,
      brake: wave < -0.68 ? 1 : 0,
      rpm: Math.round(9800 + wave * 900),
      n_gear: Math.max(2, Math.min(8, Math.round(5 + wave * 2))),
      drs: i % 24 < 8 ? 12 : 0,
    });
  }
  return samples;
}

const byNumber = (build) => Object.fromEntries(DRIVERS.map((driver, index) => [driver.number, build(driver, index)]));
const laps = byNumber(lapsFor);
const stints = byNumber((driver) => [{ driver_number: driver.number, lap_start: 1, lap_end: 20, compound: "SOFT" }]);
const locations = byNumber((driver, index) => buildLocation(driver.number, index));
const telemetry = byNumber((driver, index) => buildTelemetry(driver.number, index));

export async function routeOpenF1(page, { status = 200, empty = false, locationDelayMs = 0 } = {}) {
  await page.route("https://api.openf1.org/v1/**", async (route) => {
    if (status !== 200) {
      await route.fulfill({ status, contentType: "application/json", body: "{}" });
      return;
    }
    const url = new URL(route.request().url());
    if (locationDelayMs && url.pathname.endsWith("/location")) {
      await new Promise((resolve) => setTimeout(resolve, locationDelayMs));
    }
    const driverNumber = Number(url.searchParams.get("driver_number"));
    const path = url.pathname;
    let body = [];
    if (!empty) {
      if (path.endsWith("/meetings")) body = [meeting];
      if (path.endsWith("/sessions")) body = [session];
      if (path.endsWith("/drivers")) body = drivers;
      if (path.endsWith("/laps")) body = laps[driverNumber] || [];
      if (path.endsWith("/stints")) body = stints[driverNumber] || [];
      if (path.endsWith("/location")) body = locations[driverNumber] || [];
      if (path.endsWith("/car_data")) body = telemetry[driverNumber] || [];
    }
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(body) });
  });
}

export const comparisonUrl = `${APP_PATH}?y=2025&mk=${MEETING_KEY}&sk=${SESSION_KEY}&d1=1&d2=4&l1=7&l2=8&v=2`;
export const fourDriverUrl = `${APP_PATH}?y=2025&mk=${MEETING_KEY}&sk=${SESSION_KEY}&d1=1&d2=4&d3=16&d4=63&l1=7&l2=8&l3=9&l4=6&nd=4&v=2`;
export const invalidLapUrl = `${APP_PATH}?y=2025&mk=${MEETING_KEY}&sk=${SESSION_KEY}&d1=1&d2=4&l1=99&l2=42&tv=2d&v=2`;

export function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

export async function setPreferences(page, { trackView = "2d", theme } = {}) {
  await page.addInitScript(
    ([view, th]) => {
      localStorage.setItem("f1s-track-view", view);
      if (th) localStorage.setItem("f1s-theme", th);
    },
    [trackView, theme]
  );
}

export const trackMap = (page) => page.locator("svg.track-map");
export const timeline = (page) => page.getByRole("slider", { name: "Πρόοδος γύρου" });

export async function canvasHasPixels(canvas) {
  return canvas.evaluate((node) => {
    if (!node.width || !node.height) return false;
    const sample = document.createElement("canvas");
    sample.width = 24;
    sample.height = 24;
    const context = sample.getContext("2d");
    context.drawImage(node, 0, 0, sample.width, sample.height);
    const data = context.getImageData(0, 0, sample.width, sample.height).data;
    let visible = 0;
    let energy = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] <= 0) continue;
      visible++;
      energy += data[i] + data[i + 1] + data[i + 2];
    }
    return visible > 0 && energy > visible * 8;
  });
}
