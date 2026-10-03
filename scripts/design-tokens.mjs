// Offline UI contract only. Scene/data preservation is checked separately.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export const manifest = JSON.parse(readFileSync(new URL("../docs/design-tokens.json", import.meta.url), "utf8"));
export const readCSS = () => readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
const normalize = (value) => value.trim().replace(/\s+/g, " ");

export function themeTokens(css, theme) {
  const blocks = [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)];
  const declarations = (selector) => {
    const matches = blocks.filter((match) => normalize(match[1]) === selector);
    assert.ok(matches.length, "Missing token scope: " + selector);
    return Object.fromEntries(
      matches.flatMap((match) =>
        [...match[2].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, key, value]) => [key, normalize(value)])
      )
    );
  };
  const base = { ...declarations(':root, :root[data-theme="light"]'), ...declarations(":root") };
  return theme === "dark" ? { ...base, ...declarations(':root[data-theme="dark"]') } : base;
}

export function resolveToken(key, tokens, seen = []) {
  assert.ok(Object.hasOwn(tokens, key), "Missing CSS token: " + key);
  assert.ok(!seen.includes(key), "Circular alias: " + [...seen, key].join(" -> "));
  return tokens[key].replace(/var\((--[\w-]+)\)/g, (_, alias) => resolveToken(alias, tokens, [...seen, key]));
}

export function validateTokens(css = readCSS()) {
  for (const theme of ["light", "dark"]) {
    const tokens = themeTokens(css, theme);
    for (const [key, expected] of Object.entries({
      ...manifest.themes[theme],
      ...manifest.fixed,
      ...manifest.primitives,
    })) {
      assert.equal(resolveToken(key, tokens), expected, theme + " UI token: " + key);
    }
    for (const [alias, target] of Object.entries(manifest.aliases)) {
      assert.equal(tokens[alias], "var(" + target + ")", theme + " UI alias: " + alias);
    }
    assert.match(tokens["--font-ui"], /^"IBM Plex Sans", "IBM Plex Sans Fallback",/);
    assert.match(tokens["--font-brand"], /^"Barlow Condensed",/);
  }
  return true;
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  validateTokens();
  console.log(
    "UI tokens synchronized: canonical light/dark, fixed inversion, aliases, fonts and control geometry (offline)."
  );
}
