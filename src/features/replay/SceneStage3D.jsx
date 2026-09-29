import { useCallback, useEffect, useRef, useState } from "react";
import useScene from "../../hooks/useScene.js";

const HINTS = { wheel: "Ctrl/⌘ + κύλιση για ζουμ", touch: "Δύο δάχτυλα για την κάμερα" };

// Adapter from the replay model to the scene engine, and the small hint the camera controls can raise.
export default function SceneStage3D({
  containerRef,
  model,
  progRef,
  playRef,
  speedRef,
  cam,
  focus,
  fitSignal,
  onPickDriver,
  vizMode,
  isDark,
  relief,
  onError,
}) {
  const [hint, setHint] = useState("");
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  const showHint = useCallback((kind) => {
    setHint(HINTS[kind] || "");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHint(""), 1200);
  }, []);
  useScene(containerRef, {
    model,
    progRef,
    playRef,
    speedRef,
    cam,
    focus,
    fitSignal,
    vizMode,
    isDark,
    relief,
    onError,
    onHint: showHint,
    onPickDriver,
  });
  return hint ? (
    <p className="scene-hint" role="status">
      {hint}
    </p>
  ) : null;
}
