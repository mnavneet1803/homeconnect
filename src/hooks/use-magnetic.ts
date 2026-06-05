"use client";

import { useRef, useCallback } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface MagneticOptions {
  /** Max displacement in pixels */
  strength?: number;
}

export function useMagnetic({ strength = 0.25 }: MagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * strength;
      const y = (e.clientY - top - height / 2) * strength;
      ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [reducedMotion, strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave, disabled: reducedMotion };
}
