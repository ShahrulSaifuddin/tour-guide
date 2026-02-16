import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/Button";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Shahrul Private Tour
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              to="/destinations"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Destinations
            </Link>
            <Link
              to="/packages"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Packages
            </Link>
            <Link
              to="/calendar"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Availability
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/bookings"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                My Bookings
              </Link>
              <Button variant="outline" size="sm" onClick={signOut}>
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/calendar">
                <Button size="sm">Book Now</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/destinations"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Destinations
            </Link>
            <Link
              to="/packages"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Packages
            </Link>
            <Link
              to="/calendar"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Availability
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
