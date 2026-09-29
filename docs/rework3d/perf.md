# 3D view: performance record

Measured on 29 Sep 2026, branch `rework/3d-view`, Suzuka and Monza e2e fixtures (no live API).

## Frame cost (T8.1)

`renderer.info.render`, four drivers, Chase camera, 1440 × 900:

| | Measured | Budget |
|---|---|---|
| Draw calls | 55 | 90 |
| Triangles | 90,736 | 250,000 |

The count does not depend on the pixel ratio. `e2e/robustness.smoke.spec.js` holds it to the budget. Add
`?debug3d=1` to the address to log both every 5 s in the console (`[3D] 55 draw calls, 90736 triangles`);
without it nothing logs.

## Frame rate (T8.1)

Apple M3 Pro, Chrome (visible window, real GPU: ANGLE Metal), 1440 × 900 at device pixel ratio 2, four drivers,
10 s of playback at 0.25×:

| Camera | Frames per second |
|---|---|
| Overview | 120.2 |
| Chase | 120.0 |
| TV | 120.1 |

That is the display's refresh rate (ProMotion): the scene has headroom. **Not measured: a mid-range Android phone, an
M1/M2 MacBook.** No device was available. Phones are the case the adaptive quality tiers exist for; check
Overview and Chase there before relying on them (target: 30 fps or better).

The headless test browser renders with SwiftShader (software), so its frame rates say nothing about real
hardware and are not recorded.

## Allocation (T8.2)

Chrome's sampling heap profiler over 15 s of playback at 0.25× (four drivers, 1440 × 900), summed by source:

| Camera | Sampled total | `renderLoop.js` | `labels.js` |
|---|---|---|---|
| Overview | 949 kB | 85 kB | 42 kB |
| Chase | 1255 kB | 80 kB | 22 kB |
| TV | 1253 kB | 89 kB | 52 kB |

The scene's own share is about 8–12%, roughly 0.3 kB a frame for the loop and the transform strings of chips that
moved. The rest is React re-rendering the page every 80 ms (the clock, the readout, the tables) and three.js
internals. The frame builds no arrays or objects: the loop, car placement, camera rig and labels reuse their
scratch state (the last per-frame array, in `springStep`, was removed in this phase).

V8 garbage collections in 15 s of playback (Chase): 29 minor, 2 major. The 2D view, which re-renders the page every
frame, has 62 minor and 14 major over the same 15 s.

A visual check of a Chrome performance recording for a saw-tooth heap was not made; the numbers above are its
counterpart.

## Disposal (T8.3)

Every builder that owns something outside the scene graph returns `dispose()` (environment, track, cars, racing
lines), and the scene graph and renderer follow. The probe context used to ask whether WebGL works was never
released, so every scene build leaked one context; it is now asked once per page and released.
`e2e/robustness.smoke.spec.js` toggles 2D and 3D ten times: geometry and texture counts return to their first
values (±2), and only one WebGL context is left alive.
