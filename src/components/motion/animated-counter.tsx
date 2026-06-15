"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

function formatValue(n: number, decimals: number) {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-CA");
}

/** Ease-out expo — smooth deceleration like Stripe counters */
function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(formatValue(0, decimals));

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      setDisplay(formatValue(value, decimals));
      return;
    }

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = easeOutExpo(progress);
      setDisplay(formatValue(value * eased, decimals));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, decimals, duration, reducedMotion]);

  return (
    <span
      ref={ref}
      className={cn("font-mono tabular-nums", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
