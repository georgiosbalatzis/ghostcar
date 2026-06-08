import { useEffect, useRef, useMemo } from "react";
import { Vector3 } from "three";
import { getSmoothPathPointCount, norm, smoothPath } from "../helpers.js";
import { createAdaptiveQualityController } from "../scene/adaptiveQuality.js";
import { buildCars } from "../scene/buildCars.js";
import { buildEnvironment } from "../scene/buildEnvironment.js";
import { buildRaceOverlays } from "../scene/buildRaceOverlays.js";
import { buildTrack } from "../scene/buildTrack.js";
import {
  attachRendererResize,
  createSceneRenderer,
  formatSceneError,
  getSceneSupportError,
} from "../scene/createRenderer.js";
import { attachInputControls } from "../scene/inputControls.js";
import { startSceneRenderLoop } from "../scene/renderLoop.js";

function createShakeNoiseTable(size = 256) {
  const table = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    const t = (i / size) * Math.PI * 2;
    table[i] = Math.sin(t) * 0.58 + Math.sin(t * 2.13 + 0.7) * 0.27 + Math.sin(t * 5.17 + 1.9) * 0.15;
  }
  return table;
}

export default function useScene(
  ref,
  tp,
  l1,
  l2,
  progRef,
  playRef,
  speedRef,
  c1,
  c2,
  cam,
  lab1,
  lab2,
  telData1,
  vizMode,
  isDark,
  l3,
  l4,
  c3,
  c4,
  lab3,
  lab4,
  onError,
  circuitFlip = false,
  circuitTurns = 20,
  enabled = true,
  visible = true
) {
  const R = useRef({});
  const CS = useRef({ angle: 0, pitch: 0.6, dist: 55, drag: false, lx: 0, ly: 0, cinT: 0 });
  const cmRef = useRef(cam);
  const visibleRef = useRef(visible);
  const camTargetPos = useRef(new Vector3(40, 30, 40));
  const camTargetLook = useRef(new Vector3(0, 0, 0));
  const smoothPointCount = useMemo(
    () => getSmoothPathPointCount(typeof window !== "undefined" ? window.innerWidth < 768 : false),
    []
  );
  const shakeNoise = useMemo(() => createShakeNoiseTable(), []);
  const n1 = useMemo(
    () => (l1 ? smoothPath(norm(l1, circuitFlip), smoothPointCount) : null),
    [l1, circuitFlip, smoothPointCount]
  );
  const n2 = useMemo(
    () => (l2 ? smoothPath(norm(l2, circuitFlip), smoothPointCount) : null),
    [l2, circuitFlip, smoothPointCount]
  );
  const n3 = useMemo(
    () => (l3 ? smoothPath(norm(l3, circuitFlip), smoothPointCount) : null),
    [l3, circuitFlip, smoothPointCount]
  );
  const n4 = useMemo(
    () => (l4 ? smoothPath(norm(l4, circuitFlip), smoothPointCount) : null),
    [l4, circuitFlip, smoothPointCount]
  );
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);
  const brakeArr = useMemo(() => telData1?.map((t) => (t.brake > 0 ? 1 : 0)) || [], [telData1]);

  useEffect(() => {
    const el = ref.current;
    if (!enabled) {
      onError?.("");
      return;
    }
    if (!el || !tp || tp.length < 10) {
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
    let contextLost = false;
    let active = true;

    const clearRenderer = () => {
      if (R.current.fr) cancelAnimationFrame(R.current.fr);
      R.current.fr = null;
      renderLoopCleanup?.();
      renderLoopCleanup = null;
      resizeCleanup?.();
      resizeCleanup = null;
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
      rendererContext = createSceneRenderer({
        container: el,
        isDark,
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

      const { starMaterial } = buildEnvironment({
        scene,
        isDark,
        theme: T,
        isMob,
        isLowDetail,
      });

      const { curve, seg, sectorMarkers } = buildTrack({
        scene,
        tp,
        speedArr,
        brakeArr,
        vizMode,
        isDark,
        theme: T,
        isLowDetail,
        circuitTurns,
      });

      const { car1, car2, car3, car4, tr1, tr2, tr3, tr4 } = buildCars({
        scene,
        isLowDetail,
        isMob,
        l3,
        l4,
        c1,
        c2,
        c3,
        c4,
        lab1,
        lab2,
        lab3,
        lab4,
        isActive: () => active,
        isContextLost: () => contextLost,
      });

      const { spot1, spot2, deltaLine, deltaPos } = buildRaceOverlays({ scene, curve, seg, isLowDetail });

      R.current = {
        scene,
        camera,
        ren,
        car1,
        car2,
        car3,
        car4,
        tr1,
        tr2,
        tr3,
        tr4,
        n1,
        n2,
        n3,
        n4,
        curve,
        spot1,
        spot2,
        deltaLine,
        deltaPos,
        sectorMarkers,
        fr: null,
        _dirty: true,
        _starMat: starMaterial,
      };

      const cs = CS.current;
      const inputControls = attachInputControls({
        canvas: de,
        controls: cs,
        markDirty: () => {
          R.current._dirty = true;
        },
      });

      // Store progRef for render loop access
      R.current._progRef = progRef;
      R.current._playRef = playRef;
      R.current._speedRef = speedRef;
      R.current._telData1 = telData1;

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
        trackPath: tp,
        cameraModeRef: cmRef,
        visibleRef,
        controls: cs,
        inputControls,
        targetPosition: camTargetPos.current,
        targetLook: camTargetLook.current,
        shakeNoise,
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
  }, [
    ref,
    tp,
    c1,
    c2,
    lab1,
    lab2,
    vizMode,
    speedArr,
    brakeArr,
    isDark,
    l3,
    l4,
    c3,
    c4,
    lab3,
    lab4,
    onError,
    circuitTurns,
    enabled,
    n1,
    n2,
    n3,
    n4,
    progRef,
    playRef,
    speedRef,
    telData1,
    shakeNoise,
  ]);

  useEffect(() => {
    R.current.n1 = n1;
    R.current._dirty = true;
  }, [n1]);
  useEffect(() => {
    R.current.n2 = n2;
    R.current._dirty = true;
  }, [n2]);
  useEffect(() => {
    R.current.n3 = n3;
    R.current._dirty = true;
  }, [n3]);
  useEffect(() => {
    R.current.n4 = n4;
    R.current._dirty = true;
  }, [n4]);
  useEffect(() => {
    cmRef.current = cam;
    R.current._dirty = true;
  }, [cam]);
  useEffect(() => {
    visibleRef.current = visible;
    R.current._dirty = true;
  }, [visible]);
  useEffect(() => {
    R.current._speedRef = speedRef;
    R.current._dirty = true;
  }, [speedRef]);
  useEffect(() => {
    R.current._telData1 = telData1;
    R.current._dirty = true;
  }, [telData1]);
}
