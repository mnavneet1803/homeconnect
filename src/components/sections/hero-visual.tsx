"use client";

import { m } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/icons";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { easePremium, floatSubtle } from "@/lib/motion/variants";

const quoteDetails = [
  { label: "Scope", value: "Kitchen faucet repair" },
  { label: "Quote", value: "Custom — based on scope" },
  { label: "Timeline", value: "Same-week availability" },
];

export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();

  const card = (
    <div className="relative rounded-2xl border border-border-subtle bg-surface-0 p-7 shadow-elevated">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-label-sm text-ink-500">Your request</p>
          <p className="mt-1 text-heading-sm text-ink-900">Kitchen faucet repair</p>
        </div>
        <span className="badge-brand">Quoted</span>
      </div>

      <div className="space-y-3">
        {quoteDetails.map((item, i) => (
          <m.div
            key={item.label}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 + i * 0.07, ease: easePremium }}
            className="flex items-center justify-between rounded-xl border border-border-subtle bg-surface-50 px-4 py-3.5"
          >
            <p className="text-caption text-ink-500">{item.label}</p>
            <p className="text-label-md text-ink-900">{item.value}</p>
          </m.div>
        ))}
      </div>

      <m.div
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.52, ease: easePremium }}
        className="mt-4 flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50 p-4"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-label-sm font-medium text-brand-800">
          HS
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-label-md text-ink-900">Home Solution Services</p>
          <p className="text-caption text-ink-500">Our crew handles the work</p>
        </div>
        <div className="flex items-center gap-1 text-caption font-medium text-ink-600">
          <Icon name="star" size={14} className="fill-warning-500 text-warning-500" />
          4.9
        </div>
      </m.div>

      <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-surface-50 px-4 py-3.5 ring-1 ring-border-subtle">
        <Icon name="clock" size={18} className="text-brand-700" />
        <p className="text-body-sm text-ink-600">
          Typical response within {siteConfig.business.matchSlaHours} hours
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      {reducedMotion ? (
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easePremium }}
        >
          {card}
        </m.div>
      ) : (
        <m.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easePremium }}
        >
          <m.div variants={floatSubtle} animate="animate">
            {card}
          </m.div>
        </m.div>
      )}
    </div>
  );
}
