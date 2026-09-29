import { Suspense, lazy, useEffect, useState } from "react";
import { CAM_LABELS } from "../../constants.js";
import { camFor, parseCam } from "../../scene/cameraModes.js";
import Icon from "../../components/ui/Icon.jsx";
import Menu from "../../components/ui/Menu.jsx";
import DriverLegend from "./DriverLegend.jsx";
import TrackMap from "./TrackMap.jsx";
import "./replay.css";

const SceneStage3D = lazy(() => import("./SceneStage3D.jsx"));

// Elevation exaggeration for the 3D view: a viewer's choice, kept in this browser (not in share links).
const RELIEF_KEY = "f1s-3d-relief";
function useRelief() {
  const [relief, setRelief] = useState(() => {
    try {
      return localStorage.getItem(RELIEF_KEY) === "3" ? 3 : 1;
    } catch {
      return 1;
    }
  });
  const choose = (value) => {
    setRelief(value);
    try {
      localStorage.setItem(RELIEF_KEY, String(value));
    } catch {}
  };
  return [relief, choose];
}

// Full screen for the player (stage and transport), where the browser allows it (not on an iPhone).
function useFullscreen() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const sync = () => setActive(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);
  const toggle = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.getElementById("replay-player")?.requestFullscreen?.();
  };
  return { supported: !!document.fullscreenEnabled, active, toggle };
}

// The racing lines of each driver's samples: a viewer's choice, kept in this browser (not in share links).
const LINES_KEY = "f1s-3d-lines";
function useLines() {
  const [lines, setLines] = useState(() => {
    try {
      return localStorage.getItem(LINES_KEY) === "1";
    } catch {
      return false;
    }
  });
  const choose = (value) => {
    setLines(value);
    try {
      localStorage.setItem(LINES_KEY, value ? "1" : "0");
    } catch {}
  };
  return [lines, choose];
}

// With no trusted gap there is nothing to colour by, and the track stays plain.
const vizLabels = (reliable) => ({
  normal: reliable ? "Κυριαρχία πίστας" : "Χωρίς χρωματισμό",
  heatmap: "Ταχύτητα",
  brake: "Φρενάρισμα",
});

function FullscreenButton() {
  const { supported, active, toggle } = useFullscreen();
  if (!supported) return null;
  const label = active ? "Έξοδος από πλήρη οθόνη" : "Πλήρης οθόνη";
  return (
    <button type="button" className="icon-btn" aria-label={label} title={label} onClick={toggle}>
      <Icon name={active ? "collapse" : "expand"} size={18} />
    </button>
  );
}

