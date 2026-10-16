import { memo } from "react";
import { channelValue, gainAt, lapLabel } from "../../domain/figureAnalysis.js";
import { fmt } from "../../helpers.js";

const A = "var(--figure-first)",
  B = "var(--text)",
  GREEN = "var(--figure-gain)",
  RED = "var(--figure-loss)";
const signed = (value) => `${value >= 0 ? "+" : "−"}${Math.abs(value).toFixed(3)}`;
const pathString = (points) => points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join("");
const valueAt = (grid, s, field) => {
  const index = Math.max(0, Math.min(grid.length - 1, (s / grid.at(-1).distance) * (grid.length - 1)));
  const a = grid[Math.floor(index)],
    b = grid[Math.min(grid.length - 1, Math.ceil(index))];
  return a[field] + (b[field] - a[field]) * (index % 1);
};

function Plot({ x, y, width, height, from, to, min, max, label, series, sectors = [], showDistance = false }) {
  const px = (s) => x + ((s - from) / (to - from)) * width;
  const py = (v) => y + height - ((v - min) / (max - min || 1)) * height;
  return (
    <g>
      <text x={x} y={y - 14} fontSize="18" fontWeight="600">
        {label}
      </text>
      {[0, 0.5, 1].map((share) => (
        <g key={share}>
          <line x1={x} x2={x + width} y1={y + height * share} y2={y + height * share} stroke="var(--rule)" />
          <text x={x - 12} y={y + height * share + 6} fontSize="16" textAnchor="end" fill="var(--text-2)">
            {(max - share * (max - min)).toFixed(max - min < 4 ? 2 : 0)}
          </text>
        </g>
      ))}
      {sectors
        .filter((s) => s > from && s < to)
        .map((s) => (
          <line
            key={s}
            x1={px(s)}
            x2={px(s)}
            y1={y}
            y2={y + height}
            stroke="var(--rule-strong)"
            strokeDasharray="4 6"
          />
        ))}
      {series.map((item, i) => {
        let pen = false;
        const d = item.points
          .map((point) => {
            if (
              !Number.isFinite(point.distance) ||
              point.distance < from ||
              point.distance > to ||
              !Number.isFinite(point.value)
            ) {
              pen = false;
              return "";
            }
            const command = pen && !point.hole ? "L" : "M";
            pen = true;
            const x = px(point.distance).toFixed(2),
              y = py(point.value).toFixed(2);
            return command === "L" && item.discrete ? `H${x}V${y}` : `${command}${x},${y}`;
          })
          .join("");
        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={item.color}
            strokeWidth="2.5"
            strokeDasharray={item.dashed ? "9 6" : undefined}
          />
        );
      })}
      {showDistance && (
        <>
          {Array.from({ length: 6 }, (_, i) => from + ((to - from) * i) / 5).map((s) => (
            <text key={s} x={px(s)} y={y + height + 30} fontSize="16" textAnchor="middle" fill="var(--text-2)">
              {Math.round(s)}
            </text>
          ))}
          <text x={x + width / 2} y={y + height + 64} fontSize="18" textAnchor="middle">
            Κοινή απόσταση αναφοράς [m]
          </text>
        </>
      )}
    </g>
  );
}

