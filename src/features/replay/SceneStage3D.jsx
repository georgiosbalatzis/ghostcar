import { useCallback, useEffect, useRef, useState } from "react";
import { CAM_LABELS } from "../../constants.js";
import useScene from "../../hooks/useScene.js";
import { parseCam } from "../../scene/cameraModes.js";
import SceneHud from "./SceneHud.jsx";
import TrackMap from "./TrackMap.jsx";

const HINTS = { wheel: "Ctrl/⌘ + κύλιση για ζουμ", touch: "Δύο δάχτυλα για την κάμερα" };
const MINIMAP_MIN_WIDTH = 480;

// The 3D view's DOM around the canvas: name chips (moved every frame by the render loop), the hint the camera
// controls can raise, and, when the camera is on a driver, the readout and the minimap.
export default function SceneStage3D({
  containerRef,
  model,
  trace,
  time,
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
  const [ready, setReady] = useState(false);
  const [hudSlot, setHudSlot] = useState(0);
  const [wide, setWide] = useState(true);
  const labelsRef = useRef(null);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  const showHint = useCallback((kind) => {
    setHint(HINTS[kind] || "");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHint(""), 1200);
  }, []);
  // A small stage has no room for a minimap.
  useEffect(() => {
    const stage = containerRef.current;
    if (!stage || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(() => setWide(stage.clientWidth >= MINIMAP_MIN_WIDTH));
    observer.observe(stage);
    return () => observer.disconnect();
  }, [containerRef]);

  const { family, slot } = parseCam(cam);
  const camLabel = slot ? `${CAM_LABELS[family]} ${model.drivers[slot - 1]?.label || ""}`.trim() : CAM_LABELS[family];
  const ariaLabel = [
    "Τρισδιάστατη αναπαράσταση:",
    `${model.meetingName} ${model.sessionLabel},`.trim(),
    `${model.drivers.map((driver) => driver.label).join(" – ")},`,
    `κάμερα ${camLabel}`,
  ].join(" ");

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
    onFocusSlot: setHudSlot,
    onReady: () => setReady(true),
    labelsRef,
    ariaLabel,
  });

  const onDriver = family === "follow" || family === "onboard" || family === "tv";
  const hudDriver = onDriver ? model.drivers[hudSlot - 1] : null;
  return (
    <>
      <div className="scene-labels" ref={labelsRef} aria-hidden="true">
        {model.drivers.map((driver, index) => (
          <div key={driver.slot} className="car scene-label" data-index={index} style={{ "--c": driver.color }}>
            <span className="scene-label__leader" />
            <span className="scene-label__arrow" />
            <span className="car__label">{driver.label}</span>
          </div>
        ))}
      </div>
      {!ready && (
        <p className="scene-loading" role="status">
          Φόρτωση 3D…
        </p>
      )}
      {hint && (
        <p className="scene-hint" role="status">
          {hint}
        </p>
      )}
      {hudDriver && <SceneHud driver={hudDriver} drivers={model.drivers} trace={trace} time={time} />}
      {onDriver && wide && (
        <div className="scene-minimap" aria-hidden="true">
          <TrackMap trackPath={model.trackPath} drivers={model.drivers} time={time} flip={model.circuitFlip} />
        </div>
      )}
    </>
  );
}
