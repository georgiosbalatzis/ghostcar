import { memo, useMemo } from "react";
import { fmt } from "../../helpers.js";
import LiveTelemetry from "./LiveTelemetry.jsx";

function titleCase(value) {
  return value ? value.charAt(0) + value.slice(1).toLowerCase() : "";
}

// Sector by sector, how much the second-fastest driver gains or loses on the fastest (official sector times).
function SectorSwing({ ranked }) {
  const [fastest, second] = ranked;
  if (!second) return null;
  const swings = [0, 1, 2].map((k) =>
    fastest.sectors[k] && second.sectors[k] ? second.sectors[k] - fastest.sectors[k] : null
  );
  if (swings.every((swing) => swing == null)) return null;
  const scale = Math.max(0.05, ...swings.map((swing) => Math.abs(swing || 0)));
  return (
    <table className="brief__sectors">
      <caption className="kicker brief__caption">Διαφορές ανά τομέα</caption>
      <tbody>
        {swings.map((swing, k) => {
          const gainer = swing == null || swing === 0 ? null : swing > 0 ? fastest : second;
          return (
            <tr key={k}>
              <th scope="row">Τ{k + 1}</th>
              <td className="brief__swing">
                <span className="diverging" style={gainer ? { "--c": gainer.color } : undefined} aria-hidden="true">
                  {gainer && (
                    <span
                      className={`diverging__bar ${gainer === fastest ? "diverging__bar--left" : ""}`}
                      style={{ width: `${(Math.abs(swing) / scale) * 50}%` }}
                    />
                  )}
                </span>
              </td>
              <td className="num brief__swing-value">
                {swing == null ? "—" : gainer ? `${gainer.label} ${Math.abs(swing).toFixed(3)}` : "ίσοι"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// The "match report" beside the replay, as on /standings/: drivers ranked by lap time under their team rule,
// values at the playhead, and where the two fastest differ by sector.
function RaceBrief({ drivers, time }) {
  const ranked = useMemo(
    () => [...drivers].sort((a, b) => (a.lapDuration || Infinity) - (b.lapDuration || Infinity)),
    [drivers]
  );
  return (
    <section className="brief" aria-labelledby="brief-title">
      <h2 id="brief-title" className="brief__title">
        Αγωνιστικό δελτίο
      </h2>
      <p className="brief__lede">
        Ζωντανές τιμές στο <span className="num">{fmt(time)}</span>
      </p>
      <table className="brief__drivers" aria-label="Οδηγοί σύγκρισης">
        <tbody>
          {ranked.map((driver, index) => (
            <tr key={driver.slot} style={{ "--c": driver.color }}>
              <td className={`brief__pos num ${index === 0 ? "brief__pos--first" : ""}`}>{index + 1}</td>
              <th scope="row">
                <span className="brief__name">{driver.name}</span>
                <span className="brief__meta">
                  {[driver.team, `Γύρος ${driver.lapNumber}`, titleCase(driver.compound)].filter(Boolean).join(" · ")}
                </span>
              </th>
              <td className="brief__time num">
                {index === 0 ? fmt(driver.lapDuration) : `+${(driver.gap || 0).toFixed(3)}`}
                <small>{index === 0 ? "ταχύτερος" : fmt(driver.lapDuration)}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <LiveTelemetry drivers={drivers} time={time} />
      <SectorSwing ranked={ranked} />
    </section>
  );
}

export default memo(RaceBrief);
