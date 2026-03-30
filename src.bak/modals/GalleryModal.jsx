import { getF1 } from "../theme.js";

export default function GalleryModal({ mob, gallery, onClose, onClear }) {
  const F1 = getF1();
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 500, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>COMPARISON GALLERY</span>
        <button onClick={onClose} style={{ marginLeft: "auto" }}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
        {gallery.length === 0 ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>No saved comparisons yet.</div> : gallery.map((g) => (
          <div key={g.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", marginBottom: 4, background: F1.cardBg, borderRadius: 6, cursor: "pointer", borderLeft: `3px solid ${g.c1}` }} onClick={() => { window.location.href = g.url; onClose(); }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, fontFamily: F1.mono }}>
                <span style={{ color: g.c1 }}>{g.d1n}</span> <span style={{ color: F1.textMuted }}>vs</span> <span style={{ color: g.c2 }}>{g.d2n}</span>
              </div>
              <div style={{ fontSize: 10, color: F1.textDim, marginTop: 2 }}>{g.gp?.replace("Grand Prix", "GP")} {g.year}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, fontFamily: F1.mono, color: F1.textDim }}>{g.t1} / {g.t2}</div>
              <div style={{ fontSize: 13, fontWeight: 900, fontFamily: F1.mono, color: parseFloat(g.delta) > 0 ? F1.red : F1.green }}>{parseFloat(g.delta) > 0 ? "+" : ""}{g.delta}s</div>
            </div>
          </div>
        ))}
        {gallery.length > 0 && <button onClick={onClear} style={{ marginTop: 8, fontSize: 10, color: F1.textMuted }}>Clear all</button>}
      </div>
    </div>
  );
}
