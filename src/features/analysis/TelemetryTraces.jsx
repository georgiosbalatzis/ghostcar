import { memo, useMemo, useRef } from "react";
import { ds, telAt } from "../../helpers.js";

const WIDTH = 300;
const MAX_POINTS = 400;

function linePath(values, maxValue, height) {
  if (!values.length) return "";
  const last = Math.max(1, values.length - 1);
  let d = "";
  for (let i = 0; i < values.length; i++) {
    const x = (i / last) * WIDTH;
    const y = height - (Math.max(0, values[i]) / maxValue) * height;
    d += `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d;
}

// Brake is on/off: draw the braking stretches as filled bands in one lane per driver.
function brakeBands(values) {
  const bands = [];
  const last = Math.max(1, values.length - 1);
  let start = -1;
  values.forEach((value, i) => {
    if (value && start < 0) start = i;
    if ((!value || i === values.length - 1) && start >= 0) {
      bands.push({ x: (start / last) * WIDTH, w: Math.max(0.8, ((i - start) / last) * WIDTH) });
      start = -1;
    }
  });
  return bands;
}

// Static layer: path strings are computed once per replay, not per playback tick.
const TraceLines = memo(function TraceLines({ series, maxValue, height }) {
  const paths = useMemo(
    () => series.map((item) => ({ slot: item.slot, color: item.color, d: linePath(item.values, maxValue, height) })),
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

const BrakeLanes = memo(function BrakeLanes({ series }) {
  const lanes = useMemo(() => series.map((item) => ({ ...item, bands: brakeBands(item.values) })), [series]);
  return lanes.map((lane) => (
    <div key={lane.slot} className="brake-lane" style={{ "--c": lane.color }}>
      <span className="brake-lane__label">{lane.label}</span>
      <svg className="brake-lane__svg" viewBox={`0 0 ${WIDTH} 10`} preserveAspectRatio="none" aria-hidden="true">
        {lane.bands.map((band) => (
          <rect key={band.x} x={band.x} y="0" width={band.w} height="10" />
        ))}
      </svg>
    </div>
  ));
});

function Chart({ title, unit, readout, prog, onSeek, children }) {
  const areaRef = useRef(null);
  const seekFromEvent = (event) => {
    const rect = areaRef.current.getBoundingClientRect();
    onSeek(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)));
  };
  return (
    <figure className="trace">
      <figcaption className="trace__head">
        <span className="trace__title">
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
        <span className="trace__playhead" style={{ left: `${prog * 100}%` }} aria-hidden="true" />
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

// Speed, throttle and brake along the lap, with a shared playhead. Click or drag a chart to seek.
export default function TelemetryTraces({ drivers, prog, onSeek, compact }) {
  const maxPoints = compact ? MAX_POINTS / 2 : MAX_POINTS;
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
      }));
    return {
      speed: pick("speed"),
      throttle: pick("throttle"),
      brake: pick("brake", (v) => (v > 0 ? 1 : 0)),
    };
  }, [drivers, maxPoints]);
  const speedMax = useMemo(() => {
    const top = Math.max(0, ...series.speed.flatMap((item) => item.values));
    return Math.max(100, Math.ceil(top / 50) * 50);
  }, [series]);
  const current = drivers.map((driver) => telAt(driver.tel, prog));

  return (
    <div className="traces">
      <Chart
        title="Ταχύτητα"
        unit="km/h"
        prog={prog}
        onSeek={onSeek}
        readout={<Readout drivers={drivers} values={current.map((v) => v.speed)} format={(v) => Math.round(v)} />}
      >
        <span className="trace__scale num" aria-hidden="true">
          {speedMax}
        </span>
        <TraceLines series={series.speed} maxValue={speedMax} height={88} />
      </Chart>
      <Chart
        title="Γκάζι"
        unit="%"
        prog={prog}
        onSeek={onSeek}
        readout={<Readout drivers={drivers} values={current.map((v) => v.throttle)} format={(v) => Math.round(v)} />}
      >
        <TraceLines series={series.throttle} maxValue={100} height={56} />
      </Chart>
      <Chart title="Φρένο" prog={prog} onSeek={onSeek}>
        <BrakeLanes series={series.brake} />
      </Chart>
      <p className="traces__axis" aria-hidden="true">
        <span>Αρχή γύρου</span>
        <span>Τέλος</span>
      </p>
    </div>
  );
}
