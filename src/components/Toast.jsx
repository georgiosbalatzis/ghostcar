import { fixedSurfaceStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

export default function Toast({ mob, F1, toast, hasPlaybackBar }) {
  if (!toast) return null;

  const isSuccess = toast.tone === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        ...fixedSurfaceStyle({
          right: 16,
          bottom: hasPlaybackBar ? 72 : 16,
          zIndex: 250,
          maxWidth: mob ? "calc(100vw - 32px)" : 320,
        }),
        ...panelSurfaceStyle(F1, {
          background: isSuccess ? `${F1.green}22` : `${F1.blue}18`,
          borderColor: isSuccess ? `${F1.green}55` : `${F1.blue}44`,
          borderRadius: uiRadii.toast,
          padding: "10px 14px",
          boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
        }),
        color: F1.text,
        fontSize: 12,
        lineHeight: 1.5,
      }}
    >
      {toast.message}
    </div>
  );
}
