import { Star, Quote } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ReviewCard({ review }) {
  const { rating, title, message, photo_url, created_at, profiles } = review;
  const authorName = profiles?.full_name || "Anonymous Traveler";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20 shadow-xl"
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

      {/* Quote Icon Background */}
      <Quote className="absolute top-4 right-4 text-white/5 w-24 h-24 rotate-12" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Rating & Date */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
              />
            ))}
          </div>
          <span className="text-xs text-secondary-200">
            {new Date(created_at).toLocaleDateString()}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-secondary-100 text-sm mb-4 line-clamp-4 flex-grow italic">
          "{message}"
        </p>

        {/* Photo if exists */}
        {photo_url && (
          <div className="mb-4 rounded-lg overflow-hidden h-32 w-full bg-black/20">
            <img
              src={photo_url}
              alt="Review attachment"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Author */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs">
            {authorName.charAt(0)}
          </div>
          <span className="text-sm font-medium text-white">{authorName}</span>
        </div>
      </div>
    </motion.div>
  );
}
