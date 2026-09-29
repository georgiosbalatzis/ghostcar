import { memo, useMemo } from "react";
import TrackMap from "../replay/TrackMap.jsx";

function bestIndex(values, lowerIsBetter) {
  let best = -1;
  values.forEach((value, index) => {
    if (value == null) return;
    if (best < 0 || (lowerIsBetter ? value < values[best] : value > values[best])) best = index;
  });
  return best;
}

function summarise(tel = []) {
  let top = 0;
  let sum = 0;
  let full = 0;
  let braking = 0;
  for (const sample of tel) {
    const speed = sample.speed || 0;
    top = Math.max(top, speed);
    sum += speed;
    if ((sample.throttle || 0) >= 95) full++;
    if ((sample.brake || 0) > 0) braking++;
  }
  const n = tel.length || 1;
  return { top, avg: sum / n, full: (full / n) * 100, braking: (braking / n) * 100 };
}

function TimeRow({ label, values, format }) {
  const best = bestIndex(values, true);
  return (
    <tr>
      <th scope="row">{label}</th>
      {values.map((value, index) => {
        // Rounded to the displayed precision, so a tie reads as a tie rather than "+0.000".
        const gap = value && best >= 0 ? Math.round((value - values[best]) * 1000) / 1000 : 0;
        return (
          <td key={index} className={value && gap === 0 ? "is-best" : undefined}>
            <span className="num">{value ? format(value) : "—"}</span>
            {gap > 0 && <span className="gap num">+{gap.toFixed(3)}</span>}
          </td>
        );
      })}
    </tr>
  );
}

function ValueRow({ label, unit, values, digits = 0, highlight }) {
  const best = highlight ? bestIndex(values, false) : -1;
  return (
    <tr>
      <th scope="row">
        {label} {unit && <span className="unit">{unit}</span>}
      </th>
      {values.map((value, index) => (
        <td key={index} className={index === best ? "is-best" : undefined}>
          <span className="num">{value.toFixed(digits)}</span>
        </td>
      ))}
    </tr>
  );
}

function DriverHead({ drivers }) {
  return (
    <thead>
      <tr>
        <td />
        {drivers.map((driver) => (
          <th key={driver.slot} scope="col" style={{ "--c": driver.color }}>
            <span className="swatch" aria-hidden="true" />
            {driver.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

// Official sector times from OpenF1 laps, lap summaries from car telemetry, and who is faster where.
function SectorAnalysis({ model, dominance }) {
  const { drivers } = model;
  const summaries = useMemo(() => drivers.map((driver) => summarise(driver.tel)), [drivers]);
  const hasSectors = drivers.some((driver) => driver.sectors.some(Boolean));
  return (
    <div className="sectors">
      <div className="sectors__tables">
        {hasSectors ? (
          <table className="data-table">
            <caption className="table-caption">Χρόνοι τομέων</caption>
            <DriverHead drivers={drivers} />
            <tbody>
              {[0, 1, 2].map((sector) => (
                <TimeRow
                  key={sector}
                  label={`Τομέας ${sector + 1}`}
                  values={drivers.map((driver) => driver.sectors[sector])}
                  format={(value) => value.toFixed(3)}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-note">Το OpenF1 δεν δίνει χρόνους τομέων για αυτούς τους γύρους.</p>
        )}
        <table className="data-table">
          <caption className="table-caption">Σύνοψη γύρου</caption>
          <DriverHead drivers={drivers} />
          <tbody>
            <ValueRow label="Μέγιστη ταχύτητα" unit="km/h" values={summaries.map((s) => s.top)} highlight />
            <ValueRow label="Μέση ταχύτητα" unit="km/h" values={summaries.map((s) => s.avg)} highlight />
            <ValueRow label="Πλήρες γκάζι" unit="% χρόνου" values={summaries.map((s) => s.full)} />
            <ValueRow label="Φρενάρισμα" unit="% χρόνου" values={summaries.map((s) => s.braking)} />
          </tbody>
        </table>
      </div>
      {dominance.length > 0 && (
        <figure className="sectors__map stage-panel">
          <figcaption className="kicker stage__legend">
            <span>Κυριαρχία πίστας</span>
            {drivers.map((driver) => (
              <span key={driver.slot} style={{ "--c": driver.color }}>
                <span className="swatch" aria-hidden="true" />
                {driver.label}
                <span className="stage__legend-long"> ταχύτερος</span>
              </span>
            ))}
          </figcaption>
          <div className="sectors__track">
            <TrackMap
              trackPath={model.trackPath}
              drivers={drivers}
              time={0}
              flip={model.circuitFlip}
              dominance={dominance}
              showCars={false}
            />
          </div>
        </figure>
      )}
    </div>
  );
}

export default memo(SectorAnalysis);
