import { expect, test } from "@playwright/test";

const APP_PATH = "/ghostcar/";
const MEETING_KEY = 9001;
const SESSION_KEY = 9101;
const DRIVER_1 = 1;
const DRIVER_2 = 4;
const LAP_1 = 7;
const LAP_2 = 8;

const sceneUrl = `${APP_PATH}?y=2025&mk=${MEETING_KEY}&sk=${SESSION_KEY}&d1=${DRIVER_1}&d2=${DRIVER_2}&l1=${LAP_1}&l2=${LAP_2}&v=2`;
const invalidLapUrl = `${APP_PATH}?y=2025&mk=${MEETING_KEY}&sk=${SESSION_KEY}&d1=${DRIVER_1}&d2=${DRIVER_2}&l1=99&l2=42&tv=2d&v=2`;

const meeting = {
  meeting_key: MEETING_KEY,
  meeting_name: "Monza Grand Prix",
  circuit_short_name: "Monza",
  year: 2025,
};

const session = {
  session_key: SESSION_KEY,
  meeting_key: MEETING_KEY,
  session_name: "Qualifying",
};

const drivers = [
  {
    session_key: SESSION_KEY,
    driver_number: DRIVER_1,
    name_acronym: "VER",
    full_name: "Max Verstappen",
    team_name: "Red Bull Racing",
  },
  {
    session_key: SESSION_KEY,
    driver_number: DRIVER_2,
    name_acronym: "NOR",
    full_name: "Lando Norris",
    team_name: "McLaren",
  },
];

const lapsByDriver = {
  [DRIVER_1]: [
    {
      session_key: SESSION_KEY,
      driver_number: DRIVER_1,
      lap_number: LAP_1,
      lap_duration: 82.1,
      duration_sector_1: 27.2,
      duration_sector_2: 28.4,
      duration_sector_3: 26.5,
      date_start: "2025-09-06T14:00:00.000Z",
    },
  ],
  [DRIVER_2]: [
    {
      session_key: SESSION_KEY,
      driver_number: DRIVER_2,
      lap_number: LAP_2,
      lap_duration: 82.6,
      duration_sector_1: 27.5,
      duration_sector_2: 28.3,
      duration_sector_3: 26.8,
      date_start: "2025-09-06T14:02:00.000Z",
    },
  ],
};

const stintsByDriver = {
  [DRIVER_1]: [{ driver_number: DRIVER_1, lap_start: LAP_1, lap_end: LAP_1, compound: "SOFT" }],
  [DRIVER_2]: [{ driver_number: DRIVER_2, lap_start: LAP_2, lap_end: LAP_2, compound: "SOFT" }],
};

function buildLocation(driverNumber) {
  const offset = driverNumber === DRIVER_1 ? 0 : 0.34;
  const points = [];
  for (let i = 0; i < 96; i++) {
    const t = (i / 96) * Math.PI * 2;
    const radiusX = 520 + Math.sin(t * 3) * 24;
    const radiusY = 360 + Math.cos(t * 2) * 18;
    points.push({
      date: new Date(Date.parse("2025-09-06T14:00:00.000Z") + i * 850).toISOString(),
      driver_number: driverNumber,
      x: Math.round(Math.cos(t + offset) * radiusX),
      y: Math.round(Math.sin(t + offset) * radiusY),
      z: Math.round(Math.sin(t * 2 + offset) * 12),
    });
  }
  return points;
}

