# Ghost Car UI tokens

Canonical source: `georgiosbalatzis/f1StoriesPage/styles/editorial.css`.
Specification: `f1StoriesPage/docs/design-tokens.md`. Sync revision: `2523a16a` (Priority 4A).
The local JSON snapshot is validation input, not a runtime dependency.
Run `npm run check:tokens` offline, or `npm run check:site` for upstream nav/palette/logo drift.

| Shared token       | Light     | Dark      |
| ------------------ | --------- | --------- |
| `--bg-base`        | `#f2eee4` | `#1b1a19` |
| `--bg-surface`     | `#e9e3d6` | `#242321` |
| `--bg-surface-alt` | `#dfd9ca` | `#2e2c29` |
| `--text-primary`   | `#20251f` | `#eee8db` |
| `--text-secondary` | `#5b6256` | `#b6bbac` |
| `--border`         | `#c8c8b9` | `#4b5146` |
| `--accent`         | `#a82e1c` | `#ff775f` |
| `--signal`         | `#ed4c32` | `#ed4c32` |

Existing aliases remain: page → bg-base, surface → bg-surface, surface-2/surface-3 → bg-surface-alt, text → text-primary, text-2/muted/rule-strong → text-secondary, rule → border, accent-text → accent. Necessary stronger control borders use secondary; quiet structural rules remain border. Small ordinary UI text on light surface-alt uses primary, not secondary (4.48:1).

## Preserved technical roles

The `--viz-*` group freezes annotation, muted-state, raised-rail and technical-rule inks independently of generic aliases. Data tables, scene overlays, charts, timing labels and timeline rails consume this group. Light/dark values respectively:

- secondary annotation: `#555c50` / `#b6bbac`
- muted annotation/status: `#585e53` / `#9a9e91`
- technical rule: `#8c897b` / `#6d6861`
- technical raised surface: `#d4cdbc` / `#3a3834`

Driver `--ink` still means the supplied team color, darkened by the existing 64% black mix on paper. It is never redefined as fixed editorial ink; `--colophon-ink` is the separate fixed footer surface.

SCENE_THEME is a product palette, not a requirement to recolor WebGL whenever UI tokens change. The existing mirroring test resolves aliases and uses preserved technical raised/rule roles. The independent visualization snapshot checks every scene/ramp/shadow value and representative material/data inks.

Retained exceptions: exact driver/comparison/sector/telemetry colors, materials, lighting, scene shadows, timing/status ink, visualization strokes, viewport masks, circular marks, fixed printed share-card palette (including `#555c50` lap metadata), scrims, functional overlay shadows and metric-matched font fallbacks. Compact desktop controls and 44px mobile targets retain their dimensions.

## Focus and theme

Default focus is 2px accent, 5px offset. Race Desk retains 2px outward clearance. Scrollable tabs and mobile nav links use -4px; menu items use -2px. Any further clipped interactive edge uses a scoped inset ring. Light masthead focus uses fixed ink; light inverted footer uses paper. Inversion uses canonical fixed paper/ink and inverse metadata/rules.

Typography remains IBM Plex Sans for UI and Barlow Condensed for Latin display. Content stays flat and square; existing 2px controls, 4px media and structural/emphasis/signal rules remain unchanged.

Theme state is untouched: f1stories-theme, legacy migration, pre-paint resolution, URL overrides and auto remain Priority 2 behavior. No stored preference still opens light, including on a dark OS. Loaded compact mobile replay still hides the Race Desk switcher and descriptor. SignalBand and embeds retain their layouts.
