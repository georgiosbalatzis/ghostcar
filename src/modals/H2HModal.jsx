import { useMemo } from "react";
import { useF1 } from "../theme.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

export default function H2HModal({ mob, year, di1, di2, co1, co2, h2hData, progress, onClose, inline }) {
  const F1 = useF1();
  const progressPct = progress?.total ? (progress.checked / progress.total) * 100 : 0;
  const progressActive = progress?.total > 0 && progress.checked < progress.total;
  const chartData = useMemo(() => {
    if (!h2hData?.length) return null;
    let maxD = 0;
    let wins1 = 0;
    let wins2 = 0;
    const rows = h2hData.map((row, index) => {
      const d = row.t1 - row.t2;
      if (d < 0) wins1++;
      else if (d > 0) wins2++;
      const abs = Math.abs(d);
      if (abs > maxD) maxD = abs;
      return {
        gp: row.gp,
        delta: d,
        y: index * 32 + 16,
      };
    });
    const scale = maxD || 1;
    return {
      wins1,
      wins2,
      rows: rows.map((row) => ({
        ...row,
        barW: (Math.abs(row.delta) / scale) * 100,
      })),
    };
  }, [h2hData]);
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
        <button aria-label="Close head to head" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
        {!!progress?.total && (
          <div style={{ marginBottom: 12, padding: "10px 12px", borderRadius: 8, background: F1.cardBg, border: `1px solid ${F1.borderLight}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 6, fontSize: 10, color: F1.textDim, fontFamily: F1.mono }}>
              <span>{progressActive ? `Checking ${progress.currentGp?.replace("Grand Prix", "GP") || "qualifying sessions"}...` : "Head-to-head scan complete"}</span>
              <span>{progress.checked}/{progress.total}</span>
            </div>
            <div style={{ height: 4, background: F1.borderLight, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progressPct}%`, background: F1.blue, borderRadius: 4, transition: "width .25s ease" }} />
            </div>
            <div style={{ marginTop: 6, fontSize: 10, color: F1.textMuted }}>
              {progress.found || 0} comparable qualifying sessions found so far.
            </div>
          </div>
        )}
        {!h2hData ? (
          <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>Fetching qualifying data across GPs<span style={{ animation: "pulse 1s infinite" }}>...</span></div>
        ) : h2hData.length === 0 ? (
          <div style={{ textAlign: "center", padding: 20, color: F1.textDim }}>No qualifying data found</div>
        ) : (<>
          <svg width="100%" height={h2hData.length * 32 + 20} viewBox={`0 0 300 ${h2hData.length * 32 + 20}`} style={{ display: "block" }}>
            {chartData?.rows.map((row, index) => {
              const tie = row.delta === 0;
              return (<g key={index}>
                <text x="2" y={row.y + 4} fill={F1.textDim} fontSize="9" fontFamily="sans-serif">{row.gp}</text>
                <rect x={150} y={row.y - 5} width={row.delta < 0 ? row.barW : 0} height={10} fill={co1} opacity="0.7" rx="2" transform={row.delta < 0 ? `translate(${-row.barW},0)` : ""} />
                <rect x={150} y={row.y - 5} width={row.delta > 0 ? row.barW : 0} height={10} fill={co2} opacity="0.7" rx="2" />
                <text x={150} y={row.y + 4} textAnchor="middle" fill={tie ? F1.textMuted : F1.text} fontSize="8" fontWeight="700" fontFamily="sans-serif">{row.delta > 0 ? "+" : ""}{row.delta.toFixed(3)}</text>
              </g>);
            })}
          </svg>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 8, fontSize: 11, fontFamily: F1.mono }}>
            <span style={{ color: co1, fontWeight: 700 }}>{di1?.name_acronym}: {chartData?.wins1 || 0}</span>
            <span style={{ color: F1.textMuted }}>wins</span>
            <span style={{ color: co2, fontWeight: 700 }}>{di2?.name_acronym}: {chartData?.wins2 || 0}</span>
          </div>
        </>)}
      </div>
    </div>
  );
}