function GainMap({ analysis, landmarks, flip }) {
  const { grid, length } = analysis;
  const minX = Math.min(...grid.map((p) => p.x)),
    maxX = Math.max(...grid.map((p) => p.x));
  const minY = Math.min(...grid.map((p) => p.y)),
    maxY = Math.max(...grid.map((p) => p.y));
  const scale = Math.min(710 / (maxX - minX || 1), 330 / (maxY - minY || 1));
  const project = (s) => ({
    x: 435 + (valueAt(grid, s, "x") - (minX + maxX) / 2) * scale * (flip ? -1 : 1),
    y: 410 + (valueAt(grid, s, "y") - (minY + maxY) / 2) * scale,
  });
  const bounds = Array.from({ length: Math.ceil(length / 200) + 1 }, (_, i) => Math.min(i * 200, length));
  const gains = bounds.slice(1).map((end, i) => gainAt(analysis, end) - gainAt(analysis, bounds[i]));
  const intensity = Math.max(0.05, ...gains.map(Math.abs));
  const largest = gains
    .map((gain, i) => ({ gain, start: bounds[i], end: bounds[i + 1] }))
    .sort((a, b) => Math.abs(b.gain) - Math.abs(a.gain))
    .slice(0, 2);
  const start = project(0),
    next = project(30),
    dx = next.x - start.x,
    dy = next.y - start.y,
    magnitude = Math.hypot(dx, dy) || 1;
  return (
    <g>
      <path
        d={pathString(grid.map((p) => project(p.distance)))}
        fill="none"
        stroke="var(--rule)"
        strokeWidth="15"
        strokeLinejoin="round"
      />
      {gains.map((gain, i) => {
        const end = bounds[i + 1],
          start = bounds[i];
        const points = [
          start,
          ...grid.filter((p) => p.distance > start && p.distance < end).map((p) => p.distance),
          end,
        ].map(project);
        return (
          <path
            key={i}
            d={pathString(points)}
            fill="none"
            stroke={Math.abs(gain) < 0.02 ? "var(--viz-muted)" : gain > 0 ? GREEN : RED}
            strokeOpacity={Math.abs(gain) < 0.02 ? 1 : 0.35 + (0.65 * Math.abs(gain)) / intensity}
            strokeWidth="9"
            strokeLinejoin="round"
          />
        );
      })}
      <line
        x1={start.x - (dy / magnitude) * 16}
        x2={start.x + (dy / magnitude) * 16}
        y1={start.y + (dx / magnitude) * 16}
        y2={start.y - (dx / magnitude) * 16}
        stroke="var(--text)"
        strokeWidth="3"
      />
      <text x={start.x} y={start.y + 39} fontSize="16" textAnchor="middle">
        START / FINISH
      </text>
      {analysis.sectors.map((s, i) => {
        const p = project(s);
        return (
          <g key={s}>
            <circle cx={p.x} cy={p.y} r="6" fill={A} />
            <text x={p.x + 34} y={p.y + (i ? -32 : 40)} fontSize="17" fill={A}>
              S{i + 1} / S{i + 2}
            </text>
          </g>
        );
      })}
      {landmarks.map((corner) => {
        const p = project(corner.distance);
        const castle = corner.number >= 8 && corner.number <= 12;
        const y = castle ? 185 + (corner.number - 8) * 27 : p.y + (p.y > 410 ? 30 : -20);
        const x = castle ? 65 : Math.max(95, Math.min(775, p.x + (corner.number % 2 ? -18 : 18)));
        return (
          <g key={corner.number}>
            <line x1={p.x} y1={p.y} x2={x} y2={y - 5} stroke="var(--rule-strong)" />
            <text
              x={x}
              y={y}
              fontSize="17"
              textAnchor="middle"
              stroke="var(--page)"
              strokeWidth="5"
              paintOrder="stroke"
            >
              {corner.number}
            </text>
          </g>
        );
      })}
      <text x="855" y="245" fontSize="18" fontWeight="600">
        Επίσημοι τομείς · Α − Β
      </text>
      {analysis.sectorGains.map((gain, i) => (
        <g key={i}>
          <text x="855" y={295 + i * 88} fontSize="28" fontWeight="600">
            S{i + 1} {signed(gain)} s
          </text>
          <text x="855" y={323 + i * 88} fontSize="18" fill="var(--text-2)">
            {Math.abs(analysis.totalGain) > 1e-9
              ? `${((100 * gain) / analysis.totalGain).toFixed(1)}% της διαφοράς`
              : "Ίδιος συνολικός χρόνος"}
          </text>
        </g>
      ))}
      <text x="855" y="550" fontSize="17" fontWeight="600">
        Μεγαλύτερες τοπικές διαφορές
      </text>
      {largest.map((segment, i) => {
        const p = project((segment.start + segment.end) / 2),
          label = i ? "β" : "α";
        return (
          <g key={label}>
            <circle cx={p.x} cy={p.y} r="12" fill="var(--page)" stroke="var(--text)" />
            <text x={p.x} y={p.y + 6} fontSize="17" textAnchor="middle">
              {label}
            </text>
            <text x="855" y={580 + i * 28} fontSize="17">
              {label} · {Math.round(segment.start)}–{Math.round(segment.end)} m · {signed(segment.gain)} s
            </text>
          </g>
        );
      })}
      <text x="80" y="620" fontSize="18" fill={GREEN}>
        Πράσινο: κερδίζει ο Β
      </text>
      <text x="430" y="620" fontSize="18" fill={RED}>
        Κόκκινο: χάνει ο Β
      </text>
      <text x="80" y="651" fontSize="17" fill="var(--text-2)">
        Τοπικό κέρδος ανά 200 m · γκρι: |κέρδος| &lt; 0,020 s · ένταση ανάλογη του μεγέθους
      </text>
    </g>
  );
}

