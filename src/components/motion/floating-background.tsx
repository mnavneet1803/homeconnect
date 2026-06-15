"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface FloatingBackgroundProps {
  className?: string;
  /** @deprecated Orbs removed — kept for API compatibility */
  orbs?: unknown;
  /** Subtle top hairline accent */
  grid?: boolean;
}

/**
 * Calm hero backdrop with optional slow-moving gradient orbs.
 * Restrained motion — no distracting loops.
 */
export function FloatingBackground({
  className,
  grid = false,
}: FloatingBackgroundProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-hero" />

      {!reducedMotion && (
        <>
          <m.div
            className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-brand-100/40 blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute -right-1/4 top-1/4 h-[360px] w-[360px] rounded-full bg-brand-50/60 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      {grid && (
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Static fallback orbs when reduced motion */}
      {reducedMotion && (
        <>
          <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-brand-100/30 blur-3xl" />
          <div className="absolute -right-1/4 top-1/4 h-[360px] w-[360px] rounded-full bg-brand-50/40 blur-3xl" />
        </>
      )}
    </div>
  );
}
