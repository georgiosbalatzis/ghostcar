import { memo } from "react";
import Icon from "../components/ui/Icon.jsx";
import Menu from "../components/ui/Menu.jsx";
import "./app.css";

function Brand() {
  return (
    <div className="brand">
      <a className="brand__publisher" href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer">
        F1 Stories
      </a>
      <span className="brand__product">Ghost Car</span>
    </div>
  );
}

// Secondary destinations and preferences. Shared by both header variants.
function moreGroups({ actions, isDark, showreel, season }) {
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
          label: isDark ? "Φωτεινό θέμα" : "Σκούρο θέμα",
          icon: isDark ? "sun" : "moon",
          hint: "D",
          onSelect: actions.toggleTheme,
        },
        {
          label: showreel ? "Διακοπή αυτόματης προβολής" : "Αυτόματη προβολή",
          icon: "film",
          onSelect: actions.toggleShowreel,
        },
        {
          label: "Συντομεύσεις πληκτρολογίου",
          icon: "keyboard",
          hint: "?",
          onSelect: () => actions.openDialog("shortcuts"),
        },
      ],
    },
  ];
}

export const BuilderHeader = memo(function BuilderHeader({ actions, isDark, showreel }) {
  return (
    <header className="app-header">
      <Brand />
      <div className="app-header__actions">
        <Menu label="Περισσότερα" trigger={<Icon name="more" />} groups={moreGroups({ actions, isDark, showreel })} />
      </div>
    </header>
  );
});

export const WorkspaceHeader = memo(function WorkspaceHeader({
  actions,
  isDark,
  showreel,
  eventLabel,
  sessionLabel,
  season,
}) {
  return (
    <header className="app-header">
      <Brand />
      <div className="app-header__context">
        <span className="context__event">{eventLabel}</span>
        <span className="context__session">{sessionLabel}</span>
      </div>
      <div className="app-header__actions">
        <button type="button" className="btn header-btn" onClick={actions.editComparison}>
          <Icon name="edit" size={18} />
          <span className="header-btn__label">Αλλαγή σύγκρισης</span>
        </button>
        <Menu
          label="Κοινοποίηση"
          trigger={
            <>
              <Icon name="share" size={18} />
              <span className="header-btn__label">Κοινοποίηση</span>
            </>
          }
          triggerClassName="btn header-btn"
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
        <Menu
          label="Περισσότερα"
          trigger={<Icon name="more" />}
          groups={moreGroups({ actions, isDark, showreel, season })}
        />
      </div>
    </header>
  );
});
