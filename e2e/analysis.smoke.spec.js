import { expect, test } from "@playwright/test";
import { collectPageErrors, comparisonUrl, routeOpenF1, setPreferences, suzukaUrl } from "./fixtures.js";

async function openScene(page, url, { circuit = "monza", vz } = {}) {
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page, { circuit });
  await page.goto(vz ? `${url}&vz=${vz}` : url);
  await expect(page.locator(".stage canvas").first()).toBeVisible();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
}

const bandVisible = (page) => page.evaluate(() => window.__ghostcar3d.band.visible);
const menu = (page) => page.getByRole("button", { name: "Επιλογές προβολής" }).click();

test("who is faster where colours the 3D track, with the 2D map's legend", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, comparisonUrl);
  expect(await bandVisible(page)).toBe(true);
  await expect(page.locator(".stage__legend")).toContainText("Κυριαρχία πίστας");
  await menu(page);
  await expect(page.getByRole("menuitemradio", { name: "Κυριαρχία πίστας" })).toHaveAttribute("aria-checked", "true");
  expect(errors).toEqual([]);
});

test("a lap the gap cannot vouch for leaves the 3D track plain, and the menu says so", async ({ page }) => {
  await openScene(page, comparisonUrl.replace("l1=7", "l1=5"));
  expect(await bandVisible(page)).toBe(false);
  await expect(page.locator(".stage__legend")).toHaveText("Πίστα");
  await menu(page);
  await expect(page.getByRole("menuitemradio", { name: "Χωρίς χρωματισμό" })).toHaveAttribute("aria-checked", "true");
});

test("speed and braking colour the track, with a legend, whether or not the gap is trusted", async ({ page }) => {
  await openScene(page, comparisonUrl.replace("l1=7", "l1=5"), { vz: "heatmap" });
  expect(await bandVisible(page)).toBe(true);
  await expect(page.locator(".scene-legend")).toContainText("Ταχύτητα · VER");
  await menu(page);
  await page.getByRole("menuitemradio", { name: "Φρενάρισμα" }).click();
  expect(await bandVisible(page)).toBe(true);
  await expect(page.locator(".scene-legend")).toContainText("Φρενάρισμα · VER");
  await menu(page);
  await page.getByRole("menuitemradio", { name: "Χωρίς χρωματισμό" }).click();
  expect(await bandVisible(page)).toBe(false);
  await expect(page.locator(".scene-legend")).toHaveCount(0);
});

test("racing lines are off until asked for, remembered, and say what they are", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, suzukaUrl, { circuit: "suzuka" });
  await expect(page.locator(".scene-caption")).toHaveCount(0);
  await menu(page);
  const lines = page.getByRole("menuitemcheckbox", { name: "Γραμμές οδηγών" });
  await expect(lines).toHaveAttribute("aria-checked", "false");
  await lines.click();
  await expect(page.locator(".scene-caption")).toHaveText("Ενδεικτικές γραμμές · δείγματα θέσης ~4 Hz");
  expect(await page.evaluate(() => localStorage.getItem("f1s-3d-lines"))).toBe("1");
  await page.reload();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
  await expect(page.locator(".scene-caption")).toBeVisible();
  expect(errors).toEqual([]);
});
