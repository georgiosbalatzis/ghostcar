# Ghost Car 3D view: rework to a professional replay viewer

Plan written 29 Sep 2026 for implementation by Sonnet 5.5. **Scope: the 3D view only** (`src/scene/`, `src/hooks/useScene.js`, `src/features/replay/SceneStage3D.jsx`, the 3D controls in `ReplayStage.jsx`, and their tests and CSS). The 2D map, the analysis tabs and the page shell are out of scope. Only touch them where a task explicitly says so.

Read `AGENTS.md` first. Every rule there still applies. The rules that matter most here are repeated in §3.

---

## 1. Goal

The 3D view should read like a real replay and telemetry tool (think F1 TV's 3D tracker, a sim-racing replay viewer, MoTeC's track view). It should not look like a tech demo. A visitor opening a comparison in 3D should see:

- the **real circuit at true scale with real elevation**, framed to fill the stage;
- **cars at true size that sit on the road**, point the right way and move exactly where the timing says;
- **cameras that behave well**: a fitted overview, a top view that matches the 2D map, chase and onboard cameras for any driver, and a broadcast-style "TV" director;
- **crisp HTML labels and a HUD** (speed, gear, throttle and brake, lap time, gap) that match the site's type;
- analysis painted onto the track (dominance, speed, braking, racing lines), with the same honesty gates as 2D;
- a restrained, precise look that belongs to the f1stories Data Desk in both themes.

"Professional" means **precise, calm and truthful**. It does not mean flashy. No bloom, lens flares, fake scenery, trees, grandstands or skyboxes. No camera shake. No invented turn numbers.

---

## 2. Diagnosis: what is wrong today

These findings come from reading every file in `src/scene/` and from running the app on a real Suzuka 2025 comparison (VER vs NOR, Q, session 10002), with screenshots in all four cameras.

### 2.1 Wrong world: scale, proportions and elevation

