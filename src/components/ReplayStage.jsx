import { Suspense, lazy } from "react";
import { CAM_LABELS, CAM_MODES } from "../constants.js";
import { fmt } from "../helpers.js";
import { controlButtonStyle, panelSurfaceStyle, segmentedButtonStyle, uiType } from "../ui/styles.js";
import MiniMap from "./MiniMap.jsx";
import SectorDelta from "./SectorDelta.jsx";
import TrackReplay2D from "./TrackReplay2D.jsx";

const SceneStage3D = lazy(() => import("./SceneStage3D.jsx"));
const TRACK_VIEW_MODES = ["3d", "2d"];

function TrackViewButtons({ F1, compact = false, trackView, onTrackViewMode }) {
  return TRACK_VIEW_MODES.map((mode) => (
    <button
      key={mode}
      onClick={() => onTrackViewMode(mode)}
      style={segmentedButtonStyle(F1, { active: trackView === mode, compact })}
    >
      {mode.toUpperCase()}
    </button>
  ));
}

function DriverTelemetryCard({ F1, driver, progress, fallback = false }) {
  return (
    <div
      style={{
        minWidth: 0,
        ...panelSurfaceStyle(F1, {
          background: F1.cardBg,
          borderColor: `${driver.color}33`,
          borderRadius: fallback ? 10 : 12,
          padding: "10px 12px",
        }),
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: driver.color, letterSpacing: "0.08em" }}>
          {driver.label}
        </div>
        <div style={{ fontSize: 10, color: F1.textMuted }}>{Math.round(progress * 100)}%</div>
      </div>
      <div style={{ fontSize: 14, fontFamily: F1.mono, color: F1.text, fontWeight: 700, marginTop: 4 }}>
        {fmt((driver.lapDuration || 0) * progress)}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 10, color: F1.textDim, flexWrap: "wrap" }}>
        <span>{Math.round(driver.current?.speed || 0)} km/h</span>
        <span>ΓΚΑΖΙ {Math.round(driver.current?.throttle || 0)}%</span>
        <span>{driver.current?.brake > 0 ? "ΦΡΕΝΟ" : "ΡΟΛΑΡΙΣΜΑ"}</span>
        {driver.tire && <span>{driver.tire}</span>}
      </div>
    </div>
  );
}

function TwoDLapDelta({ F1, delta, driver1, driver2, color1, color2, lap1, lap2 }) {
  if (delta === null) return null;

  return (
    <div
      style={{
        minWidth: 0,
        ...panelSurfaceStyle(F1, {
          background: F1.cardBg,
          borderColor: `${F1.blue}33`,
          borderRadius: 12,
          padding: "12px 14px",
        }),
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 900, color: F1.textMuted, letterSpacing: "0.08em", marginBottom: 6 }}>
        ΔΙΑΦΟΡΑ ΓΥΡΟΥ
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          fontFamily: F1.mono,
          color: delta > 0 ? F1.red : F1.green,
          lineHeight: 1.05,
        }}
      >
        {delta > 0 ? "+" : ""}
        {delta.toFixed(3)}s
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8, fontSize: 10, color: F1.textDim }}>
        <span style={{ color: color1 }}>
          {driver1?.name_acronym} {fmt(lap1?.lap_duration)}
        </span>
        <span style={{ color: color2 }}>
          {driver2?.name_acronym} {fmt(lap2?.lap_duration)}
        </span>
      </div>
    </div>
  );
}

