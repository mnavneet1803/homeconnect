"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the window has scrolled past the given threshold (px).
 * Used for the sticky navbar glass transition.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check on mount (in case page is already scrolled on navigation)
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [threshold]);

  return scrolled;
}
