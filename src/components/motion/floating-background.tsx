"use client";

import { cn } from "@/lib/utils/cn";

interface FloatingBackgroundProps {
  className?: string;
  /** @deprecated Orbs removed — kept for API compatibility */
  orbs?: unknown;
  /** Subtle warm gradient wash */
  grid?: boolean;
}

/**
 * Static backdrop — no animated orbs or grid overlays.
 * Premium, calm, healthcare-inspired restraint.
 */
export function FloatingBackground({
  className,
  grid = false,
}: FloatingBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      {grid && (
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
