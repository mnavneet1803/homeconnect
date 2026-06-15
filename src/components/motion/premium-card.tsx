"use client";

import { HoverCard } from "@/components/motion/hover-card";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
}

/** Card shell with Framer Motion hover for service/detail grids */
export function PremiumCard({ children, className }: PremiumCardProps) {
  return <HoverCard className={cn("card h-full", className)}>{children}</HoverCard>;
}
