import { useCallback, useRef, useState } from "react";
import { useF1 } from "../theme.js";
import { encodeURL } from "../helpers.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

export default function EmbedModal({ mob, shareState, onClose }) {
  const F1 = useF1();
  const [copyState, setCopyState] = useState("");
  const textareaRef = useRef(null);
  const embedUrl = encodeURL({ ...shareState, embed: 1 });
  const embedCode = `<iframe src="${embedUrl}" width="100%" height="650" frameborder="0" style="border-radius:12px;border:1px solid #E1060033;background:#15151e" allowfullscreen loading="lazy"></iframe>`;
  const handleCopy = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(embedCode);
      setCopyState("COPIED");
      return;
    } catch {}
    const node = textareaRef.current;
    if (!node) {
      setCopyState("SELECT");
      return;
    }
    node.focus();
    node.select();
    try {
      const didCopy = document.execCommand?.("copy");
      setCopyState(didCopy ? "COPIED" : "SELECT");
    } catch {
      setCopyState("SELECT");
    }
  }, [embedCode]);

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 560, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div><div style={{ fontWeight: 900, fontSize: 16 }}>INTEGRATION HUB</div><div style={{ fontSize: 10, color: F1.textMuted }}>Embed, share & publish</div></div>
        <button aria-label="Close integration hub" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "16px 20px 20px" }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: F1.blue, letterSpacing: "0.08em", marginBottom: 6 }}>EMBED IFRAME</div>
          <textarea ref={textareaRef} readOnly value={embedCode} style={{ width: "100%", height: 70, background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 6, padding: 8, fontFamily: F1.mono, fontSize: 10, resize: "none" }} onClick={(e) => e.target.select()} />
          <button onClick={handleCopy} className="f1-btn" style={{ marginTop: 6, padding: "5px 14px", fontSize: 10 }}>{copyState || "COPY"}</button>
          {copyState === "SELECT" && <div style={{ marginTop: 6, fontSize: 10, color: F1.textDim }}>Clipboard access was blocked. The embed code is selected so you can copy it manually.</div>}
        </div>
      </div>
    </div>
  );
}
