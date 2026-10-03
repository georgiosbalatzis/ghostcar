# Ghost Car → F1 Stories "Data Desk" rework

Plan written 29 Sep 2026. **Status: Phases 0–10 complete** on branch `rework/data-desk`, one commit per phase (not merged or pushed). The known issues found along the way have since been fixed (see "After Phase 10"). Still open: the optional f1StoriesPage follow-ups in §8, which need your OK.

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
| Masthead | **Canonical seven-link f1stories nav**, with links, race countdown and theme toggle. Links point to f1stories.gr. "Δεδομένα" is the active item. |
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

### Phase 0: Baseline ✅

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
| builder loads… | `heading "Επιλεγμένες συγκρίσεις"` visible | T3.2 ✅ | a link/button `Επιλεγμένες συγκρίσεις (18)` |
| builder loads… | `Σκέλος` / `Οδηγός 1` absent before they are relevant | T3.1 ✅ kept | keep: progressive disclosure stays (T3.1 changes styles only) |
| secondary surfaces… | button `/^Όλες/` opens the Featured dialog | T3.2 ✅ | click the presets link |
| secondary surfaces… | `Περισσότερα` → `Αποθηκευμένες συγκρίσεις` on the **builder** | T2.6 ✅ | the `Αποθηκευμένες` link in the builder utility row (finding 2) |
| theme… | default `data-theme` is `dark` | T1.2 ✅ | updated: default `light`, toggle to dark |
| theme… | toggle via `Περισσότερα` → menuitem `Φωτεινό θέμα` | T2.1 ✅ | the masthead theme button (visible at every width) |
| embed without comparison | `getByRole("banner")` count 0 | T2.1 ✅ kept | keep: the masthead must not render in embed |

`e2e/scene.smoke.spec.js`

| Test | Assertion | Breaks in | Update to |
|---|---|---|---|
| primary flow | text `Τελική διαφορά γύρου` | T6.3/T6.4 ✅ | key-facts label `Τελική διαφορά` |
| primary flow, invalid lap, four-driver, dirty lap, publishing | `.legend__value` = `0.500 s`; `.legend__drivers` contains `Γ7`/`Γ5`/`VER`; `.legend__drivers tbody tr` ×4 | T2.3/T6.4 ✅ | a `role="table"` named e.g. `Οδηγοί σύγκρισης` in the Δελτίο rail; the lap shown as `Γύρος 7` |
| primary flow | `banner` contains `Monza GP 2025` | T2.1/T2.3 ✅ | the hero region `Ghost Car.` contains the event line; the band text is asserted too |
| primary flow, four-driver | `tab "Τηλεμετρία"` → `figure.trace` ×3; `.brake-lane` ×4 | T6.1/T6.8 ✅ (now ×4 figures incl. gap) | assert the charts on the default tab, with no click |
| primary flow | `tab "Τομείς"` → table `Χρόνοι τομέων` | T6.1 ✅ | keep (Τομείς stays a tab; keep the table name) |
| dirty lap | `tab "Γύροι"` → `button /Γ5/` → status `διαφέρει` → `Φόρτωση` | T6.9 ✅ | keep the roles and copy |
| cancelled load | `.builder__status` shows `VER γύρος 7 · NOR γύρος 8` + `Ακύρωση` | T2.4 ✅ | the band's `role="status"`; keep the copy and the Ακύρωση button |
| loaded at 320/390/768 | `.stage` top < 120 px | T2.3 ✅ | stage and play button both inside the first viewport (finding 1) |
| loaded at 320/390 | `.timeline` width > 250 px | T6.6 ✅ | keep > 250: give the time its own row under the scrubber on < 480 px |
| loaded at…, primary flow, publishing | `timeline.fill("0.45")`, value grows on play, `ArrowRight` > 0 | T4.2 ✅ (unchanged, still green) | keep: the slider stays a 0–1 `prog`; assert the time text as well |
| loaded at… | `/Επανάληψη/` has `aria-pressed` | T6.6 ✅ | keep: the `↻ Επανάληψη` button stays a toggle |
| mobile embed | link `/Άνοιγμα στο F1 Stories Ghost Car/` | T8.3 ✅ kept | keep this accessible name even if the visible text is shortened |
| publishing & season | `Περισσότερα` → menuitem `/Κατατακτήριες σεζόν 2025/` → dialog `Κατατακτήριες 2025` | T6.1 ✅ | `tab "Κατατακτήριες σεζόν"` → a row `/Monza GP/` in its panel |
| 3D round trip | `Επιλογές προβολής` → `menuitemradio "Από ψηλά"` | T6.2 ✅ (unchanged) | keep (the 3D view-options menu stays on the stage) |
| (several) | `setPreferences` seeds `f1s-track-view` | T7.3 ✅ kept | keep: an explicit stored value still wins over the new 2D default |

