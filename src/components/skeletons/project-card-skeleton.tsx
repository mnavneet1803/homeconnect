import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";

export function ProjectCardSkeleton() {
  return (
    <div className="group card-interactive overflow-hidden" aria-hidden>
      <div className="relative aspect-[4/3] bg-surface-100">
        <Skeleton className="absolute left-4 top-4 h-7 w-24 rounded-pill" />
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="p-5">
        <SkeletonText lines={2} />
        <Skeleton className="mt-4 h-3 w-44" />
      </div>
    </div>
  );
}

