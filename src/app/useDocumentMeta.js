import { useEffect } from "react";

const APP_NAME = "F1 Stories Ghost Car";
const DEFAULT_TITLE = `${APP_NAME} | Σύγκριση γύρων F1`;
const DEFAULT_DESCRIPTION = "Σύγκρινε γύρους Formula 1 σε 3D και 2D με πραγματική τηλεμετρία από το OpenF1.";

function setMeta(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export { APP_NAME };

export default function useDocumentMeta(model, shareUrl) {
  useEffect(() => {
    const names = model?.drivers.map((driver) => driver.label).join(" – ");
    const title = model ? `${names} · ${model.meetingName} ${model.year} | ${APP_NAME}` : DEFAULT_TITLE;
    const description = model
      ? `Σύγκριση γύρων ${names} στο ${model.meetingName} ${model.year} (${model.sessionLabel.toLowerCase()}) με τηλεμετρία.`
      : DEFAULT_DESCRIPTION;
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', shareUrl || "https://f1stories.gr/ghostcar/");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [model, shareUrl]);
}
