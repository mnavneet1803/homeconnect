"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { TRUST_BADGES } from "@/constants/app";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { FloatingBackground } from "@/components/motion/floating-background";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import type { ServicePageContent } from "@/types/service-page";
import type { Service } from "@/types/service";
import { serviceIconName } from "@/components/ui/icons";

interface ServicePageHeroProps {
  content: ServicePageContent;
  service: Service;
  breadcrumbs: { name: string; href: string }[];
}

export function ServicePageHero({ content, service, breadcrumbs }: ServicePageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-8 md:pb-20 md:pt-12">
      <FloatingBackground grid />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,184,166,0.08),transparent)]" />

      <div className="relative mx-auto max-w-content px-gutter lg:px-gutter-lg">
        <Reveal variant="fade" immediate>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-caption text-ink-500">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-brand-700">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-ink-700">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="fade-blur" immediate>
              <p className="section-eyebrow">{content.hero.eyebrow}</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.08}>
              <h1 className="mt-3 text-balance text-display-sm text-ink-950 md:text-display-md">
                {content.hero.headline}
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.16}>
              <p className="mt-4 text-body-lg text-ink-500">{content.hero.subheadline}</p>
              <p className="mt-4 max-w-prose text-body-md text-ink-600">{content.hero.intro}</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="#service-quote" size="lg">
                  Get Free Quotes
                </MagneticButton>
                <MagneticButton href={`tel:${siteConfig.phone.tel}`} variant="secondary" size="lg" magnetic={false}>
                  Call {siteConfig.phone.display}
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.32}>
              <div className="mt-6 flex flex-wrap gap-2">
                {TRUST_BADGES.map((badge) => (
                  <Badge key={badge} variant="neutral">
                    <Icon name="check" size={14} className="text-brand-600" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" immediate delay={0.15}>
            <div className="card-elevated p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon name={serviceIconName(service.icon)} size={32} />
              </div>
              <h2 className="text-heading-lg text-ink-900">What we match you with</h2>
              <ul className="mt-4 space-y-3">
                {content.subServices.slice(0, 4).map((sub) => (
                  <li key={sub.name} className="flex items-start gap-3 text-body-sm text-ink-600">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    <span>
                      <strong className="font-medium text-ink-900">{sub.name}</strong>
                      {" — "}
                      {sub.description}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-caption text-ink-400">
                {siteConfig.business.marketplaceDisclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
