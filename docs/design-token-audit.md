# Priority 4D — Ghost Car design-token audit

Date: 2026-10-04. Ghost Car baseline: `5506e53d5aff98c5f17661f1b2cd7d8f18e7c4fc`.
Canonical source: `f1StoriesPage/styles/editorial.css`, specification and manifest at Priority 4A revision `2523a16a`.

## Verdict

Priority 4D is complete. Ordinary UI now uses the canonical light/dark primitives; all recorded geometry and technical rendering values remain exact. Priority 4 can proceed to its final cross-product token audit. This was a small CSS migration with offline protection and independent preservation tests, not a redesign.

No other repository was modified. No deployment, commit or PR was made.

## Existing architecture and palette comparison

Ghost Car already used a deliberately copied F1Stories palette in `src/styles/tokens.css`, with readable local aliases, self-hosted Plex/Barlow faces, CSS theme resolution and independent numeric scene palettes. Seven of eight light values and all eight dark values were exact. Light secondary was deliberately darker for alternate-surface text; additional muted/raised/strong-rule steps served both ordinary UI and technical rendering.

| Primitive      | Light before | Light after | Dark before | Dark after |
| -------------- | ------------ | ----------- | ----------- | ---------- |
| bg-base        | #f2eee4      | #f2eee4     | #1b1a19     | #1b1a19    |
| bg-surface     | #e9e3d6      | #e9e3d6     | #242321     | #242321    |
| bg-surface-alt | #dfd9ca      | #dfd9ca     | #2e2c29     | #2e2c29    |
| text-primary   | #20251f      | #20251f     | #eee8db     | #eee8db    |
| text-secondary | #555c50      | #5b6256     | #b6bbac     | #b6bbac    |
| border         | #c8c8b9      | #c8c8b9     | #4b5146     | #4b5146    |
| accent         | #a82e1c      | #a82e1c     | #ff775f     | #ff775f    |
| signal         | #ed4c32      | #ed4c32     | #ed4c32     | #ed4c32    |

| Retained UI alias                | Canonical target |
| -------------------------------- | ---------------- |
| --page                           | --bg-base        |
| --surface                        | --bg-surface     |
| --surface-2, --surface-3         | --bg-surface-alt |
| --text                           | --text-primary   |
| --text-2, --muted, --rule-strong | --text-secondary |
| --rule                           | --border         |
| --accent-text                    | --accent         |

Strong control borders are an alias to readable secondary, not the quiet structural border. Technical scopes override the legacy aliases with four frozen `--viz-*` roles. They retain light/dark secondary `#555c50/#b6bbac`, muted `#585e53/#9a9e91`, strong rule `#8c897b/#6d6861`, and raised surface `#d4cdbc/#3a3834`.

Generic muted/pressed-control steps and select chevrons converged. Lap-row hover uses primary on surface-alt instead of an insufficient 4.48:1 secondary pairing. The footer now uses fixed canonical ink `#20251f`, paper `#e9e3d6`, inverse metadata `#c0bfb2` and the existing inverse rule. `--colophon-ink` avoids colliding with driver `--ink`. Sponsor captions now follow the actual page theme; image assets/blend treatments are unchanged.

## Inventory and raw colors

Inventory covered shell, hero/Race Desk/SignalBand, builder/workspace/replay, analysis, 2D SVG, all scene/material/light modules, menus/forms/dialogs, share/gallery/export/embed behavior, theme code, tests, visual tooling and site drift tooling. Ordinary tooltips are native title attributes; trace scales/readouts are technical annotations.

Raw counts cover active CSS/JS/JSX under `src`, including hex, numeric `0x` colors, RGB/RGBA/HSL and encoded SVG hex. Comments, binary/media/font assets, dependencies, generated output, tests and historical docs are excluded. Repeated literals count separately.

