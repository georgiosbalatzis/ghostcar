import { Suspense, lazy } from "react";
import { CAM_LABELS, CAM_MODES } from "../../constants.js";
import Icon from "../../components/ui/Icon.jsx";
import Menu from "../../components/ui/Menu.jsx";
import DriverLegend from "./DriverLegend.jsx";
import TrackMap from "./TrackMap.jsx";
import "./replay.css";

const SceneStage3D = lazy(() => import("./SceneStage3D.jsx"));

const VIZ_LABELS = { normal: "Χωρίς χρωματισμό", heatmap: "Ταχύτητα", brake: "Φρενάρισμα" };

function ViewControls({ trackView, onTrackView, cam, onCam, vizMode, onVizMode }) {
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
              items: CAM_MODES.map((mode) => ({
                label: CAM_LABELS[mode],
                checked: cam === mode,
                onSelect: () => onCam(mode),
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
          ]}
        />
      )}
    </div>
  );
}

export default function ReplayStage({
  model,
  stageRef,
  prog,
  progRef,
  playRef,
  speedRef,
  trackView,
  onTrackView,
  cam,
  onCam,
  vizMode,
  onVizMode,
  isDark,
  onSceneError,
  touch,
  loading,
  loadProgress,
  canCancelLoad,
  onCancelLoad,
  embed = false,
}) {
  const is2D = trackView === "2d";
  return (
    <section className="stage" aria-label="Αναπαράσταση γύρου">
      <div className="stage__head">
        <DriverLegend drivers={model.drivers} delta={model.delta} />
        {!embed && (
          <ViewControls
            trackView={trackView}
            onTrackView={onTrackView}
            cam={cam}
            onCam={onCam}
            vizMode={vizMode}
            onVizMode={onVizMode}
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
            <TrackMap trackPath={model.trackPath} drivers={model.drivers} prog={prog} flip={model.circuitFlip} />
          ) : (
            <Suspense fallback={null}>
              <SceneStage3D
                containerRef={stageRef}
                model={model}
                progRef={progRef}
                playRef={playRef}
                speedRef={speedRef}
                cam={cam}
                vizMode={vizMode}
                isDark={isDark}
                onError={onSceneError}
              />
            </Suspense>
          )}
        </div>
        {loading && (
          <div className="stage__loading" role="status">
            <div className="progress">
              <div className="progress__bar" style={{ transform: `scaleX(${(loadProgress || 0) / 100})` }} />
            </div>
            <div className="stage__loading-text">
              <span className="spinner" aria-hidden="true" />
              {loading}
              {canCancelLoad && (
                <button type="button" className="btn btn--link" onClick={onCancelLoad}>
                  Ακύρωση
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
