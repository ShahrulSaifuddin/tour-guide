import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";
import { Loader2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .order("price_start", { ascending: true });

      if (error) throw error;
      setDestinations(data || []);
    } catch (error) {
      console.error("Error fetching destinations:", error.message);
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
        title="Tour Destinations - Shahrul Private Tour"
        description="Explore top destinations in Malaysia including Kuala Lumpur, Penang, Melaka, and Cameron Highlands."
      />

      <div className="bg-muted/30 py-16 mb-12">
        <div className="container text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Malaysia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty, culture, and history of Malaysia's most iconic
            locations.
          </p>
        </div>
      </div>

      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden glass-panel hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={destination.image_url}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{destination.name}</h2>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    From RM {destination.price_start}
                  </span>
                </div>

                <p className="text-muted-foreground line-clamp-2 mb-4 text-sm">
                  {destination.description}
                </p>

                <div className="space-y-2 mb-6">
                  {destination.highlights.slice(0, 3).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground/80"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link to={`/destinations/${destination.slug}`}>
                  <Button className="w-full gap-2 group-hover:bg-primary/90">
                    View Details{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
