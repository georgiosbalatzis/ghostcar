// ─── F1 Stories Design System — Aligned with f1stories.gr ───
// Dark: "Neutral Charcoal" — matches f1stories.gr dark mode
// Light: "Clean White" — Apple-inspired, matches f1stories.gr light mode
// Accent: #E10600 (F1 red) used sparingly for highlights & CTAs

export const F1_DARK = {
  // Primary accent
  red: "#E10600", redDark: "#B30500", redGlow: "rgba(225,6,0,0.15)",
  blue: "#3b82f6", blueDark: "#2563eb", blueGlow: "rgba(59,130,246,0.15)",

  // Backgrounds — f1stories.gr dark palette
  carbon: "#111118",         // deepest background (was #15151e)
  carbonLight: "#18181f",    // slightly elevated surfaces
  carbonMid: "#1e1e28",      // hover / elevated cards
  panelBg: "rgba(14,14,22,0.97)",
  overlay: "rgba(10,10,16,0.94)",
  cardBg: "rgba(22,22,32,0.88)",
  inputBg: "rgba(24,24,36,0.95)",

  // Text — softer contrast, less blue-tinted
  text: "#e4e4ec",
  textDim: "#8a8a9e",
  textMuted: "#4e4e64",

  // Borders — subtle, warm-neutral
  border: "rgba(70,70,100,0.22)",
  borderLight: "rgba(55,55,80,0.15)",

  // Semantic colors
  green: "#00d26a", greenDim: "#00a854",
  yellow: "#ffd700",
  purple: "#9b59b6",
  white: "#ffffff",

  // 3D scene
  fogColor: 0x0e0e16, groundColor: 0x141420,
  trackColor: 0x36364a, lineColor: 0xe10600, sceneBg: 0x0e0e16,

  // Typography — Titillium Web (same as f1stories.gr)
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

export const F1_LIGHT = {
  // Primary accent
  red: "#E10600", redDark: "#B30500", redGlow: "rgba(225,6,0,0.08)",
  blue: "#2563eb", blueDark: "#1d4ed8", blueGlow: "rgba(59,130,246,0.12)",

  // Backgrounds — f1stories.gr clean white palette
  carbon: "#f5f5f7",         // main bg (Apple-inspired off-white)
  carbonLight: "#ededf0",    // slightly darker surface
  carbonMid: "#e0e0e6",      // hover states
  panelBg: "rgba(255,255,255,0.98)",
  overlay: "rgba(248,248,252,0.96)",
  cardBg: "rgba(240,240,244,0.9)",
  inputBg: "rgba(255,255,255,0.96)",

  // Text — true dark for readability
  text: "#1a1a2e",
  textDim: "#555570",
  textMuted: "#8888a0",

  // Borders — very subtle
  border: "rgba(0,0,0,0.1)",
  borderLight: "rgba(0,0,0,0.06)",

  // Semantic colors — slightly toned down for light bg
  green: "#00a854", greenDim: "#008844",
  yellow: "#cc9900",
  purple: "#8844aa",
  white: "#ffffff",

  // 3D scene — lighter, cleaner
  fogColor: 0xeceef2, groundColor: 0xdddee4,
  trackColor: 0x8a8a9a, lineColor: 0xe10600, sceneBg: 0xeceef2,

  // Typography
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

export const TIRE_COLORS = { SOFT: "#ff3333", MEDIUM: "#ffcc00", HARD: "#cccccc", INTERMEDIATE: "#44cc44", WET: "#4488ff" };

export const TEAM_COLORS = {
  "Red Bull Racing": "#3671C6", "Red Bull": "#3671C6", "McLaren": "#FF8000",
  "Ferrari": "#E8002D", "Mercedes": "#27F4D2", "Aston Martin": "#229971",
  "Alpine": "#0093CC", "Williams": "#64C4FF", "RB": "#6692FF", "Racing Bulls": "#6692FF",
  "Kick Sauber": "#52E252", "Sauber": "#52E252", "Haas F1 Team": "#B6BABD",
  "Haas": "#B6BABD", "Cadillac": "#FFD700",
};

export const DRIVER_NAME_BY_NUMBER = {
  2: "Logan Sargeant",
  3: "Daniel Ricciardo",
  1: "Max Verstappen",
  4: "Lando Norris",
  5: "Gabriel Bortoleto",
  6: "Isack Hadjar",
  7: "Jack Doohan",
  10: "Pierre Gasly",
  11: "Sergio Perez",
  12: "Andrea Kimi Antonelli",
  14: "Fernando Alonso",
  16: "Charles Leclerc",
  18: "Lance Stroll",
  20: "Kevin Magnussen",
  22: "Yuki Tsunoda",
  23: "Alexander Albon",
  24: "Zhou Guanyu",
  27: "Nico Hulkenberg",
  30: "Liam Lawson",
  31: "Esteban Ocon",
  43: "Franco Colapinto",
  44: "Lewis Hamilton",
  55: "Carlos Sainz",
  63: "George Russell",
  77: "Valtteri Bottas",
  81: "Oscar Piastri",
  87: "Oliver Bearman",
};

export const getTeamColor = (t) => {
  if (!t) return "#888";
  for (const [k, v] of Object.entries(TEAM_COLORS))
    if (t.toLowerCase().includes(k.toLowerCase())) return v;
  return "#888";
};

export const PRESETS = [
  { label: "🏆 ANT εναντίον RUS — Ιαπωνία 2026 Q • Ο Antonelli κλειδώνει την pole", year: 2026, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 12, d2: 63, cat: "2026" },
  { label: "🌏 ANT εναντίον RUS — Κίνα 2026 Q • Ο νεαρότερος poleman στην ιστορία", year: 2026, meeting: "Chinese Grand Prix", session: "Qualifying", d1: 12, d2: 63, cat: "2026" },
  { label: "🏁 PIA εναντίον NOR — Άμπου Ντάμπι 2025 R • Τολμηρό προσπέρασμα στον 1ο γύρο", year: 2025, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 81, d2: 4, cat: "2025" },
  { label: "⚡ ANT εναντίον PIA — Μαϊάμι 2025 SQ • Εντυπωσιακή πρώτη pole", year: 2025, meeting: "Miami Grand Prix", session: "Sprint Qualifying", d1: 12, d2: 81, cat: "2025" },
  { label: "🇯🇵 VER εναντίον NOR — Ιαπωνία 2025 Q • Μαγική pole στη Suzuka", year: 2025, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 4, cat: "2025" },
  { label: "🔴 HAM εναντίον PIA — Κίνα 2025 Sprint • Η πρώτη νίκη της Ferrari", year: 2025, meeting: "Chinese Grand Prix", session: "Sprint", d1: 44, d2: 81, cat: "2025" },
  { label: "🏎️ PIA εναντίον LEC — Αζερμπαϊτζάν 2024 R • Άμυνα μέχρι τέλους στο Μπακού", year: 2024, meeting: "Azerbaijan Grand Prix", session: "Race", d1: 81, d2: 16, cat: "2024" },
  { label: "🇬🇧 HAM εναντίον VER — Βρετανία 2024 R • Η 9η νίκη-ρεκόρ στο Silverstone", year: 2024, meeting: "British Grand Prix", session: "Race", d1: 44, d2: 1, cat: "2024" },
  { label: "🍁 RUS εναντίον VER — Καναδάς 2024 Q • Ίδιος χρόνος στον γύρο", year: 2024, meeting: "Canadian Grand Prix", session: "Qualifying", d1: 63, d2: 1, cat: "2024" },
  { label: "🎭 LEC εναντίον PIA — Μονακό 2024 Q • Μάχη για την pole στην έδρα", year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 81, cat: "2024" },
  { label: "🎰 LEC εναντίον PER — Λας Βέγκας 2023 R • Βουτιά στον τελευταίο γύρο", year: 2023, meeting: "Las Vegas Grand Prix", session: "Race", d1: 16, d2: 11, cat: "2023" },
  { label: "🌵 PIA εναντίον NOR — Κατάρ 2023 SS • Μονομαχία McLaren στο sprint", year: 2023, meeting: "Qatar Grand Prix", session: "Sprint Shootout", d1: 81, d2: 4, cat: "2023" },
  { label: "🏙️ LEC εναντίον VER — Αζερμπαϊτζάν 2023 Q • Τρίτη σερί pole", year: 2023, meeting: "Azerbaijan Grand Prix", session: "Qualifying", d1: 16, d2: 1, cat: "2023" },
  { label: "🇲🇨 VER εναντίον ALO — Μονακό 2023 Q • Η pole χάνεται από τον Alonso", year: 2023, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 1, d2: 14, cat: "2023" },
  { label: "🇭🇺 RUS εναντίον SAI — Ουγγαρία 2022 Q • Η πρώτη pole-έκπληξη", year: 2022, meeting: "Hungarian Grand Prix", session: "Qualifying", d1: 63, d2: 55, cat: "2022" },
  { label: "🇯🇵 VER εναντίον LEC — Ιαπωνία 2022 Q • Απίστευτα κλειστή pole στη Suzuka", year: 2022, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 16, cat: "2022" },
  { label: "🇧🇷 MAG εναντίον VER — Σάο Πάολο 2022 Q • Εκπληκτική pole sprint", year: 2022, meeting: "São Paulo Grand Prix", session: "Qualifying", d1: 20, d2: 1, cat: "2022" },
  { label: "👑 VER εναντίον HAM — Άμπου Ντάμπι 2021 R • Ο τελικός του τίτλου", year: 2021, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 1, d2: 44, cat: "2021" },
  { label: "🇸🇦 HAM εναντίον VER — Σαουδική Αραβία 2021 Q • Ο Verstappen βρίσκει τοίχο", year: 2021, meeting: "Saudi Arabian Grand Prix", session: "Qualifying", d1: 44, d2: 1, cat: "2021" },
  { label: "🌧️ RUS εναντίον VER — Βέλγιο 2021 Q • Χάος στις βρεγμένες κατατακτήριες", year: 2021, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 1, cat: "2021" },
];

export const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
export const CAM_LABELS = { orbit: "Ελεύθ.", follow1: "Κυν. O1", follow2: "Κυν. O2", top: "Ψηλά", cinematic: "Σινέ" };
export const SESSION_LABELS = {
  Qualifying: "Κατατακτήριες",
  Race: "Αγώνας",
  Sprint: "Sprint",
  "Sprint Qualifying": "Κατατακτήριες Sprint",
  "Sprint Shootout": "Sprint Shootout",
  "Practice 1": "Δοκιμές 1",
  "Practice 2": "Δοκιμές 2",
  "Practice 3": "Δοκιμές 3",
};

export function formatSessionLabel(sessionName) {
  return SESSION_LABELS[sessionName] || sessionName;
}

// ─── Circuit data: turns and driving direction ───
// clockwise: true = CW when viewed from above (cars mostly turn right first)
// clockwise: false = anticlockwise (cars mostly turn left first)
export const CIRCUIT_DATA = {
  "bahrain":          { turns: 15, clockwise: true  },
  "jeddah":           { turns: 27, clockwise: false },
  "melbourne":        { turns: 16, clockwise: true  },
  "baku":             { turns: 20, clockwise: false },
  "miami":            { turns: 19, clockwise: true  },
  "imola":            { turns: 19, clockwise: false },
  "monaco":           { turns: 19, clockwise: true  },
  "barcelona":        { turns: 16, clockwise: true  },
  "spielberg":        { turns: 10, clockwise: true  },
  "montreal":         { turns: 14, clockwise: true  },
  "silverstone":      { turns: 18, clockwise: true  },
  "budapest":         { turns: 14, clockwise: true  },
  "spa-francorchamps":{ turns: 19, clockwise: true  },
  "spa":              { turns: 19, clockwise: true  },
  "zandvoort":        { turns: 14, clockwise: true  },
  "monza":            { turns: 11, clockwise: true  },
  "singapore":        { turns: 19, clockwise: false },
  "suzuka":           { turns: 18, clockwise: true  },
  "lusail":           { turns: 16, clockwise: true  },
  "austin":           { turns: 20, clockwise: false },
  "mexico city":      { turns: 17, clockwise: true  },
  "mexico":           { turns: 17, clockwise: true  },
  "sao paulo":        { turns: 15, clockwise: false },
  "las vegas":        { turns: 17, clockwise: false },
  "abu dhabi":        { turns: 16, clockwise: true  },
  "shanghai":         { turns: 16, clockwise: true  },
  "portimao":         { turns: 15, clockwise: true  },
  "sochi":            { turns: 18, clockwise: true  },
  "istanbul":         { turns: 14, clockwise: false },
  "mugello":          { turns: 15, clockwise: true  },
  "nurburgring":      { turns: 15, clockwise: true  },
};

const _normKey = (s) =>
  String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function getCircuitInfo(meeting) {
  if (!meeting) return { turns: 20, clockwise: true };
  const key = _normKey(meeting.circuit_short_name || "");
  const name = _normKey(meeting.meeting_name || "").replace(/\s*grand\s*prix\s*/, "").trim();
  // Exact match on circuit_short_name
  if (key && CIRCUIT_DATA[key]) return CIRCUIT_DATA[key];
  // Partial match on circuit_short_name
  for (const [k, v] of Object.entries(CIRCUIT_DATA)) {
    if (key && (key.includes(k) || k.includes(key))) return v;
  }
  // Exact match on GP name (stripped)
  if (name && CIRCUIT_DATA[name]) return CIRCUIT_DATA[name];
  // Partial match on GP name
  for (const [k, v] of Object.entries(CIRCUIT_DATA)) {
    if (name && (name.includes(k) || k.includes(name))) return v;
  }
  return { turns: 20, clockwise: true };
}
