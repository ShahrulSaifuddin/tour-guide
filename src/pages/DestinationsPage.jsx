import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ScrollReveal from "../components/ui/ScrollReveal";
import SEO from "../components/SEO";
import DestinationsHero from "../components/destinations/DestinationsHero";
import DiscoverySection from "../components/destinations/DiscoverySection";
import DestinationCard from "../components/destinations/DestinationCard";
import EditorialSection from "../components/destinations/EditorialSection";
import { destinations, destinationsEditorial } from "../data/destinationsData";
import { Button } from "../components/ui/Button";

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDestinations = destinations.filter((dest) => {
    const editorial =
      destinationsEditorial[dest.slug] || destinationsEditorial.default;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      editorial.vibe.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || editorial.bestFor.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      <SEO
        title="Explore Destinations - Shahrul Private Tour"
        description="Discover the beauty, culture, and history of Malaysia's most iconic locations. Curated guides and travel inspiration."
      />

      <DestinationsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <DiscoverySection />

      <section className="container px-4 py-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">
            All Destinations
            <span className="block text-sm font-sans font-normal text-slate-400 mt-2">
              {filteredDestinations.length} locations found
            </span>
          </h2>
        </div>

        <div className="grid gap-8">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <ScrollReveal key={destination.id} delay={0.1}>
                <DestinationCard
                  destination={destination}
                  editorial={
                    destinationsEditorial[destination.slug] ||
                    destinationsEditorial.default
                  }
                />
              </ScrollReveal>
            ))
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-xl text-slate-300 mb-4">
                No destinations match your search.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("All");
                }}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <EditorialSection />

      {/* Footer CTA */}
      <section className="container px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Not sure where to start?
        </h2>
        <Button className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-slate-200">
          Help me choose a destination
        </Button>
      </section>
    </div>
  );
}
