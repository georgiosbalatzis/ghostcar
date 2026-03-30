import { memo } from "react";
import { getF1 } from "../theme.js";

const SectorDelta = memo(function SD({ s, t1, t2, c1, c2 }) {
  const F1 = getF1();
  const d = t1 && t2 ? t1 - t2 : null;
  const sC = [F1.green, F1.yellow, F1.red];
  return (
    <div style={{ flex: 1, padding: "5px 8px", background: F1.cardBg, borderRadius: 4, borderTop: `2px solid ${sC[s - 1]}` }}>
      <div style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono, textTransform: "uppercase", letterSpacing: "0.1em" }}>Sector {s}</div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
        <span style={{ fontSize: 12, color: c1, fontFamily: F1.mono, fontWeight: 600 }}>{t1 ? t1.toFixed(3) : "—"}</span>
        <span style={{ fontSize: 12, color: c2, fontFamily: F1.mono, fontWeight: 600 }}>{t2 ? t2.toFixed(3) : "—"}</span>
      </div>
      {d !== null && <div style={{ fontSize: 11, fontWeight: 700, color: d > 0 ? F1.red : F1.green, fontFamily: F1.mono, textAlign: "center", marginTop: 2 }}>{d > 0 ? "+" : ""}{d.toFixed(3)}</div>}
    </div>
  );
});

export default SectorDelta;
