import { useF1 } from "../theme.js";
import {
  getModalCloseButtonStyle,
  getModalHeaderStyle,
  getModalKeycapStyle,
  getModalListRowStyle,
  getModalSurfaceStyle,
} from "./modalStyles.js";

const SHORTCUTS = [
  ["Space", "Αναπαραγωγή / Παύση"],
  ["R", "Επιστροφή στην αρχή"],
  ["T", "Εναλλαγή τηλεμετρίας"],
  ["V", "Εναλλαγή 2D / 3D"],
  ["C", "Αλλαγή κάμερας"],
  ["L", "Εναλλαγή loop"],
  ["← →", "Μετακίνηση ±1%"],
  ["←← (διπλό πάτημα)", "Πίσω 5%"],
  ["D", "Εναλλαγή θέματος"],
  ["?", "Αυτό το overlay"],
  ["Esc", "Κλείσιμο overlays"],
];

export default function KeysModal({ mob, onClose }) {
  const F1 = useF1();
  return (
    <div
      style={getModalSurfaceStyle(F1, {
        mob,
        width: 380,
        mobileWidth: "92%",
        maxHeight: null,
        padding: 24,
        display: null,
        flexDirection: null,
        overflow: null,
      })}
    >
      <div style={getModalHeaderStyle(F1, { padding: 0, borderBottom: null, marginBottom: 16 })}>
        <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>
          ΣΥΝΤΟΜΕΥΣΕΙΣ ΠΛΗΚΤΡΟΛΟΓΙΟΥ
        </span>
        <button aria-label="Κλείσιμο συντομεύσεων πληκτρολογίου" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      {SHORTCUTS.map(([k, d]) => (
        <div key={k} style={getModalListRowStyle(F1)}>
          <kbd style={getModalKeycapStyle(F1)}>{k}</kbd>
          <span style={{ fontSize: 12, color: F1.textDim }}>{d}</span>
        </div>
      ))}
    </div>
  );
}
