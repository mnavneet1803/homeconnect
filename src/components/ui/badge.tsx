import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type BadgeVariant = "brand" | "neutral" | "success";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  brand: "badge-brand",
  neutral: "badge-neutral",
  success: "badge-success",
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return <span className={cn(variants[variant], className)}>{children}</span>;
}
