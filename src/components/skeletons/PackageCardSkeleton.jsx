import { Skeleton } from "../ui/Skeleton";
// eslint-disable-next-line no-unused-vars
import { cn } from "@/lib/utils";

export function PackageCardSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden glass-panel border border-white/5 flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="relative aspect-video">
        <Skeleton className="w-full h-full" />
        <Skeleton className="absolute top-4 right-4 h-6 w-16 rounded-full" />
      </div>

      <div className="p-6 flex-1 flex flex-col space-y-4">
        {/* Location */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Title */}
        <Skeleton className="h-8 w-3/4" />

        {/* Price */}
        <Skeleton className="h-8 w-1/3" />

        {/* Description */}
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Inclusions */}
        <div className="space-y-2 pt-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-md mt-4" />
      </div>
    </div>
  );
}
