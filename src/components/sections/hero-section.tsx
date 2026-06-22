import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { TRUST_BADGES } from "@/constants/app";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { HeroQuoteForm } from "@/components/forms/hero-quote-form";
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
    <Section className="relative overflow-x-clip bg-surface-0 pb-12 pt-12 md:pb-16 md:pt-20">
      <FloatingBackground />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="fade-up" immediate delay={0}>
              <p className="section-eyebrow">{SERVING_AREA}</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.06}>
              <h1 className="mt-4 text-balance text-display-sm text-ink-900 md:text-display-lg">
                Trusted home service contractor in Edmonton
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.12}>
              <p className="mt-6 max-w-prose text-body-lg text-ink-500">
                Tell us what you need. Our team provides a free quote — fast
                response and no obligation.
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.18}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={ctaNavigation.secondary.href} size="lg">
                  {ctaNavigation.secondary.label}
                </Button>
                <Button
                  href={ctaNavigation.whatsapp.href}
                  variant="secondary"
                  size="lg"
                  external
                >
                  <Icon name="whatsapp" size={18} className="mr-2" />
                  {ctaNavigation.whatsapp.label}
                </Button>
                <Button href={ctaNavigation.primary.href} variant="secondary" size="lg">
                  {ctaNavigation.primary.label}
                </Button>
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.22}>
              <p className="mt-8 text-caption text-ink-400">
                {siteConfig.business.marketplaceDisclaimer}
              </p>
            </Reveal>
            <StaggerGrid className="mt-6 flex max-w-full flex-wrap gap-2" fast>
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
          <Reveal variant="fade-up" immediate delay={0.15}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
