// The canonical f1stories.gr site nav, copied from f1StoriesPage/partials/nav.html.
// `npm run check:site` compares it with the live partial.
export const AGGREGATED = import.meta.env.VITE_F1STORIES_BUILD === "true";
export const SITE = AGGREGATED ? "" : "https://f1stories.gr";
export const BETCAST_URL = AGGREGATED ? "/betcast/" : "https://georgiosbalatzis.github.io/BetCastVisualisation/";
export const PUBLIC_APP_URL = AGGREGATED ? "/ghostcar/" : "https://georgiosbalatzis.github.io/ghostcar/";
export const NAV_LINKS = [
  { label: "Αρχική", href: `${SITE}/` },
  { label: "Άρθρα", href: `${SITE}/blog-module/blog/index.html` },
  { label: "YouTube", href: "https://www.youtube.com/@f1_stories_original", external: true },
  { label: "Βαθμολογία", href: `${SITE}/standings/` },
  { label: "Δεδομένα", href: `${SITE}/standings/?tab=tyre-pace`, current: true },
  { label: "Συντάκτες", href: `${SITE}/authors/` },
  { label: "BetCast", href: BETCAST_URL, external: !AGGREGATED },
];

// Race Desk product switcher, per f1StoriesPage/docs/race-desk-architecture.md (docs/race-desk.md). Same order and
// same-tab links under the canonical origin. GHOST CAR has
// no href here: DeskHero links it to the app's own base, so dev and preview builds stay local.
export const RACE_DESK_LINKS = [
  { label: "THE GRID", href: `${SITE}/standings/` },
  {
    label: "TELEMETRY",
    href: AGGREGATED ? "/telemetry/" : "https://georgiosbalatzis.github.io/f1-telemetry-dashboard/",
  },
  { label: "GHOST CAR", current: true },
  { label: "TYRES", href: "https://georgiosbalatzis.github.io/Tyres/" },
];
