import { fractionAtTime } from "../domain/timing.js";
import { placeCars } from "./buildCars.js";

export function startSceneRenderLoop({
  sceneStateRef,
  renderer,
  scene,
  camera,
  cameraModeRef,
  focusRef,
  rig,
  adaptiveQuality,
  isMob,
  isContextLost,
  onRenderError,
}) {
  const ACTIVE_MS = 0; // Let active playback run at the display refresh rate.
  const IDLE_MS = isMob ? 100 : 66;
  const HIDDEN_MS = 220;
  let lastFrameTime = 0;
  let lastProg = -1;
  let lastCamMode = cameraModeRef.current;
  let lastPlayState = false;
  let lastSceneVisible = false;
  let hasRendered = false;
  let lastSimTime = 0;
  let cancelled = false;
  // The frame is allocation-free: these are filled in place every frame instead of building new arrays and objects.
  const carProgress = [0, 0, 0, 0];
  const carFrame = { sceneState: null, fractions: carProgress, time: 0, pathTimes: null, showTails: false };
  const rigFrame = { dt: 0, cam: "", focus: 0, carStates: null, driverPaths: null, fractions: carProgress };
  const labelFrame = { hiddenIndex: -1, width: 0, height: 0 };
  const noTimes = [];

  function animate(now = performance.now()) {
    if (cancelled || isContextLost()) return;
    const sceneState = sceneStateRef.current;
    sceneState.fr = requestAnimationFrame(animate);
    const isSceneVisible = !document.hidden;
    const isPlaying = !!sceneState._playRef?.current;
    const isActive = !!(isPlaying || rig.isActive());
    const targetFrameMs = !isSceneVisible ? HIDDEN_MS : isActive ? ACTIVE_MS : IDLE_MS;
    if (targetFrameMs > 0 && now - lastFrameTime < targetFrameMs) return;
    const prevFrameTime = lastFrameTime;
    lastFrameTime = now;
    adaptiveQuality.recordFrame(now, prevFrameTime, isSceneVisible);
    if (!isSceneVisible) {
      lastSceneVisible = false;
      lastSimTime = 0;
      return;
    }

    const dt = lastSimTime ? Math.min((now - lastSimTime) / 1000, 0.05) : 1 / 60;
    lastSimTime = now;
    const prog = sceneState._progRef?.current ?? 0;
    const progChanged = prog !== lastProg;
    if (progChanged) lastProg = prog;
    // prog is the shared clock (share of the slowest lap); each car's position comes from its own timestamps.
    const timing = sceneState._timingRef?.current;
    const clock = prog * (timing?.duration || 0);
    const pathTimes = timing?.pathTimes || noTimes;
    for (let slot = 0; slot < 4; slot++) {
      carProgress[slot] = pathTimes[slot]?.length ? fractionAtTime(pathTimes[slot], clock) : prog;
    }
    const cameraMode = cameraModeRef.current;
    let needsRender =
      !hasRendered ||
      !!sceneState._dirty ||
      progChanged ||
      cameraMode !== lastCamMode ||
      isPlaying !== lastPlayState ||
      !lastSceneVisible;
    lastCamMode = cameraMode;
    lastPlayState = isPlaying;
    lastSceneVisible = true;
    if (isPlaying) needsRender = true;

    carFrame.sceneState = sceneState;
    carFrame.time = clock;
    carFrame.pathTimes = pathTimes;
    carFrame.showTails = isPlaying && cameraMode !== "top" && (sceneState.quality ?? 0) < 2;
    needsRender = placeCars(carFrame) || needsRender;

    rigFrame.dt = dt;
    rigFrame.cam = cameraMode;
    rigFrame.focus = focusRef.current;
    rigFrame.carStates = sceneState.carStates;
    rigFrame.driverPaths = sceneState.driverPaths;
    needsRender = rig.update(rigFrame) || needsRender;
    if (!needsRender) return;
    try {
      // The name chips are DOM: put them where the cars are in this very frame.
      if (sceneState.labels) {
        labelFrame.hiddenIndex = rig.hiddenLabelIndex();
        labelFrame.width = renderer.domElement.clientWidth;
        labelFrame.height = renderer.domElement.clientHeight;
        sceneState.labels.update(labelFrame);
      }
      renderer.render(scene, camera);
      hasRendered = true;
      if (!sceneState._rendered) {
        sceneState._rendered = true;
        sceneState.onFirstFrame?.();
      }
      sceneState._dirty = false;
    } catch (error) {
      onRenderError(error);
    }
  }

  animate();

  return () => {
    cancelled = true;
    const sceneState = sceneStateRef.current;
    if (sceneState.fr) cancelAnimationFrame(sceneState.fr);
    sceneState.fr = null;
  };
}
