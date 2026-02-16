import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2026 Shahrul Private Tour Guide. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Link to="/calendar" className="hover:text-foreground">
            Tours
          </Link>
          <Link to="/feedback" className="hover:text-foreground">
            Reviews
          </Link>
        </div>
      </div>
    </footer>
  );
}
