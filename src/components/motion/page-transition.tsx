"use client";

import { m } from "framer-motion";
import { pageTransition } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </m.div>
  );
}
