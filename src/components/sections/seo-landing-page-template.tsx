import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ctaNavigation } from "@/config/navigation";
import { SERVING_AREA } from "@/constants/launch";
import { ROUTES } from "@/constants/routes";
import { getSeoLandingPage } from "@/data/seo-landing";
import { buildFAQSchema } from "@/lib/seo/json-ld";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Icon, benefitIconName } from "@/components/ui/icons";
import { QuoteForm, QuoteFormReassurance } from "@/components/forms/quote-form";
import { QuoteFormSkeleton } from "@/components/skeletons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { notFound } from "next/navigation";

interface SeoLandingPageTemplateProps {
  slug: string;
}

export function SeoLandingPageTemplate({ slug }: SeoLandingPageTemplateProps) {
  const page = getSeoLandingPage(slug);
  if (!page) notFound();

  const faqItems = page.faq.map((item, i) => ({
    id: `${slug}-faq-${i}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLdScript data={buildFAQSchema(faqItems)} />
      <Section className="bg-surface-0 pb-10 pt-8 md:pb-14 md:pt-10">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-caption text-ink-500">
              <li>
                <Link href={ROUTES.home} className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-700">{page.h1}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="section-eyebrow">{SERVING_AREA}</p>
              <h1 className="mt-4 text-balance text-display-sm text-ink-900 md:text-display-md">
                {page.h1}
              </h1>
              <p className="mt-5 text-body-lg text-ink-500">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={ctaNavigation.secondary.href} size="lg">
                  {ctaNavigation.secondary.label}
                </Button>
                <Button href={ctaNavigation.whatsapp.href} variant="secondary" size="lg" external>
                  <Icon name="whatsapp" size={18} className="mr-2" />
                  {ctaNavigation.whatsapp.label}
                </Button>
                <Button href="#seo-quote" variant="secondary" size="lg">
                  {ctaNavigation.primary.label}
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-card">
              <Image
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                width={page.heroImage.width}
                height={page.heroImage.height}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal variant="fade-up">
              <h2 className="text-display-sm text-ink-900">
                Local Edmonton service you can count on
              </h2>
              <p className="mt-6 text-body-md leading-relaxed text-ink-600">
                {page.localContent}
              </p>
            </Reveal>
            <StaggerGrid className="grid gap-5 sm:grid-cols-2">
              {page.benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="rounded-2xl border border-border-subtle bg-surface-0 p-6 shadow-card">
                    <Icon
                      name={benefitIconName(benefit.icon)}
                      size={22}
                      className="text-brand-600"
                    />
                    <h3 className="mt-4 text-heading-sm text-ink-900">{benefit.title}</h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-ink-500">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-50">
        <Container>
          <SectionHeader
            title="Related services"
            description="Explore more ways we help Edmonton homeowners."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-0 px-5 py-2.5 text-label-md text-ink-700 transition-colors hover:border-brand-200 hover:text-brand-700"
                >
                  {link.label}
                  <Icon name="arrow-right" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Frequently asked questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section id="seo-quote" className="bg-gradient-trust border-t border-brand-100/50">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                title="Request a free quote"
                description={`${SERVING_AREA}. Tell us about your project — call ${siteConfig.phone.display} or submit the form.`}
                align="left"
                className="mx-0 mb-0 text-left"
              />
              <div className="mt-10">
                <QuoteFormReassurance />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={ctaNavigation.secondary.href} size="lg">
                  {ctaNavigation.secondary.label}
                </Button>
                <Button href={ctaNavigation.whatsapp.href} variant="secondary" size="lg" external>
                  <Icon name="whatsapp" size={18} className="mr-2" />
                  {ctaNavigation.whatsapp.label}
                </Button>
                <Button href={ctaNavigation.primary.href} variant="secondary" size="lg">
                  {ctaNavigation.primary.label}
                </Button>
              </div>
            </div>
            <Suspense fallback={<QuoteFormSkeleton />}>
              <QuoteForm
                id="seo-quote-form"
                defaultServiceSlug={page.defaultServiceSlug}
              />
            </Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}
