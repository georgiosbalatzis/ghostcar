import { memo, useMemo } from "react";
import { norm } from "../../helpers.js";

const VIEW_WIDTH = 1000;

function lerpPoint(points, t) {
  if (!points.length) return { x: 0, y: 0 };
  const idx = Math.max(0, Math.min(1, t)) * (points.length - 1);
  const i0 = Math.floor(idx);
  const i1 = Math.min(i0 + 1, points.length - 1);
  const f = idx - i0;
  return { x: points[i0].x + (points[i1].x - points[i0].x) * f, y: points[i0].y + (points[i1].y - points[i0].y) * f };
}

function toPath(points, close) {
  if (!points.length) return "";
  return `M${points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join("L")}${close ? "Z" : ""}`;
}

// 2D replay. The SVG carries only geometry (strokes stay 1:1 via non-scaling-stroke);
// cars and labels are HTML positioned in percentages, so they stay crisp at any size.
function TrackMap({ trackPath, drivers, prog, flip }) {
  const geometry = useMemo(() => {
    if (!trackPath?.length) return null;
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (const p of trackPath) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minZ = Math.min(minZ, p.z);
      maxZ = Math.max(maxZ, p.z);
    }
    const scale = VIEW_WIDTH / (maxX - minX || 1);
    const height = (maxZ - minZ || 1) * scale;
    const pad = VIEW_WIDTH * 0.04;
    const project = (p) => ({ x: (p.x - minX) * scale, y: (p.z - minZ) * scale });
    const track = trackPath.map(project);
    const [a, b] = track;
    const length = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = (-(b.y - a.y) / length) * 18;
    const ny = ((b.x - a.x) / length) * 18;
    return {
      viewBox: `${-pad} ${-pad} ${VIEW_WIDTH + pad * 2} ${height + pad * 2}`,
      box: { pad, width: VIEW_WIDTH + pad * 2, height: height + pad * 2 },
      trackD: toPath(track, true),
      startD: `M${a.x - nx},${a.y - ny}L${a.x + nx},${a.y + ny}`,
      paths: drivers.map((driver) => (driver.path?.length >= 2 ? norm(driver.path, flip) : trackPath).map(project)),
    };
  }, [trackPath, drivers, flip]);

  if (!geometry) return null;
  const { box } = geometry;

  return (
    <div className="track-map-frame" style={{ "--ratio": box.width / box.height }}>
      <svg
        className="track-map"
        viewBox={geometry.viewBox}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Πίστα και θέσεις οδηγών"
      >
        <path className="track-map__edge" d={geometry.trackD} vectorEffect="non-scaling-stroke" />
        <path className="track-map__road" d={geometry.trackD} vectorEffect="non-scaling-stroke" />
        <path className="track-map__start" d={geometry.startD} vectorEffect="non-scaling-stroke" />
      </svg>
      {drivers.map((driver, index) => {
        const point = lerpPoint(geometry.paths[index], prog);
        return (
          <div
            key={driver.slot}
            className="car"
            data-label={driver.label}
            style={{
              "--c": driver.color,
              // Labels stack by slot so bunched cars never cover each other's names.
              "--stack": index - (drivers.length - 1) / 2,
              left: `${((point.x + box.pad) / box.width) * 100}%`,
              top: `${((point.y + box.pad) / box.height) * 100}%`,
              zIndex: drivers.length - index,
            }}
          >
            <span className="car__dot" />
            <span className="car__label">{driver.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default memo(TrackMap);
