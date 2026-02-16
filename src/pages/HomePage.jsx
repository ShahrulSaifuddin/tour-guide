import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <section className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-background to-muted/30">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Experience Malaysia
          <br />
          Like Never Before
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          Premium private tours tailored to your pace and preferences. Discover
          hidden gems with a trusted local guide.
        </p>
        <div className="flex gap-4">
          <Link to="/calendar">
            <Button size="lg" className="rounded-full px-8">
              Check Availability
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
