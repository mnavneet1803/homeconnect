import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "article" | "main";
  narrow?: boolean;
}

export function Container({
  className,
  as: Component = "div",
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-content px-gutter lg:px-gutter-lg",
        narrow && "max-w-narrow",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Section({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("section", className)} {...props}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-header",
        align === "left" && "mx-0 text-left",
        className
      )}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title text-balance">{title}</h2>
      {description && (
        <p className="section-description text-balance">{description}</p>
      )}
    </div>
  );
}
