import { expect, test } from "@playwright/test";
import {
  APP_PATH,
  canvasHasPixels,
  collectPageErrors,
  comparisonUrl,
  fourDriverUrl,
  invalidLapUrl,
  routeOpenF1,
  setPreferences,
  suzukaUrl,
  timeline,
  trackMap,
} from "./fixtures.js";

// The Αγωνιστικό δελτίο's driver table: who is compared, ranked, with lap numbers.
const brief = (page) => page.getByRole("table", { name: "Οδηγοί σύγκρισης" });

async function expectSceneRendered(page) {
  const canvas = page.locator(".stage canvas").first();
  await expect(canvas).toBeVisible();
  await expect.poll(() => canvasHasPixels(canvas), { message: "WebGL canvas should render pixels" }).toBe(true);
}

test("primary flow: build, compare, play, scrub, switch view, inspect, edit, share", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await page.addInitScript(() => {
    // Deterministic clipboard failure exercises the manual-copy fallback.
    Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("no")) } });
  });
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await page.getByLabel("Γκραν Πρι").selectOption({ label: "Monza GP" });
  await page.getByLabel("Σκέλος").selectOption({ label: "Κατατακτήριες" });
  await page.getByLabel("Οδηγός 1", { exact: true }).selectOption("1");
  await page.getByLabel("Οδηγός 2", { exact: true }).selectOption("4");
  // Fastest-lap fallback preselects each driver's best lap.
  await expect(page.getByLabel("Γύρος οδηγού 1")).toHaveValue("7");
  await expect(page.getByLabel("Γύρος οδηγού 2")).toHaveValue("8");
  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();

  // Workspace: replay dominates, the form is gone, the result is labelled honestly.
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByLabel("Σεζόν")).toHaveCount(0);
  await expect(page.locator(".desk__facts")).toContainText("Τελική διαφορά0.500 s");
  await expect(page.getByRole("region", { name: "Ghost Car." })).toContainText("Monza GP 2025");
  await expect(page.getByText("Τελική διαφορά 0.500 s · VER ταχύτερος")).toBeVisible();

  await timeline(page).fill("0.45");
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await expect.poll(async () => Number(await timeline(page).inputValue()), { timeout: 8000 }).toBeGreaterThan(0.45);
  await page.getByRole("button", { name: "Παύση" }).click();

  await page.getByRole("button", { name: "3D", exact: true }).click();
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "2D", exact: true }).click();
  await expect(trackMap(page)).toBeVisible();

  // Telemetry sits on the replay tab: speed, throttle, brake and the gap at the same point on track.
  await expect(page.locator("figure.trace")).toHaveCount(4);
  await page.getByRole("tab", { name: "Τομείς" }).click();
  await expect(page.getByRole("table", { name: "Χρόνοι τομέων" })).toBeVisible();

  // Editing does not discard the loaded replay; it opens the builder in a sheet.
  await page.getByRole("button", { name: "Αλλαγή σύγκρισης" }).click();
  const sheet = page.getByRole("dialog", { name: "Αλλαγή σύγκρισης" });
  await expect(sheet.getByLabel("Οδηγός 1", { exact: true })).toHaveValue("1");
  await sheet.getByLabel("Γύρος οδηγού 1").selectOption("5");
  await sheet.getByRole("button", { name: "Φόρτωση σύγκρισης" }).click();
  await expect(sheet).toHaveCount(0);
  await page.getByRole("tab", { name: "Αναπαράσταση" }).click();
  await expect(brief(page)).toContainText("Γύρος 5");

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Αντιγραφή συνδέσμου" }).click();
  const linkDialog = page.getByRole("dialog", { name: "Σύνδεσμος σύγκρισης" });
  await expect(linkDialog.getByRole("textbox")).toHaveValue(/d1=1&d2=4&l1=5&l2=8/);
  await page.keyboard.press("Escape");

  expect(errors).toEqual([]);
});

