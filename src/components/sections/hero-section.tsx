"use client";

import { useState } from "react";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HeroMedia } from "@/components/media/hero-media";
import { VideoLightbox } from "@/components/media/video-lightbox";
import { HERO_MEDIA } from "@/data/homepage-media";

const easePremium = [0.19, 1, 0.22, 1];

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
        <div className="max-w-[620px]">
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
            className="mt-6 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.03em] text-paper [text-shadow:0_2px_24px_rgba(14,42,34,0.35)]"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.08 }}
          >
            Trusted home service
            <br />
            contractor in{" "}
            <em className="not-italic text-brass-400">Edmonton</em>
          </m.h1>

          {/* Body */}
          <m.p
            className="mt-5 max-w-[500px] text-[18px] leading-relaxed text-paper/85"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.15 }}
          >
            One call for handyman work, furniture assembly, cleaning, plumbing and electrical
            maintenance — done right, by the same crew every time.
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
            <Button
              href={ctaNavigation.secondary.href}
              variant="line"
              size="lg"
              className="border-white/45 bg-white/10 text-paper backdrop-blur-sm hover:border-white/70 hover:bg-white/20 hover:text-paper"
            >
              <Icon name="phone" size={16} />
              {ctaNavigation.secondary.label}
            </Button>
            <Button
              variant="line"
              size="lg"
              onClick={() => setVideoOpen(true)}
              aria-haspopup="dialog"
              className="border-white/35 text-paper hover:border-white/60 hover:bg-white/10 hover:text-paper"
            >
              <Icon name="play" size={15} className="translate-x-[1px]" />
              Watch Video
            </Button>
          </m.div>

          {/* Serving area caption */}
          <m.p
            className="mt-6 text-[12px] text-paper/60"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.32 }}
          >
            {SERVING_AREA}
          </m.p>
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
