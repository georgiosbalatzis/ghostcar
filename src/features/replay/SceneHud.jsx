import { distanceAtTimeOnGrid, timeAtDistanceOnGrid } from "../../domain/gap.js";
import { fractionAtTime } from "../../domain/timing.js";
import { fmt, telAt } from "../../helpers.js";

const SEGMENTS = 10;

function Bar({ label, value }) {
  const lit = Math.ceil(Math.max(0, Math.min(100, value)) / (100 / SEGMENTS));
  return (
    <span className="scene-hud__bar" role="img" aria-label={`${label} ${Math.round(value)}%`}>
      <span className="scene-hud__bar-name" aria-hidden="true">
        {label}
      </span>
      {Array.from({ length: SEGMENTS }, (_, index) => (
        <i key={index} className={index < lit ? "is-on" : ""} aria-hidden="true" />
      ))}
    </span>
  );
}

// The difference to a rival at the driver's current point on the track, from the same gap trace as the chart, and
// only when that trace is reliable. The fastest driver is compared with the next fastest, everyone else with the
// fastest. Positive: the driver reached this point later.
function gapAt(trace, drivers, driver, time) {
  if (!trace?.reliable || !trace.times[driver.slot]) return null;
  const others = drivers.filter((other) => other.slot !== driver.slot && trace.times[other.slot]);
  const rival =
    driver.slot === trace.reference
      ? [...others].sort((a, b) => (a.lapDuration || Infinity) - (b.lapDuration || Infinity))[0]
      : drivers.find((other) => other.slot === trace.reference);
  if (!rival) return null;
  const own = driver.lapDuration ? Math.min(time, driver.lapDuration) : time;
  const distance = distanceAtTimeOnGrid(trace, driver.slot, own);
  return { seconds: own - timeAtDistanceOnGrid(trace, rival.slot, distance), rival };
}

// Broadcast-style readout for the driver the camera is on: values as in the Αγωνιστικό δελτίο at the same time.
export default function SceneHud({ driver, drivers, trace, time }) {
  const now = telAt(driver.tel, fractionAtTime(driver.telTimes, time));
  const gap = gapAt(trace, drivers, driver, time);
  return (
    <div className="scene-hud" style={{ "--c": driver.color }} role="group" aria-label={`Τηλεμετρία ${driver.label}`}>
      <div className="scene-hud__row">
        <strong className="scene-hud__who">{driver.label}</strong>
        <span className="scene-hud__name">{driver.name}</span>
        <span className="num scene-hud__time">
          {fmt(driver.lapDuration ? Math.min(time, driver.lapDuration) : time)}
        </span>
      </div>
      <div className="scene-hud__row scene-hud__numbers">
        <span className="num scene-hud__speed" data-hud="speed">
          {Math.round(now.speed)}
          <small>km/h</small>
        </span>
        <span className="num scene-hud__gear" data-hud="gear">
          {now.n_gear || now.gear || "—"}
        </span>
        <span className={now.drs >= 10 ? "scene-hud__drs is-on" : "scene-hud__drs"}>DRS</span>
        <Bar label="Γκάζι" value={now.throttle} />
        <Bar label="Φρένο" value={now.brake > 0 ? 100 : 0} />
      </div>
      {gap && (
        <div className="scene-hud__row scene-hud__gap" data-hud="gap">
          <span>Διαφορά στο ίδιο σημείο</span>
          <span className="num">
            {gap.seconds < 0 ? "−" : "+"}
            {Math.abs(gap.seconds).toFixed(3)} s
          </span>
          <span>vs {gap.rival.label}</span>
        </div>
      )}
    </div>
  );
}