function ViewControls({
  trackView,
  onTrackView,
  cam,
  onCam,
  drivers,
  focus,
  onFocus,
  vizMode,
  onVizMode,
  reliable,
  relief,
  onRelief,
  lines,
  onLines,
}) {
  const { family, slot } = parseCam(cam);
  // The driver behind Ακολούθηση, Onboard and Τηλεοπτική: the one in the camera's name, else the chosen one.
  const driverSlot = slot ?? focus ?? (family === "tv" ? null : 1);
  return (
    <div className="stage__tools">
      <div className="segmented" role="group" aria-label="Προβολή">
        {["2d", "3d"].map((mode) => (
          <button key={mode} type="button" aria-pressed={trackView === mode} onClick={() => onTrackView(mode)}>
            {mode.toUpperCase()}
          </button>
        ))}
      </div>
      <FullscreenButton />
      {trackView === "3d" && (
        <Menu
          label="Επιλογές προβολής"
          trigger={<Icon name="layers" size={18} />}
          groups={[
            {
              label: "Κάμερα",
              items: Object.keys(CAM_LABELS).map((name) => ({
                label: CAM_LABELS[name],
                checked: family === name,
                onSelect: () => onCam(camFor(name, driverSlot ?? 1)),
              })),
            },
            {
              label: "Οδηγός κάμερας",
              items: drivers.map((driver) => ({
                label: driver.label,
                checked: driverSlot === driver.slot,
                onSelect: () => onFocus(driver.slot),
              })),
            },
            {
              label: "Χρωματισμός πίστας",
              items: Object.entries(vizLabels(reliable)).map(([mode, label]) => ({
                label,
                checked: vizMode === mode,
                onSelect: () => onVizMode(mode),
              })),
            },
            {
              label: "Εμφάνιση",
              items: [
                {
                  label: "Ανάγλυφο ×3",
                  checkbox: true,
                  checked: relief === 3,
                  onSelect: () => onRelief(relief === 3 ? 1 : 3),
                },
                {
                  label: "Γραμμές οδηγών",
                  checkbox: true,
                  checked: lines,
                  onSelect: () => onLines(!lines),
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}

export default function ReplayStage({
  model,
  trace,
  stageRef,
  time,
  progRef,
  playRef,
  speedRef,
  trackView,
  onTrackView,
  cam,
  onCam,
  focus,
  onFocus,
  fitSignal,
  vizMode,
  onVizMode,
  isDark,
  onSceneError,
  touch,
  dominance = [],
  embed = false,
}) {
  const [relief, setRelief] = useRelief();
  const [lines, setLines] = useLines();
  const is2D = trackView === "2d";
  // Who is faster where shows on the 2D map always, and in 3D while the track is not coloured by something else.
  const showDominance = dominance.length > 0 && (is2D || vizMode === "normal");
  return (
    <section className={embed ? "stage" : "stage stage-panel"} aria-label="Αναπαράσταση γύρου">
      <div className="stage__head">
        {/* Embeds have no page around them, so the result and drivers travel with the stage. */}
        {embed ? (
          <DriverLegend drivers={model.drivers} delta={model.delta} />
        ) : (
          <p className="kicker stage__legend">
            <span>{showDominance ? "Κυριαρχία πίστας" : "Πίστα"}</span>
            {showDominance &&
              model.drivers.map((driver) => (
                <span key={driver.slot} style={{ "--c": driver.color }}>
                  <span className="swatch" aria-hidden="true" />
                  {driver.label}
                  <span className="stage__legend-long"> ταχύτερος</span>
                </span>
              ))}
          </p>
        )}
        {!embed && (
          <ViewControls
            trackView={trackView}
            onTrackView={onTrackView}
            cam={cam}
            onCam={onCam}
            drivers={model.drivers}
            focus={focus}
            onFocus={onFocus}
            vizMode={vizMode}
            onVizMode={onVizMode}
            reliable={!!trace?.reliable}
            relief={relief}
            onRelief={setRelief}
            lines={lines}
            onLines={setLines}
          />
        )}
      </div>
      <div className="stage__body">
        <div
          ref={stageRef}
          className={`stage__canvas ${is2D ? "stage__canvas--2d" : "stage__canvas--3d"}`}
          onTouchStart={touch?.onStart}
          onTouchEnd={touch?.onEnd}
          onTouchCancel={touch?.onCancel}
        >
          {is2D ? (
            <TrackMap
              trackPath={model.trackPath}
              drivers={model.drivers}
              time={time}
              flip={model.circuitFlip}
              dominance={dominance}
            />
          ) : (
            <Suspense fallback={<p className="scene-loading">Φόρτωση 3D…</p>}>
              <SceneStage3D
                containerRef={stageRef}
                model={model}
                trace={trace}
                time={time}
                progRef={progRef}
                playRef={playRef}
                speedRef={speedRef}
                cam={cam}
                focus={focus}
                fitSignal={fitSignal}
                onPickDriver={onFocus}
                vizMode={vizMode}
                isDark={isDark}
                relief={relief}
                lines={lines}
                dominance={dominance}
                onError={onSceneError}
              />
            </Suspense>
          )}
        </div>
        {showDominance && !embed && (
          <p className="stage__caption">Το χρώμα δείχνει ποιος κερδίζει χρόνο σε κάθε σημείο της πίστας.</p>
        )}
      </div>
    </section>
  );
}