function buildTelemetry(driverNumber) {
  const phase = driverNumber === DRIVER_1 ? 0 : 0.45;
  const samples = [];
  for (let i = 0; i < 96; i++) {
    const t = i / 95;
    const wave = Math.sin(t * Math.PI * 2 + phase);
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

const locationsByDriver = {
  [DRIVER_1]: buildLocation(DRIVER_1),
  [DRIVER_2]: buildLocation(DRIVER_2),
};

const telemetryByDriver = {
  [DRIVER_1]: buildTelemetry(DRIVER_1),
  [DRIVER_2]: buildTelemetry(DRIVER_2),
};

function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function routeOpenF1Fixtures(page) {
  await page.route("https://api.openf1.org/v1/**", async (route) => {
    const url = new URL(route.request().url());
    const driverNumber = Number(url.searchParams.get("driver_number"));
    let body = [];

    if (url.pathname.endsWith("/meetings")) body = [meeting];
    if (url.pathname.endsWith("/sessions")) body = [session];
    if (url.pathname.endsWith("/drivers")) body = drivers;
    if (url.pathname.endsWith("/laps")) body = lapsByDriver[driverNumber] || [];
    if (url.pathname.endsWith("/stints")) body = stintsByDriver[driverNumber] || [];
    if (url.pathname.endsWith("/location")) body = locationsByDriver[driverNumber] || [];
    if (url.pathname.endsWith("/car_data")) body = telemetryByDriver[driverNumber] || [];

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(body),
    });
  });
}

async function canvasHasNonBlankPixels(canvas) {
  return canvas.evaluate((node) => {
    if (!node.width || !node.height) return false;

    const sample = document.createElement("canvas");
    sample.width = 24;
    sample.height = 24;
    const context = sample.getContext("2d");
    context.drawImage(node, 0, 0, sample.width, sample.height);
    const data = context.getImageData(0, 0, sample.width, sample.height).data;

    let visiblePixels = 0;
    let colorEnergy = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] <= 0) continue;
      visiblePixels++;
      colorEnergy += data[i] + data[i + 1] + data[i + 2];
    }

    return visiblePixels > 0 && colorEnergy > visiblePixels * 8;
  });
}

async function expectSceneCanvasReady(page) {
  const canvas = page.locator("canvas").first();
  await expect(canvas).toBeVisible();
  await expect
    .poll(() => canvasHasNonBlankPixels(canvas), {
      message: "expected the WebGL canvas to contain rendered pixels",
    })
    .toBe(true);
}

test("3D replay canvas renders and survives a 2D view round trip", async ({ page }) => {
  const errors = collectPageErrors(page);
  await page.addInitScript(() => {
    window.localStorage.setItem("f1s-toured", "1");
    window.localStorage.setItem("f1s-track-view", "3d");
  });
  await routeOpenF1Fixtures(page);

  await page.goto(sceneUrl);

  await expectSceneCanvasReady(page);

  await page.getByRole("button", { name: "2D" }).first().click();
  await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();
  await expect(page.locator("canvas")).toHaveCount(0);

  await page.getByRole("button", { name: "3D" }).first().click();
  await expectSceneCanvasReady(page);

  expect(errors).toEqual([]);
});

test("invalid shared lap warning remains visible after fallback auto-load", async ({ page }) => {
  const errors = collectPageErrors(page);
  await page.addInitScript(() => {
    window.localStorage.setItem("f1s-toured", "1");
    window.localStorage.setItem("f1s-track-view", "2d");
  });
  await routeOpenF1Fixtures(page);

  await page.goto(invalidLapUrl);

  await expect(page.getByText(/Δεν βρέθηκε διαθέσιμος γύρος L99 για τον Οδηγό 1/)).toBeVisible();
  await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();

  expect(errors).toEqual([]);
});

