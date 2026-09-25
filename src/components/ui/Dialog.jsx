import { useEffect, useRef } from "react";
import { IconButton } from "./Icon.jsx";

// Native <dialog>: the platform provides focus trapping, Escape, top-layer stacking and focus return.
// Mount it only while open; it opens itself on mount and reports every close through onClose.
export default function Dialog({ title, subtitle, onClose, variant = "", closeLabel = "Κλείσιμο", children }) {
  const ref = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    const previouslyFocused = document.activeElement;
    if (!dialog.open) dialog.showModal();
    // A close event queued by an earlier close() (e.g. StrictMode's dev remount) can arrive after the
    // dialog has been reopened; only report closes that actually left it closed.
    const handleClose = () => {
      if (!dialog.open) onCloseRef.current?.();
    };
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
      if (dialog.open) dialog.close();
      if (previouslyFocused?.isConnected) previouslyFocused.focus?.({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={`dialog ${variant ? `dialog--${variant}` : ""}`}
      aria-label={title}
      onClick={(event) => {
        // A click on the dialog box itself (not its content) is a click on the backdrop.
        if (event.target === ref.current) ref.current.close();
      }}
    >
      <header className="dialog__header">
        <h2 className="dialog__title">
          {title}
          {subtitle && <span className="dialog__subtitle">{subtitle}</span>}
        </h2>
        <IconButton icon="close" label={closeLabel} onClick={() => ref.current?.close()} />
      </header>
      <div className="dialog__body">{children}</div>
    </dialog>
  );
}
