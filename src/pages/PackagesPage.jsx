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
    <div className="min-h-screen bg-background pb-20">
      <SEO
        title="Tour Packages - Shahrul Private Tour"
        description="Browse our selection of curated private tours in Malaysia. From city walks to nature adventures."
      />

      <div className="bg-muted/30 py-16 mb-12">
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
              className="group rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2 text-sm text-primary font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {pkg.destinations?.name || "Malaysia"}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h2>
                <div className="text-2xl font-bold mb-4">RM {pkg.price}</div>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions?.slice(0, 2).map((inc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground/80"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500/70" />
                      {inc}
                    </div>
                  ))}
                  {pkg.inclusions?.length > 2 && (
                    <div className="text-xs text-muted-foreground pl-6">
                      + {pkg.inclusions.length - 2} more inclusions
                    </div>
                  )}
                </div>

                <Link to={`/packages/${pkg.slug}`}>
                  <Button className="w-full gap-2 variant-outline group-hover:bg-primary group-hover:text-primary-foreground">
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
