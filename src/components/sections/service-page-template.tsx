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
import { testimonials } from "@/data/testimonials";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Accordion } from "@/components/ui/accordion";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/motion/testimonial-carousel";
import type { ServicePageContent } from "@/types/service-page";
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

  const serviceTestimonials = testimonials.filter((t) => t.serviceSlug === slug);
  const displayTestimonials =
    serviceTestimonials.length > 0
      ? serviceTestimonials
      : testimonials.filter((t) => t.featured).slice(0, 3);

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

      {/* Service details */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-up">
              <h2 className="text-display-sm text-ink-900">{content.details.title}</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-border-subtle shadow-card">
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
              <div className="mt-6 space-y-4">
                {content.details.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-body-md text-ink-600">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <StaggerGrid className="grid gap-4 sm:grid-cols-2">
              {content.subServices.map((sub) => (
                <StaggerItem key={sub.name}>
                  <div className="card h-full p-5 transition-shadow duration-300 hover:shadow-card-hover">
                    <h3 className="text-heading-sm text-ink-900">{sub.name}</h3>
                    <p className="mt-2 text-body-sm text-ink-500">{sub.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-surface-0">
        <Container>
          <Reveal>
            <SectionHeader
              title={`Why choose our ${service.pluralName.toLowerCase()}`}
              description="Edmonton homeowners choose Home Solution Services for our own licensed team, free quotes, and direct accountability."
            />
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="card h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={benefitIconName(benefit.icon)} size={20} />
                  </span>
                  <h3 className="mt-4 text-heading-sm text-ink-900">{benefit.title}</h3>
                  <p className="mt-2 text-body-sm text-ink-500">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* Local SEO areas */}
      <Section className="border-y border-border-subtle bg-surface-50 py-12">
        <Container>
          <Reveal>
            <h2 className="text-heading-lg text-ink-900">
              {service.name} services across the Capital Region
            </h2>
            <p className="mt-2 max-w-prose text-body-md text-ink-500">
              Our {service.pluralName.toLowerCase()} serve Edmonton and surrounding communities
              directly. Don&apos;t see your area? Submit your postal code — we likely serve you.
            </p>
          </Reveal>
          <StaggerGrid className="mt-6 flex flex-wrap gap-2">
            {content.localAreas.map((area) => {
              const href = getAreaHref(area, slug);
              return (
                <StaggerItem key={area}>
                  {href ? (
                    <Link href={href} className="badge-neutral hover:bg-brand-50 hover:text-brand-800">
                      {area}
                    </Link>
                  ) : (
                    <span className="badge-neutral">{area}</span>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container narrow>
          <Reveal>
            <SectionHeader
              title={`${service.name} FAQ`}
              description={`Common questions about our ${service.pluralName.toLowerCase()} in Edmonton.`}
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

      {/* Testimonials */}
      <Section className="bg-surface-0">
        <Container>
          <Reveal>
            <SectionHeader
              title="What Edmonton homeowners say"
              description={`Real reviews from homeowners who worked with our ${service.pluralName.toLowerCase()}.`}
            />
          </Reveal>
          <TestimonialCarousel testimonials={displayTestimonials} />
        </Container>
      </Section>

      {/* CTA band */}
      <section className="bg-brand-900 py-16">
        <Container className="text-center">
          <Reveal variant="fade-up">
            <h2 className="text-display-sm text-white">
              Need {service.pluralName.toLowerCase()} in Edmonton?
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-body-lg text-ink-300">
              Request a free quote from our team — fast response and no obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#service-quote" size="lg">
                Get Free Quotes
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

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section>
          <Container>
            <Reveal>
              <SectionHeader
                title="Related services"
                description="Explore other home services our team offers across Edmonton."
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

export type { ServicePageContent };
