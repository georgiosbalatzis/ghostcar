# Race Desk in Ghost Car

Ghost Car is one of four Race Desk products. The canonical architecture lives in the main site: [`f1StoriesPage/docs/race-desk-architecture.md`](https://github.com/georgiosbalatzis/f1StoriesPage/blob/main/docs/race-desk-architecture.md). This page only records how Ghost Car applies it.

| Level | In Ghost Car | Where |
|---|---|---|
| Global section | `Δεδομένα` is current (`aria-current="page"`) | Masthead, `NAV_LINKS` in `src/app/siteNav.js`. Unchanged; Race Desk and its products never go here. |
| Umbrella | `F1 STORIES / RACE DESK` | Kicker on the hero's crumb rule (`DeskHero`). Not a heading. |
| Products | `THE GRID` · `TELEMETRY` · `GHOST CAR` · `TYRES`, GHOST CAR current | `<nav aria-label="Race Desk" lang="en">` on the same rule, `RACE_DESK_LINKS` in `src/app/siteNav.js` |
| Product | `GHOST CAR.` with `Σύγκριση γύρων · OpenF1` | The page's only H1; the descriptor is a block line inside it, as in Telemetry |
| Product controls | Builder, Αναπαράσταση / Τομείς / Γύροι / Σεζόν tabs, 2D/3D, transport | Below the signal band. Not Race Desk products. |

Two current items at once is intended: `Δεδομένα` in the global nav and `GHOST CAR` in Race Desk sit at different levels.

## Destinations

| Product | URL |
|---|---|
| THE GRID | `https://f1stories.gr/standings/` (absolute, never the main site's redirect stub) |
| TELEMETRY | `https://georgiosbalatzis.github.io/f1-telemetry-dashboard/` |
| GHOST CAR | `import.meta.env.BASE_URL` (`/ghostcar/`), i.e. `https://georgiosbalatzis.github.io/ghostcar/` in production; dev and preview stay local |
| TYRES | `https://georgiosbalatzis.github.io/Tyres/` (not the main site's `/tyres/` stub) |

The GitHub Pages hosts are deployment boundaries, not separate brands: product branding does not depend on where a product is hosted. Links open in the same tab, carry no ↗, and pass no comparison state. BetCast is a sibling F1 Stories product and is not in the switcher. `npm run check:site` fails if the main site's switcher changes its labels, order or product links.

## Visual rules

Styles are `.race-desk-nav` in `src/app/app.css`, using existing tokens only. Labels are Barlow Condensed 700, 15px. Inactive labels use `--text-2`; the current one uses `--text` plus a 3px `--signal` bar on the crumb rule, so state is not colour alone. Focus is the global 2px `--accent-text` outline; no ancestor may set `overflow` that would clip it. Targets are 44px tall. Below 768px the products wrap onto their own `--rule` sub-rule under the kicker. The workspace tabs underline *below* the label, so the two levels never look alike.

- **Phones with a loaded comparison** keep their one-line opening (replay in the first screen), so the crumb, the switcher and the descriptor are hidden there, as the crumb already was. The builder, and every width from 768px, show them.
- **Stacking.** The masthead is in normal flow, and the site menu, dialogs and menus are in the top layer, so the positioned switcher links cannot paint over them; no z-index was added. `e2e/race-desk.smoke.spec.js` checks this at 1440–375px and fails if the masthead is made sticky without its own stacking level.
- **Whole pixels.** The descriptor has a 16px line height, and the switcher's 0.4px bottom margin keeps the crumb's old fractional height, so the page below moves by whole pixels and stays pixel-identical in before/after captures (except at ~1024px, where the title column and the aside trade places as the taller one).

## Retained "Data Desk" mentions

Historical design records keep the old name: `REWORK_TASKS.md`, `docs/rework/` (architecture and mockups), `docs/redesign-v2/`, `docs/visual-rework/` and `Work3D.md`. Two code comments (`Workspace.jsx`, `analysis.css`) use it for the September 2026 page layout. None of them is user-facing.
