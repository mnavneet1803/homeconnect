"use client";

import { m } from "framer-motion";
import { hoverLift } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a";
}

export function HoverCard({ children, className, as = "div" }: HoverCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const Component = m[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      whileHover={hoverLift}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
