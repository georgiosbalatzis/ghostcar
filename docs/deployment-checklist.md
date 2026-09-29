# Deployment Checklist

Use this checklist before pushing release changes to `main`. Production deploys through `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → upload `dist/` → GitHub Pages Actions. The legacy `gh-pages` branch is not the production source; there is no manual npm deployment command.

## Automated Checks

Run these from the repository root:

```bash
npm ci
npm run lint
npm run format:check
npm test
npm run build
npm run test:e2e
npm audit --audit-level=moderate
```

Expected results:

- `npm test` passes all Node tests.
- `npm run build` recreates ignored `dist/index.html`, hashed assets, and public assets; do not commit generated output.
- `npm run build` may print `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`; this is expected.
- `npm run test:e2e` passes the Chromium smoke tests.
- Playwright may print Node `DEP0205` and `NO_COLOR` / `FORCE_COLOR` warnings; these are expected unless the tests fail.
- `npm audit --audit-level=moderate` reports zero moderate-or-higher vulnerabilities.
- Optional, needs network: `npm run check:site` reports whether f1stories.gr changed its nav, palette or logo since Ghost Car copied them.

## Manual Desktop Smoke

1. Start a production preview:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

2. Open `http://127.0.0.1:4173/ghostcar/` on desktop.
3. Confirm the f1stories masthead (with the race countdown), the `GHOST CAR.` title and the signal band render, without horizontal overflow or console errors. The page opens in the paper theme.
4. Select a known available 2025 meeting, supported session, two drivers, and valid laps.
5. Load the comparison and confirm the 2D track (coloured by who is faster where) and real-time playback: the faster lap reaches the line first. Switch to 3D and back.
6. Confirm `02 / Τηλεμετρία` shows speed, throttle, brake and Διαφορά χρόνου, and that clicking a chart seeks.
7. Open the Τομείς, Γύροι and Κατατακτήριες σεζόν tabs; open Κοινοποίηση (link, embed, save, image, card), Ενσωμάτωση and `⋯` (featured, saved, showreel, shortcuts); close each with Escape.
8. Toggle the theme from the masthead and confirm text, charts and the 3D scene stay readable.

## Manual Mobile Smoke

1. Use browser device emulation for a narrow mobile viewport.
2. Open `http://127.0.0.1:4173/ghostcar/`.
3. Confirm there is no horizontal page overflow.
4. Open the masthead menu (hamburger) and close it with Escape.
5. Build or load a comparison; confirm the one-line opening, and that the replay and play button are in the first screen.
6. Switch 2D/3D and the page tabs (they scroll horizontally).
7. Scrub the 2D replay on touch/mobile emulation and confirm the page does not scroll unexpectedly.

## Embed Smoke

1. Open `http://127.0.0.1:4173/ghostcar/?embed=1`.
2. Confirm the embed loading shell renders cleanly without the masthead, title or colophon.
3. Open a valid shared URL with `embed=1` added.
4. Confirm the comparison restores or shows a clear Greek error/availability message if upstream data is unavailable.
5. Confirm embed controls fit without clipping at common article iframe sizes.

## Share URL Restore Smoke

1. Build a valid two-driver comparison from a known available 2025 supported session.
2. Use the share action and copy the generated URL.
3. Open the URL in a clean browser profile or private window.
4. Confirm year, meeting, session, drivers, laps, theme, view mode, speed, loop, and active mobile/embed tab restore where encoded.
5. Confirm invalid or stale encoded meeting/session/driver/lap values show clear Greek messages instead of silently failing.
6. Confirm the comparison auto-loads only after the required session, driver, and lap data have restored.

## Release Gate

Do not deploy if any automated command fails, if replay loading produces uncaught console errors, or if desktop/mobile/embed/share URL smoke checks expose broken navigation, unreadable UI, or silent restore failures.
