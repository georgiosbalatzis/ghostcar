import { memo } from "react";
import { fmt } from "../helpers.js";
import Icon from "../components/ui/Icon.jsx";
import { RACE_DESK_LINKS } from "./siteNav.js";

// Page opening, as on f1stories.gr /standings/: the Race Desk crumb and product switcher, the "GHOST CAR." display
// title with its descriptor, and an aside.
// Builder: tagline and a short explanation. Loaded: the event, the drivers and laps, and "change comparison".
function DeskHero({ model, onEdit, tools }) {
  return (
    <section className={model ? "hero hero--loaded" : "hero"} aria-labelledby="hero-title">
      <div className="crumb">
        <span>F1 Stories / Race Desk</span>
        <nav className="race-desk-nav" aria-label="Race Desk" lang="en">
          {RACE_DESK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href ?? import.meta.env.BASE_URL}
              aria-current={link.current ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="hero__grid">
        <div className="hero__title">
          <h1 id="hero-title" className="display">
            Ghost Car<span className="dot">.</span> <span className="hero__descriptor">Σύγκριση γύρων · OpenF1</span>
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
              <div className="hero__actions">
                <button type="button" className="btn btn--ink hero__edit" onClick={onEdit}>
                  <Icon name="edit" size={18} />
                  <span className="hero__action-label">Αλλαγή σύγκρισης</span>
                  <Icon name="arrow" size={18} />
                </button>
                {/* On phones the tab row's actions sit here, so the four tabs keep the full width. */}
                {tools && <div className="hero__tools">{tools}</div>}
              </div>
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
