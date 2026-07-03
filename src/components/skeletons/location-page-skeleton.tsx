import { Container, Section, SectionHeader } from "@/components/ui/container";
import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";
import { QuoteFormSkeleton } from "@/components/skeletons/quote-form-skeleton";
import { ServiceCardSkeleton } from "@/components/skeletons/service-card-skeleton";

export function LocationPageSkeleton() {
  return (
    <>
      <Section className="border-b border-border bg-surface-50 pt-16 pb-12">
        <Container>
          <Skeleton className="h-4 w-40 rounded-pill" />
          <Skeleton className="mt-4 h-10 w-2/3 max-w-xl" />
          <SkeletonText lines={3} className="mt-6 max-w-prose" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Skeleton className="h-12 w-full rounded-lg sm:w-48" />
            <Skeleton className="h-12 w-full rounded-lg sm:w-48" />
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border-subtle py-10">
        <Container>
          <Skeleton className="h-7 w-2/3 max-w-lg" />
          <div className="mt-4 flex flex-wrap gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-28 rounded-pill" />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Popular services"
            description="Browse home services our team offers."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="What homeowners say"
                align="left"
                className="mx-0 text-left"
              />
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="card p-5" aria-hidden>
                    <SkeletonText lines={3} />
                    <Skeleton className="mt-4 h-3 w-40" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-surface-0 p-6" aria-hidden>
              <Skeleton className="h-4 w-32 rounded-pill" />
              <Skeleton className="mt-4 h-6 w-2/3" />
              <div className="mt-5 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex gap-2">
                    <Skeleton className="mt-0.5 h-4 w-4 rounded-sm" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionHeader title="FAQ" />
          <div className="divide-y divide-border-subtle rounded-2xl border border-border-subtle bg-surface-0 shadow-card">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="px-6 py-5" aria-hidden>
                <Skeleton className="h-5 w-5/6" />
                <Skeleton className="mt-3 h-3 w-2/3" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="location-quote" className="bg-gradient-brand-subtle">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Get a quote"
                description="Tell us about your project."
                align="left"
                className="mx-0 text-left"
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
    </>
  );
}

