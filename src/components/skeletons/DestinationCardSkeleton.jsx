import { Skeleton } from "../ui/Skeleton";

export function DestinationCardSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden glass-panel border border-white/5 h-[400px] relative">
      <Skeleton className="w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 bg-gradient-to-t from-black/80 to-transparent pt-20">
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
