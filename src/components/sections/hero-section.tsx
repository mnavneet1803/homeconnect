import { siteConfig } from "@/config/site";
import { TRUST_BADGES } from "@/constants/app";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { HeroQuoteForm } from "@/components/forms/hero-quote-form";
import { GoogleReviewsBadge } from "@/components/trust";
import { Reveal } from "@/components/motion/reveal";
import { FloatingBackground } from "@/components/motion/floating-background";
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
    <Section className="relative overflow-hidden bg-surface-0 pb-24 pt-16 md:pb-36 md:pt-28">
      <FloatingBackground />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade-up" immediate delay={0}>
              <p className="section-eyebrow">Edmonton home services</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.06}>
              <h1 className="mt-4 text-balance text-display-sm text-ink-900 md:text-display-lg">
                Trusted home service contractor in Edmonton
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.12}>
              <p className="mt-6 max-w-prose text-body-lg text-ink-500">
                Tell us what you need. Our licensed, insured team provides a
                free quote — fast response and no obligation.
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.18}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#quote" size="lg">
                  Get Free Quotes
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See how it works
                </Button>
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.22}>
              <div className="mt-8 hidden sm:block">
                <GoogleReviewsBadge />
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.26}>
              <p className="mt-5 text-caption text-ink-400">
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
            <Reveal variant="fade-up" immediate delay={0.3}>
              <HeroQuoteForm className="mt-10" />
            </Reveal>
          </div>
          <Reveal variant="fade-up" immediate delay={0.15} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
