import { motion } from "framer-motion";
import { Shield, Map, Zap, Heart } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your safety is our priority. Certified guides and secure bookings.",
  },
  {
    icon: Map,
    title: "Curated Itineraries",
    description:
      "Destinations handpicked for their beauty, culture, and uniqueness.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Real-time availability and instant confirmation for your convenience.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "We tailor every experience to your preferences and pace.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 relative z-10">
      <div className="container px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
              Why Choose Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience the difference of a premium private tour service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
            >
              <div className="h-14 w-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
