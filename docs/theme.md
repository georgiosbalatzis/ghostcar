# Theme persistence

## F1 Stories contract

| | |
|---|---|
| Storage | `localStorage`, key **`f1stories-theme`** (shared by f1stories.gr, Telemetry, Ghost Car, BetCast) |
| Values Ghost Car writes | `light`, `dark` |
| Values Ghost Car reads | `light`, `dark`; `auto` follows the OS (`prefers-color-scheme`) and is left as stored |
| Anything else / absent | Paper (`light`), Ghost Car's default. The stored value is left in place |
| Written | Only when the reader toggles the theme (masthead button or `D`). Never on load |
| Old Ghost Car key | `f1s-theme`, migrated and removed on load (below) |

## Resolution

The inline script in `index.html` runs in `<head>` before first paint and sets `<html data-theme="light|dark">`. React (`src/hooks/useThemePreference.js`) starts from that attribute, so it never repaints a different theme.

1. `?th=light|dark`: this view only, never stored (share and embed links).
2. `f1stories-theme` = `light` / `dark`.
3. `f1stories-theme` = `auto`: `prefers-color-scheme` at load time.
4. Otherwise `light` (paper). A dark OS does not change this. That was Ghost Car's default before the migration and is kept.

## Migrating `f1s-theme`

Run by the same script before first paint:

- If `f1stories-theme` is absent or holds an unusable value (not `light`/`dark`/`auto`), and `f1s-theme` is `light` or `dark`, that value is used and written to `f1stories-theme`.
- `f1s-theme` is then removed in every case, including when the canonical key won or the old value was invalid. A canonical value always wins: `f1stories-theme=light` + `f1s-theme=dark` renders light.
- If storage blocks the write, the old value still renders and `f1s-theme` is kept, so the next load can retry.

Keep this fallback for several releases: readers who have not opened Ghost Car since the change still have only `f1s-theme`. All other code uses `f1stories-theme`.

## Not supported

- No live response to OS theme changes while the page is open, even when the stored value is `auto`. The OS preference applies on the next load.
- No `storage`-event sync between open tabs. Other tabs pick up the choice on reload.

Both match f1stories.gr and Telemetry.

Storage failures (blocked storage, `SecurityError`, quota) are swallowed. The page renders paper (or `?th=`).

## Tests

- `test/theme-init.test.js` runs the real `index.html` script against a stub page. It covers canonical and legacy values, precedence, invalid values, `auto` with either OS setting, `?th=`, and blocked storage.
- `e2e/app.smoke.spec.js` covers, in Chromium: the toggle writes only `f1stories-theme`; a reload never sets another theme on `<html>` (no flash); a legacy `dark` migrates; `auto` follows the emulated OS and is not rewritten until the reader toggles (390 px, keyboard).

## Origins: same contract, not yet shared state

`localStorage` is per origin. Ghost Car is served from `https://georgiosbalatzis.github.io/ghostcar/` and the main site from `https://f1stories.gr`. **A theme chosen on f1stories.gr is not visible to Ghost Car today**, even with the same key. Apps on `georgiosbalatzis.github.io` (Ghost Car, Telemetry, BetCast) share one origin, so they share the key once each app uses it.

**Embeds** (`?embed=1`) are the one exception: the hosting page on f1stories.gr sets the iframe's URL hash to `#light` / `#dark` (the same convention as the Tyres embed), on load and on every theme toggle. Ghost Car applies it, before first paint and on `hashchange`, without storing it. The hash wins over `?th=`, so the article can drop `th=` from the embed URL.

Once the apps are served under `f1stories.gr/...`, the shared preference works with no code change. There is deliberately no cross-origin workaround: no iframes, cookies, query propagation or remote storage.
