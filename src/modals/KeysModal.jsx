import { getF1 } from "../theme.js";

const SHORTCUTS = [
  ["Space", "Play / Pause"], ["R", "Reset to start"], ["T", "Toggle telemetry"],
  ["C", "Cycle camera mode"], ["L", "Toggle loop"], ["← →", "Scrub ±1%"],
  ["←← (double-tap)", "Rewind 5%"], ["D", "Toggle theme"], ["?", "This overlay"], ["Esc", "Close overlays"],
];

export default function KeysModal({ mob, onClose }) {
  const F1 = getF1();
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 24, zIndex: 100, width: mob ? "92%" : 380, animation: "fadeIn .2s" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>KEYBOARD SHORTCUTS</span>
        <button onClick={onClose} style={{ marginLeft: "auto" }}>✕</button>
      </div>
      {SHORTCUTS.map(([k, d]) => (
        <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${F1.borderLight}` }}>
          <kbd style={{ background: F1.cardBg, padding: "2px 8px", borderRadius: 3, fontFamily: F1.mono, fontSize: 11, fontWeight: 700, color: F1.red, border: `1px solid ${F1.border}` }}>{k}</kbd>
          <span style={{ fontSize: 12, color: F1.textDim }}>{d}</span>
        </div>
      ))}
    </div>
  );
}
