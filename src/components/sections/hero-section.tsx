import { siteConfig } from "@/config/site";
import { TRUST_BADGES } from "@/constants/app";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { HeroQuoteForm } from "@/components/forms/hero-quote-form";
import { GoogleReviewsBadge } from "@/components/trust";
import { Reveal } from "@/components/motion/reveal";
import { FloatingBackground } from "@/components/motion/floating-background";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import dynamic from "next/dynamic";

const HeroVisual = dynamic(
  () => import("@/components/sections/hero-visual").then((m) => m.HeroVisual),
  {
    ssr: true,
    loading: () => (
      <div className="hidden lg:block" aria-hidden>
        <div className="skeleton mx-auto h-[420px] w-full max-w-md rounded-2xl" />
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-hero pb-16 pt-12 md:pb-24 md:pt-20">
      <FloatingBackground grid />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.08),transparent)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-blur" immediate delay={0}>
              <p className="section-eyebrow">Edmonton Home Services</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.08}>
              <h1 className="mt-3 text-balance text-display-sm text-ink-950 md:text-display-lg">
                Connect with trusted home service pros in Edmonton
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.16}>
              <p className="mt-6 max-w-prose text-body-lg text-ink-500">
                Tell us what you need. We match you with up to{" "}
                {siteConfig.business.maxMatchedPros} vetted, insured local
                professionals — free, fast, and no obligation.
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton href="#quote" size="lg" magnetic={false}>
                  Get Free Quotes
                </MagneticButton>
                <MagneticButton
                  href="#how-it-works"
                  variant="secondary"
                  size="lg"
                  magnetic={false}
                >
                  See how it works
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.28}>
              <div className="mt-6 hidden sm:block">
                <GoogleReviewsBadge />
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.32}>
              <p className="mt-4 text-caption text-ink-400">
                {siteConfig.business.marketplaceDisclaimer}
              </p>
            </Reveal>
            <StaggerGrid className="mt-6 flex flex-wrap gap-2" fast>
              {TRUST_BADGES.map((badge) => (
                <StaggerItem key={badge}>
                  <Badge variant="neutral">
                    <Icon name="check" size={14} className="text-brand-600" />
                    {badge}
                  </Badge>
                </StaggerItem>
              ))}
            </StaggerGrid>
            <Reveal variant="fade-up" immediate delay={0.36}>
              <HeroQuoteForm className="mt-8" />
            </Reveal>
          </div>
          <Reveal variant="slide-right" immediate delay={0.2} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
