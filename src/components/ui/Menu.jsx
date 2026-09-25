import { useEffect, useId, useRef } from "react";
import Icon from "./Icon.jsx";

// Popover API menu: light dismiss, Escape and top-layer rendering are native.
// We only position it under its trigger and add arrow-key movement between items.
export default function Menu({ label, trigger, triggerClassName = "icon-btn", align = "end", groups }) {
  const id = useId();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // React 18 does not wire onToggle for popovers, so listen natively.
  useEffect(() => {
    const menu = menuRef.current;
    const beforeToggle = (event) => {
      if (event.newState !== "open") return;
      const rect = triggerRef.current.getBoundingClientRect();
      menu.style.top = `${rect.bottom + 6}px`;
      if (align === "end") {
        menu.style.left = "auto";
        menu.style.right = `${Math.max(8, window.innerWidth - rect.right)}px`;
      } else {
        menu.style.right = "auto";
        menu.style.left = `${Math.max(8, rect.left)}px`;
      }
    };
    const toggle = (event) => {
      if (event.newState !== "open") return;
      const rect = triggerRef.current.getBoundingClientRect();
      if (rect.bottom + 6 + menu.offsetHeight > window.innerHeight - 8) {
        menu.style.top = `${Math.max(8, rect.top - menu.offsetHeight - 6)}px`;
      }
      menu.querySelector(".menu__item:not(:disabled)")?.focus();
    };
    menu.addEventListener("beforetoggle", beforeToggle);
    menu.addEventListener("toggle", toggle);
    return () => {
      menu.removeEventListener("beforetoggle", beforeToggle);
      menu.removeEventListener("toggle", toggle);
    };
  }, [align]);

  const onKeyDown = (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const items = [...menuRef.current.querySelectorAll(".menu__item:not(:disabled)")];
    const index = items.indexOf(document.activeElement);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? items.length - 1
          : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  };

  const run = (action) => {
    menuRef.current?.hidePopover();
    triggerRef.current?.focus();
    action();
  };

  const visibleGroups = groups
    .map((group) => ({ ...group, items: group.items.filter((item) => !item.hidden) }))
    .filter((group) => group.items.length);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        popovertarget={id}
        aria-haspopup="menu"
        aria-label={typeof trigger === "string" ? undefined : label}
        title={typeof trigger === "string" ? undefined : label}
      >
        {trigger}
      </button>
      <div ref={menuRef} id={id} popover="auto" role="menu" aria-label={label} className="menu" onKeyDown={onKeyDown}>
        {/* Groups are separated by a rule; their names are for assistive technology only. */}
        {visibleGroups.map((group, groupIndex) => (
          <div
            className="menu__group"
            role="group"
            aria-label={group.label || undefined}
            key={group.label || groupIndex}
          >
            {group.items.map((item) => (
              <button
                key={item.label}
                type="button"
                role={item.checked === undefined ? "menuitem" : "menuitemradio"}
                aria-checked={item.checked}
                className="menu__item"
                disabled={item.disabled}
                onClick={() => run(item.onSelect)}
              >
                {item.icon && <Icon name={item.icon} size={18} />}
                {item.label}
                {item.hint && <span className="menu__item-hint">{item.hint}</span>}
                {item.checked && <Icon name="check" size={16} className="icon menu__item-check" />}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
