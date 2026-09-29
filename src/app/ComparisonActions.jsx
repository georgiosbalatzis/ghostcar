import Icon from "../components/ui/Icon.jsx";
import Menu from "../components/ui/Menu.jsx";

// Keyboard shortcuts mean nothing on a touch-only device, so neither the list nor the key hints show there.
const HAS_KEYBOARD = window.matchMedia("(any-pointer: fine)").matches;

// Secondary destinations and preferences, in the tab row's ⋯ menu.
function moreGroups({ actions, showreel }) {
  return [
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

// Tab-row actions of a loaded comparison, as on /standings/: share (with exports), embed, and ⋯.
export function TabActions({ actions, showreel }) {
  return (
    <div className="tab-actions">
      <Menu
        label="Κοινοποίηση"
        trigger={
          <>
            <Icon name="share" size={18} />
            <span className="tab-actions__label">Κοινοποίηση</span>
          </>
        }
        triggerClassName="btn btn--line"
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
      <button type="button" className="btn btn--line tab-actions__embed" onClick={() => actions.openDialog("embed")}>
        <Icon name="code" size={18} />
        Ενσωμάτωση
      </button>
      <Menu label="Περισσότερα" trigger={<Icon name="more" />} groups={moreGroups({ actions, showreel })} />
    </div>
  );
}

// Under the builder: the featured comparisons (a dialog), and the utilities that live in ⋯ once a
// comparison is loaded, as a quiet text row.
export function BuilderUtilities({ actions, showreel, presetCount }) {
  return (
    <div className="builder-more">
      <p className="builder-more__presets">
        <span className="kicker">Ή ξεκίνα από έτοιμη σύγκριση</span>
        <button type="button" className="btn btn--link kicker" onClick={() => actions.openDialog("featured")}>
          Επιλεγμένες συγκρίσεις ({presetCount}) →
        </button>
      </p>
      <p className="builder-more__utilities">
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
    </div>
  );
}