`test/`

| File | Assertion | Breaks in | Update to |
|---|---|---|---|
| `redesign.test.js` | `normalizeRailTab` values `live/telemetry/sectors/laps` | T6.1 ✅ | `normalizePageTab`: `replay/sectors/laps/season` plus the legacy map in §4 |
| `helpers.test.js` | `encodeURL({ trackView: "3d" })` → decoded `null` (only `tv=2d` is written) | T7.3 ✅ | once 2D is the default, write `tv=3d` instead and omit `2d`. Old `tv=2d` links still decode correctly. |

**Findings and decisions** (1 and 2 accepted 29 Sep 2026)

1. **Mobile stage position (Phase 2). ✅ Decided: collapse the hero on loaded phones (folded into T2.3).** redesign-v2 had a rule, backed by a test, that the replay comes first on phones (`.stage` top < 120 px). In mockup A the loaded hero, the band and the tabs push the stage to about 550 px at 390 px wide. On phones with a comparison loaded, collapse the hero to a one-line `GHOST CAR.` with the event line, and move driver and lap details into the Δελτίο. Then change the test to "the stage and the play button are both inside the first viewport (844 px)".
2. **Builder utilities (Phase 2). ✅ Decided: text row under the presets link (folded into T2.6).** Once T2.6 moves the `⋯` menu into the loaded tab row, the builder page has no way to reach Saved comparisons, Showreel or Shortcuts (`?` still works). Add a quiet text row under the presets link: `Αποθηκευμένες · Αυτόματη προβολή · Συντομεύσεις`.
3. **3D default in URLs (Phase 7). ✅ Done in T7.3.** T7.3 flips the default view. `encodeURL` must switch from writing `tv=2d` to writing `tv=3d`, otherwise shared 3D links open in 2D. This is listed in the `test/` table above.

### Phase 1: Foundations (tokens, fonts, primitives) ✅

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
  - It shows the site's own `logo-nav.webp` (2.7 kB, copied to `public/`), the `F1 STORIES.` wordmark, and the canonical site links from one `NAV_LINKS` constant, with `Δεδομένα` as `aria-current="page"`.
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
- **T2.5 ✅** Colophon: `#17191b` in both themes, with the F1 Stories wordmark, section index, copyright and legal links. It replaces the builder's one-line footer.
- **T2.6 ✅** (the tab-row part was completed by T6.2)
  - Workspace actions live in the loaded hero (see T2.3). The Season item stays in `⋯` until T6.1.
  - Builder page: `BuilderUtilities` is a quiet text row, `Αποθηκευμένες · Αυτόματη προβολή · Συντομεύσεις`, currently under the featured list. It moves under the presets link in T3.2.
  - Every former header action is reachable, and all keyboard shortcuts work.
- **Layout**
  - New token `--edge: clamp(16px, 3.4vw, 48px)` for the shell's side margins. The builder form is left-aligned to it until Phase 3.
  - At ≥ 1100 px the workspace grid is `max(560px, 100dvh)` tall, so once you scroll to it the replay and rail fill the screen and the rail scrolls on its own. Phones and tablets keep the sticky player.
- **Tests:** 22 e2e pass, including a new one for the phone hamburger menu.
- **Size:** JS +1.6 kB gz, CSS +0.6 kB gz.

### Phase 3: Builder (empty state) ✅

- **T3.1 ✅** `ComparisonBuilder.jsx` and `comparison.css` now follow `a-desk-empty.png`:
  - `01 / ΝΕΑ ΣΥΓΚΡΙΣΗ` crumb with `Βήμα n από 3` (event → session → drivers).
  - Underline fields.
  - One column per driver, with a 4 px team-colour top rule (neutral until a driver is chosen) and a `ΟΔΗΓΟΣ A…D` kicker.
  - A right-hand column with `+ Πρόσθεσε τρίτο/τέταρτο οδηγό`, the ink **Σύγκριση γύρων →** (a quiet surface fill while disabled), and the OpenF1 note.
  - The layout follows the **form's** width (container queries): ≥ 900 px is 3-column event + A|B + action column; tablet puts the action under the drivers; ≤ 560 px (phones, the sheet) is Season + GP, then Session, then one driver per row.
  - Unchanged: every `id`, `aria-label` and label text (`Σκέλος` stays), progressive disclosure, native selects, availability hints, and the 2–4 slot hooks.
  - The group legends are visually hidden (the crumb and kickers carry the structure).
