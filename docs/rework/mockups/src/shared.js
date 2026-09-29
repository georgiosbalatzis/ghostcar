// Mockup-only fake data + SVG helpers. Deterministic so screenshots are reproducible.
const GC = (() => {
  const NS = "http://www.w3.org/2000/svg";
  // Stylised Monza, viewBox 0 0 1000 620, start/finish at (640,540), running left.
  const TRACK =
    "M640 540 L250 540 L214 540 Q204 540 200 530 L196 522 Q192 514 182 516 L168 519 C100 530 58 480 70 410 C80 350 104 318 128 296 L140 286 Q148 280 156 284 L162 287 Q170 290 174 280 L178 270 C190 236 214 220 244 226 C268 232 282 226 292 208 L300 196 L520 118 Q540 111 552 118 L566 127 Q576 133 588 126 L598 120 Q608 114 622 118 L860 196 C960 228 990 360 930 450 C880 522 800 540 700 540 Z";

  const probe = document.createElementNS(NS, "path");
  probe.setAttribute("d", TRACK);
  const measure = document.createElementNS(NS, "svg");
  measure.style.cssText = "position:absolute;width:0;height:0";
  measure.appendChild(probe);
  document.documentElement.appendChild(measure);
  const L = probe.getTotalLength();
  const at = (p) => probe.getPointAtLength(((p % 1) + 1) % 1 * L);
  const nearest = (x, y) => {
    let best = 0, bd = Infinity;
    for (let i = 0; i < 800; i++) { const q = at(i / 800); const d = (q.x - x) ** 2 + (q.y - y) ** 2; if (d < bd) { bd = d; best = i / 800; } }
    return best;
  };
  // corner anchors → [progress, min speed VER, min speed NOR]
  const zones = [[198, 526, 84, 88], [158, 285, 112, 108], [230, 224, 186, 182], [290, 210, 176, 171], [575, 128, 154, 149], [955, 380, 196, 193]]
    .map(([x, y, a, b]) => [nearest(x, y), a, b]);

  const speed = (p, who = 0) => {
    const top = who ? 341 : 345;
    let v = top;
    for (const [pz, a, b] of zones) {
      const vmin = who ? b : a;
      let d = p - pz; if (d < -0.5) d += 1; if (d > 0.5) d -= 1;
      v = Math.min(v, d < 0 ? vmin - 4300 * d : vmin + (top + 25 - vmin) * (1 - Math.exp(-d * (15 - who * 0.6))));
    }
    return v;
  };
  const throttle = (p, who = 0) => { const v = speed(p, who), n = speed(p + 0.002, who); return n < v - 0.5 ? 0 : v > 330 ? 100 : Math.min(100, 45 + v / 5); };
  const brake = (p, who = 0) => (speed(p + 0.002, who) < speed(p, who) - 3 ? 100 : 0);

  const knots = [[0, 0], [0.06, 0.012], [0.12, 0.004], [0.2, 0.03], [0.28, 0.022], [0.341, 0.041], [0.4, 0.05], [0.45, 0.012], [0.5, 0.02], [0.56, -0.03], [0.62, -0.026], [0.684, -0.071], [0.74, -0.066], [0.8, -0.094], [0.86, -0.09], [0.92, -0.13], [1, -0.153]];
  const gap = (p) => { // VER − NOR in seconds; negative = VER ahead
    for (let i = 1; i < knots.length; i++) {
      const [p0, g0] = knots[i - 1], [p1, g1] = knots[i];
      if (p <= p1) { const t = (1 - Math.cos(((p - p0) / (p1 - p0)) * Math.PI)) / 2; return g0 + (g1 - g0) * t; }
    }
    return knots.at(-1)[1];
  };

  const el = (tag, attrs = {}) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  /** Draw the circuit into `host`. opts: road, edge, width, dominance, cars[{p,c,label,below}], start, pad */
  function track(host, o = {}) {
    const svg = el("svg", { viewBox: o.viewBox || "20 80 990 500", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" });
    if (o.edge) svg.appendChild(el("path", { d: TRACK, fill: "none", stroke: o.edge, "stroke-width": (o.width || 12) + 8, "stroke-linejoin": "round" }));
    svg.appendChild(el("path", { d: TRACK, fill: "none", stroke: o.road || "currentColor", "stroke-width": o.width || 12, "stroke-linejoin": "round" }));
    if (o.dominance) {
      const N = 36;
      for (let i = 0; i < N; i++) {
        const faster = gap((i + 1) / N) < gap(i / N) ? "var(--ver)" : "var(--nor)";
        svg.appendChild(el("path", { d: TRACK, fill: "none", stroke: faster, "stroke-width": o.dominance, "stroke-dasharray": `${L / N + 0.6} ${L}`, "stroke-dashoffset": -(i * L) / N }));
      }
    }
    if (o.start !== false) { const s = at(0); svg.appendChild(el("line", { x1: s.x, y1: s.y - 14, x2: s.x, y2: s.y + 14, stroke: o.startColor || "var(--signal)", "stroke-width": 4 })); }
    for (const car of o.cars || []) {
      const q = at(car.p);
      svg.appendChild(el("circle", { cx: q.x, cy: q.y, r: o.carR || 11, fill: car.c, stroke: o.carStroke || "var(--paper)", "stroke-width": 3 }));
      if (car.label) {
        const g = el("g", { transform: `translate(${q.x + (car.dx ?? 18)},${q.y + (car.dy ?? (car.below ? 22 : -34))})` });
        g.appendChild(el("rect", { width: 52, height: 24, fill: o.chipBg || "var(--ink)" }));
        g.appendChild(el("rect", { width: 4, height: 24, fill: car.c }));
        const t = el("text", { x: 12, y: 18, fill: o.chipText || "var(--paper)", "font-family": "Barlow Condensed", "font-weight": 700, "font-size": 19, "letter-spacing": ".5" });
        t.textContent = car.label; g.appendChild(t); svg.appendChild(g);
      }
    }
    host.appendChild(svg);
    return svg;
  }

  /** Line chart across the lap. series: [{fn, c, dash, fill}] ; opts: w,h,min,max,play,sectors,grid,zero */
  function trace(host, series, o = {}) {
    const w = o.w || 800, h = o.h || 120, min = o.min ?? 0, max = o.max ?? 350, n = o.n || 400;
    const y = (v) => h - ((v - min) / (max - min)) * h;
    const svg = el("svg", { viewBox: `0 0 ${w} ${h}`, width: "100%", height: "100%", preserveAspectRatio: "none" });
    for (const g of o.grid || []) svg.appendChild(el("line", { x1: 0, x2: w, y1: y(g), y2: y(g), stroke: "var(--rule)", "stroke-width": 1, "vector-effect": "non-scaling-stroke" }));
    for (const s of o.sectors || []) svg.appendChild(el("line", { x1: s * w, x2: s * w, y1: 0, y2: h, stroke: "var(--rule)", "stroke-dasharray": "3 4", "vector-effect": "non-scaling-stroke" }));
    for (const s of series) {
      const pts = Array.from({ length: n + 1 }, (_, i) => `${(i / n) * w},${y(s.fn(i / n))}`);
      if (s.fill) svg.appendChild(el("path", { d: `M0,${y(o.zero ?? min)} L${pts.join(" L")} L${w},${y(o.zero ?? min)} Z`, fill: s.fill, stroke: "none" }));
      svg.appendChild(el("polyline", { points: pts.join(" "), fill: "none", stroke: s.c, "stroke-width": s.width || 1.75, "stroke-dasharray": s.dash || "", "vector-effect": "non-scaling-stroke", "stroke-linejoin": "round" }));
    }
    if (o.zero !== undefined) svg.appendChild(el("line", { x1: 0, x2: w, y1: y(o.zero), y2: y(o.zero), stroke: "var(--ink-2)", "stroke-width": 1, "vector-effect": "non-scaling-stroke" }));
    if (o.play !== undefined) svg.appendChild(el("line", { x1: o.play * w, x2: o.play * w, y1: 0, y2: h, stroke: o.playColor || "var(--ink)", "stroke-width": 1.5, "vector-effect": "non-scaling-stroke" }));
    host.appendChild(svg);
    return svg;
  }

  return { TRACK, at, speed, throttle, brake, gap, track, trace, zones };
})();
