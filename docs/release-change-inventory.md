# Release Change Inventory

Date: 2026-06-08

This inventory groups the current dirty worktree into commit-ready scopes for the Phase 7 product-hardening and release-readiness work.

## Suggested Commit Scope

Suggested commit message:

```text
Harden Ghost Car sharing and release readiness
```

## Product Hardening

### Development Request Telemetry

Files:

- `src/api.js`
- `test/api.test.js`

Summary:

- Adds development-only OpenF1 request telemetry behind `import.meta.env.DEV` / `NODE_ENV=development`.
- Records endpoint, URL, HTTP status, retry count, duration, cache state, and aborted state.
- Stores a bounded telemetry buffer on `globalThis.__f1OpenF1RequestTelemetry`.
- Keeps production silent and preserves existing cache, retry, and abort behavior.

### Defensive URL Restore

Files:

- `src/F1PhantomCars.jsx`
- `src/hooks/useComparisonSelectors.js`
- `src/hooks/useReplayLoader.js`
- `e2e/scene.smoke.spec.js`
- `test/selectors.test.js`

Summary:

- Validates restored meeting, session, driver, and lap values only after the relevant selector data has loaded.
- Shows clear Greek warnings for stale or invalid shared-link values.
- Clears invalid driver slots instead of keeping phantom selections.
- Leaves fastest-lap fallback in place when an encoded lap is unavailable.
- Preserves restore warnings during shared-link/embed auto-loads so invalid lap fallback warnings remain visible after replay data loads.
- Consumes downstream restore flags after upstream restore failures to prevent stale URL values from being applied after manual selector changes.
- Adds e2e coverage for invalid shared-lap warnings after fallback auto-load.

### OpenF1 Availability Messaging

Files:

- `src/domain/availability.js`
- `src/components/ComparisonSelectors.jsx`
- `test/availability.test.js`

Summary:

- Centralizes OpenF1 partial-coverage copy for year/session availability.
- Keeps the 2026 year label explicit as early/partial.
- Shows selected-year and selected-session guidance for 2026, Practice sessions, and Sprint formats.
- Avoids generic Race/Qualifying noise and preserves existing selector empty states.

## Release Documentation

Files:

- `README.MD`
- `docs/deployment-checklist.md`
- `docs/release-finalization.md`
- `docs/release-change-inventory.md`
- `laststeps.txt`

Summary:

- Updates README architecture notes to match the Phase 3-7 refactor state.
- Documents current scripts, deployment flow, deep-link parameters, invalid URL restore behavior, and extracted hooks/domain/services/UI layers.
- Adds a deployment checklist covering automated checks, expected build/Playwright warnings, manual desktop smoke, manual mobile smoke, embed smoke, share URL restore smoke, and release gate criteria.
- Adds a finalization decision note: commit-ready after automated verification, deploy-gated until manual smoke evidence is recorded or explicitly waived.
- Updates `laststeps.txt` with completed hardening notes and the next handoff prompt.

## Generated Build Output

Files:

- `dist/index.html`

Summary:

- Refreshed by `npm run build` after source changes.
- Expected because Vite updates hashed asset references in the generated HTML.

## Verification Status

Automated gate passed on 2026-06-08 after the restore-warning fix:

```bash
npm run format
npm run lint
npm run format:check
npm test
npm run build
npm run test:e2e
npm audit --audit-level=moderate
```

Observed expected warnings:

- `npm run build` may print `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`.
- `npm run test:e2e` may print Node `DEP0205` and `NO_COLOR` / `FORCE_COLOR` warnings.

Production-preview smoke and the final automated gate passed on 2026-06-08 after the restore-warning fix.

## Current Release-Gate Fix Reviewed

Tracked changes:

- `dist/index.html`
- `docs/release-finalization.md`
- `docs/release-change-inventory.md`
- `laststeps.txt`
- `e2e/scene.smoke.spec.js`
- `src/F1PhantomCars.jsx`
- `src/hooks/useReplayLoader.js`
