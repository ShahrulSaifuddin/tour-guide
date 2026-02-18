import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

import OptimizedImage from "../ui/OptimizedImage";

export default function DestinationCard({ destination, editorial }) {
  const { name, image_url, slug } = destination;
  const { vibe, highlights, bestFor, bestTime, stats } = editorial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col md:flex-row gap-6 glass-panel p-6 rounded-3xl overflow-hidden hover:bg-slate-900/80 transition-all duration-500 border border-white/10 hover:border-primary/30"
    >
      {/* Image Section - Standardized Aspect Ratio */}
      <div className="w-full md:w-2/5 lg:w-1/3 relative shrink-0 overflow-hidden rounded-2xl h-64 md:h-auto">
        <OptimizedImage
          src={image_url}
          alt={name}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/10">
          <Calendar className="w-3 h-3 text-primary" />
          Best time: {bestTime}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-3">
          {bestFor.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <p className="text-primary italic text-lg mb-6 leading-relaxed font-light">
          "{vibe}"
        </p>

        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Key Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start text-sm text-slate-300 group/item"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-white/10 pt-6">
          <div className="text-sm text-slate-400 flex items-center">
            <User className="w-4 h-4 mr-2 text-primary" />
            {stats?.tours || 3}+ curated experiences available
          </div>

          <div className="flex gap-4 w-full sm:w-auto">
            <Link to={`/destinations/${slug}`} className="flex-1 sm:flex-none">
              <Button className="w-full rounded-full bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                Explore Destination
              </Button>
            </Link>
            {/* Secondary CTA - Optional, could link to filtered packages */}
            {/* <Link to={`/packages?destination=${slug}`} className="hidden sm:block">
               <Button variant="ghost" className="text-slate-400 hover:text-white">
                 See Tours
               </Button>
             </Link> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
