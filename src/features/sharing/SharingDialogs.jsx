import { useMemo, useState } from "react";
import Dialog from "../../components/ui/Dialog.jsx";
import { IconButton } from "../../components/ui/Icon.jsx";
import { encodeURL } from "../../helpers.js";
import { buildFigureAnalysis, FIGURE_VIEWS, projectLandmarks } from "../../domain/figureAnalysis.js";
import baku from "../../domain/bakuLandmarks.json";
import FigureRangeControls from "../analysis/FigureRangeControls.jsx";
import "./sharing.css";

function CopyField({ value, multiline, onCopy, label }) {
  const [state, setState] = useState("");
  const copy = async (event) => {
    const field = event.currentTarget.closest(".copy-field").querySelector(".input");
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
        <button type="button" className="btn btn--ink" onClick={copy}>
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

export function EmbedDialog({ shareState, model, onCopy, onClose }) {
  const [view, setView] = useState(shareState.figure || "replay");
  const [fixed, setFixed] = useState(Boolean(shareState.fixed));
  const [from, setFrom] = useState(shareState.from ?? "");
  const [to, setTo] = useState(shareState.to ?? "");
  const analysis = useMemo(() => buildFigureAnalysis(model), [model]);
  const landmarks = useMemo(
    () =>
      /baku/i.test(model?.meeting?.circuit_short_name || model?.meetingName || "")
        ? projectLandmarks(analysis, baku.corners)
        : [],
    [analysis, model]
  );
  const src = encodeURL(
    {
      ...shareState,
      embed: 1,
      figure: view === "replay" ? null : view,
      from,
      to,
      fixed,
      tab: view === "replay" ? shareState.tab : "sectors",
    },
    isLocalHost() ? { baseURL: PUBLIC_APP_URL } : {}
  );
  // The frame's own background matches the embed's theme, so there is no flash of another colour while it loads.
  const background = shareState.theme === "dark" ? "#1b1a19" : "#f2eee4";
  const code = `<iframe src="${src}" width="100%" height="${view === "replay" ? 560 : 960}" style="border:0;background:${background}" loading="lazy" allowfullscreen title="F1 Stories Ghost Car${view === "replay" ? "" : ` · ${FIGURE_VIEWS.find((item) => item.id === view).label}`}"></iframe>`;
  return (
    <Dialog
      title="Ενσωμάτωση σε σελίδα"
      subtitle="Διάλεξε τι θα εμφανίζεται μέσα στο άρθρο. Οι γύροι είναι αυτοί της φορτωμένης σύγκρισης."
      onClose={onClose}
    >
      <div className="embed-options">
        <label htmlFor="embed-view">
          Προβολή ενσωμάτωσης
          <select id="embed-view" className="input" value={view} onChange={(event) => setView(event.target.value)}>
            <option value="replay">Αναπαράσταση γύρων</option>
            {FIGURE_VIEWS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        {view === "telemetry" && analysis.reliable && (
          <>
            <FigureRangeControls
              landmarks={landmarks}
              length={analysis.length}
              options={{ from, to }}
              onChange={(patch) => {
                if ("from" in patch) setFrom(patch.from ?? "");
                if ("to" in patch) setTo(patch.to ?? "");
              }}
            />
            {landmarks.length > 0 && (
              <p className="figure-note">* Οι έξοδοι στροφών είναι προσεγγιστικές: δείκτες {baku.year} +50 m.</p>
            )}
          </>
        )}
        {view !== "replay" && (
          <label className="embed-options__switch">
            <input type="checkbox" checked={!fixed} onChange={(event) => setFixed(!event.target.checked)} />Ο αναγνώστης
            μπορεί να αλλάζει γράφημα και τμήμα
          </label>
        )}
      </div>
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
  ["← →", "Μετακίνηση κατά 1 δευτερόλεπτο (διπλό ← για 5)"],
  ["R", "Επιστροφή στην αρχή"],
  ["L", "Επανάληψη"],
  ["V", "Εναλλαγή 2D / 3D"],
  ["C", "Επόμενη κάμερα: επισκόπηση, κάτοψη, ακολούθηση, onboard, τηλεοπτική (3D)"],
  ["1–4", "Κάμερα στον οδηγό 1–4 (3D)"],
  ["F", "Προσαρμογή της κάμερας στην πίστα (3D)"],
  ["T", "Μετάβαση στην τηλεμετρία"],
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
