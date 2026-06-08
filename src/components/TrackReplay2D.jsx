import { memo, useId, useMemo } from "react";
import { norm } from "../helpers.js";
import { useF1 } from "../theme.js";
import { uiRadii } from "../ui/styles.js";

const WIDTH = 720;
const HEIGHT = 360;
const PAD_X = 56;
const PAD_Y = 42;

function toPath(points, close = false) {
  if (!points.length) return "";
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) d += `L${points[i].x},${points[i].y}`;
  if (close) d += "Z";
  return d;
}

function lerpPoint(points, t) {
  if (!points.length) return { x: 0, y: 0 };
  if (points.length === 1) return points[0];
  const ct = Math.max(0, Math.min(1, t));
  const idx = ct * (points.length - 1);
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, points.length - 1);
  const f = idx - i0;
  const a = points[i0];
  const b = points[i1];
  return {
    x: a.x + (b.x - a.x) * f,
    y: a.y + (b.y - a.y) * f,
  };
}

export default memo(function TrackReplay2D({ tp, drivers, prog, flip }) {
  const F1 = useF1();
  const gradientId = useId().replace(/:/g, "");

  const geometry = useMemo(() => {
    if (!tp?.length) return null;

    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;

    for (const point of tp) {
      if (point.x < minX) minX = point.x;
      if (point.x > maxX) maxX = point.x;
      if (point.z < minZ) minZ = point.z;
      if (point.z > maxZ) maxZ = point.z;
    }

    const rangeX = maxX - minX || 1;
    const rangeZ = maxZ - minZ || 1;
    const scale = Math.min((WIDTH - PAD_X * 2) / rangeX, (HEIGHT - PAD_Y * 2) / rangeZ);
    const centerX = (minX + maxX) / 2;
    const centerZ = (minZ + maxZ) / 2;

    const project = (point) => ({
      x: WIDTH / 2 + (point.x - centerX) * scale,
      y: HEIGHT / 2 + (point.z - centerZ) * scale,
    });

    const trackPoints = tp.map(project);
    const startPoint = trackPoints[0];
    const driverPaths = drivers.map((driver) => {
      const source = driver.path?.length ? norm(driver.path, flip) : tp;
      return {
        label: driver.label,
        color: driver.color,
        points: source.map(project),
      };
    });

    return {
      startPoint,
      trackPath: toPath(trackPoints, true),
      driverPaths,
    };
  }, [tp, drivers, flip]);

  const driverStates = useMemo(() => {
    if (!geometry) return [];
    const clampedProg = Math.max(0, Math.min(1, prog));
    return geometry.driverPaths.map((driver) => {
      const pathPoints = driver.points.length >= 2 ? driver.points : [geometry.startPoint];
      const current = lerpPoint(pathPoints, clampedProg);
      const trailIdx = Math.max(1, Math.floor(clampedProg * (pathPoints.length - 1)));
      const trailPath = toPath([...pathPoints.slice(0, trailIdx + 1), current]);
      return {
        label: driver.label,
        color: driver.color,
        current,
        trailPath,
      };
    });
  }, [geometry, prog]);

  if (!geometry) return null;

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        borderRadius: uiRadii.replayPanel,
        background: `linear-gradient(180deg, ${F1.cardBg}, ${F1.overlay})`,
        border: `1px solid ${F1.borderLight}`,
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="transparent" />
      <path
        d={geometry.trackPath}
        fill="none"
        stroke="rgba(225,6,0,0.2)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={geometry.trackPath}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform={`translate(${geometry.startPoint.x},${geometry.startPoint.y}) rotate(45)`}>
        <rect x="-7" y="-7" width="14" height="14" fill="#ffffff" opacity="0.85" rx="2" />
      </g>
      {driverStates.map((driver) => (
        <g key={driver.label}>
          <path
            d={driver.trailPath}
            fill="none"
            stroke={driver.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.22"
          />
          <circle cx={driver.current.x} cy={driver.current.y} r="16" fill={driver.color} opacity="0.14" />
          <circle cx={driver.current.x} cy={driver.current.y} r="8.5" fill={driver.color} />
          <circle cx={driver.current.x} cy={driver.current.y} r="3.5" fill="#ffffff" opacity="0.9" />
          <g transform={`translate(${driver.current.x + 14},${driver.current.y - 18})`}>
            <rect x="0" y="0" width="56" height="22" rx="11" fill="rgba(10,10,16,0.82)" stroke={`${driver.color}66`} />
            <text
              x="28"
              y="14.5"
              textAnchor="middle"
              fill={driver.color}
              fontSize="11"
              fontWeight="700"
              fontFamily={F1.mono}
            >
              {driver.label}
            </text>
          </g>
        </g>
      ))}
      <text x="28" y="34" fill={F1.textMuted} fontSize="11" fontFamily={F1.mono} letterSpacing="0.18em">
        2D ΑΝΑΠΑΡΑΓΩΓΗ
      </text>
      <text x={WIDTH - 28} y={34} textAnchor="end" fill={F1.textMuted} fontSize="11" fontFamily={F1.mono}>
        {Math.round(Math.max(0, Math.min(1, prog)) * 100)}%
      </text>
    </svg>
  );
});
