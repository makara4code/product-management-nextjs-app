import { Skeleton } from "@/components/ui/skeleton";

export function ProductViewSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:py-6 max-w-300 mx-auto">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Actions skeleton */}
      <div className="flex items-center justify-end gap-2">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-9 w-20" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="space-y-3">
          <Skeleton className="aspect-square rounded-lg" />
          <div className="flex gap-2">
            <Skeleton className="h-14 w-14 rounded-md" />
            <Skeleton className="h-14 w-14 rounded-md" />
            <Skeleton className="h-14 w-14 rounded-md" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-px w-full" />
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-16 w-full" />
          </div>
          <Skeleton className="h-px w-full" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
