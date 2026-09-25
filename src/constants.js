export { CIRCUIT_DATA, getCircuitInfo } from "./domain/circuit.js";

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

// Featured comparisons: editorial stories, loaded with each driver's fastest lap in the session.
export const PRESETS = [
  { year: 2026, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 12, d2: 63, a1: "ANT", a2: "RUS", place: "Ιαπωνία", title: "Ο Antonelli κλειδώνει την pole" },
  { year: 2026, meeting: "Chinese Grand Prix", session: "Qualifying", d1: 12, d2: 63, a1: "ANT", a2: "RUS", place: "Κίνα", title: "Ο νεαρότερος poleman στην ιστορία" },
  { year: 2025, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 81, d2: 4, a1: "PIA", a2: "NOR", place: "Άμπου Ντάμπι", title: "Τολμηρό προσπέρασμα στον 1ο γύρο" },
  { year: 2025, meeting: "Miami Grand Prix", session: "Sprint Qualifying", d1: 12, d2: 81, a1: "ANT", a2: "PIA", place: "Μαϊάμι", title: "Εντυπωσιακή πρώτη pole" },
  { year: 2025, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 4, a1: "VER", a2: "NOR", place: "Ιαπωνία", title: "Μαγική pole στη Suzuka" },
  { year: 2025, meeting: "Chinese Grand Prix", session: "Sprint", d1: 44, d2: 81, a1: "HAM", a2: "PIA", place: "Κίνα", title: "Η πρώτη νίκη της Ferrari" },
  { year: 2024, meeting: "Azerbaijan Grand Prix", session: "Race", d1: 81, d2: 16, a1: "PIA", a2: "LEC", place: "Αζερμπαϊτζάν", title: "Άμυνα μέχρι τέλους στο Μπακού" },
  { year: 2024, meeting: "British Grand Prix", session: "Race", d1: 44, d2: 1, a1: "HAM", a2: "VER", place: "Βρετανία", title: "Η 9η νίκη-ρεκόρ στο Silverstone" },
  { year: 2024, meeting: "Canadian Grand Prix", session: "Qualifying", d1: 63, d2: 1, a1: "RUS", a2: "VER", place: "Καναδάς", title: "Ίδιος χρόνος στον γύρο" },
  { year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 81, a1: "LEC", a2: "PIA", place: "Μονακό", title: "Μάχη για την pole στην έδρα" },
  { year: 2023, meeting: "Las Vegas Grand Prix", session: "Race", d1: 16, d2: 11, a1: "LEC", a2: "PER", place: "Λας Βέγκας", title: "Βουτιά στον τελευταίο γύρο" },
  { year: 2023, meeting: "Qatar Grand Prix", session: "Sprint Shootout", d1: 81, d2: 4, a1: "PIA", a2: "NOR", place: "Κατάρ", title: "Μονομαχία McLaren στο sprint" },
  { year: 2023, meeting: "Azerbaijan Grand Prix", session: "Qualifying", d1: 16, d2: 1, a1: "LEC", a2: "VER", place: "Αζερμπαϊτζάν", title: "Τρίτη σερί pole" },
  { year: 2023, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 1, d2: 14, a1: "VER", a2: "ALO", place: "Μονακό", title: "Η pole χάνεται από τον Alonso" },
  { year: 2022, meeting: "Hungarian Grand Prix", session: "Qualifying", d1: 63, d2: 55, a1: "RUS", a2: "SAI", place: "Ουγγαρία", title: "Η πρώτη pole-έκπληξη" },
  { year: 2022, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 16, a1: "VER", a2: "LEC", place: "Ιαπωνία", title: "Απίστευτα κλειστή pole στη Suzuka" },
  { year: 2022, meeting: "São Paulo Grand Prix", session: "Qualifying", d1: 20, d2: 1, a1: "MAG", a2: "VER", place: "Σάο Πάολο", title: "Εκπληκτική pole sprint" },
  { year: 2021, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 1, d2: 44, a1: "VER", a2: "HAM", place: "Άμπου Ντάμπι", title: "Ο τελικός του τίτλου" },
  { year: 2021, meeting: "Saudi Arabian Grand Prix", session: "Qualifying", d1: 44, d2: 1, a1: "HAM", a2: "VER", place: "Σαουδική Αραβία", title: "Ο Verstappen βρίσκει τοίχο" },
  { year: 2021, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 1, a1: "RUS", a2: "VER", place: "Βέλγιο", title: "Χάος στις βρεγμένες κατατακτήριες" },
];

export const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
export const CAM_LABELS = { orbit: "Ελεύθερη", follow1: "Πίσω από τον 1ο", follow2: "Πίσω από τον 2ο", top: "Από ψηλά", cinematic: "Κινηματογραφική" };
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
