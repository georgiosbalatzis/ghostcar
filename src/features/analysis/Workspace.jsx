import { memo, useMemo } from "react";
import { TabActions } from "../../app/ComparisonActions.jsx";
import Tabs from "../../components/ui/Tabs.jsx";
import SeasonPanel from "../insights/SeasonPanel.jsx";
import { buildKeyFacts } from "../replay/replayModel.js";
import LapTimes from "./LapTimes.jsx";
import RaceBrief from "./RaceBrief.jsx";
import SectorAnalysis from "./SectorAnalysis.jsx";
import TelemetryTraces from "./TelemetryTraces.jsx";
import { PAGE_TABS } from "./pageTabs.js";
import "./analysis.css";

function KeyFacts({ facts }) {
  return (
    <dl className="facts desk__facts">
      {facts.map((fact) => (
        <div key={fact.label} className="facts__item">
          <dt className="kicker facts__label">{fact.label}</dt>
          <dd className="facts__value">{fact.value}</dd>
          <dd className="facts__note num">{fact.note}</dd>
        </div>
      ))}
    </dl>
  );
}

// The loaded comparison as a Data Desk page: tabs as on /standings/, each a full panel; only the active one is
// mounted, so hidden analysis does no work during playback. `player` is the stage and transport.
function Workspace({
  tab,
  onTab,
  model,
  analysis,
  time,
  onSeek,
  player,
  selection,
  loadedLaps,
  isDirty,
  onApply,
  season,
  actions,
  showreel,
  compact,
}) {
  const facts = useMemo(() => buildKeyFacts(model), [model]);
  const activeSlots = selection.slots.slice(0, selection.numDrivers);
  return (
    <Tabs
      label="Σύγκριση"
      tabs={PAGE_TABS}
      active={tab}
      onChange={onTab}
      className="desk page-tabs"
      aside={<TabActions actions={actions} showreel={showreel} />}
    >
      {isDirty && (
        <div className="margin-note desk__pending" role="status">
          <p>Η επιλογή σου διαφέρει από τη σύγκριση που προβάλλεται.</p>
          <button type="button" className="btn btn--ink" onClick={onApply}>
            Φόρτωση
          </button>
        </div>
      )}
      {tab === "replay" && (
        <div className="desk__replay">
          <KeyFacts facts={facts} />
          <div className="desk__player workspace__player">{player}</div>
          <RaceBrief drivers={model.drivers} time={time} />
          <section id="telemetry" className="desk__traces" aria-labelledby="traces-title">
            <div className="crumb">
              <span>02 / Τηλεμετρία</span>
              <span>{analysis.trace?.reliable ? "Ανά απόσταση γύρου" : "Ανά χρόνο"}</span>
            </div>
            <div className="section-head">
              <h2 id="traces-title" className="section-head__title">
                Ταχύτητα, γκάζι, φρένο<span className="dot">.</span>
              </h2>
              <p className="section-head__note">
                Οι γύροι στον ίδιο άξονα. Η κάθετη γραμμή ακολουθεί την αναπαράσταση· πάτησε ή σύρε πάνω στο γράφημα για
                να μετακινηθείς.
              </p>
            </div>
            <TelemetryTraces
              drivers={model.drivers}
              time={time}
              duration={model.duration}
              trace={analysis.trace}
              timeTicks={analysis.ticks}
              onSeek={onSeek}
              compact={compact}
            />
          </section>
        </div>
      )}
      {tab === "sectors" && <SectorAnalysis model={model} dominance={analysis.dominance} />}
      {tab === "laps" && (
        <LapTimes
          slots={activeSlots}
          drivers={selection.drivers}
          loadedLaps={loadedLaps}
          onSelectLap={selection.selectLapSlot}
        />
      )}
      {tab === "season" && <SeasonPanel year={model.year} drivers={model.drivers} season={season} />}
    </Tabs>
  );
}

export default memo(Workspace);
