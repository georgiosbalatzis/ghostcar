import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { THEME_STORAGE_KEY } from "../src/hooks/useThemePreference.js";

// The real pre-paint script from index.html, run against a stub page.
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
  .map((m) => m[1])
  .find((s) => s.includes("f1stories-theme"));

// storageThrows: every access fails (blocked storage). writeThrows: only setItem fails (quota).
function run({ stored = {}, search = "", osDark = false, storageThrows = false, writeThrows = false } = {}) {
  const items = new Map(Object.entries(stored));
  const fail = () => {
    throw new Error("SecurityError");
  };
  const localStorage = {
    getItem: storageThrows ? fail : (key) => (items.has(key) ? items.get(key) : null),
    setItem: storageThrows || writeThrows ? fail : (key, value) => items.set(key, String(value)),
    removeItem: storageThrows ? fail : (key) => items.delete(key),
  };
  const documentElement = { dataset: {} };
  const window = {
    location: { search },
    matchMedia: (query) => ({ matches: query === "(prefers-color-scheme: dark)" && osDark }),
  };
  vm.runInNewContext(script, { window, document: { documentElement }, localStorage, URLSearchParams });
  return { theme: documentElement.dataset.theme, storage: Object.fromEntries(items) };
}

test("the pre-paint script and React share one storage key", () => {
  assert.ok(script, "index.html has the theme script");
  assert.equal(THEME_STORAGE_KEY, "f1stories-theme");
});

test("canonical light and dark are used as stored", () => {
  for (const theme of ["light", "dark"]) {
    for (const osDark of [false, true]) {
      assert.deepEqual(run({ stored: { "f1stories-theme": theme }, osDark }), {
        theme,
        storage: { "f1stories-theme": theme },
      });
    }
  }
});

test("Ghost Car's old key migrates once to the shared key", () => {
  for (const theme of ["light", "dark"]) {
    assert.deepEqual(run({ stored: { "f1s-theme": theme } }), { theme, storage: { "f1stories-theme": theme } });
  }
});

test("the shared key wins over the old one, which is removed", () => {
  assert.deepEqual(run({ stored: { "f1stories-theme": "light", "f1s-theme": "dark" } }), {
    theme: "light",
    storage: { "f1stories-theme": "light" },
  });
  assert.deepEqual(run({ stored: { "f1stories-theme": "auto", "f1s-theme": "light" }, osDark: true }), {
    theme: "dark",
    storage: { "f1stories-theme": "auto" },
  });
});

test("an invalid old value is not migrated", () => {
  assert.deepEqual(run({ stored: { "f1s-theme": "banana" }, osDark: true }), { theme: "light", storage: {} });
});

test("an invalid shared value renders the default; a valid old value replaces it", () => {
  assert.deepEqual(run({ stored: { "f1stories-theme": "banana" }, osDark: true }), {
    theme: "light",
    storage: { "f1stories-theme": "banana" },
  });
  assert.deepEqual(run({ stored: { "f1stories-theme": "banana", "f1s-theme": "dark" } }), {
    theme: "dark",
    storage: { "f1stories-theme": "dark" },
  });
});

test("shared 'auto' follows the OS and stays 'auto'", () => {
  for (const osDark of [false, true]) {
    assert.deepEqual(run({ stored: { "f1stories-theme": "auto" }, osDark }), {
      theme: osDark ? "dark" : "light",
      storage: { "f1stories-theme": "auto" },
    });
  }
});

test("with nothing stored the page opens on paper, whatever the OS", () => {
  for (const osDark of [false, true]) assert.deepEqual(run({ osDark }), { theme: "light", storage: {} });
});

test("URL th wins for this view and is never stored", () => {
  assert.deepEqual(run({ stored: { "f1stories-theme": "light" }, search: "?th=dark" }), {
    theme: "dark",
    storage: { "f1stories-theme": "light" },
  });
  assert.equal(run({ stored: { "f1stories-theme": "dark" }, search: "?th=banana" }).theme, "dark");
});

test("blocked storage still sets a theme", () => {
  assert.equal(run({ storageThrows: true }).theme, "light");
  assert.equal(run({ storageThrows: true, search: "?th=dark" }).theme, "dark");
});

test("a failed migration write keeps the old key for the next load", () => {
  assert.deepEqual(run({ stored: { "f1s-theme": "dark" }, writeThrows: true }), {
    theme: "dark",
    storage: { "f1s-theme": "dark" },
  });
});
