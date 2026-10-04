# Priority 5C — interaction accessibility and test reliability

Completed locally on 4 October 2026. This is interaction hardening of Ghost Car, with no redesign, deployment, commit or PR. No other product checkout was modified.

Evidence: `/tmp/ghostcar-priority5c-2026-10-04/` contains before/after screenshots and browser measurements, the original CSS/source snapshot, builds, isolated discovery reproduction, test-integrity hashes, contrast checks, and validation logs. `before.json` and `after.json` contain 112 paired states with target rectangles, nearest-target distances, pseudo-element dimensions, typography, geometry, technical inks, and scene records. Geometry values below are CSS pixels, rounded to one decimal. Invisible hit extensions are measured separately from the element's visible box and verified with browser edge hit-testing.

## Inventory and classification

A = inline text link; B = compact desktop control, expanded for touch; C = primary touch action; D = precise visualization interaction. The expansion applies below 1100px and on coarse-pointer hardware at any viewport width. Desktop in this table means a large fine-pointer viewport. All actual buttons/links retain native keyboard activation; disabled controls remain disabled.

| Surface / controls                                                      | Role and placement                              | Before → after on touch                                                           | Classification / decision                                                                         |
| ----------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Masthead brand / home                                                   | Link, all full-site states                      | Phone 140.8×30 → 140.8×44; desktop 166.6×36 → 166.6×44                            | C; real link height expanded, artwork unchanged                                                   |
| Seven global nav links                                                  | Links, desktop masthead                         | Height 35; widths 42.8–79.5 → at least 44×44 on tablet/coarse touch               | B; original compact boxes retained on large fine-pointer screens                                  |
| Hamburger / mobile nav                                                  | Button / links, below 992px                     | 44×44 button; full-width links ≥44 high, unchanged                                | C; already adequate                                                                               |
| Theme toggle                                                            | Button, masthead                                | 36×36 tablet → 44×44 hit area; phone already 44×44                                | B/C; artwork and visible boxes preserved                                                          |
| THE GRID / TELEMETRY / GHOST CAR                                        | Race Desk navigation links                      | All ≥44 high and ≥44 wide, unchanged                                              | C; naming, order, URLs, current item and mobile exception unchanged                               |
| Builder year / meeting / session / driver / lap                         | Native selects, page and edit sheet             | At least 44 high, unchanged                                                       | C; labels and notes are not additional targets                                                    |
| Compare / apply comparison                                              | Submit/action buttons                           | Compare 56 high, unchanged; compact pending-load action gains ≥44 hit area        | C                                                                                                 |
| Add third/fourth driver                                                 | Button styled as text, builder actions          | 143.6×18.8 / 161.1×18.8 → same width ×44 hit area                                 | C; extends upwards away from Submit                                                               |
| Remove third/fourth driver                                              | Icon button over a 24px slot heading            | 32×32 → 44×44 hit area                                                            | C; heading and columns unchanged                                                                  |
| Featured comparisons                                                    | Text-style button below builder                 | 258.6×15.6 → 258.6×44 hit area                                                    | C; search input and full-row preset buttons usable by touch/keyboard                              |
| Saved / automatic showreel / shortcuts                                  | Text-style builder utility buttons              | 94.7×18.8 / 114.9×18.8 / 81.9×18.8 → same widths ×44 hit areas                    | B/C; utility spacing prevents expanded targets overlapping when wrapped                           |
| Load cancellation                                                       | Text-style button in SignalBand                 | 56.3×18.8 → 56.3×44 hit area                                                      | C; band height and cancellation semantics unchanged                                               |
| Edit comparison / share / more / embed                                  | Buttons in loaded hero and tab actions          | Phone actions already 44; tablet share 44×40 → 44×44 hit area, More 36×36 → 44×44 | B/C; desktop 40/36px visual density retained                                                      |
| Replay play/pause                                                       | Button in transport, including sticky and embed | 46×46, unchanged                                                                  | C; no separate restart button added                                                               |
| Timeline                                                                | Native range input, ordinary/compact transport  | Desktop/tablet height 28 → 44 on touch; phone 32 → 44                             | D/C; transparent padding grows upwards; visible track/thumb and row height unchanged              |
| Loop / playback speed                                                   | Button / native select in transport             | Tablet loop 44×40 → 44×44 hit area; speed 76×36 → 76×44; phone already 44 high    | B/C; no speed/loop behavior change                                                                |
| 2D / 3D                                                                 | Two adjacent pressed-state buttons              | 40×28 → 44×44 hit areas, extending only at the pair's outer edges                 | B/C; typography and layout boxes unchanged; targets meet without overlapping                      |
| Full screen / 3D view menu trigger                                      | Icon buttons in stage header                    | Tablet 36×36 → 44×44 hit areas; phone already 44×44                               | B/C; extra tablet horizontal spacing keeps expanded icon areas separate                           |
| Camera / driver / coloring / relief / lines / share / more menu items   | Native-popover menu buttons                     | 36 high at tablet → 44; phone already 44                                          | B/C; menu gains bounded scrolling in short viewports                                              |
| Replay / sectors / laps / season                                        | Page tabs, roving keyboard focus                | 56 high, unchanged; all four fit phones                                           | C; existing inset focus retained                                                                  |
| Lap ordering                                                            | Two pressed-state buttons on Laps               | Heights 28 → 44 hit areas on touch                                                | B/C; existing order semantics unchanged                                                           |
| Lap selection rows                                                      | Buttons in lap lists                            | Desktop 32 high; mobile 44 high, unchanged                                        | B; already has mobile expansion                                                                   |
| Telemetry charts / brake lanes                                          | Pointer seek/drag surfaces                      | Speed/throttle/gap charts >44 high; two-driver brake area 32 high, unchanged      | D; precision canvas/chart interaction, with native timeline and replay keyboard seek alternatives |
| 3D car picking / camera gestures                                        | Raycast/gesture on visualization                | Variable projected car sizes; unchanged                                           | D; camera-driver menu and keyboard 1–4 remain alternatives; page touch scrolling preserved        |
| Dialog close / gallery delete                                           | Icon buttons, modal header/list                 | Tablet 36×36 → 44×44 hit areas; phones already 44×44                              | B/C                                                                                               |
| Gallery open / delete all                                               | Row button / text-style button                  | Open row about 63.7 high; Delete all 94×18.8 → 94×44 on touch                     | C; storage/selection behavior unchanged                                                           |
| Share link / iframe text / Copy                                         | Read-only input/textarea / button               | Tablet input/button 36 high → ≥44 field/hit area; phones already ≥44              | C; clipboard-denial focus repaired                                                                |
| Embed open-full-app link                                                | Link in compact embed footer                    | ≥44 high, unchanged                                                               | C; embeds receive no shell or view controls                                                       |
| Partner links / footer brand, index, social, legal                      | Links below app                                 | ≥44 high, unchanged                                                               | C; existing partner/colophon presentation retained                                                |
| Skip to content                                                         | Keyboard-revealed link                          | About 212.5×36.3, unchanged                                                       | B exception: not exposed as a touch action; focus reveals it and targets the main landmark        |
| Toast, driver chips, technical scales, sector ticks, telemetry readouts | Status/decorative/data elements                 | Not buttons/links                                                                 | No target enlargement; toast has no interactive action                                            |

