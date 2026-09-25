import { memo, useState } from "react";
import { getDistinctDriverColors, getDriverColor } from "../../domain/drivers.js";
import { fmt } from "../../helpers.js";

// Every valid lap of the selected drivers. Picking a lap changes the selection; the replay only
// changes when the user applies it, so the loaded comparison is never silently replaced.
function LapTimes({ slots, drivers, loadedLaps, onSelectLap }) {
  const [order, setOrder] = useState("time");
  // Same teammate-aware colours as the replay, so a lap list matches its car.
  const colors = getDistinctDriverColors(
    slots.map((slot) => getDriverColor(drivers.find((item) => item.driver_number === slot.driverNumber)))
  );
  return (
    <div className="laps">
      <div className="segmented laps__order" role="group" aria-label="Ταξινόμηση">
        <button type="button" aria-pressed={order === "time"} onClick={() => setOrder("time")}>
          Ταχύτεροι
        </button>
        <button type="button" aria-pressed={order === "lap"} onClick={() => setOrder("lap")}>
          Σειρά γύρων
        </button>
      </div>
      {slots.map((slot, index) => {
        const driver = drivers.find((item) => item.driver_number === slot.driverNumber);
        if (!driver) return null;
        const laps = [...slot.lapSelect.options];
        if (order === "lap") laps.sort((a, b) => a.lap_number - b.lap_number);
        const best = slot.lapSelect.options[0]?.lap_duration;
        return (
          <section key={slot.slot} className="laps__driver" style={{ "--c": colors[index] }}>
            <h3 className="laps__name">
              <span className="swatch" aria-hidden="true" />
              {driver.name_acronym} <span className="laps__count">{laps.length} γύροι</span>
            </h3>
            <ol className="laps__list">
              {laps.map((lap) => {
                const selected = lap.lap_number === slot.lapNumber;
                const shown = loadedLaps[slot.slot] === lap.lap_number;
                return (
                  <li key={lap.lap_number}>
                    <button
                      type="button"
                      className="lap-row"
                      aria-pressed={selected}
                      onClick={() => onSelectLap(slot.slot, lap.lap_number)}
                    >
                      <span className="lap-row__no num">Γ{lap.lap_number}</span>
                      <span className="lap-row__time num">{fmt(lap.lap_duration)}</span>
                      <span className="lap-row__gap num">
                        {lap.lap_duration === best ? "ταχύτερος" : `+${(lap.lap_duration - best).toFixed(3)}`}
                      </span>
                      <span className="lap-row__state">{shown ? "σε προβολή" : selected ? "επιλεγμένος" : ""}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

export default memo(LapTimes);
