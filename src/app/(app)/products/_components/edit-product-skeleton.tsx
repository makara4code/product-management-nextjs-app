import { Skeleton } from "@/components/ui/skeleton";

export function EditProductSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-3 md:gap-6 md:p-6 max-w-300">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Action buttons skeleton */}
      <div className="flex items-center justify-end gap-2 md:gap-3">
        <Skeleton className="h-8 w-20 md:h-9 md:w-24" />
        <Skeleton className="h-8 w-24 md:h-9 md:w-28" />
      </div>

      {/* Form skeleton */}
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        {/* Main content - 2 columns */}
        <div className="space-y-4 md:space-y-6 lg:col-span-2">
          {/* General Information card */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </div>

          {/* Pricing card */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>

          {/* Inventory card */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="p-6 pt-0">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-4 md:space-y-6">
          {/* Category card */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="p-6 pt-0 space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
