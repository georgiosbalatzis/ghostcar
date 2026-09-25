import { memo } from "react";
import { fmt } from "../../helpers.js";

// Who is compared and the result. The large number is the final lap-time difference between
// drivers A and B; it is not a live, position-derived gap.
function DriverLegend({ drivers, delta }) {
  const [first, second] = drivers;
  const faster = delta == null ? null : delta < 0 ? first : delta > 0 ? second : null;
  // With three or four drivers an A–B figure would be ambiguous, so the gap column carries it instead.
  const showDelta = delta != null && drivers.length === 2;
  return (
    <div className="legend">
      {showDelta && (
        <div className="legend__delta">
          <span className="legend__caption">Τελική διαφορά γύρου</span>
          <span className="legend__value num">
            {Math.abs(delta).toFixed(3)}
            <small> s</small>
          </span>
          <span className="legend__caption">
            {faster ? (
              <>
                <b>{faster.label}</b> ταχύτερος
              </>
            ) : (
              "Ίδιος χρόνος"
            )}
          </span>
        </div>
      )}
      <table className="legend__drivers">
        <caption className="visually-hidden">Χρόνοι γύρου</caption>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.slot} style={{ "--c": driver.color }}>
              <th scope="row">
                <span className="swatch" aria-hidden="true" />
                {driver.label}
              </th>
              <td className="legend__lap">Γ{driver.lapNumber}</td>
              <td className="num">{fmt(driver.lapDuration)}</td>
              {!showDelta && <td className="num legend__gap">{driver.gap ? `+${driver.gap.toFixed(3)}` : ""}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(DriverLegend);