function ComparisonFigure({ analysis, model, view, range, landmarks, svgRef, rangeLabel }) {
  const telemetry = view === "telemetry",
    height = telemetry ? 970 : 780;
  const [first, second] = analysis.drivers;
  const titles = {
    map: "Πού κερδίζεται και πού χάνεται χρόνος",
    delta: "Η διαφορά στο ίδιο σημείο της πίστας",
    telemetry: "Ταχύτητα και κέρδος στο επιλεγμένο τμήμα",
  };
  const [from, to] = range;
  const telemetrySeries = (channel) =>
    analysis.telemetry.map((samples, i) => ({
      color: i ? B : A,
      dashed: !i,
      discrete: channel === "brake" || channel === "drs",
      points: samples.map((sample) => ({ ...sample, value: channelValue(sample, channel) })),
    }));
  const speedValues = telemetrySeries("speed").flatMap((series) =>
    series.points.filter((p) => p.distance >= from && p.distance <= to && Number.isFinite(p.value)).map((p) => p.value)
  );
  const rangeGains = analysis.grid
    .filter((p) => p.distance >= from && p.distance <= to)
    .map((p) => p.gain - gainAt(analysis, from));
  const gainValues = telemetry ? rangeGains : analysis.grid.map((p) => p.gain);
  const gainMin = Math.min(0, ...gainValues) - 0.05,
    gainMax = Math.max(0.05, ...gainValues) + 0.05;
  const hasDRS = analysis.telemetry.some((samples) =>
    samples.some((s) => s.distance >= from && s.distance <= to && Number.isFinite(s.drs))
  );
  const finalGain = gainAt(analysis, to) - gainAt(analysis, from);
  const finalRun = landmarks.find((corner) => corner.number === 16);
  return (
    <svg
      ref={svgRef}
      className="comparison-figure"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 1200 ${height}`}
      role="img"
      aria-label={titles[view]}
    >
      <title>{titles[view]}</title>
      <desc>
        {lapLabel(first)} έναντι {lapLabel(second)}. Θετικό κέρδος σημαίνει ταχύτερος Β. Πηγή OpenF1.
      </desc>
      <rect width="1200" height={height} fill="var(--page)" />
      <g fill="var(--text)" fontFamily="'IBM Plex Sans', sans-serif" fontSize="20">
        <text x="60" y="51" fontSize="17" fill="var(--text-2)">
          F1 STORIES / GHOST CAR · {model.meetingName} {model.year} · {model.sessionLabel}
        </text>
        <text x="60" y="101" fontSize="31" fontWeight="600">
          {titles[view]}
        </text>
        <text x="60" y="143" fontSize="20" fill={A}>
          Α · {lapLabel(first)} · {fmt(first.lapDuration)}
          {telemetry ? " · διακεκομμένη" : ""}
        </text>
        <text x="620" y="143" fontSize="20">
          Β · {lapLabel(second)} · {fmt(second.lapDuration)}
        </text>
        {telemetry && (
          <text x="60" y="180" fontSize="17" fill="var(--text-2)">
            {rangeLabel}
          </text>
        )}
        {view === "map" && <GainMap analysis={analysis} landmarks={landmarks} flip={model.circuitFlip} />}
        {view === "delta" && (
          <>
            <Plot
              x={105}
              y={235}
              width={1005}
              height={340}
              from={0}
              to={analysis.length}
              min={gainMin}
              max={gainMax}
              label="Σωρευτικό κέρδος Β [s] = χρόνος Α − χρόνος Β"
              series={[{ color: GREEN, points: analysis.grid.map((p) => ({ ...p, value: p.gain })) }]}
              sectors={analysis.sectors}
              showDistance
            />
            {analysis.sectors.map((s, i) => (
              <text key={s} x={105 + (s / analysis.length) * 1005} y="210" fontSize="17" textAnchor="middle">
                S{i + 1}
              </text>
            ))}
            {finalRun && (
              <g>
                <line
                  x1={105 + ((finalRun.distance + 50) / analysis.length) * 1005}
                  x2={105 + ((finalRun.distance + 50) / analysis.length) * 1005}
                  y1="235"
                  y2="575"
                  stroke={GREEN}
                  strokeDasharray="8 5"
                />
                <text x={115 + ((finalRun.distance + 50) / analysis.length) * 1005} y="192" fontSize="17" fill={GREEN}>
                  T16 έξοδος*
                </text>
              </g>
            )}
            {[...analysis.sectors, analysis.length].map((s, i) => (
              <circle
                key={s}
                cx={105 + (s / analysis.length) * 1005}
                cy={
                  575 -
                  ((analysis.sectorGains.slice(0, i + 1).reduce((sum, gain) => sum + gain, 0) - gainMin) /
                    (gainMax - gainMin)) *
                    340
                }
                r="5"
                fill={A}
              />
            ))}
            <text x="105" y="680" fontSize="17" fill={A}>
              Σημεία: επίσημος χρονισμός
            </text>
            <text x="1100" y="680" fontSize="26" textAnchor="end" fontWeight="600">
              Τερματισμός: {signed(analysis.totalGain)} s
            </text>
          </>
        )}
        {telemetry && (
          <>
            <Plot
              x={105}
              y={220}
              width={1005}
              height={175}
              from={from}
              to={to}
              min={speedValues.length ? Math.max(0, Math.floor((Math.min(...speedValues) - 10) / 25) * 25) : 0}
              max={Math.max(25, Math.ceil((Math.max(0, ...speedValues) + 10) / 25) * 25)}
              label={speedValues.length ? "Ταχύτητα [km/h]" : "Ταχύτητα · δεν υπάρχουν διαθέσιμα δεδομένα"}
              series={telemetrySeries("speed")}
              sectors={analysis.sectors}
            />
            <Plot
              x={105}
              y={445}
              width={1005}
              height={95}
              from={from}
              to={to}
              min={gainMin}
              max={gainMax}
              label={`Κέρδος Β από την αρχή του τμήματος [s] · τελικά ${signed(finalGain)} s`}
              series={[
                { color: GREEN, points: analysis.grid.map((p) => ({ ...p, value: p.gain - gainAt(analysis, from) })) },
              ]}
              sectors={analysis.sectors}
            />
            <Plot
              x={105}
              y={585}
              width={1005}
              height={50}
              from={from}
              to={to}
              min={0}
              max={100}
              label="Γκάζι [%]"
              series={telemetrySeries("throttle")}
            />
            <Plot
              x={105}
              y={680}
              width={1005}
              height={34}
              from={from}
              to={to}
              min={0}
              max={1}
              label="Φρένο [0 / 1]"
              series={telemetrySeries("brake")}
            />
            <Plot
              x={105}
              y={760}
              width={1005}
              height={35}
              from={from}
              to={to}
              min={0}
              max={Math.max(
                1,
                ...analysis.telemetry.flatMap((s) => s.filter((p) => Number.isFinite(p.drs)).map((p) => p.drs))
              )}
              label={
                hasDRS
                  ? "DRS · κωδικός OpenF1 (κενά = άγνωστο)"
                  : "DRS · δεν υπάρχουν διαθέσιμα δεδομένα σε αυτό το τμήμα"
              }
              series={telemetrySeries("drs")}
              showDistance
            />
          </>
        )}
        <text x="60" y={height - 63} fontSize="17" fill="var(--text-2)">
          OpenF1 · κοινή τροχιά {Math.round(analysis.length)} m · αρχή/τέλος από επίσημο χρονισμό · θετικό = κερδίζει ο
          Β
        </text>
        <text x="60" y={height - 33} fontSize="16" fill="var(--text-2)">
          {landmarks.length ? "Στροφές: προσεγγιστικοί δείκτες 2022 · έξοδοι = δείκτης +50 m. " : ""}Ο θόρυβος θέσης δεν
          επιτρέπει ακρίβεια χιλιοστού ανά σημείο.
        </text>
      </g>
    </svg>
  );
}

export default memo(ComparisonFigure);
