# Ghost Car developer guide

Ghost Car Lab is F1 Stories’ client-only React/Vite/Three.js lap comparison app using OpenF1. The authoritative source branch is `main`.

## Commands

- Install reproducibly: `npm ci`.
- Develop: `npm run dev` (open `/ghostcar/`).
- Check: `npm run lint`, `npm run format:check`, `npm test`.
- Browser tests: `npm run test:e2e`; install Chromium with `npx playwright install chromium` if missing. Tests use deterministic OpenF1 fixtures, not live API validation.
- Build: `npm run build`; preview: `npm run preview`.
- Formatting is intentionally scoped. Avoid formatting unrelated application files.

## Deployment and generated files

`.github/workflows/deploy.yml` runs on pushes to `main`: `npm ci` → `npm run build` → `dist/` → GitHub Pages artifact. Preserve Vite’s `/ghostcar/` base. The existing `gh-pages` branch is legacy; do not delete or update it as part of source maintenance.

Never commit `node_modules/`, `dist/`, `.idea/`, coverage, Playwright reports/results, OS metadata, or local agent settings. Keep `package-lock.json`. The prebuild model optimizer in `scripts/` is required; preserve `public/f1car.glb` and review any generated model change before committing.

## Architecture and behavior to preserve

- `src/main.jsx` and `src/F1PhantomCars.jsx`: entry and orchestration only (data hooks, URL restore, load lifecycle, which surface shows). View state is two values: `dialog` (one open at a time) and `railTab`.
- `src/hooks/`: selectors, ordered URL restoration, playback, replay loading (with the load-time `replay.meta` snapshot), season comparison, presets, sharing and preferences.
- `src/api.js`, `src/services/`, `src/domain/`: OpenF1 requests, orchestration and pure calculations. Preserve cancellation/stale-response guards and retry/cache semantics; high-volume location/car telemetry is intentionally uncached.
- `src/scene/` and `src/hooks/useScene.js`: 3D rendering, adaptive quality and resource disposal. Preserve synchronized 2D/3D playback and WebGL fallback.
- `src/features/` (comparison, replay, analysis, insights, sharing), `src/app/` (headers, app-level hooks) and `src/components/ui/` (Dialog, Menu, Tabs, Icon): UI. `src/styles/tokens.css` + `base.css` are the only global styles; feature CSS lives beside its feature. React sets `data-theme` on `<html>`; CSS does the styling. Inline styles only for runtime data (driver colour `--c`, positions, progress). `public/` and `src/assets/fonts/`: production assets and font licenses.
- Everything that describes a loaded replay (labels, colours, delta, share URL, season pair) reads `buildReplayModel(replay)`, never the live selector state; unapplied edits must not relabel a replay.
- `test/`: Node tests; `e2e/`: Chromium smoke tests; `docs/`: release checklist, historical release records and visual evidence.

Preserve two-to-four driver slots, fastest-lap fallback, invalid-link warnings, URL restore order (meeting → session → drivers → laps), theme/view URL precedence, gallery/share/embed behavior, mobile touch controls and Greek availability messages. Canceled loads must never overwrite newer selections or clear their loading state.

See [README.MD](README.MD) for product details and [deployment checklist](docs/deployment-checklist.md) for release checks. Historical refactor suggestions are not authorization to change application behavior.
