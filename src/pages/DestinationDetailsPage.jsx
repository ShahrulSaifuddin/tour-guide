import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { destinations, destinationsEditorial } from "../data/destinationsData";
import { packages as packagesData } from "../data/packagesData";
import { ArrowLeft, MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";

// New Content Components
import CaseStudySection from "../components/content/CaseStudySection";
import HistorySection from "../components/content/HistorySection";
import GalleryPreviewGrid from "../components/content/GalleryPreviewGrid";
import GalaxyGalleryModal from "../components/gallery/GalaxyGalleryModal";

export default function DestinationDetailsPage() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [destinationPackages, setDestinationPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gallery State
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const editorial =
    destinationsEditorial[slug] || destinationsEditorial.default;

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundDestination = destinations.find((d) => d.slug === slug);
      if (foundDestination) {
        setDestination(foundDestination);
        const related = packagesData.filter(
          (p) => p.destination_id === foundDestination.id,
        );
        setDestinationPackages(related);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading)
    return <div className="p-10 text-white min-h-screen">Loading...</div>;
  if (!destination)
    return <div className="p-10 text-white min-h-screen">Not Found</div>;

  return (
    <div className="min-h-screen pb-20 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={destination.image_url}
            alt={destination.name}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="container mx-auto">
            <Link
              to="/destinations"
              className="text-white/80 hover:text-white mb-6 flex items-center transition-colors w-fit"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
            </Link>
            <div className="flex items-center text-primary mb-2 font-medium tracking-wide">
              <MapPin className="mr-2 h-4 w-4" /> MALAYSIA • CITY GUIDE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
              {destination.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {editorial.vibe}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-primary">
                About {destination.name}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            {/* Highlights Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Top Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {(destination.highlights && destination.highlights.length > 0
                  ? destination.highlights
                  : editorial.highlights
                ).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="mr-3 text-primary flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* [NEW] Case Study Section */}
            {destination.caseStudy && (
              <CaseStudySection data={destination.caseStudy} />
            )}

            {/* [NEW] History Section */}
            {destination.history && (
              <HistorySection
                text={destination.history.text}
                fact={destination.history.fact}
              />
            )}

            {/* [NEW] Gallery Preview */}
            {destination.gallery && (
              <GalleryPreviewGrid
                images={destination.gallery}
                onViewAll={() => setIsGalleryOpen(true)}
              />
            )}

            {/* Experiences List Section */}
            <section id="experiences" className="pt-8 border-t border-white/5">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Experiences in {destination.name}
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Handpicked tours you can book in this destination.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {destinationPackages.length > 0 ? (
                  destinationPackages.map((pkg) => (
                    <Link
                      key={pkg.id}
                      to={`/destinations/${destination.slug}/experiences/${pkg.slug}`}
                      className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                          <img
                            src={pkg.image_url}
                            alt={pkg.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {pkg.is_featured && (
                            <span className="absolute top-3 left-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {pkg.title}
                              </h3>
                              <div className="flex items-center text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="ml-1 text-sm font-bold">
                                  5.0
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                              {pkg.description}
                            </p>
                            <div className="flex gap-4 text-sm text-gray-300">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1.5 text-primary" />
                                {pkg.duration}
                              </div>
                              <div className="flex items-center">
                                <span className="text-primary mr-1.5">•</span>
                                Private Tour
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-400">
                              From{" "}
                              <span className="text-xl font-bold text-white ml-1">
                                RM {pkg.price}
                              </span>{" "}
                              <span className="text-xs">/group</span>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all"
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-gray-400">
                      More experiences coming soon to {destination.name}.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="font-bold mb-4 text-lg text-white">
                  Traveler Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">
                      Best Time to Visit
                    </span>
                    <p className="font-medium text-gray-200 mt-1">
                      {editorial?.bestTime || "Year-round"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">
                      Perfect For
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(editorial?.bestFor || []).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/10 text-primary px-2.5 py-1 rounded-full border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">
                      Tours Available
                    </span>
                    <p className="font-medium text-gray-200 mt-1">
                      {destinationPackages.length} Experiences
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20">
                <h3 className="font-bold mb-2 text-white">
                  Need a Custom Plan?
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  We can customize an itinerary just for you based on your
                  interests.
                </p>
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galaxy Modal */}
      <GalaxyGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={destination.gallery || []}
      />
    </div>
  );
}

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
