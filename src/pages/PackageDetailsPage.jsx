import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import SEO from "../components/SEO";
import {
  Loader2,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { Button } from "../components/ui/Button";

export default function PackageDetailsPage() {
  const { slug } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchPackage = async () => {
    try {
      const { data, error } = await supabase
        .from("packages")
        .select("*, destinations(*)")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setPkg(data);
    } catch (error) {
      console.error("Error fetching package:", error.message);
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

  if (!pkg) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-background text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <Link to="/packages">
          <Button variant="outline">Back to Packages</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <SEO
        title={`${pkg.title} - Shahrul Private Tour`}
        description={pkg.description}
      />

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 container max-w-4xl">
          <Link
            to="/packages"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Packages
          </Link>
          <div className="flex items-center text-primary-foreground/90 text-sm font-bold mb-2 uppercase tracking-wide">
            <MapPin className="w-4 h-4 mr-1" />{" "}
            {pkg.destinations?.name || "Malaysia"}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black/50 backdrop-blur text-white px-4 py-1.5 rounded-full flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" /> {pkg.duration}
            </div>
            <div className="bg-primary text-white px-4 py-1.5 rounded-full flex items-center text-sm font-bold">
              RM {pkg.price} / group
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Content */}
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              {pkg.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pkg.inclusions?.map((inc, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-3 rounded-lg border border-border/60 bg-muted/10"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Ready to Book?</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Private Professional Guide</div>
                  <div className="text-xs text-muted-foreground">
                    Certified & Experienced
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Flexible Scheduling</div>
                  <div className="text-xs text-muted-foreground">
                    Choose your preferred date
                  </div>
                </div>
              </div>
            </div>

            <Link to="/calendar">
              <Button
                size="lg"
                className="w-full gap-2 shadow-lg hover:shadow-primary/20"
              >
                <Calendar className="w-4 h-4" /> Check Availability
              </Button>
            </Link>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Instant confirmation for weekend slots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
