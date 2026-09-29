import { memo, useMemo, useRef } from "react";
import { distanceAtTimeOnGrid, timeAtDistanceOnGrid } from "../../domain/gap.js";
import { fractionAtTime } from "../../domain/timing.js";
import { ds, fmt, telAt } from "../../helpers.js";

const WIDTH = 300;
const MAX_POINTS = 400;

// xs are positions on the chart's axis as a share (0–1): lap distance, or time when distance isn't available.
const toX = (share) => Math.max(0, Math.min(1, share)) * WIDTH;

function linePath(values, xs, maxValue, height) {
  if (!values.length) return "";
  let d = "";
  for (let i = 0; i < values.length; i++) {
    const y = height - (Math.max(0, values[i]) / maxValue) * height;
    d += `${i ? "L" : "M"}${toX(xs[i]).toFixed(1)},${y.toFixed(1)}`;
  }
  return d;
}

// Brake is on/off: draw the braking stretches as filled bands in one lane per driver.
function brakeBands(values, xs) {
  const bands = [];
  let start = -1;
  values.forEach((value, i) => {
    if (value && start < 0) start = i;
    if ((!value || i === values.length - 1) && start >= 0) {
      bands.push({ x: toX(xs[start]), w: Math.max(0.8, toX(xs[i]) - toX(xs[start])) });
      start = -1;
    }
  });
  return bands;
}

// Static layer: path strings are computed once per replay, not per playback tick.
const TraceLines = memo(function TraceLines({ series, maxValue, height }) {
  const paths = useMemo(
    () =>
      series.map((item) => ({
        slot: item.slot,
        color: item.color,
        d: linePath(item.values, item.xs, maxValue, height),
      })),
    [series, maxValue, height]
  );
  return (
    <svg
      className="trace__svg"
      style={{ height }}
      viewBox={`0 0 ${WIDTH} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        className="trace__grid"
        x1="0"
        x2={WIDTH}
        y1={height / 2}
        y2={height / 2}
        vectorEffect="non-scaling-stroke"
      />
      <line className="trace__base" x1="0" x2={WIDTH} y1={height} y2={height} vectorEffect="non-scaling-stroke" />
      {paths.map((path) => (
        <path
          key={path.slot}
          className="trace__line"
          style={{ "--c": path.color }}
          d={path.d}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
});

// Gap to the fastest driver along the lap: above the line = behind. One area per other driver.
const GapLines = memo(function GapLines({ series, xs, scale, height }) {
  const mid = height / 2;
  const paths = useMemo(
    () =>
      series.map((item) => {
        const points = item.gaps.map((gap, i) => `${toX(xs[i]).toFixed(1)},${(mid - (gap / scale) * mid).toFixed(1)}`);
        return {
          slot: item.slot,
          color: item.color,
          line: `M${points.join("L")}`,
          area: `M0,${mid}L${points.join("L")}L${WIDTH},${mid}Z`,
        };
      }),
    [series, xs, scale, mid]
  );
  return (
    <svg
      className="trace__svg"
      style={{ height }}
      viewBox={`0 0 ${WIDTH} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <path key={`a${path.slot}`} className="gap__area" style={{ "--c": path.color }} d={path.area} />
      ))}
      <line className="trace__base" x1="0" x2={WIDTH} y1={mid} y2={mid} vectorEffect="non-scaling-stroke" />
      {paths.map((path) => (
        <path
          key={path.slot}
          className="trace__line"
          style={{ "--c": path.color }}
          d={path.line}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
});

const BrakeLanes = memo(function BrakeLanes({ series }) {
  const lanes = useMemo(() => series.map((item) => ({ ...item, bands: brakeBands(item.values, item.xs) })), [series]);
  return lanes.map((lane) => (
    <div key={lane.slot} className="brake-lane" style={{ "--c": lane.color }}>
      <svg className="brake-lane__svg" viewBox={`0 0 ${WIDTH} 10`} preserveAspectRatio="none" aria-hidden="true">
        {lane.bands.map((band) => (
          <rect key={band.x} x={band.x} y="0" width={band.w} height="10" />
        ))}
      </svg>
      <span className="brake-lane__label">{lane.label}</span>
    </div>
  ));
});

function Chart({ title, unit, readout, position, ticks, onSeek, children }) {
  const areaRef = useRef(null);
  const seekFromEvent = (event) => {
    const rect = areaRef.current.getBoundingClientRect();
    onSeek(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)));
  };
  return (
    <figure className="trace">
      <figcaption className="trace__head">
        <span className="trace__title kicker">
          {title} {unit && <span className="unit">{unit}</span>}
        </span>
        <span className="trace__readout">{readout}</span>
      </figcaption>
      <div
        ref={areaRef}
        className="trace__area"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          seekFromEvent(event);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) seekFromEvent(event);
        }}
      >
        {children}
        {ticks.map((tick) => (
          <span key={tick} className="trace__tick" style={{ left: `${tick * 100}%` }} aria-hidden="true" />
        ))}
        <span className="trace__playhead" style={{ left: `${position * 100}%` }} aria-hidden="true" />
      </div>
    </figure>
  );
}

function Readout({ drivers, values, format }) {
  return drivers.map((driver, index) => (
    <span key={driver.slot} className="readout" style={{ "--c": driver.color }}>
      {driver.label} <b className="num">{format(values[index])}</b>
    </span>
  ));
}

