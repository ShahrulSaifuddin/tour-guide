import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 md:px-8 border-t border-white/10 bg-black/20 backdrop-blur-md mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-slate-400 md:text-left">
          © 2026 Shahrul Private Tour Guide. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          {["About", "Tours", "Reviews"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "tours" ? "calendar" : item.toLowerCase() === "reviews" ? "feedback" : item.toLowerCase()}`}
              className="hover:text-primary transition-colors hover:drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
