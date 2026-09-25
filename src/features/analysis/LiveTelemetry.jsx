import { fmt, telAt } from "../../helpers.js";

function titleCase(value) {
  return value ? value.charAt(0) + value.slice(1).toLowerCase() : "—";
}

// Values at the playhead, drivers as columns so 2–4 drivers read the same way.
export default function LiveTelemetry({ drivers, prog }) {
  const current = drivers.map((driver) => telAt(driver.tel, prog));
  return (
    <table className={`data-table live ${drivers.length > 2 ? "live--dense" : ""}`}>
      <caption className="visually-hidden">Τηλεμετρία στη θέση αναπαραγωγής</caption>
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
      <tbody>
        <tr className="live__speed">
          <th scope="row">
            Ταχύτητα <span className="unit">km/h</span>
          </th>
          {current.map((value, index) => (
            <td key={drivers[index].slot} className="num">
              {Math.round(value.speed)}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">
            Γκάζι <span className="unit">%</span>
          </th>
          {current.map((value, index) => (
            <td key={drivers[index].slot} style={{ "--c": drivers[index].color }}>
              <span className="meter" aria-hidden="true">
                <span className="meter__fill" style={{ transform: `scaleX(${Math.min(100, value.throttle) / 100})` }} />
              </span>
              <span className="num">{Math.round(value.throttle)}</span>
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Φρένο</th>
          {current.map((value, index) => (
            <td key={drivers[index].slot} className={value.brake > 0 ? "live__on" : "live__off"}>
              {value.brake > 0 ? "Πατημένο" : "—"}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Σχέση</th>
          {current.map((value, index) => (
            <td key={drivers[index].slot} className="num">
              {value.n_gear || value.gear || "—"}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">DRS</th>
          {current.map((value, index) => (
            <td key={drivers[index].slot} className={value.drs >= 10 ? "live__on" : "live__off"}>
              {value.drs >= 10 ? "Ανοιχτό" : "Κλειστό"}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Χρόνος</th>
          {drivers.map((driver) => (
            <td key={driver.slot} className="num">
              {fmt((driver.lapDuration || 0) * prog)}
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">Γόμα</th>
          {drivers.map((driver) => (
            <td key={driver.slot}>{titleCase(driver.compound)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
