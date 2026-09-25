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

  const generateSocialCard = useCallback(() => {
    if (!comparison?.drivers?.length) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    const font = (weight, size) => `${weight} ${size}px "IBM Plex Sans", system-ui, sans-serif`;
    ctx.fillStyle = "#0c0e0f";
    ctx.fillRect(0, 0, 1200, 630);
    ctx.fillStyle = "#e45a43";
    ctx.fillRect(80, 80, 40, 3);
    ctx.fillStyle = "#b5b5b0";
    ctx.font = font(500, 26);
    ctx.fillText(`F1 STORIES  /  Ghost Car`, 80, 130);
    ctx.fillStyle = "#f1efea";
    ctx.font = font(600, 44);
    ctx.fillText(`${comparison.meetingName || ""} ${comparison.year || ""}`, 80, 200);
    ctx.fillStyle = "#858a88";
    ctx.font = font(400, 28);
    ctx.fillText(comparison.sessionLabel || "", 80, 244);
    comparison.drivers.slice(0, 4).forEach((driver, index) => {
      const y = 340 + index * 62;
      ctx.fillStyle = driver.color;
      ctx.fillRect(80, y - 30, 6, 38);
      ctx.fillStyle = "#f1efea";
      ctx.font = font(600, 40);
      ctx.fillText(driver.label, 104, y);
      ctx.font = font(400, 36);
      ctx.fillText(fmt(driver.lapDuration), 260, y);
      ctx.fillStyle = "#858a88";
      ctx.fillText(driver.gap ? `+${driver.gap.toFixed(3)}` : "", 480, y);
    });
    ctx.fillStyle = "#858a88";
    ctx.font = font(400, 22);
    ctx.fillText("Δεδομένα OpenF1 · f1stories.gr/ghostcar", 80, 570);
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
      // Resolve CSS variables so the exported file renders outside the app.
      const styles = getComputedStyle(svg);
      clone.style.setProperty("--track", styles.getPropertyValue("--track"));
      clone.style.setProperty("--track-edge", styles.getPropertyValue("--track-edge"));
      clone.style.setProperty("--text", styles.getPropertyValue("--text"));
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
