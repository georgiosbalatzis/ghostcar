// One stroke family (1.5px on a 20px grid). Paths only; no icon library for ~20 glyphs.
const PATHS = {
  play: <path d="M6.5 4.5v11l9-5.5z" fill="currentColor" stroke="none" />,
  pause: <path d="M6.5 4.5v11M13.5 4.5v11" strokeWidth="2.2" />,
  restart: <path d="M4.5 4.5v4h4M4.9 8.5A6 6 0 1 1 4.3 12" />,
  loop: (
    <path d="M14.5 3.5l2 2-2 2M16.5 5.5h-9a3.5 3.5 0 0 0-3.5 3.5M5.5 16.5l-2-2 2-2M3.5 14.5h9a3.5 3.5 0 0 0 3.5-3.5" />
  ),
  share: <path d="M10 12.5V3.5M6.5 7L10 3.5 13.5 7M4.5 10.5v5.5h11v-5.5" />,
  more: (
    <g fill="currentColor" stroke="none">
      <circle cx="4.5" cy="10" r="1.4" />
      <circle cx="10" cy="10" r="1.4" />
      <circle cx="15.5" cy="10" r="1.4" />
    </g>
  ),
  close: <path d="M5 5l10 10M15 5L5 15" />,
  check: <path d="M4.5 10.5l3.5 3.5 7.5-8" />,
  edit: <path d="M3.5 6h8M14.5 6h2M3.5 14h2M8.5 14h8M11.5 4v4M5.5 12v4" />,
  sun: (
    <path d="M10 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4" />
  ),
  moon: <path d="M15.5 12.5A6 6 0 0 1 7.5 4.5a6 6 0 1 0 8 8z" />,
  plus: <path d="M10 4.5v11M4.5 10h11" />,
  link: <path d="M8.5 11.5l3-3M9 6l1.5-1.5a3 3 0 0 1 4.2 4.2L13 10.5M11 14l-1.5 1.5a3 3 0 0 1-4.2-4.2L7 9.5" />,
  code: <path d="M7 6l-4 4 4 4M13 6l4 4-4 4" />,
  bookmark: <path d="M5.5 3.5h9v13l-4.5-3-4.5 3z" />,
  image: <path d="M3.5 4.5h13v11h-13zM3.5 13l4-4 3.5 3.5 2-2 3.5 3.5M12.5 8a1 1 0 1 0 0-.01" />,
  card: <path d="M3 5.5h14v9H3zM6 9h5M6 11.5h8" />,
  keyboard: <path d="M2.5 5.5h15v9h-15zM5.5 8.5h1M9.5 8.5h1M13.5 8.5h1M6.5 11.5h7" />,
  chart: <path d="M3.5 16.5h13M5.5 13l3-4 3 2.5 4-6" />,
  star: <path d="M10 3.5l2 4.1 4.5.6-3.3 3.1.8 4.5-4-2.2-4 2.2.8-4.5-3.3-3.1 4.5-.6z" />,
  layers: <path d="M10 3.5l7 3.5-7 3.5L3 7zM3 10.5l7 3.5 7-3.5M3 13.5l7 3.5 7-3.5" />,
  film: <path d="M3.5 4.5h13v11h-13zM3.5 8h13M3.5 12h13M7 4.5v3.5M13 4.5v3.5M7 12v3.5M13 12v3.5" />,
  arrow: <path d="M4.5 10h11M11 5.5l4.5 4.5-4.5 4.5" />,
  external: <path d="M8.5 4.5h-4v11h11v-4M11.5 3.5h5v5M16.5 3.5l-7 7" />,
  trash: <path d="M4 6h12M8 6V4h4v2M5.5 6l.8 10h7.4l.8-10" />,
};

export default function Icon({ name, size = 20, className = "icon" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

export function IconButton({ icon, label, pressed, className = "", size = 20, ...props }) {
  return (
    <button
      type="button"
      className={`icon-btn ${className}`}
      aria-label={label}
      title={label}
      aria-pressed={pressed}
      {...props}
    >
      <Icon name={icon} size={size} />
    </button>
  );
}
