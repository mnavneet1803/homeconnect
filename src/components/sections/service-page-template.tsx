import { Suspense } from "react";
import { AuditImage } from "@/components/dev/audit-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { getServicePageContent } from "@/data/services/pages";
import { getServicePageImages } from "@/data/service-showcase";
import { IMAGE_SIZES } from "@/lib/images";
import { getAreaHref } from "@/lib/utils/local-links";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Accordion } from "@/components/ui/accordion";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { PremiumCard } from "@/components/motion/premium-card";
import { Button } from "@/components/ui/button";
import type { ServiceSlug } from "@/constants/services";

interface ServicePageTemplateProps {
  slug: ServiceSlug;
}

export function ServicePageTemplate({ slug }: ServicePageTemplateProps) {
  const content = getServicePageContent(slug);
  const service = SERVICE_BY_SLUG[slug];

  if (!content || !service) notFound();

  const breadcrumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Services", href: ROUTES.services.index },
    { name: service.name, href: service.href },
  ];

  const relatedServices = content.relatedSlugs
    .map((s) => SERVICE_BY_SLUG[s])
    .filter(Boolean);

  const images = getServicePageImages(slug);

  return (
    <>
      <ServicePageHero
        content={content}
        service={service}
        breadcrumbs={breadcrumbs}
        images={images}
      />

      {/* 1. Service Overview */}
      <Section id="overview">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-up">
              <h2 className="text-display-sm text-ink-900">{content.overview.title}</h2>
              <div className="mt-6 space-y-4">
                {content.overview.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="text-body-md leading-relaxed text-ink-600">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-card">
                <AuditImage
                  auditId={`service-detail-${slug}`}
                  src={images.detail.src}
                  alt={images.detail.alt}
                  width={images.detail.width}
                  height={images.detail.height}
                  sizes={IMAGE_SIZES.hero}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-3 text-caption text-ink-500">{images.detail.caption}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What we offer */}
      <Section className="border-y border-border-subtle bg-surface-50">
        <Container>
          <Reveal>
            <SectionHeader
              title={`${service.name} we provide`}
              description={`Practical solutions delivered by our Edmonton-based crew — from quick fixes to full-scope projects.`}
            />
          </Reveal>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.subServices.map((sub) => (
              <StaggerItem key={sub.name}>
                <PremiumCard className="p-6">
                  <h3 className="text-heading-sm text-ink-900">{sub.name}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-ink-500">{sub.description}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* 2. Common Problems We Solve */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              title={content.commonProblems.title}
              description={content.commonProblems.intro}
            />
          </Reveal>
          <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.commonProblems.problems.map((problem) => (
              <StaggerItem key={problem.title}>
                <PremiumCard className="p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name="check" size={18} />
                  </span>
                  <h3 className="mt-4 text-heading-sm text-ink-900">{problem.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-ink-500">
                    {problem.description}
                  </p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* 3. Why Choose Our Team */}
      <Section className="bg-surface-0">
        <Container>
          <Reveal>
            <SectionHeader
              title={content.whyChooseUs.title}
              description={content.whyChooseUs.intro}
            />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.whyChooseUs.reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <PremiumCard className="p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={benefitIconName(reason.icon)} size={20} />
                  </span>
                  <h3 className="mt-4 text-heading-sm text-ink-900">{reason.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-ink-500">
                    {reason.description}
                  </p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* 4. Service Areas */}
      <Section className="border-y border-border-subtle bg-surface-50 py-12">
        <Container>
          <Reveal>
            <h2 className="text-heading-lg text-ink-900">{content.serviceAreas.title}</h2>
            <p className="mt-3 max-w-prose text-body-md leading-relaxed text-ink-500">
              {content.serviceAreas.intro}
            </p>
          </Reveal>
          <StaggerGrid className="mt-8 flex flex-wrap gap-2">
            {content.localAreas.map((area) => {
              const href = getAreaHref(area, slug);
              return (
                <StaggerItem key={area}>
                  {href ? (
                    <Link
                      href={href}
                      className="badge-neutral transition-colors hover:bg-brand-50 hover:text-brand-800"
                    >
                      <Icon name="map-pin" size={14} className="text-brand-600" />
                      {area}
                    </Link>
                  ) : (
                    <span className="badge-neutral">{area}</span>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGrid>
          <Reveal className="mt-8" delay={0.1}>
            <Link href={ROUTES.locations.index} className="btn-link">
              Browse all service areas →
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Process */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader title={content.process.title} description={content.process.intro} />
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative h-full rounded-2xl border border-border-subtle bg-surface-0 p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 font-display text-label-md font-semibold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-5 text-heading-sm text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* 6. FAQ */}
      <Section id="faq" className="bg-surface-0">
        <Container narrow>
          <Reveal>
            <SectionHeader
              title={`${service.name} — frequently asked questions`}
              description={`Answers to common questions about ${service.name.toLowerCase()} in Edmonton and the Capital Region.`}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion
              items={content.faq.map((f, i) => ({
                id: `${slug}-faq-${i}`,
                question: f.question,
                answer: f.answer,
              }))}
            />
          </Reveal>
        </Container>
      </Section>

      {/* 7. Related Services */}
      {relatedServices.length > 0 && (
        <Section className="border-t border-border-subtle bg-surface-50">
          <Container>
            <Reveal>
              <SectionHeader
                title="Related services"
                description="Explore other home services our Edmonton team offers across the Capital Region."
              />
            </Reveal>
            <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <StaggerItem key={related.slug}>
                  <ServiceCard service={related} />
                </StaggerItem>
              ))}
            </StaggerGrid>
            <p className="mt-8 text-center">
              <Link href={ROUTES.services.index} className="btn-link">
                View all services →
              </Link>
            </p>
          </Container>
        </Section>
      )}

      {/* 8. Strong CTA */}
      <section className="bg-brand-900 py-16 md:py-20">
        <Container className="text-center">
          <Reveal variant="fade-up">
            <h2 className="text-balance text-display-sm text-white">{content.cta.headline}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg leading-relaxed text-brand-100">
              {content.cta.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#service-quote" size="lg">
                {service.quoteCta ?? "Get a Free Quote"}
              </Button>
              <Button
                href={`tel:${siteConfig.phone.tel}`}
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Call {siteConfig.phone.display}
              </Button>
            </div>
            <p className="mt-6 text-body-sm text-brand-200">
              Serving Edmonton · Sherwood Park · St. Albert · Spruce Grove · Leduc · Beaumont
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Lead form */}
      <Section id="service-quote" className="bg-gradient-trust">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-up">
              <SectionHeader
                title={`Get your free ${service.name.toLowerCase()} quote`}
                description={`Tell us about your project. Our ${service.pluralName.toLowerCase()} will review and provide a quote for Edmonton and the Capital Region.`}
                align="left"
                className="mx-0 mb-0 text-left"
              />
              <div className="mt-8">
                <QuoteFormReassurance />
              </div>
            </Reveal>
            <Reveal variant="scale" delay={0.1}>
              <Suspense fallback={<QuoteFormSkeleton />}>
                <QuoteForm id="service-quote-form" defaultServiceSlug={slug} />
              </Suspense>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

/** Metadata helper for service pages */
export function getServicePageSeo(slug: ServiceSlug) {
  const content = getServicePageContent(slug);
  if (!content) return null;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    path: SERVICE_BY_SLUG[slug].href,
    keywords: content.keywords,
    ogImage: `/images/og/services/${slug}.jpg`,
    faq: content.faq.map((f, i) => ({
      id: `${slug}-faq-${i}`,
      question: f.question,
      answer: f.answer,
    })),
  };
}