test("a cancelled load never replaces the builder or leaves a stuck loading state", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page, { locationDelayMs: 1500 });
  await page.goto(APP_PATH);
  await page.getByLabel("Γκραν Πρι").selectOption({ label: "Monza GP" });
  await page.getByLabel("Σκέλος").selectOption({ label: "Κατατακτήριες" });
  await page.getByLabel("Οδηγός 1", { exact: true }).selectOption("1");
  await page.getByLabel("Οδηγός 2", { exact: true }).selectOption("4");
  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();

  // Load status reports in the signal band.
  const status = page.getByRole("status").filter({ hasText: "VER γύρος 7 · NOR γύρος 8" });
  await expect(status).toContainText("VER γύρος 7 · NOR γύρος 8");
  await status.getByRole("button", { name: "Ακύρωση" }).click();
  await expect(status).toHaveCount(0);
  // Let the aborted responses arrive: they must not produce a replay.
  await page.waitForTimeout(1800);
  await expect(trackMap(page)).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Σύγκριση γύρων" })).toBeEnabled();

  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();
  await expect(trackMap(page)).toBeVisible({ timeout: 8000 });
});

test("3D replay renders and survives a 2D round trip from a shared link", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "Επιλογές προβολής" }).click();
  await page.getByRole("menuitemradio", { name: "Από ψηλά" }).click();
  await page.getByRole("button", { name: "2D", exact: true }).click();
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".stage canvas")).toHaveCount(0);
  await page.getByRole("button", { name: "3D", exact: true }).click();
  await expectSceneRendered(page);
  expect(errors).toEqual([]);
});

test("WebGL failure continues in 2D with a discreet message", async ({ page }) => {
  await setPreferences(page, { trackView: "3d" });
  await page.addInitScript(() => {
    delete window.WebGLRenderingContext;
  });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByRole("status").filter({ hasText: "Συνέχεια σε 2D" })).toBeVisible();
});

test("invalid shared lap warning stays visible after fastest-lap fallback", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(invalidLapUrl);
  await expect(page.getByText(/Δεν βρέθηκε διαθέσιμος γύρος L99 για τον Οδηγό 1/)).toBeVisible();
  await expect(trackMap(page)).toBeVisible();
  await expect(brief(page)).toContainText("Γύρος 7");
  expect(errors).toEqual([]);
});

test("four-driver links restore every slot", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(fourDriverUrl);
  await expect(brief(page).getByRole("row")).toHaveCount(4);
  await expect(page.locator(".car")).toHaveCount(4);
  await expect(page.locator(".brake-lane")).toHaveCount(4);
});

test("picking another lap marks the replay as out of date until applied", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await page.getByRole("tab", { name: "Γύροι" }).click();
  await page.getByRole("button", { name: /Γ5/ }).first().click();
  const pending = page.getByRole("status").filter({ hasText: "διαφέρει" });
  await expect(pending).toBeVisible();
  // The replay still describes what was loaded.
  await page.getByRole("tab", { name: "Αναπαράσταση" }).click();
  await expect(brief(page)).toContainText("Γύρος 7");
  await pending.getByRole("button", { name: "Φόρτωση" }).click();
  await expect(brief(page)).toContainText("Γύρος 5");
  await expect(pending).toHaveCount(0);
});

