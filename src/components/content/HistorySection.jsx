import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/Button";

export default function HistorySection({ text, fact }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  return (
    <section className="py-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-white">Historical Context</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div
            className={`text-lg text-gray-300 leading-relaxed overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-[1000px]" : "max-h-32 mask-gradient-b"
            }`}
            style={{
              maskImage: isExpanded
                ? "none"
                : "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: isExpanded
                ? "none"
                : "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          >
            {text}
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-primary hover:text-primary/80 pl-0 hover:bg-transparent"
          >
            {isExpanded ? (
              <>
                Read Less <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {fact && (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen className="w-24 h-24 text-primary" />
            </div>
            <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-xs">
              Did You Know?
            </h4>
            <p className="text-white font-medium italic relative z-10">
              "{fact}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
