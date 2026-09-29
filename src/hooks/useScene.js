import { useEffect, useRef, useMemo } from "react";
import { Vector3 } from "three";
import { getSmoothPathPointCount, smoothPath } from "../helpers.js";
import { createAdaptiveQualityController } from "../scene/adaptiveQuality.js";
import { buildCars, createCarState, sizeCarLabels } from "../scene/buildCars.js";
import { createDriverPath } from "../scene/carPose.js";
import { buildEnvironment } from "../scene/buildEnvironment.js";
import { buildTrack } from "../scene/buildTrack.js";
import {
  attachRendererResize,
  createSceneRenderer,
  formatSceneError,
  getSceneSupportError,
} from "../scene/createRenderer.js";
import { attachInputControls } from "../scene/inputControls.js";
import { startSceneRenderLoop } from "../scene/renderLoop.js";
import { createWorldFrame } from "../scene/world.js";

const EMPTY = {};

const SLOTS = 4;

/**
 * The 3D scene of a replay. `model` is the stage model (buildReplayModel, clock offsets applied).
 *
 * The scene is built again only when its geometry changes: the track, a driver's path or the circuit flip.
 * Theme, track colouring, driver colours and names and the camera update the live scene in place, so the
 * canvas, the WebGL context and the car model survive them.
 */
