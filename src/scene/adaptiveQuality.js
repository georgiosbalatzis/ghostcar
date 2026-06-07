export function createAdaptiveQualityController({
  renderer,
  container,
  getSceneState,
  initialPixelRatio,
  isMob,
  isMemoryConstrained,
  isBandwidthSaving,
  isContextLost,
}) {
  const basePixelRatio = initialPixelRatio;
  const canReduceResolution = isMob || isMemoryConstrained || isBandwidthSaving;
  const minimumAdaptivePixelRatio = Math.min(basePixelRatio, isMob ? 1.25 : 1.5);
  const fpsWindow = new Float32Array(60);
  let fpsWIdx = 0;
  let fpsWFull = false;
  let lastFpsCheck = 0;
  let qualityTier = 0;
  let recoveryCount = 0;

  function applyQualityTier(tier) {
    const pixelRatio =
      tier === 0
        ? basePixelRatio
        : tier === 1
          ? Math.max(minimumAdaptivePixelRatio, basePixelRatio - 0.2)
          : Math.max(minimumAdaptivePixelRatio, basePixelRatio - 0.45);
    renderer.setPixelRatio(pixelRatio);
    if (container && !isContextLost() && container.clientWidth && container.clientHeight) {
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    const sceneState = getSceneState();
    sceneState._starFrozen = tier >= 2;
    sceneState._dirty = true;
  }

  function check(now) {
    if (!canReduceResolution) return;
    if (now - lastFpsCheck < 2000) return;
    lastFpsCheck = now;
    const samples = fpsWFull ? 60 : fpsWIdx;
    if (samples < 20) return;
    let sum = 0;
    for (let i = 0; i < samples; i++) sum += fpsWindow[i];
    const avgFps = 1000 / (sum / samples);
    fpsWIdx = 0;
    fpsWFull = false;
    if (avgFps < 28 && qualityTier < 2) {
      qualityTier = 2;
      applyQualityTier(2);
      recoveryCount = 0;
    } else if (avgFps < 42 && qualityTier < 1) {
      qualityTier = 1;
      applyQualityTier(1);
      recoveryCount = 0;
    } else if (avgFps >= 55 && qualityTier > 0) {
      if (++recoveryCount >= 3) {
        qualityTier = Math.max(0, qualityTier - 1);
        applyQualityTier(qualityTier);
        recoveryCount = 0;
      }
    } else {
      recoveryCount = 0;
    }
  }

  function recordFrame({ now, previousFrameTime, isSceneVisible }) {
    if (previousFrameTime > 0 && isSceneVisible) {
      const frameMs = now - previousFrameTime;
      if (frameMs > 0 && frameMs < 200) {
        fpsWindow[fpsWIdx++] = frameMs;
        if (fpsWIdx >= 60) {
          fpsWIdx = 0;
          fpsWFull = true;
        }
      }
      check(now);
    }
  }

  return { recordFrame };
}
