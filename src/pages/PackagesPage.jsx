import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";
import { Loader2, Clock, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from("packages")
        .select("*, destinations(name)")
        .order("price", { ascending: true });

      if (error) throw error;
      setPackages(data || []);
    } catch (error) {
      console.error("Error fetching packages:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title="Tour Packages - Shahrul Private Tour"
        description="Browse our selection of curated private tours in Malaysia. From city walks to nature adventures."
      />

      <div className="py-16 mb-8 glass-panel mx-4 rounded-3xl mt-8">
        <div className="container text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Curated Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked itineraries designed to give you the best authentic
            experience.
          </p>
        </div>
      </div>

      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-panel hover:bg-white/10 transition-all duration-500 flex flex-col border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
                  <Clock className="w-3 h-3 text-primary" />
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-20">
                <div className="mb-2 text-sm text-primary font-medium flex items-center tracking-widest uppercase">
                  <MapPin className="w-3 h-3 mr-1" />
                  {pkg.destinations?.name || "Malaysia"}
                </div>
                <h2 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors text-white">
                  {pkg.title}
                </h2>
                <div className="text-2xl font-bold mb-4 text-slate-200">
                  RM {pkg.price}
                </div>

                <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions?.slice(0, 2).map((inc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      {inc}
                    </div>
                  ))}
                  {pkg.inclusions?.length > 2 && (
                    <div className="text-xs text-slate-500 pl-6">
                      + {pkg.inclusions.length - 2} more inclusions
                    </div>
                  )}
                </div>

                <Link to={`/packages/${pkg.slug}`}>
                  <Button className="w-full gap-2 variant-outline border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                    View Package <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
