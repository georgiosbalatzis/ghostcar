import "../ui/editorial.css";

export default function GlobalStyles({ F1 }) {
  return (
    <style>{`
    .app-shell {
      --page:${F1.carbon}; --surface:${F1.carbonLight}; --text:${F1.text};
      --muted:${F1.textDim}; --accent:${F1.blue}; --accent-ink:${F1.accentContrast};
      --rule:${F1.borderLight}; --strong-rule:${F1.border}; --hover:${F1.carbonMid};
      --display:${F1.display};
    }
    .app-shell[data-theme="dark"] {color-scheme:dark}
    .app-shell[data-theme="light"] {color-scheme:light}
  `}</style>
  );
}
