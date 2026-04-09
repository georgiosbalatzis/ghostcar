import { memo, useMemo } from "react";
import { useF1 } from "../theme.js";

const TelChart = memo(function TC({ traces, maxVal, h: ch, prog, fillColor }) {
  const F1 = useF1();
  if (!traces?.length) return null;
  const H = ch || 45, W = 300;

  // Memoize path strings — only recompute when the data arrays change, not on every prog tick
  const paths = useMemo(() => traces.map((tr) => {
    if (!tr.data?.length) return "";
    const step = Math.max(1, Math.floor(tr.data.length / 150));
    let d = "";
    for (let i = 0; i < tr.data.length; i += step) {
      const x = (i / (tr.data.length - 1)) * W;
      const y = H - 2 - ((tr.data[i] || 0) / maxVal) * (H - 4);
      d += (i === 0 ? "M" : "L") + `${x},${y}`;
    }
    return d;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [traces, maxVal, H]);

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block", marginBottom: 2 }}>
      {traces.map((tr, i) => {
        const path = paths[i];
        if (!path) return null;
        const isFirst = i === 0;
        return (<g key={i}>
          <path d={path + `L${W},${H}L0,${H}Z`} fill={isFirst ? (fillColor || `${tr.color}10`) : `${tr.color}06`} />
          <path d={path} fill="none" stroke={tr.color} strokeWidth={isFirst ? 1.5 : 1.2} opacity={isFirst ? 0.8 : 0.5} strokeDasharray={isFirst ? "none" : `${4 + i},${2 + i}`} />
        </g>);
      })}
      {prog !== undefined && <line x1={prog * W} y1="0" x2={prog * W} y2={H} stroke="#fff" strokeWidth="1" opacity="0.5" />}
      {prog !== undefined && traces.map((tr, i) => {
        if (!tr.data?.length) return null;
        const idx = Math.floor(prog * (tr.data.length - 1));
        const val = tr.data[idx] || 0;
        const y = H - 2 - (val / maxVal) * (H - 4);
        return <circle key={i} cx={prog * W} cy={y} r={i === 0 ? 2.5 : 2} fill={tr.color} opacity={0.9 - i * 0.15} />;
      })}
    </svg>
  );
});

export default TelChart;
