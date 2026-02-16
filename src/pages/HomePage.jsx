import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ui/ScrollReveal";
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
        className="relative h-[80vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          {/* Placeholder for Hero Image - would be replaced by actual image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070')] bg-cover bg-center" />
        </motion.div>

        <div className="relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Experience Malaysia
              <br />
              Like Never Before
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mb-8 mx-auto">
              Premium private tours tailored to your pace and preferences.
              Discover hidden gems with a trusted local guide.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/calendar">
                <Button size="lg" className="rounded-full px-8">
                  Check Availability
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-screen bg-transparent"></div>
    </div>
  );
}
