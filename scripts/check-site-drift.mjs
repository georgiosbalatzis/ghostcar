// Has f1stories.gr changed since Ghost Car copied its nav, palette and logo? Ghost Car is hosted separately and
// copies these (see REWORK_TASKS.md §1), so this is how drift gets noticed. Needs network.
// Usage: npm run check:site   (exit code 1 when something changed)
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { NAV_LINKS, SITE } from "../src/app/siteNav.js";

const RAW = "https://raw.githubusercontent.com/georgiosbalatzis/f1StoriesPage/main";

// The site's editorial palette as copied into src/styles/tokens.css on 29 Sep 2026. When the site changes, update
// tokens.css (and the contrast checks behind it), then this snapshot.
const PALETTE = {
  dark: {
    "--bg-base": "#1b1a19",
    "--bg-surface": "#242321",
    "--bg-surface-alt": "#2e2c29",
    "--text-primary": "#eee8db",
    "--text-secondary": "#b6bbac",
    "--border": "#4b5146",
    "--accent": "#ff775f",
    "--signal": "#ed4c32",
    "--signal-ink": "#17191b",
  },
  light: {
    "--bg-base": "#f2eee4",
    "--bg-surface": "#e9e3d6",
    "--bg-surface-alt": "#dfd9ca",
    "--text-primary": "#20251f",
    "--text-secondary": "#5b6256",
    "--border": "#c8c8b9",
    "--accent": "#a82e1c",
  },
};

const text = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
};
const problems = [];

// 1. Canonical nav links (desktop list).
const nav = await text(`${RAW}/partials/nav.html`);
const desktop = nav.slice(nav.indexOf('id="nav-links"'), nav.indexOf("blog-nav-right"));
const siteLinks = [...desktop.matchAll(/<a href="([^"]+)"[^>]*>(?:<svg[\s\S]*?<\/svg>)?\s*([^<]+)<\/a>/g)].map(
  ([, href, label]) => ({ href: href.startsWith("/") ? `${SITE}${href}` : href, label: label.trim() })
);
const ours = NAV_LINKS.map(({ href, label }) => ({ href, label }));
if (JSON.stringify(siteLinks) !== JSON.stringify(ours)) {
  problems.push(
    `Nav links differ (update src/app/siteNav.js):\n    site: ${siteLinks.map((l) => `${l.label} ${l.href}`).join("\n          ")}\n    ours: ${ours.map((l) => `${l.label} ${l.href}`).join("\n          ")}`
  );
}

// 2. Editorial palette: the dark block, then the light override.
const css = await text(`${RAW}/styles/editorial.css`);
const block = (selector) => {
  const start = css.indexOf(selector);
  return start < 0 ? "" : css.slice(css.indexOf("{", start), css.indexOf("}", start));
};
const blocks = {
  dark: block("body.editorial-page,\n.editorial-preview {"),
  light: block('[data-theme="light"] body.editorial-page,\n[data-theme="light"] .editorial-preview {'),
};
for (const [theme, expected] of Object.entries(PALETTE)) {
  if (!blocks[theme]) {
    problems.push(`Could not find the ${theme} editorial block in styles/editorial.css (selectors changed?)`);
    continue;
  }
  for (const [name, value] of Object.entries(expected)) {
    const found = blocks[theme]
      .match(new RegExp(`${name}:\\s*([^;]+);`))?.[1]
      .trim()
      .toLowerCase();
    if (found !== value)
      problems.push(`${theme} ${name}: site ${found ?? "missing"}, copied ${value} (update src/styles/tokens.css)`);
  }
}

// 3. The nav logo.
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
const liveLogo = Buffer.from(await (await fetch(`${SITE}/images/logo-nav.webp`)).arrayBuffer());
const ourLogo = await readFile(new URL("../public/logo-nav.webp", import.meta.url));
if (hash(liveLogo) !== hash(ourLogo))
  problems.push("The nav logo changed: copy f1stories.gr/images/logo-nav.webp to public/.");

if (problems.length) {
  console.error(`f1stories.gr has changed since Ghost Car copied it:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(
  `In step with f1stories.gr: ${ours.length} nav links, ${Object.keys(PALETTE.dark).length + Object.keys(PALETTE.light).length} palette values, nav logo.`
);
