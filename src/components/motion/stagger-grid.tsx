"use client";

import { m } from "framer-motion";
import {
  staggerContainer,
  staggerContainerFast,
  staggerItem,
  scrollViewport,
} from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface StaggerGridProps {
  className?: string;
  children: ReactNode;
  fast?: boolean;
}

export function StaggerGrid({ className, children, fast = false }: StaggerGridProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fast ? staggerContainerFast : staggerContainer}
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
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div className={cn(className)} variants={staggerItem}>
      {children}
    </m.div>
  );
}
