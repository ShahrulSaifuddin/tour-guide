import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function DestinationsHero({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
}) {
  const filters = [
    "All",
    "Nature",
    "Food",
    "Culture",
    "City",
    "History",
    "Island",
  ];

  return (
    <section className="relative pt-32 pb-20 px-4">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Discover Malaysia
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
              Adventure
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            From misty highlands to heritage cities, explore the diverse
            landscapes and cultures that make Malaysia truly Asia.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12 group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 shadow-2xl focus-within:border-primary/50 focus-within:bg-white/15 transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-4" />
              <input
                type="text"
                placeholder="Search destinations (e.g., Penang, Islands...)"
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-primary text-black border-primary scale-105 shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
