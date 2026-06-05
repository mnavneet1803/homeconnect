import { HeroSkeleton, ServiceCardSkeleton, QuoteFormSkeleton, Skeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <>
      <HeroSkeleton />
      <section className="border-y border-border-subtle bg-surface-0 py-12 md:py-16">
        <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <div className="mb-10 text-center">
            <Skeleton className="mx-auto h-4 w-80" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card-elevated px-4 py-6 text-center md:px-6 md:py-8" aria-hidden>
                <Skeleton className="mx-auto h-10 w-24" />
                <Skeleton className="mx-auto mt-3 h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <div className="mb-10 space-y-3 text-center">
            <Skeleton className="mx-auto h-8 w-2/3 max-w-xl" />
            <Skeleton className="mx-auto h-4 w-2/3 max-w-2xl" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-gradient-brand-subtle py-section">
        <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Skeleton className="h-8 w-2/3 max-w-lg" />
              <Skeleton className="mt-4 h-4 w-2/3 max-w-xl" />
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
        </div>
      </section>
    </>
  );
}

