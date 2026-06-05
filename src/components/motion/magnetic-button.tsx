"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Magnetic } from "@/components/motion/magnetic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

interface MagneticButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  magnetic?: boolean;
}

export function MagneticButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  onClick,
  type = "button",
  disabled,
  magnetic = true,
}: MagneticButtonProps) {
  const reducedMotion = usePrefersReducedMotion();

  const classes = cn("btn", variantClasses[variant], sizeClasses[size], className);

  const inner = (
    <m.span
      className="inline-flex w-full items-center justify-center"
      whileHover={reducedMotion ? undefined : { scale: 1.02 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.span>
  );

  const content = magnetic && !reducedMotion ? (
    <Magnetic strength={0.18}>{inner}</Magnetic>
  ) : (
    inner
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