/**
 * Speed, throttle, brake and the time gap along the lap, with a shared playhead; click or drag a chart to seek.
 * With a reliable gap trace the axis is lap distance at the fastest driver's position (every driver compared at
 * the same point on track). Otherwise the axis is time, the gap chart is left out, and a note says why.
 */
function TelemetryTraces({ drivers, time, duration, trace, timeTicks, onSeek, compact }) {
  const maxPoints = compact ? MAX_POINTS / 2 : MAX_POINTS;
  const byDistance = Boolean(trace?.reliable);
  const reference = drivers.find((driver) => driver.slot === trace?.reference);

  const axis = useMemo(() => {
    if (!byDistance) {
      return {
        share: (slot, seconds) => seconds / duration,
        toProg: (share) => share,
        ticks: timeTicks,
      };
    }
    const [s1, s2] = reference.sectors;
    return {
      share: (slot, seconds) => distanceAtTimeOnGrid(trace, slot, seconds),
      toProg: (share) => timeAtDistanceOnGrid(trace, trace.reference, share) / duration,
      ticks: s1 && s2 ? [s1, s1 + s2].map((seconds) => distanceAtTimeOnGrid(trace, trace.reference, seconds)) : [],
    };
  }, [byDistance, duration, reference, timeTicks, trace]);
  const position = byDistance ? distanceAtTimeOnGrid(trace, trace.reference, time) : time / duration;
  const seek = (share) => onSeek(axis.toProg(share));

  const series = useMemo(() => {
    const pick = (key, map = (v) => v || 0) =>
      drivers.map((driver) => ({
        slot: driver.slot,
        label: driver.label,
        color: driver.color,
        values: ds(
          (driver.tel || []).map((sample) => map(sample[key])),
          maxPoints
        ),
        xs: ds(
          (driver.telTimes || []).map((seconds) => axis.share(driver.slot, seconds)),
          maxPoints
        ),
      }));
    return {
      speed: pick("speed"),
      throttle: pick("throttle"),
      brake: pick("brake", (v) => (v > 0 ? 1 : 0)),
    };
  }, [axis, drivers, maxPoints]);
  const speedMax = useMemo(() => {
    const top = Math.max(0, ...series.speed.flatMap((item) => item.values));
    return Math.max(100, Math.ceil(top / 50) * 50);
  }, [series]);
  const gaps = useMemo(() => {
    if (!byDistance) return null;
    const colored = trace.series.map((item) => ({
      ...item,
      color: drivers.find((driver) => driver.slot === item.slot)?.color,
    }));
    const scale = Math.max(0.05, ...trace.series.flatMap((item) => item.gaps.map(Math.abs)));
    return { series: colored, xs: trace.d, scale };
  }, [byDistance, drivers, trace]);
  const current = drivers.map((driver) => telAt(driver.tel, fractionAtTime(driver.telTimes, time)));
  const others = gaps ? gaps.series.map((item) => drivers.find((driver) => driver.slot === item.slot)) : [];
  const gapNow = gaps
    ? gaps.series.map((item) => item.gaps[Math.round(Math.max(0, Math.min(1, position)) * (item.gaps.length - 1))])
    : [];

  return (
    <div className="traces">
      {!byDistance && trace && (
        <div className="margin-note traces__note">
          <p className="margin-note__title">Χωρίς διαφορά ανά σημείο της πίστας</p>
          <p>{trace.reason} Τα γραφήματα δείχνουν χρόνο αντί για απόσταση.</p>
        </div>
      )}
      <Chart
        title="Ταχύτητα"
        unit="km/h"
        position={position}
        ticks={axis.ticks}
        onSeek={seek}
        readout={<Readout drivers={drivers} values={current.map((v) => v.speed)} format={(v) => Math.round(v)} />}
      >
        <span className="trace__scale num" aria-hidden="true">
          {speedMax}
        </span>
        <TraceLines series={series.speed} maxValue={speedMax} height={compact ? 110 : 150} />
      </Chart>
      <Chart
        title="Γκάζι"
        unit="%"
        position={position}
        ticks={axis.ticks}
        onSeek={seek}
        readout={<Readout drivers={drivers} values={current.map((v) => v.throttle)} format={(v) => Math.round(v)} />}
      >
        <TraceLines series={series.throttle} maxValue={100} height={compact ? 56 : 72} />
      </Chart>
      <Chart title="Φρένο" position={position} ticks={axis.ticks} onSeek={seek}>
        <BrakeLanes series={series.brake} />
      </Chart>
      {gaps && (
        <Chart
          title="Διαφορά χρόνου"
          unit="s"
          position={position}
          ticks={axis.ticks}
          onSeek={seek}
          readout={
            <Readout
              drivers={others}
              values={gapNow}
              format={(v) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(3)}`}
            />
          }
        >
          <GapLines series={gaps.series} xs={gaps.xs} scale={gaps.scale} height={compact ? 80 : 110} />
          <span className="trace__scale num" aria-hidden="true">
            πάνω: πίσω από {reference.label}
          </span>
        </Chart>
      )}
      <p className="traces__axis" aria-hidden="true">
        {byDistance ? (
          <>
            <span>Εκκίνηση</span>
            <span>απόσταση γύρου</span>
            <span>Τερματισμός</span>
          </>
        ) : (
          <>
            <span>0:00</span>
            <span>χρόνος</span>
            <span className="num">{fmt(duration)}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default memo(TelemetryTraces);
