"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/** Trap focus inside container while active; restores focus on deactivate */
export function useFocusTrap(
  active: boolean,
  onEscape?: () => void
) {
  const containerRef = useRef<HTMLElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const onEscapeRef = useRef(onEscape);

  onEscapeRef.current = onEscape;

  useEffect(() => {
    if (!active) return;

    previousFocus.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    if (!container) return;

    const getFocusables = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );

    // Defer focus until the panel is painted (motion + portal mount)
    const focusTimer = window.setTimeout(() => {
      getFocusables()[0]?.focus();
    }, 0);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscapeRef.current?.();
        return;
      }
      if (e.key !== "Tab" || !containerRef.current) return;

      const items = getFocusables();
      if (items.length === 0) return;

      const firstEl = items[0];
      const lastEl = items[items.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [active]);

  return containerRef;
}
