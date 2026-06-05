"use client";

import { m } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { easeOut } from "@/lib/motion/variants";

const pros = [
  { name: "Mike T.", trade: "Plumber", rating: "4.9" },
  { name: "Sarah L.", trade: "Painter", rating: "5.0" },
  { name: "James R.", trade: "Handyman", rating: "4.8" },
];

export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <m.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-100/40 to-accent-100/30 blur-2xl"
        animate={reducedMotion ? undefined : { opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
        className="relative rounded-2xl border border-border-subtle bg-surface-0 p-6 shadow-elevated"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-label-sm text-ink-500">Your request</p>
            <p className="text-heading-sm text-ink-900">Kitchen faucet repair</p>
          </div>
          <span className="badge-brand">Matched</span>
        </div>

        <div className="space-y-3">
          {pros.map((pro, i) => (
            <m.div
              key={pro.name}
              initial={reducedMotion ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.1, ease: easeOut }}
              whileHover={reducedMotion ? undefined : { x: 2, transition: { duration: 0.15 } }}
              className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-50 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-medium text-brand-800">
                {pro.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-label-md text-ink-900">{pro.name}</p>
                <p className="text-caption text-ink-500">{pro.trade}</p>
              </div>
              <div className="flex items-center gap-1 text-caption font-medium text-warning-600">
                <Icon name="star" size={14} className="fill-warning-500 text-warning-500" />
                {pro.rating}
              </div>
            </m.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3">
          <Icon name="clock" size={18} className="text-brand-700" />
          <p className="text-body-sm text-brand-800">
            Typical match within {siteConfig.business.matchSlaHours} hours
          </p>
        </div>
      </m.div>
    </div>
  );
}
