import { Skeleton } from "../ui/Skeleton";

export function HomeSkeleton() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
      {/* Mimic Hero Section */}
      <div className="w-full max-w-5xl mx-auto glass-panel p-16 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center space-y-8">
        <Skeleton className="h-8 w-48 rounded-full" />
        <div className="space-y-4 w-full flex flex-col items-center">
          <Skeleton className="h-20 w-3/4" />
          <Skeleton className="h-20 w-1/2" />
        </div>
        <Skeleton className="h-6 w-2/3 max-w-[600px]" />
        <div className="flex gap-6 pt-4">
          <Skeleton className="h-14 w-40 rounded-full" />
          <Skeleton className="h-14 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}