There were **no small inline text links (A) needing an exception** among the flagged 16–19px controls. They are action buttons, not prose links. Large fine-pointer controls in B remain compact; coarse-touch hardware receives the same expansions even at 1440px. Precise interactions in D retain existing rendering and keyboard alternatives.

## Exact 16–19px findings and neighboring targets

The flagged elements are `ComparisonActions`' Featured/Saved/Showreel/Shortcuts buttons; `ComparisonBuilder`'s Add button; `SignalBand`'s Cancel; and `SharingDialogs`' Delete all. All are native buttons with accessible text, keyboard activation, and mobile relevance. Featured's kicker line-height accounts for its 15.6px box; the others use the 18.8px control line-height.

In the builder, utilities originally have 24px horizontal gaps and 8px gaps between wrapped rows. Featured and the utility row are only 16px apart. Centered 44px targets would collide there. The builder-only section gap is now 28px, and wrapped utility gaps 26px: text remains the same size, horizontal spacing remains 24px, and expanded rectangles stay separate. The lower builder section grows 12px, or 30px at 320px where utilities wrap. This section is absent from loaded replay.

Add is only 12px above Submit: its extension points upwards instead of covering Submit. Remove's 32px box has room for a 6px extension on each side in the slot-heading overhang. Gallery Delete all has a 16px margin after its list, sufficient for its expansion. Cancel occupies the existing band with no competing target. Browser tests sample nine points per target, including transparent edges, and require the intended control to receive each hit.

## Brand finding

The visible logo **was** the link's height: 36px on desktop, 30px on phones. There was no pre-existing 44px clickable wrapper. The link now has a 44px minimum height while its flex-centered image stays 36/30px and its wordmark stays 30/25px. Masthead height remains 76/64px. Brand artwork position, aspect ratio and masthead spacing are preserved.

At 1440px the next navigation target is 28px away horizontally. On 390/375/320px phones the nearest visible action is the theme button, respectively 113.2/98.2/43.2px away. The new height does not approach these targets horizontally.

## Compact replay and geometry

