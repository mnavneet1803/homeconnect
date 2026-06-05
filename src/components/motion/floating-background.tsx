"use client";

import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";

interface FloatingOrb {
  className: string;
  duration: number;
  delay?: number;
  x?: number[];
  y?: number[];
}

const defaultOrbs: FloatingOrb[] = [
  {
    className:
      "left-[10%] top-[15%] h-72 w-72 rounded-full bg-brand-400/10 blur-3xl",
    duration: 22,
    x: [0, 24, -12, 0],
    y: [0, -18, 10, 0],
  },
  {
    className:
      "right-[5%] top-[25%] h-96 w-96 rounded-full bg-accent-500/8 blur-3xl",
    duration: 28,
    delay: 2,
    x: [0, -20, 15, 0],
    y: [0, 14, -8, 0],
  },
  {
    className:
      "bottom-[10%] left-[35%] h-64 w-64 rounded-full bg-brand-300/10 blur-3xl",
    duration: 20,
    delay: 1,
    x: [0, 16, -10, 0],
    y: [0, -12, 8, 0],
  },
];

interface FloatingBackgroundProps {
  className?: string;
  orbs?: FloatingOrb[];
  /** Subtle grid overlay (Vercel-style) */
  grid?: boolean;
}

export function FloatingBackground({
  className,
  orbs = defaultOrbs,
  grid = true,
}: FloatingBackgroundProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,118,110,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,118,110,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
          }}
        />
      )}
      {!reducedMotion &&
        orbs.map((orb, i) => (
          <m.div
            key={i}
            className={cn("absolute", orb.className)}
            animate={{ x: orb.x ?? [0, 12, 0], y: orb.y ?? [0, -10, 0] }}
            transition={{
              duration: orb.duration,
              delay: orb.delay ?? 0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