for (const width of [320, 390, 768]) {
  test(`loaded replay remains usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 768 ? 1024 : 844 });
    await page.addInitScript(() => localStorage.setItem("f1s-toured", "1"));
    await routeOpenF1Fixtures(page);
    await page.goto(`${sceneUrl}&tv=2d`);
    await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();
    const slider = page.getByRole("slider", { name: "Πρόοδος γύρου" });
    await slider.fill("0.45");
    await expect(slider).toHaveValue("0.45");
    await page.getByLabel("Ταχύτητα αναπαραγωγής").selectOption("2");
    await expect(page.getByLabel("Ταχύτητα αναπαραγωγής")).toHaveValue("2");
    await page.getByRole("button", { name: "Εναρξη σύγκρισης" }).click();
    await expect.poll(async () => Number(await slider.inputValue()), { timeout: 8000 }).toBeGreaterThan(0.45);
    await page.getByRole("button", { name: "Παύση αναπαραγωγής" }).click();
    await page.getByRole("button", { name: "Ενεργοποίηση επανάληψης" }).click();
    await expect(page.getByRole("button", { name: "Απενεργοποίηση επανάληψης" })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth,
      viewport: innerWidth,
      play: document.querySelector(".play-button").getBoundingClientRect().toJSON(),
      slider: document.querySelector('input[type="range"]').getBoundingClientRect().toJSON(),
    }));
    expect(dimensions.page).toBeLessThanOrEqual(width);
    expect(dimensions.play.right).toBeLessThanOrEqual(width);
    expect(dimensions.slider.width).toBeGreaterThan(width < 768 ? 250 : 150);
    if (width < 768) {
      await expect(page.locator(".comparison-setup")).not.toHaveAttribute("open");
      await page.getByRole("button", { name: "Επιστροφή στις επιλογές" }).click();
      await expect(page.getByLabel("Σεζόν", { exact: true })).toBeVisible();
    }
  });
}

test("mobile embed keeps replay, scrub and transport inside its frame", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 650 });
  await routeOpenF1Fixtures(page);
  await page.goto(`${sceneUrl}&tv=2d&embed=1`);
  await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();
  const play = page.getByRole("button", { name: "Εναρξη σύγκρισης" });
  await expect(play).toBeInViewport();
  await page.getByRole("slider").fill("0.6");
  await expect(page.getByRole("slider")).toHaveValue("0.6");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await expect(page.locator(".masthead")).toHaveCount(0);
});

test("analysis and sharing utilities preserve the configured comparison", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("f1s-toured", "1"));
  await routeOpenF1Fixtures(page);
  await page.goto(`${sceneUrl}&tv=2d`);
  await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();
  const openTool = async (name) => {
    await page.getByLabel("Άνοιγμα μενού εργαλείων").click();
    await page.getByRole("button", { name, exact: true }).click();
  };
  for (const [name, text] of [
    ["Στατιστικά γύρου", "ΑΝΑΛΥΣΗ ΓΥΡΟΥ"],
    ["Διαθέσιμοι γύροι", "ΧΡΟΝΟΙ ΓΥΡΩΝ"],
    ["Αναμετρήσεις H2H", "H2H 2025"],
    ["Ανάλυση σεζόν", "ΑΝΑΛΥΣΗ ΣΕΖΟΝ 2025"],
  ]) {
    await openTool(name);
    await expect(page.locator(".analysis-dialog").getByText(text, { exact: false }).first()).toBeVisible();
    await page.keyboard.press("Escape");
  }
  await openTool("Αποθήκευση στη συλλογή");
  await openTool("Άνοιγμα συλλογής");
  await expect(page.locator(".gallery-row")).toHaveCount(1);
  await page.locator(".gallery-row").click();
  await expect(page.getByText("2D ΑΝΑΠΑΡΑΓΩΓΗ")).toBeVisible();
  await expect(page.getByLabel("Οδηγός 1", { exact: true })).toHaveValue("1");
  await openTool("Ενσωμάτωση αυτής της σύγκρισης");
  await expect(page.locator("textarea")).toHaveValue(/embed=1/);
  await page.keyboard.press("Escape");
  await page.locator(".share-button").click();
  await expect(page.getByRole("dialog", { name: "Σύνδεσμος κοινοποίησης" })).toBeVisible();
  await expect(page.getByRole("dialog").getByRole("textbox")).toHaveValue(/d1=1&d2=4/);
  await page.keyboard.press("Escape");
  await page.getByRole("slider").focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(async () => Number(await page.getByRole("slider").inputValue())).toBeGreaterThan(0);
});