- **T3.2 ✅** The four-card `FeaturedComparisons` list is removed from the page and its component deleted. The builder now ends with:
  - a ruled row `Ή ξεκίνα από έτοιμη σύγκριση · ΕΠΙΛΕΓΜΕΝΕΣ ΣΥΓΚΡΙΣΕΙΣ (18) →` that opens the existing searchable dialog;
  - the utility row under it (`BuilderUtilities` in `DeskHero.jsx`).
  - The dialog's rows are ruled, with 16 px/600 titles, kicker metadata, and crumb-style year headings. Full dialog chrome is T8.1.
  - The builder page now spans the full `--edge` width, as in the mockup.
- **T3.3 ✅** The edit sheet renders the same builder with `inSheet`: no crumb or note, tighter rhythm, 16 px fields. Its behaviour is unchanged.
- **Tests:** checked visually at 390, 768 and 1440 px in both themes, with 2 and 4 drivers, plus the sheet and dialog. The removable driver's column lines up with its neighbours. All 22 e2e tests pass.
- **Size:** JS +0.15 kB gz.

### Phase 4: Real-time playback engine ✅

The replay now runs in real time. The clock goes from 0 to the slowest lap, and each car is placed by its own OpenF1 timestamps, so the faster car pulls ahead and reaches the line first. The finished car holds its position and its values.

- **T4.1 ✅** `src/domain/timing.js`:
  - `buildTimeIndex(samples, lapStart, lapDuration)` gives seconds from lap start per sample. It uses `date_start` when it's within 2 s of the first sample, otherwise the first sample, and spreads samples evenly if they have no dates.
  - `fractionAtTime(times, t)` does a binary search and returns a clamped fraction.
  - `driverFractions(driver, t)` gives a driver's path and telemetry fractions.
  - `buildReplayModel` adds `driver.pathTimes` / `driver.telTimes` and `model.duration`: the slowest lap, or the last sample when a lap time is missing.
  - `test/timing.test.js` (5 tests) covers lap-start matching, the fallback, undated samples, uneven spacing, clamping, and finish order. `redesign.test.js` also checks `duration`.
- **T4.2 ✅** `usePlaybackController` advances `prog += dt·speed / duration` through a `durationRef` that the app keeps in step with the loaded replay; 1× is real time.
  - The slider, URL and keyboard stay on `prog` (0–1 of the clock), so nothing else about shared links changed.
  - ← / → now step 1 s, and a double ← steps 5 s. The shortcuts dialog copy is updated.
- **T4.3 ✅** Every consumer reads per-driver fractions at `time = prog · duration`:
  - `TrackMap` (2D cars).
  - The 3D render loop, via a `timingRef` passed through `useScene` (no scene rebuild), so `updateCars` gets a `carProgress[]` and the follow cameras use the followed car's own progress.
  - `LiveTelemetry`: values at each driver's own time; the time column stops at each lap time.
  - `TelemetryTraces`: interim x-axis is **real time** (samples placed at `t / duration`, axis `0:00 … slowest lap`, playhead = the clock, click/drag seeks). T6.8 moves it to distance.
- **T4.4 ✅** The transport shows `m:ss.mmm / m:ss.mmm`; compact embeds show only the current time. The slider's `aria-valuetext` reads seconds.
- **Found along the way**
  - `fmt(59.9996)` rendered `0:60.000`. It now rounds to milliseconds first, with a unit test.
  - The e2e fixtures stamped every driver's samples from the same instant, unlike OpenF1. They now start at each driver's own `date_start` and span the lap.
- **Verified**
  - 35 unit and 23 e2e tests pass, including a new e2e test: at 82.104 s VER shows 1:22.100 and is stopped on the line, while NOR shows 1:22.104 and is still moving.
  - Live OpenF1 check (Suzuka 2025 Q, VER L13 vs NOR L11, and a 2024 race lap):
    - samples start 0.02–0.28 s after `date_start` and end within 0.33 s of the lap time;
    - at 87.256 s VER is on the line and NOR is not;
    - 2 s at 1× advanced the clock 1.98–2.10 s;
    - 2D and 3D both run with no page errors.
