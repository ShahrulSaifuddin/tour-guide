import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import GalaxyBackground from "../ui/GalaxyBackground";
import { Button } from "../ui/Button";

export default function GalaxyGalleryModal({
  isOpen,
  onClose,
  images = [],
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  // Sync internal state with prop changes when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Keyboard Navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    },
    [isOpen, currentIndex], // Dependencies matter for closure
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const showNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
        >
          {/* Animated Background */}
          <GalaxyBackground />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block focus:ring-2 focus:ring-primary focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-4 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block focus:ring-2 focus:ring-primary focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-4 md:p-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center rounded-lg overflow-hidden shadow-2xl"
            >
              {currentImage ? (
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `Gallery image ${currentIndex + 1}`}
                  className="max-h-[80vh] object-contain w-auto h-auto rounded-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                />
              ) : (
                <div className="text-white">Image not found</div>
              )}
            </motion.div>

            {/* Caption & Counter */}
            <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
              <div className="inline-block bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 max-w-lg mx-4">
                <div className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  {currentImage?.tags?.[0] || "Gallery"} • {currentIndex + 1} /{" "}
                  {images.length}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {currentImage?.captionTitle || "Untilted"}
                </h3>
                {currentImage?.captionText && (
                  <p className="text-gray-300 text-sm mt-1">
                    {currentImage.captionText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
