import test from "node:test";
import assert from "node:assert/strict";
import { readCSS, themeTokens, resolveToken, validateTokens } from "../scripts/design-tokens.mjs";

test("generic UI matches the independent canonical snapshot", () => {
  assert.equal(validateTokens(), true);
});
test("the guard rejects core drift, missing tokens and circular aliases", () => {
  const css = readCSS();
  assert.throws(() => validateTokens(css.replace("--bg-base: #f2eee4;", "--bg-base: #ffffff;")), /light UI token/);
  assert.throws(() => validateTokens(css.replace("--text-primary: #20251f;", "")), /Missing CSS token/);
  assert.throws(() => validateTokens(css.replace("--bg-base: #f2eee4;", "--bg-base: var(--page);")), /Circular alias/);
});
test("generic controls and visualization annotations have separate roles", () => {
  const tokens = themeTokens(readCSS(), "light");
  assert.equal(resolveToken("--text-2", tokens), "#5b6256");
  assert.equal(resolveToken("--viz-text-secondary", tokens), "#555c50");
  assert.equal(resolveToken("--surface-3", tokens), "#dfd9ca");
  assert.equal(resolveToken("--viz-surface-raised", tokens), "#d4cdbc");
});
