# Ghost Car → F1 Stories "Data Desk" rework

Plan written 29 Sep 2026. **Nothing here is implemented yet.**

Goal: Ghost Car should look and behave like a page of f1stories.gr, not a separate dark tool that happens to share a font.

- Mockups: `docs/rework/mockups/*.png`. HTML sources are in `docs/rework/mockups/src/`; regenerate with `node docs/rework/mockups/render.mjs`.
- f1stories reference captures: `docs/rework/reference/*.png`.

---

## 1. Decisions (from the Q&A)

| Topic | Decision |
|---|---|
| Direction | **A: Data Desk.** Build the loaded state as in `a-desk-loaded.png`. In the empty state, drop section 2 (the featured cards). |
| Featured presets | One quiet link under the builder, **"Επιλεγμένες συγκρίσεις (18) →"**. It opens the existing searchable dialog. |
| Hosting | Stay on `georgiosbalatzis.github.io/ghostcar/`. **Copy** the tokens, nav markup and fonts into this repo. No runtime dependency on f1stories.gr. |
| Default theme | **Paper/light**, as on f1stories. Charcoal dark is the alternative. |
| Masthead | **Full f1stories nav**, with links, race countdown and theme toggle. Links point to f1stories.gr. "Ghost Car" is the active item. |
| 3D | **2D track-dominance map is the default.** 3D stays as a toggle. Its scene colours follow the paper and charcoal palettes; the scene logic is unchanged. |
| Playback timing | **Real time.** The clock runs from 0 to the slowest lap time. Each car is placed by its own timestamps, so the faster car visibly pulls ahead. 1× means real time. |
| New data views | **Time-gap trace**, **track-dominance colours**, **sector ticks on the timeline**. No auto-written text. |
| Not chosen | B (broadcast console) and C (story mode) are not planned. Their mockups stay only as a record. |
| f1StoriesPage repo | No answer given. Changes there are listed as optional follow-ups in §8 and are **out of scope** until you confirm. |

**My call (easy to reverse):** the loaded page gets **site-style page tabs**, like `/standings/`: `Αναπαράσταση · Τομείς · Γύροι · Κατατακτήριες σεζόν`. Each tab shows a full panel. The "Δελτίο" rail becomes a fixed part of the Αναπαράσταση tab. The current four-tab rail and the Season dialog merge into this tab row (see T6.1).

---

## 2. Why the current UI doesn't fit

The current UI is redesign-v2 (`docs/redesign-v2/final/`). It is careful and accessible, but it borrows only two things from the site: the two typefaces and a coral accent. Everything that makes f1stories recognisable is missing:

| f1stories.gr | Ghost Car today |
|---|---|
| Warm paper `#f2eee4` by default; charcoal `#1b1a19` dark | Near-black `#0c0e0f` by default, and a cold grey-green light theme |
| Site masthead: round logo, **F1 STORIES.** with a red full stop, nav links, countdown | Small grey "F1 STORIES / Ghost Car" text, `⋯` menu |
| Huge Barlow Condensed wordmarks with a signal-red dot (**THE GRID.**, **THE NUMBERS.**) | No display type; largest text is a 32 px number |
| Signal band `#ed4c32` under the hero ("EVERY POINT COUNTS.") | None |
| Tracked uppercase kickers with numbering (`02 / ΤΗΛΕΜΕΤΡΙΑ`), 1 px ink rules | Sentence-case 12 px grey labels |
| Key-facts strip (four columns, vertical rules) | None |
| Ruled tables, **3 px team-colour left rule** per row | Small coloured squares |
| Ink button (`#20251f` filled, 2 px radius), outlined secondary button | Low-contrast ghost buttons |
| Data card with a teal top rule, big light-weight numerals, bar rows | Plain table |
| Bottom-right cut corner on media panels (`--cut-*`) | None |

The mockup `a-desk-loaded.png` puts all of these back.

---

## 3. f1stories design language (source of truth for this rework)

Copied from `f1StoriesPage/styles/editorial.css`, `standings/standings-editorial.css` and `partials/nav.html` on 29 Sep 2026. Keep this table as a comment header in `src/styles/tokens.css` so drift can be checked later.

**Colour**

| Token | Light (default) | Dark |
|---|---|---|
| page | `#f2eee4` | `#1b1a19` |
| surface | `#e9e3d6` | `#242321` |
| surface-alt | `#dfd9ca` | `#2e2c29` |
| text | `#20251f` | `#eee8db` |
| text-2 | `#5b6256` | `#b6bbac` |
| rule | `#c8c8b9` | `#4b5146` |
| accent (links, active, positions) | `#a82e1c` | `#ff775f` |
| signal (band, dots, tab underline) | `#ed4c32` | `#ed4c32` |
| signal-ink (text on signal) | `#17191b` | `#17191b` |
| technical (data-card rule) | `#12655f` | `#6ec6bb` |
| button primary | bg `#20251f` / fg paper | bg `#eee8db` / fg `#1b1a19` |

