import { Suspense, lazy, useState } from "react";
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

const VIZ_LABELS = { normal: "Χωρίς χρωματισμό", heatmap: "Ταχύτητα", brake: "Φρενάρισμα" };

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
  relief,
  onRelief,
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
              items: Object.entries(VIZ_LABELS).map(([mode, label]) => ({
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
  const is2D = trackView === "2d";
  const showDominance = is2D && dominance.length > 0;
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
            relief={relief}
            onRelief={setRelief}
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
            <Suspense fallback={null}>
              <SceneStage3D
                containerRef={stageRef}
                model={model}
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
