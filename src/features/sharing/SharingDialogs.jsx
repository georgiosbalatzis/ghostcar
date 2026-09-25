import { useState } from "react";
import Dialog from "../../components/ui/Dialog.jsx";
import { IconButton } from "../../components/ui/Icon.jsx";
import { encodeURL } from "../../helpers.js";
import "./sharing.css";

function CopyField({ value, multiline, onCopy, label }) {
  const [state, setState] = useState("");
  const copy = async (event) => {
    const field = event.currentTarget.parentElement.querySelector(".input");
    try {
      await onCopy(value);
      setState("Αντιγράφηκε");
    } catch {
      field.focus();
      field.select();
      setState("Αντίγραψε με Ctrl/⌘ + C");
    }
  };
  const Field = multiline ? "textarea" : "input";
  return (
    <div className="copy-field">
      <Field
        className="input"
        readOnly
        value={value}
        aria-label={label}
        rows={multiline ? 4 : undefined}
        onFocus={(event) => event.target.select()}
      />
      <div className="copy-field__actions">
        <button type="button" className="btn btn--primary" onClick={copy}>
          Αντιγραφή
        </button>
        <span className="copy-field__state" role="status">
          {state}
        </span>
      </div>
    </div>
  );
}

// Shown only when the clipboard is unavailable, so the link can still be copied by hand.
export function LinkDialog({ url, onCopy, onClose }) {
  return (
    <Dialog title="Σύνδεσμος σύγκρισης" subtitle="Η αυτόματη αντιγραφή δεν επιτρέπεται εδώ." onClose={onClose}>
      <CopyField value={url} onCopy={onCopy} label="Σύνδεσμος σύγκρισης" />
    </Dialog>
  );
}

// Embeds live on other sites, so a local dev URL would be a dead frame there. The app host is used
// directly: the f1stories.gr/ghostcar/ stub redirects without the query string.
const PUBLIC_APP_URL = "https://georgiosbalatzis.github.io/ghostcar/";
const isLocalHost = () => /^(localhost|127\.|\[::1\]$)/.test(window.location.hostname);

export function EmbedDialog({ shareState, onCopy, onClose }) {
  const src = encodeURL({ ...shareState, embed: 1 }, isLocalHost() ? { baseURL: PUBLIC_APP_URL } : {});
  const code = `<iframe src="${src}" width="100%" height="560" style="border:0" loading="lazy" allowfullscreen title="F1 Stories Ghost Car"></iframe>`;
  return (
    <Dialog
      title="Ενσωμάτωση σε σελίδα"
      subtitle="Αναπαράσταση, διαφορά γύρου και αναπαραγωγή, χωρίς τα εργαλεία ανάλυσης."
      onClose={onClose}
    >
      <CopyField value={code} multiline onCopy={onCopy} label="Κώδικας ενσωμάτωσης" />
    </Dialog>
  );
}

export function SavedDialog({ gallery, onSelect, onRemove, onClear, onClose }) {
  return (
    <Dialog title="Αποθηκευμένες συγκρίσεις" subtitle="Φυλάσσονται μόνο σε αυτόν τον browser." onClose={onClose}>
      {gallery.length === 0 ? (
        <p className="empty-note">
          Δεν έχεις αποθηκεύσει συγκρίσεις ακόμη. Κατά την προβολή, επίλεξε Κοινοποίηση → Αποθήκευση σύγκρισης.
        </p>
      ) : (
        <>
          <ul className="saved-list">
            {gallery.map((entry) => (
              <li key={entry.id} className="saved">
                <button type="button" className="saved__open" onClick={() => onSelect(entry.url)}>
                  <span className="saved__title">
                    {[entry.d1n, entry.d2n, ...(entry.extra || [])].filter(Boolean).join(" – ")}
                    {entry.delta && <span className="num saved__delta"> {entry.delta.replace("-", "−")} s</span>}
                  </span>
                  <span className="saved__meta">
                    {[
                      `${String(entry.gp || "").replace("Grand Prix", "GP")} ${entry.year || ""}`.trim(),
                      entry.session,
                      entry.l1 && entry.l2 ? `Γ${entry.l1} / Γ${entry.l2}` : `${entry.t1} / ${entry.t2}`,
                      new Date(entry.id).toLocaleDateString("el-GR", { day: "numeric", month: "short" }),
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </span>
                </button>
                <IconButton icon="trash" label="Διαγραφή" onClick={() => onRemove(entry.id)} />
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn--link saved__clear" onClick={onClear}>
            Διαγραφή όλων
          </button>
        </>
      )}
    </Dialog>
  );
}

const SHORTCUTS = [
  ["Space", "Αναπαραγωγή / παύση"],
  ["← →", "Μετακίνηση κατά 1% (διπλό ← για 5%)"],
  ["R", "Επιστροφή στην αρχή"],
  ["L", "Επανάληψη"],
  ["V", "Εναλλαγή 2D / 3D"],
  ["C", "Επόμενη κάμερα (3D)"],
  ["T", "Ζωντανά / τηλεμετρία"],
  ["D", "Φωτεινό / σκούρο θέμα"],
  ["?", "Αυτή η λίστα"],
  ["Esc", "Κλείσιμο παραθύρου"],
];

export function ShortcutsDialog({ onClose }) {
  return (
    <Dialog title="Συντομεύσεις πληκτρολογίου" onClose={onClose}>
      <dl className="shortcuts">
        {SHORTCUTS.map(([key, description]) => (
          <div key={key}>
            <dt>
              <kbd>{key}</kbd>
            </dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </Dialog>
  );
}
