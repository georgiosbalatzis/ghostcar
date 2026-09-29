import { memo } from "react";
import { fmt } from "../helpers.js";
import Icon from "../components/ui/Icon.jsx";
import Menu from "../components/ui/Menu.jsx";

// Keyboard shortcuts mean nothing on a touch-only device, so neither the list nor the key hints show there.
const HAS_KEYBOARD = window.matchMedia("(any-pointer: fine)").matches;

function moreGroups({ actions, showreel, season }) {
  return [
    {
      label: "Ανάλυση",
      items: [
        {
          label: `Κατατακτήριες σεζόν ${season?.year ?? ""}`.trim(),
          icon: "chart",
          hint: season?.pair,
          hidden: !season,
          onSelect: () => actions.openDialog("season"),
        },
      ],
    },
    {
      label: "Συγκρίσεις",
      items: [
        { label: "Επιλεγμένες συγκρίσεις", icon: "star", onSelect: () => actions.openDialog("featured") },
        { label: "Αποθηκευμένες συγκρίσεις", icon: "bookmark", onSelect: () => actions.openDialog("saved") },
      ],
    },
    {
      label: "Προβολή",
      items: [
        {
          label: showreel ? "Διακοπή αυτόματης προβολής" : "Αυτόματη προβολή",
          icon: "film",
          onSelect: actions.toggleShowreel,
        },
        {
          label: "Συντομεύσεις πληκτρολογίου",
          icon: "keyboard",
          hint: "?",
          hidden: !HAS_KEYBOARD,
          onSelect: () => actions.openDialog("shortcuts"),
        },
      ],
    },
  ];
}

function WorkspaceActions({ actions, showreel, season }) {
  return (
    <div className="hero__actions">
      <button type="button" className="btn btn--ink hero__edit" onClick={actions.editComparison}>
        <Icon name="edit" size={18} />
        <span className="hero__action-label">Αλλαγή σύγκρισης</span>
      </button>
      <Menu
        label="Κοινοποίηση"
        trigger={
          <>
            <Icon name="share" size={18} />
            <span className="hero__action-label">Κοινοποίηση</span>
          </>
        }
        triggerClassName="btn btn--line hero__share"
        groups={[
          {
            label: "",
            items: [
              { label: "Αντιγραφή συνδέσμου", icon: "link", onSelect: actions.copyLink },
              { label: "Ενσωμάτωση σε σελίδα", icon: "code", onSelect: () => actions.openDialog("embed") },
              { label: "Αποθήκευση σύγκρισης", icon: "bookmark", onSelect: actions.saveComparison },
            ],
          },
          {
            label: "Εξαγωγή",
            items: [
              { label: "Εικόνα πίστας", icon: "image", onSelect: actions.takeScreenshot },
              { label: "Κάρτα κοινοποίησης", icon: "card", onSelect: actions.generateSocialCard },
            ],
          },
        ]}
      />
      <Menu label="Περισσότερα" trigger={<Icon name="more" />} groups={moreGroups({ actions, showreel, season })} />
    </div>
  );
}

// Page opening, as on f1stories.gr /standings/: crumb, "GHOST CAR." display title, and an aside.
// Builder: tagline and a short explanation. Loaded: the event, the drivers and laps, and the comparison actions.
function DeskHero({ model, actions, showreel, season }) {
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
              <WorkspaceActions actions={actions} showreel={showreel} season={season} />
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

// Before anything is loaded there is no ⋯ menu, so these stay reachable as a quiet text row.
export function BuilderUtilities({ actions, showreel }) {
  return (
    <p className="builder-utilities">
      <button type="button" className="btn btn--link" onClick={() => actions.openDialog("saved")}>
        Αποθηκευμένες
      </button>
      <button type="button" className="btn btn--link" onClick={actions.toggleShowreel}>
        {showreel ? "Διακοπή αυτόματης προβολής" : "Αυτόματη προβολή"}
      </button>
      {HAS_KEYBOARD && (
        <button type="button" className="btn btn--link" onClick={() => actions.openDialog("shortcuts")}>
          Συντομεύσεις
        </button>
      )}
    </p>
  );
}

export default memo(DeskHero);