**Type**

- IBM Plex Sans 400–600 for everything Greek, including big headings. Use 600 with tight tracking: −0.045em at 64–88 px.
- Barlow Condensed 700 **only for Latin display**: `GHOST CAR.`, `EVERY TENTH COUNTS.`, the `F1 STORIES.` wordmark, driver acronyms and big numerals. It has no Greek glyphs.
- Kickers: 12 px, weight 600, `letter-spacing: .14em`, uppercase.
- Use tabular numerals everywhere.
- Copy the site's metric-matched `IBM Plex Sans Fallback` `@font-face` block, so Greek headlines don't re-wrap when the font loads.

**Shape and motion**

- Radius 2 px on controls and 4 px on media. No shadows.
- One bottom-right cut corner (`--cut-sm: 24px`) on the stage panel and the data card.
- Easing `cubic-bezier(.22,.68,0,1.02)`.
- Tab underline 3 px signal, animated with `scaleX`.

**Components to recreate:** masthead · crumb row (1 px ink top rule, kicker left and right) · display hero with an aside (1 px left rule) · signal band · page tabs · key-facts strip · ruled table rows with team-colour left rule · ink/outline buttons · underline form fields (like the site's contact form) · error as a margin note (2 px signal left rule, no box) · dark colophon footer.

---

## 4. Target design: A "Data Desk"

### Surfaces

| Surface | Contents (top → bottom) | Mockup |
|---|---|---|
| **Builder** (nothing loaded) | Masthead → crumb `F1 STORIES / DATA DESK` → hero `GHOST CAR.` + tagline + aside → band (`● Δεδομένα OpenF1 · Σεζόν …` / `EVERY TENTH COUNTS.`) → `01 / ΝΕΑ ΣΥΓΚΡΙΣΗ` builder → presets link → colophon | `a-desk-empty.png` |
| **Loaded** | Masthead → crumb → hero `GHOST CAR.` + event line + aside (drivers, laps, **Αλλαγή σύγκρισης**) → band (status + final delta + slogan) → tab row + actions → key facts → stage \| Δελτίο rail → transport → `02 / ΤΗΛΕΜΕΤΡΙΑ` charts → colophon | `a-desk-loaded.png` |
| **Loading** | Loaded layout. The band shows the load status and cancel; the stage shows a thin progress bar. | – |
| **Mobile** | Compact masthead with hamburger → stacked hero (`GHOST / CAR.`) → full-width **Αλλαγή σύγκρισης** → short band → horizontally scrolling tabs → stage → sticky transport → 2×2 facts → Δελτίο | `a-desk-mobile.png` |
| **Embed** | Stage + legend + transport + "Άνοιγμα στο Ghost Car ↗". No masthead or hero. Paper by default, and follows `th`. | – |

### Page tabs (loaded)

- **Αναπαράσταση** (default): stage, rail and telemetry section.
- **Τομείς**: sector table, large dominance map, sector deltas.
- **Γύροι**: lap list with "Φόρτωση".
- **Κατατακτήριες σεζόν**: the existing season head-to-head scan, promoted from dialog to tab.
- The URL `tab` becomes `replay|sectors|laps|season`. Extend `normalizeRailTab` so that `live` and `telemetry` map to `replay`. Also map the old legacy values `3d`→`replay`, `stats`→`sectors`, and `h2h` and `season`→`season`.

---

## 5. Phases and tasks

Each task lists its files and a done-when check. Phases run in order. Within a phase, tasks can run in parallel unless marked ⟶.

### Phase 0: Baseline

- **T0.1 ✅** Before-screenshots are in `docs/rework/baseline/`: 14 PNGs covering `empty` and `loaded-2d` at 390/768/1440, plus `loaded-3d` at 1440, in dark and light. The scrubber is at 45 % and has no focus ring.
  - They were made with `node scripts/capture-screens.mjs <dir>`. The script starts its own Vite server on port 5174 and uses the e2e fixtures (`e2e/fixtures.js`), so it needs no network and gives the same result every run.
  - T9.2 reuses it: `node scripts/capture-screens.mjs docs/rework/final`.
- **T0.2 ✅** Inventory of the e2e and unit assertions each phase will break. It is below, in [Test impact inventory](#test-impact-inventory). Each phase updates its own rows as it lands.

#### Test impact inventory

Tests not listed survive the rework unchanged: empty-season copy, WebGL→2D fallback, the invalid-lap warning, the Edit sheet flow, clipboard fallback, share/embed/save dialogs, and every unit test in `test/availability`, `api`, `domain` and `selectors`.

`e2e/app.smoke.spec.js`

| Test | Assertion | Breaks in | Update to |
|---|---|---|---|
| builder loads… | `heading level 1 "Σύγκριση γύρων Formula 1"` | T2.3 ✅ | h1 is `GHOST CAR.`; assert the tagline too |
| builder loads… | `heading "Επιλεγμένες συγκρίσεις"` visible | T3.2 | a link/button `Επιλεγμένες συγκρίσεις (18)` |
| builder loads… | `Σκέλος` / `Οδηγός 1` absent before they are relevant | T3.1 | keep: progressive disclosure stays (T3.1 changes styles only) |
| secondary surfaces… | button `/^Όλες/` opens the Featured dialog | T3.2 | click the presets link |
| secondary surfaces… | `Περισσότερα` → `Αποθηκευμένες συγκρίσεις` on the **builder** | T2.6 ✅ | the `Αποθηκευμένες` link in the builder utility row (finding 2) |
| theme… | default `data-theme` is `dark` | T1.2 ✅ | updated: default `light`, toggle to dark |
| theme… | toggle via `Περισσότερα` → menuitem `Φωτεινό θέμα` | T2.1 ✅ | the masthead theme button (visible at every width) |
| embed without comparison | `getByRole("banner")` count 0 | T2.1 | keep: the masthead must not render in embed |

`e2e/scene.smoke.spec.js`

| Test | Assertion | Breaks in | Update to |
|---|---|---|---|
| primary flow | text `Τελική διαφορά γύρου` | T6.3/T6.4 | key-facts label `Τελική διαφορά` |
| primary flow, invalid lap, four-driver, dirty lap, publishing | `.legend__value` = `0.500 s`; `.legend__drivers` contains `Γ7`/`Γ5`/`VER`; `.legend__drivers tbody tr` ×4 | T2.3/T6.4 (`DriverLegend` leaves the stage) | a `role="table"` named e.g. `Οδηγοί σύγκρισης` in the Δελτίο rail; the lap shown as `Γύρος 7` |
| primary flow | `banner` contains `Monza GP 2025` | T2.1/T2.3 ✅ | the hero region `Ghost Car.` contains the event line; the band text is asserted too |
| primary flow, four-driver | `tab "Τηλεμετρία"` → `figure.trace` ×3; `.brake-lane` ×4 | T6.1/T6.8 (telemetry moves into Αναπαράσταση) | assert the charts on the default tab, with no click |
| primary flow | `tab "Τομείς"` → table `Χρόνοι τομέων` | T6.1 | keep (Τομείς stays a tab; keep the table name) |
| dirty lap | `tab "Γύροι"` → `button /Γ5/` → status `διαφέρει` → `Φόρτωση` | T6.9 | keep the roles and copy |
| cancelled load | `.builder__status` shows `VER γύρος 7 · NOR γύρος 8` + `Ακύρωση` | T2.4 ✅ | the band's `role="status"`; keep the copy and the Ακύρωση button |
| loaded at 320/390/768 | `.stage` top < 120 px | T2.3 ✅ | stage and play button both inside the first viewport (finding 1) |
| loaded at 320/390 | `.timeline` width > 250 px | T6.6 (the mobile mockup puts play, scrubber and time on one row) | keep > 250: give the time its own row under the scrubber on < 480 px |
| loaded at…, primary flow, publishing | `timeline.fill("0.45")`, value grows on play, `ArrowRight` > 0 | T4.2 | keep: the slider stays a 0–1 `prog`; assert the time text as well |
| loaded at… | `/Επανάληψη/` has `aria-pressed` | T6.6 | keep: the `↻ Επανάληψη` button stays a toggle |
| mobile embed | link `/Άνοιγμα στο F1 Stories Ghost Car/` | T8.3 | keep this accessible name even if the visible text is shortened |
| publishing & season | `Περισσότερα` → menuitem `/Κατατακτήριες σεζόν 2025/` → dialog `Κατατακτήριες 2025` | T6.1 (Season becomes a tab) | `tab "Κατατακτήριες σεζόν"` → a row `/Monza GP/` in its panel |
| 3D round trip | `Επιλογές προβολής` → `menuitemradio "Από ψηλά"` | T6.2 | keep (the 3D view-options menu stays on the stage) |
| (several) | `setPreferences` seeds `f1s-track-view` | T7.3 | keep: an explicit stored value still wins over the new 2D default |

`test/`

| File | Assertion | Breaks in | Update to |
|---|---|---|---|
| `redesign.test.js` | `normalizeRailTab` values `live/telemetry/sectors/laps` | T6.1 | `normalizePageTab`: `replay/sectors/laps/season` plus the legacy map in §4 |
| `helpers.test.js` | `encodeURL({ trackView: "3d" })` → decoded `null` (only `tv=2d` is written) | T7.3 | once 2D is the default, write `tv=3d` instead and omit `2d`. Old `tv=2d` links still decode correctly. |

**Findings and decisions** (1 and 2 accepted 29 Sep 2026)

1. **Mobile stage position (Phase 2). ✅ Decided: collapse the hero on loaded phones (folded into T2.3).** redesign-v2 had a rule, backed by a test, that the replay comes first on phones (`.stage` top < 120 px). In mockup A the loaded hero, the band and the tabs push the stage to about 550 px at 390 px wide. On phones with a comparison loaded, collapse the hero to a one-line `GHOST CAR.` with the event line, and move driver and lap details into the Δελτίο. Then change the test to "the stage and the play button are both inside the first viewport (844 px)".
2. **Builder utilities (Phase 2). ✅ Decided: text row under the presets link (folded into T2.6).** Once T2.6 moves the `⋯` menu into the loaded tab row, the builder page has no way to reach Saved comparisons, Showreel or Shortcuts (`?` still works). Add a quiet text row under the presets link: `Αποθηκευμένες · Αυτόματη προβολή · Συντομεύσεις`.
3. **3D default in URLs (Phase 7).** T7.3 flips the default view. `encodeURL` must switch from writing `tv=2d` to writing `tv=3d`, otherwise shared 3D links open in 2D. This is listed in the `test/` table above.

### Phase 1: Foundations (tokens, fonts, primitives)

- **T1.1 ✅** `src/styles/tokens.css` now holds the §3 palettes, with a header comment naming the source file and date. Component variable names are unchanged. Added `--signal`, `--signal-ink`, `--tech`, `--cut-sm` and `--ease-editorial`. Removed `--positive` and `--warning`, which nothing used.
  - Measured in Chrome in both themes: every text and accent pair on page, surface and surface-2 is ≥ 4.5:1, `--signal-ink` on the band is 4.77:1, and control borders (`--rule-strong`) are ≥ 3:1.
  - To get there, four light values differ slightly from the site: `--text-2` `#555c50` (site `#5b6256`, 4.48:1 on surface-2), plus Ghost Car's own `--muted` `#585e53` and `--rule-strong` `#8c897b`. The old light input border was only ~2:1.
  - `--ink` is only used for marks (fills, strokes, rules), never for text, so the bar is 3:1. The paper darkening moved from 72 % to 64 % team colour so Mercedes and Cadillac clear it; every 2025–26 team is now ≥ 3.59:1 in both themes.
- **T1.2 ✅** Paper is the default. `index.html` falls back to `light`, and `theme-color` is `#f2eee4`. `useThemePreference` reads only an explicit `dark` as dark, and writes `#1b1a19` / `#f2eee4` to the meta. `?th=` and a stored value still win. The e2e theme test now checks a paper `rgb(242, 238, 228)` default, the toggle to dark, persistence, and a URL override.
- **T1.3 ✅** The site's 12 metric-matched `IBM Plex Sans Fallback` faces are in `base.css`, and `--font-ui` lists them after Plex.
- **T1.4 ✅** Primitives in `base.css`: `.kicker`, `.crumb`, `.display` + `.dot`, `.band` (`__sep`, `__slogan`), `.facts` (`__item`, `__label`, `__value`, `__note`; 2 columns under 768 px), `.ruled-row`, `.margin-note` (`__title`), `.cut`, `.btn--ink`, `.btn--line`, `.field--underline`, and `.page-tabs`. `.page-tabs` is a modifier on the existing `.tabs`, so `Tabs.jsx` keeps its ARIA.
  - I rendered each one in the real app in both themes; they match the reference.
  - Nothing uses them yet. Removing old primitives happens in T10.1, once Phases 2–8 have replaced their users.

### Phase 2: Shell (masthead, hero, band, colophon) ✅

On both surfaces the page now reads: f1stories masthead → crumb + `GHOST CAR.` hero → signal band → content → dark colophon. Embeds have none of these. The layout below the band is still redesign-v2's until Phase 6.

- **T2.1 ✅** `src/app/SiteMasthead.jsx` replaces `BuilderHeader` and `WorkspaceHeader`. `AppHeader.jsx` is **deleted** now rather than in T10.1, because nothing else used it.
  - It shows the site's own `logo-nav.webp` (2.7 kB, copied to `public/`), the `F1 STORIES.` wordmark, and the site links from one `NAV_LINKS` constant (with its source file and date), with Ghost Car as `aria-current="page"`.
  - Below 992 px the links fold into a hamburger. It's a native `popover` `<nav>` of real links, not the `Menu` component, so they stay anchors.
  - Change from the plan: the theme toggle stays **visible next to the hamburger** at every size, as on f1stories mobile, instead of moving into the menu. The theme item left the `⋯` menu; `D` still toggles it.
- **T2.2 ✅** The countdown is `useNextRace` inside `SiteMasthead.jsx`. It reads the next non-cancelled race from OpenF1 `/sessions?year=Y&session_name=Race` (then Y+1), because OpenF1 lists the full calendar. It refreshes every minute, is hidden under 768 px, and is hidden on any failure or when no race remains. Checked against the live API on 29 Sep 2026: "Kuala Lumpur 4d 21h", the same race as the site's own countdown.
- **T2.3 ✅** `src/app/DeskHero.jsx` provides:
  - **Builder:** crumb, `GHOST CAR.` h1, tagline, and an aside with "Κάθε δέκατο, μια ιστορία."
  - **Loaded:** the `Monza GP 2025 · Κατατακτήριες` event line, driver/lap `.ruled-row`s, and the actions (ink **Αλλαγή σύγκρισης**, **Κοινοποίηση**, `⋯`).
  - **Loaded under 768 px:** a one-line opening (title + event + 44 px icon actions). The crumb's right half is hidden on phones.
  - The actions sit in the hero until the Phase 6 tab row exists (T6.2 moves them).
- **T2.4 ✅** `src/app/SignalBand.jsx`:
  - **Idle:** builder shows `Δεδομένα OpenF1 · Σεζόν 2023–2026 | 2 έως 4 οδηγοί`; loaded shows `Αναπαράσταση · NN% | Τελική διαφορά X s · ABC ταχύτερος` (`describeResult`: fastest lap for 3–4 drivers). Secondary parts are hidden on phones, and the slogan shortens to `EVERY TENTH.` under 480 px.
  - **While loading:** a live `role="status"` region with the label, `VER γύρος 7 · NOR γύρος 8`, **Ακύρωση**, and a 3 px ink progress line on the band's edge. Only that region is live, so the playback % isn't announced.
  - Change from the plan: this is the **only** load indicator. The builder's `builder__status`/progress and the stage's `stage__loading` overlay are removed; there's no second bar on the stage.
- **T2.5 ✅** Colophon: `#17191b` in both themes, `F1 STORIES.` + `Ghost Car · Δεδομένα από το OpenF1 · Τεχνική ματιά, καθαρή άποψη`. It replaces the builder's one-line footer.
- **T2.6 ✅ (interim)**
  - Workspace actions live in the loaded hero (see T2.3). The Season item stays in `⋯` until T6.1.
  - Builder page: `BuilderUtilities` is a quiet text row, `Αποθηκευμένες · Αυτόματη προβολή · Συντομεύσεις`, currently under the featured list. It moves under the presets link in T3.2.
  - Every former header action is reachable, and all keyboard shortcuts work.
- **Layout**
  - New token `--edge: clamp(16px, 3.4vw, 48px)` for the shell's side margins. The builder form is left-aligned to it until Phase 3.
  - At ≥ 1100 px the workspace grid is `max(560px, 100dvh)` tall, so once you scroll to it the replay and rail fill the screen and the rail scrolls on its own. Phones and tablets keep the sticky player.
- **Tests:** 22 e2e pass, including a new one for the phone hamburger menu.
- **Size:** JS +1.6 kB gz, CSS +0.6 kB gz.

### Phase 3: Builder (empty state)

- **T3.1** Restyle `src/features/comparison/ComparisonBuilder.jsx` and `comparison.css` to `a-desk-empty.png`:
  - A `01 / ΝΕΑ ΣΥΓΚΡΙΣΗ` crumb with a step counter on the right (`Βήμα n από 3`, derived from which fields are resolved).
  - Row 1: underline selects for Σεζόν, Γκραν Πρι, Συνεδρία.
  - Row 2: one column per driver with a 4 px team-colour top rule, `ΟΔΗΓΟΣ A`, and Οδηγός/Γύρος selects.
  - Right column: `+ Πρόσθεσε τρίτο οδηγό`, ink **Σύγκριση γύρων →**, and a one-line note.
  - Keep native `<select>`s, labels, `fieldset/legend`, availability messages, disabled/loading states, the 2–4 slot model and restore order. **Styles only; no hook changes.**
- **T3.2** Remove the `FeaturedComparisons` list from the empty state (`src/F1PhantomCars.jsx` builder surface). Add the presets row `Ή ξεκίνα από έτοιμη σύγκριση · ΕΠΙΛΕΓΜΕΝΕΣ ΣΥΓΚΡΙΣΕΙΣ (18) →`, which opens `dialog="featured"`. Restyle the `FeaturedDialog` as ruled rows with kicker metadata.
- **T3.3** Edit sheet (loaded → Αλλαγή σύγκρισης): the same builder markup inside `Dialog`, on paper surface, with the same field styles. Behaviour is unchanged: the replay stays until Compare.

### Phase 4: Real-time playback engine ⟶ (blocks Phases 5 and 6)

The progress clock is normalised today: `prog += dt · 0.015 · speed` in `usePlaybackController.js`. Every driver is sampled at index fraction `prog` (`helpers.lerp`, `telAt`), so both cars always finish together.

- **T4.1** `src/domain/timing.js` (new, pure):
  - `buildTimeIndex(samples, lapStartIso)` returns seconds from lap start for each sample, taken from OpenF1 `date`.
  - `fractionAtTime(index, t)` does a binary search and returns a fractional sample index in `[0,1]`, clamped past the driver's finish.
  - Build the indices once in `buildReplayModel` (`driver.pathTimes`, `driver.telTimes`) and add `model.duration = max(lapDuration)`.
  - *Tests (`test/timing.test.js`):* monotonic mapping; clamp at start and end; uneven sample spacing; a driver finishes at `t = lapDuration` (±1 sample).
- **T4.2** Change `usePlaybackController` so the clock runs in **seconds**: `t += dt · speed`, end at `model.duration`, and apply loop/restart at the end. Keep `prog = t / duration` as a derived value for sliders. Seeking takes seconds, and the keyboard seek steps become ±1 s / ±5 s. Showreel timing is unaffected.
- **T4.3** Switch every consumer to `fractionAtTime(driver.*Times, t)` instead of the raw `prog`:
  - `features/replay/TrackMap.jsx`
  - `scene/updateCars.js`
  - `scene/cameras.js` (follow cameras)
  - `scene/renderLoop.js`
  - `hooks/useScene.js`
  - `features/analysis/LiveTelemetry.jsx`
  - `features/analysis/TelemetryTraces.jsx` (playhead)
  - `features/replay/ReplayStage.jsx` and `F1PhantomCars.jsx` (props)
- **T4.4** Transport display: `m:ss.mmm / m:ss.mmm` (current / slowest lap). The `aria-valuetext` reads seconds.
  *Done when:* in the e2e fixture, the faster car reaches the line first and the other car arrives `|delta|` seconds later (±0.05 s). 2D and 3D stay in sync. Unit and e2e tests pass.

### Phase 5: Derived analysis data (pure domain + tests)

- **T5.1** `src/domain/gap.js`:
  - Work out cumulative distance along each driver's own path, normalised to 0–1.
  - `gapAtDistance(a, b, d) = tA(d) − tB(d)`.
  - Sample on a fixed grid (e.g. 400 points) and smooth lightly; location is ~4 Hz, so interpolate time over distance and don't difference raw samples.
  - For 3–4 drivers, compute each driver against the fastest.
  - **Validation:** the gap at d = 1 must match `model.delta` within 0.05 s. If it doesn't, flag it as `unreliable`; the UI then hides the gap chart and the dominance colours and shows a margin note.
  - *Tests:* synthetic constant-speed laps give a linear gap; the final gap equals the lap delta; unreliable data is flagged.
- **T5.2** `dominanceSegments(model, n = 36…60)`: for each distance bucket, take the driver with the smallest Δt across the bucket. Map buckets onto the reference `trackPath` by distance fraction. Memoise per replay.
- **T5.3** `sectorTicks(model)`: time positions from `duration_sector_1/2` of the reference (fastest) driver, as fractions of `model.duration`. Hide them when sector data is missing. Place them **only on the time axis** (transport), not on the map.

### Phase 6: Loaded workspace

- **T6.1** Page tabs (`src/features/analysis/railTabs.js` → `pageTabs.js`, `AnalysisRail.jsx` → `Workspace.jsx`): `replay | sectors | laps | season` with legacy URL mapping (§4). Only the active tab is mounted, as today. Delete `SeasonDialog` after moving its body into the Season tab panel; keep its incremental, cancellable scan hook unchanged.
- **T6.2** Tab row actions, right-aligned: `2D | 3D` segmented control (ink fill when active), `⤴ Κοινοποίηση`, `‹/› Ενσωμάτωση`, `⋯`. On mobile these go in one `⋯` menu, and the segmented control moves onto the stage (top-right).
- **T6.3** `KeyFacts.jsx` (new): **Ταχύτερος** (name, time, lap), **Τελική διαφορά**, **Μεγαλύτερο κέρδος** (sector with the largest |Δ| and who gained), **Μέγιστη ταχύτητα** (max `tel.speed` per driver). All of these are pure functions in `replayModel.js`, with tests. With 3–4 drivers, compare fastest vs second.
- **T6.4** Stage panel (`ReplayStage.jsx`, `replay.css`): surface-coloured panel with a 2 px ink top rule and a cut corner. Kicker legend `ΚΥΡΙΑΡΧΙΑ ΠΙΣΤΑΣ ■ VER ταχύτερος ■ NOR ταχύτερος`, plus a caption at the bottom right. Reposition `DriverLegend` into the hero aside and rail (drop it from the stage head).
- **T6.5** `TrackMap.jsx`: wide surface-3 road with a rule edge, dominance overlay strokes (T5.2), and a signal start line. Car labels become ink chips in Barlow with a 3–4 px team-colour left bar, keeping the existing stacking logic.
- **T6.6** Transport (`PlaybackBar.jsx`): square ink play button, scrubber with signal fill and ink knob, sector ticks labelled `S1 S2 S3` (T5.3), the time (T4.4), outlined `↻ Επανάληψη` and speed. Keep the native range input for a11y and style it; ticks are an overlay with `aria-hidden`.
- **T6.7** Δελτίο rail (`LiveTelemetry.jsx` → `RaceBrief.jsx`):
  - `ΑΓΩΝΙΣΤΙΚΟ ΔΕΛΤΙΟ` heading and `Ζωντανές τιμές στο m:ss`.
  - Ruled driver rows: 3 px team rule, position in accent, name, `Ομάδα · Γύρος n · Ελαστικό`, and the time or `+gap` on the right.
  - Live table: Ταχύτητα (large), Γκάζι, Φρένο, Σχέση · DRS.
  - `ΔΙΑΦΟΡΕΣ ΑΝΑ ΤΟΜΕΑ`: centred diverging bars in the gaining driver's colour, labelled `NOR 0.041`.
- **T6.8** `02 / ΤΗΛΕΜΕΤΡΙΑ` section (`TelemetryTraces.jsx`):
  - Heading `Ταχύτητα, γκάζι, φρένο.` with an aside.
  - Three charts on the distance axis, each under a 2 px ink top rule: speed, throttle (with brake as a shaded band) and **Διαφορά χρόνου** (T5.1, area fill, zero line).
  - A shared playhead at the current distance.
  - **Pointer drag on any chart seeks.** Convert distance to time through the reference driver's index.
  - Keep the existing downsampling and memoisation.
- **T6.9** Τομείς tab (`SectorAnalysis.jsx`): standings-style ruled table (sector, each driver's time, Δ with a bar) and a large dominance map with no cars. Γύροι tab (`LapTimes.jsx`): ruled rows, the selected lap marked with a signal left rule, and the ink "Φόρτωση" button when the selection differs from what's loaded (`isDirty`).

### Phase 7: 3D restyle (colours only)

- **T7.1** In `scene/createRenderer.js`, `buildTrack.js`, `buildEnvironment.js` and `materials.js`, make the palettes match the tokens:
  - Light: bg `#e9e3d6`, road `#d6cfbf`, edge `#c8c8b9`.
  - Dark: bg `#242321`, road `#2e2c29`, edge `#4b5146`.
  - Tune the lights for paper so it doesn't look washed out. Leave camera, fog, quality and disposal logic alone. Fix the stray `0x44aaff` line material.
- **T7.2** Car labels (`buildRaceOverlays.js`): canvas chips drawn in the same style as the 2D chips. Wait for `document.fonts.load('700 20px "Barlow Condensed"')` before drawing.
- **T7.3** Default view is 2D: in `useTrackViewPreference.js`, the fallback becomes `"2d"`. `?tv=3d` and a stored `3d` still win. Embed stays 2D.
  *Done when:* switching 2D↔3D keeps the clock, and the 3D e2e test (rendered pixels) still passes.

### Phase 8: Secondary surfaces

- **T8.1** `components/ui/Dialog.jsx` styles: paper surface, 2 px radius, crumb-style header (kicker + title in Plex 600), ink/outline buttons, and bottom sheet on mobile as today. Apply to the Featured, Saved, Embed, Link, Shortcuts and Edit dialogs.
- **T8.2** Errors and warnings use `.margin-note` (signal left rule, plain heading, reason, one action), as on the standings page. Toasts use an ink background with paper text.
- **T8.3** Embed (`F1PhantomCars.jsx` embed surface and `app.css`): paper by default (`th` respected); stage, chips and transport as in Phase 6; `Άνοιγμα στο Ghost Car ↗` as an underlined link. Update the snippet in `SharingDialogs.jsx` so the iframe background matches.
- **T8.4** Share and social card (if it renders colours): switch to the new palette.

### Phase 9: QA

- **T9.1** Update the e2e suites (`e2e/app.smoke.spec.js`, `e2e/scene.smoke.spec.js`) for the new structure, tabs, time display and default 2D. Add tests for:
  - real-time finish order;
  - drag-to-seek on a chart;
  - hamburger menu at 390;
  - legacy `tab` values;
  - gap marked "unreliable" hides the chart.
- **T9.2** Visual pass at 320, 390, 430, 768, 1024, 1280, 1440 and 1920, in both themes, plus embed at 390 and 800. Save to `docs/rework/final/` and compare side by side with `docs/rework/mockups/`. Fix any overflow; the Barlow hero must never wrap mid-word.
- **T9.3** Accessibility:
  - team colours on paper with the `--ink` darkening applied (text ≥ 4.5:1, marks ≥ 3:1);
  - keyboard through masthead, tabs, transport and charts;
  - focus rings;
  - `prefers-reduced-motion` (tab underline, band);
  - landmarks (the masthead `nav` has a label).
- **T9.4** Performance check against the redesign-v2 numbers in `docs/redesign-v2/architecture.md`:
  - initial JS ≤ +10 kB gz;
  - no new dependencies;
  - dominance paths memoised;
  - no long tasks during playback at 4× CPU throttle.
- **T9.5** `npm run lint`, `npm run format:check`, `npm test`, `npm run build`, `npm run test:e2e` all green.

### Phase 10: Cleanup and docs

- **T10.1** Delete dead components and CSS: `BuilderHeader`/`WorkspaceHeader`, the old `stage__loading`, the `FeaturedComparisons` empty-state list, `SeasonDialog`, and unused base primitives.
- **T10.2** Update `README.MD` (theme default, real-time replay, tabs), `AGENTS.md` (view state is now `dialog` + page `tab`; the timing module), and add `docs/rework/architecture.md` (short, like the redesign-v2 one). Mark `docs/redesign-v2/` as historical.

---

## 6. Suggested order and slices

Ship in reviewable PRs. Each one should leave the app working:

1. **Phase 1 + T2.1–T2.5.** Palette, fonts, masthead, hero, band and colophon on top of today's layout. It already looks like f1stories.
2. **Phase 3.** Builder and presets link.
3. **Phase 4.** Real-time engine: behaviour change plus tests, no visual change.
4. **Phase 5.** Gap, dominance and sector ticks: pure domain code plus tests.
5. **Phase 6.** Loaded workspace, tabs and charts.
6. **Phases 7 + 8.** 3D colours, dialogs and embed.
7. **Phases 9 + 10.** QA, cleanup and docs.

---

## 7. Risks and open points

- **Gap accuracy.** OpenF1 location is ~3.7 Hz (about 80 m between samples at 300 km/h). The T5.1 validation gate decides whether the gap and dominance views show. Check it on the fixture and on 3–4 real sessions (Monza Q, Suzuka Q, a street circuit) before Phase 6 depends on it.
- **Lap start alignment.** Real time relies on `lap.date_start` and sample dates. If a session has missing or odd `date_start`, fall back to the first in-range sample and log it once.
- **Drift from the site.** Hosting stays separate and the markup is copied, so it will drift. The nav constant and token header both carry their source and date; re-check them whenever f1stories changes its nav.
- **Barlow has no Greek.** Every display string in Barlow must be Latin (`GHOST CAR.`, acronyms, slogans). Greek display text uses Plex 600.
- **Team colours on paper.** Bright colours (Aston green, Sauber lime) need the `--ink` darkening for text. Driver acronyms always sit next to the colour.
- **Theme key.** `f1s-theme` is per-origin, so it can't sync with f1stories.gr while hosting stays separate. This is accepted per the hosting decision.
- **Tabs replace the rail** (my call in §1). If you'd rather keep a switchable rail beside the stage, T6.1 and T6.7 change; nothing else does.

---

## 8. Optional follow-ups (need your OK; they touch `f1StoriesPage`)

- Add **Ghost Car** to `partials/nav.html`, so both nav bars list the same items.
- Add a "Δες τον γύρο στο Ghost Car →" link on the `/standings/?tab=track-dominance` panel, pre-filled with the session and drivers via share-URL params.
- Keep `/ghostcar/index.html` as the redirect. It already uses the right paper and charcoal grounds, so no change is needed.

---

## 9. Artefacts

| Path | What |
|---|---|
| `docs/rework/mockups/a-desk-loaded.png` | **Chosen**: loaded, desktop 1440 |
| `docs/rework/mockups/a-desk-empty.png` | **Chosen**: builder, section 2 removed, presets link |
| `docs/rework/mockups/a-desk-mobile.png` | **Chosen**: loaded, 390 |
| `docs/rework/mockups/b-broadcast*.png` | Alternative B (dark, light, mobile). Not planned |
| `docs/rework/mockups/c-story*.png` | Alternative C (desktop, mobile). Not planned |
| `docs/rework/mockups/src/` | Mockup HTML (fake, deterministic data; stylised Monza) |
| `docs/rework/reference/` | f1stories.gr captures: home, tech card, numbers, standings, track dominance, mobile, dark |

Mockups use fake telemetry and a hand-drawn Monza outline. Their numbers agree with each other (sector sums and deltas match), but they are not real OpenF1 data.
