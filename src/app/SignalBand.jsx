// The f1stories signal band under the page opening. It carries the page status: load progress with a cancel
// action while a replay loads, otherwise what is on screen. Only the load status is a live region, so the
// playback percentage never floods a screen reader.
export function SignalBand({ load, children }) {
  return (
    <div className="band signal-band">
      <p className="signal-band__status" role="status">
        {load && (
          <>
            <span className="spinner" aria-hidden="true" />
            <span>
              {load.label}
              {load.context && <span className="signal-band__context"> {load.context}</span>}
            </span>
            {load.onCancel && (
              <button type="button" className="btn btn--link signal-band__cancel" onClick={load.onCancel}>
                Ακύρωση
              </button>
            )}
          </>
        )}
      </p>
      {!load && children}
      <span className="band__slogan" aria-hidden="true">
        EVERY TENTH<span className="signal-band__slogan-end"> COUNTS</span>.
      </span>
      {load && (
        <span className="signal-band__progress" aria-hidden="true" style={{ "--p": (load.progress || 0) / 100 }} />
      )}
    </div>
  );
}

// The band's one-line result, matching the legend: an A–B lap-time difference for two drivers,
// otherwise the fastest lap (an A–B figure would be ambiguous with three or four).
export function describeResult(model) {
  const [first, second] = model.drivers;
  if (model.drivers.length === 2 && model.delta != null) {
    if (model.delta === 0) return "Τελική διαφορά 0.000 s · ίδιος χρόνος";
    const faster = model.delta < 0 ? first : second;
    return `Τελική διαφορά ${Math.abs(model.delta).toFixed(3)} s · ${faster.label} ταχύτερος`;
  }
  const fastest = model.drivers.find((driver) => driver.gap === 0);
  return fastest ? `Ταχύτερος γύρος: ${fastest.label}` : "";
}

export function Colophon() {
  return (
    <footer className="colophon">
      <a className="colophon__brand" href="https://f1stories.gr/">
        F1 STORIES<span className="dot">.</span>
      </a>
      <p>Ghost Car · Δεδομένα από το OpenF1 · Τεχνική ματιά, καθαρή άποψη</p>
    </footer>
  );
}