| Classification                         | Before | After | Handling                                                                                      |
| -------------------------------------- | -----: | ----: | --------------------------------------------------------------------------------------------- |
| A — exact canonical UI primitive       |     31 |    28 | Retain; consolidate repeated footer literals into tokens                                      |
| B — semantic alias                     |  0 raw | 0 raw | Ten shared alias names retained; variable references are not raw colors                       |
| C — generic divergence                 |     11 |     0 | Converge only UI uses; preserve mixed technical uses separately                               |
| D — visualization semantic             |     25 |    33 | Exact driver, annotation, rail and rule inks retained                                         |
| E — 3D/material/lighting semantic      |     44 |    44 | Exact values retained                                                                         |
| F — status/data semantic               |      2 |     2 | Negative/status values retained                                                               |
| G — media/brand/mask/overlay exception |     13 |    13 | Printed export palette, transparent-export sentinel, scrims and functional elevation retained |
| H — obsolete                           |      0 |     0 | No unrelated deletion                                                                         |
| Total occurrences                      |    126 |   120 | No zero-raw-color target                                                                      |
| Distinct raw literals                  |     89 |    88 |                                                                                               |

The C count includes definitions shared by generic and technical consumers before migration; their technical meanings were never classified as mistakes. The numerical values moved to D roles instead of being recolored. Machine inventory lists every occurrence and context in the evidence directory.

## Exact preservation and visual evidence

Before/after captures used current local source and deterministic Monza/Suzuka fixtures, paused at identical progress, with loaded fonts. The matrix covers 1440, 1280, 1024, 768, 390 and 375, both themes: builder, loaded 2D/3D, mobile menu, edit sheet, sectors/laps, share menu, saved gallery, embed dialog and loaded embed.

- 64 matched states; **2,300 geometry records** identical: boxes, fonts, line height, spacing, border widths/radii, masks and canvas dimensions.
- **2,618 data/SVG style and path records** identical, including driver/comparison traces, throttle/braking, sector marks, timing/delta states and timeline graphics.
- **384 material records and 24 light records** identical. Scene backgrounds, camera/projection, shared-clock car positions and settled render counts are identical in all 12 paired 3D cases.
- All 24 unobscured loaded 2D/3D canvas crops, plus both embed crops, are byte-identical. Additional crops under dialogs include expected overlying UI changes; they are not evidence of a scene change.
- Both generated 1200×630 share-card PNGs have identical SHA-256 hashes. Fixed print inks, driver marks and gallery/share logic are unchanged. SVG download/self-contained styling and sharing of the loaded comparison pass browser tests.
- No document horizontal overflow in any recorded state.
- Compact loaded replay at 390/375 retains identical hero/player/control geometry, hidden Race Desk/descriptor hierarchy and available global navigation. Visibility includes hidden ancestors, not just the nav's own computed display.
- Light-mode changes are supporting UI ink/border/pressed-state corrections. Dark-mode core colors were already exact; only generic muted/raised/control roles, sponsor captions and fixed inversion changed. Plex/Barlow metrics, 1/2/3px rule geometry, existing 2/4px radii and flat content surfaces are unchanged.

The existing Suzuka 3D utility also captured all supported overview/top/chase/onboard/TV views at two progress points and speed/braking color modes in both editions at 1440/390. Camera, scene and product-specific controls were not altered.

## Focus and contrast

Default focus is 2px accent with 5px offset. Race Desk retains its documented 2px outward offset; scroll tabs and mobile nav links use -4px, menu items -2px. Light masthead uses fixed ink, light footer paper, and SignalBand actions signal-ink. No blanket removal or weakening of focus. The actual keyboard checks cover masthead/theme, Race Desk, builder selects, workspace tabs, 2D/3D buttons, player/scrubber, edit sheet and share-menu controls.

Original control borders measured 2.747:1 light and 2.844:1 dark on control surfaces. The canonical secondary border role reaches 4.937:1 and 7.995:1. Light accent focus on the old fixed footer was 2.579:1; fixed paper focus on canonical ink is 12.203:1. Sponsor captions no longer carry the light ink into dark mode.

**2,970 applicable composited UI text/control contrast checks pass** across 32 browser states, including hover, menus and sheets. Normal text requires 4.5:1, large text and necessary control indicators 3:1. Disabled-opacity treatments and decorative marks are criterion exceptions; they were not presented as passing enabled-text checks. Visualization/canvas inks are protected separately rather than retuned against the page palette.

## Theme, shell and retained differences

Light, dark, auto+OS light/dark, legacy migration, shared-key precedence, URL override, toggle writes and reload all pass. No theme implementation, pre-paint script, storage key, OS policy or migration was changed. With no stored preference Ghost Car still opens light even on a dark OS.

