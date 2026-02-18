import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/Button";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-xl tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Shahrul <span className="text-primary">Private Tour</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {["Destinations", "Experiences", "Availability", "About"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === "availability" ? "calendar" : item.toLowerCase()}`}
                  className="relative text-slate-300 transition-colors hover:text-white group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_var(--primary)]"></span>
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-300 md:hidden hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/bookings"
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                My Bookings
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="border-white/20 text-slate-300 hover:text-white hover:border-white/40 hover:bg-white/5"
              >
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white hover:bg-white/5"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/calendar">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-4 shadow-2xl">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {["Destinations", "Experiences", "Availability", "About"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === "availability" ? "calendar" : item.toLowerCase()}`}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
