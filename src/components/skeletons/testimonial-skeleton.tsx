import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";

export function TestimonialSkeleton() {
  return (
    <div className="card flex h-full flex-col p-6 md:p-8" aria-hidden>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-4 rounded-sm" />
        ))}
      </div>
      <SkeletonText lines={4} className="mt-5 flex-1" />
      <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-6">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-40" />
        </div>
      </div>
    </div>
  );
}

