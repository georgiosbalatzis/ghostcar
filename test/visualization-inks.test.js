import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SCENE_THEME } from "../src/scene/sceneTheme.js";
import { readCSS, themeTokens, resolveToken } from "../scripts/design-tokens.mjs";

const expected = JSON.parse(readFileSync(new URL("./fixtures/visualization-inks.json", import.meta.url), "utf8"));
const rawColors = (source) =>
  source.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, "").match(/0x[0-9a-f]{6}\b|#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi) ?? [];
test("both complete scene palettes, ramps and shadow opacities remain exact", () => {
  assert.deepEqual(SCENE_THEME, expected.scene);
});
test("driver, comparison, material, lighting and printed share-card inks remain exact", () => {
  for (const [file, colors] of Object.entries(expected.files)) {
    assert.deepEqual(rawColors(readFileSync(new URL("../" + file, import.meta.url), "utf8")), colors, file);
  }
});
test("technical CSS annotations, rails, rules and status colors remain exact", () => {
  const css = readCSS();
  for (const theme of ["light", "dark"]) {
    const tokens = themeTokens(css, theme);
    for (const [key, value] of Object.entries(expected.technical[theme])) {
      assert.equal(resolveToken(key, tokens), value, theme + " " + key);
    }
  }
  assert.match(css, /\[style\*="--c"\]\s*\{\s*--ink: var\(--c\);/);
  assert.match(css, /--ink: color-mix\(in oklab, var\(--c\) 64%, #000\);/);
});
