import { Container, Section } from "@/components/ui/container";
import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";

/** Mirrors `HeroSection` to avoid CLS. */
export function HeroSkeleton() {
  return (
    <Section className="relative overflow-hidden bg-gradient-hero pb-16 pt-12 md:pb-24 md:pt-20">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Skeleton className="h-4 w-44 rounded-pill" />
            <div className="mt-4 space-y-3">
              <Skeleton className="h-10 w-full max-w-[28rem]" />
              <Skeleton className="h-10 w-full max-w-[24rem]" />
            </div>
            <div className="mt-6">
              <SkeletonText lines={3} className="max-w-prose" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Skeleton className="h-12 w-full rounded-lg sm:w-44" />
              <Skeleton className="h-12 w-full rounded-lg sm:w-44" />
            </div>
            <div className="mt-6 hidden sm:block">
              <Skeleton className="h-14 w-64 rounded-xl" />
            </div>
            <div className="mt-4">
              <Skeleton className="h-3 w-2/3" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-28 rounded-pill" />
              ))}
            </div>
            <div className="mt-8 md:hidden">
              <Skeleton className="h-[260px] w-full rounded-2xl" />
            </div>
          </div>

          <div className="hidden lg:block">
            <Skeleton className="mx-auto h-[420px] w-full max-w-md rounded-2xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