All seven widths (1440, 1280, 1024, 768, 390, 375, 320) have paired light/dark builder, loaded 2D, loaded Suzuka 3D and edit-sheet captures. The wider inventory additionally covers mobile site menus, three-driver sheets, lap/sector tabs, sharing, gallery, and embeds. No horizontal overflow was measured in 112 paired cases.

The following Suzuka fixture coordinates are identical before and after in both themes. Height includes the stage and transport; the existing 320px transport wrapping is retained.

| Width / view    | Replay top | Stage height | Transport height | Replay bottom |
| --------------- | ---------: | -----------: | ---------------: | ------------: |
| 390 / 2D and 3D |      260.2 |        307.8 |              111 |         679.0 |
| 375 / 2D        |      259.1 |        298.5 |              111 |         668.6 |
| 375 / 3D        |      273.5 |        303.1 |              111 |         687.5 |
| 320 / 2D        |      276.2 |        270.6 |              155 |         701.7 |
| 320 / 3D        |      276.2 |        292.8 |              155 |         723.9 |

All fit in the 844px first screen. Race Desk and the loaded descriptor remain hidden. Stage headers, canvases/viewports, player/transport geometry, main builder form and edit sheets remain identical. There is **zero added replay vertical growth**, including at 320px. The timeline's visual center is unchanged; padding and negative margin add transparent space above it, avoiding Play/Pause below. Tablet stage-tool gaps change horizontally from 4px to 8px; canvas dimensions do not change. Tablet share/search fields may grow by 8px inside their overlay, without affecting the underlying replay. Mobile and desktop embed geometry is unchanged.

## Focus, clipping, sticky player and modals

The global default remains **2px accent / 5px offset**. No generic focus rule or canonical color token changed. Existing surface-aware masthead/colophon/SignalBand colors remain, as do Race Desk's 2px outward offset, tabs/mobile-nav -4px, and menu items -2px. The sole added local exception is **-3px inset for segmented buttons**, so the ring belongs to its segment and does not paint over the adjacent action.

`overflow:hidden` on the visualization canvas/labels, stage cut-corner clipping, scrolling tabs, and modal body clipping were inspected. Visualization clipping remains intact. Stage chrome sits outside the clipped canvas with sufficient padding; no ring clipping was found in the tested targets. Popovers render in the native top layer, so DOM ancestor clipping does not apply to their rings. A tall four-driver camera menu at 375×568 now scrolls within `100dvh - 16px`, with its last item focusable and visible.

Sticky replay retains `top:0` and `z-index:3`, below native dialog/popover top layers. The tests scroll the player to its sticky position, check control edge hits and complete focus rings, and exercise keyboard access. Controls remain separate and inside the viewport. Existing modal safe-area bottom padding is retained; sticky-at-top introduces no new safe-area requirement.

Dialogs/sheets retain native `showModal()`, initial close-control focus, Escape/backdrop close, and focus return. Tests cover builder selects, close, featured search/rows, gallery actions, and share fields; attempts to focus the underlying player are rejected, and global replay shortcuts are inactive. Chromium can visit browser chrome at the Tab boundary; the next Tab returns to the modal and no underlying application control becomes focused. No custom modal framework or trapping replacement was added.

Clipboard denial exposed a real local defect: Copy queried `.copy-field__actions` for an input that lives in its parent `.copy-field`. The lookup now uses the enclosing field. When clipboard access fails, its existing fallback successfully focuses/selects the read-only field and announces manual-copy instructions.

## Bare npm test: root cause, fix and proof

Both `test` and `test:unit` used unrestricted `node --test`. Node's filename discovery matches `scratchpad/patch-theme-test.mjs` (the `-test` suffix); it imports the utility as a test. The utility's top-level `writeFileSync` rewrites `test/theme-init.test.js`. The directory is ignored by **`.git/info/exclude`**, which affects Git, not Node discovery.

Reproduction copied the actual utility into an isolated temporary directory with a disposable stand-in theme test. Unrestricted discovery reported the scratchpad as a passing test and changed the stand-in's SHA-256. No real source/test file was exposed to that reproduction.

The minimal fix in both scripts is:

```json
"test": "node --test test/*.test.js",
"test:unit": "node --test test/*.test.js"
```

The maintained convention is top-level `test/*.test.js`; fixtures live separately under `test/fixtures`. No scratchpad file was deleted, moved or renamed, no ignore rule was altered, and no dependency/framework was added.

`test/test-discovery.test.js` runs the configured npm command in an isolated directory containing two maintained tests plus a matching scratchpad rewrite utility. It asserts two executed tests, zero scratchpad discovery, no execution marker, and unchanged vulnerable-file contents. The subprocess drops Node's inherited test-runner context so its output represents a standalone npm invocation.

