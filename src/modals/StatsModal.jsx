import { memo, useMemo } from "react";
import { useF1 } from "../theme.js";
import { fmt } from "../helpers.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

const StatsModal = memo(function StatsModal({ mob, allDrivers, onClose, inline }) {
  const F1 = useF1();
  const stats = useMemo(() => allDrivers.map((d) => {
    const tel = d.tel || [];
    let topSpd = 0;
    let sumSpd = 0;
    let fullThrottleSamples = 0;
    let brakingSamples = 0;
    for (const sample of tel) {
      const speed = sample.speed || 0;
      if (speed > topSpd) topSpd = speed;
      sumSpd += speed;
      if ((sample.throttle || 0) >= 95) fullThrottleSamples++;
      if ((sample.brake || 0) > 0) brakingSamples++;
    }
    const avgSpd = tel.length ? sumSpd / tel.length : 0;
    const fThr = tel.length ? (fullThrottleSamples / tel.length) * 100 : 0;
    const brk = tel.length ? (brakingSamples / tel.length) * 100 : 0;
    return { lapTime: d.li?.lap_duration, topSpd, avgSpd, fThr, brk, s1: d.li?.duration_sector_1, s2: d.li?.duration_sector_2, s3: d.li?.duration_sector_3, tire: d.tire };
  }), [allDrivers]);
  const rows = useMemo(() => [
    { m: "LAP TIME", vals: stats.map((s) => s.lapTime ? fmt(s.lapTime) : "—"), raw: stats.map((s) => s.lapTime || 999), lower: true },
    { m: "TOP SPEED", vals: stats.map((s) => Math.round(s.topSpd)), raw: stats.map((s) => s.topSpd), lower: false },
    { m: "AVG SPEED", vals: stats.map((s) => Math.round(s.avgSpd)), raw: stats.map((s) => s.avgSpd), lower: false },
    { m: "SECTOR 1", vals: stats.map((s) => s.s1?.toFixed(3) || "—"), raw: stats.map((s) => s.s1 || 999), lower: true },
    { m: "SECTOR 2", vals: stats.map((s) => s.s2?.toFixed(3) || "—"), raw: stats.map((s) => s.s2 || 999), lower: true },
    { m: "SECTOR 3", vals: stats.map((s) => s.s3?.toFixed(3) || "—"), raw: stats.map((s) => s.s3 || 999), lower: true },
    { m: "FULL THROTTLE", vals: stats.map((s) => `${s.fThr.toFixed(1)}%`), raw: stats.map((s) => s.fThr), lower: false },
    { m: "BRAKING", vals: stats.map((s) => `${s.brk.toFixed(1)}%`), raw: stats.map((s) => s.brk), lower: true },
    { m: "TYRE", vals: stats.map((s) => s.tire || "—"), raw: null },
  ].map((row) => {
    if (!row.raw?.length) return { ...row, bestIdx: -1 };
    let bestIdx = 0;
    for (let i = 1; i < row.raw.length; i++) {
      const current = row.raw[i];
      const best = row.raw[bestIdx];
      if (row.lower ? current < best : current > best) bestIdx = i;
    }
    return { ...row, bestIdx };
  }), [stats]);

  const wrapStyle = inline
    ? { background: F1.carbon, display: "flex", flexDirection: "column", height: "100%", animation: "fadeIn .2s" }
    : { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 480, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" };

  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>LAP ANALYSIS</div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>Detailed telemetry comparison</div>
        </div>
        <button aria-label="Close lap analysis" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "0 20px 20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, fontFamily: F1.mono }}>
          <thead><tr style={{ color: F1.textMuted, fontSize: 9, letterSpacing: "0.1em" }}>
            <th style={{ textAlign: "left", padding: "8px 6px", borderBottom: `1px solid ${F1.blue}22` }}>METRIC</th>
            {allDrivers.map((d, i) => <th key={i} style={{ textAlign: "center", padding: "8px 4px", color: d.co, borderBottom: `2px solid ${d.co}44`, fontSize: 10 }}>{d.di?.name_acronym || `D${i+1}`}</th>)}
          </tr></thead>
          <tbody>{rows.map((r) => {
            return (<tr key={r.m} style={{ borderBottom: `1px solid ${F1.borderLight}` }}>
              <td style={{ padding: "6px 6px", color: F1.textDim, fontSize: 9 }}>{r.m}</td>
              {r.vals.map((v, i) => (
                <td key={i} style={{ padding: "6px 4px", textAlign: "center", fontWeight: i === r.bestIdx ? 800 : 400, color: i === r.bestIdx ? allDrivers[i].co : F1.text, background: i === r.bestIdx ? `${allDrivers[i].co}08` : "transparent" }}>{v}</td>
              ))}
            </tr>);
          })}</tbody>
        </table>
      </div>
    </div>
  );
});

export default StatsModal;
