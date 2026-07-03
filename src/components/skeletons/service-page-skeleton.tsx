import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";
import { QuoteFormSkeleton } from "@/components/skeletons/quote-form-skeleton";
import { ServiceCardSkeleton } from "@/components/skeletons/service-card-skeleton";
import { TestimonialSkeleton } from "@/components/skeletons/testimonial-skeleton";

export function ServicePageSkeleton() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-border bg-surface-50 pb-10 pt-8 md:pb-14 md:pt-10">
        <div className="relative mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <Skeleton className="mb-6 h-4 w-64" />
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Skeleton className="h-4 w-48 rounded-pill" />
              <div className="mt-4 space-y-3">
                <Skeleton className="h-10 w-full max-w-[26rem]" />
                <Skeleton className="h-10 w-full max-w-[22rem]" />
              </div>
              <SkeletonText lines={3} className="mt-6 max-w-prose" />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Skeleton className="h-12 w-full rounded-lg sm:w-48" />
                <Skeleton className="h-12 w-full rounded-lg sm:w-48" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-7 w-28 rounded-pill" />
                ))}
              </div>
            </div>
            <div className="card-elevated p-8">
              <Skeleton className="mb-6 h-14 w-14 rounded-2xl" />
              <Skeleton className="h-6 w-56" />
              <div className="mt-5 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
              <Skeleton className="mt-6 h-3 w-2/3" />
            </div>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Skeleton className="h-8 w-2/3" />
              <SkeletonText lines={4} className="mt-6" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card h-full p-5" aria-hidden>
                  <Skeleton className="h-5 w-2/3" />
                  <SkeletonText lines={2} className="mt-3" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-surface-0">
        <Container>
          <SectionHeader
            title="Why choose our team"
            description="Edmonton homeowners choose us for our in-house team and free quotes."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card h-full p-6" aria-hidden>
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="mt-4 h-5 w-2/3" />
                <SkeletonText lines={2} className="mt-3" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local areas */}
      <Section className="border-y border-border-subtle bg-surface-50">
        <Container>
          <Skeleton className="h-7 w-2/3" />
          <SkeletonText lines={2} className="mt-3 max-w-prose" />
          <div className="mt-6 flex flex-wrap gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-24 rounded-pill" />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container narrow>
          <SectionHeader title="FAQ" description="Common questions" />
          <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle bg-surface-0 shadow-card">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="px-6 py-5" aria-hidden>
                <Skeleton className="h-5 w-5/6" />
                <Skeleton className="mt-3 h-3 w-2/3" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface-0">
        <Container>
          <SectionHeader title="What Edmonton homeowners say" description="Reviews" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA band */}
      <section className="bg-ink-950 py-10" aria-hidden>
        <Container className="text-center">
          <Skeleton className="mx-auto h-9 w-2/3 max-w-xl bg-gradient-to-r from-ink-800 via-ink-700 to-ink-800" />
          <Skeleton className="mx-auto mt-4 h-4 w-2/3 max-w-lg bg-gradient-to-r from-ink-800 via-ink-700 to-ink-800" />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Skeleton className="h-12 w-56 rounded-lg bg-gradient-to-r from-ink-800 via-ink-700 to-ink-800" />
            <Skeleton className="h-12 w-56 rounded-lg bg-gradient-to-r from-ink-800 via-ink-700 to-ink-800" />
          </div>
        </Container>
      </section>

      {/* Lead form */}
      <Section id="service-quote" className="relative overflow-hidden bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeader
                title="Get your free quotes"
                description="Tell us about your project."
                align="left"
                className="mx-0 mb-0 text-left"
              />
              <div className="mt-8 space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3" aria-hidden>
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-4 w-56" />
                  </div>
                ))}
              </div>
            </div>
            <QuoteFormSkeleton />
          </div>
        </Container>
      </Section>

      {/* Related services */}
      <Section>
        <Container>
          <SectionHeader title="Related services" description="Explore more" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

