import { useMemo } from "react";
import { useF1 } from "../theme.js";
import { fmt } from "../helpers.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

export default function DashModal({ mob, year, di1, di2, co1, co2, dashData, onClose, inline }) {
  const F1 = useF1();
  const summary = useMemo(() => {
    if (!dashData?.length) return null;
    let w1 = 0;
    let w2 = 0;
    let cumulative = 0;
    let maxAbs = 0;
    const momentum = dashData.map((row, index) => {
      if (row.d < 0) {
        w1++;
        cumulative += 1;
      } else if (row.d > 0) {
        w2++;
        cumulative -= 1;
      }
      const abs = Math.abs(cumulative);
      if (abs > maxAbs) maxAbs = abs;
      const x = dashData.length > 1 ? (index / (dashData.length - 1)) * 380 + 10 : 200;
      return {
        x,
        yRaw: cumulative,
        pointColor: row.d < 0 ? co1 : row.d > 0 ? co2 : F1.textMuted,
        lineColor: cumulative > 0 ? co1 : cumulative < 0 ? co2 : F1.textMuted,
      };
    });
    const maxCum = Math.max(3, maxAbs);
    return {
      w1,
      w2,
      pct1: dashData.length ? (w1 / dashData.length) * 100 : 50,
      momentum: momentum.map((point) => ({
        ...point,
        y: 30 - (point.yRaw / maxCum) * 25,
      })),
    };
  }, [F1.textMuted, co1, co2, dashData]);
  const wrapStyle = inline
    ? { background: F1.carbon, display: "flex", flexDirection: "column", height: "100%", animation: "fadeIn .2s" }
    : { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 600, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" };
  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>ΑΝΑΛΥΣΗ ΣΕΖΟΝ {year}</div>
          <div style={{ fontSize: 10, color: F1.textMuted }}>{di1?.name_acronym || "Ο1"} εναντίον {di2?.name_acronym || "Ο2"} — Εικόνα κατατακτήριων</div>
        </div>
        <button aria-label="Κλείσιμο ανάλυσης σεζόν" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
        {!dashData ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>Ανάκτηση δεδομένων σεζόν<span style={{ animation: "pulse 1s infinite" }}>...</span></div>
        : dashData.length === 0 ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim }}>Δεν βρέθηκαν δεδομένα</div>
        : (<>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontFamily: F1.mono, marginBottom: 4 }}>
              <span style={{ color: co1, fontWeight: 900 }}>{di1?.name_acronym} {summary?.w1 || 0}</span>
              <span style={{ color: F1.textMuted, fontSize: 10 }}>ΝΙΚΕΣ ΣΕ ΚΑΤΑΤΑΚΤΗΡΙΕΣ</span>
              <span style={{ color: co2, fontWeight: 900 }}>{summary?.w2 || 0} {di2?.name_acronym}</span>
            </div>
            <div style={{ display: "flex", height: 8, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: `${summary?.pct1 || 0}%`, background: co1, transition: "width 0.5s" }} />
              <div style={{ flex: 1, background: co2 }} />
            </div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: F1.mono }}>
            <thead><tr style={{ color: F1.textMuted, fontSize: 9, letterSpacing: "0.1em" }}>
              <th style={{ textAlign: "left", padding: "6px 4px" }}>GP</th>
              <th style={{ textAlign: "center", padding: "6px 4px", color: co1 }}>{di1?.name_acronym}</th>
              <th style={{ textAlign: "center", padding: "6px 4px", color: co2 }}>{di2?.name_acronym}</th>
              <th style={{ textAlign: "center", padding: "6px 4px" }}>ΔΙΑΦΟΡΑ</th>
              <th style={{ textAlign: "center", padding: "6px 4px" }}>ΝΙΚΗΤΗΣ</th>
            </tr></thead>
            <tbody>{dashData.map((r, i) => {
              const winner = r.d < 0 ? 1 : r.d > 0 ? 2 : 0;
              const winnerColor = winner === 1 ? co1 : winner === 2 ? co2 : F1.textMuted;
              return (<tr key={i} style={{ borderBottom: `1px solid ${F1.borderLight}` }}>
                <td style={{ padding: "6px 4px", color: F1.textDim, fontSize: 10 }}>{r.gp}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", fontWeight: winner === 1 ? 800 : 400, color: winner === 1 ? co1 : F1.text }}>{fmt(r.t1)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", fontWeight: winner === 2 ? 800 : 400, color: winner === 2 ? co2 : F1.text }}>{fmt(r.t2)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", color: winnerColor, fontWeight: 700 }}>{r.d > 0 ? "+" : ""}{r.d.toFixed(3)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center" }}><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: winnerColor }} /></td>
              </tr>);
            })}</tbody>
          </table>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 6, fontWeight: 700 }}>ΜΟΜΕΝΤΟΥΜ</div>
            <svg width="100%" height="60" viewBox="0 0 400 60" preserveAspectRatio="none" style={{ borderRadius: 4, background: F1.cardBg }}>
              <line x1="0" y1="30" x2="400" y2="30" stroke={F1.textMuted} strokeWidth="0.5" opacity="0.3" />
              {summary?.momentum.map((point, index) => {
                const previous = index > 0 ? summary.momentum[index - 1] : null;
                return (<g key={index}>
                  {previous && <line x1={previous.x} y1={previous.y} x2={point.x} y2={point.y} stroke={point.lineColor} strokeWidth="2" />}
                  <circle cx={point.x} cy={point.y} r="3" fill={point.pointColor} />
                </g>);
              })}
              <text x="5" y="10" fill={co1} fontSize="8" fontFamily="sans-serif">{di1?.name_acronym}</text>
              <text x="5" y="56" fill={co2} fontSize="8" fontFamily="sans-serif">{di2?.name_acronym}</text>
            </svg>
          </div>
        </>)}
      </div>
    </div>
  );
}
