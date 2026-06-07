import { useCallback, useRef, useState } from "react";
import { useF1 } from "../theme.js";
import { encodeURL } from "../helpers.js";
import { controlButtonStyle, inputControlStyle } from "../ui/styles.js";
import {
  getModalBodyStyle,
  getModalCloseButtonStyle,
  getModalHeaderStyle,
  getModalSurfaceStyle,
} from "./modalStyles.js";

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
      setCopyState("ΑΝΤΙΓΡΑΦΗΚΕ");
      return;
    } catch {}
    const node = textareaRef.current;
    if (!node) {
      setCopyState("ΕΠΙΛΟΓΗ");
      return;
    }
    node.focus();
    node.select();
    try {
      const didCopy = document.execCommand?.("copy");
      setCopyState(didCopy ? "ΑΝΤΙΓΡΑΦΗΚΕ" : "ΕΠΙΛΟΓΗ");
    } catch {
      setCopyState("ΕΠΙΛΟΓΗ");
    }
  }, [embedCode]);

  return (
    <div style={getModalSurfaceStyle(F1, { mob, width: 560 })}>
      <div style={getModalHeaderStyle(F1)}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16 }}>ΚΕΝΤΡΟ ΕΝΣΩΜΑΤΩΣΗΣ</div>
          <div style={{ fontSize: 10, color: F1.textMuted }}>Ενσωμάτωση, κοινοποίηση και δημοσίευση</div>
        </div>
        <button aria-label="Κλείσιμο κέντρου ενσωμάτωσης" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      <div style={getModalBodyStyle({ overflow: undefined, overflowY: "auto", padding: "16px 20px 20px" })}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: F1.blue, letterSpacing: "0.08em", marginBottom: 6 }}>
            IFRAME ΕΝΣΩΜΑΤΩΣΗΣ
          </div>
          <textarea
            ref={textareaRef}
            readOnly
            value={embedCode}
            style={{
              ...inputControlStyle(F1, { width: "100%", borderRadius: 6, padding: 8, fontSize: 10 }),
              height: 70,
              fontFamily: F1.mono,
              resize: "none",
            }}
            onClick={(event) => event.target.select()}
          />
          <button
            onClick={handleCopy}
            className="f1-btn"
            style={{
              marginTop: 6,
              ...controlButtonStyle({ padding: "5px 14px", fontSize: 10, fontWeight: 700 }),
            }}
          >
            {copyState || "ΑΝΤΙΓΡΑΦΗ"}
          </button>
          {copyState === "ΕΠΙΛΟΓΗ" && (
            <div style={{ marginTop: 6, fontSize: 10, color: F1.textDim }}>
              Η πρόσβαση στο clipboard μπλοκαρίστηκε. Ο κώδικας είναι επιλεγμένος για χειροκίνητη αντιγραφή.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
