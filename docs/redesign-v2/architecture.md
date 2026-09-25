# Ghost Car redesign v2: architecture

Developer reference for the presentation rebuild of September 2026. `docs/visual-rework/` records the previous attempt and is kept as history only.

Screenshots: `baseline/` (before), `pass-1/`, `pass-2/`, `pass-3/` (design passes against the dev server), `final/` (production build served under `/ghostcar/`). All use the deterministic fixtures from the E2E suite, not live OpenF1 data.

## Product principles

1. **The comparison is the product.** Choose event → drivers → laps, compare, and see where time is gained or lost. Everything else is secondary and appears only when needed.
2. **The replay dominates once loaded.** The selector form collapses into a one-line context in the header and opens as a sheet on demand.
3. **Nothing implies data we do not have.** The main figure is labelled *final lap-time difference*. It is not a live gap. Sector boundaries and turn numbers are not drawn, because OpenF1 provides neither position. Fixed-percentage "speed traps" and the thirds-based "current sector" were removed.
4. **Driver colour is data; accent is action.** Team colours only identify drivers, always next to the acronym. Teammates get a lighter or darker variant. The accent marks primary actions, the selected tab and focus.
5. **Hierarchy from type, spacing and rules, not boxes.** Radius 2–4 px (8 px on floating layers), no decorative shadows, sentence case, tabular numerals.

## Feature hierarchy

| Priority | Capability | Surface |
|---|---|---|
| P0 | Season, Grand Prix, session, drivers (2–4), laps, Compare | Builder: full page when nothing is loaded, "Αλλαγή σύγκρισης" sheet afterwards |
| P0 | 2D/3D replay, play/pause, timeline, lap delta, driver identity | Stage + transport |
| P0 | Live values, sector comparison | Analysis rail: Ζωντανά, Τομείς |
| P1 | Speed/throttle/brake traces, lap list, camera, track colouring | Rail: Τηλεμετρία, Γύροι. Camera and colouring sit in the stage's view-options menu |
| P1 | Featured comparisons | Empty-state list (4) + dialog with search |
| P2 | Season qualifying head-to-head (formerly H2H + Season) | ⋯ menu → dialog |
| P3 | Copy link, embed, save, track image, social card | Κοινοποίηση menu |
| P3 | Saved comparisons, theme, autoplay (showreel), shortcuts | ⋯ menu |

## Feature migration map

