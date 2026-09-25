import { memo } from "react";
import Tabs from "../../components/ui/Tabs.jsx";
import LapTimes from "./LapTimes.jsx";
import LiveTelemetry from "./LiveTelemetry.jsx";
import SectorAnalysis from "./SectorAnalysis.jsx";
import TelemetryTraces from "./TelemetryTraces.jsx";
import { RAIL_TABS } from "./railTabs.js";
import "./analysis.css";

// Only the active tab is mounted, so hidden analysis does no work during playback.
function AnalysisRail({ tab, onTab, model, prog, onSeek, selection, loadedLaps, isDirty, onApply, compact }) {
  const activeSlots = selection.slots.slice(0, selection.numDrivers);
  return (
    <aside className="rail" aria-label="Ανάλυση">
      <Tabs label="Ανάλυση" tabs={RAIL_TABS} active={tab} onChange={onTab} className="rail__tabs">
        {isDirty && (
          <div className="rail__pending" role="status">
            <p>Η επιλογή σου διαφέρει από τη σύγκριση που προβάλλεται.</p>
            <button type="button" className="btn btn--primary" onClick={onApply}>
              Φόρτωση
            </button>
          </div>
        )}
        {tab === "live" && <LiveTelemetry drivers={model.drivers} prog={prog} />}
        {tab === "telemetry" && (
          <TelemetryTraces drivers={model.drivers} prog={prog} onSeek={onSeek} compact={compact} />
        )}
        {tab === "sectors" && <SectorAnalysis drivers={model.drivers} />}
        {tab === "laps" && (
          <LapTimes
            slots={activeSlots}
            drivers={selection.drivers}
            loadedLaps={loadedLaps}
            onSelectLap={selection.selectLapSlot}
          />
        )}
      </Tabs>
    </aside>
  );
}

export default memo(AnalysisRail);
