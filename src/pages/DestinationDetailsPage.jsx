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
} from "lucide-react";
import { Button } from "../components/ui/Button";

export default function DestinationDetailsPage() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

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
    } catch (error) {
      console.error("Error fetching destination:", error.message);
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

  if (!destination) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-background text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
        <Link to="/destinations">
          <Button variant="outline">Back to Destinations</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO
        title={`${destination.name} - Shahrul Private Tour`}
        description={destination.description}
      />

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 container">
          <Link
            to="/destinations"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Destinations
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {destination.name}
          </h1>
          <div className="flex items-center text-white/90 gap-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> Malaysia
            </span>
            <span className="bg-primary px-3 py-1 rounded-full text-sm font-bold text-white">
              From RM {destination.price_start}
            </span>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">About this Tour</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {destination.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-4 bg-muted/20 rounded-lg border border-border/50"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Booking Card */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-2">Book This Tour</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Check availability correctly and secure your slot for{" "}
              {destination.name}.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium">Flexible</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Starting Price</span>
                <span className="font-bold text-primary">
                  RM {destination.price_start}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Group Size</span>
                <span className="font-medium">Up to 7 Pax</span>
              </div>
            </div>

            <Link to="/calendar">
              <Button size="lg" className="w-full gap-2">
                <Calendar className="w-4 h-4" /> Check Availability
              </Button>
            </Link>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Bookings are subject to availability.
              <br />
              Deposit required to confirm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
