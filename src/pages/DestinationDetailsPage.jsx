import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";
import {
  Loader2,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Clock,
  Info,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { destinationsEditorial } from "../data/destinationsData";

export default function DestinationDetailsPage() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get editorial data for this slug
  const editorial =
    destinationsEditorial[slug] || destinationsEditorial.default;

  useEffect(() => {
    fetchDestination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchDestination = async () => {
    try {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setDestination(data);
      if (data) fetchRelatedPackages(data.id);
    } catch (error) {
      console.error("Error fetching destination:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPackages = async (destinationId) => {
    try {
      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("destination_id", destinationId)
        .order("price", { ascending: true });

      if (error) {
        // If error (e.g. no packages found), just set empty
        console.log("No packages found or error:", error.message);
        setPackages([]);
      } else {
        setPackages(data || []);
      }
    } catch (error) {
      console.error("Error fetching packages:", error);
      setPackages([]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Destination Not Found
        </h1>
        <Link to="/destinations">
          <Button variant="outline" className="border-white/20 text-white">
            Back to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  // Use editorial highlights if DB highlights are missing/empty
  const displayHighlights =
    destination.highlights && destination.highlights.length > 0
      ? destination.highlights
      : editorial.highlights;

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title={`${destination.name} - Destination Guide`}
        description={destination.description}
      />

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={destination.image_url}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        </div>

        <div className="absolute top-24 left-0 w-full px-4 container">
          <Link
            to="/destinations"
            className="inline-flex items-center text-white/80 hover:text-primary transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Destinations
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full pb-20 pt-32 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full">
                  Destination Guide
                </span>
                <span className="flex items-center text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-primary" /> Malaysia
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                {destination.name}
              </h1>

              <p className="text-xl md:text-2xl text-primary italic font-light max-w-3xl">
                "{editorial?.vibe || destination.description.substring(0, 50)}
                ..."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">
              About {destination.name}
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
              {destination.description}
            </p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">
              Key Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {displayHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-5 rounded-xl glass-panel border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-200">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Travel Tips (Editorial) */}
          <section className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Info className="w-5 h-5 text-primary mr-2" /> Traveler Info
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Best Time to Visit
                </h4>
                <p className="text-white text-lg">
                  {editorial?.bestTime || "Year-round"}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(editorial?.bestFor || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Packages List */}
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white font-serif">
                  Curated Experiences
                </h2>
                <p className="text-slate-400 mt-1">
                  Private tours available in {destination.name}
                </p>
              </div>
            </div>

            {packages.length > 0 ? (
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <Link key={pkg.id} to={`/packages/${pkg.slug}`}>
                    <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-2xl glass-panel hover:bg-white/5 transition-all mb-4 border border-white/5 hover:border-primary/30">
                      <div className="sm:w-48 aspect-video rounded-xl overflow-hidden relative shrink-0">
                        <img
                          src={pkg.image_url}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md text-xs font-bold text-white">
                          {pkg.duration}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                          {pkg.description}
                        </p>
                        <div className="flex items-center text-primary font-bold">
                          View details <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-slate-400 mb-4">
                  No specific pre-made packages listed yet for this destination.
                </p>
                <Link to="/calendar">
                  <Button className="bg-primary text-black hover:bg-primary/90">
                    Request Custom Tour
                  </Button>
                </Link>
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-24">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Visit {destination.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Ready to explore? Book a private tour featuring this
                destination.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-slate-400">Starting From</span>
                  <span className="text-xl font-bold text-primary">
                    RM {destination.price_start}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-slate-400">Tour Type</span>
                  <span className="text-white">Private / Custom</span>
                </div>
              </div>

              <Link to="/calendar" className="block mb-3">
                <Button
                  size="lg"
                  className="w-full bg-primary text-black hover:bg-primary/90 font-bold"
                >
                  Book a Trip Here
                </Button>
              </Link>
              <p className="text-xs text-center text-slate-500">
                Custom itineraries available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