| Before | After |
|---|---|
| Header → ΜΑΧΕΣ button; Presets modal with four filters and quick chips | Empty state → *Επιλεγμένες συγκρίσεις* (4 rows) + "Όλες" dialog with one search box (matches drivers, circuits, sessions, years). 2026 presets are hidden until data exists. |
| Selector bar permanently above the replay | Builder page (progressive fields) → collapses to header context; "Αλλαγή σύγκρισης" opens it as a sheet. The replay stays visible until the new comparison is loaded. |
| ΡΥΘΜΙΣΗ (cleared the replay and scrolled to the form) | "Αλλαγή σύγκρισης" sheet. The replay is kept; changing the event or session clears it and returns to the page builder, keeping focus in the same field. |
| Header → Share button / ΑΝΤΙΓΡ. label | Κοινοποίηση → Αντιγραφή συνδέσμου (toast; manual-copy dialog if the clipboard is blocked; native share on mobile) |
| ••• → Embed | Κοινοποίηση → Ενσωμάτωση σε σελίδα |
| ••• → Save to gallery / Open gallery | Κοινοποίηση → Αποθήκευση σύγκρισης; ⋯ → Αποθηκευμένες συγκρίσεις (list with event, session, laps, date; per-item delete) |
| ••• → Screenshot / Social card | Κοινοποίηση → Εικόνα πίστας / Κάρτα κοινοποίησης |
| ••• → Stats modal | Rail → Τομείς (sector table + lap summary) |
| ••• → Laps drawer | Rail → Γύροι (select a lap, then "Φόρτωση") |
| ••• → H2H modal and Season dashboard (two scans of the same data) | ⋯ → Κατατακτήριες σεζόν (one scan, one table with diverging bars) |
| ••• → Showreel | ⋯ → Αυτόματη προβολή |
| ••• → Keyboard help, `?` | ⋯ → Συντομεύσεις πληκτρολογίου, `?` |
| Header ☼/◐ | ⋯ → Φωτεινό/Σκούρο θέμα, `D` |
| Telemetry rail, always mounted, one long scroll | Rail tabs; only the active tab is mounted |
| Telemetry overlay modal (desktop) | Removed; the rail's Τηλεμετρία tab covers it |
| Mobile 6-tab scroller + tools grid | Same rail tabs as desktop, under a sticky player |
| 3D camera + colouring selects over the stage | Stage → view-options menu (3D only) |
| Minimap always in 3D | Shown only for follow/cinematic cameras |
| Sector strip over the 3D stage | Rail → Τομείς |
| Elevation chart, fixed-point "speed traps", thirds "sector indicator", driver-1 tyre chart | Removed (decorative or misleading) |
| First-run 7-step tour | Removed; one explanatory line on the builder |
| 5-second countdown before play | Removed; play starts immediately |
| Footer (logo, OpenF1, copyright) | One quiet line on the builder page |
| 3D: stars, sky gradient, ground glow, grid, orange fill light, car glow discs, car point lights, thirds sector markers, heuristic turn numbers | Removed; flat ground and road in page tokens |
| Embed: full app compressed, tabs, share button | Stage + legend + play/timeline + "Άνοιγμα στο F1 Stories Ghost Car" |
| Scene error panel with five buttons | Automatic switch to 2D (not persisted) + toast |

## UI state model

`F1PhantomCars.jsx` owns orchestration only. View state is:

- `dialog`: `null | "edit" | "featured" | "saved" | "season" | "embed" | "link" | "shortcuts"`. One dialog at a time; this replaces 12 boolean flags and the separate mobile tab state.
- `railTab`: `"live" | "telemetry" | "sectors" | "laps"`, encoded in share URLs as `tab`. `normalizeRailTab` maps legacy values (`3d`, `stats`, `h2h`, `season`).
- Surface: derived, not stored. `embed` → embed view; `model` (a loaded replay) → workspace; otherwise → builder page.

**Loaded vs selected.** `useReplayLoader` now stores one `replay` object: geometry, per-slot streams, and `meta`, a snapshot of the requested year, meeting, session and slot drivers, laps and stints taken when the load starts. `buildReplayModel(replay)` (pure, unit-tested) derives labels, distinct colours, gaps, compounds and the A–B delta. Stage, legend, rail, header context, share URL, saved entries, season pair and document title all read the model. Editing the selection therefore never relabels a replay that is showing. `isDirty` compares the selection with `meta` and drives the rail's "Φόρτωση" prompt.

## Component architecture

```
src/
  main.jsx                     imports styles/tokens.css + base.css
  F1PhantomCars.jsx            orchestration, surfaces, dialogs
  app/                         AppHeader (Builder/Workspace variants), useKeyboardShortcuts, useShowreel, useDocumentMeta, app.css
  components/ui/               Dialog (<dialog>), Menu (Popover API), Tabs (ARIA, roving focus), Icon (~25 SVG paths)
  features/
    comparison/                ComparisonBuilder, FeaturedComparisons + FeaturedDialog
    replay/                    ReplayStage, TrackMap (2D + minimap), DriverLegend, PlaybackBar, SceneStage3D (lazy), replayModel.js
    analysis/                  AnalysisRail, LiveTelemetry, TelemetryTraces, SectorAnalysis, LapTimes, railTabs.js
    insights/                  SeasonDialog
    sharing/                   LinkDialog, EmbedDialog, SavedDialog, ShortcutsDialog
  hooks/                       useComparisonSelectors, useReplayLoader, usePlaybackController, useSeasonComparison, usePresetLoader, useShareAndGallery, useThemePreference, useTrackViewPreference, useScene
  domain/, services/, scene/, api.js, helpers.js, constants.js   unchanged contracts
```

