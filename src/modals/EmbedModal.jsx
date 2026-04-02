import { getF1 } from "../theme.js";
import { encodeURL } from "../helpers.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

export default function EmbedModal({ mob, year, selMt, selSe, d1, d2, sl1, sl2, onClose }) {
  const F1 = getF1();
  const embedUrl = encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 });
  const embedCode = `<iframe src="${embedUrl}&embed=1" width="100%" height="650" frameborder="0" style="border-radius:12px;border:1px solid #E1060033;background:#15151e" allowfullscreen loading="lazy"></iframe>`;

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 560, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div><div style={{ fontWeight: 900, fontSize: 16 }}>INTEGRATION HUB</div><div style={{ fontSize: 10, color: F1.textMuted }}>Embed, share & publish</div></div>
        <button aria-label="Close integration hub" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "16px 20px 20px" }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: F1.blue, letterSpacing: "0.08em", marginBottom: 6 }}>EMBED IFRAME</div>
          <textarea id="ta-embed" readOnly value={embedCode} style={{ width: "100%", height: 70, background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 6, padding: 8, fontFamily: F1.mono, fontSize: 10, resize: "none" }} onClick={(e) => e.target.select()} />
          <button onClick={() => { document.getElementById("ta-embed")?.select(); document.execCommand("copy"); }} className="f1-btn" style={{ marginTop: 6, padding: "5px 14px", fontSize: 10 }}>COPY</button>
        </div>
      </div>
    </div>
  );
}
