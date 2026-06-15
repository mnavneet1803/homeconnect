"use client";

import { m } from "framer-motion";
import { premiumHover, premiumHoverTap } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a" | "li";
}

/** Premium hover lift for cards — Apple / Stripe restraint */
export function HoverCard({ children, className, as = "div" }: HoverCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const Component = m[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn("motion-card-hover", className)}
      whileHover={premiumHover}
      whileTap={premiumHoverTap}
    >
      {children}
    </Component>
  );
}
