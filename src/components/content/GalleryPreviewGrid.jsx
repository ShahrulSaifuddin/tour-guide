import React from "react";
import { Camera } from "lucide-react";
import { Button } from "../ui/Button";

export default function GalleryPreviewGrid({ images, onViewAll }) {
  if (!images || images.length === 0) return null;

  // Take first 4 or 5 images for preview
  const previewImages = images.slice(0, 5);

  return (
    <section className="py-12 border-t border-white/5">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Gallery</h2>
          <p className="text-gray-400">
            A visual journey through this experience.
          </p>
        </div>
        <Button
          onClick={onViewAll}
          variant="outline"
          className="hidden md:flex"
        >
          <Camera className="w-4 h-4 mr-2" />
          See All Photos
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
        {previewImages.map((img, idx) => {
          // Layout logic: First image is large on desktop
          const isMain = idx === 0;
          return (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                isMain ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
              onClick={onViewAll}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

              {/* Overlay for last item on mobile or if we want a "See More" overlay */}
              {idx === previewImages.length - 1 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    +{images.length - 5} More
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Button
        onClick={onViewAll}
        variant="outline"
        className="w-full mt-6 md:hidden"
      >
        <Camera className="w-4 h-4 mr-2" /> See All Photos
      </Button>
    </section>
  );
}
