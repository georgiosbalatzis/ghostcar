import { memo, useEffect, useId, useState } from "react";
import { fetchJSON } from "../api.js";
import Icon from "../components/ui/Icon.jsx";
import { NAV_LINKS, SITE } from "./siteNav.js";

// Next race from the OpenF1 calendar (it lists the whole season, including cancellations). Hidden on any failure.
function useNextRace() {
  const [race, setRace] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const year = new Date().getFullYear();
    const upcoming = (sessions) =>
      (Array.isArray(sessions) ? sessions : [])
        .filter((session) => !session.is_cancelled && Date.parse(session.date_start) > Date.now())
        .sort((a, b) => Date.parse(a.date_start) - Date.parse(b.date_start))[0];
    const load = (y) => fetchJSON("/sessions", { year: y, session_name: "Race" }, { signal: controller.signal });
    load(year)
      .then((sessions) => upcoming(sessions) || load(year + 1).then(upcoming))
      .then((next) => next && setRace({ location: next.location, startsAt: Date.parse(next.date_start) }))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return race;
}

function Countdown() {
  const race = useNextRace();
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  if (!race || race.startsAt <= now) return null;
  const minutes = Math.floor((race.startsAt - now) / 60_000);
  const [d, h, m] = [Math.floor(minutes / 1440), Math.floor((minutes % 1440) / 60), minutes % 60];
  return (
    <p className="masthead__countdown">
      <span aria-hidden="true">🏁</span>
      <span>
        <span className="masthead__race">
          <span className="visually-hidden">Επόμενος αγώνας: </span>
          {race.location}
        </span>
        <b className="num">{`${d}d ${h}h ${m}m`}</b>
      </span>
    </p>
  );
}

function NavLinks({ className }) {
  return NAV_LINKS.map((link) => (
    <a
      key={link.label}
      className={className}
      href={link.href}
      aria-current={link.current ? "page" : undefined}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
    </a>
  ));
}

// The f1stories.gr masthead: logo and wordmark, site sections, next-race countdown, theme toggle.
function SiteMasthead({ isDark, onToggleTheme }) {
  const menuId = useId();
  const themeLabel = isDark ? "Φωτεινό θέμα" : "Σκούρο θέμα";
  return (
    <header
      className="masthead"
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget))
          document.getElementById(menuId)?.hidePopover();
      }}
    >
      <a className="skip-link" href="#content">
        Μετάβαση στο περιεχόμενο
      </a>
      <a className="masthead__brand" href={`${SITE}/`} aria-label="Αρχική σελίδα F1 Stories">
        <img src={`${import.meta.env.BASE_URL}logo-nav.webp`} alt="" width="48" height="48" />
        <span aria-hidden="true">
          F1 STORIES<span className="dot">.</span>
        </span>
      </a>
      <nav className="masthead__nav" aria-label="F1 Stories">
        <NavLinks className="masthead__link" />
      </nav>
      <div className="masthead__end">
        <Countdown />
        <button
          type="button"
          className="icon-btn masthead__theme"
          aria-label={themeLabel}
          title={`${themeLabel} (D)`}
          onClick={onToggleTheme}
        >
          <Icon name={isDark ? "sun" : "moon"} size={20} />
        </button>
        <button type="button" className="masthead__burger" popovertarget={menuId} aria-label="Μενού F1 Stories">
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav id={menuId} popover="auto" className="masthead__menu" aria-label="F1 Stories">
        <NavLinks className="masthead__menu-link" />
      </nav>
    </header>
  );
}

export default memo(SiteMasthead);
