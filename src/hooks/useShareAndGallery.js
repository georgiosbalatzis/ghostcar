import { useCallback, useEffect, useRef, useState } from "react";
import { fmt } from "../helpers.js";

const GALLERY_STORAGE_KEY = "f1s-gallery";
const GALLERY_LIMIT = 20;

function readStoredGallery() {
  try {
    return JSON.parse(localStorage.getItem(GALLERY_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export default function useShareAndGallery({
  shareUrl,
  shareTitle,
  canShare,
  canNativeShare,
  comparison,
  screenshotRef,
  is2DView,
  mob,
  pushToast,
}) {
  const [gallery, setGallery] = useState(readStoredGallery);
  const [shareMsg, setShareMsg] = useState("");
  const [shareDialogUrl, setShareDialogUrl] = useState("");
  const [shareDialogNotice, setShareDialogNotice] = useState("");
  const shareMsgTimerRef = useRef(null);

  useEffect(
    () => () => {
      if (shareMsgTimerRef.current) window.clearTimeout(shareMsgTimerRef.current);
    },
    []
  );

  const bumpShareMsg = useCallback((message) => {
    if (shareMsgTimerRef.current) window.clearTimeout(shareMsgTimerRef.current);
    setShareMsg(message);
    shareMsgTimerRef.current = window.setTimeout(() => setShareMsg(""), 2200);
  }, []);

  const clearShareDialog = useCallback(() => {
    setShareDialogUrl("");
    setShareDialogNotice("");
  }, []);

  const copyShareDialogUrl = useCallback(async () => {
    if (!shareDialogUrl) return;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(shareDialogUrl);
      setShareDialogNotice("Ο σύνδεσμος αντιγράφηκε στο clipboard.");
      bumpShareMsg("ΑΝΤΙΓΡ.");
      pushToast("Ο σύνδεσμος αντιγράφηκε στο clipboard.", "success");
    } catch {
      pushToast("Το clipboard παραμένει μη διαθέσιμο σε αυτή τη συσκευή.", "info");
    }
  }, [bumpShareMsg, pushToast, shareDialogUrl]);

  const share = useCallback(async () => {
    if (!canShare || !shareUrl) return;
    const url = shareUrl;
    window.history.replaceState(null, "", url.split(window.location.origin)[1]);
    if (navigator.share && canNativeShare) {
      try {
        await navigator.share({ title: shareTitle, text: "Σύγκριση γύρων F1 με τηλεμετρία", url });
        clearShareDialog();
        bumpShareMsg("ΕΣΤΑΛΗ");
        pushToast("Άνοιξε το παράθυρο κοινοποίησης.", "success");
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(url);
      setShareDialogUrl(url);
      setShareDialogNotice(
        "Ο σύνδεσμος αντιγράφηκε στο clipboard. Μπορείς να τον κοινοποιήσεις άμεσα ή να τον ξανααντιγράψεις πιο κάτω."
      );
      bumpShareMsg("ΑΝΤΙΓΡ.");
      pushToast("Ο σύνδεσμος αντιγράφηκε στο clipboard.", "success");
    } catch (error) {
      if (error?.name === "AbortError") return;
      setShareDialogUrl(url);
      setShareDialogNotice("Η πρόσβαση στο clipboard μπλοκαρίστηκε. Αντέγραψε τον σύνδεσμο από κάτω.");
      bumpShareMsg("ΕΤΟΙΜΟ");
      pushToast("Ο σύνδεσμος είναι έτοιμος για αντιγραφή.", "info");
    }
  }, [bumpShareMsg, canNativeShare, canShare, clearShareDialog, pushToast, shareTitle, shareUrl]);

  const clearGallery = useCallback(() => {
    setGallery([]);
    try {
      localStorage.removeItem(GALLERY_STORAGE_KEY);
    } catch {}
  }, []);

  const saveToGallery = useCallback(() => {
    if (
      !comparison?.driver1Label ||
      !comparison?.driver2Label ||
      !comparison?.meetingName ||
      !comparison?.lap1Duration ||
      !comparison?.lap2Duration ||
      !shareUrl
    ) {
      return;
    }
    const entry = {
      id: Date.now(),
      d1n: comparison.driver1Label,
      d2n: comparison.driver2Label,
      gp: comparison.meetingName,
      year: comparison.year,
      delta: comparison.delta?.toFixed(3),
      t1: fmt(comparison.lap1Duration),
      t2: fmt(comparison.lap2Duration),
      c1: comparison.color1,
      c2: comparison.color2,
      url: shareUrl,
    };
    const nextGallery = [entry, ...gallery].slice(0, GALLERY_LIMIT);
    setGallery(nextGallery);
    try {
      localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(nextGallery));
    } catch {}
    pushToast("Η σύγκριση αποθηκεύτηκε στη συλλογή.", "success");
  }, [comparison, gallery, pushToast, shareUrl]);

  const generateSocialCard = useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#15151e";
    ctx.fillRect(0, 0, 1200, 630);
    ctx.fillStyle = "#E10600";
    ctx.fillRect(0, 0, 1200, 6);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 42px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("F1 STORIES GHOST CAR", 600, 80);
    ctx.fillStyle = "#E10600";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("Σύγκριση γύρων F1", 600, 115);
    ctx.fillStyle = "#888";
    ctx.font = "24px sans-serif";
    ctx.fillText(comparison?.meetingLabel || "", 600, 160);
    ctx.fillStyle = comparison?.color1 || "#4488ff";
    ctx.font = "bold 72px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(comparison?.driver1Label || "Ο1", 530, 310);
    ctx.fillStyle = "#E10600";
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ΕΝΑΝΤ.", 600, 310);
    ctx.fillStyle = comparison?.color2 || "#ff4488";
    ctx.font = "bold 72px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(comparison?.driver2Label || "Ο2", 670, 310);
    ctx.fillStyle = comparison?.color1 || "#4488ff";
    ctx.font = "bold 32px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(fmt(comparison?.lap1Duration), 530, 380);
    ctx.fillStyle = comparison?.color2 || "#ff4488";
    ctx.font = "bold 32px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(fmt(comparison?.lap2Duration), 670, 380);
    if (comparison?.delta !== null && comparison?.delta !== undefined) {
      ctx.fillStyle = comparison.delta > 0 ? "#E10600" : "#00d26a";
      ctx.font = "bold 48px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${comparison.delta > 0 ? "+" : ""}${comparison.delta.toFixed(3)}s`, 600, 470);
    }
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 570, 1200, 60);
    ctx.fillStyle = "#888";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Δημιουργία F1 Stories • f1stories.gr/ghostcar", 600, 600);
    const anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = `f1stories-${comparison?.driver1Label}-vs-${comparison?.driver2Label}.png`;
    anchor.click();
    pushToast("Η social card κατέβηκε.", "success");
  }, [comparison, pushToast]);

  const takeScreenshot = useCallback(() => {
    if (mob && !is2DView) {
      pushToast(
        "Τα 3D screenshots είναι απενεργοποιημένα στο mobile για πιο ομαλή αναπαραγωγή. Πέρασε σε 2D ή χρησιμοποίησε desktop.",
        "info"
      );
      return;
    }
    const el = screenshotRef.current;
    if (!el) return;
    const canvas = el.querySelector("canvas");
    if (canvas) {
      const anchor = document.createElement("a");
      anchor.href = canvas.toDataURL("image/png");
      anchor.download = `f1stories-ghost-${Date.now()}.png`;
      anchor.click();
      pushToast("Το στιγμιότυπο της πίστας κατέβηκε.", "success");
      return;
    }
    const svg = el.querySelector("svg");
    if (svg) {
      const anchor = document.createElement("a");
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const blob = new Blob([new XMLSerializer().serializeToString(clone)], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      anchor.href = url;
      anchor.download = `f1stories-ghost-${Date.now()}.svg`;
      anchor.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      pushToast("Η καταγραφή της πίστας κατέβηκε.", "success");
      return;
    }
    pushToast("Δεν υπάρχει ακόμη κάτι για λήψη.", "info");
  }, [is2DView, mob, pushToast, screenshotRef]);

  return {
    gallery,
    shareMsg,
    shareDialogUrl,
    shareDialogNotice,
    clearShareDialog,
    copyShareDialogUrl,
    share,
    saveToGallery,
    generateSocialCard,
    takeScreenshot,
    clearGallery,
  };
}