The maintained suite was 92 tests in 19 files; it is now **93 tests in 20 files**, including that regression. Bare `npm test`, `npm run test:unit`, and explicit maintained-file invocation each pass 93/93. Hashes of every source and maintained-test file, plus the real scratchpad, are unchanged across these invocations. The vulnerable theme-test hash is `253da3ff4808a8a277cb33c5b45fb371cdd01b0267ded6daa520b90285c8e8f8`.

## Contrast, themes, semantics, sharing and performance

The contrast audit checks enabled text (including muted/text-style controls, active views, toolbar/menu/dialog text) and ordinary input boundaries over their actual composited surfaces: **2,970 checks, zero failures**. Disabled states retain their intentional subdued styling and are excluded from enabled-control contrast requirements. Icon and keyboard states retain the canonical surface-aware inks; no palette remapping was needed.

Light, dark and stored auto resolving to OS light/dark pass interaction checks. The existing full suite also verifies first-visit light on dark OS, migration, canonical-key precedence, URL theme overrides, toggle writes and reload behavior. No theme implementation, storage key, URL contract or first-visit policy changed.

All **36 unobscured visualization crops** (14 loaded 2D, 14 loaded 3D, eight embeds) are byte-identical before/after. Mobile 3D captures use the existing development quality hook after its adaptive idle-quality check and force a paused redraw before capture, so a fine-grid quality transition is not mistaken for a CSS regression. No production capture/render hook was changed.

No domain, replay-clock, Three.js, camera, material, track, lighting, scene-hook or share-card drawing module changed. Paired scene records retain identical camera/projection, car positions, materials, lights, background and render counts. Settled Suzuka two-driver captures retain 31 draw calls; desktop/mobile triangle counts remain 89,790/63,816. Existing tests verify idle behavior, resource disposal, context loss/fallback, one model download, live theme/color updates and four-driver budgets. This is fixture/resource validation on a local software GPU, not a hardware FPS benchmark.

Both generated 1200×630 share-card PNGs remain byte-identical to baseline; both theme exports have SHA-256 `a5f8d68d48d627d12fe5c66f261199d7fb715040f6a71166c3cd359de269889e`. SVG export, gallery save/open/delete, share URLs, clipboard fallback and loaded embeds remain covered. Embeds have no added shell/chrome and keep their stage/bar dimensions.

Dependencies, requests and scene resources are unchanged. Production CSS grows 1,430 bytes (268 bytes gzip); JavaScript grows 9 bytes (1 byte gzip), from the corrected field lookup and asset references. Five JS assets, one CSS asset and existing font assets remain. The model optimizer runs normally and `public/f1car.glb` is unchanged. Existing Three.js packaging warnings remain out of scope.

## Validation and changed files

| Check                                                                              | Result                                                                |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Bare npm test / test:unit / explicit maintained suite                              | 93/93 each; no unexpected rewrites                                    |
| npm run lint / format:check                                                        | Passed                                                                |
| npm run check:site                                                                 | Passed: 7 global links, 3 Race Desk products, 18 palette values, logo |
| Token guard and production build, including original optimizer                     | Passed; model unchanged                                               |
| Complete Playwright suite                                                          | 129/129; includes 21 new interaction cases                            |
| Race Desk, theme, camera, overlays, qa3d, restraint, robustness, sharing and embed | Included in complete suite                                            |
| Responsive geometry, overflow and contrast                                         | Passed as described above                                             |

Changed files:

- `package.json`: bound Node discovery for both maintained-suite entry points.
- `test/test-discovery.test.js`: isolated discovery/rewrite regression.
- `src/app/app.css`: brand hit height and builder-utility spacing.
- `src/styles/base.css`: scoped transparent targets, segmented inset focus, tablet modal inputs and menu scrolling/touch sizing.
- `src/features/replay/replay.css`: transparent timeline padding, tablet speed height and icon-target spacing.
- `src/features/sharing/SharingDialogs.jsx`: clipboard-denial field focus lookup.
- `e2e/accessibility.smoke.spec.js`: target edge checks, focus/clipping, native modal isolation/return, sticky controls, auto themes, clipboard fallback, coarse hardware, cancel and short menu.
- `e2e/design-tokens.smoke.spec.js`: expected local segment focus offset updated from 5 to -3; other assertions unchanged.
- `docs/interaction-accessibility.md`: this inventory and evidence report.

Priority 5C is complete. For the final Priority 5 audit, review the completed interaction/theme/navigation/token contracts together across products; manually sample iOS Safari touch/safe areas and screen-reader dialog/menu announcements. Keep precise chart/canvas controls and compact fine-pointer controls as documented exceptions. Do not infer authorization for palette, visualization, embed, replay or cross-product changes from this report.
