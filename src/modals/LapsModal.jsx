import { getF1 } from "../theme.js";
import { fmt } from "../helpers.js";

export default function LapsModal({ mob, drivers, onClose, inline }) {
  const F1 = getF1();
  const wrapStyle = inline
    ? { background: F1.carbon, display: "flex", flexDirection: "column", height: "100%", animation: "fadeIn .2s" }
    : { position: "fixed", top: 0, right: 0, bottom: 0, width: mob ? "100%" : 380, background: F1.carbon, borderLeft: `1px solid ${F1.red}22`, zIndex: 100, display: "flex", flexDirection: "column", animation: "fadeIn .2s" };
  return (
    <div style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <span style={{ fontWeight: 700, fontSize: 14, fontFamily: F1.sans, letterSpacing: "0.05em" }}>LAP TIMES</span>
        <button onClick={onClose} style={{ marginLeft: "auto" }}>✕</button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
        {drivers.map((drv) => {
          const vl = drv.laps.filter((l) => l.lap_duration > 10);
          const best = vl.length ? Math.min(...vl.map((l) => l.lap_duration)) : 0;
          const worst = vl.length ? Math.max(...vl.map((l) => l.lap_duration)) : 0;
          return (
            <div key={drv.lab} style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: drv.col, marginBottom: 8, fontFamily: F1.mono, letterSpacing: "0.1em", borderLeft: `3px solid ${drv.col}`, paddingLeft: 8 }}>{drv.lab}</div>
              {vl.sort((a, b) => a.lap_duration - b.lap_duration).map((l) => {
                const pct = worst > best ? (l.lap_duration - best) / (worst - best) : 0;
                return (
                  <div key={l.lap_number} onClick={() => drv.set(l.lap_number)} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 8px", borderRadius: 4, cursor: "pointer", background: l.lap_number === drv.sel ? `${drv.col}18` : "transparent", borderLeft: l.lap_number === drv.sel ? `2px solid ${drv.col}` : "2px solid transparent", marginBottom: 2, fontSize: 12, fontFamily: F1.mono }}>
                    <span style={{ width: 30, color: F1.textMuted }}>L{l.lap_number}</span>
                    <span style={{ fontWeight: l.lap_duration === best ? 800 : 400, color: l.lap_duration === best ? F1.green : F1.text }}>{fmt(l.lap_duration)}</span>
                    {l.lap_duration === best && <span style={{ fontSize: 9, color: F1.green, fontWeight: 700, background: `${F1.green}15`, padding: "1px 5px", borderRadius: 3 }}>P1</span>}
                    <div style={{ marginLeft: "auto", width: 36, height: 3, background: F1.borderLight, borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(1 - pct) * 100}%`, background: pct < 0.1 ? F1.green : pct > 0.7 ? F1.red : F1.yellow, borderRadius: 2 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
