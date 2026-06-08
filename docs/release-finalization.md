# Release Finalization Decision

Date: 2026-06-08

## Decision

The release candidate is commit-ready for source control after the restore-warning auto-load fix and final automated verification pass.

Deployment is eligible after the final automated gate and production-preview smoke evidence recorded on 2026-06-08.

## Commit Recommendation

Use the grouped inventory in `docs/release-change-inventory.md` and commit the full Phase 7 hardening set together.

Suggested commit message:

```text
Harden Ghost Car sharing and release readiness
```

## Automated Gate

Status: passed on 2026-06-08 after the restore-warning fix.

Required commands:

```bash
npm run format
npm run lint
npm run format:check
npm test
npm run build
npm run test:e2e
npm audit --audit-level=moderate
```

Expected non-blocking warnings:

- `npm run build` may print `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`.
- `npm run test:e2e` may print Node `DEP0205` and `NO_COLOR` / `FORCE_COLOR` warnings.

## Production-Preview Smoke Status

Status: passed on 2026-06-08 against `npm run preview -- --host 127.0.0.1 --port 4173` with deterministic OpenF1 fixtures.

Evidence recorded:

- Desktop smoke: shell rendered, selector flow completed, 3D replay canvas rendered, theme toggle changed readable header text, Stats/Laps/H2H/Season/Gallery/Embed/Keyboard modals opened and closed with Escape, no console/page errors.
- Mobile smoke: 390 px viewport had no horizontal overflow, 2D replay rendered, playback scrub changed via range input, Stats/Laps/H2H tabs rendered, no console/page errors.
- Embed smoke: `?embed=1` empty shell rendered without header/footer chrome, valid shared URL with `embed=1&tab=stats` restored the active stats tab without clipping/overflow, no console/page errors.
- Share URL restore smoke: valid shared URL restored year, meeting, session, drivers, laps, 2D view, light theme, speed `2`, and loop; invalid driver and invalid lap URLs surfaced clear Greek warnings.

## Release-Gate Fix

Production-preview smoke exposed that invalid shared-link lap warnings were cleared by URL auto-load before remaining visible to the user.

Fix:

- `src/hooks/useReplayLoader.js` supports preserving the current error banner while a URL-triggered replay auto-load starts.
- `src/F1PhantomCars.jsx` uses that preservation only for shared-link/embed auto-loads; manual loads still clear stale errors.
- `e2e/scene.smoke.spec.js` covers the invalid shared lap warning after fallback auto-load.

## Deploy Status

Status: deployed on 2026-06-08.

Evidence:

- `npm run deploy` completed with `Published`.
- `origin/gh-pages` commit `82cb7c7` contains the current `dist` output and `index-CmbgH6nC.js`.
- `https://georgiosbalatzis.github.io/ghostcar/` returned HTTP 200.
- A no-cache production request served the current `index-CmbgH6nC.js` bundle. A normal cached request initially returned the previous `index-p48R4Z0A.js` HTML, so edge caches may need their normal short TTL before all uncached clients see the new bundle.

## Deploy Gate

`npm run deploy` has been run after:

1. The final automated gate has passed after the restore-warning fix.
2. The production-preview smoke evidence above remains valid.
3. No release-blocking console errors, unreadable UI states, broken navigation, or silent shared-link restore failures are present.
