import { getF1 } from "../theme.js";

export default function H2HModal({ mob, year, di1, di2, co1, co2, h2hData, onClose, inline }) {
  const F1 = getF1();
  const wrapStyle = inline
    ? { background: F1.carbon, display: "flex", flexDirection: "column", height: "100%", animation: "fadeIn .2s" }
    : { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 480, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" };
  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>HEAD-TO-HEAD {year}</div>
          <div style={{ fontSize: 10, color: F1.textMuted }}>{di1?.name_acronym || "D1"} vs {di2?.name_acronym || "D2"} — Qualifying</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto" }}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
        {!h2hData ? (
          <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>Fetching qualifying data across GPs<span style={{ animation: "pulse 1s infinite" }}>...</span></div>
        ) : h2hData.length === 0 ? (
          <div style={{ textAlign: "center", padding: 20, color: F1.textDim }}>No qualifying data found</div>
        ) : (<>
          <svg width="100%" height={h2hData.length * 32 + 20} viewBox={`0 0 300 ${h2hData.length * 32 + 20}`} style={{ display: "block" }}>
            {h2hData.map((r, i) => {
              const d = r.t1 - r.t2; const maxD = Math.max(...h2hData.map((x) => Math.abs(x.t1 - x.t2))) || 1;
              const barW = Math.abs(d) / maxD * 100; const y = i * 32 + 16;
              return (<g key={i}>
                <text x="2" y={y + 4} fill={F1.textDim} fontSize="9" fontFamily="sans-serif">{r.gp}</text>
                <rect x={150} y={y - 5} width={d < 0 ? barW : 0} height={10} fill={co1} opacity="0.7" rx="2" transform={d < 0 ? `translate(${-barW},0)` : ""} />
                <rect x={150} y={y - 5} width={d > 0 ? barW : 0} height={10} fill={co2} opacity="0.7" rx="2" />
                <text x={150} y={y + 4} textAnchor="middle" fill={F1.text} fontSize="8" fontWeight="700" fontFamily="sans-serif">{d > 0 ? "+" : ""}{d.toFixed(3)}</text>
              </g>);
            })}
          </svg>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 8, fontSize: 11, fontFamily: F1.mono }}>
            <span style={{ color: co1, fontWeight: 700 }}>{di1?.name_acronym}: {h2hData.filter((r) => r.t1 < r.t2).length}</span>
            <span style={{ color: F1.textMuted }}>wins</span>
            <span style={{ color: co2, fontWeight: 700 }}>{di2?.name_acronym}: {h2hData.filter((r) => r.t2 < r.t1).length}</span>
          </div>
        </>)}
      </div>
    </div>
  );
}
