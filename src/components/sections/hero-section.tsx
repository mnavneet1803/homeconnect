"use client";

import { useState } from "react";
import { ctaNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { SERVING_AREA } from "@/constants/launch";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { TrackedPhoneLink } from "@/components/analytics/tracked-link";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HeroMedia } from "@/components/media/hero-media";
import { VideoLightbox } from "@/components/media/video-lightbox";
import { HERO_MEDIA } from "@/data/homepage-media";
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics/events";

const easePremium = [0.19, 1, 0.22, 1];

const HERO_SERVICE_LINE =
  "Furniture & Shed Assembly • Plumbing • Electrical • Painting & Drywall • Cleaning • Home Repairs";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-pine-950 pt-[76px]">
      {/* ── Full-bleed cinematic backdrop ─────────────── */}
      <HeroMedia />

      {/* Readability gradients: left-heavy on desktop, bottom-heavy on mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-pine-950/25" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,42,34,0.92) 0%, rgba(14,42,34,0.6) 34%, rgba(14,42,34,0.12) 62%, rgba(14,42,34,0) 82%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,42,34,0.9) 0%, rgba(14,42,34,0.2) 44%, rgba(14,42,34,0) 70%)",
        }}
      />
      {/* Soft cream seam into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{ background: "linear-gradient(to top, #F6F1E5, transparent)" }}
      />

      <Container className="relative z-10 flex min-h-[calc(100svh-76px)] flex-col justify-end pb-20 pt-10 lg:justify-center lg:pb-24">
        <div className="max-w-[640px]">
          {/* Location badge */}
          <m.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-brass-400" />
              Edmonton
            </span>
          </m.div>

          {/* Headline */}
          <m.h1
            className="mt-6 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-paper [text-shadow:0_2px_24px_rgba(14,42,34,0.35)]"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.08 }}
          >
            Professional Handyman &amp; Home Services in{" "}
            <em className="not-italic text-brass-400">Edmonton</em>
          </m.h1>

          {/* Services line */}
          <m.p
            className="mt-5 max-w-[520px] text-[13.5px] font-medium leading-[1.65] tracking-[0.01em] text-paper/85 [text-shadow:0_1px_12px_rgba(14,42,34,0.45)] sm:text-[14.5px]"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easePremium, delay: 0.12 }}
          >
            {HERO_SERVICE_LINE}
          </m.p>

          {/* Phone — high-contrast chip so it stays readable on video */}
          <m.div
            className="mt-5"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easePremium, delay: 0.16 }}
          >
            <TrackedPhoneLink
              tel={siteConfig.phone.tel}
              display={siteConfig.phone.display}
              location="hero"
              className="hero-phone-chip"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass-500 text-pine-950 shadow-brass">
                <Icon name="phone" size={16} aria-hidden />
              </span>
              <span className="flex min-w-0 flex-col items-start leading-tight">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-paper/65">
                  Call us
                </span>
                <span className="text-[17px] font-semibold tracking-wide text-paper">
                  {siteConfig.phone.display}
                </span>
              </span>
            </TrackedPhoneLink>
          </m.div>

          {/* CTA Buttons */}
          <m.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.22 }}
          >
            <Button href={ctaNavigation.primary.href} size="lg" className="arrow-btn group">
              <Icon name="gift" size={16} />
              {ctaNavigation.primary.label}
              <Icon name="arrow-right" size={14} className="arrow-icon" />
            </Button>
            <Button
              href={`tel:${siteConfig.phone.tel}`}
              variant="line"
              size="lg"
              className="border-white/45 bg-white/10 text-paper backdrop-blur-sm hover:border-white/70 hover:bg-white/20 hover:text-paper"
              onClick={() => trackPhoneClick({ location: "hero_cta" })}
            >
              <Icon name="phone" size={16} />
              Call Now
            </Button>
            <Button
              href={ctaNavigation.whatsapp.href}
              variant="line"
              size="lg"
              external
              className="border-white/35 bg-white/5 text-paper hover:border-white/60 hover:bg-white/10 hover:text-paper"
              onClick={() =>
                trackCtaClick({
                  location: "hero_cta",
                  text: ctaNavigation.whatsapp.label,
                  href: ctaNavigation.whatsapp.href,
                })
              }
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp
            </Button>
          </m.div>

          {/* Serving area + watch video */}
          <m.div
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.32 }}
          >
            <p className="text-[12px] text-paper/60">{SERVING_AREA}</p>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-paper/70 transition-colors hover:text-brass-300"
            >
              <Icon name="play" size={12} className="translate-x-[0.5px]" />
              Watch video
            </button>
          </m.div>
        </div>
      </Container>

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src={HERO_MEDIA.modal.src}
        poster={HERO_MEDIA.modal.poster}
        orientation="landscape"
        title="Home Solution Services — handyman work in Edmonton"
      />

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-paper/50 to-transparent" />
      </m.div>
    </section>
  );
}
