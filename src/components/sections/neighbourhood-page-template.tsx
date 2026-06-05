import { Suspense } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { getAllServices } from "@/data";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { MagneticButton } from "@/components/motion/magnetic-button";
import type { NeighbourhoodPage } from "@/data/locations/neighbourhoods";

interface NeighbourhoodPageTemplateProps {
  neighbourhood: NeighbourhoodPage;
}

export function NeighbourhoodPageTemplate({
  neighbourhood,
}: NeighbourhoodPageTemplateProps) {
  const services = getAllServices().slice(0, 6);

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
                <Link href={ROUTES.locations.index}>Locations</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={ROUTES.locations.detail(neighbourhood.citySlug)}>
                  {neighbourhood.cityName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink-700">{neighbourhood.name}</li>
            </ol>
          </nav>
          <h1 className="text-display-sm text-ink-950">
            Home services in {neighbourhood.name}, {neighbourhood.cityName}
          </h1>
          <p className="mt-4 max-w-prose text-body-lg text-ink-500">
            Vetted handymen, painters, plumbers, and more serving{" "}
            {neighbourhood.name} homeowners. Free matching with up to{" "}
            {siteConfig.business.maxMatchedPros} local pros.
          </p>
          <MagneticButton href="#hood-quote" className="mt-8" size="lg" magnetic={false}>
            Get Free Quotes
          </MagneticButton>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Popular services in your area" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
                href={ROUTES.services.sub(s.slug, neighbourhood.citySlug)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="hood-quote" className="bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title={`Get matched in ${neighbourhood.name}`}
                align="left"
                className="mx-0 text-left"
              />
              <div className="mt-8">
                <QuoteFormReassurance />
              </div>
            </div>
            <Suspense fallback={<QuoteFormSkeleton />}>
              <QuoteForm id="hood-quote-form" />
            </Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}
