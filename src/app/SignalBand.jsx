import { SITE } from "./siteNav.js";

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
      <div className="colophon__identity">
        <a className="colophon__brand" href={`${SITE}/`} aria-label="F1 Stories, αρχική σελίδα">
          F1 STORIES<span className="dot">.</span>
        </a>
        <p>Τεχνική ανάλυση, άποψη και ελληνική F1 κοινότητα.</p>
      </div>
      <nav className="colophon__index" aria-label="Ενότητες">
        <a href={`${SITE}/blog-module/blog/index.html`}>Άρθρα</a>
        <a href={`${SITE}/standings/`}>Βαθμολογία</a>
        <a href={`${SITE}/authors/`}>Συντάκτες</a>
        <a href="https://www.youtube.com/@f1_stories_original" target="_blank" rel="noopener noreferrer">
          YouTube ↗
        </a>
        <a href="https://georgiosbalatzis.github.io/BetCastVisualisation/" target="_blank" rel="noopener noreferrer">
          BetCast ↗
        </a>
      </nav>
      <p className="colophon__copyright">© {new Date().getFullYear()} F1 Stories. Με επιφύλαξη παντός δικαιώματος.</p>
      <nav className="colophon__social" aria-label="F1 Stories στα κοινωνικά δίκτυα">
        <a href="https://www.youtube.com/@f1_stories_original" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a href="https://www.facebook.com/f1storiess" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/myf1stories/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@f1stories6" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
        <a href="mailto:myf1stories@gmail.com">Email</a>
      </nav>
      <nav className="colophon__legal" aria-label="Νομικές πληροφορίες">
        <a href={`${SITE}/privacy/privacy.html`}>Πολιτική Απορρήτου</a>
        <a href={`${SITE}/privacy/terms.html`}>Όροι Χρήσης</a>
      </nav>
    </footer>
  );
}