Deleted: `src/components/*` (20 files), `src/modals/*` (11), `src/ui/styles.js`, `src/ui/editorial.css`, `src/theme.js`, `useAuxiliaryViews`, `useAuxiliaryData`, and the palette objects in `constants.js`.

`useComparisonSelectors` keeps its exports, restore order and guards. Its four copy-pasted lap-fetch effects became one `useSlotLaps` helper called per slot. Unused per-slot setters were dropped, and the return value is memoised so `memo` children stay stable.

## Styling architecture

- `styles/tokens.css`: colour per theme (`:root[data-theme]`), type scale (11–32 px), spacing (4–64), radius, motion, layout. Driver colour arrives as `--c`; `--ink` is derived (darkened in light theme for contrast).
- `styles/base.css`: fonts, reset, browser surfaces (selection, focus, scrollbars), and the primitives `.btn`, `.icon-btn`, `.select`, `.input`, `.tabs`, `.segmented`, `.dialog`, `.menu`, `.toast`, `.notice`, `.progress`, `.spinner`.
- Feature CSS sits beside each feature. No CSS framework, no CSS-in-JS.
- `index.html` sets `data-theme` before first paint (URL `th` wins over the stored preference), so there is no theme flash.
- Inline styles went from 273 `style={{…}}` blocks plus helper-generated objects to 23, all runtime data (driver colour, marker positions, progress, bar widths).
- Type: IBM Plex Sans for everything, Greek included. Barlow Condensed only for the small "F1 STORIES" publisher mark.

## Performance

Measured with Playwright on production previews of both builds (`vite preview`, same fixtures, 4× CPU throttle, DPR 2). Script: `scratchpad/perf.mjs` (not committed). Lighthouse is not installed and was not added as a dependency, so no Lighthouse scores are claimed.

| | Baseline | Redesign |
|---|---|---|
| Initial JS (app + React) | 138.2 + 142.9 kB (89.5 kB gz) | 104.3 + 142.9 kB (80.0 kB gz) |
| CSS | 18.1 kB (4.2 kB gz) + heavy inline styles | 30.9 kB (6.9 kB gz), no inline layout |
| 3D chunk (lazy) | 556.6 kB (144.4 kB gz) | 549.3 kB (142.2 kB gz) |
| Cold builder, 390 px: transferred | 1,885 kB, 8 requests (1.52 MB logo PNG) | 345 kB, 7 requests (no images) |
| Cold builder, 390 px: FCP / LCP | 316 / 340 ms | 136 / 136 ms |
| Cold builder: CLS | 0.028 | 0.026 |
| Cold builder: long tasks | 2 (193 ms) | 0 |
| Playback 2D / 3D, 1440 px: long tasks in 5 s | 0 / 0 | 0 / 0 |
| Three.js loaded before a 3D replay | no | no |

Decisions:

- The 1.5 MB `logo.png` is no longer loaded by the page. It remains in `public/` only as `og:image`. The favicon (5 kB) and touch icon (30 kB) are generated from it.
- The analysis rail mounts only the active tab. Trace paths are memoised per replay, and the playhead is a positioned element, so a playback tick re-renders a line, not the charts. Telemetry downsampling moved from the app root (12 arrays per replay) into the Τηλεμετρία tab.
- Headers, builder, rail and legend are `memo` components with stable props. The selector, showreel and season hooks memoise their return objects.
- H2H and Season were merged into one cached, cancellable, incremental scan (previously two scans of the same endpoints).
- 3D: ground and road use flat unlit materials; stars (a per-frame shader uniform), sky dome, glow textures, per-car point lights and sector marker instancing were removed. Adaptive quality, disposal, visibility, the low-power path and lazy loading are unchanged.

## Accessibility