for (const width of [320, 390, 768]) {
  test(`loaded replay is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 768 ? 1024 : 844 });
    await setPreferences(page, { trackView: "2d" });
    await routeOpenF1(page);
    await page.goto(comparisonUrl);
    await expect(trackMap(page)).toBeVisible();

    await timeline(page).fill("0.45");
    await expect(timeline(page)).toHaveValue("0.45");
    // Both cars sit near the right edge here: every name stays whole inside the stage and clear of the others.
    const labels = await page.evaluate(() => {
      const stage = document.querySelector(".stage__canvas").getBoundingClientRect();
      const rects = [...document.querySelectorAll(".car__label")].map((node) => node.getBoundingClientRect());
      return {
        inside: rects.every((r) => r.left >= stage.left && r.right <= stage.right),
        overlap: rects.some((a, i) =>
          rects.slice(i + 1).some((b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom)
        ),
      };
    });
    expect(labels).toEqual({ inside: true, overlap: false });
    await page.getByLabel("Ταχύτητα αναπαραγωγής").selectOption("2");
    await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
    await expect.poll(async () => Number(await timeline(page).inputValue()), { timeout: 8000 }).toBeGreaterThan(0.45);
    await page.getByRole("button", { name: "Παύση" }).click();
    const loopButton = page.getByRole("button", { name: /Επανάληψη/ });
    await loopButton.click();
    await expect(loopButton).toHaveAttribute("aria-pressed", "true");

    const box = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth,
      play: document.querySelector(".transport__play").getBoundingClientRect().toJSON(),
      slider: document.querySelector(".timeline").getBoundingClientRect().toJSON(),
    }));
    expect(box.page).toBeLessThanOrEqual(width);
    expect(box.play.width).toBeGreaterThanOrEqual(44);
    expect(box.slider.width).toBeGreaterThan(width < 768 ? 250 : 300);

    // The replay and its play button are in the first screen, below the one-line opening.
    await page.evaluate(() => window.scrollTo(0, 0));
    const firstScreen = await page.evaluate(() => ({
      stage: document.querySelector(".stage").getBoundingClientRect().top,
      play: document.querySelector(".transport__play").getBoundingClientRect().bottom,
      height: window.innerHeight,
    }));
    expect(firstScreen.stage).toBeGreaterThan(0);
    expect(firstScreen.play).toBeLessThanOrEqual(firstScreen.height);

    await page.getByRole("button", { name: "Αλλαγή σύγκρισης" }).click();
    await expect(page.getByRole("dialog", { name: "Αλλαγή σύγκρισης" }).getByLabel("Σεζόν")).toBeVisible();
  });
}

test("mobile embed keeps replay, scrub and play inside its frame", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 650 });
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(`${comparisonUrl}&tv=2d&embed=1`);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByRole("button", { name: "Αναπαραγωγή" })).toBeInViewport();
  await timeline(page).fill("0.6");
  await expect(timeline(page)).toHaveValue("0.6");
  await expect(page.getByRole("link", { name: /Άνοιγμα στο F1 Stories Ghost Car/ })).toHaveAttribute(
    "href",
    /d1=1&d2=4/
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await expect(page.getByRole("banner")).toHaveCount(0);
  await expect(page.getByRole("tab")).toHaveCount(0);
});

test("article embed is always 2D and the stage fills the frame", async ({ page }) => {
  await page.setViewportSize({ width: 750, height: 660 });
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page);
  await page.goto(`${comparisonUrl}&tv=3d&embed=1`);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".stage canvas")).toHaveCount(0);
  const [bodyBottom, barTop] = await Promise.all([
    page.locator(".stage__body").evaluate((node) => node.getBoundingClientRect().bottom),
    page.locator(".embed__bar").evaluate((node) => node.getBoundingClientRect().top),
  ]);
  expect(Math.abs(barTop - bodyBottom)).toBeLessThanOrEqual(1);
});

test("publishing and season analysis preserve the loaded comparison", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();

  await page.getByRole("tab", { name: "Κατατακτήριες σεζόν" }).click();
  const season = page.getByRole("region", { name: "Κατατακτήριες 2025" });
  await expect(season.getByRole("row", { name: /Monza GP/ })).toBeVisible({ timeout: 10_000 });
  await page.getByRole("tab", { name: "Αναπαράσταση" }).click();

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Αποθήκευση σύγκρισης" }).click();
  await expect(page.getByRole("status").filter({ hasText: "αποθηκεύτηκε" })).toBeVisible();

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Ενσωμάτωση σε σελίδα" }).click();
  await expect(page.getByRole("dialog", { name: "Ενσωμάτωση σε σελίδα" }).getByRole("textbox")).toHaveValue(
    /src="https:\/\/georgiosbalatzis\.github\.io\/ghostcar\/\?[^"]*embed=1/
  );
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Περισσότερα" }).click();
  await page.getByRole("menuitem", { name: "Αποθηκευμένες συγκρίσεις" }).click();
  const saved = page.getByRole("dialog", { name: "Αποθηκευμένες συγκρίσεις" });
  await expect(saved.locator(".saved")).toHaveCount(1);
  await saved.getByRole("button", { name: /VER – NOR/ }).click();
  await expect(saved).toHaveCount(0);
  await expect(trackMap(page)).toBeVisible();
  await expect(brief(page)).toContainText("Max Verstappen");

  await timeline(page).focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(async () => Number(await timeline(page).inputValue())).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("real-time replay: the faster lap reaches the line first", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  const lapTimes = page.locator(".live tbody tr").filter({ hasText: "Χρόνος" }).locator("td");
  const carPositions = () =>
    page.locator(".car").evaluateAll((cars) => cars.map((car) => `${car.style.left},${car.style.top}`));

  // The clock is the slowest lap (NOR 82.6 s); halfway, both drivers have run the same time.
  await timeline(page).fill("0.5");
  await expect(page.locator(".transport__time")).toHaveText("0:41.300 / 1:22.600");
  await expect(lapTimes).toHaveText(["0:41.300", "0:41.300"]);

  // Just after 82.1 s VER has finished and holds position; NOR is still running.
  await timeline(page).fill("0.994");
  await expect(lapTimes).toHaveText(["1:22.100", "1:22.104"]);
  const justAfter = await carPositions();
  await timeline(page).fill("1");
  await expect(lapTimes).toHaveText(["1:22.100", "1:22.600"]);
  const atEnd = await carPositions();
  expect(atEnd[0]).toBe(justAfter[0]);
  expect(atEnd[1]).not.toBe(justAfter[1]);
});

test("reliable gap: coloured track, gap chart, and seeking by lap distance on a chart", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".track-map__dominance").first()).toBeVisible();
  await expect(page.locator(".stage__legend")).toContainText("Κυριαρχία πίστας");
  await expect(page.getByRole("figure").filter({ hasText: "Διαφορά χρόνου" })).toBeVisible();
  await expect(page.locator(".transport__sector")).toHaveText(["S1", "S2", "S3"]);
  // Three quarters along the lap: VER (constant speed, 82.1 s) is there at 61.6 s of the 82.6 s replay.
  const area = page.locator(".trace__area").first();
  await area.scrollIntoViewIfNeeded();
  const box = await area.boundingBox();
  await page.mouse.click(box.x + box.width * 0.75, box.y + box.height / 2);
  await expect.poll(async () => Number(await timeline(page).inputValue())).toBeGreaterThan(0.72);
  expect(Number(await timeline(page).inputValue())).toBeLessThan(0.77);
});

test("unreliable gap: plain track, no gap chart, and the reason on the page", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  // VER's alternate lap has sector times that contradict its position data.
  await page.goto(comparisonUrl.replace("l1=7", "l1=5"));
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByText("Χωρίς διαφορά ανά σημείο της πίστας")).toBeVisible();
  await expect(page.locator("figure.trace")).toHaveCount(3);
  await expect(page.locator(".track-map__dominance")).toHaveCount(0);
  await expect(page.locator(".stage__legend")).toHaveText("Πίστα");
});

test("old share links open the matching page tab", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(`${comparisonUrl}&tab=stats`);
  await expect(page.getByRole("tab", { name: "Τομείς" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("table", { name: "Χρόνοι τομέων" })).toBeVisible();
});

// Share links write tv=3d (the non-default); covered in test/helpers.test.js.
test("a first visit opens in 2D; choosing 3D is remembered", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".stage canvas")).toHaveCount(0);
  await page.getByRole("button", { name: "3D", exact: true }).click();
  await expectSceneRendered(page);
  await page.reload();
  await expectSceneRendered(page);
});

test("the track image download is a self-contained SVG", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("menuitem", { name: "Εικόνα πίστας" }).click(),
  ]);
  const svg = await (await download.createReadStream()).toArray().then((chunks) => Buffer.concat(chunks).toString());
  // Styles are written onto each path (the app stylesheet is not in the file), over the stage colour.
  expect(svg).toMatch(/<rect[^>]+fill="rgb\(/);
  expect(svg).toMatch(/<path[^>]+stroke="rgb\(/);
  expect(svg).not.toMatch(/class="track-map__/);
});

test("on a phone all four tabs fit, and share sits in the one-line opening", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  const tabs = page.getByRole("tab");
  await expect(tabs).toHaveCount(4);
  for (const box of await tabs.evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().right))) {
    expect(box).toBeLessThanOrEqual(390);
  }
  // The short label is what shows; the full label is still the tab's name.
  await expect(page.getByRole("tab", { name: "Κατατακτήριες σεζόν" })).toContainText("Σεζόν");
  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await expect(page.getByRole("menuitem", { name: "Αντιγραφή συνδέσμου" })).toBeVisible();
});

test("recorded Suzuka fixture loads a real circuit in 2D", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page, { circuit: "suzuka" });
  await page.goto(suzukaUrl);
  await expect(trackMap(page)).toBeVisible();
  await expect(brief(page)).toContainText("Max Verstappen");
  await expect(brief(page)).toContainText("Lando Norris");
  expect(errors).toEqual([]);
});

test("theme and colouring change the live scene: same canvas, one WebGL context, one model download", async ({
  page,
}) => {
  const errors = collectPageErrors(page);
  const modelRequests = [];
  page.on("request", (request) => {
    if (request.url().endsWith("f1car.glb")) modelRequests.push(request.url());
  });
  await page.addInitScript(() => {
    window.__glContexts = 0;
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
      if (/webgl/.test(type)) window.__glContexts++;
      return getContext.call(this, type, ...rest);
    };
  });
  await setPreferences(page, { trackView: "3d", theme: "light" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expectSceneRendered(page);
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);

  await page.evaluate(() => {
    window.__canvas = document.querySelector(".stage canvas");
    window.__glContexts = 0;
  });
  await page.keyboard.press("d");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  for (const label of ["Ταχύτητα", "Φρενάρισμα", "Χωρίς χρωματισμό"]) {
    await page.getByRole("button", { name: "Επιλογές προβολής" }).click();
    await page.getByRole("menuitemradio", { name: label }).click();
  }
  await page.keyboard.press("d");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expectSceneRendered(page);

  const sameCanvas = await page.evaluate(() => document.querySelector(".stage canvas") === window.__canvas);
  expect(sameCanvas).toBe(true);
  expect(await page.evaluate(() => window.__glContexts)).toBe(0);
  expect(modelRequests).toHaveLength(1);
  expect(errors).toEqual([]);
});

test("relief x3 rebuilds the Suzuka scene and is remembered", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page, { circuit: "suzuka" });
  await page.goto(suzukaUrl);
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "Επιλογές προβολής" }).click();
  const relief = page.getByRole("menuitemcheckbox", { name: "Ανάγλυφο ×3" });
  await expect(relief).toHaveAttribute("aria-checked", "false");
  await relief.click();
  await expectSceneRendered(page);
  expect(await page.evaluate(() => localStorage.getItem("f1s-3d-relief"))).toBe("3");
  await page.reload();
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "Επιλογές προβολής" }).click();
  await expect(page.getByRole("menuitemcheckbox", { name: "Ανάγλυφο ×3" })).toHaveAttribute("aria-checked", "true");
  expect(errors).toEqual([]);
});
