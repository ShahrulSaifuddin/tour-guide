import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections } from "../../data/destinationsData";

export default function DiscoverySection() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              Curated Collections
            </h2>
            <p className="text-slate-400">
              Handpicked guides for every travel style
            </p>
          </div>
          <button className="hidden md:flex items-center text-primary text-sm font-bold hover:underline">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                  {collection.count}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                  {collection.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