export default function useScene(
  ref,
  { model, progRef, playRef, speedRef, cam, vizMode, isDark, relief = 1, onError }
) {
  const R = useRef({});
  const drivers = Array.from({ length: SLOTS }, (_, index) => model.drivers[index] || EMPTY);
  const trackPath = model.trackPath;
  const circuitFlip = model.circuitFlip;
  // { duration, pathTimes[] } of the replay: the render loop places each car by its own timestamps.
  const timingRef = useRef(null);
  timingRef.current = { duration: model.duration, pathTimes: model.drivers.map((driver) => driver.pathTimes) };
  const CS = useRef({ angle: 0, pitch: 0.85, dist: 50, drag: false, lx: 0, ly: 0, cinT: 0 });
  const cmRef = useRef(cam);
  const camTargetPos = useRef(new Vector3(40, 30, 40));
  const camTargetLook = useRef(new Vector3(0, 0, 0));
  const smoothPointCount = useMemo(
    () => getSmoothPathPointCount(typeof window !== "undefined" ? window.innerWidth < 768 : false),
    []
  );
  // One world frame for the circuit (metres, real elevation): every driver's path goes through it, so the
  // same raw point is the same world point for everyone. The first driver's lap is the reference.
  const [raw1, raw2, raw3, raw4] = drivers.map((driver) => driver.path);
  const frame = useMemo(() => createWorldFrame(raw1, { flip: circuitFlip, relief }), [raw1, circuitFlip, relief]);
  const worldPath = (raw) => (raw ? smoothPath(raw.map(frame.toWorld), smoothPointCount) : null);
  // Rebuilt only when that driver's samples or the frame change.
  const n1 = useMemo(() => worldPath(raw1), [raw1, frame, smoothPointCount]); // eslint-disable-line react-hooks/exhaustive-deps
  const n2 = useMemo(() => worldPath(raw2), [raw2, frame, smoothPointCount]); // eslint-disable-line react-hooks/exhaustive-deps
  const n3 = useMemo(() => worldPath(raw3), [raw3, frame, smoothPointCount]); // eslint-disable-line react-hooks/exhaustive-deps
  const n4 = useMemo(() => worldPath(raw4), [raw4, frame, smoothPointCount]); // eslint-disable-line react-hooks/exhaustive-deps
  const telData1 = drivers[0].tel;
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);
  const brakeArr = useMemo(() => telData1?.map((t) => (t.brake > 0 ? 1 : 0)) || [], [telData1]);

  // What the scene reads when it is built; the in-place effects below keep the live scene in step with it.
  const style = drivers.map((driver) => ({ color: driver.color, label: driver.label || "" }));
  const styleKey = JSON.stringify(style);
  const liveRef = useRef({});
  liveRef.current = {
    isDark,
    vizMode,
    speedArr,
    brakeArr,
    frame,
    referenceTimes: drivers[0].pathTimes,
    style,
    slots: model.drivers.map((driver) => driver.slot),
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || !trackPath || trackPath.length < 10) {
      onError?.("");
      return;
    }

    const supportError = getSceneSupportError();
    if (supportError) {
      onError?.(supportError);
      return;
    }

    let rendererContext;
    let renderLoopCleanup = null;
    let resizeCleanup = null;
    let ren;
    let de;
    let scene;
    let camera;
    let devHook = null;
    let contextLost = false;
    let active = true;

    const clearRenderer = () => {
      if (R.current.fr) cancelAnimationFrame(R.current.fr);
      R.current.fr = null;
      renderLoopCleanup?.();
      renderLoopCleanup = null;
      resizeCleanup?.();
      resizeCleanup = null;
      if (devHook && window.__ghostcar3d === devHook) delete window.__ghostcar3d;
      devHook = null;
      rendererContext?.dispose();
      rendererContext = null;
      scene = null;
      ren = null;
      de = null;
      camera = null;
      R.current = {};
    };

    const fail = (error) => {
      clearRenderer();
      onError?.(formatSceneError(error));
    };

    try {
      const live = liveRef.current;
      rendererContext = createSceneRenderer({
        container: el,
        isDark: live.isDark,
        onContextLost: () => {
          contextLost = true;
          fail("Το WebGL context χάθηκε. Κάνε ανανέωση ή ενεργοποίησε hardware acceleration.");
        },
      });
      ({ scene, camera, renderer: ren, canvas: de } = rendererContext);
      const {
        isMob,
        isBandwidthSaving,
        isMemoryConstrained,
        isLowDetail,
        initialPixelRatio,
        theme: T,
      } = rendererContext;
      onError?.("");

      const environment = buildEnvironment({
        scene,
        renderer: ren,
        isDark: live.isDark,
        bounds: live.frame.bounds,
        groundY: live.frame.groundY,
      });

      const track = buildTrack({
        scene,
        reference: { points: drivers[0].path.map(live.frame.toWorld), times: live.referenceTimes },
        groundY: live.frame.groundY,
        speedArr: live.speedArr,
        brakeArr: live.brakeArr,
        vizMode: live.vizMode,
        theme: T,
        isMob,
      });

      const carSet = buildCars({
        scene,
        drivers: live.style.map((driver, index) => ({ ...driver, path: drivers[index].path })),
        isLowDetail,
        isDark: live.isDark,
        isMob,
        resolution: { width: el.clientWidth || 1, height: el.clientHeight || 1 },
        isActive: () => active,
        isContextLost: () => contextLost,
      });
      const { cars, tails } = carSet;
      sizeCarLabels(cars, el.clientHeight, camera.fov);

      // Everything the frame loop and the in-place effects touch.
      R.current = {
        scene,
        camera,
        ren,
        cars,
        tails,
        paths: [n1, n2, n3, n4],
        // Each driver's dense path with its distances, the road under them, and per-car frame state.
        driverPaths: [n1, n2, n3, n4].map((path) => (path?.length >= 2 ? createDriverPath(path) : null)),
        centreline: track.centreline,
        carStates: cars.map(() => createCarState()),
        curve: track.curve,
        world: live.frame.bounds,
        fr: null,
        _dirty: true,
        _rendered: false,
        _modelSettled: false,
        api: {
          setTheme(dark) {
            const next = rendererContext.applyTheme(dark);
            environment.applyTheme(dark);
            track.applyTheme(next);
            carSet.restyle(liveRef.current.style, dark);
          },
          setStyle(dark) {
            carSet.restyle(liveRef.current.style, dark);
          },
          setViz: track.setViz,
        },
      };
      carSet.settled.then(() => {
        if (!active) return;
        R.current._modelSettled = true;
        R.current._dirty = true;
      });

      const cs = CS.current;
      // Zoom limits and the opening distance follow the circuit's size; a rebuild for the same circuit keeps the zoom.
      const { diagonal } = live.frame.bounds;
      cs.minDist = 30;
      cs.maxDist = 3 * diagonal;
      if (cs.fitDiagonal !== diagonal) {
        cs.fitDiagonal = diagonal;
        cs.dist = diagonal;
      }
      const inputControls = attachInputControls({
        canvas: de,
        controls: cs,
        markDirty: () => {
          R.current._dirty = true;
        },
      });

      // Store progRef for render loop access
      R.current._progRef = progRef;
      R.current._timingRef = timingRef;
      R.current._playRef = playRef;
      R.current._speedRef = speedRef;

      // Test and capture hook, not present in production for real visitors.
      if (import.meta.env.DEV || navigator.webdriver) {
        const project = (slot) => {
          const car = cars[liveRef.current.slots.indexOf(slot)];
          if (!car) return null;
          const point = car.position.clone().project(camera);
          return { x: (point.x * 0.5 + 0.5) * el.clientWidth, y: (-point.y * 0.5 + 0.5) * el.clientHeight };
        };
        devHook = {
          get ready() {
            return !!(R.current._rendered && R.current._modelSettled);
          },
          camera,
          controls: cs,
          cars,
          info: () => ren?.info,
          project,
        };
        window.__ghostcar3d = devHook;
      }

      const adaptiveQuality = createAdaptiveQualityController({
        renderer: ren,
        container: el,
        getSceneState: () => R.current,
        initialPixelRatio,
        isMob,
        isMemoryConstrained,
        isBandwidthSaving,
        isContextLost: () => contextLost,
      });

      renderLoopCleanup = startSceneRenderLoop({
        sceneStateRef: R,
        renderer: ren,
        scene,
        camera,
        trackPath,
        cameraModeRef: cmRef,
        controls: cs,
        inputControls,
        targetPosition: camTargetPos.current,
        targetLook: camTargetLook.current,
        adaptiveQuality,
        isMob,
        isContextLost: () => contextLost,
        onRenderError: (error) => {
          contextLost = true;
          fail(error);
        },
      });

      resizeCleanup = attachRendererResize({
        container: el,
        camera,
        renderer: ren,
        isContextLost: () => contextLost,
        onResize: () => {
          sizeCarLabels(cars, el.clientHeight, camera.fov);
          carSet.setResolution(el.clientWidth, el.clientHeight);
          R.current._dirty = true;
        },
      });
      return () => {
        active = false;
        renderLoopCleanup?.();
        renderLoopCleanup = null;
        resizeCleanup?.();
        resizeCleanup = null;
        inputControls.cleanup();
        clearRenderer();
      };
    } catch (error) {
      fail(error);
      return;
    }
    // The scene's geometry: rebuilt only when one of these changes. Everything else is live (effects below).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, trackPath, raw1, raw2, raw3, raw4, n1, n2, n3, n4, onError, progRef, playRef, speedRef]);

  // ─── In place: no rebuild, same canvas and context ───
  useEffect(() => {
    R.current.api?.setTheme(isDark);
    R.current._dirty = true;
  }, [isDark]);
  useEffect(() => {
    R.current.api?.setStyle(liveRef.current.isDark);
    R.current._dirty = true;
  }, [styleKey]);
  useEffect(() => {
    R.current.api?.setViz(vizMode, { speedArr, brakeArr });
    R.current._dirty = true;
  }, [vizMode, speedArr, brakeArr]);
  useEffect(() => {
    cmRef.current = cam;
    R.current._dirty = true;
  }, [cam]);
  useEffect(() => {
    R.current._speedRef = speedRef;
    R.current._dirty = true;
  }, [speedRef]);
}
