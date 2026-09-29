import { useCallback, useState } from "react";
import { fmt } from "../helpers.js";

const GALLERY_STORAGE_KEY = "f1s-gallery";
const GALLERY_LIMIT = 20;

function readStoredGallery() {
  try {
    const stored = JSON.parse(localStorage.getItem(GALLERY_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function writeStoredGallery(entries) {
  try {
    if (entries.length) localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(entries));
    else localStorage.removeItem(GALLERY_STORAGE_KEY);
  } catch {}
}

function download(href, filename) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = filename;
  anchor.click();
}

// Publishing utilities: link, native share, saved comparisons (local only) and image exports.
// `comparison` describes the loaded replay (not the live selector state).
export default function useShareAndGallery({
  shareUrl,
  shareTitle,
  canNativeShare,
  comparison,
  screenshotRef,
  is2DView,
  mob,
  pushToast,
  onLinkFallback,
}) {
  const [gallery, setGallery] = useState(readStoredGallery);

  const updateGallery = useCallback((updater) => {
    setGallery((current) => {
      const next = updater(current);
      writeStoredGallery(next);
      return next;
    });
  }, []);

  const copyText = useCallback(async (text) => {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(text);
  }, []);

  const copyLink = useCallback(async () => {
    if (!shareUrl) return;
    window.history.replaceState(null, "", shareUrl.split(window.location.origin)[1]);
    if (navigator.share && canNativeShare) {
      try {
        await navigator.share({ title: shareTitle, text: "Σύγκριση γύρων F1 με τηλεμετρία", url: shareUrl });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    try {
      await copyText(shareUrl);
      pushToast("Ο σύνδεσμος αντιγράφηκε.");
    } catch {
      // Clipboard blocked: show the link so it can be copied by hand.
      onLinkFallback?.(shareUrl);
    }
  }, [canNativeShare, copyText, onLinkFallback, pushToast, shareTitle, shareUrl]);

  const saveToGallery = useCallback(() => {
    if (!comparison?.drivers?.length || !shareUrl) return;
    const [first, second] = comparison.drivers;
    const entry = {
      id: Date.now(),
      d1n: first?.label,
      d2n: second?.label,
      l1: first?.lapNumber,
      l2: second?.lapNumber,
      extra: comparison.drivers.slice(2).map((driver) => driver.label),
      gp: comparison.meetingName,
      session: comparison.sessionLabel,
      year: comparison.year,
      delta: comparison.delta?.toFixed(3),
      t1: fmt(first?.lapDuration),
      t2: fmt(second?.lapDuration),
      c1: first?.color,
      c2: second?.color,
      url: shareUrl,
    };
    updateGallery((current) => [entry, ...current.filter((item) => item.url !== shareUrl)].slice(0, GALLERY_LIMIT));
    pushToast("Η σύγκριση αποθηκεύτηκε.");
  }, [comparison, pushToast, shareUrl, updateGallery]);

  const removeFromGallery = useCallback(
    (id) => updateGallery((current) => current.filter((item) => item.id !== id)),
    [updateGallery]
  );

  const clearGallery = useCallback(() => updateGallery(() => []), [updateGallery]);

  // A 1200×630 card in the Data Desk style: paper, crumb, GHOST CAR., the event, ruled driver rows, signal band.
  const generateSocialCard = useCallback(async () => {
    if (!comparison?.drivers?.length) return;
    const plex = (weight, size) => `${weight} ${size}px "IBM Plex Sans", system-ui, sans-serif`;
    const barlow = (size) => `700 ${size}px "Barlow Condensed", "IBM Plex Sans", sans-serif`;
    const event = `${comparison.meetingName || ""} ${comparison.year || ""} · ${comparison.sessionLabel || ""}`;
    // Canvas text only uses fonts that have already loaded (Greek comes from its own subset).
    await Promise.all([
      document.fonts.load(barlow(150), "GHOST CAR."),
      document.fonts.load(plex(400, 30), event),
      document.fonts.load(plex(600, 30), "ΣΥΓΚΡΙΣΗ ΓΥΡΩΝ Κατατακτήριες"),
    ]).catch(() => {});
    const PAPER = "#f2eee4";
    const INK = "#20251f";
    const MUTED = "#555c50";
    const RULE = "#c8c8b9";
    const SIGNAL = "#ed4c32";
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, 1200, 630);

    ctx.fillStyle = INK;
    ctx.fillRect(64, 56, 1072, 2);
    ctx.font = plex(600, 18);
    ctx.letterSpacing = "2.5px";
    ctx.fillText("F1 STORIES / DATA DESK", 64, 92);
    ctx.textAlign = "right";
    ctx.fillText("ΣΥΓΚΡΙΣΗ ΓΥΡΩΝ · OPENF1", 1136, 92);
    ctx.textAlign = "left";
    ctx.letterSpacing = "0px";

    ctx.font = barlow(150);
    ctx.fillText("GHOST CAR", 58, 262);
    ctx.fillStyle = SIGNAL;
    ctx.fillText(".", 58 + ctx.measureText("GHOST CAR").width, 262);
    ctx.fillStyle = INK;
    ctx.font = plex(400, 30);
    ctx.fillText(event, 64, 318);

    const drivers = comparison.drivers.slice(0, 4);
    drivers.forEach((driver, index) => {
      const y = 380 + index * 44;
      ctx.fillStyle = driver.color;
      ctx.fillRect(64, y - 26, 5, 34);
      ctx.fillStyle = INK;
      ctx.font = plex(500, 26);
      ctx.fillText(driver.name || driver.label, 84, y);
      ctx.fillStyle = MUTED;
      ctx.font = plex(400, 22);
      ctx.fillText(`Γύρος ${driver.lapNumber ?? ""}`, 520, y);
      ctx.fillStyle = INK;
      ctx.font = plex(600, 26);
      ctx.textAlign = "right";
      ctx.fillText(driver.gap ? `+${driver.gap.toFixed(3)}` : fmt(driver.lapDuration), 820, y);
      ctx.textAlign = "left";
      ctx.fillStyle = RULE;
      ctx.fillRect(64, y + 14, 756, 1);
    });

    const [first, second] = comparison.drivers;
    const result =
      comparison.drivers.length === 2 && comparison.delta
        ? `Τελική διαφορά ${Math.abs(comparison.delta).toFixed(3)} s · ${(comparison.delta < 0 ? first : second).label} ταχύτερος`
        : `Ταχύτερος γύρος: ${(comparison.drivers.find((driver) => driver.gap === 0) || first).label}`;
    ctx.fillStyle = SIGNAL;
    ctx.fillRect(0, 560, 1200, 70);
    ctx.fillStyle = "#17191b";
    ctx.font = plex(500, 24);
    ctx.fillText(`● ${result}`, 64, 604);
    ctx.font = barlow(34);
    ctx.textAlign = "right";
    ctx.fillText("EVERY TENTH COUNTS.", 1136, 606);

    download(
      canvas.toDataURL("image/png"),
      `f1stories-${comparison.drivers.map((driver) => driver.label).join("-")}.png`
    );
    pushToast("Η κάρτα κοινοποίησης κατέβηκε.");
  }, [comparison, pushToast]);

  const takeScreenshot = useCallback(() => {
    if (mob && !is2DView) {
      pushToast("Η λήψη εικόνας 3D δεν υποστηρίζεται στο κινητό. Πέρασε σε 2D.");
      return;
    }
    const el = screenshotRef.current;
    if (!el) return;
    const canvas = el.querySelector("canvas");
    if (canvas) {
      download(canvas.toDataURL("image/png"), `f1stories-ghost-${Date.now()}.png`);
      pushToast("Η εικόνα κατέβηκε.");
      return;
    }
    const svg = el.querySelector("svg.track-map");
    if (svg) {
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      // The paths are styled by the app's stylesheet, which the file won't have: write each path's
      // resolved stroke onto it, and paint the stage colour behind the track.
      const sourcePaths = svg.querySelectorAll("path");
      clone.querySelectorAll("path").forEach((path, index) => {
        const style = getComputedStyle(sourcePaths[index]);
        for (const name of ["fill", "stroke", "stroke-width", "stroke-linejoin"]) {
          path.setAttribute(name, style.getPropertyValue(name));
        }
        path.removeAttribute("class");
        path.removeAttribute("style");
      });
      const [x, y, width, height] = svg.getAttribute("viewBox").split(" ");
      const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      Object.entries({ x, y, width, height }).forEach(([name, value]) => background.setAttribute(name, value));
      const stageColor = getComputedStyle(el.closest(".stage") || el).backgroundColor;
      const transparent = stageColor === "transparent" || stageColor === "rgba(0, 0, 0, 0)";
      background.setAttribute("fill", transparent ? getComputedStyle(document.body).backgroundColor : stageColor);
      clone.prepend(background);
      const blob = new Blob([new XMLSerializer().serializeToString(clone)], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      download(url, `f1stories-ghost-${Date.now()}.svg`);
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      pushToast("Η εικόνα της πίστας κατέβηκε.");
      return;
    }
    pushToast("Δεν υπάρχει ακόμη κάτι για λήψη.");
  }, [is2DView, mob, pushToast, screenshotRef]);

  return {
    gallery,
    copyText,
    copyLink,
    saveToGallery,
    removeFromGallery,
    clearGallery,
    generateSocialCard,
    takeScreenshot,
  };
}
