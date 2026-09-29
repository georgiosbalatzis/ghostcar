import { memo } from "react";
import { fmt } from "../helpers.js";
import Icon from "../components/ui/Icon.jsx";

// Page opening, as on f1stories.gr /standings/: crumb, "GHOST CAR." display title, and an aside.
// Builder: tagline and a short explanation. Loaded: the event, the drivers and laps, and "change comparison".
function DeskHero({ model, onEdit }) {
  return (
    <section className={model ? "hero hero--loaded" : "hero"} aria-labelledby="hero-title">
      <div className="crumb">
        <span>F1 Stories / Data desk</span>
        <span>Σύγκριση γύρων · OpenF1</span>
      </div>
      <div className="hero__grid">
        <div className="hero__title">
          <h1 id="hero-title" className="display">
            Ghost Car<span className="dot">.</span>
          </h1>
          <p className="hero__sub">
            {model
              ? `${model.meetingName} ${model.year} · ${model.sessionLabel}`
              : "Δύο γύροι, μία πίστα, μέτρο προς μέτρο."}
          </p>
        </div>
        <aside className="hero__aside">
          {model ? (
            <>
              <ul className="hero__drivers" aria-label="Γύροι της σύγκρισης">
                {model.drivers.map((driver) => (
                  <li key={driver.slot} className="ruled-row" style={{ "--c": driver.color }}>
                    <span>
                      {driver.name}
                      <span className="hero__lap"> · Γύρος {driver.lapNumber}</span>
                    </span>
                    <b className="num">{driver.lapDuration ? fmt(driver.lapDuration) : "—"}</b>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn btn--ink hero__edit" onClick={onEdit}>
                <Icon name="edit" size={18} />
                <span className="hero__action-label">Αλλαγή σύγκρισης</span>
                <Icon name="arrow" size={18} />
              </button>
            </>
          ) : (
            <>
              <h2 className="hero__lede">
                Κάθε δέκατο,
                <br />
                μια ιστορία.
              </h2>
              <p className="hero__note">
                Διάλεξε αγώνα, οδηγούς και γύρους. Η αναπαράσταση δείχνει πού κερδίζεται και πού χάνεται ο χρόνος.
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

export default memo(DeskHero);