Race Desk labels/order/URLs/current state/layout and the loaded-mobile exception are unchanged. SignalBand retains its specialization and exact status inks. Global navigation/footer links/countdown/menu structure and native top-layer overlays are unchanged; no z-index normalization occurred. Embeds omit the full shell and retain their viewport, theme and interaction behavior. Partner artwork/blend treatment, technical palettes, functional shadows and compact desktop controls remain justified local exceptions.

## Guard, validation and performance

`npm run check:tokens` is dependency-free, offline and independent of other checkouts. It checks both shared themes, fixed inversion, alias resolution, fonts and existing control geometry. Node tests reject changed/missing/circular UI tokens. It runs in the maintained Node suite and before the preserved model optimizer. Site drift tooling reuses the snapshot, checks local tokens before fetching upstream, and correctly resolves inherited light signal values. Visualization snapshots are independent and never compared against the F1Stories UI contract.

| Check                                                                                            | Result                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| npm test in isolated maintained-source copy                                                      | 92 passed                                                   |
| npm test -- test/\*.test.js in actual working tree                                               | 92 passed                                                   |
| npm run lint                                                                                     | Passed                                                      |
| npm run format:check                                                                             | Passed                                                      |
| npm run check:tokens                                                                             | Passed                                                      |
| npm run check:site                                                                               | Passed: 7 global links, 3 products, 18 palette values, logo |
| npm run build, including original optimizer                                                      | Passed; model binary unchanged                              |
| npm run test:e2e -- --workers=1                                                                  | 108 passed; no changed assertions/timeouts                  |
| Race Desk, scene, camera, overlay, qa3d, restraint, robustness, theme and sharing/embed coverage | Included in full suite                                      |
| Before/after fixture captures and contrast audit                                                 | Passed                                                      |
| Existing Suzuka 3D capture command                                                               | Passed                                                      |

Local validation detail: bare `npm test` discovers an ignored `scratchpad/patch-theme-test.mjs` that attempts to rewrite a theme test. That file and theme tests were left untouched; all maintained tests passed both in an isolated source copy with fixtures and by explicit file selection in the working tree. The initial parallel browser run passed 107/108 and hit the existing 60-second disposal timeout; unchanged robustness checks passed serially, followed by a clean full serial run (108/108, 9.5 minutes). No check was weakened.

JavaScript remains 963,636 uncompressed bytes across five assets; gzip changes from 275,203 to 275,204 bytes due to asset references. CSS is 51,498 → 52,941 bytes, gzip 10,466 → 10,755 (**+289 bytes**). Three font files are identical. No new request, runtime token fetching or dependency was added. Settled two-driver Suzuka captures remain 31 draw calls / 89,790 triangles before and after. Existing four-driver budgets, idle rendering, disposal, one-model-download and context-loss fallback pass. This validates rendering/resource behavior on the local browser; it is not a hardware FPS benchmark. Existing Three.js chunk/import warnings remain.

## Files changed

- UI: `src/styles/tokens.css`, `src/styles/base.css`, `src/app/app.css`, `src/features/analysis/analysis.css`.
- Scene provenance comments only: `src/scene/sceneTheme.js`.
- Validation: `package.json`, `scripts/design-tokens.mjs`, `scripts/check-site-drift.mjs`, `test/scene-theme.test.js`, `test/design-tokens.test.js`, `test/visualization-inks.test.js`, `test/fixtures/visualization-inks.json`, `e2e/design-tokens.smoke.spec.js`.
- Documentation: `docs/design-tokens.json`, `docs/design-tokens.md`, this report.

## Evidence and next step

Local evidence: `/tmp/ghostcar-priority4d-2026-10-04/` contains the before/after captures and JSON, comparison browser, per-occurrence inventory, contrast checks, bundle/geometry/color summaries, isolated baseline build and source copy, generated share cards and extended Suzuka captures. These are audit artifacts, not shipped production assets.

Next: final cross-product token audit of the completed 4A/4B/4C/4D implementations. First-visit theme-default policy, partner artwork legibility and existing Three.js packaging warnings remain separate decisions; they are not token-migration blockers or authorization for further changes.

[Open the before/after comparison viewer](/tmp/ghostcar-priority4d-2026-10-04/comparison.html). [Machine-readable comparison summary](/tmp/ghostcar-priority4d-2026-10-04/summary.json). [Classified color inventory](/tmp/ghostcar-priority4d-2026-10-04/raw-color-inventory.json).
