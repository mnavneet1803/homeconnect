"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface Options {
  /** fraction of the element that must be visible to start playback */
  threshold?: number;
  /** reset to first frame when it leaves view (default: just pause) */
  resetOnLeave?: boolean;
  /** when true, disables autoplay (e.g. user manually paused) */
  disabled?: boolean;
}

/**
 * Centralized muted-autoplay behaviour used by every video surface.
 * Plays the referenced <video> only while it is >= `threshold` visible and
 * motion is allowed; pauses when scrolled away or the tab is hidden. iOS/Safari
 * autoplay is handled by requiring muted + playsInline on the element; a
 * rejected play() promise is swallowed so the poster simply remains.
 */
export function useInViewAutoplay({
  threshold = 0.5,
  resetOnLeave = false,
  disabled = false,
}: Options = {}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion || disabled) {
      el.pause();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            void el.play().catch(() => {});
          } else {
            el.pause();
            if (resetOnLeave) el.currentTime = 0;
          }
        }
      },
      { threshold: [0, threshold, 1] }
    );
    io.observe(el);

    const onVisibility = () => {
      if (document.hidden) el.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reducedMotion, disabled, threshold, resetOnLeave]);

  return { ref, reducedMotion };
}
