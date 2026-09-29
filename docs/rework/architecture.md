# Ghost Car Data Desk: architecture

Developer reference for the September 2026 rework that made Ghost Car a page of f1stories.gr. It replaces [`docs/redesign-v2/architecture.md`](../redesign-v2/architecture.md), which is now history. Plan, decisions and per-phase notes: [`REWORK_TASKS.md`](../../REWORK_TASKS.md). Screenshots: `baseline/` (before), `final/` (after), `mockups/` (the three directions; A was built), `reference/` (f1stories.gr).

## Principles

1. **One site.** Ghost Car uses the f1stories.gr masthead, colours, type and components (copied, not loaded from the site; the source file and date sit next to each copy). Paper is the default theme.
2. **The comparison is a race, in real time.** Every car runs on its own timestamps against one clock, so the faster lap visibly pulls ahead and finishes first.
3. **Only show data that holds up.** The gap at the same point on track and the track-dominance colours are computed from position data, calibrated against the official sector times, and shown only when they agree. Otherwise the page says why.
4. **Team colour is data; signal red is the page's accent.** Team colours mark lines, dots and rules, always next to an acronym or name; text stays in ink.

## Surfaces and state

| Surface | When | Contents |
|---|---|---|
| Builder | no replay loaded | masthead · hero (`GHOST CAR.`) · signal band · form · presets link and utilities · colophon |
| Workspace | a replay is loaded | masthead · hero (event, drivers, Αλλαγή σύγκρισης) · band · page tabs · panel · colophon |
| Embed | `?embed=1` | stage (always 2D) · driver legend · transport · link to the full page |

View state in `F1PhantomCars.jsx` is `dialog` (one open at a time) and `pageTab`: `replay | sectors | laps | season`, encoded as URL `tab`. `normalizePageTab` maps legacy values (`live`, `telemetry`, `3d` → `replay`; `stats` → `sectors`; `h2h` → `season`). Loading status lives in the signal band (the only load indicator).

## Components

```
src/
  F1PhantomCars.jsx          orchestration: hooks, URL restore, load lifecycle, surfaces, analysis memo
  app/                       SiteMasthead (nav, countdown, theme), DeskHero, SignalBand + Colophon,
                             ComparisonActions (tab-row actions, builder utilities), shortcuts, showreel, meta
  components/ui/             Dialog, Menu, Tabs (with `aside`), Icon
  features/
    comparison/              ComparisonBuilder (underline fields, driver columns), FeaturedDialog
    replay/                  ReplayStage, TrackMap (dominance, chips), SceneStage3D (lazy), PlaybackBar
                             (sector ticks), DriverLegend (embed only), replayModel.js (+ buildKeyFacts)
    analysis/                Workspace (page tabs), RaceBrief, LiveTelemetry, TelemetryTraces,
                             SectorAnalysis, LapTimes, pageTabs.js
    insights/                SeasonPanel
    sharing/                 Link, Embed, Saved and Shortcuts dialogs
  domain/                    timing.js, gap.js, laps, drivers, replay, circuit, availability
  hooks/, services/, scene/, api.js, helpers.js, constants.js
```

## Timing and gap

- **Clock.** `usePlaybackController` advances `prog` by `dt · speed / duration`, where `duration` is the slowest lap. The slider, keyboard and URL all stay in `prog` (0–1).
- **Placement.** `buildReplayModel` adds `pathTimes`/`telTimes` to each driver: seconds from the lap start, from OpenF1 `date`, using the lap's `date_start` when it is within 2 s of the first sample. `fractionAtTime(times, t)` gives the fractional sample position. 2D, 3D (via `timingRef`), live values and charts all go through it.
- **Gap trace** (`buildGapTrace`):
  1. Project every driver's samples onto driver A's line.
  2. Anchor each driver at the start line (t = 0) and the finish (the lap time).
  3. Estimate each driver's clock offset from the official S1 and S1+S2 times and remove it.
  4. Require complete data, an offset of at most 0.5 s, and every sector line within 0.1 s. Otherwise `reliable: false` with a Greek `reason`.

  It outputs a 400-point distance grid, each driver's time at each point, and the smoothed gap to the fastest driver. `dominanceSegments` gives a stretch to a driver only when they are at least 5 ms faster there. `sectorTicks` places S1/S2 on the time axis. `applyClockOffsets` gives the stage the same corrected clock when the trace is reliable. Validated on 8 real sessions (REWORK_TASKS.md, Phase 5).

## Styling

- `styles/tokens.css`: the f1stories palettes (paper default, charcoal dark), type, spacing, `--edge` (page margin), `--cut-sm`, easing. `styles/base.css`: fonts (with the site's metric-matched Plex fallback), reset and primitives (`.kicker`, `.crumb`, `.display`, `.band`, `.facts`, `.ruled-row`, `.margin-note`, `.btn--ink`/`--line`, `.field--underline`, `.page-tabs`, `.tabs-row`, dialog, menu, toast, notice).
- Feature CSS sits beside each feature. Inline styles are only for runtime data (`--c` driver colour, positions, progress).
- The 3D scene reads `SCENE_THEME` in `scene/createRenderer.js`, which mirrors the stage panel's tokens.

## Verification

- 43 unit tests and 29 e2e tests (Chromium, deterministic fixtures whose sector times match their positions; the alternate laps deliberately don't, to cover the refused-gap path).
- `node scripts/capture-screens.mjs docs/rework/final full` produces 56 captures from 320 to 1920 px and reports overflow.
- axe WCAG 2.1 A/AA: 0 violations across 36 audits. Performance: see REWORK_TASKS.md, Phase 9.

## Known issues

None open. Fixed after the rework (details in REWORK_TASKS.md, "After Phase 10"):

- **3D stray dots:** a trail point recorded mid-glide on a paused seek. Trails now grow only during playback and are cleared on any jump.
- **Replay clock:** when the gap trace is reliable, the stage plays `applyClockOffsets(model, trace)`, so the cars use the same corrected clock as the gap chart.
- **Phone tabs:** all four fit at 320–430 px. On phones the actions sit in the one-line opening, and the Season tab shows "Σεζόν" while keeping its full accessible name.
- **Drift from f1stories.gr:** Ghost Car still copies the nav, palette and logo (hosting decision), but `npm run check:site` compares them with the live f1StoriesPage source and fails on any change. The nav list lives in `src/app/siteNav.js`.
