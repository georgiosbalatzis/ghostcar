# Ghost Car — F1Stories visual rework

Implemented and verified locally on 20 September 2026. Production was inspected, not deployed.

## 1. F1Stories visual traits identified

Reference: the **rendered** [F1Stories homepage](https://f1stories.gr/), inspected in Chrome in light and dark themes, including its computed styles and mobile layout. The existing [production Ghost Car](https://georgiosbalatzis.github.io/ghostcar/) was opened separately before implementation.

The homepage's editorial overrides differ substantially from its older global CSS variables. Tokens were taken from the rendered body, navigation, headings and controls, rather than assuming the root stylesheet represented the current brand.

| Trait | Dark | Light / treatment |
| --- | --- | --- |
| Page | `#181a1c` | `#f2eee4`, warm paper |
| Raised surface / navigation | `#222426` | `#e9e3d6` |
| Higher surface | `#2c2e30` | `#dfd9ca` |
| Text | `#eee7dc` | `#20251f` |
| Secondary text | `#bcb8b0` | `#505649` / `#5b6256` |
| Readable accent | `#ff826b` | `#a82e1c` |
| Dividers | `#47494a` | `#c8c8b9` |
| Body / Greek typography | IBM Plex Sans | Same family, natural sentence case |
| Wordmark / Latin display | Barlow Condensed 700 | Compact, emphatic, with terminal full stop |
| Layout | Thin rules, open surfaces | Generous gutters, asymmetric editorial hierarchy |
| Navigation / buttons | Compact text navigation | Restrained rectangular controls; roughly 2px corners |
| Section rhythm | Small numbered labels | Number only major sections |
| Footer | Publication identity and metadata | A quiet close to the page |

The reference uses about 48px desktop gutters and a compact mobile publication header. Ghost Car translates this to 48px maximum desktop gutters and 12–16px mobile gutters. The homepage's grain, promotional treatments and large content sections were deliberately not carried into a moving analysis surface.

## 2. Translation into Ghost Car

The product remains React + Vite + Three.js. Existing orchestration, selector hooks, OpenF1 services, domain calculations and playback hooks remain in place. `F1PhantomCars.jsx` changes are limited to supplying replay availability to the selectors and adding a layout class.

Three major labels orient the product: **01 / Σύγκριση**, **02 / Αναπαράσταση γύρου**, **03 / Τηλεμετρία**. The circuit is the main visual, with timing and driver identity beside it. Timing uses tabular numerals in the interface typeface, not an unrelated monospace family.

The existing `blue` / `red` token keys remain compatibility aliases. Their values now belong to the F1Stories palette; driver/team colors remain separate semantic information.

## 3. Major visual problems removed

Removed blue gradient CTAs, blurred header glass, glow treatments, large rounded replay/metric cards, speedometer dials, decorative countdown lights, duplicate preset year buttons, and the long row of equally prominent utility icons. Removed implementation language about SVG/WebGL/GPU from the ordinary 2D flow.

### Screenshot self-critique and fixes

The first rendered pass still showed five conspicuous problems:

1. **Too many 3D camera buttons:** replaced them with two compact, labeled camera/track-color selects using the same handlers.
2. **Overlapping delta and sector overlays:** separated their positions; mobile sector summaries identify the gaining driver, with detailed times retained in analysis.
3. **Fragmented transport:** gave mobile controls explicit grid positions and moved tablet transport immediately after the stage.
4. **Tiny 2D driver labels:** enlarged labels and alternated their vertical placement, so cars at the same start point retain both identities.
5. **Auxiliary interfaces still looked like configuration panels:** flattened saved/featured comparisons into ruled lists, tucked optional preset filters into a disclosure, removed duplicated year controls, and standardized modal typography/surfaces.

Further subtraction removed glowing sector indicators and made the existing ground texture subtler and neutral. No scene effects were added.

## 4. Shell / header

Compact `F1 STORIES.` wordmark and `GHOST CAR LAB` sub-brand. The same small publication logo accompanies the wordmark where space permits. Featured comparisons and theme switching remain direct actions. Desktop sharing stays visible; mobile sharing is in the utility menu.

Utilities are grouped as analysis, comparison, and help. Every previous header callback remains reachable: stats, laps, H2H, season, save, gallery, share, social card, embed, screenshot, showreel, and keyboard help. The native disclosure supports keyboard operation and closes on Escape.

## 5. Comparison selectors

Season, Grand Prix and session have visible labels and accessible names. Driver A/B groups use a narrow identity rule and aligned driver/lap controls. Lap loading and unavailable states are expressed inside disabled controls. Existing availability/error messages remain intact.

On mobile, loaded comparisons collapse to a compact event summary. Reopening the disclosure preserves the comparison while inspecting selections. The existing **ΡΥΘΜΙΣΗ** action retains its original reset-to-setup behavior. Three/four-driver selection still uses the original slot model and add/remove handlers.

## 6. Replay stage

A broad, minimally framed stage replaces the dashboard surface. 2D has its own intentional track drawing, neutral road geometry, clear markers, readable labels and a proper mode switch. Its touch handlers and path interpolation are unchanged.

3D cameras, geometry, animation, overlays, resource management and rendering loops are preserved. Scene edits are restricted to background/fog/ground palette values and the opacity/color of the existing ground texture. Fog density, camera behavior, lighting and quality safeguards are unchanged.

The main delta is explicitly a **lap-time difference**. It is not presented as a newly calculated live interval. 2D also names the faster driver. Sector summaries show which driver's time is better without changing the sector arithmetic.

## 7. Playback controls

One transport strip: primary play/pause, wide scrubber, timing, reset, loop and speed. Secondary setup/telemetry controls are quieter. The range and speed inputs have accessible labels. Mobile puts the timeline above a single aligned transport row; embeds use a compact variant.

Countdown presentation is neutral text. Its timing and activation behavior are unchanged.

## 8. Telemetry

Removed speedometer graphics and miniature glowing pedal indicators. Driver speed is the primary number, with throttle, brake, gear, DRS and compound in aligned text. Speed, throttle and brake charts now appear before supplementary elevation, sector, speed-trap and tire analysis.

Charts retain the existing data preparation, paths and sampling. Added subtle baseline/grid rules and a theme-aware playhead. Driver trace colors and dashed distinctions remain. Speed-trap rows now consistently use the corresponding driver's color, rather than coloring both numbers as the winner.

## 9. Auxiliary views / modals

Shared surfaces use small corners, neutral borders, consistent close targets and larger editorial titles. Small-screen modal surfaces sit toward the bottom and scroll within the viewport. Tables retain their existing calculations and data sources.

Featured comparisons are ruled editorial lists. Unavailable seasons follow available ones; optional driver/circuit filters are collapsible. Gallery rows are keyboard-operable buttons. Embed snippets now use the current theme's border and page color. Tour/help remain available; shared backdrop blur is removed.

## 10. Mobile

Detailed QA began at **390 × 844**, using explicit device emulation (window resizing alone was insufficient because Chrome enforced a minimum window width).

Loaded sequence: compact comparison summary → analysis tabs → track and delta → timeline/transport → optional details. The setup area has bounded scrolling when expanded. Telemetry is an explicit view, not a long mandatory section before the track.

Also inspected 360px and 320px with real data. Automated checks cover 320px and 390px playback, scrubbing, speed, looping, setup return and overflow. Dynamic viewport sizing, safe-area padding and existing low-power/touch behavior are preserved.

## 11. Tablet

768 × 1024 has a distinct layout: full-width stage, transport immediately below, then telemetry in two reading columns. This corrects the first-pass issue where telemetry pushed controls out of sight. The main selector remains a coherent event row and two driver groups. Modal widths are constrained to the viewport.

## 12. Desktop

At 1440 × 900, a large stage leads with a narrow telemetry rail. The rail scrolls independently, preserving replay space. Selectors sit above a thin rule; the transport spans the analysis area. 2D uses a compact timing/driver summary beside the circuit. 3D mode presents its delta and sector comparisons at separate stage edges.

## 13. Themes

Warm paper and dark charcoal are separate reference-derived palettes. Typography, inputs, stage, overlays, tables and dialogs share the same tokens. A minimap redraw dependency was corrected so theme changes update the static map immediately while paused. Existing theme persistence and URL precedence remain intact.

The F1Stories mobile and desktop reference screenshots were compared alongside Ghost Car captures: matching wordmark family, body typeface, warm neutrals, fine rules, coral/rust accent, rectangular controls and compact metadata establish the cross-site relationship.

## 14. Performance safeguards

- No dependency, UI framework, icon library or animation framework added.
- Existing lazy scene, GLTF loader and modal chunks retained.
- Existing OpenF1 cancellation/cache/retry behavior, low-power selection, visibility handling and Three.js cleanup untouched.
- Three locally hosted WOFF2 subsets replace external Google Fonts loading: approximately **71.4 kB** total, including Greek. `font-display: swap`; license files accompany them.
- CSS is approximately **4.1 kB gzip**. Build keeps scene and modal code split.
- Existing optimized car asset retained at **117.2 kB** by the prebuild optimizer.
- Removed decorative effects; reduced-motion styling suppresses interface animations.

These are implementation/build observations, not a claim of measured battery or frame-rate improvement on physical devices.

## 15. Files changed

- `e2e/app.smoke.spec.js`
- `e2e/scene.smoke.spec.js`
- `index.html`
- `src/F1PhantomCars.jsx`
- `src/components/AppFooter.jsx`
- `src/components/AppShell.jsx`
- `src/components/AuxiliaryContentArea.jsx`
- `src/components/ComparisonSelectors.jsx`
- `src/components/CountdownOverlay.jsx`
- `src/components/ErrorBanner.jsx`
- `src/components/GlobalStyles.jsx`
- `src/components/HeaderToolbar.jsx`
- `src/components/InlineTabBar.jsx`
- `src/components/LoadingStatusBar.jsx`
- `src/components/MiniMap.jsx`
- `src/components/MobileToolMenu.jsx`
- `src/components/ModalLayer.jsx`
- `src/components/PlaybackBar.jsx`
- `src/components/ReplayStage.jsx`
- `src/components/SectorDelta.jsx`
- `src/components/TelChart.jsx`
- `src/components/TelemetryPanel.jsx`
- `src/components/TrackReplay2D.jsx`
- `src/constants.js`
- `src/modals/DashModal.jsx`
- `src/modals/EmbedModal.jsx`
- `src/modals/GalleryModal.jsx`
- `src/modals/H2HModal.jsx`
- `src/modals/LapsModal.jsx`
- `src/modals/PresetsModal.jsx`
- `src/modals/StatsModal.jsx`
- `src/modals/TelemetryModal.jsx`
- `src/modals/TourOverlay.jsx`
- `src/modals/modalStyles.js`
- `src/scene/buildEnvironment.js`
- `src/scene/createRenderer.js`
- `src/scene/materials.js`
- `src/ui/styles.js`
- `src/ui/editorial.css`
- `src/assets/fonts/ (3 WOFF2 files, 2 licenses, README.md)`
- `GHOSTCAR_VISUAL_REWORK.md`
- `artifacts/visual-rework/ (reference, before, QA screenshots)`
