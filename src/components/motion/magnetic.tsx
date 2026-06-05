"use client";

import { m } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 0.22 }: MagneticProps) {
  const { ref, handleMouseMove, handleMouseLeave, disabled } = useMagnetic({ strength });

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={cn("inline-flex will-change-transform", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </m.div>
  );
}