- Landmarks: `header`, `main`, `aside` (rail), `footer`. The builder uses `fieldset`/`legend`, and every control has a visible or programmatic label.
- Dialogs use native `<dialog>` with `showModal()`: focus trap, Escape, top layer, and focus return (also enforced on unmount).
- Menus use the Popover API with `role="menu"`/`menuitem`/`menuitemradio`, arrow/Home/End navigation and light dismiss. Tabs follow the ARIA tabs pattern with arrow keys.
- Status: one persistent `role="status"` live region for toasts; `role="alert"` for errors; `aria-busy` on the builder during loads.
- Touch targets are 44 px on phones (transport, header actions, menu items, lap rows). Focus rings use the accent. `prefers-reduced-motion` disables animation.
- Colour is never the only identifier: acronyms accompany every swatch, marker and trace readout. Contrast checked for body, muted and accent text in both themes (≥ 4.5:1).
- Keyboard shortcuts stay attached permanently and read an `enabled` ref, so keys pressed just after a dialog closes are not dropped. They ignore form fields, open popovers, and Space on buttons.

## Responsive behaviour

- **≥ 1100 px:** header, then the stage (legend and view controls above the canvas) beside a rail of `clamp(320px, 28vw, 420px)`; transport under the stage. Full-height app, rail scrolls.
- **768–1099 px (tablet):** single column. Stage at `clamp(240px, 52vw, 56dvh)`, transport attached, rail below. Header buttons become icon-only. The player is sticky when the viewport is at least 640 px tall.
- **< 768 px:** event context replaces the brand in the header. The timeline gets its own full-width row. Dialogs become bottom sheets. The builder stacks and the Compare button goes full width.
- **Embed:** stage and a compact transport only; no header, tabs or tools.

## Behaviour changes (each with reason and test)

| Change | Reason | Test |
|---|---|---|
| No 5-second countdown before play | Forced delay on every start; decorative | `loaded replay is usable at …` (progress advances immediately) |
| Editing keeps the replay until applied | Replay no longer lost when opening setup | `primary flow…`, `picking another lap…` |
| Replay labels come from the load snapshot | Previously a changed driver relabelled the old car | `redesign.test.js` (replay model) |
| Scene failure switches to 2D automatically | No dead-end error panel | `WebGL failure continues in 2D…` |
| Transport errors reworded ("API 500" → sentence) | Actionable copy | `OpenF1 failure is reported in plain language` |
| Tour removed | Interface explains itself; intrusive | `builder loads as the only surface…` |
| Showreel stop no longer aborts the load that stopped it | Latent bug: a manual compare during the showreel was cancelled by the showreel cleanup | Code path in `useShowreel` (toggle-off still aborts) |
| Shared-link auto-load waits for every active slot to resolve | Latent bug: the old effect could clear its own timer while optional slots loaded and then never load | `four-driver links restore every slot` |
| H2H + Season merged; scan no longer capped at 12/15 results | One view, one scan, whole season | `publishing and season analysis…` |
| Teammates get distinct colours | Same team colour made traces indistinguishable | `redesign.test.js` |

Preserved and covered: 2–4 slots, ordered restore (meeting → session → drivers → laps), fastest-lap fallback, invalid-link warnings, theme/view URL precedence, cancellation (`a cancelled load never replaces…`), embed, gallery, share, touch scrub, Greek availability messages.

## Known trade-offs and issues

- The analysis and insight components ship in the main chunk (the old modals were lazy chunks). The main JS is still 34 kB smaller than before. Lazy-loading the workspace would trade a pause on first Compare for a smaller builder; not done.
- The mobile player is sticky and takes roughly 55–60% of a phone screen while the rail scrolls beneath it. This favours watching while reading; landscape and short viewports (< 640 px tall) do not stick.
- The builder shows the raw team colour in its swatches (before any replay exists); the replay and the lap list use teammate-distinct colours.
- Pre-existing: two small coloured dots near the 3D scene centre. Also visible in the baseline screenshots; source not yet traced.
- Lighthouse scores were not measured (see Performance).
