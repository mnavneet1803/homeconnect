import { Skeleton, SkeletonText } from "@/components/skeletons/primitives";
import { cn } from "@/lib/utils/cn";

export function ServiceCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("card-interactive flex h-full flex-col p-6", className)} aria-hidden>
      <Skeleton className="mb-4 h-12 w-12 rounded-xl" />
      <Skeleton className="h-5 w-40" />
      <SkeletonText lines={2} className="mt-3" />
      <div className="mt-5">
        <Skeleton className="h-4 w-24 rounded-pill" />
      </div>
    </div>
  );
}

