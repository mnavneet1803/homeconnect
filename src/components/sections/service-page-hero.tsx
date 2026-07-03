"use client";

import { AuditImage } from "@/components/dev/audit-image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { TRUST_BADGES } from "@/constants/app";
import { IMAGE_SIZES } from "@/lib/images";
import type { ServicePageImages } from "@/data/service-showcase";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import type { ServicePageContent } from "@/types/service-page";
import type { Service } from "@/types/service";
import { serviceIconName } from "@/components/ui/icons";

interface ServicePageHeroProps {
  content: ServicePageContent;
  service: Service;
  breadcrumbs: { name: string; href: string }[];
  images: ServicePageImages;
}

export function ServicePageHero({ content, service, breadcrumbs, images }: ServicePageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-50 pb-10 pt-8 md:pb-14 md:pt-10">
      <div className="relative mx-auto max-w-content px-gutter lg:px-gutter-lg">
        <Reveal variant="fade" immediate>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-caption text-ink-500">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="text-ink-600 hover:text-pine-700">
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

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal variant="fade-up" immediate>
              <p className="section-eyebrow">{content.hero.eyebrow}</p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.06}>
              <h1 className="mt-4 text-balance text-display-sm text-pine-950 md:text-display-md">
                {content.hero.headline}
              </h1>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.12}>
              <p className="mt-5 text-body-lg text-ink-500">{content.hero.subheadline}</p>
              <p className="mt-4 max-w-prose text-body-md leading-relaxed text-ink-600">
                {content.hero.intro}
              </p>
            </Reveal>
            <Reveal variant="fade-up" immediate delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={ctaNavigation.secondary.href} size="lg">
                  {ctaNavigation.secondary.label}
                </Button>
                <Button href={ctaNavigation.whatsapp.href} variant="secondary" size="lg" external>
                  <Icon name="whatsapp" size={18} className="mr-2" />
                  {ctaNavigation.whatsapp.label}
                </Button>
                <Button href="#service-quote" variant="secondary" size="lg">
                  {service.quoteCta ?? ctaNavigation.primary.label}
                </Button>
              </div>
            </Reveal>
            <Reveal variant="fade" immediate delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-2">
                {TRUST_BADGES.map((badge) => (
                  <Badge key={badge} variant="neutral">
                    <Icon name="check" size={14} className="text-brand-600" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade-up" immediate delay={0.1}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-elevated">
                <AuditImage
                  auditId={`service-hero-${service.slug}`}
                  src={images.hero.src}
                  alt={images.hero.alt}
                  width={images.hero.width}
                  height={images.hero.height}
                  sizes={IMAGE_SIZES.hero}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <div className="card-elevated p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Icon name={serviceIconName(service.icon)} size={32} />
              </div>
              <h2 className="text-heading-lg text-ink-900">What we offer</h2>
              <ul className="mt-5 space-y-4">
                {content.subServices.map((sub) => (
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
