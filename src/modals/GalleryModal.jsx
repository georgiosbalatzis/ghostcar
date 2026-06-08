import { useF1 } from "../theme.js";
import { controlButtonStyle } from "../ui/styles.js";
import {
  getModalBodyStyle,
  getModalCloseButtonStyle,
  getModalHeaderStyle,
  getModalSurfaceStyle,
} from "./modalStyles.js";

export default function GalleryModal({ mob, gallery, onClose, onClear, onSelect }) {
  const F1 = useF1();
  return (
    <div style={getModalSurfaceStyle(F1, { mob, width: 500, maxHeight: "80vh" })}>
      <div style={getModalHeaderStyle(F1)}>
        <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>ΣΥΛΛΟΓΗ ΣΥΓΚΡΙΣΕΩΝ</span>
        <button aria-label="Κλείσιμο συλλογής συγκρίσεων" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      <div style={getModalBodyStyle({ overflow: undefined, overflowY: "auto", padding: "12px 20px 20px" })}>
        {gallery.length === 0 ? (
          <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>
            Δεν υπάρχουν αποθηκευμένες συγκρίσεις ακόμη.
          </div>
        ) : (
          gallery.map((g) => (
            <div
              key={g.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                marginBottom: 4,
                background: F1.cardBg,
                borderRadius: 6,
                cursor: "pointer",
                borderLeft: `3px solid ${g.c1}`,
              }}
              onClick={() => {
                onSelect?.(g.url);
                onClose();
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, fontFamily: F1.mono }}>
                  <span style={{ color: g.c1 }}>{g.d1n}</span> <span style={{ color: F1.textMuted }}>εναντίον</span>{" "}
                  <span style={{ color: g.c2 }}>{g.d2n}</span>
                </div>
                <div style={{ fontSize: 10, color: F1.textDim, marginTop: 2 }}>
                  {g.gp?.replace("Grand Prix", "GP")} {g.year}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, fontFamily: F1.mono, color: F1.textDim }}>
                  {g.t1} / {g.t2}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    fontFamily: F1.mono,
                    color: parseFloat(g.delta) > 0 ? F1.red : F1.green,
                  }}
                >
                  {parseFloat(g.delta) > 0 ? "+" : ""}
                  {g.delta}s
                </div>
              </div>
            </div>
          ))
        )}
        {gallery.length > 0 && (
          <button
            onClick={onClear}
            style={{
              marginTop: 8,
              ...controlButtonStyle({ padding: "5px 12px", fontSize: 10, color: F1.textMuted }),
            }}
          >
            Καθαρισμός όλων
          </button>
        )}
      </div>
    </div>
  );
}