function TwoDReplayView({
  mob,
  F1,
  tp,
  replayDrivers,
  replayDriverCards,
  progress,
  circuitFlip,
  delta,
  driver1,
  driver2,
  color1,
  color2,
  lap1,
  lap2,
  trackView,
  onTrackViewMode,
  onReplayTouchStart,
  onReplayTouchEnd,
  onReplayTouchCancel,
  canTouchScrubReplay,
}) {
  return (
    <div
      style={{
        width: "min(1080px, 100%)",
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : "minmax(0, 1fr) 304px",
        gap: mob ? 14 : 18,
        alignItems: "start",
        animation: "fadeIn .25s",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", color: F1.blue, marginBottom: 4 }}>
              ΕΛΑΦΡΙΑ ΠΡΟΒΟΛΗ 2D
            </div>
            <div style={{ fontSize: 12, color: F1.textDim, lineHeight: 1.6 }}>
              SVG replay με ζωντανά σημεία προόδου. Το WebGL μένει κλειστό σε αυτή τη λειτουργία για παλαιότερες GPU,
              ενσωματωμένα γραφικά και συσκευές σε εξοικονόμηση μπαταρίας.
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <TrackViewButtons F1={F1} trackView={trackView} onTrackViewMode={onTrackViewMode} />
          </div>
        </div>
        <div
          onTouchStart={(event) => onReplayTouchStart(event, canTouchScrubReplay)}
          onTouchEnd={onReplayTouchEnd}
          onTouchCancel={onReplayTouchCancel}
        >
          <TrackReplay2D tp={tp} drivers={replayDrivers} prog={progress} flip={circuitFlip} />
        </div>
        <div style={{ marginTop: 10, fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>
          Το scrubber και τα controls πιο κάτω εξακολουθούν να οδηγούν το replay, ενώ τηλεμετρία, στατιστικά και πίνακες
          γύρων παραμένουν διαθέσιμα.
        </div>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        <TwoDLapDelta
          F1={F1}
          delta={delta}
          driver1={driver1}
          driver2={driver2}
          color1={color1}
          color2={color2}
          lap1={lap1}
          lap2={lap2}
        />
        {replayDriverCards.map((driver) => (
          <DriverTelemetryCard key={driver.label} F1={F1} driver={driver} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function StageControls({
  mob,
  embed,
  F1,
  trackView,
  onTrackViewMode,
  cam,
  onCameraModeChange,
  vizMode,
  onVizModeChange,
}) {
  if (embed && mob) {
    return (
      <div style={{ position: "absolute", top: 8, left: 8, zIndex: 2, display: "flex", gap: 4, flexWrap: "wrap" }}>
        <TrackViewButtons F1={F1} compact trackView={trackView} onTrackViewMode={onTrackViewMode} />
        <button
          onClick={() =>
            onCameraModeChange((currentMode) => {
              const index = CAM_MODES.indexOf(currentMode);
              return CAM_MODES[(index + 1) % CAM_MODES.length];
            })
          }
          style={{
            ...controlButtonStyle({
              padding: "4px 10px",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: uiType.commandLetterSpacing,
              background: F1.overlay,
              borderColor: F1.blue,
              color: "#fff",
            }),
            background: F1.overlay,
            backdropFilter: "blur(6px)",
          }}
        >
          📷 {CAM_LABELS[cam]}
        </button>
        {vizMode !== "normal" && (
          <button
            onClick={() => onVizModeChange("normal")}
            style={{
              ...controlButtonStyle({
                padding: "4px 8px",
                fontSize: 9,
                fontWeight: 700,
                background: "#0088ff44",
                borderColor: "#0088ff",
                color: "#fff",
              }),
              background: "#0088ff44",
              backdropFilter: "blur(6px)",
            }}
          >
            ✕ {vizMode === "brake" ? "Φρένο" : "Ταχύτητα"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 3, flexWrap: "wrap" }}>
      <TrackViewButtons F1={F1} trackView={trackView} onTrackViewMode={onTrackViewMode} />
      <div style={{ width: 1, height: 16, background: F1.borderLight }} />
      {CAM_MODES.map((mode) => (
        <button
          key={mode}
          onClick={() => onCameraModeChange(mode)}
          style={segmentedButtonStyle(F1, {
            active: cam === mode,
            padding: "3px 8px",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: undefined,
          })}
        >
          {CAM_LABELS[mode]}
        </button>
      ))}
      <div style={{ width: 1, height: 16, background: F1.borderLight }} />
      <button
        onClick={() =>
          onVizModeChange((value) => (value === "normal" ? "heatmap" : value === "heatmap" ? "brake" : "normal"))
        }
        style={segmentedButtonStyle(F1, {
          active: vizMode !== "normal",
          padding: "3px 8px",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: undefined,
          activeBackground: "#0088ff",
          activeBorder: "#0088ff",
        })}
      >
        {vizMode === "brake" ? "🟥 Φρένο" : vizMode === "heatmap" ? "🌡 Ταχύτητα" : "🌡 Θερμικό"}
      </button>
    </div>
  );
}

function IntervalDeltaOverlay({ mob, embed, F1, delta, color1, color2, driver1, driver2, lap1, lap2 }) {
  if (delta === null) return null;

  return (
    <div
      style={{
        position: "absolute",
        ...(embed && mob ? { top: 8, right: 8 } : { bottom: 8, left: 10 }),
        zIndex: 3,
        animation: "fadeIn .4s",
      }}
    >
      <div
        style={{
          ...panelSurfaceStyle(F1, {
            background: F1.overlay,
            borderColor: `${F1.blue}33`,
            borderRadius: 6,
            padding: embed && mob ? "4px 10px" : mob ? "5px 12px" : "6px 16px",
            backdropFilter: "blur(8px)",
          }),
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 7,
            color: F1.textMuted,
            letterSpacing: "0.15em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Δ
        </div>
        <div
          style={{
            fontSize: embed && mob ? 15 : mob ? 18 : 24,
            fontWeight: 900,
            fontFamily: F1.mono,
            color: delta > 0 ? F1.red : F1.green,
            lineHeight: 1.1,
          }}
        >
          {delta > 0 ? "+" : ""}
          {delta.toFixed(3)}
          <span style={{ fontSize: "0.5em", opacity: 0.7 }}>s</span>
        </div>
        {!(embed && mob) && (
          <div style={{ display: "flex", gap: 12, marginTop: 2 }}>
            <span style={{ fontSize: 9, color: color1, fontFamily: F1.mono, fontWeight: 700 }}>
              {driver1?.name_acronym} {fmt(lap1?.lap_duration)}
            </span>
            <span style={{ fontSize: 9, color: color2, fontFamily: F1.mono, fontWeight: 700 }}>
              {driver2?.name_acronym} {fmt(lap2?.lap_duration)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function SceneErrorFallback({
  mob,
  embed,
  F1,
  tp,
  sceneError,
  replayDrivers,
  replayDriverCards,
  progress,
  circuitFlip,
  onTrackViewMode,
  onOpenAuxView,
  onChangeMatchup,
}) {
  if (!sceneError) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: mob ? 12 : 20,
        zIndex: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "min(900px, 100%)",
          padding: mob ? "18px 16px" : "22px 24px",
          borderRadius: 16,
          border: `1px solid ${F1.red}33`,
          background: `${F1.overlay}`,
          backdropFilter: "blur(14px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "minmax(260px, 320px) 1fr",
            gap: mob ? 16 : 22,
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.14em", color: F1.red, marginBottom: 10 }}>
              2D ΕΦΕΔΡΙΚΗ ΑΝΑΠΑΡΑΓΩΓΗ
            </div>
            <TrackReplay2D tp={tp} drivers={replayDrivers} prog={progress} flip={circuitFlip} />
            <div
              style={{
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: mob
                  ? "1fr"
                  : `repeat(${Math.max(2, Math.min(4, replayDriverCards.length || 2))}, minmax(0, 1fr))`,
                gap: 10,
              }}
            >
              {replayDriverCards.map((driver) => (
                <DriverTelemetryCard key={driver.label} F1={F1} driver={driver} progress={progress} fallback />
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>
              Το scrubber και τα controls πιο κάτω οδηγούν πλέον ένα 2D replay πίστας με ζωντανά σημεία προόδου.
            </div>
          </div>
          <div style={{ textAlign: mob ? "center" : "left" }}>
            <div
              style={{ fontSize: mob ? 15 : 18, fontWeight: 800, color: F1.text, lineHeight: 1.45, marginBottom: 8 }}
            >
              {sceneError}
            </div>
            <div style={{ fontSize: 12, color: F1.textDim, lineHeight: 1.7, marginBottom: 14 }}>
              Η σύγκριση παραμένει χρήσιμη και χωρίς WebGL. Άνοιξε τηλεμετρία, στατιστικά ή πίνακες γύρων, ή επέστρεψε
              στη μπάρα επιλογών για νέα σύγκριση.
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: mob ? "center" : "flex-start" }}>
              <button
                onClick={() => onTrackViewMode("2d")}
                className="f1-btn"
                style={{ padding: "8px 13px", fontSize: 11 }}
              >
                ΧΡΗΣΗ 2D
              </button>
              <button onClick={() => onOpenAuxView("telemetry")} style={{ padding: "8px 13px", fontSize: 11 }}>
                ΤΗΛΕΜΕΤΡΙΑ
              </button>
              <button onClick={() => onOpenAuxView("stats")} style={{ padding: "8px 13px", fontSize: 11 }}>
                ΣΤΑΤΙΣΤΙΚΑ
              </button>
              <button onClick={() => onOpenAuxView("laps")} style={{ padding: "8px 13px", fontSize: 11 }}>
                ΓΥΡΟΙ
              </button>
              {!embed && (
                <button onClick={onChangeMatchup} className="f1-btn" style={{ padding: "8px 13px", fontSize: 11 }}>
                  ΝΕΑ ΣΥΓΚΡΙΣΗ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppEmptyState({ mob, F1, logoSrc, appName, appSubtitle, onOpenPresets }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        animation: "fadeIn .6s",
        padding: 20,
      }}
    >
      <img
        src={logoSrc}
        alt=""
        style={{ height: 60, marginBottom: 16, opacity: 0.6 }}
        onError={(event) => {
          event.target.style.display = "none";
        }}
      />
      <div style={{ fontSize: mob ? 14 : 18, fontWeight: 900, color: F1.text, marginBottom: 4 }}>{appName}</div>
      <div style={{ fontSize: 11, color: F1.red, fontWeight: 600, marginBottom: 14, letterSpacing: "0.1em" }}>
        {appSubtitle}
      </div>
      <div style={{ fontSize: 12, color: F1.textDim, maxWidth: 360, lineHeight: 1.6 }}>
        Σύγκρινε γύρους κατατακτήριων σε 3D ή πέρασε σε ελαφρύ 2D replay όταν το μηχάνημα χρειάζεται πιο ελαφριά
        προβολή.
      </div>
      <div style={{ marginTop: 18, display: "flex", gap: 8, justifyContent: "center" }}>
        <button onClick={onOpenPresets} className="f1-btn" style={{ padding: "8px 20px", fontSize: 12 }}>
          ⚡ ΓΡΗΓΟΡΗ ΕΚΚΙΝΗΣΗ
        </button>
        <a
          href="https://f1stories.gr/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontSize: 11,
            color: F1.textDim,
            textDecoration: "none",
            padding: "8px 14px",
            border: `1px solid ${F1.border}`,
            borderRadius: 4,
            fontWeight: 600,
          }}
        >
          f1stories.gr →
        </a>
      </div>
    </div>
  );
}

function EmbedEmptyState({ F1, loading, loadingProgress, canCancelLoad, alertErr, onCancelLoad }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        animation: "fadeIn .4s",
      }}
    >
      {loading ? (
        <>
          <div style={{ fontSize: 13, fontWeight: 700, color: F1.text, fontFamily: F1.mono, marginBottom: 6 }}>
            {loading}
          </div>
          {loadingProgress !== undefined && (
            <div
              style={{
                height: 3,
                width: 220,
                background: F1.borderLight,
                borderRadius: 2,
                overflow: "hidden",
                margin: "0 auto 10px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${loadingProgress}%`,
                  background: F1.blue,
                  borderRadius: 2,
                  transition: "width .3s",
                }}
              />
            </div>
          )}
          {canCancelLoad && (
            <button onClick={onCancelLoad} style={{ padding: "5px 10px", fontSize: 10 }}>
              ΑΚΥΡΟ
            </button>
          )}
        </>
      ) : alertErr ? (
        <div style={{ fontSize: 12, color: F1.red, fontFamily: F1.mono }}>{alertErr}</div>
      ) : (
        <>
          <div
            style={{
              width: 28,
              height: 28,
              border: `3px solid ${F1.blue}`,
              borderTopColor: "transparent",
              borderRadius: "50%",
              margin: "0 auto 12px",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <div style={{ fontSize: 13, fontWeight: 700, color: F1.textDim, fontFamily: F1.mono }}>ΦΟΡΤΩΣΗ ΣΥΓΚΡΙΣΗΣ</div>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </>
      )}
    </div>
  );
}

export default function ReplayStage({
  mob,
  embed,
  F1,
  logoSrc,
  appName,
  appSubtitle,
  containerRef,
  tp,
  mobTab,
  is2DView,
  isSceneVisible,
  sceneError,
  trackView,
  onTrackViewMode,
  cam,
  onCameraModeChange,
  vizMode,
  onVizModeChange,
  loc1,
  loc2,
  loc3,
  loc4,
  prog,
  progRef,
  playRef,
  speedRef,
  co1,
  co2,
  co3,
  co4,
  di1,
  di2,
  di3,
  di4,
  li1,
  li2,
  tel1,
  replayDrivers,
  replayDriverCards,
  delta,
  circuitFlip,
  circuitTurns,
  isDark,
  loading,
  loadingProgress,
  canCancelLoad,
  alertErr,
  onCancelLoad,
  onSceneError,
  onReplayTouchStart,
  onReplayTouchEnd,
  onReplayTouchCancel,
  canTouchScrubReplay,
  onOpenAuxView,
  onChangeMatchup,
  onOpenPresets,
}) {
  return (
    <div
      style={{
        flex: 1,
        position: "relative",
        minHeight: embed && mob ? 220 : embed || mob ? 0 : "auto",
        display: embed && mobTab !== "3d" ? "none" : mob && mobTab !== "3d" ? "none" : undefined,
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          background: F1.carbon,
          cursor: is2DView ? "default" : "grab",
          minHeight: embed && mob ? 220 : embed || mob ? 0 : "auto",
          touchAction: is2DView ? "pan-y" : "none",
          display: is2DView ? "flex" : "block",
          alignItems: is2DView ? "center" : undefined,
          justifyContent: is2DView ? "center" : undefined,
          padding: is2DView ? (mob ? 12 : 18) : 0,
          overflow: is2DView ? "auto" : "hidden",
        }}
      >
        {tp && !is2DView && (
          <Suspense fallback={null}>
            <SceneStage3D
              containerRef={containerRef}
              tp={tp}
              l1={loc1}
              l2={loc2}
              progRef={progRef}
              playRef={playRef}
              speedRef={speedRef}
              c1={co1}
              c2={co2}
              cam={cam}
              lab1={di1?.name_acronym || ""}
              lab2={di2?.name_acronym || ""}
              telData1={tel1}
              vizMode={vizMode}
              isDark={isDark}
              l3={loc3}
              l4={loc4}
              c3={co3}
              c4={co4}
              lab3={di3?.name_acronym || ""}
              lab4={di4?.name_acronym || ""}
              onError={onSceneError}
              circuitFlip={circuitFlip}
              circuitTurns={circuitTurns}
              enabled={!is2DView}
              visible={isSceneVisible}
            />
          </Suspense>
        )}
        {tp && is2DView && (
          <TwoDReplayView
            mob={mob}
            F1={F1}
            tp={tp}
            replayDrivers={replayDrivers}
            replayDriverCards={replayDriverCards}
            progress={prog}
            circuitFlip={circuitFlip}
            delta={delta}
            driver1={di1}
            driver2={di2}
            color1={co1}
            color2={co2}
            lap1={li1}
            lap2={li2}
            trackView={trackView}
            onTrackViewMode={onTrackViewMode}
            onReplayTouchStart={onReplayTouchStart}
            onReplayTouchEnd={onReplayTouchEnd}
            onReplayTouchCancel={onReplayTouchCancel}
            canTouchScrubReplay={canTouchScrubReplay}
          />
        )}
      </div>
      {tp && !sceneError && !is2DView && (
        <StageControls
          mob={mob}
          embed={embed}
          F1={F1}
          trackView={trackView}
          onTrackViewMode={onTrackViewMode}
          cam={cam}
          onCameraModeChange={onCameraModeChange}
          vizMode={vizMode}
          onVizModeChange={onVizModeChange}
        />
      )}
      {tp && !sceneError && !is2DView && !mob && !embed && (
        <div style={{ position: "absolute", top: 44, left: 10, zIndex: 2 }}>
          <MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} flip={circuitFlip} />
        </div>
      )}
      {tp && !is2DView && (
        <IntervalDeltaOverlay
          mob={mob}
          embed={embed}
          F1={F1}
          delta={delta}
          color1={co1}
          color2={co2}
          driver1={di1}
          driver2={di2}
          lap1={li1}
          lap2={li2}
        />
      )}
      {tp && li1 && li2 && !is2DView && !(embed && mob) && (
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 2,
            maxWidth: "95%",
          }}
        >
          <SectorDelta s={1} t1={li1.duration_sector_1} t2={li2.duration_sector_1} c1={co1} c2={co2} />
          <SectorDelta s={2} t1={li1.duration_sector_2} t2={li2.duration_sector_2} c1={co1} c2={co2} />
          <SectorDelta s={3} t1={li1.duration_sector_3} t2={li2.duration_sector_3} c1={co1} c2={co2} />
        </div>
      )}
      {tp && (
        <SceneErrorFallback
          mob={mob}
          embed={embed}
          F1={F1}
          tp={tp}
          sceneError={sceneError}
          replayDrivers={replayDrivers}
          replayDriverCards={replayDriverCards}
          progress={prog}
          circuitFlip={circuitFlip}
          onTrackViewMode={onTrackViewMode}
          onOpenAuxView={onOpenAuxView}
          onChangeMatchup={onChangeMatchup}
        />
      )}
      {!tp && !loading && !embed && (
        <AppEmptyState
          mob={mob}
          F1={F1}
          logoSrc={logoSrc}
          appName={appName}
          appSubtitle={appSubtitle}
          onOpenPresets={onOpenPresets}
        />
      )}
      {embed && !tp && (
        <EmbedEmptyState
          F1={F1}
          loading={loading}
          loadingProgress={loadingProgress}
          canCancelLoad={canCancelLoad}
          alertErr={alertErr}
          onCancelLoad={onCancelLoad}
        />
      )}
    </div>
  );
}
