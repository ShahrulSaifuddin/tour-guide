import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { packages } from "../data/packagesData";
import { destinations } from "../data/destinationsData";
import SEO from "../components/SEO";
import {
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Shield,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { PackageDetailsSkeleton } from "../components/skeletons/PackageDetailsSkeleton";

// New Content Components
import CaseStudySection from "../components/content/CaseStudySection";
import HistorySection from "../components/content/HistorySection";
import GalleryPreviewGrid from "../components/content/GalleryPreviewGrid";
import GalaxyGalleryModal from "../components/gallery/GalaxyGalleryModal";

export default function ExperienceDetailsPage() {
  const { slug, destinationSlug } = useParams(); // Note: destinationSlug might come from URL if we use nested routes properly
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Gallery State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Find package by slug (experienceSlug from URL, or just slug if legacy)
      // The Route is /destinations/:slug/experiences/:experienceSlug
      // So 'slug' is destination slug, 'experienceSlug' is experience slug
      // But in App.jsx I used: path="/destinations/:slug/experiences/:experienceSlug"
      // Let's get the right param.
      // If we are on /packages/:slug, then 'slug' is the package slug.
      // If we are on /destinations/:slug/experiences/:experienceSlug, then 'slug' is destination, 'experienceSlug' is package.
      // I need to handle both or retrieve from URL params dynamically.
      // But 'useParams' returns an object.
      // I'll grab the package based on the available slug.
      // If I am in ExperienceDetailsPage, I should check which param I have.
      // Actually, let's look at the URL structure I defined in App.jsx:
      // path="/packages/:slug" -> slug is package
      // path="/destinations/:slug/experiences/:experienceSlug" -> experienceSlug is package
      // I'll assume if 'slug' is passed and 'experienceSlug' is undefined, it's the package slug (legacy).
      // If 'experienceSlug' is defined, it is the package slug.
    }, 0);
  }, []);

  // Wait, I need to access params inside component body first.
  const params = useParams();
  const packageSlug = params.experienceSlug || params.slug;
  const destSlug = params.experienceSlug ? params.slug : null; // If nested, params.slug is destination.

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPkg = packages.find((p) => p.slug === packageSlug);

      if (foundPkg) {
        const dest = destinations.find((d) => d.id === foundPkg.destination_id);
        const enrichedPkg = {
          ...foundPkg,
          destinations: dest ? { name: dest.name, slug: dest.slug } : null,
        };
        setPkg(enrichedPkg);
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [packageSlug]);

  if (loading) {
    return <PackageDetailsSkeleton />;
  }

  if (!pkg) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
        <Link to="/experiences">
          <Button variant="outline">Browse All Experiences</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-black text-white">
      <SEO
        title={`${pkg.title} - Shahrul Private Tour`}
        description={pkg.description}
      />

      {/* Breadcrumbs (for nested view) */}
      <div className="bg-zinc-900 border-b border-white/5">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-400 flex items-center">
          <Link
            to="/destinations"
            className="hover:text-white transition-colors"
          >
            Destinations
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
          {pkg.destinations ? (
            <>
              <Link
                to={`/destinations/${pkg.destinations.slug}`}
                className="hover:text-white transition-colors"
              >
                {pkg.destinations.name}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
            </>
          ) : (
            <>
              <span className="text-gray-500">Malaysia</span>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
            </>
          )}
          <span className="text-primary truncate">{pkg.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={pkg.image_url}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 container max-w-6xl mx-auto">
          <div className="flex items-center text-primary font-bold mb-3 uppercase tracking-wider text-xs">
            <MapPin className="w-3 h-3 mr-1" />{" "}
            {pkg.destinations?.name || "Malaysia"}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight font-serif">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
              <Clock className="w-4 h-4 mr-2 text-primary" /> {pkg.duration}
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" /> 5.0
              (24 reviews)
            </div>
            <div className="bg-primary text-black px-4 py-2 rounded-lg flex items-center text-sm font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)]">
              From RM {pkg.price}{" "}
              <span className="text-[10px] ml-1 opacity-80 uppercase">
                / group
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Content */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Experience Overview
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {pkg.description}
            </p>
          </section>

          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8 text-white">
                Tour Itinerary
              </h2>
              <div className="relative border-l-2 border-primary/20 ml-3 space-y-10 py-2">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-primary" />
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded mb-2">
                        {item.time}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">
              What's Included
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pkg.inclusions?.map((inc, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-200">{inc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* [NEW] Case Study Section */}
          {pkg.caseStudy && <CaseStudySection data={pkg.caseStudy} />}

          {/* [NEW] History Section (only if exists) */}
          {pkg.history && (
            <HistorySection text={pkg.history.text} fact={pkg.history.fact} />
          )}

          {/* [NEW] Gallery Preview */}
          {pkg.gallery && (
            <GalleryPreviewGrid
              images={pkg.gallery}
              onViewAll={() => setIsGalleryOpen(true)}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-white">
              Book This Experience
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Shield className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    Private Professional Guide
                  </div>
                  <div className="text-sm text-gray-400">
                    Certified & Experienced, just for your group.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Clock className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <div className="font-bold text-white">
                    Flexible Scheduling
                  </div>
                  <div className="text-sm text-gray-400">
                    Start time customizable to your needs.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-400">Total Price</span>
                <span className="text-3xl font-bold text-primary">
                  RM {pkg.price}
                </span>
              </div>
              <p className="text-xs text-right text-gray-500">
                Per group (up to 4 pax)
              </p>
            </div>

            <Link to="/calendar">
              <Button
                size="lg"
                className="w-full h-12 text-base gap-2 bg-primary text-black hover:bg-primary/90 font-bold shadow-[0_4px_14px_0_rgba(234,179,8,0.39)]"
              >
                <Calendar className="w-5 h-5" /> Check Availability
              </Button>
            </Link>
            <p className="text-xs text-center text-gray-500 mt-4">
              No payment required to inquire.
            </p>
          </div>
        </div>
      </div>

      {/* Galaxy Modal */}
      <GalaxyGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={pkg.gallery || []}
      />
    </div>
  );
}
