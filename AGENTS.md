# Ghost Car developer guide

Ghost Car Lab is F1 Stories’ client-only React/Vite/Three.js lap comparison app using OpenF1. The authoritative source branch is `main`.

## Commands

- Install reproducibly: `npm ci`.
- Develop: `npm run dev` (open `/ghostcar/`).
- Check: `npm run lint`, `npm run format:check`, `npm test`.
- Browser tests: `npm run test:e2e`; install Chromium with `npx playwright install chromium` if missing. Tests use deterministic OpenF1 fixtures, not live API validation.
- Real-circuit fixture: `e2e/fixtures/suzuka-2025-q.json` (Suzuka 2025 Q, VER vs NOR) is served by `routeOpenF1(page, { circuit: "suzuka" })`; open it with `suzukaUrl`. Re-record with `node scripts/record-openf1-fixture.mjs` (live network, rarely needed). `node scripts/capture-screens.mjs <dir> 3d` captures the 3D stage on it (the reviewed set is `docs/rework3d/final/`).
- Build: `npm run build`; preview: `npm run preview`.
- Formatting is intentionally scoped. Avoid formatting unrelated application files.

## Deployment and generated files

`.github/workflows/deploy.yml` runs on pushes to `main`: `npm ci` → `npm run build` → `dist/` → GitHub Pages artifact. Preserve Vite’s `/ghostcar/` base. The existing `gh-pages` branch is legacy; do not delete or update it as part of source maintenance.

Never commit `node_modules/`, `dist/`, `.idea/`, coverage, Playwright reports/results, OS metadata, or local agent settings. Keep `package-lock.json`. The prebuild model optimizer in `scripts/` is required; preserve `public/f1car.glb` and review any generated model change before committing.

## Architecture and behavior to preserve

- `src/main.jsx` and `src/F1PhantomCars.jsx`: entry and orchestration only (data hooks, URL restore, load lifecycle, which surface shows). View state is two values: `dialog` (one open at a time) and `pageTab` (`replay | sectors | laps | season`, URL `tab`; `normalizePageTab` maps legacy values).
- `src/hooks/`: selectors, ordered URL restoration, playback (the clock runs in real seconds: `prog` is time / `model.duration`, the slowest lap), replay loading (with the load-time `replay.meta` snapshot), season comparison, presets, sharing and preferences.
- `src/api.js`, `src/services/`, `src/domain/`: OpenF1 requests, orchestration and pure calculations. `domain/timing.js` places each driver on the shared clock by their own sample timestamps; `domain/gap.js` computes the gap at the same point on track, dominance and sector ticks, and marks the trace `reliable` only when it agrees with the official sector times. Preserve cancellation/stale-response guards and retry/cache semantics; high-volume location/car telemetry is intentionally uncached.
- `src/scene/` and `src/hooks/useScene.js`: the 3D view (plan and history in `Work3D.md`, numbers in `docs/rework3d/perf.md`). Preserve synchronized 2D/3D playback, the WebGL fallback and context-loss handling, the idle loop, and disposal. The renderer treats a narrow **viewport** (not a narrow stage) as mobile.
  - **One world frame, in metres** (`world.js`): OpenF1 samples are decimetres; the track and every driver go through the same frame (never a per-driver bounding box), y is real elevation. The road is a centreline resampled by arc length (`trackGeometry.js`); cars are placed by `carPose.js` from the shared clock (`fractionAtTime` on the driver's own timestamps) and the road under them, never eased.
  - **Build once, update in place**: the scene is rebuilt only for a new track or driver path; theme, colouring, colours, camera, relief and lines update the live scene. Anything that owns a resource outside the scene graph returns `dispose()`. The car model loads once per page (`carModel.js`).
  - **Cameras** (`cameraRig.js`, `cameraModes.js`): `cam=` is `orbit | top | follow1-4 | onboard1-4 | tv` (`cinematic` is `tv`). Wheel and one-finger touch belong to the page unless Ctrl/⌘ or full screen.
  - **Overlays are DOM** over the canvas (`SceneStage3D.jsx`): name chips moved each frame by `labels.js`, the readout (`SceneHud.jsx`, same telemetry lookups as the brief) and the minimap (the 2D `TrackMap`). The centre band shows dominance, speed or braking (`trackColouring.js`), and dominance and sector lines only for a reliable gap trace, like 2D.
  - **The frame allocates nothing**: reuse scratch vectors and frame objects (see `renderLoop.js`).
  - Palette: `sceneTheme.js` mirrors `tokens.css` (`test/scene-theme.test.js` enforces it); roads are not tone-mapped and have no reflections, so they render as their palette colour.
  - Test and capture hook `window.__ghostcar3d` (dev builds and `navigator.webdriver` only); `?debug3d=1` logs draw calls and triangles every 5 s.
- `src/features/` (comparison, replay, analysis, insights, sharing), `src/app/` (the f1stories shell: `SiteMasthead`, `DeskHero`, `SignalBand` + colophon, `ComparisonActions`; app-level hooks) and `src/components/ui/` (Dialog, Menu, Tabs, Icon): UI. `src/styles/tokens.css` + `base.css` are the only global styles; feature CSS lives beside its feature. React sets `data-theme` on `<html>`; CSS does the styling. Inline styles only for runtime data (driver colour `--c`, positions, progress). `public/` and `src/assets/fonts/`: production assets and font licenses.
- Everything that describes a loaded replay (labels, colours, delta, key facts, share URL, season pair) reads `buildReplayModel(replay)`, never the live selector state; unapplied edits must not relabel a replay.
- Anything that shows where a driver is or what their telemetry reads must go through `fractionAtTime(driver.pathTimes | driver.telTimes, time)`, never the shared `prog` directly, or the cars fall back into lockstep.
- The stage (2D and 3D) plays `applyClockOffsets(model, trace)`, which is the model with position clocks corrected when the trace is reliable. Everything else reads `model`.
- Gap charts and track-dominance colours only appear when `buildGapTrace(model).reliable`; otherwise the UI falls back to a time axis and says why. Don't loosen the gate without re-running it on real sessions (see REWORK_TASKS.md, Phase 5).
- `test/`: Node tests; `e2e/`: Chromium smoke tests; `docs/`: release checklist, historical release records and visual evidence (`docs/rework/` is current; `docs/redesign-v2/` and `docs/visual-rework/` are history). `node scripts/capture-screens.mjs <dir> [full]` captures the fixture-based screenshots and reports overflow. `npm run check:site` (network) reports drift of the copied f1stories.gr nav (`src/app/siteNav.js`), palette (`tokens.css`) and logo.

Preserve the paper default theme, the 2D default view (`tv=3d` is what URLs record), two-to-four driver slots, fastest-lap fallback, invalid-link warnings, URL restore order (meeting → session → drivers → laps), theme/view URL precedence, gallery/share/embed behavior, mobile touch controls and Greek availability messages. Canceled loads must never overwrite newer selections or clear their loading state.

See [README.MD](README.MD) for product details and [deployment checklist](docs/deployment-checklist.md) for release checks. Historical refactor suggestions are not authorization to change application behavior.
