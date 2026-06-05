import { Skeleton } from "@/components/skeletons/primitives";
import { cn } from "@/lib/utils/cn";

/** Mirrors `QuoteForm` card sizing to avoid layout shift. */
export function QuoteFormSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("card-elevated overflow-hidden", className)} aria-hidden>
      <div className="border-b border-border-subtle px-6 py-5 md:px-8">
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex-1">
              <Skeleton className="h-1 w-full rounded-pill" />
              <Skeleton className="mt-3 h-3 w-16" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-6 md:px-8">
        <div className="space-y-5">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded-lg" />
            <Skeleton className="h-3 w-56" />
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Skeleton className="h-3 w-56" />
        </div>
      </div>
    </div>
  );
}

