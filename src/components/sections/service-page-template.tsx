import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { ROUTES } from "@/constants/routes";
import { getServicePageContent } from "@/data/services/pages";
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
import { MagneticButton } from "@/components/motion/magnetic-button";
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

  return (
    <>
      <ServicePageHero content={content} service={service} breadcrumbs={breadcrumbs} />

      {/* Service details */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-up">
              <h2 className="text-display-sm text-ink-900">{content.details.title}</h2>
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
              title={`Why hire ${service.pluralName.toLowerCase()} through us`}
              description="Edmonton homeowners choose Edmonton Home Connect for vetted pros, free matching, and zero runaround."
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
              We connect homeowners in Edmonton and surrounding communities with vetted{" "}
              {service.pluralName.toLowerCase()}. Don&apos;t see your area? Submit your postal
              code — we likely serve you.
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
              description={`Common questions about hiring ${service.pluralName.toLowerCase()} in Edmonton.`}
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
              description={`Real reviews from homeowners matched with ${service.pluralName.toLowerCase()} in our network.`}
            />
          </Reveal>
          <TestimonialCarousel testimonials={displayTestimonials} />
        </Container>
      </Section>

      {/* CTA band */}
      <section className="bg-ink-950 py-14">
        <Container className="text-center">
          <Reveal variant="fade-up">
            <h2 className="text-display-sm text-white">
              Ready to hire {service.pluralName.toLowerCase()} in Edmonton?
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-body-lg text-ink-300">
              Get matched with up to {siteConfig.business.maxMatchedPros} vetted pros — free,
              fast, and no obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton href="#service-quote" size="lg">
                Get Free Quotes
              </MagneticButton>
              <MagneticButton
                href={`tel:${siteConfig.phone.tel}`}
                variant="ghost"
                size="lg"
                magnetic={false}
                className="text-white hover:bg-ink-800 hover:text-white"
              >
                Call {siteConfig.phone.display}
              </MagneticButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Lead form */}
      <Section id="service-quote" className="relative overflow-hidden bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-up">
              <SectionHeader
                title={`Get your free ${service.name.toLowerCase()} quotes`}
                description={`Tell us about your project. We'll connect you with qualified ${service.pluralName.toLowerCase()} in Edmonton.`}
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
                description="Explore other home services available through our Edmonton network."
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
