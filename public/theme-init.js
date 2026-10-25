// Theme before first paint, so there is no flash. See docs/theme.md. Loaded blocking from index.html
// (an external file, so a strict Content-Security-Policy needs no 'unsafe-inline').
// Order: URL ?th= (this view only, never stored) → stored "f1stories-theme" (light, dark, or "auto" = follow the OS,
// left as is) → paper, as on f1-stories.gr. "f1s-theme" is Ghost Car's old key: copied over once when the shared key
// holds no usable value, then removed.
(function () {
  var KEY = "f1stories-theme";
  var LEGACY_KEY = "f1s-theme";
  var theme = new URLSearchParams(window.location.search).get("th");
  var hash = window.location.hash.slice(1); // host page's #light / #dark, embeds only (docs/theme.md)
  if (hash === "light" || hash === "dark") theme = hash;
  var stored = null;
  try {
    stored = localStorage.getItem(KEY);
    var legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy !== null) {
      if (stored !== "light" && stored !== "dark" && stored !== "auto" && (legacy === "light" || legacy === "dark")) {
        stored = legacy;
        localStorage.setItem(KEY, legacy);
      }
      localStorage.removeItem(LEGACY_KEY);
    }
  } catch (e) {}
  if (stored === "auto") stored = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (theme !== "light" && theme !== "dark") theme = stored === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
})();
