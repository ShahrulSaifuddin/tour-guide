import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";
import FeatureCards from "../components/FeatureCards";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <section
        ref={ref}
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Floating Planet Effect - utilizing CSS radial gradient mimicking a planet */}
          <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-900 blur-3xl opacity-30 animate-float" />
          <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-900 blur-[100px] opacity-20 animate-pulse" />
        </motion.div>

        <div className="relative z-10 glass-panel p-10 md:p-16 rounded-[2.5rem] max-w-5xl mx-auto border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] backdrop-blur-2xl">
          <ScrollReveal>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase animate-fade-in-up">
              Premium Private Tours
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 text-white drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Experience Malaysia <br />
              <span className="italic text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-200">
                Beyond the Stars
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-[700px] mb-10 mx-auto font-light leading-relaxed">
              Curated journeys tailored to your pace. Discover hidden gems with
              a trusted local guide in comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/calendar">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-8 text-lg bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                >
                  Check Availability
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FeatureCards />

      {/* Spacer to allow scrolling */}
      <div className="h-[20vh]"></div>
    </div>
  );
}
