import { QuoteFormSkeleton, Skeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <section className="bg-gradient-brand-subtle pt-16">
      <div className="mx-auto max-w-content px-gutter lg:px-gutter-lg">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="space-y-3">
              <Skeleton className="h-8 w-2/3 max-w-lg" />
              <Skeleton className="h-4 w-2/3 max-w-xl" />
            </div>
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
  );
}

