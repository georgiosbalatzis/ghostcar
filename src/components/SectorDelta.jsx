import { memo } from "react";
import { useF1 } from "../theme.js";
import { uiRadii } from "../ui/styles.js";

const SectorDelta = memo(function SD({ s, t1, t2, c1, c2, label1, label2 }) {
  const F1 = useF1();
  const d = t1 && t2 ? t1 - t2 : null;

  const faster1 = d !== null && d < 0;
  const faster2 = d !== null && d > 0;

  return (
    <div
      className="sector-delta"
      style={{
        flex: 1,
        padding: "6px 10px",
        background: F1.cardBg,
        borderRadius: uiRadii.compactCard,
        borderTop: `1px solid ${F1.border}`,
        minWidth: 100,
      }}
    >
      <div
        style={{
          fontSize: 9,
          color: F1.textDim,
          fontFamily: F1.mono,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        S{s}
      </div>
      <div className="sector-times" style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {/* Driver 1 time */}
        <span
          style={{
            fontSize: 12,
            color: c1,
            fontFamily: F1.mono,
            fontWeight: faster1 ? 800 : 500,
            flex: 1,
            textAlign: "left",
          }}
        >
          {t1 ? t1.toFixed(3) : "—"}
        </span>
        {/* Delimiter */}
        <span style={{ width: 1, height: 14, background: `${F1.textMuted}44`, margin: "0 8px", flexShrink: 0 }} />
        {/* Driver 2 time */}
        <span
          style={{
            fontSize: 12,
            color: c2,
            fontFamily: F1.mono,
            fontWeight: faster2 ? 800 : 500,
            flex: 1,
            textAlign: "right",
          }}
        >
          {t2 ? t2.toFixed(3) : "—"}
        </span>
      </div>
      {d !== null && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: d > 0 ? F1.red : F1.green,
            fontFamily: F1.mono,
            textAlign: "center",
            marginTop: 3,
            background: (d > 0 ? F1.red : F1.green) + "10",
            borderRadius: uiRadii.badge,
            padding: "1px 0",
          }}
        >
          <span style={{ color: faster1 ? c1 : faster2 ? c2 : F1.textDim, marginRight: 5 }}>
            {faster1 ? label1 : faster2 ? label2 : "="}
          </span>
          {d > 0 ? "+" : ""}
          {d.toFixed(3)}
        </div>
      )}
    </div>
  );
});

export default SectorDelta;
