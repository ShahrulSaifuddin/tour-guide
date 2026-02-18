import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2, ImageOff } from "lucide-react";

export default function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-10">
          <Loader2 className="w-6 h-6 animate-spin text-slate-500" />
        </div>
      )}

      {hasError ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-slate-800 text-slate-500 p-4">
          <ImageOff className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs">Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={cn(
            "transition-all duration-700 ease-in-out",
            isLoading
              ? "scale-105 blur-lg opacity-0"
              : "scale-100 blur-0 opacity-100",
            className,
          )}
          {...props}
        />
      )}
    </div>
  );
}
