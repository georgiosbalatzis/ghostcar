import { getF1 } from "../theme.js";
import { TIRE_COLORS } from "../constants.js";
import { lerp, norm } from "../helpers.js";
import TelChart from "./TelChart.jsx";

export default function TelemetryPanel({ mob, tp, prog, allDrivers, numDrivers, di1, di2, co1, co2, li1, li2, s1, s2, laps1, st1, sl1 }) {
  const F1 = getF1();

  return (
    <div style={{ padding: mob ? 10 : 14, overflowY: "auto", flex: 1 }}>
      {/* Speedometer gauges */}
      <div style={{ display: "flex", gap: 4, marginBottom: 10, flexWrap: "wrap" }}>
        {allDrivers.map((x, i) => (
          <div key={i} style={{ flex: 1, minWidth: numDrivers > 2 ? 120 : "auto", background: F1.cardBg, borderRadius: 6, padding: numDrivers > 2 ? "6px 6px 4px" : "8px 8px 6px", borderTop: `3px solid ${x.co}`, position: "relative", textAlign: "center" }}>
            <div style={{ fontSize: numDrivers > 2 ? 10 : 12, fontWeight: 900, color: x.co, fontFamily: F1.mono, letterSpacing: "0.05em" }}>{x.di?.name_acronym || "—"}</div>
            <svg width={numDrivers > 2 ? "70" : "90"} height={numDrivers > 2 ? "42" : "55"} viewBox="0 0 90 55" style={{ margin: "2px auto" }}>
              <path d="M 10 50 A 35 35 0 0 1 80 50" fill="none" stroke={F1.border} strokeWidth="4" strokeLinecap="round" />
              <path d="M 10 50 A 35 35 0 0 1 80 50" fill="none" stroke={x.co} strokeWidth="4" strokeLinecap="round" strokeDasharray={`${(Math.min(x.ct.speed, 360) / 360) * 110} 110`} />
              <text x="45" y="42" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900" fontFamily={F1.mono}>{Math.round(x.ct.speed)}</text>
              <text x="45" y="52" textAnchor="middle" fill={F1.textMuted} fontSize="7" fontFamily={F1.mono}>KM/H</text>
            </svg>
            <div style={{ display: "flex", gap: 3, justifyContent: "center", marginTop: 1 }}>
              <div style={{ width: 24, textAlign: "center" }}>
                <div style={{ height: 16, width: 5, margin: "0 auto", background: F1.border, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${x.ct.throttle}%`, background: F1.green, borderRadius: 2, transition: "height 0.1s" }} />
                </div>
                <div style={{ fontSize: 6, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>THR</div>
              </div>
              <div style={{ width: 24, textAlign: "center" }}>
                <div style={{ height: 16, width: 5, margin: "0 auto", background: F1.border, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: 0, width: "100%", height: x.ct.brake > 0 ? "100%" : "0%", background: F1.red, borderRadius: 2, transition: "height 0.1s" }} />
                </div>
                <div style={{ fontSize: 6, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>BRK</div>
              </div>
              <div style={{ width: 24, textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", fontFamily: F1.mono, lineHeight: "16px" }}>{x.ct.n_gear ?? x.ct.gear ?? "—"}</div>
                <div style={{ fontSize: 6, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>GEAR</div>
              </div>
            </div>
            {x.tire && <div style={{ position: "absolute", top: 4, right: 4, display: "flex", alignItems: "center", gap: 2 }}><div style={{ width: 5, height: 5, borderRadius: "50%", background: TIRE_COLORS[x.tire] || "#888" }} /><span style={{ fontSize: 7, fontFamily: F1.mono, color: F1.textMuted }}>{x.tire}</span></div>}
            {x.ct.drs >= 10 && <div style={{ position: "absolute", bottom: 3, right: 4, fontSize: 7, fontWeight: 700, color: F1.green, fontFamily: F1.mono, background: `${F1.green}15`, padding: "1px 3px", borderRadius: 2, animation: "pulse 1s infinite" }}>DRS</div>}
          </div>
        ))}
      </div>

      {/* Elevation */}
      {tp && (
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>ELEVATION</div>
          <svg width="100%" height="40" viewBox="0 0 300 40" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg }}>
            {(() => {
              const ys = tp.map((p) => p.y); const minY = Math.min(...ys), maxY = Math.max(...ys);
              const range = maxY - minY || 1; const step = Math.max(1, Math.floor(tp.length / 150));
              let d = ""; for (let i = 0; i < tp.length; i += step) { const x = (i / (tp.length - 1)) * 300; const y = 38 - ((ys[i] - minY) / range) * 34; d += (i === 0 ? "M" : "L") + `${x},${y}`; }
              return (<><path d={d + `L300,40L0,40Z`} fill={`${F1.red}15`} /><path d={d} fill="none" stroke={F1.red} strokeWidth="1.5" opacity="0.6" /><line x1={prog * 300} y1="0" x2={prog * 300} y2="40" stroke="#fff" strokeWidth="1" opacity="0.5" /></>);
            })()}
          </svg>
        </div>
      )}

      {/* Cumulative sector delta */}
      {li1 && li2 && li1.duration_sector_1 && li2.duration_sector_1 && (() => {
        const s1d = li1.duration_sector_1, s2d = li1.duration_sector_2, s3d = li1.duration_sector_3;
        const s1d2 = li2.duration_sector_1, s2d2 = li2.duration_sector_2, s3d2 = li2.duration_sector_3;
        const d1c = s1d - s1d2, d2c = d1c + (s2d - s2d2), d3c = d2c + (s3d - s3d2);
        const pts = [0, d1c, d2c, d3c]; const maxA = Math.max(...pts.map(Math.abs)) || 0.5;
        return (<div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>LAP DELTA</div>
          <svg width="100%" height="50" viewBox="0 0 300 50" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block" }}>
            <line x1="0" y1="25" x2="300" y2="25" stroke={F1.textMuted} strokeWidth="0.5" opacity="0.3" />
            {pts.map((v, i) => { const x = (i / 3) * 280 + 10; const y = 25 - (v / maxA) * 20; return (<g key={i}>{i > 0 && <line x1={(i - 1) / 3 * 280 + 10} y1={25 - (pts[i - 1] / maxA) * 20} x2={x} y2={y} stroke={v < 0 ? co1 : co2} strokeWidth="2" />}<circle cx={x} cy={y} r="3" fill={v < 0 ? co1 : v > 0 ? co2 : F1.textMuted} />{i > 0 && <text x={x} y={y < 25 ? y - 6 : y + 12} textAnchor="middle" fill={F1.text} fontSize="7" fontFamily="sans-serif" fontWeight="700">{v > 0 ? "+" : ""}{v.toFixed(3)}</text>}</g>); })}
            {["S1", "S2", "S3", "END"].map((l, i) => <text key={l} x={i / 3 * 280 + 10} y="48" textAnchor="middle" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">{l}</text>)}
            <text x="295" y="10" textAnchor="end" fill={co1} fontSize="7">{di1?.name_acronym}</text>
            <text x="295" y="45" textAnchor="end" fill={co2} fontSize="7">{di2?.name_acronym}</text>
          </svg>
        </div>);
      })()}

      {/* Speed traps */}
      {s1?.length > 10 && s2?.length > 10 && (() => {
        const traps = [0.1, 0.25, 0.5, 0.75, 0.9]; const labels = ["T1 10%", "T2 25%", "T3 50%", "T4 75%", "T5 90%"];
        return (<div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>SPEED TRAPS</div>
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {traps.map((t, i) => { const v1 = s1[Math.floor(t * (s1.length - 1))] || 0; const v2 = s2[Math.floor(t * (s2.length - 1))] || 0; const faster = v1 > v2 ? 1 : v2 > v1 ? 2 : 0;
              return (<div key={i} style={{ flex: 1, minWidth: 48, background: F1.cardBg, borderRadius: 3, padding: "3px 4px", textAlign: "center" }}>
                <div style={{ fontSize: 7, color: F1.textMuted, fontFamily: F1.mono }}>{labels[i]}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: faster === 1 ? co1 : faster === 2 ? co2 : F1.text, fontFamily: F1.mono }}>{Math.round(v1)}</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: faster === 2 ? co2 : faster === 1 ? co1 : F1.text, fontFamily: F1.mono, opacity: 0.7 }}>{Math.round(v2)}</div>
              </div>); })}
          </div>
        </div>);
      })()}

      {/* Sector indicator */}
      {tp && (() => {
        const sIdx = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
        const sColors = ["#00d26a", "#ffd700", "#9b59b6"]; const sLabels = ["SECTOR 1", "SECTOR 2", "SECTOR 3"];
        return (<div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
          {[0, 1, 2].map((s) => (<div key={s} style={{ flex: 1, padding: "4px 0", textAlign: "center", borderRadius: 3, background: s === sIdx ? sColors[s] + "22" : F1.cardBg, border: s === sIdx ? `1px solid ${sColors[s]}55` : `1px solid transparent`, transition: "all 0.3s" }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: s === sIdx ? sColors[s] : F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em" }}>{sLabels[s]}</div>
            {s === sIdx && <div style={{ width: 6, height: 6, borderRadius: "50%", background: sColors[s], margin: "3px auto 0", boxShadow: `0 0 8px ${sColors[s]}` }} />}
          </div>))}
        </div>);
      })()}

      {/* Tire degradation */}
      {laps1.length > 3 && (() => {
        const validLaps = laps1.filter((l) => l.lap_duration > 10 && l.lap_duration < 200).sort((a, b) => a.lap_number - b.lap_number);
        if (validLaps.length < 3) return null;
        const best = Math.min(...validLaps.map((l) => l.lap_duration)); const maxDeg = Math.max(...validLaps.map((l) => l.lap_duration - best));
        return (<div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>TIRE DEG</div>
          <svg width="100%" height="35" viewBox="0 0 300 35" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block" }}>
            {validLaps.map((l, i) => { const x = (i / (validLaps.length - 1)) * 290 + 5; const deg = l.lap_duration - best; const y = 30 - (deg / (maxDeg || 1)) * 25;
              const tire = st1.find((s) => l.lap_number >= s.lap_start && l.lap_number <= s.lap_end)?.compound?.toUpperCase();
              const tc = tire === "SOFT" ? "#ff3333" : tire === "MEDIUM" ? "#ffcc00" : tire === "HARD" ? "#ccc" : co1;
              return (<g key={i}>{i > 0 && <line x1={(((i - 1) / (validLaps.length - 1)) * 290 + 5)} y1={30 - ((validLaps[i - 1].lap_duration - best) / (maxDeg || 1)) * 25} x2={x} y2={y} stroke={tc} strokeWidth="1.5" opacity="0.7" />}<circle cx={x} cy={y} r={l.lap_number === sl1 ? 3 : 1.5} fill={l.lap_number === sl1 ? "#fff" : tc} /></g>); })}
            <text x="5" y="10" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">+{maxDeg.toFixed(1)}s</text>
            <text x="5" y="32" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">best</text>
          </svg>
        </div>);
      })()}

      {/* Telemetry charts */}
      <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>SPEED <span style={{ color: F1.textMuted, fontWeight: 400 }}>(km/h)</span></div>
      <TelChart traces={allDrivers.map((d) => ({ data: d.s, color: d.co }))} maxVal={370} prog={prog} />
      <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>THROTTLE <span style={{ color: F1.textMuted, fontWeight: 400 }}>(%)</span></div>
      <TelChart traces={allDrivers.map((d) => ({ data: d.t, color: d.co }))} maxVal={100} prog={prog} fillColor={`${F1.green}10`} />
      <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>BRAKE</div>
      <TelChart traces={allDrivers.map((d) => ({ data: d.b, color: d.co }))} maxVal={100} h={35} prog={prog} fillColor={`${F1.red}10`} />
    </div>
  );
}