| # | Finding | Where |
|---|---|---|
| W1 | OpenF1 `location` x/y/z are in **decimetres**: the measured path of a Suzuka lap is 57,596 units, and the circuit is 5,807 m. `norm()` squeezes the circuit to **40 units horizontally** but only **4 units vertically**. That flattens elevation about 10×. Suzuka's 40 m of elevation shows as about 4 m, and the figure-8 **crossover (a bridge)** renders as two roads overlapping on one plane, with z-fighting. | `src/helpers.js` `norm()` |
| W2 | At that scale 1 unit ≈ 49 m. The road is `trackW = 2.0`, so **about 98 m wide**. The car is scaled so its model is about 1 unit long, so **about 50 m long**. Everything is about 8× oversized relative to the circuit, and the chase camera looks like toy cars on a motorway. | `buildTrack.js:52`, `buildCars.js:123` |
| W3 | **Each driver is normalised by their own bounding box** (`norm(l1)`, `norm(l2)` …). Driver 2's coordinates are therefore in a slightly different frame from the track and from driver 1. When their laps differ at the extremes (a wider line at one corner), every point of that driver shifts by metres. Positions are subtly wrong everywhere. (The 2D `TrackMap` has the same pattern; see §9.) | `useScene.js:66-81` |
| W4 | The road is a constant-width ribbon with no fold handling. In tight hairpins (Suzuka T11, Monaco's Loews) the inner edge **self-intersects**, which shows as folded edge lines. | `buildTrack.js:60-79` |
| W5 | The track is a flat unlit ribbon floating in a flat colour. There is no ground, no horizon and no sense of scale or distance. Edges and the "racing line" are 1 px `GL_LINES`, which alias and disappear at distance. | `buildTrack.js`, `buildEnvironment.js`, `buildRaceOverlays.js` |

### 2.2 Cars

| # | Finding | Where |
|---|---|---|
| C1 | **Cars are pushed sideways (up to 0.7 units ≈ 35 m) when close.** This "proximity" lateral offset fabricates positions. | `updateCars.js:140-144` |
| C2 | Car position is eased toward the true point with `positionLerp` every frame, so **the car lags behind where the timing puts it**. At 80 m/s that is metres. The 2D map and the telemetry panel are exact; 3D is not. | `updateCars.js:57-69` |
| C3 | Heading looks **1% of the lap ahead** (`progress + 0.01` ≈ 58 m at Suzuka), so cars point across corners. There is no pitch on slopes. | `updateCars.js:23` |
| C4 | Height comes from the car's own noisy z plus a fixed 0.2, so cars float or sink relative to the road ribbon, which is built from a different driver's path. | `updateCars.js:51` |
| C5 | The model (11k tris, 22 meshes, untextured, every material roughness about 1.0, metalness 0) is lit only by ambient + hemi + one directional light, with emissive team colour added. The result is flat and plastic. The "shadow" is a flat grey **disc of radius 1 unit (≈ 50 m)** under each car. | `buildCars.js`, `materials.js` |
| C6 | Ghosts are the whole model at `opacity 0.5`. Overlapping transparent sub-meshes show the car's insides (wheels through bodywork) and sort wrongly. | `buildCars.js:152-155` |
| C7 | Trails are 3 px `GL_POINTS` and read as dotted noise. | `materials.js:67`, `buildCars.js:200` |
| C8 | The GLB is re-downloaded and re-parsed on **every scene rebuild** (theme, colouring or driver change). Until it arrives, there are no cars. | `buildCars.js:167` |
| C9 | A line connects car 1 and car 2 (`deltaLine`). It carries no information. | `buildRaceOverlays.js` |

### 2.3 Cameras and controls

| # | Finding | Where |
|---|---|---|
| K1 | **Nothing is framed.** Orbit sits at a fixed `dist 50` around the origin, and top sits at a fixed height of 65. The circuit fills about 40% of the stage at 1440 px and is cut off on phones (see `docs/rework/final/loaded-3d-390-dark.png`). | `cameras.js:62-79` |
| K2 | The top view and the overview **don't match the 2D map's orientation**: at Suzuka the top view is rotated about 90° from 2D. Switching 2D↔3D is disorienting. | `cameras.js:77` |
| K3 | The orbit camera **auto-rotates during playback** (`angle += 0.0008`). | `cameras.js:66` |
| K4 | **Camera shake on braking** (noise table). Gimmicky, and it ignores `prefers-reduced-motion`. | `cameras.js:41-46`, `useScene.js:18` |
| K5 | "Cinematic" is a point sliding along the curve with a fixed `+8,+5,+8` offset, looking at the midpoint of cars 1 and 2. It clips through the scene and frames nothing deliberately. | `cameras.js:47-59` |
| K6 | Only drivers 1 and 2 can be followed. Drivers 3 and 4 cannot. | `constants.js:72` |
| K7 | Hand-rolled controls: no pan, no damping, no zoom-to-cursor, and the camera can go under the ground. The **wheel listener is passive, so zooming also scrolls the page.** `touch-action: none` on a phone stage traps page scrolling. | `inputControls.js`, `replay.css:61` |

### 2.4 Labels, HUD and information

| # | Finding |
|---|---|
| L1 | Labels are canvas sprites anchored 1.6 units above the car and stacked by a fixed tier. In the top view they merge into one block ("NOR/VER"), and at distance they float far from the cars they name. |
| L2 | The 3D view has **no HUD**. In chase view you cannot see speed, gear or gap without looking at the side panel. |
| L3 | **Dominance colouring is 2D-only** (`showDominance = is2D`). 3D "Χωρίς χρωματισμό" is plain even when the trace is reliable. |
| L4 | The speed heatmap uses a rainbow ramp with no legend. It maps telemetry **by array index fraction**, not by time (this breaks the `fractionAtTime` rule), and it is driver 1 only, unlabelled. Braking is a binary red smear with the same index problem. |

### 2.5 Engineering

| # | Finding |
|---|---|
| E1 | `useScene` takes **24 positional arguments** and hard-codes `car1..car4`, `tr1..tr4`, `n1..n4`. |
| E2 | Any change to theme, `vizMode`, colour, label or driver path **disposes and rebuilds the whole renderer**, including the WebGL context and the GLB. Toggling the theme flashes the stage and re-downloads the model. |
| E3 | About 22 draw calls per car (× 4 cars, plus ghost passes to come). |
| E4 | e2e only proves "the canvas has pixels". The only fixture is a synthetic 104 m × 72 m oval, so nothing exercises elevation, crossovers, hairpins or real sample rates. |

---

## 3. Rules that must hold (from AGENTS.md, restated for 3D)

1. **Clock.** Every car position and every telemetry value shown comes from `fractionAtTime(driver.pathTimes | driver.telTimes, time)`, with `time = prog * model.duration`. Never place anything by the shared `prog` directly.
2. **Stage model.** The 3D stage renders `applyClockOffsets(model, trace)`, which is `analysis.stageModel`, exactly like 2D. Anything that describes the replay reads the model, never the live selector state.
3. **Honesty gates.** Dominance colours, gap readouts and anything else derived from the gap trace appear only when `buildGapTrace(model).reliable`. Otherwise hide them, and where it helps, say why (reuse the 2D wording).
4. **No invented data.** No turn numbers, no equal-thirds sectors, no curvature-detected "corners". Schematic choices (road width, ground) are fine, but the code must mark them `ponytail:`/schematic in a comment, and the UI must not present them as measurements.
5. **Preserve:** 2D as the default view, `tv=3d` in URLs, WebGL fallback to 2D with the Greek status message, context-loss handling, resource disposal, the idle/hidden frame caps, the adaptive quality controller, embeds always 2D, the PNG screenshot of the 3D canvas (`preserveDrawingBuffer` on desktop), Greek UI copy, and the paper (light) default theme.
6. **URL compatibility.** Existing `cam=` values (`orbit`, `follow1`, `follow2`, `top`, `cinematic`) must keep working. New values are additive.
7. **No new npm dependencies.** Everything below uses `three` (0.162, already installed) and its `examples/jsm` modules. Verified present: `OrbitControls` (with `zoomToCursor`), `NeutralToneMapping`, `RoomEnvironment`, `Line2`/`LineMaterial`, `BufferGeometryUtils`.
8. **Repo rules** (`CLAUDE.md`): scratch scripts go in `scratchpad/` or `perf/`. No inline `VAR=value` env prefixes. No chained file reads.
9. After each phase, run `npm run lint`, `npm run format:check`, `npm test` and `npm run test:e2e`. All must pass before starting the next phase. Make one commit per phase (`3D Phase N: …`).

---

## 4. Target design (what done looks like)

### 4.1 World

- **Units: metres.** World x = OpenF1 x / 10, world z = OpenF1 y / 10 (mirrored by `circuitFlip` exactly as 2D does, so orientation matches), world y = elevation in metres. The origin is the centre of the circuit's bounding box, and the ground sits at the lowest road point minus 1 m.
- **Road:** 12 m wide (schematic, stated in code), built from the reference lap resampled every 2 m (4 m on phones) and lightly smoothed. Elevation is smoothed over about 40 m. No folds in hairpins.
- **Around the road:** painted edge lines (0.25 m, off-white/ink per theme), a 4 m run-off band each side in a tone between road and ground, and a **skirt**: a vertical face from the road edge down to the ground in a darker tone. Elevation and the Suzuka bridge then read like an architectural model.
- **Ground:** a large plane in the stage colour with a subtle 100 m grid (major line every 500 m) that fades out with distance. Fog blends the ground edge into the background, so there is no visible horizon edge.
- **Start/finish:** a chequered strip across the road and a thin gantry (two posts + beam) in ink colour, placed where the reference lap starts (extrapolated back from the first sample, as `gap.js` does).
- **Lighting:** a `RoomEnvironment` PMREM environment for reflections, one directional "sun", and `NeutralToneMapping`, so team colours stay faithful to the 2D colours.

### 4.2 Cars

- True size: **5.63 m long**, scaled from the model's measured bounding box (12.15 units long in the GLB → factor ≈ 0.463).
- Pose each frame: exact position from the driver's own path at their own time, height and pitch from the road surface, heading from the tangent of the driver's own path over ±4 m. No lerp lag and no lateral push.
- Paint: body in team colour (metalness 0.3, roughness 0.35), carbon parts dark (roughness 0.55), no emissive.
- **Ghosts** (drivers 2–4): a single clean translucent layer (depth pre-pass technique, T3.5) at 45% opacity. You never see through to the car's own interior.
- A soft car-shaped **contact shadow** (a gradient texture on a 6.4 × 2.6 m quad) under every car.
- A short **tail**: the last 1.5 s of the driver's own path as a fading wide line in team colour, drawn only while playing.

### 4.3 Cameras

| Mode (menu, Greek) | URL `cam=` | Behaviour |
|---|---|---|
| **Επισκόπηση** (default) | `orbit` (default, not written) | Orbit around the circuit centre, auto-fitted to the stage aspect, starting at the **same orientation as the 2D map**, tilted 55°. OrbitControls: damping, pan, zoom to cursor, polar limit 5°–80°, distance limits. No auto-rotate. |
| **Κάτοψη** | `top` | Straight down, north-up exactly like 2D, fitted. Pan and zoom only, no rotation. |
| **Ακολούθηση** + driver | `follow1`…`follow4` | Chase camera behind the chosen driver: critically damped spring on position, speed-dependent distance (9 m slow → 13 m fast), height 2.8 m, looking 15 m ahead along their path, FOV 55°. |
| **Onboard** + driver | `onboard1`…`onboard4` | T-cam above the airbox, rigidly attached to the car, looking 30 m ahead along the path, FOV 70°. |
| **Τηλεοπτική** | `tv` (and legacy `cinematic`) | Broadcast director: auto-placed trackside cameras. Each shot tracks the focus car with a telephoto FOV so the car stays a constant size, and switches by **cut**, never a swoop. |

- The focus driver for chase, onboard and TV is chosen in the menu, by keys 1–4, or by double-clicking a car. It defaults to driver 1. TV focus defaults to the leading car.
- Switching between Overview, Top and Chase animates over 0.7 s with ease-in-out. Reduced motion makes every switch instant.
- **Wheel:** plain wheel scrolls the page and shows a one-line hint "Ctrl/⌘ + κύλιση για ζουμ". Ctrl/⌘+wheel zooms. In fullscreen, plain wheel zooms.
- **Touch** (phone): one finger scrolls the page, two fingers orbit/pan/zoom, and a one-time hint says "Δύο δάχτυλα για την κάμερα". In fullscreen, one finger orbits.
- **F** or the ⤢ button: fit/reset the current camera. **Double-click the ground**: re-centre the orbit there.

### 4.4 Overlays (HTML over the canvas)

- **Driver labels:** DOM chips in the same style as the 2D `.car__label`. They are projected each rendered frame (direct `style.transform` writes, no React state per frame), with a 1 px leader line to the car, stacked in screen order like 2D, and hidden when behind the camera. In chase/onboard the focused car has no label. Off-screen rivals get a small chip pinned to the stage edge with an arrow.
- **HUD** (chase, onboard, TV), bottom-left:
  ```
  ▌VER  Max Verstappen                 0:41.300
  287 km/h   7   DRS         ΓΚΑΖΙ ▮▮▮▮▮▮▮▮▯▯  ΦΡΕΝΟ ▯▯▯▯▯▯▯▯▯▯
  Διαφορά στο ίδιο σημείο  −0.182 s vs NOR          (only when reliable)
  ```
  It reads the React `time` prop, which the playback controller refreshes every 80 ms in 3D (`usePlaybackController.js:153`). That update rate is intentional and matches broadcast graphics.
- **Minimap** (chase, onboard, TV), top-right under the tools: the existing `TrackMap` component at about 180 px wide, with cars. Reuse it; do not build a new map.
- **Colour legend** for speed and braking modes: bottom-right, a gradient bar with min/max km/h and "Ταχύτητα · VER".
- **Fullscreen button** in the stage tools. It full-screens the Workspace `player` (stage + transport) via the Fullscreen API, so play and scrub stay available.

### 4.5 Colouring modes (menu "Χρωματισμός πίστας")

| Mode | Shows | Gate |
|---|---|---|
| `normal`: label "Κυριαρχία πίστας" when reliable, otherwise "Χωρίς χρωματισμό" | Dominance stretches painted on a 6 m centre band in each driver's colour; same data as 2D (`dominance` prop) | `trace.reliable` |
| `heatmap` "Ταχύτητα" | The reference driver's speed, mapped **by time**, on a perceptual sequential ramp, with legend | always |
| `brake` "Φρενάρισμα" | Where the reference driver brakes, mapped by time, in signal red at 70%; plain elsewhere | always |

Separate toggle in the menu: **"Γραμμές οδηγών"** (racing lines), off by default. Each driver's full-lap path is drawn as a 0.4 m wide line in team colour, 0.05 m above the road. The caption reads "Ενδεικτικές γραμμές · δείγματα θέσης ~4 Hz".

---

## 5. New module layout

Keep it small. Pure, three-free logic goes in its own files so `node --test` can cover it.

```
src/scene/
  world.js            NEW pure  createWorldFrame(): decimetres → metres, shared by track and every driver
  trackGeometry.js    NEW pure  centreline resample/smooth, distances, edges with fold removal, surface lookup
  carPose.js          NEW pure  pose at time: position, heading, pitch from a driver's world path + road surface
  cameraMath.js       NEW pure  fitDistance(), orientation matching 2D, spring step, TV camera placement + director
  sceneTheme.js       NEW       palette per theme (moved from createRenderer.js SCENE_THEME, extended)
  carModel.js         NEW       GLB load once per page (module cache), merge meshes by material, scale to metres
  buildTrack.js       REWRITE   road, run-off, skirts, edge paint, start/finish, colouring overlays
  buildEnvironment.js REWRITE   ground + grid shader, lights, environment map, fog
  buildCars.js        REWRITE   car instances from carModel, ghost materials, contact shadows, tails
  cameraRig.js        NEW       replaces cameras.js + inputControls.js: modes, OrbitControls, transitions, wheel/touch gating
  labels.js           NEW       projection of car anchors to screen for the DOM label layer
  renderLoop.js       UPDATE
  createRenderer.js   UPDATE    tone mapping, env, context options
  adaptiveQuality.js  UPDATE    tiers also switch effects (see T7.3)
  materials.js        UPDATE
  DELETE: cameras.js, inputControls.js, buildRaceOverlays.js, updateCars.js (logic moves to carPose.js/buildCars.js)
src/hooks/useScene.js         REWRITE   object API, build-once/update-in-place
src/features/replay/
  SceneStage3D.jsx     UPDATE   owns the overlay DOM: labels layer, HUD, minimap, legend, hints
  SceneHud.jsx         NEW
  ReplayStage.jsx      UPDATE   menu, fullscreen button, passes trace/dominance/time to 3D
  replay.css           UPDATE   overlay styles (use tokens; no new globals)
```

---

## 6. Phases and tasks

Each task lists **files**, **steps** and **acceptance**. Do the phases in order. Tasks within a phase can be done in any order unless a dependency is noted.

### ✅ Phase 0: Safety net and baseline (no app changes)

**✅ T0.1: Real-circuit fixture.**
- Files: `scripts/record-openf1-fixture.mjs` (new), `e2e/fixtures/suzuka-2025-q.json` (new), `e2e/fixtures.js`.
- Steps: write a script that downloads, once, from the live API, the meeting, session, drivers, laps (only the two laps used), stints, `location` and `car_data` for Suzuka 2025 Qualifying (session 10002), VER lap and NOR lap as used by the "Μαγική pole στη Suzuka" preset. Save the result as one JSON file (expect about 150–300 kB; drop unused fields). In `fixtures.js`, add `routeOpenF1(page, { circuit: "suzuka" })`, which serves that file, and export `suzukaUrl`. Keep the Monza oval as the default fixture.
- Acceptance: `npm run test:e2e` still passes. A new smoke test loads `suzukaUrl` in 2D and sees `.track-map`. The script is documented in `AGENTS.md` under Commands.

**✅ T0.2: Capture script for 3D.**
- Files: `scripts/capture-screens.mjs`.
- Steps: add a `3d` mode: `node scripts/capture-screens.mjs docs/rework3d/<dir> 3d`. On the Suzuka fixture at 1440×900 and 390×844, in both themes, it captures every camera mode (`orbit`, `top`, `follow1`, `follow2`, `onboard1` once it exists, `tv`) at `prog` 0.12 and 0.55, plus the colouring modes in `orbit`. Wait for the model to load (poll a dev hook, see T1.4) before each shot.
- Acceptance: running it now produces the **before** set in `docs/rework3d/baseline/` (cameras that don't exist yet are skipped). Commit these images.

### ✅ Phase 1: Scene architecture (no visual change)

**✅ T1.1: Object API for `useScene`.**
- Files: `useScene.js`, `SceneStage3D.jsx`.
- Steps: change the signature to `useScene(containerRef, { model, progRef, playRef, speedRef, cam, vizMode, isDark, onError, dominance, trace })`. `model` is the stage model. Internally, use `model.drivers` (1–4) as arrays: `cars[]`, `paths[]`, `trails[]`. Delete every `car1..car4`/`n1..n4`/`tr1..tr4`/`lab1..` variable and argument.
- Acceptance: no behaviour change. e2e is green. `useScene.js` has no positional parameter list.

**✅ T1.2: Build once, update in place.**
- Files: `useScene.js`, the `build*` modules.
- Steps: split the effect in two. (a) A **structural** rebuild when the geometry changes: `model.trackPath`, the driver set (slots and paths), or `circuitFlip`. (b) **In-place updates** without disposing the renderer: theme (update `scene.background`, fog colour and material colours from `sceneTheme`), `vizMode` (swap only the overlay mesh), driver colours and labels, `cam`, `dominance`, `trace`. Each `build*` function returns `{ object, update(params), dispose() }`, or just `update` where that is enough.
- Acceptance: a new e2e test (T9.2 #4) proves the `<canvas>` element survives a theme toggle and a colouring change (same element identity, no second WebGL context).

**✅ T1.3: Load the car model once per page.**
- Files: `carModel.js` (new), `buildCars.js`.
- Steps: `loadCarTemplate()` returns a module-level cached promise. After loading, **merge sub-meshes per material** with `BufferGeometryUtils.mergeGeometries` (≤ 6 draw calls per car instead of 22). Record the model's bounding box. Instances clone the merged meshes and **share geometry**. Scene disposal must not dispose shared template geometry: mark it with `userData.shared = true` and skip it in `disposeScene`. Until the template resolves, show a simple placeholder (a 5.6 × 2.0 × 1.0 m wedge in team colour).
- Acceptance: the network panel shows `f1car.glb` fetched once per page load, even after 10 theme/colouring/driver changes. `disposeScene` leaves the template usable (tested by a 2D→3D→2D→3D e2e round trip, which already exists).

**✅ T1.4: Dev/test hook.**
- Files: `useScene.js`.
- Steps: when `import.meta.env.DEV` or `navigator.webdriver` is true, set `window.__ghostcar3d = { ready, camera, cars, info: () => renderer.info, project(slot) }`. `ready` becomes true after the model loads and the first frame renders. Strip nothing else. Production builds without webdriver expose nothing.
- Acceptance: the capture script and e2e can await `window.__ghostcar3d?.ready`.

### ✅ Phase 2: True-scale world

**✅ T2.1: World frame.**
- Files: `world.js` (new), `test/scene-world.test.js` (new).
- Steps: `createWorldFrame(referencePath, { flip })` computes the bounding box of the reference path in raw decimetres, and returns `{ toWorld(p) → {x, y, z} metres, bounds, groundY }` with `x = ±(p.x − cx)/10` (sign from `flip`, same meaning as `norm()`), `z = (p.y − cy)/10`, `y = (p.z − zMin)/10`. **Every driver's path uses this one frame.** An elevation factor parameter (default 1) exists for T2.6.
- Acceptance: unit tests: (1) two drivers with different bounding boxes map the same raw point to the same world point; (2) a 5807 m lap measured in decimetres measures 5807 m ±1 in world; (3) the orientation matches 2D `TrackMap` projection for flip true and false (compare sign of x and z against `norm()`).

**✅ T2.2: Centreline and road surface.**
- Files: `trackGeometry.js` (new), `test/scene-track.test.js` (new).
- Steps:
  1. From the reference driver's world path, build a closed **centripetal Catmull-Rom** curve and resample it by **arc length** every 2 m (4 m when `isMob`).
  2. Smooth elevation with a Gaussian window of σ ≈ 15 m (about ±40 m). Leave x/z unsmoothed beyond the spline.
  3. For every centreline point, keep `s` (distance), the tangent, the left normal, the elevation, and **the reference driver's time at that point**, interpolated from `pathTimes`. T6.2 needs this time.
  4. Offset edges at ±6 m. **Fold removal:** walk each edge. Where an offset segment points backwards relative to the centreline tangent (`dot(edge_i+1 − edge_i, tangent_i) ≤ 0`), collapse those vertices onto the last valid one until the edge moves forward again. Do the same for the run-off (±10 m) and the paint lines.
  5. `surfaceAt(worldX, worldZ, hintIndex)` → `{ index, y, pitch }`. This is a nearest-centreline search in a ±40-point window around `hintIndex`, so each car keeps its own cursor and the lookup is O(1) per frame.
- Acceptance: unit tests: fold removal on a synthetic 8 m-radius hairpin leaves no backwards edge segments. The resampled length stays within 0.5% of the raw path length. `surfaceAt` returns the right index on a figure-8 at the crossing: use the hint, so it never snaps to the other level.

**✅ T2.3: Track meshes.** _(Done. The skirt hangs from the outer edge of the run-off, not the road edge, so the run-off band does not hide it. Skirts are left out under a bridge by an overpass mask, not by height.)_
- Files: `buildTrack.js` (rewrite), `materials.js`, `sceneTheme.js` (new).
- Steps: build one `BufferGeometry` each for the road, the run-off (both sides), the skirts (road edge → `groundY`, both sides) and the edge paint (two 0.25 m strips just inside each edge). Road, run-off and skirt use `MeshStandardMaterial` (roughness 0.9, metalness 0) with theme colours. Paint uses a `MeshBasicMaterial` with `polygonOffset` instead of y-nudges. Where the road passes over itself (a crossover), the skirt must not be drawn on the upper road where it would cut through the lower road. The simple rule: skip skirt quads whose drop is more than 3 m **and** which overlap another road segment in plan. If that proves fiddly, drop skirts that are more than 3 m tall; the bridge then reads as a deck. Mark the choice with `ponytail:`.
- Acceptance: at Suzuka, the 1440 overview shows the bridge clearly above the lower road, with no z-fighting at any camera. Hairpins show no folds. Draw calls for the whole track are ≤ 8.

**✅ T2.4: Ground, grid, fog, lights.**
- Files: `buildEnvironment.js` (rewrite), `createRenderer.js`.
- Steps: add a ground plane of 3× the circuit's bounding-box size at `groundY`, with a small `ShaderMaterial` grid: minor lines every 100 m, major every 500 m, line alpha fading with camera distance and with distance from the circuit centre, colours from `sceneTheme`. Use linear `Fog` from 0.6× to 1.6× the circuit diagonal, measured from the camera target, recomputed on camera changes. Set up a `RoomEnvironment` → `PMREMGenerator` → `scene.environment` (dispose the generator after), plus one `DirectionalLight` (sun at elevation 50°, azimuth 135°) and a low-intensity `HemisphereLight`. Set `renderer.toneMapping = NeutralToneMapping` and exposure 1.0. Remove `AmbientLight`.
- Acceptance: no hard horizon line in chase/TV views. Both themes look like the stage panel continued into depth (compare against the `--surface` token). Grid lines never shimmer at 1440 (fade them before they reach sub-pixel width).

**✅ T2.5: Start/finish.**
- Files: `buildTrack.js`, `trackGeometry.js`.
- Steps: find the start position. Extrapolate back along the reference path by `pathTimes[0] × speed at the first samples`, the same idea as `ref.start` in `gap.js`. Export a small helper from `gap.js` rather than duplicating it, if that is cleaner. Draw a 1.2 m-deep chequered strip across the road (canvas texture 8×2 checks, ink/paper colours) and a gantry: two 0.3 m posts at ±7.5 m, 7 m tall, joined by a 0.6 m beam, all in ink colour.
- Acceptance: at Suzuka the line sits on the main straight before T1 (compare with the 2D red start tick). Unit test for the extrapolation on a constant-speed path.

**✅ T2.6: Elevation emphasis toggle.**
- Files: `world.js`, `ReplayStage.jsx`, `useScene.js`.
- Steps: add a menu item under "Εμφάνιση": "Ανάγλυφο ×3" (checkbox, off by default, stored in `localStorage` key `f1s-3d-relief`, not in the URL). It rebuilds geometry with an elevation factor of 3. The HUD and labels are unaffected.
- Acceptance: at Monza (flat) and Suzuka the toggle visibly changes the relief and the cars stay on the road.

**✅ T2.7: Remove the old world.**
- Delete `buildRaceOverlays.js` (the delta line and the old racing line), the old `SCENE_THEME` usage, and the per-driver `norm()`/`smoothPath` in `useScene.js`. `helpers.js` keeps `norm()` for 2D.
- Acceptance: `grep -r "norm(" src/scene src/hooks/useScene.js` finds nothing.

### Phase 3: Cars

**T3.1: True scale and orientation.**
- Files: `carModel.js`.
- Steps: scale the model uniformly so its bounding-box length is **5.63 m**. Determine the model's forward axis once, visually. The GLB spans z −5.10 … +7.05, and the nose is probably +z, but check it in a chase-camera screenshot. Encode the result as `MODEL_FORWARD` with a comment. The model origin goes on the ground contact plane, centred between the axles.
- Acceptance: in chase view the car is about 1/2.1 of the road width wide (2.0 m of 12 m). The nose points along the direction of travel at every point of the Suzuka lap.

**T3.2: Exact pose.**
- Files: `carPose.js` (new), `buildCars.js`, `renderLoop.js`, `test/scene-pose.test.js` (new).
- Steps: `poseAt(driverWorld, fraction, surface, cursor)`:
  - **position** is the driver's own world path interpolated at `fraction`, where `fraction = fractionAtTime(driver.pathTimes, time)`. Use centripetal Catmull-Rom between samples; precompute per driver as a dense array (like the old `smoothPath`, but in world metres, from the shared frame).
  - **y and pitch** come from `surface.surfaceAt(x, z, cursor)`, not from the driver's own z.
  - **heading** is `atan2` of (point at +4 m − point at −4 m) along the driver's own path. Use the driver's own cumulative distance for this, not a fraction of the lap.
  - Delete `positionLerp`, the heading slerp and the lateral-offset code entirely. Smoothness comes from the dense spline. If the heading visibly jitters on real data, apply a **tiny** time-based smoothing to the heading only (τ ≤ 60 ms). Never smooth position.
- Acceptance: unit tests: with a constant-speed circular path, the pose position equals the analytic point within 0.05 m, and the heading equals the tangent within 1°. An e2e check (T9.2 #3) that at a paused `prog` the projected screen position of each car equals the projection of `fractionAtTime`'s point, within 2 px.

**T3.3: Paint and materials.**
- Files: `carModel.js`, `materials.js`.
- Steps: map the GLB materials (`BaseColor`, `2ndColor`, `3rdColor`, `Bloody_Red`, `Dark_Black`, `Mirror`). Body (`BaseColor`, `Bloody_Red`) uses team colour with `MeshPhysicalMaterial` (metalness 0.3, roughness 0.35, clearcoat 0.6, clearcoat roughness 0.2). Accents (`2ndColor`) use team colour lightened 25% toward white in dark theme and darkened 25% in light theme. `3rdColor` and `Dark_Black` are carbon (0x151515, roughness 0.55). `Mirror` is 0x9a9a9a with metalness 0.8. Remove all emissive. Verify the mapping visually. If the body turns out to be a different material, fix the table, not the approach.
- Acceptance: side-by-side with the 2D chip colours, a car's body reads as the same team colour (no ACES hue shift). The car has visible specular shape under the environment map.

**T3.4: Contact shadows.**
- Files: `buildCars.js`, `materials.js`.
- Steps: generate one 128×64 canvas texture per page: a rounded-rectangle radial gradient, black to transparent. Use it on a 6.4 × 2.6 m quad under each car, aligned with the car, at road height via `polygonOffset`, opacity 0.35 (light theme) or 0.5 (dark theme). Delete the disc. Real shadow maps are skipped; add them only if a reviewer finds the contact shadow insufficient.
- Acceptance: cars look grounded in chase view, with no grey discs.

**T3.5: Clean ghost transparency.**
- Files: `carModel.js`, `materials.js`.
- Steps: for ghost cars (slot ≥ 2), render each merged mesh twice. (1) A depth pre-pass: same geometry, `colorWrite: false`, `depthWrite: true`, `renderOrder = 10 + slot*2`. (2) A colour pass: `transparent: true`, `opacity: 0.45`, `depthWrite: false`, `depthFunc: LessEqualDepth`, `renderOrder = 11 + slot*2`. Only the front-most surface of the ghost is drawn, so you see one clean translucent shell. Driver 1 stays opaque.
- Acceptance: in chase view behind a ghost, no wheels or inner parts show through the bodywork. When two ghosts overlap, both are visible.

**T3.6: Tails.**
- Files: `buildCars.js`, `materials.js`.
- Steps: replace point trails with `Line2`/`LineMaterial` (0.5 m world width, `worldUnits: true`) covering the driver's own path from `time − 1.5 s` to `time`. Take the points from the dense world path by index range, so nothing is recorded per frame. Fade the alpha toward the tail with a per-vertex colour lerp to the road colour; `LineMaterial` supports `vertexColors`. Show tails only while playing. Hide them in the top view.
- Acceptance: tails are smooth, continuous and correct after a scrub, with no stray dots. The old "jumped" bookkeeping is gone because tails derive from time.

**T3.7: Remove leftovers.**
- Delete `updateCars.js`, the shake noise table, the `deltaLine`, and the spot light placeholders.

### Phase 4: Cameras and controls

**T4.1: Camera maths (pure).**
- Files: `cameraMath.js` (new), `test/scene-camera.test.js` (new).
- Steps:
  - `fitDistance(bounds, fovDeg, aspect, pitchRad, yawRad, margin = 0.08)` → the distance at which the whole bounding box (8 corners) projects inside the viewport with the margin.
  - `yawFor2D(flip)` → the yaw at which screen-right = world +x and screen-down = world +z, as in the 2D map.
  - `springStep(current, target, velocity, omega, dt)`: a critically damped spring (vectors in, vectors out, no allocation; write into out-params).
  - `placeTvCameras(centreline, { spacing: 250, offset: 30, height: 8 })` → camera stations on the **outside** of the local curvature (sign of the curvature over ±50 m), pushed out so they clear the run-off. On straights they alternate sides.
  - `pickTvCamera(stations, focusS, currentIndex, heldFor)` → the station whose `s` is nearest ahead of the car in [−60 m, +220 m]. Keep the current station if it has been held < 2.5 s and the car is still in its window.
- Acceptance: unit tests for each function, including the Suzuka fixture centreline for TV placement: no station within 15 m of any road point, and a TV cut rate below 1 per 2.5 s over the lap.

**T4.2: Camera rig with OrbitControls.**
- Files: `cameraRig.js` (new), delete `cameras.js` and `inputControls.js`, `renderLoop.js`, `useScene.js`.
- Steps:
  - One `PerspectiveCamera` and one `OrbitControls` (`three/examples/jsm/controls/OrbitControls.js`): `enableDamping`, `dampingFactor 0.08`, `zoomToCursor = true`, `screenSpacePanning = false`, `minPolarAngle 5°`, `maxPolarAngle 80°`, distances `[20 m, 3 × circuit diagonal]`. Mark the scene dirty on its `change` event, and keep rendering while damping is settling.
  - Implement the mode behaviours from §4.3. In Overview/Top the controls are enabled (Top: `enableRotate = false`, polar locked at 0.0001). In Chase/Onboard/TV they are disabled and the rig drives the camera.
  - Near/far: `near = clamp(distanceToTarget × 0.002, 0.1, 5)`, `far = 4 × circuit diagonal`. Update the projection only when they change by more than 10%.
  - Refit on resize (the existing `attachRendererResize` callback) for Overview/Top, **unless the user has moved the camera since the last fit**.
  - FOV: 40° Overview/Top, 55° Chase, 70° Onboard, dynamic in TV (`2·atan(14 m / (2·distance))`, clamped to 6°–45°).
- Acceptance: at 1440×900 and 390×844 the Overview and Top views frame Suzuka and Monza with 6–10% margin on the tighter axis. The Top view matches the 2D map orientation (compare screenshots; a test compares the projected screen position of the start line in Top vs its 2D position, as fractions of the stage, within 3%).

**T4.3: Transitions.**
- Files: `cameraRig.js`.
- Steps: on a mode change (except into or within TV, which cuts), tween the camera position and look target from current to the new mode's pose over 700 ms with easeInOutCubic. The pose of a moving target is evaluated each frame, so the tween lands on a moving car. Honour `matchMedia("(prefers-reduced-motion: reduce)")`: instant.
- Acceptance: switching Overview → Chase VER lands behind VER smoothly while playing, with no pop at the end.

**T4.4: Wheel and touch gating.**
- Files: `cameraRig.js`, `replay.css`, `SceneStage3D.jsx`.
- Steps:
  - Intercept `wheel` on the canvas in the capture phase (non-passive). If `!(ctrlKey || metaKey) && !document.fullscreenElement`, stop propagation to OrbitControls and let the page scroll. Do not `preventDefault`. Show the hint "Ctrl/⌘ + κύλιση για ζουμ" for 1.2 s, and no more than once per 4 s.
  - Touch: `touch-action: pan-y` on the 3D canvas when not fullscreen. One-finger touches are ignored by the rig so the page scrolls. Two-finger touches go to OrbitControls: `controls.touches = { ONE: null, TWO: DOLLY_PAN }` plus rotate via two-finger twist is fine; test on a real phone. In fullscreen, set `ONE: ROTATE`. Show "Δύο δάχτυλα για την κάμερα" once per session (`sessionStorage`).
  - Keep the existing mobile swipe-to-scrub disabled in 3D, as today (`touch.enabled = mob && is2DView`).
- Acceptance: e2e (T9.2 #5): a plain wheel over the canvas scrolls the page and does not change the camera distance; Ctrl+wheel zooms. Manual check on an iOS/Android phone: page scroll works over the 3D stage.

**T4.5: Focus and picking.**
- Files: `cameraRig.js`, `useScene.js`, `constants.js`, `F1PhantomCars.jsx`, `useKeyboardShortcuts.js`, `SharingDialogs.jsx`.
- Steps:
  - `CAM_MODES` becomes `["orbit", "top", "follow1", "follow2", "follow3", "follow4", "onboard1", "onboard2", "onboard3", "onboard4", "tv"]`. `pick(CAM_MODES, "cinematic")` maps to `tv` (add the alias where `cam` is decoded, `F1PhantomCars.jsx:119` and `:404`). Modes for slots that don't exist in the model fall back to slot 1.
  - The **C** key cycles through the *mode families* (Overview → Top → Chase → Onboard → TV) and keeps the focus driver. Keys **1–4** set the focus driver (switching Overview/Top to Chase). **F** fits/resets. Add these to `SHORTCUTS` in `SharingDialogs.jsx`.
  - Double-click on a car (raycast against the merged meshes) sets Chase on that driver. Double-click on the ground in Overview sets the orbit target to that point (animated).
- Acceptance: old links with `cam=cinematic`, `cam=follow2` and `cam=top` open in TV, Chase-driver-2 and Top. The keyboard shortcuts work and are listed in the help dialog.

**T4.6: TV director.**
- Files: `cameraRig.js`, `cameraMath.js`.
- Steps: the focus is the focus driver if one was chosen explicitly, otherwise the car furthest along by distance. Use `surfaceAt` indices, and handle the start/finish wrap: while a car is still in the lap, its distance is its progress. Place the camera at the station position, look at the focus car + 0.8 m up, with the dynamic FOV from T4.2. Cut (no tween) when `pickTvCamera` changes station. Add slight damping (τ 120 ms) on the look target only.
- Acceptance: over a full Suzuka lap at 1×, the TV camera always has the focus car on screen and not smaller than 4% of the stage height, and it never cuts more often than every 2.5 s.

### Phase 5: Overlays

**T5.1: DOM labels.**
- Files: `labels.js` (new), `SceneStage3D.jsx`, `replay.css`, delete the sprite code in `buildCars.js`.
- Steps: `SceneStage3D` renders `<div className="scene-labels" aria-hidden="true">` with one chip per driver, reusing the 2D chip styles (`.car__label` from 2D; extract shared rules rather than copying). Each rendered frame, the render loop calls `labels.update(camera, cars)`. This projects the anchor (car position + 1.6 m) to screen and writes `transform: translate3d(x, y, 0)`, `opacity` and `--stack`. Stacking is the same rank-by-screen-y logic as `TrackMap.jsx:74`, so extract it to a tiny shared function. Hide a chip when its anchor is behind the camera. Off-screen cars get an edge chip with an arrow, clamped 12 px inside the stage. In Chase/Onboard, hide the focused driver's chip.
- Acceptance: e2e (T9.2 #2): in Overview at 1440 and 390, every label is inside the stage and none overlap, the same check as the 2D test at `scene.smoke.spec.js:183`. In the Top view the labels no longer merge into one block.

**T5.2: HUD.**
- Files: `SceneHud.jsx` (new), `SceneStage3D.jsx`, `ReplayStage.jsx`, `replay.css`.
- Steps: render in Chase/Onboard/TV for the focus driver. Values: `telAt(driver.tel, fractionAtTime(driver.telTimes, time))`, exactly as `LiveTelemetry.jsx:11`. The own lap time is `min(time, driver.lapDuration)`, formatted with `fmt`. Gap at the same point, only when `trace.reliable`: compute it the same way the gap chart does (`TelemetryTraces.jsx:195-200`, `distanceAtTimeOnGrid`/`timeAtDistanceOnGrid`) against `trace.reference`. When the focus driver *is* the reference, compare against the next fastest. Type: numerals in the tabular figures already used by `LiveTelemetry`. Styling: a translucent `--surface` plate with the driver's 3 px team-colour left rule, like the brief rows. Throttle and brake are 10-segment bars. No animation.
- Acceptance: at a paused `prog`, the HUD speed and gear equal the "Αγωνιστικό δελτίο" panel values for that driver (e2e, T9.2 #6). The gap row is absent on the unreliable fixture lap (`l1=5`).

**T5.3: Minimap.**
- Files: `SceneStage3D.jsx`, `replay.css`.
- Steps: in Chase/Onboard/TV render `<TrackMap trackPath drivers time flip showCars />` (the existing component, memoised) in a 180 × auto box top-right, below the tools, on a `--surface` plate with a 1 px rule. Hide it on stages narrower than 480 px.
- Acceptance: the minimap cars match the 3D cars' positions at the same `time`.

**T5.4: Fullscreen.**
- Files: `ReplayStage.jsx`, `Workspace.jsx` (only to put a ref/id on `player`), `replay.css`.
- Steps: add a stage-tools button (icon `expand`/`collapse`; add the icons to `Icon.jsx` if they are missing) that calls `requestFullscreen()` on the player wrapper (stage + transport). Hide the button when `document.fullscreenEnabled` is false (iOS Safari on iPhone). In fullscreen the stage fills the viewport minus the transport, and wheel/touch gating switches as described in T4.4.
- Acceptance: fullscreen works in Chromium, Firefox and Safari macOS. Esc exits. The canvas resizes, and the Overview refits unless the user had moved the camera.

**T5.5: Loading and empty states.**
- Files: `SceneStage3D.jsx`.
- Steps: until `ready`, show a centred quiet "Φόρτωση 3D…" line over the stage colour (not a spinner). The placeholder cars (T1.3) are visible as soon as the track is. Canvas a11y: `role="img"` and `aria-label` like "Τρισδιάστατη αναπαράσταση: {meeting}, {drivers}, κάμερα {label}".
- Acceptance: no frame shows an empty stage for more than one frame after the replay loads.

### Phase 6: Analysis on the track

**T6.1: Dominance in 3D.**
- Files: `ReplayStage.jsx` (pass `dominance` to 3D and show the same legend/caption when in 3D), `buildTrack.js`, `trackGeometry.js`.
- Steps: `dominance` segments are fractions of driver A's samples (`trackFractions`). Map each `from`/`to` to centreline indices via the per-point reference time from T2.2: fraction → time via `pathTimes` → centreline index by binary search on the times. Paint a 6 m-wide centre band (vertex colours, `polygonOffset`) in each owner's colour at 85% opacity. Unowned stretches stay road colour. Update in place when `dominance` changes.
- Acceptance: at the same `prog` and camera Top, the dominance colours coincide with the 2D map's (visual check plus a unit test on the index mapping). With the unreliable fixture lap there is no band, and the menu label reads "Χωρίς χρωματισμό".

**T6.2: Speed and brake mapped by time.**
- Files: `buildTrack.js`, `sceneTheme.js`.
- Steps: for each centreline point, `t = refTime[i]`. Speed is `telAt(ref.tel, fractionAtTime(ref.telTimes, t)).speed`. Colour uses a perceptual sequential ramp with 5 stops, defined per theme in `sceneTheme.js`: dark theme runs deep blue → teal → sand → signal; light theme uses darker stops. No rainbow. Range: the reference lap's own 5th–95th percentile speed. Brake is `brake > 0` → signal red at 70%, otherwise no paint. Both use the same centre band geometry as T6.1. The legend (T5 styling) shows the ramp, min/max km/h and "Ταχύτητα · {label}" / "Φρενάρισμα · {label}".
- Acceptance: unit test: a synthetic lap with a known braking window paints exactly that window (±1 centreline point) even when location and car_data sample rates differ. Visual: at Suzuka the braking zones sit before T1, the hairpin and the chicane.

**T6.3: Racing lines.**
- Files: `buildTrack.js` or `buildCars.js`, `ReplayStage.jsx`.
- Steps: add the menu checkbox "Γραμμές οδηγών" (default off, `localStorage` `f1s-3d-lines`). Draw each driver's full dense world path with `Line2` (0.4 m, `worldUnits`), team colour at 90%, 0.05 m above the surface (height from `surfaceAt`). Show the caption from §4.5 while it is on.
- Acceptance: lines follow each car exactly (the car centre stays on its own line throughout the lap).

**T6.4 (DECISION REQUIRED before implementing): Sector boundaries.**
- Proposal: when `trace.reliable`, draw thin neutral lines across the road, with "S1 | S2" chips, at the fastest driver's position at `sector1` and `sector1 + sector2` seconds (`fractionAtTime` on their corrected `pathTimes`). This is derived from official sector times and position data and is gated like dominance. However, `buildTrack.js:156-157` records a deliberate decision *not* to draw sectors. **Ask the owner.** Implement only on a yes, and then also update that comment.

### Phase 7: Look and feel pass

**T7.1: Scene palette from tokens.**
- Files: `sceneTheme.js`.
- Steps: for each theme, define `background` (= `--surface`), `ground`, `grid minor/major`, `road`, `runoff`, `skirt`, `paint`, `ink`, `signal`, the speed ramp and the shadow opacity. Derive them from `src/styles/tokens.css` values and record which token each one mirrors in a comment, as the current `SCENE_THEME` does. Check the two themes side by side with the page around the stage.
- Acceptance: at a glance the stage looks like part of the page in both themes. The road/ground contrast is visible but quiet. Road vs run-off contrast is ≥ 1.15:1 (a subtle but readable step).

**T7.2: Antialiasing and resolution.**
- Files: `createRenderer.js`, `adaptiveQuality.js`.
- Steps: turn on `antialias: true` everywhere, since there are no more 1 px lines and MSAA is the cheapest fix for skirt/road edges. Keep the pixel-ratio caps. Adaptive quality tiers become: tier 0 is full; tier 1 lowers DPR and hides the grid's minor lines; tier 2 lowers DPR further, hides tails and uses the placeholder shadows only. Measure frame rate before and after on a phone.
- Acceptance: no visible stair-stepping on road edges at 1440 DPR 1. Phones stay ≥ 30 fps during playback in Overview and Chase (manual check, record the device in the phase commit message).

**T7.3: Reduced motion and restraint.**
- Steps: under `prefers-reduced-motion`, make camera transitions instant, TV only cuts, and chase uses a stiffer spring (no sway). Confirm there is no auto-rotation, no shake and no continuous animation while paused. The render loop must go idle when paused and not interacting (keep the existing `IDLE_MS` logic).
- Acceptance: with playback paused and no input, `renderer.info.render.frame` does not advance over 2 s (e2e via the dev hook).

### Phase 8: Performance and robustness

**T8.1: Budgets.**
- 1440×900, DPR 2, 4 drivers, Chase: draw calls ≤ 90 and triangles ≤ 250k (`renderer.info`). Log both in dev once per 5 s behind `?debug3d=1`. Nothing logs otherwise.
- Record fps on an M1/M2 MacBook (Chrome) and a mid-range Android phone in `docs/rework3d/perf.md`.

**T8.2: Allocation-free frame.**
- The render loop, pose, labels and camera rig must not allocate per frame: reuse `Vector3`/`Quaternion` scratch objects and write into out-params. Check with a Chrome performance recording (no sawtooth GC during a 20 s playback). Note the result in `perf.md`.

**T8.3: Disposal and context loss.**
- Every `build*` returns `dispose()`. The shared template and the env map are disposed on page unload only. Keep the context-loss → 2D fallback message. Add an e2e test: toggle 2D/3D 10 times, then check that `renderer.info.memory.geometries` and `textures` are back to their first-3D values ±2 (dev hook).

### Phase 9: QA and docs

**T9.1: Unit tests** (node, `test/`). These are already specified per task: world frame, track geometry (resample length, fold removal, crossover `surfaceAt`), pose, camera maths (fit, 2D yaw, spring, TV placement and selection), dominance and heatmap index mapping, start-line extrapolation.

**T9.2: e2e** (`e2e/scene.smoke.spec.js`, on both the Monza and Suzuka fixtures):
1. Every camera mode renders pixels with no page errors. Old `cam=cinematic` opens TV.
2. Overview at 1440 and 390: labels are inside the stage and not overlapping.
3. Paused at `prog` 0.3: `__ghostcar3d.project(slot)` equals the projection of the pose from `fractionAtTime` (±2 px) for every car. (This guards rule §3.1.)
4. A theme toggle and a colouring change keep the same canvas element and one WebGL context.
5. A plain wheel scrolls the page and leaves the camera distance unchanged; Ctrl+wheel changes it.
6. The HUD speed and gear equal the brief panel's values at the same `prog`.
7. Unreliable lap (`l1=5`): no dominance band, no HUD gap row.
8. 2D/3D toggled ×10: no leak (T8.3).
9. Idle: no frames rendered while paused (T7.3).

**T9.2 note:** headless Chromium renders with SwiftShader. Keep pixel assertions structural (visible, inside the stage, not overlapping), never pixel-exact.

**T9.3: Screenshot sets.** Run `node scripts/capture-screens.mjs docs/rework3d/final 3d`. Review every image against the checklist below and commit the images.

**Visual acceptance checklist:**
- [ ] Overview fills the stage (6–10% margin) at 1440 and 390 in both themes. Same orientation as 2D.
- [ ] Suzuka: the bridge is visibly above the lower road. No z-fighting anywhere. No folded edges at the hairpin or the chicane.
- [ ] Cars are true size, sit on the road (no gap, no sinking), point along the track and pitch on slopes.
- [ ] Ghosts are one clean translucent shell.
- [ ] Labels are crisp, attached to their cars, never overlapping, and never outside the stage.
- [ ] Chase: the HUD is legible and the minimap is present. Speed and gear match the brief.
- [ ] TV: every shot is deliberate, the car is always in frame, and there are no swoops.
- [ ] Colouring modes have a legend. Dominance matches 2D.
- [ ] No shake, no auto-rotation, nothing moving while paused.
- [ ] The light theme looks like paper, the dark theme like charcoal. Team colours match the 2D chips.

**T9.4: Docs.**
- Update `AGENTS.md` (Architecture: the new `src/scene/` modules, metres, one world frame, overlays; Commands: the fixture recorder and the 3D capture mode) and `README.MD` (camera modes, shortcuts). Mark this file's phases complete as you go, the way `REWORK_TASKS.md` does.

---

## 7. What is deliberately not in this plan

- **Real shadow maps, SSAO, bloom, reflections on the road**: contact shadows plus the environment map give 90% of the effect for about 5% of the cost. Add real shadows only if the T3.4 result is judged insufficient.
- **Scenery** (trees, grandstands, buildings, kerbs, barriers): there is no data for it, and invented kerbs and corners would conflict with rule §3.4.
- **Turn numbers and corner names**: not in OpenF1.
- **Wheel spin, steering and suspension animation**: invisible at replay speeds and scales. Skip.
- **Per-driver 3D speed heatmaps**: the reference driver only, labelled. The telemetry traces already compare drivers.
- **A 3D view inside embeds**: embeds stay 2D (existing rule).

## 8. Suggested commit sequence

`3D Phase 0: real-circuit fixture and 3D capture baseline` → `3D Phase 1: scene API, build-once updates, cached model` → `3D Phase 2: true-scale world` → `3D Phase 3: cars` → `3D Phase 4: cameras and controls` → `3D Phase 5: overlays` → `3D Phase 6: analysis layers` → `3D Phase 7: look and feel` → `3D Phase 8: performance` → `3D Phase 9: QA and docs`. Work on a branch `rework/3d-view`. Do not merge or push without the owner's OK.

## 9. Observed outside scope (report, don't fix)

- **2D uses per-driver normalisation too.** `TrackMap.jsx:51` projects each driver's `norm(driver.path, flip)` with that driver's own bounding box into the track's projection, so drivers 2–4 are slightly misplaced in 2D as well (finding W3). The fix is small once `world.js` exists (project every driver through one frame), but it changes 2D, so it needs the owner's OK.
- **The circuit direction table is a workaround.** `norm()` maps OpenF1 y → screen-down, which mirrors every circuit. `circuit.js` then un-mirrors known circuits through a clockwise table, and any circuit missing from the table (default clockwise) can render mirrored. The root fix is `z = −y` with the table removed. It affects 2D and shared images, so it is out of scope here. 3D follows whatever 2D does (T2.1), so the two stay consistent.
