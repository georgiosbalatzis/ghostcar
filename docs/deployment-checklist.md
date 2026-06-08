# Deployment Checklist

Use this checklist before publishing `dist` or deploying through `npm run deploy`.

## Automated Checks

Run these from the repository root:

```bash
npm run format
npm run lint
npm run format:check
npm test
npm run build
npm run test:e2e
npm audit --audit-level=moderate
```

Expected results:

- `npm test` passes all Node tests.
- `npm run build` completes successfully and may refresh `dist/index.html` and hashed assets.
- `npm run build` may print `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`; this is expected.
- `npm run test:e2e` passes the Chromium smoke tests.
- Playwright may print Node `DEP0205` and `NO_COLOR` / `FORCE_COLOR` warnings; these are expected unless the tests fail.
- `npm audit --audit-level=moderate` reports zero moderate-or-higher vulnerabilities.

## Manual Desktop Smoke

1. Start a production preview:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

2. Open `http://127.0.0.1:4173/ghostcar/` on desktop.
3. Confirm the shell renders without horizontal overflow or console errors.
4. Select a known available 2025 meeting, supported session, two drivers, and valid laps.
5. Load the comparison and confirm replay data appears in either 3D or 2D.
6. Toggle light/dark theme and confirm selector/header/playback text remains readable.
7. Open and close Stats, Laps, H2H, Season, Gallery, Embed, and Keyboard modals.

## Manual Mobile Smoke

1. Use browser device emulation for a narrow mobile viewport.
2. Open `http://127.0.0.1:4173/ghostcar/`.
3. Confirm there is no horizontal page overflow.
4. Build or load a comparison and confirm the tab bar is usable.
5. Switch between 3D/2D, telemetry, stats, laps, H2H, and season tabs.
6. Scrub the 2D replay on touch/mobile emulation and confirm the page does not scroll unexpectedly.

## Embed Smoke

1. Open `http://127.0.0.1:4173/ghostcar/?embed=1`.
2. Confirm the embed loading shell renders cleanly without app header/footer chrome.
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
