# Analysis figures and article embeds

Load a comparison, then open **Τομείς → Γραφήματα για άρθρο**. The selector offers:

- **Χάρτης κέρδους / απώλειας:** green where comparison B gains time, red where B loses time; intensity represents incremental gain over 200 m. Grey means |gain| <0.020 s. This is independent of team colours.
- **Σωρευτική διαφορά χρόνου:** running `elapsed A − elapsed B` versus a common distance reference. Positive means B is faster. Official sector checkpoints and the official finish are identified; a mapped Baku T16 exit proxy marks the final high-speed section.
- **Τηλεμετρία τμήματος:** speed, incremental gain from the selected range's beginning, throttle, brake and raw OpenF1 DRS codes. Choose **Από στροφή / Έως στροφή** using mapped turn exits, start and finish. Baku offers T1–T20 and the T16/T20 shortcuts. Circuits without turn mapping explicitly fall back to metre inputs; no turn coordinates are guessed.

The figures compare the first two **loaded** slots, including the same driver on different laps. A and B always include the lap number. Editing selectors without loading does not change their labels, calculations or share URLs. Three/four-driver replays continue to work; the publication panel explicitly identifies its A–B scope.

**SVG** downloads a standalone vector figure with resolved theme colours and embedded local IBM Plex Sans fonts. **PNG · 4.200 px** rasterizes that same figure at 4200 pixels wide, preserving its aspect ratio. Pixel dimensions, rather than a claimed DPI metadata value, define browser PNG resolution. Neither export needs a new charting library, server, Python installation or third-party rendering service.

Select **Ενσωμάτωση γραφήματος**, or the existing **Ενσωμάτωση** action, to choose replay, gain map, cumulative delta or telemetry. Telemetry ranges are editable in the embed dialog. The checkbox controls whether article readers may change the view and range. Unchecking it creates a fixed figure. Copy the generated iframe into the article. Figure frames use a suggested height of 960 px; adjust it for the article layout. Small screens can pan the chart horizontally without making the document overflow.

Turn selectors are shared by the tool, the embed dialog and interactive iframes. Ranges such as **T16 exit → T20 exit** appear in the figure and its exported image. Each mapped exit is explicitly approximate. The calculations and chart axis still use the common distance reference. URLs retain `from`/`to` in metres for backward compatibility; a legacy distance that does not match a mapped exit is shown as **Προσαρμοσμένο όριο**, preserving its exact position until the reader chooses a turn. Reverse/zero-length turn selections are disabled.

Existing `embed=1` URLs without a figure parameter remain the original 2D replay with playback controls and footer. Figure embeds show the selected analysis and the existing OpenF1/source link. Both modes retain host `#light`/`#dark` theme updates. Generated local-development snippets use the public application host, as before; the new figure parameters require this version to be deployed before a public iframe will show them.

The new query fields are:

| Parameter | Values | Meaning |
|---|---|---|
| `fig` | `map`, `delta`, `telemetry` | Initial figure; omitted means legacy replay in an embed |
| `from` | Non-negative finite number | Start in metres on this comparison's shared reference |
| `to` | Non-negative finite number | End in metres; omitted means finish |
| `fixed` | `1` | Hide reader view/range controls |

They accompany the existing year/meeting/session/driver/lap fields. For example, after deployment:

```html
<iframe
  src="https://georgiosbalatzis.github.io/ghostcar/?y=2026&mk=1295&sk=11373&d1=63&d2=63&l1=21&l2=25&tab=sectors&embed=1&fig=telemetry&from=4115&v=2"
  width="100%"
  height="960"
  style="border:0"
  loading="lazy"
  title="George Russell — σύγκριση γύρων Q3, Baku 2026"
></iframe>
```

**Data contract.** `src/domain/figureAnalysis.js` builds the pair's shared-distance analysis with the existing `buildGapTrace` gate, using 2001 points. Missing/non-monotonic position timestamps and missing/inconsistent official sectors are refused before generating publication figures. The existing 0.100 s sector tolerance is preserved. `gap.js` additionally exposes `lengthMeters`, measured on its existing reference polyline; playback logic is unchanged. No independent lap-percentage alignment is introduced. Unknown telemetry channels remain gaps, missing DRS stays unknown, and discrete brake/DRS states are drawn as steps. The original position-clock correction and start/finish anchors remain explicitly disclosed.

**Baku boundaries.** `src/domain/bakuLandmarks.json` contains the source URL and year of the historical MultiViewer corner markers already used in the Russell analysis. They are projected onto the current loaded trajectory and retained only within 20 m of it. Their old distances are never reused. T16/T20 exits are explicitly approximate, defined as projected marker +50 m. Publication figures and the UI carry this note. These shortcuts are not invented for other circuits. A reference-distance range is specific to its loaded comparison; it is not a universal official track-distance marker.

**Validation.** Unit tests cover same-driver identity, shared-distance sign and reconciliation, missing/invalid samples, historical landmark projection and figure URL round-trips. Browser tests exercise the real frozen Russell laps, all three views, exports and PNG pixel content, interactive/fixed embeds, mobile overflow, invalid intervals, unapplied selector edits and different-driver/legacy embed compatibility. Existing application browser tests remain the regression baseline.
