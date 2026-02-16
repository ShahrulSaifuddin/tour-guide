import { Skeleton } from "../ui/Skeleton";
import { ArrowLeft } from "lucide-react";

export function PackageDetailsSkeleton() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Skeleton */}
      <div className="relative h-[50vh] overflow-hidden bg-muted/20">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-0 left-0 p-8 container max-w-4xl space-y-4">
          <div className="inline-flex items-center text-white/50 mb-4 space-x-2">
            <ArrowLeft className="w-4 h-4" />{" "}
            <Skeleton className="h-4 w-32 bg-white/20" />
          </div>

          <Skeleton className="h-4 w-48 bg-white/20" />

          <Skeleton className="h-12 w-3/4 bg-white/20" />

          <div className="flex gap-4">
            <Skeleton className="h-8 w-32 rounded-full bg-white/20" />
            <Skeleton className="h-8 w-32 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Main Content Skeleton */}
        <div className="md:col-span-2 space-y-10">
          <section className="space-y-4">
            <Skeleton className="h-8 w-64 bg-white/10" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-3/4 bg-white/10" />
            </div>
          </section>

          <section className="space-y-6">
            <Skeleton className="h-8 w-48 bg-white/10" />
            <div className="grid sm:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-12 w-full rounded-lg bg-white/5 border border-white/5"
                />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Skeleton */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 rounded-xl p-6 h-[400px] flex flex-col space-y-6">
            <Skeleton className="h-8 w-48" />

            <div className="space-y-4 flex-1">
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </div>

            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
