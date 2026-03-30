import { getF1 } from "../theme.js";
import { fmt } from "../helpers.js";

export default function DashModal({ mob, year, di1, di2, co1, co2, dashData, onClose, inline }) {
  const F1 = getF1();
  const wrapStyle = inline
    ? { background: F1.carbon, display: "flex", flexDirection: "column", height: "100%", animation: "fadeIn .2s" }
    : { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 600, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" };
  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>SEASON DASHBOARD {year}</div>
          <div style={{ fontSize: 10, color: F1.textMuted }}>{di1?.name_acronym || "D1"} vs {di2?.name_acronym || "D2"} — Qualifying overview</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto" }}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
        {!dashData ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>Fetching season data<span style={{ animation: "pulse 1s infinite" }}>...</span></div>
        : dashData.length === 0 ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim }}>No data found</div>
        : (<>
          {(() => {
            const w1 = dashData.filter((r) => r.d < 0).length, w2 = dashData.filter((r) => r.d > 0).length;
            const pct1 = dashData.length ? (w1 / dashData.length * 100) : 50;
            return (<div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontFamily: F1.mono, marginBottom: 4 }}>
                <span style={{ color: co1, fontWeight: 900 }}>{di1?.name_acronym} {w1}</span>
                <span style={{ color: F1.textMuted, fontSize: 10 }}>QUALIFYING WINS</span>
                <span style={{ color: co2, fontWeight: 900 }}>{w2} {di2?.name_acronym}</span>
              </div>
              <div style={{ display: "flex", height: 8, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: `${pct1}%`, background: co1, transition: "width 0.5s" }} />
                <div style={{ flex: 1, background: co2 }} />
              </div>
            </div>);
          })()}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: F1.mono }}>
            <thead><tr style={{ color: F1.textMuted, fontSize: 9, letterSpacing: "0.1em" }}>
              <th style={{ textAlign: "left", padding: "6px 4px" }}>GP</th>
              <th style={{ textAlign: "center", padding: "6px 4px", color: co1 }}>{di1?.name_acronym}</th>
              <th style={{ textAlign: "center", padding: "6px 4px", color: co2 }}>{di2?.name_acronym}</th>
              <th style={{ textAlign: "center", padding: "6px 4px" }}>GAP</th>
              <th style={{ textAlign: "center", padding: "6px 4px" }}>WINNER</th>
            </tr></thead>
            <tbody>{dashData.map((r, i) => {
              const winner = r.d < 0 ? 1 : r.d > 0 ? 2 : 0;
              return (<tr key={i} style={{ borderBottom: `1px solid ${F1.borderLight}` }}>
                <td style={{ padding: "6px 4px", color: F1.textDim, fontSize: 10 }}>{r.gp}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", fontWeight: winner === 1 ? 800 : 400, color: winner === 1 ? co1 : F1.text }}>{fmt(r.t1)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", fontWeight: winner === 2 ? 800 : 400, color: winner === 2 ? co2 : F1.text }}>{fmt(r.t2)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center", color: winner === 1 ? co1 : co2, fontWeight: 700 }}>{r.d > 0 ? "+" : ""}{r.d.toFixed(3)}</td>
                <td style={{ padding: "6px 4px", textAlign: "center" }}><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: winner === 1 ? co1 : co2 }} /></td>
              </tr>);
            })}</tbody>
          </table>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 6, fontWeight: 700 }}>MOMENTUM</div>
            <svg width="100%" height="60" viewBox="0 0 400 60" preserveAspectRatio="none" style={{ borderRadius: 4, background: F1.cardBg }}>
              <line x1="0" y1="30" x2="400" y2="30" stroke={F1.textMuted} strokeWidth="0.5" opacity="0.3" />
              {dashData.map((r, i) => {
                const x = dashData.length > 1 ? (i / (dashData.length - 1)) * 380 + 10 : 200;
                let cum = 0; for (let j = 0; j <= i; j++) cum += dashData[j].d < 0 ? 1 : -1;
                const maxCum = Math.max(3, ...dashData.map((_, idx) => { let c = 0; for (let j = 0; j <= idx; j++) c += dashData[j].d < 0 ? 1 : -1; return Math.abs(c); }));
                const y = 30 - (cum / maxCum) * 25;
                return (<g key={i}>
                  {i > 0 && (() => { let prevCum = 0; for (let j = 0; j < i; j++) prevCum += dashData[j].d < 0 ? 1 : -1; const px = ((i - 1) / (dashData.length - 1)) * 380 + 10; const py = 30 - (prevCum / maxCum) * 25; return <line x1={px} y1={py} x2={x} y2={y} stroke={cum > 0 ? co1 : co2} strokeWidth="2" />; })()}
                  <circle cx={x} cy={y} r="3" fill={r.d < 0 ? co1 : co2} />
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
