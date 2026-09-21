import { memo, useMemo } from "react";
import { useF1 } from "../theme.js";
import { uiRadii } from "../ui/styles.js";

const TelChart = memo(function TC({ traces, maxVal, h: ch, prog, fillColor }) {
  const F1 = useF1();
  const H = ch || 56,
    plotH = H - 12,
    W = 300;

  const paths = useMemo(
    () =>
      (traces || []).map((tr) => {
        if (!tr.data?.length) return "";
        const step = Math.max(1, Math.floor(tr.data.length / 150));
        let d = "";
        for (let i = 0; i < tr.data.length; i += step) {
          const x = (i / (tr.data.length - 1)) * W;
          const y = plotH - 2 - ((tr.data[i] || 0) / maxVal) * (plotH - 4);
          d += (i === 0 ? "M" : "L") + `${x},${y}`;
        }
        return d;
      }),
    [traces, maxVal, plotH]
  );

  if (!traces?.length) return null;

  return (
    <svg
      width="100%"
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ borderRadius: uiRadii.badge, background: F1.cardBg, display: "block", marginBottom: 2 }}
    >
      <line x1="0" y1={plotH - 1} x2={W} y2={plotH - 1} stroke={F1.borderLight} />
      <line x1="0" y1={plotH / 2} x2={W} y2={plotH / 2} stroke={F1.borderLight} strokeDasharray="2 5" />
      {traces.map((tr, i) => {
        const path = paths[i];
        if (!path) return null;
        const isFirst = i === 0;
        return (
          <g key={i}>
            <path d={path + `L${W},${plotH}L0,${plotH}Z`} fill={isFirst ? fillColor || `${tr.color}10` : `${tr.color}06`} />
            <path
              d={path}
              fill="none"
              stroke={tr.color}
              strokeWidth={isFirst ? 1.5 : 1.2}
              opacity={0.9}
              strokeDasharray={isFirst ? "none" : `${4 + i},${2 + i}`}
            />
          </g>
        );
      })}
      {prog !== undefined && (
        <line x1={prog * W} y1="0" x2={prog * W} y2={plotH} stroke={F1.text} strokeWidth="1" opacity="0.5" />
      )}
      {prog !== undefined &&
        traces.map((tr, i) => {
          if (!tr.data?.length) return null;
          const idx = Math.floor(prog * (tr.data.length - 1));
          const val = tr.data[idx] || 0;
          const y = plotH - 2 - (val / maxVal) * (plotH - 4);
          return <circle key={i} cx={prog * W} cy={y} r={i === 0 ? 2.5 : 2} fill={tr.color} opacity={0.9 - i * 0.15} />;
        })}
      <text x="2" y={H - 2} fill={F1.textMuted} fontSize="7">START</text>
      <text x={W / 2} y={H - 2} textAnchor="middle" fill={F1.textMuted} fontSize="7">50%</text>
      <text x={W - 2} y={H - 2} textAnchor="end" fill={F1.textMuted} fontSize="7">FINISH</text>
    </svg>
  );
});

export default TelChart;
