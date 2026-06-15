"use client";

import { m } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Icon, type IconName } from "@/components/ui/icons";
import { premiumHover, premiumHoverTap } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";
import type { HomepageTrustStat } from "@/constants/app";

interface TrustStatCardProps {
  stat: HomepageTrustStat;
  className?: string;
  variant?: "default" | "compact";
}

export function TrustStatCard({ stat, className, variant = "default" }: TrustStatCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isCompact = variant === "compact" && stat.type === "text";

  return (
    <m.div
      whileHover={reducedMotion ? undefined : premiumHover}
      whileTap={reducedMotion ? undefined : premiumHoverTap}
      className={cn(
        "motion-card-hover group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-0 shadow-card",
        isCompact ? "flex h-full items-start gap-4 p-5 md:p-6" : "flex h-full flex-col p-5 md:p-6",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-100/60"
      />

      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-105">
        <Icon name={stat.icon as IconName} size={22} />
      </div>

      <div className={cn("relative flex-1", !isCompact && "mt-5")}>
        {stat.type === "numeric" ? (
          <>
            <div className="flex items-baseline gap-0.5">
              {stat.prefix && (
                <span className="text-heading-sm font-medium text-ink-700">{stat.prefix}</span>
              )}
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                className="font-display text-display-sm font-medium tracking-tight text-ink-900 md:text-heading-lg"
              />
              {stat.showStars && (
                <Icon name="star" size={18} className="mb-1 ml-1 fill-warning-500 text-warning-500" />
              )}
            </div>
            <p className="mt-2 text-body-sm leading-snug text-ink-500">{stat.label}</p>
          </>
        ) : (
          <>
            <p className="font-display text-heading-sm font-medium leading-snug text-ink-900">
              {stat.headline}
            </p>
            {stat.subline && (
              <p className="mt-1 text-body-sm text-ink-500">{stat.subline}</p>
            )}
          </>
        )}
      </div>
    </m.div>
  );
}
