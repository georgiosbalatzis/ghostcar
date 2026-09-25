import useScene from "../../hooks/useScene.js";

const EMPTY = {};

// Adapter from the replay model to the positional useScene API (the scene engine is unchanged).
export default function SceneStage3D({
  containerRef,
  model,
  progRef,
  playRef,
  speedRef,
  cam,
  vizMode,
  isDark,
  onError,
}) {
  const [d1 = EMPTY, d2 = EMPTY, d3 = EMPTY, d4 = EMPTY] = model.drivers;
  useScene(
    containerRef,
    model.trackPath,
    d1.path,
    d2.path,
    progRef,
    playRef,
    speedRef,
    d1.color,
    d2.color,
    cam,
    d1.label || "",
    d2.label || "",
    d1.tel,
    vizMode,
    isDark,
    d3.path || null,
    d4.path || null,
    d3.color,
    d4.color,
    d3.label || "",
    d4.label || "",
    onError,
    model.circuitFlip
  );
  return null;
}
