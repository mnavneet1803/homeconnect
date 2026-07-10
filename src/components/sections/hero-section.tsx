"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const easePremium = [0.19, 1, 0.22, 1];

const HERO_TRUST_BADGES = [
  // { icon: "star" as const, label: "4.9★ Rating" },        // TODO: enable once reviews collected
  // { icon: "clock" as const, label: "24h Response" },      // TODO: enable once response time is confirmed
] as const;

// TODO: Enable HERO_STATS once real data is verified (jobs, years, rating)
// const HERO_STATS = [
//   { value: 1400, suffix: "+", label: "Jobs Done" },
//   { value: 9, suffix: " yrs", label: "Serving Edmonton" },
//   { value: 4.9, suffix: "★", label: "Avg. Rating", decimals: 1 },
// ] as const;

const FLOATING_CARDS = [
  {
    id: "card1",
    icon: "check" as const,
    label: "Free On-Site Quote",
    sub: "No obligation",
    delay: 0.7,
    position: "top-[12%] right-[8%]",
    animateClass: "animate-float-left",
  },
  {
    id: "card2",
    icon: "award" as const,
    label: "Same Crew Every Time",
    sub: "No strangers in your home",
    delay: 0.85,
    position: "bottom-[28%] right-[4%]",
    animateClass: "animate-float-left",
  },
];

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white pt-[76px]">
      {/* Subtle mesh gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 70% 20%, rgba(27,70,56,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Warm paper section at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to top, #F6F1E5, transparent)" }}
      />

      <Container className="relative z-10 flex min-h-[calc(100svh-76px)] flex-col justify-center py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        {/* ── Left Column: Copy ────────────────────────── */}
        <div className="order-2 flex max-w-[580px] flex-col justify-center lg:order-1 lg:flex-1">
          {/* Section label */}
          <m.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brass-100 bg-brass-50 px-4 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-brass-500">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-brass-500" />
              Edmonton
            </span>
          </m.div>

          {/* Headline */}
          <m.h1
            className="mt-6 font-display text-[clamp(2.4rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-pine-950"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.08 }}
          >
            Trusted home service<br />
            contractor in{" "}
            <em className="not-italic text-pine-600">Edmonton</em>
          </m.h1>

          {/* Body */}
          <m.p
            className="mt-5 max-w-[480px] text-[18px] leading-relaxed text-ink-600"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.15 }}
          >
            One call for handyman work, furniture assembly, cleaning, plumbing
            and electrical maintenance — done right, by the same crew every
            time.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            className="mt-8 flex flex-wrap gap-3.5"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.22 }}
          >
            <Button href={ctaNavigation.primary.href} size="lg" className="arrow-btn group">
              <Icon name="gift" size={16} />
              {ctaNavigation.primary.label}
              <Icon name="arrow-right" size={14} className="arrow-icon" />
            </Button>
            <Button href={ctaNavigation.secondary.href} variant="secondary" size="lg">
              <Icon name="phone" size={16} />
              {ctaNavigation.secondary.label}
            </Button>
          </m.div>

          {/* Trust badges */}
          <m.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.32 }}
          >
            {HERO_TRUST_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-1.5 rounded-full border border-border bg-surface-0 px-3.5 py-1.5 text-[12.5px] font-medium text-ink-700 shadow-xs"
              >
                <Icon name={badge.icon} size={13} className="text-pine-600" />
                {badge.label}
              </span>
            ))}
          </m.div>

          {/* Stats row — commented out until real data is available
          <m.div
            className="mt-8 grid max-w-[420px] grid-cols-3 gap-0 border-t border-dashed border-border pt-6"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.4 }}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(20px,2.4vw,26px)] font-bold text-pine-950">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                    duration={1.6}
                  />
                </p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </m.div>
          */}

          {/* Serving area caption */}
          <m.p
            className="mt-4 text-[12px] text-ink-400"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.48 }}
          >
            {SERVING_AREA}
          </m.p>
        </div>

        {/* ── Right Column: Image ───────────────────────── */}
        <m.div
          className="order-1 flex flex-1 items-center justify-center lg:order-2 lg:justify-end"
          initial={reducedMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easePremium, delay: 0.1 }}
        >
          <div className="relative w-full max-w-[540px]">
            {/* Main image frame */}
            <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl shadow-[0_32px_64px_-20px_rgba(14,42,34,0.28)]">
              {/* Ken Burns zoom layer */}
              <div
                className="absolute inset-0 animate-continuous-zoom"
                aria-hidden="true"
                style={{ willChange: "transform" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
                  alt="Professional handyman working in an Edmonton home"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 540px"
                  className="object-cover"
                />
              </div>
              {/* Subtle dark vignette overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, transparent 40%, rgba(14,42,34,0.3) 100%)",
                }}
              />
              {/* Bottom left badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pine-950">
                  <Icon name="home" size={13} className="text-brass-400" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-pine-950">Home Solution Services</p>
                  <p className="text-[11px] text-ink-500">Edmonton's Trusted Crew</p>
                </div>
              </div>
            </div>

            {/* Floating badge card 1 — top right */}
            <m.div
              className="absolute -right-6 top-[10%] z-10 hidden lg:block"
              initial={reducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easePremium, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-50">
                  <Icon name="check" size={16} className="text-pine-700" />
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-pine-950">Free On-Site Quote</p>
                  <p className="text-[11px] text-ink-500">No obligation to book</p>
                </div>
              </div>
            </m.div>

            {/* Floating badge card 2 — bottom right — commented out until ratings are verified
            <m.div
              className="absolute -right-4 bottom-[15%] z-10 hidden lg:block"
              initial={reducedMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easePremium, delay: 0.85 }}
            >
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass-50">
                  <Icon name="star" size={16} className="text-brass-500" />
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-pine-950">4.9★ Google Rating</p>
                  <p className="text-[11px] text-ink-500">120+ verified reviews</p>
                </div>
              </div>
            </m.div>
            */}

            {/* Decorative background blob */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(27,70,56,0.07) 0%, transparent 70%)",
              }}
            />
          </div>
        </m.div>
      </Container>

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-ink-300 to-transparent" />
      </m.div>
    </section>
  );
}
