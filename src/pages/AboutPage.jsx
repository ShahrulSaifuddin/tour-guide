import React from "react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Award, User, Clock, Heart } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      <SEO
        title="About Shahrul - Private Tour Guide"
        description="Learn more about Shahrul, your expert local guide in Malaysia. Discover personalized tour experiences and cultural insights."
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070"
            alt="Malaysia Scenery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background" />
        </div>

        <div className="relative z-10 container text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Your Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about sharing the hidden gems and rich culture of
              Malaysia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 container px-4">
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/ShahrulProfile.jpeg"
                    alt="Shahrul Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="text-3xl font-bold mb-6">Hello, I'm Shahrul</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a licensed tour guide with over 8 years of experience, I
                  specialize in crafting unforgettable journeys through the
                  heart of Malaysia. My mission is to show you not just the
                  sights, but the soul of this incredible country.
                </p>
                <p>
                  Whether you're a foodie looking for the best street eats, a
                  history buff exploring ancient temples, or a nature lover
                  seeking adventure in the rainforest, I tailor each experience
                  to your interests.
                </p>
                <p>
                  I believe that travel is about connection. When you tour with
                  me, you're not just visiting a destination; you're making a
                  local friend who will ensure your safety, comfort, and
                  enjoyment every step of the way.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "/calendar")}
                >
                  Book a Tour
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Contact Me
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-16">
                What I Offer
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cultural Heritage Walks",
                  icon: <MapPin className="w-10 h-10 text-primary" />,
                  desc: "Explore the historic streets of George Town, Malacca, and Kuala Lumpur with expert storytelling.",
                },
                {
                  title: "Authentic Food Tours",
                  icon: <div className="text-4xl">🍜</div>,
                  desc: "Taste the best local flavors, from hidden hawker stalls to traditional family restaurants.",
                },
                {
                  title: "Nature & Adventure",
                  icon: <div className="text-4xl">🌿</div>,
                  desc: "Discover lush rainforests, waterfalls, and wildlife in Malaysia's stunning natural landscapes.",
                },
              ].map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-background/50 p-8 rounded-xl shadow-lg border border-border/50 hover:border-primary/50 transition-colors h-full">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container px-4 text-center">
        <div className="glass-panel p-8 md:p-16 rounded-3xl max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Let's Plan Your Trip</h2>
              <p className="text-muted-foreground mb-12">
                Have questions or want a custom itinerary? Reach out to me
                directly!
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:hello@shahrultours.com">
                  <Button variant="outline" className="gap-2 h-12 px-6">
                    <Mail className="w-5 h-5" />
                    hello@shahrultours.com
                  </Button>
                </a>
                <a href="https://wa.me/60123456789">
                  <Button variant="outline" className="gap-2 h-12 px-6">
                    <Phone className="w-5 h-5" />
                    +60 12-345-6789
                  </Button>
                </a>
                <a href="https://instagram.com/shahrul_tours">
                  <Button variant="outline" className="gap-2 h-12 px-6">
                    <User className="w-5 h-5" />
                    @shahrul_tours
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
