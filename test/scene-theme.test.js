import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SCENE_THEME } from "../src/scene/sceneTheme.js";

// The tokens of each theme, read from the stylesheet the page uses.
function tokens(theme) {
  const css = readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
  const block = css.match(new RegExp(`:root\\[data-theme="${theme}"\\]\\s*\\{([^}]*)\\}`))?.[1] ?? "";
  return Object.fromEntries(
    [...block.matchAll(/--([a-z0-9-]+):\s*#([0-9a-f]{6})\s*;/gi)].map(([, name, hex]) => [name, parseInt(hex, 16)])
  );
}

const luminance = (hex) => {
  const channel = (shift) => {
    const v = ((hex >> shift) & 255) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(16) + 0.7152 * channel(8) + 0.0722 * channel(0);
};
const contrast = (a, b) =>
  (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);

for (const name of ["dark", "light"]) {
  test(`the ${name} scene palette mirrors the page's tokens`, () => {
    const t = tokens(name);
    const scene = SCENE_THEME[name];
    assert.ok(t.surface && t["surface-2"], "tokens were read");
    assert.equal(scene.sceneBg, t.surface);
    assert.equal(scene.ground, t.surface);
    assert.equal(scene.runoff, t["surface-2"]);
    assert.equal(scene.gridMinor, t["surface-3"]);
    assert.equal(scene.gridMajor, t.rule);
    assert.equal(scene.paint, t["rule-strong"]);
    assert.equal(scene.ink, t.text);
    assert.equal(scene.checkA, t.text);
    assert.equal(scene.checkB, t.page);
    assert.equal(scene.signal, t.signal);
  });

  test(`the ${name} road is a readable step from its run-off and from the ground`, () => {
    const scene = SCENE_THEME[name];
    assert.ok(contrast(scene.road, scene.runoff) >= 1.15, `road/run-off ${contrast(scene.road, scene.runoff)}`);
    assert.ok(contrast(scene.road, scene.ground) >= 1.15, `road/ground ${contrast(scene.road, scene.ground)}`);
    // Quiet: the road never fights the page for attention.
    assert.ok(contrast(scene.road, scene.ground) < 2, `road/ground ${contrast(scene.road, scene.ground)}`);
  });
}
