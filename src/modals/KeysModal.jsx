import { useF1 } from "../theme.js";
import { getModalCloseButtonStyle, getModalSurfaceStyle } from "./modalStyles.js";

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
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>
          ΣΥΝΤΟΜΕΥΣΕΙΣ ΠΛΗΚΤΡΟΛΟΓΙΟΥ
        </span>
        <button aria-label="Κλείσιμο συντομεύσεων πληκτρολογίου" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      {SHORTCUTS.map(([k, d]) => (
        <div
          key={k}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            borderBottom: `1px solid ${F1.borderLight}`,
          }}
        >
          <kbd
            style={{
              background: F1.cardBg,
              padding: "2px 8px",
              borderRadius: 3,
              fontFamily: F1.mono,
              fontSize: 11,
              fontWeight: 700,
              color: F1.blue,
              border: `1px solid ${F1.blue}44`,
            }}
          >
            {k}
          </kbd>
          <span style={{ fontSize: 12, color: F1.textDim }}>{d}</span>
        </div>
      ))}
    </div>
  );
}
