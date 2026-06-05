"use client";

import { m } from "framer-motion";
import { fadeInUp, scrollViewport } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface FadeInProps {
  className?: string;
  delay?: number;
  children: ReactNode;
}

/** @deprecated Prefer Reveal — kept for backwards compatibility */
export function FadeIn({ className, delay = 0, children }: FadeInProps) {
  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}
