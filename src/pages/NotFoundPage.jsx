import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Home } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />

      <div className="glass-panel p-12 md:p-16 rounded-3xl text-center max-w-2xl mx-auto relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />

        <h1 className="text-9xl font-bold font-serif text-white/10 mb-[-2rem] select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
          Lost in the Rainforest?
        </h2>
        <p className="text-lg text-secondary-200 mb-10 max-w-md mx-auto relative z-10">
          The page you are looking for seems to have wandered off the beaten
          path. Let's get you back to the start of your journey.
        </p>

        <Link to="/" className="relative z-10 inline-block">
          <Button size="lg" className="px-8 gap-2 rounded-full">
            <Home className="w-5 h-5" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
