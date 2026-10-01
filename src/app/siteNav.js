// The canonical f1stories.gr site nav, copied from f1StoriesPage/partials/nav.html.
// `npm run check:site` compares it with the live partial.
export const SITE = "https://f1stories.gr";
export const NAV_LINKS = [
  { label: "Αρχική", href: `${SITE}/` },
  { label: "Άρθρα", href: `${SITE}/blog-module/blog/index.html` },
  { label: "YouTube", href: "https://www.youtube.com/@f1_stories_original", external: true },
  { label: "Βαθμολογία", href: `${SITE}/standings/` },
  { label: "Δεδομένα", href: `${SITE}/standings/?tab=tyre-pace`, current: true },
  { label: "Συντάκτες", href: `${SITE}/authors/` },
  { label: "BetCast", href: "https://georgiosbalatzis.github.io/BetCastVisualisation/", external: true },
];
