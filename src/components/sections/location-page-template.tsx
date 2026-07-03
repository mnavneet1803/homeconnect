import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { getAllServices } from "@/data";
import { testimonials } from "@/data/testimonials";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Accordion } from "@/components/ui/accordion";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { EdmontonCredibility } from "@/components/trust";
import { Button } from "@/components/ui/button";
import type { Location } from "@/types/location";
import { slugify } from "@/lib/utils/slugify";
import { QuoteFormSkeleton } from "@/components/skeletons";

interface LocationPageTemplateProps {
  location: Location;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const services = getAllServices();
  const localTestimonials = testimonials.filter((t) =>
    t.location.toLowerCase().includes(location.name.toLowerCase())
  );
  const displayTestimonials =
    localTestimonials.length > 0
      ? localTestimonials.slice(0, 3)
      : testimonials.filter((t) => t.featured).slice(0, 3);

  const faqItems = [
    {
      id: `${location.slug}-cost`,
      question: `How much do home services cost in ${location.name}?`,
      answer: `Every project is priced individually. Our team reviews your scope in ${location.name} and provides a custom written quote before any work begins.`,
    },
    {
      id: `${location.slug}-speed`,
      question: `How quickly will I hear back in ${location.name}?`,
      answer: `Most homeowners in ${location.name} hear from our team within ${siteConfig.business.matchSlaHours} hours of submitting a request.`,
    },
    {
      id: `${location.slug}-areas`,
      question: `Which neighbourhoods do you serve in ${location.name}?`,
      answer:
        location.neighbourhoods.length > 0
          ? `We serve ${location.neighbourhoods.join(", ")}, and surrounding areas in ${location.name}.`
          : `We serve all of ${location.name} and surrounding communities in the Capital Region.`,
    },
  ];

  return (
    <>
      <Section className="border-b border-border bg-surface-50 pt-16 pb-12">
        <Container>
          <p className="section-eyebrow">{location.region}</p>
          <h1 className="mt-2 text-display-sm text-pine-950 md:text-display-md">
            Home services in {location.name}
          </h1>
          <p className="mt-4 max-w-prose text-body-lg text-ink-600">
            Our team serves {location.name} and the surrounding
            Capital Region directly. Free quote — no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#location-quote" size="lg">
              Get Free Quotes
            </Button>
            <Button
              href={`tel:${siteConfig.phone.tel}`}
              variant="secondary"
              size="lg"
            >
              Call {siteConfig.phone.display}
            </Button>
          </div>
        </Container>
      </Section>

      {location.neighbourhoods.length > 0 && (
        <Section className="border-b border-border-subtle py-10">
          <Container>
            <h2 className="text-heading-lg text-ink-900">
              Neighbourhoods we serve in {location.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {location.neighbourhoods.map((hood) => (
                <Link
                  key={hood}
                  href={ROUTES.locations.neighbourhood(location.slug, slugify(hood))}
                  className="badge-neutral hover:bg-brand-50 hover:text-brand-800"
                >
                  {hood}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeader
            title={`Popular services in ${location.name}`}
            description="Browse home services our team offers in Edmonton and the Capital Region."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href={ROUTES.services.sub(service.slug, location.slug)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* TODO: Enable testimonials after receiving verified customer reviews.
      <Section className="bg-surface-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="What Edmonton homeowners say"
                align="left"
                className="mx-0 text-left"
              />
              <div className="space-y-4">
                {displayTestimonials.map((t) => (
                  <blockquote key={t.id} className="card p-5">
                    <p className="text-body-md text-ink-700">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-3 text-caption text-ink-500">
                      — {t.author}, {t.location}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <EdmontonCredibility />
          </div>
        </Container>
      </Section>
      */}

      <Section className="bg-surface-0">
        <Container>
          <EdmontonCredibility />
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionHeader title={`FAQ — ${location.name}`} />
          <Accordion items={faqItems} />
        </Container>
      </Section>

      <Section id="location-quote" className="bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title={`Get a free quote in ${location.name}`}
                description="Tell us about your project. Our team will review and respond with pricing."
                align="left"
                className="mx-0 text-left"
              />
              <div className="mt-8">
                <QuoteFormReassurance />
              </div>
            </div>
            <Suspense fallback={<QuoteFormSkeleton />}>
              <QuoteForm id="location-quote-form" />
            </Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}
