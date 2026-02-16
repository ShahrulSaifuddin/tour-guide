import { Skeleton } from "../ui/Skeleton";

export function AboutSkeleton() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] flex items-center justify-center bg-muted/20">
        <div className="container text-center px-4 space-y-6">
          <Skeleton className="h-16 w-3/4 md:w-1/2 mx-auto" />
          <Skeleton className="h-6 w-full md:w-2/3 mx-auto" />
        </div>
      </div>

      {/* Bio Skeleton */}
      <div className="py-20 container px-4">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Skeleton className="aspect-[3/4] rounded-2xl w-full" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-64" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-12 w-32 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
