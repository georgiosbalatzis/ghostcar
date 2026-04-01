import { getF1 } from "../theme.js";
import { PRESETS } from "../constants.js";

export default function PresetsModal({ mob, onClose, onLoadPreset }) {
  const F1 = getF1();
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 460, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>MEMORABLE BATTLES</div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>20 iconic qualifying & race comparisons</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto", padding: "4px 10px" }}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px", flex: 1 }}>
        {["2026", "2025", "2024", "2023", "2022", "2021"].map((yr) => {
          const items = PRESETS.filter((p) => p.cat === yr);
          if (!items.length) return null;
          return (
            <div key={yr} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: F1.blue, letterSpacing: "0.12em", marginBottom: 8, fontFamily: F1.mono, borderBottom: `1px solid ${F1.blue}22`, paddingBottom: 4 }}>{yr} SEASON</div>
              {items.map((p, i) => (
                <button key={i} onClick={() => onLoadPreset(p)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 4, fontSize: 12, fontFamily: F1.mono, borderLeft: `3px solid ${F1.blue}`, lineHeight: 1.4 }}>
                  {p.label}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
