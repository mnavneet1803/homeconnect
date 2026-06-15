"use client";

import { m } from "framer-motion";
import {
  easePremium,
  revealVariants,
  scrollViewport,
  type RevealVariant,
} from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  /** Animate on mount instead of scroll (hero elements) */
  immediate?: boolean;
  as?: "div" | "section" | "article" | "li" | "p" | "h2" | "h3";
}

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration,
  immediate = false,
  as = "div",
}: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();
  const Component = m[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: scrollViewport })}
      variants={revealVariants[variant]}
      transition={{ delay, ease: easePremium, ...(duration ? { duration } : {}) }}
    >
      {children}
    </Component>
  );
}
