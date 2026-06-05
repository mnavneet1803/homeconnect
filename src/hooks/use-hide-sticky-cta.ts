"use client";

import { useEffect, useState } from "react";

const FORM_SELECTORS = [
  "#quote",
  "#service-quote",
  "#quote-form",
  "#hero-quote-form",
  "#location-quote",
  "#service-location-quote",
  "#hood-quote",
].join(",");

/** Hide sticky mobile CTA when a quote form section is visible */
export function useHideStickyCta(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(FORM_SELECTORS);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const formVisible = entries.some(
          (e) => e.isIntersecting && e.intersectionRatio > 0.15
        );
        setHidden(formVisible);
      },
      { threshold: [0, 0.15, 0.5], rootMargin: "0px 0px -80px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return hidden;
}
