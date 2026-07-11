"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/** Avoids the SSR warning while still syncing before the browser paints. */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Returns true once the window has scrolled past the given threshold (px).
 * Syncs immediately (before paint) on mount so a reload mid-scroll — or with
 * browser scroll restoration — starts in the correct state with no flash.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const checkScroll = () => setScrolled(window.scrollY > threshold);

    // Sync immediately (covers reload mid-scroll + scroll restoration).
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [threshold]);

  return scrolled;
}
