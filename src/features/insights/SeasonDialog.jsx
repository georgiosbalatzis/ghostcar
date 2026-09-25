import { useEffect } from "react";
import Dialog from "../../components/ui/Dialog.jsx";
import { fmt } from "../../helpers.js";
import "./insights.css";

// Qualifying head-to-head across a season (formerly two separate views: H2H and season dashboard).
export default function SeasonDialog({ year, drivers, season, onClose }) {
  const [a, b] = drivers;
  const { rows, progress, load, cancel } = season;

  useEffect(() => {
    load();
    return cancel;
  }, [load, cancel]);

  const wins = rows ? [rows.filter((row) => row.d < 0).length, rows.filter((row) => row.d > 0).length] : [0, 0];
  const scale = rows?.length ? Math.max(...rows.map((row) => Math.abs(row.d)), 0.05) : 1;

  return (
    <Dialog
      title={`Κατατακτήριες ${year}`}
      subtitle={`${a.label} – ${b.label} · καλύτερος γύρος κάθε Γκραν Πρι`}
      variant="wide"
      onClose={onClose}
    >
      {progress && (
        <div className="season__progress" role="status">
          <span className="spinner" aria-hidden="true" />
          <span>
            {progress.total
              ? `Έλεγχος ${progress.current.replace("Grand Prix", "GP")} · ${progress.checked + 1} από ${progress.total}`
              : "Φόρτωση ημερολογίου…"}
          </span>
        </div>
      )}
      {rows && rows.length > 0 && (
        <>
          <div className="season__score">
            <span style={{ "--c": a.color }}>
              <span className="swatch" aria-hidden="true" />
              {a.label} <b className="num">{wins[0]}</b>
            </span>
            <span className="season__score-label">ταχύτερος στις κατατακτήριες</span>
            <span style={{ "--c": b.color }}>
              <b className="num">{wins[1]}</b> {b.label}
              <span className="swatch" aria-hidden="true" />
            </span>
          </div>
          <table className="data-table season__table">
            <caption className="visually-hidden">Διαφορά καλύτερου γύρου ανά Γκραν Πρι</caption>
            <thead>
              <tr>
                <th scope="col">Γκραν Πρι</th>
                <th scope="col" style={{ "--c": a.color }}>
                  {a.label}
                </th>
                <th scope="col" style={{ "--c": b.color }}>
                  {b.label}
                </th>
                <th scope="col" className="season__bar-head">
                  Διαφορά
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const winner = row.d < 0 ? a : row.d > 0 ? b : null;
                return (
                  <tr key={row.gp}>
                    <th scope="row">{row.gp}</th>
                    <td className={row.d < 0 ? "is-best" : undefined}>
                      <span className="num">{fmt(row.t1)}</span>
                    </td>
                    <td className={row.d > 0 ? "is-best" : undefined}>
                      <span className="num">{fmt(row.t2)}</span>
                    </td>
                    <td className="season__bar-cell">
                      <div className="season__bar">
                        <span className="diverging" style={winner ? { "--c": winner.color } : undefined}>
                          <span
                            className={`diverging__bar ${row.d < 0 ? "diverging__bar--left" : ""}`}
                            style={{ width: `${(Math.abs(row.d) / scale) * 50}%` }}
                          />
                        </span>
                        <span className="num season__delta">
                          {winner ? `${winner.label} ${Math.abs(row.d).toFixed(3)}` : "ίσοι"}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      {rows && rows.length === 0 && !progress && (
        <p className="empty-note">Δεν βρέθηκαν κατατακτήριες με γύρους και για τους δύο οδηγούς στο {year}.</p>
      )}
    </Dialog>
  );
}
