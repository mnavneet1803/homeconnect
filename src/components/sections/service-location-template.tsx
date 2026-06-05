import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SERVICE_BY_SLUG } from "@/constants/services";
import { LOCATION_BY_SLUG } from "@/constants/locations";
import { ROUTES } from "@/constants/routes";
import { getServicePageContent } from "@/data/services/pages";
import type { ServiceLocationPage } from "@/data/services/locations";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { MagneticButton } from "@/components/motion/magnetic-button";
import type { ServiceSlug } from "@/constants/services";
import { QuoteFormSkeleton } from "@/components/skeletons";

interface ServiceLocationTemplateProps {
  page: ServiceLocationPage;
}

export function ServiceLocationTemplate({ page }: ServiceLocationTemplateProps) {
  const service = SERVICE_BY_SLUG[page.serviceSlug];
  const location = LOCATION_BY_SLUG[page.locationSlug];
  const content = getServicePageContent(page.serviceSlug);

  const faqItems = [
    {
      id: `${page.serviceSlug}-${page.locationSlug}-1`,
      question: `How much does ${service.name.toLowerCase()} cost in ${location.name}?`,
      answer:
        content?.faq[0]?.answer ??
        `Rates vary by scope. Request free quotes from up to ${siteConfig.business.maxMatchedPros} vetted ${service.pluralName.toLowerCase()} serving ${location.name}.`,
    },
    {
      id: `${page.serviceSlug}-${page.locationSlug}-2`,
      question: `Are your ${service.pluralName.toLowerCase()} in ${location.name} insured?`,
      answer:
        "Yes. All professionals in our network must provide proof of liability insurance and WCB coverage before matching.",
    },
    {
      id: `${page.serviceSlug}-${page.locationSlug}-3`,
      question: `How quickly can I get a ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `Most requests in ${location.name} receive contact from matched pros within ${siteConfig.business.matchSlaHours} hours.`,
    },
  ];

  return (
    <>
      <Section className="bg-gradient-hero pt-16 pb-12">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-caption text-ink-500">
              <li>
                <Link href={ROUTES.home}>Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ROUTES.services.index}>Services</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={service.href}>{service.name}</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink-700">{location.name}</li>
            </ol>
          </nav>
          <p className="section-eyebrow">
            {service.name} · {location.name}
          </p>
          <h1 className="mt-2 text-display-sm text-ink-950">{page.headline}</h1>
          <p className="mt-4 max-w-prose text-body-lg text-ink-500">
            {page.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#service-location-quote" size="lg" magnetic={false}>
              Get Free Quotes
            </MagneticButton>
            <MagneticButton
              href={service.href}
              variant="secondary"
              size="lg"
              magnetic={false}
            >
              All {location.name} services
            </MagneticButton>
          </div>
        </Container>
      </Section>

      {content && (
        <Section>
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.subServices.slice(0, 6).map((sub) => (
                <div key={sub.name} className="card p-5">
                  <h2 className="text-heading-sm text-ink-900">{sub.name}</h2>
                  <p className="mt-2 text-body-sm text-ink-500">{sub.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-surface-0">
        <Container narrow>
          <SectionHeader title={`${service.name} FAQ — ${location.name}`} />
          <Accordion items={faqItems} />
        </Container>
      </Section>

      <Section id="service-location-quote" className="bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title={`Get ${service.name.toLowerCase()} quotes in ${location.name}`}
                description={`Matched with vetted ${service.pluralName.toLowerCase()} serving ${location.name}.`}
                align="left"
                className="mx-0 text-left"
              />
              <div className="mt-8">
                <QuoteFormReassurance />
              </div>
            </div>
            <Suspense fallback={<QuoteFormSkeleton />}>
              <QuoteForm
                id="service-location-form"
                defaultServiceSlug={page.serviceSlug as ServiceSlug}
              />
            </Suspense>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle py-8">
        <Container className="flex flex-wrap gap-4 text-body-sm">
          <Link href={service.href} className="text-brand-700">
            ← {service.name} in Edmonton
          </Link>
          <Link href={location.href} className="text-brand-700">
            All services in {location.name} →
          </Link>
        </Container>
      </Section>
    </>
  );
}