- **Known, pre-existing, left for T6.8:** the brake lanes are narrower than their chart (their labels take space), so the playhead doesn't line up with the brake bands.
- **Size:** JS +0.46 kB gz; the 3D chunk is unchanged.

### Phase 5: Derived analysis data ✅

`src/domain/gap.js`, pure and not yet imported by the UI (Phase 6 wires it in); `test/gap.test.js` has 6 tests. The method changed from the plan in two ways, both for accuracy.

- **T5.1 ✅ `buildGapTrace(model)`**
  - **Distance on one reference line.** Every driver's location samples are projected onto driver A's path (forward-searching nearest segment, forward-only), so a given distance is the same place on track even when the lines differ. The plan's per-driver normalised distance misaligns drivers on different lines: 0.5 % of extra line length is about 15 m mid-lap, roughly 0.2 s. A unit test with a line that's wider on only part of the lap passes with projection and **fails** with naive normalisation (checked by mutation).
  - **Anchors.** Each driver is pinned at the start line (t = 0) and the finish (t = lap time). The line positions are extrapolated from the reference's speed at its first and last samples, because OpenF1 samples start and end 0.02–0.3 s inside the lap. That makes "gap at the finish = lap delta" true by construction, so it **can't** be the validation gate the plan proposed.
  - **Ground truth: official sector times.** Where the fastest driver crosses the S1 and S2 lines, each driver's computed gap must equal the official sector-time difference.
  - **Clock calibration.** On real data the errors were near-constant per driver (Monza +0.156/+0.174 s, Silverstone −0.11/−0.06 s): the location clock and lap `date_start` disagree by a tenth or two. Each driver's offset relative to the fastest is estimated as the mean sector error (when two lines are available) and removed. It's rejected above 0.5 s.
  - **Gate:** the trace is `reliable` only when:
    - every driver has at least 20 samples, no hole over 2 s, and first/last samples within 1 s of the lap ends;
    - the offset is ≤ 0.5 s;
    - every sector line agrees within **0.1 s** after calibration.

    Otherwise `reliable: false` with a Greek `reason`, and the UI will hide the gap chart and dominance.
  - **Output:** `d` (400-point grid), `times[slot][k]`, `series` (gap to the fastest, lightly smoothed, exact at both ends), `checks`, `offsets`, and `trackFractions` (each grid point mapped onto the replay's track geometry for drawing).
- **T5.2 ✅** `dominanceSegments(trace, buckets = 48)`: each stretch goes to the driver who covers it in the least time; neighbouring stretches with the same owner are merged, and `from`/`to` are track-geometry fractions. Empty when the trace isn't reliable.
- **T5.3 ✅** `sectorTicks(model)`: the fastest driver's S1 and S1+S2 ends as fractions of the replay's time axis. Empty when sector times are missing.
- **Real-data validation** (fastest laps from OpenF1, 29 Sep 2026): **8 of 8 reliable**. Baku (no data) and Singapore (rate limited) couldn't be tested.

  | Session | Pair | Residual S1 / S2 (s) | Clock offset (s) |
  |---|---|---|---|
  | Suzuka 2025 Q | VER / NOR | +0.014 / −0.014 | −0.011 |
  | Monza 2025 Q | VER / NOR | −0.009 / +0.009 | +0.165 |
  | Monaco 2025 Q | NOR / LEC | +0.045 / −0.045 | −0.019 |
  | Silverstone 2025 R | NOR / PIA | −0.023 / +0.023 | (on NOR) |
  | Spa 2024 Q | LEC / VER | −0.068 / +0.068 | (on LEC) |
  | Zandvoort 2025 Q | PIA / NOR | +0.026 / −0.026 | +0.079 |
  | Melbourne 2025 Q | NOR / PIA | −0.059 / +0.059 | −0.021 |
  | Bahrain 2025 R | PIA / RUS | −0.033 / +0.033 | −0.066 |

  With 2 sector lines and 1 fitted offset, the residuals are symmetric: the gate effectively requires the two lines to agree within 0.2 s of each other.
- **Follow-ups**
  - The replay (Phase 4) still places cars by raw timestamps, so the same 0.1–0.17 s clock offset shows as a few metres of position error. It could reuse `trace.offsets` later.
  - Dominance splits a lap into about 30 segments on close laps. Phase 6 should check that it reads well and consider fewer buckets.
  - The e2e fixture's drivers start at different angles on their circle, so the trace will likely be unreliable there. Phase 6 needs fixture laps that pass the gate, plus one that doesn't (for the hidden-chart path).

### Phase 6: Loaded workspace ✅

The loaded page now follows `a-desk-loaded.png`. Checked on the fixtures at 390, 768 and 1440 px in both themes, with 2 and 4 drivers, and live on Monza 2025 Q and Suzuka 2025 Q.

- **T6.1 ✅ Page tabs**
  - `pageTabs.js` (was `railTabs.js`) defines `replay | sectors | laps | season`. `normalizePageTab` maps the old `live`/`telemetry`/`3d` → `replay`, `stats` → `sectors` and `h2h` → `season`; covered by a unit test and an e2e test on `tab=stats`.
  - `Workspace.jsx` (replaces `AnalysisRail.jsx`) mounts only the active panel.
  - The Season dialog became `SeasonPanel.jsx`, with the same scan hook. Its `⋯` entry is gone; it's a tab now.
  - `T` jumps to the telemetry section.
- **T6.2 ✅ Tab-row actions** (`app/ComparisonActions.jsx`)
  - Κοινοποίηση menu (link, embed, save, image, card), a direct **Ενσωμάτωση** button, and `⋯` (featured, saved, showreel, shortcuts). `Tabs` gained an `aside` slot for them.
  - Below 1100 px they become icons and Embed lives only in the menu, so all four tabs fit at 768 px.
  - The hero keeps **Αλλαγή σύγκρισης →** (just the edit icon on phones).
  - Change from the plan: the **2D/3D switch stays on the stage** at every width, as in the phone mockup, rather than moving to the tab row.
- **T6.3 ✅ Key facts:** `buildKeyFacts` (pure, unit-tested) gives Ταχύτερος, Τελική διαφορά, Μεγαλύτερο κέρδος (sector with the largest swing between the two fastest), and Μέγιστη ταχύτητα. On phones and tablets the facts sit **after** the player, as in the mockup.
- **T6.4 ✅ Stage panel:** surface, 2 px ink rule, cut corner, and a `ΚΥΡΙΑΡΧΙΑ ΠΙΣΤΑΣ ■ VER ταχύτερος …` legend (just `Πίστα` when there's no dominance), plus a caption. `DriverLegend` now appears **only in embeds**, which have no hero or brief.
- **T6.5 ✅ Track map:** wider road with a rule edge, dominance segments (slices of the track polyline in the driver's colour), a signal start line, and ink Barlow name chips with a team-colour edge. `showCars` lets the Τομείς map omit cars.
- **T6.6 ✅ Transport:** square ink play button, signal fill with an ink knob, S1/S2/S3 labels from `sectorTicks`, and an outlined **Επανάληψη** toggle (icon-only below 1100 px so the scrubber stays wide).
- **T6.7 ✅ `RaceBrief.jsx`:** `ΑΓΩΝΙΣΤΙΚΟ ΔΕΛΤΙΟ` with the time; ranked driver rows (a table named `Οδηγοί σύγκρισης`, team-colour rule, `Ομάδα · Γύρος n · Soft`, time or +gap); the live values; and `ΔΙΑΦΟΡΕΣ ΑΝΑ ΤΟΜΕΑ` as diverging bars. The `.diverging` styles moved to `analysis.css`.
- **T6.8 ✅ `02 / Τηλεμετρία`:** speed, throttle, brake lanes and **Διαφορά χρόνου** on the **lap-distance** axis (the fastest driver's position), with sector lines, a shared playhead, and click/drag-to-seek.
  - When the gap trace isn't reliable, the axis falls back to time, the gap chart is left out, and a margin note gives the reason.
  - The brake lanes now span the full chart (fixing the Phase 4 misalignment).
- **T6.9 ✅ Other panels:** Τομείς has its tables beside a large dominance map. In Γύροι the selected lap gets a signal rule, and the pending "διαφέρει / Φόρτωση" note shows on every tab.
- **Fixed on the way**
  - **3D on desktop at ≤ 1280 px:** `createRenderer` decided "mobile" from the stage's width (< 768 px). With the rail beside it, a 1280 px desktop was treated as a phone: no antialiasing, low-power GPU, unreadable buffer (this broke the e2e pixel test). It now uses the viewport width, as `useIsMobile` does.
  - **Names:** OpenF1's "Max VERSTAPPEN" now reads "Max Verstappen" everywhere (`getDriverFullName`, unit-tested).
  - **Gap line:** smoothed over 11 of 400 points (about 160 m) so ~4 Hz noise reads as a trend.
  - **Dominance:** a stretch is only coloured when one driver is ≥ 5 ms faster there; otherwise it stays neutral (unit test).
- **E2E fixture:** all drivers now share one line and start line, and their sector times match their positions, so the default comparison passes the gap gate. The alternate laps' sector times deliberately contradict the positions, giving the "refused" path.
- **Tests:** 43 unit and 26 e2e. The new e2e tests cover the coloured track + gap chart + seek-by-distance, the refused-gap path, and legacy `tab` links.
- **Size:** initial JS 40.95 kB gz, +6.8 kB over the Phase 1 baseline (budget +10); CSS 9.04 kB gz.

### Phase 7: 3D restyle (colours only) ✅

- **T7.1 ✅** `SCENE_THEME` (in `createRenderer.js`) now mirrors the stage panel's tokens, so the canvas reads as the panel it sits in:
  - light: background `#e9e3d6`, road `#d6cfbf`, edges `#8c897b`;
  - dark: background `#242321`, road `#36342f`, edges `#6d6861`;
  - lines in theme ink; start line in signal `#ed4c32` (the old white line vanished on paper).

  The stray `0x44aaff` racing line and the white delta line now use theme ink, and the lines aren't tone-mapped. Camera, fog, lights, quality and disposal are unchanged. The lights read well on paper as they are, so I didn't tune them.
- **T7.2 ✅** The 3D name tags use the 2D chip style: ink plate (paper-coloured in dark mode), a team-colour edge, and the acronym in Barlow Condensed 700. If Barlow hasn't loaded when the scene is built, the tag is redrawn once it has and re-uploaded on the next frame.
- **T7.3 ✅** 2D is the default view: `useTrackViewPreference` falls back to `2d`, and a stored `3d` or `?tv=3d` still wins.
  - `encodeURL` now writes `tv=3d` and omits `2d`. Old `tv=2d` links still open in 2D. Old links **without** `tv` (which meant 3D) now open in 2D, as the plan expected.
  - Tests: `helpers.test.js` updated, plus a new e2e test: a first visit gets 2D with no canvas, choosing 3D renders, and a reload keeps 3D.
- **Checked:** fixtures in both themes at 1440 and 390 px; live Suzuka 2025 Q in light (orbit) and dark (follow camera). No page errors.
- **Still open (pre-existing, documented in redesign-v2):** two tiny coloured dots near the 3D scene. The trail buffers start empty and follow the cars, so they aren't the obvious source. I left this for a separate investigation.
- **Size:** initial JS unchanged; 3D chunk +0.13 kB gz.

### Phase 8: Secondary surfaces ✅

- **T8.1 ✅ Dialogs and menus** (`base.css`)
  - Dialogs: paper panel, 1 px rule with a **2 px ink top rule**, 2 px corners, 22 px Plex 600 titles. On phones the bottom sheet is square with the ink rule; the edit sheet's left edge is an ink rule.
  - Popover menus match (paper, ink top rule, surface hover).
  - The copy action uses the ink button; the now-unused `.btn--primary` was deleted.
  - Applies to the Featured, Saved, Embed, Link, Shortcuts and Edit dialogs.
- **T8.2 ✅ Notices and toasts**
  - The page-level error is a margin note: 2 px signal rule, plain sentence, one close action, no tinted box.
  - Toasts are ink slips with paper text and a signal left edge.
- **T8.3 ✅ Embed**
  - Paper by default, following `th`. It uses the Phase 6 stage, chips and transport, and keeps the driver legend (no hero or brief in embeds).
  - The "Άνοιγμα στο F1 Stories Ghost Car ↗" link has a signal underline; its accessible name is unchanged.
  - The embed snippet sets the iframe background to the theme's page colour (`#f2eee4` / `#1b1a19`), so there's no flash while it loads.
- **T8.4 ✅ Exports**
  - **Share card:** redrawn as a 1200×630 Data Desk card (crumb, `GHOST CAR.`, event, ruled driver rows, signal band with the result and `EVERY TENTH COUNTS.`). It waits for Barlow and the Greek Plex subset to load, so the canvas text renders in the right fonts.
  - **Εικόνα πίστας (pre-existing bug):** the exported SVG kept only CSS classes, so outside the app the road and lines had no stroke and the file looked empty. Each path's computed stroke is now written onto it, over a rectangle in the stage colour; dominance colours included.
  - New e2e test: the downloaded SVG has inline strokes and a background, and no app classes.
- **Tests:** 43 unit and 28 e2e.
- **Size:** initial JS 41.62 kB gz (+0.67 kB, the share card); CSS 9.00 kB gz.

### Phase 9: QA ✅

- **T9.1 ✅ E2E coverage.** Covered as phases landed: real-time finish order (Phase 4); drag-to-seek, legacy `tab` links and the refused gap (Phase 6); phone hamburger (Phase 2); the 2D default (Phase 7); the SVG export (Phase 8). Phase 9 adds a skip-link test. **29 e2e, 43 unit.**
- **T9.2 ✅ Visual pass.** `node scripts/capture-screens.mjs docs/rework/final full` produces 56 captures:
  - builder, loaded 2D at 320/390/430/768/1024/1280/1440/1920 px;
  - 3D at 390 and 1440; four drivers; the Τομείς, Γύροι and Season tabs; the edit sheet; embeds at 390 and 800 px;
  - all in both themes.

  The script checks every capture for horizontal overflow and a clipped `GHOST CAR.` title. **No problems at any width.** Fixes from the review: below desktop the Δελτίο is capped at 720 px (it was sprawling at 1024), and the telemetry crumb's right half is hidden on phones (it wrapped at 320). The set is 8.2 MB of PNGs, in line with how redesign-v2 kept its evidence.
- **T9.3 ✅ Accessibility**
  - **axe-core WCAG 2.1 A/AA** (loaded from jsDelivr only for the audit, not a dependency): builder, replay, four drivers, all tabs, featured dialog, edit sheet and embed, at 1440 and 390 px in both themes (36 audits). **0 violations.** A control page with planted problems confirmed the harness detects them.
  - **Keyboard walk:** 22 tab stops in reading order, every one with a visible focus ring, arrow keys between page tabs, no traps.
  - **Added:** a "Μετάβαση στο περιεχόμενο" skip link, visible only when focused, that jumps to `main#content`.
  - Team-colour and token contrast was measured in Phase 1. `prefers-reduced-motion` is honoured by the global rule in `base.css`.
- **T9.4 ✅ Performance** (production build via `vite preview`, fixtures, 4× CPU throttle, DPR 2):

  | | redesign-v2 (its doc) | Now |
  |---|---|---|
  | Initial JS | 80.0 kB gz (app + React) | 87.4 kB gz (41.7 + 45.8): **+7.5 kB**, within the +10 kB budget |
  | Cold builder at 390 px | 345 kB, 7 requests | **171 kB, 8 requests** (the extra request is the 2.7 kB site logo) |
  | FCP / LCP | 136 / 136 ms | 160 / 160 ms (masthead and display title) |
  | CLS | 0.026 | **0.011** |
  | Builder long tasks | 0 | 0 |
  | 2D playback long tasks (5 s) | 0 | **0** |
  | 3D playback long tasks (5 s) | 0 | 1 × ~55 ms at play start |

  The 3D figure is **not a regression**. The Phase 0 build (redesign-v2 code), measured in a worktree with the same script, shows 1–3 long tasks of 50–68 ms at the same moment. The earlier "0" came from a different harness.

  No dependencies were added. The 3D scene still loads lazily, and Three.js still isn't loaded before a 3D replay.
- **T9.5 ✅** `lint`, `format:check`, `npm test` (43), `build` and `test:e2e` (29) all green.

### Phase 10: Cleanup and docs ✅

- **T10.1 ✅ Dead code.** The components the plan named were already removed when replaced: `BuilderHeader`/`WorkspaceHeader` (Phase 2), `stage__loading` (Phase 2), the `FeaturedComparisons` list (Phase 3), `SeasonDialog` → `SeasonPanel` (Phase 6), `AnalysisRail`/`railTabs` (Phase 6), `.btn--primary` (Phase 8).
  - A sweep of every CSS class, custom property and export against the code then removed:
    - classes: `.cut`, `.btn--quiet`, `.dialog--wide`, `.progress`/`.progress__bar`;
    - tokens: `--accent-ink`, `--tech`, `--track`, `--track-edge`, `--radius-3`, `--header-height`, `--rail-width`;
    - exports: `driverFractions` (unused); five `gap.js` helpers made private.
  - What remains flagged is a false positive (dynamic `dialog--${variant}`, a class name in a comment) or predates the rework.
- **T10.2 ✅ Docs**
  - **`README.MD`** (Greek): what it offers, features, architecture, the embed, deep links (`tv=3d`, `tab` values), storage defaults, shortcuts, assets, design direction, data-quality behaviour.
  - **`AGENTS.md`:** `pageTab`, the real-time clock, `timing.js`/`gap.js` rules (`fractionAtTime`, the reliability gate), the shell components, viewport-based mobile detection, the capture script, the new defaults to preserve.
  - **`docs/rework/architecture.md`:** new, short.
  - **`docs/redesign-v2/` and `docs/visual-rework/`:** marked historical.
  - **`docs/deployment-checklist.md`:** the manual smoke steps rewritten for the current UI (they still named redesign-v2's removed modals).

### After Phase 10: known issues fixed ✅

- **3D stray dots (pre-existing since redesign-v2).**
  - *Cause:* trails recorded a point only on frames where the clock changed. A paused seek changes it for one frame, while the car is still gliding to its new position, so one point in each car's colour stayed behind, often in the infield. Trails only fade while advancing, so it never went away.
  - *Fix* (`scene/renderLoop.js`, `updateCars.js`): trails grow only during playback and are cleared on any jump (a paused seek, a scrub over 1 % of the lap, or the loop restarting). Checked by re-capturing the same paused seek, which is now clean, and playback, where trails still draw.
- **Replay clock.** `applyClockOffsets(model, trace)` in `gap.js` shifts each driver's position timestamps by the measured offset, only for a reliable trace. The stage (2D and 3D) plays it. Unit-tested: the reference is untouched, the shift equals the offset, and an unreliable trace changes nothing.
  - While doing this I found and fixed a related inconsistency: `trackFractions` mapped driver A's corrected times through A's uncorrected timestamps, which misplaced dominance segments by a few metres whenever A wasn't the fastest driver.
- **Phone tabs.**
  - The Share and `⋯` actions move into the one-line opening on phones.
  - The Season tab shows "Σεζόν" on phones; its accessible name stays "Κατατακτήριες σεζόν", which contains the visible word (WCAG 2.5.3).
  - Tighter tab spacing.
  - All four tabs now fit at 320, 390 and 430 px. New e2e test: all tabs inside 390 px, the name kept, Share reachable from the hero.
- **Drift from f1stories.gr.** Copying stays (hosting decision), but it's now checked. `npm run check:site` fetches `partials/nav.html` and `styles/editorial.css` from f1StoriesPage plus the live nav logo, compares them with `src/app/siteNav.js`, a palette snapshot and `public/logo-nav.webp`, and exits 1 with a diff on any change. It passes today; a planted change is caught.
- **Checks:** 43 unit and 30 e2e tests; lint, format and build green; full capture run with no overflow at any width; live Monza 2025 Q (corrected clock) with no errors. Initial JS 41.86 kB gz.

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

- **Gap accuracy.** ✅ Checked in Phase 5: with reference-line projection and sector-time clock calibration, 8/8 real sessions pass, with the sector error at most 0.068 s (see Phase 5). The gate still hides the views for data that fails.
- **Lap start alignment.** ✅ Handled in `domain/timing.js`: `date_start` is used when it is within 2 s of the first sample; otherwise the first sample is time zero, and undated samples are spread evenly over the lap. This fallback is silent (no console noise), and a unit test covers it. On real data, samples start 0.02–0.28 s after `date_start` (Phase 4).
- **Drift from the site.** ✅ Now detectable: hosting stays separate and the markup is copied, but `npm run check:site` compares the copies with the live f1StoriesPage source and fails on any change.
- **Barlow has no Greek.** ✅ Respected: Barlow is used only for `GHOST CAR.`, `EVERY TENTH COUNTS.`, `F1 STORIES.` and driver acronyms (2D, 3D, share card). Greek headings use Plex 600.
- **Team colours on paper.** ✅ Measured in Phase 1: `--ink` is only used for marks, and every team colour is ≥ 3:1 in both themes. Names and acronyms stay in text colour.
- **Theme key.** Now the shared `f1stories-theme` (old `f1s-theme` migrates on load, see `docs/theme.md`). Still per-origin, so it can't sync with f1stories.gr while hosting stays separate. This is accepted per the hosting decision.
- **Tabs replace the rail** (my call in §1). ✅ Built in Phase 6. The Δελτίο sits beside the stage; if you'd rather have a switchable rail, only `Workspace.jsx` and `RaceBrief.jsx` change.

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
