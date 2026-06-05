"use client";

import { m } from "framer-motion";
import { staggerContainer, fadeInUp, scrollViewport } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface StaggerGridProps {
  className?: string;
  children: ReactNode;
  fast?: boolean;
}

export function StaggerGrid({ className, children, fast = false }: StaggerGridProps) {
  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fast ? { ...staggerContainer, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } } } : staggerContainer}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <m.div className={cn(className)} variants={fadeInUp}>
      {children}
    </m.div>
  );
}
