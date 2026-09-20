export { CIRCUIT_DATA, getCircuitInfo } from "./domain/circuit.js";

// F1Stories editorial palette, verified against the rendered homepage in both themes.
// Legacy accent property names remain aliases so consumers keep their existing contracts.
const typography = {
  sans: "'IBM Plex Sans', system-ui, sans-serif",
  mono: "'IBM Plex Sans', system-ui, sans-serif",
  display: "'Barlow Condensed', 'IBM Plex Sans', sans-serif",
};
export const F1_DARK = {
  ...typography,
  red: "#ff826b", redDark: "#ed4c32", redGlow: "#ff826b12",
  blue: "#ff826b", blueDark: "#ffa28f", blueGlow: "#ff826b12",
  accentContrast: "#17191b",
  carbon: "#181a1c", carbonLight: "#222426", carbonMid: "#2c2e30",
  panelBg: "#181a1c", overlay: "#222426", cardBg: "#222426", inputBg: "#222426",
  text: "#eee7dc", textDim: "#bcb8b0", textMuted: "#aaa69e",
  border: "#47494a", borderLight: "#36383a",
  green: "#90c8a6", greenDim: "#77b68f", yellow: "#dfc078", purple: "#bd9bd1", white: "#ffffff",
  fogColor: 0x181a1c, groundColor: 0x222426,
  trackColor: 0x515455, lineColor: 0xed4c32, sceneBg: 0x181a1c,
};
export const F1_LIGHT = {
  ...typography,
  red: "#a82e1c", redDark: "#8e281a", redGlow: "#a82e1c12",
  blue: "#a82e1c", blueDark: "#8e281a", blueGlow: "#a82e1c12",
  accentContrast: "#f2eee4",
  carbon: "#f2eee4", carbonLight: "#e9e3d6", carbonMid: "#dfd9ca",
  panelBg: "#f2eee4", overlay: "#e9e3d6", cardBg: "#e9e3d6", inputBg: "#f2eee4",
  text: "#20251f", textDim: "#505649", textMuted: "#5b6256",
  border: "#b6b6a7", borderLight: "#c8c8b9",
  green: "#286342", greenDim: "#286342", yellow: "#85600d", purple: "#785392", white: "#ffffff",
  fogColor: 0xe9e3d6, groundColor: 0xdfd9ca,
  trackColor: 0x777b72, lineColor: 0xa82e1c, sceneBg: 0xe9e3d6,
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
