import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { destinations, destinationsEditorial } from "../data/destinationsData";
// import { packages as packagesData } from "../data/packagesData";
import { ArrowLeft, MapPin, ArrowRight } from "lucide-react";

export default function DestinationDetailsPage() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  // const [relatedPackages, setRelatedPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Rendering DestinationDetailsPage Step 3", slug);

  const editorial =
    destinationsEditorial[slug] || destinationsEditorial.default;

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundDestination = destinations.find((d) => d.slug === slug);
      if (foundDestination) {
        setDestination(foundDestination);
        // const foundPackages = packagesData.filter(
        //   (p) => p.destination_id === foundDestination.id,
        // );
        // setRelatedPackages(foundPackages);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) return <div className="p-10 text-white">Loading...</div>;
  if (!destination) return <div className="p-10 text-white">Not Found</div>;

  return (
    <div className="min-h-screen pb-20 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <img
            src={destination.image_url}
            alt={destination.name}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <Link
            to="/destinations"
            className="text-primary mb-4 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center text-primary">
            <MapPin className="mr-2 h-4 w-4" /> Malaysia
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-300 leading-relaxed">
              {destination.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(destination.highlights && destination.highlights.length > 0
                ? destination.highlights
                : editorial.highlights
              ).map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="mr-3 text-primary">✓</div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="font-bold mb-2 text-xl">Traveler Info</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <span className="text-gray-400 text-sm uppercase">
                  Best Time
                </span>
                <p className="font-medium">
                  {editorial?.bestTime || "Year-round"}
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-sm uppercase">
                  Perfect For
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {(editorial?.bestFor || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-24 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Visit {destination.name}</h3>
            <div className="flex justify-between mb-4 pb-4 border-b border-white/10">
              <span className="text-gray-400">Starting From</span>
              <span className="text-primary font-bold text-xl">
                RM {destination.price_start}
              </span>
            </div>
            <Link
              to="/calendar"
              className="block w-full py-3 bg-primary text-black text-center font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book This Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
