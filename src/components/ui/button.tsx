import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "destructive" | "link";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  accent: "btn-accent",
  destructive: "btn-destructive",
  link: "btn-link",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    variant !== "link" && "btn",
    variantClasses[variant],
    variant !== "link" && sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
