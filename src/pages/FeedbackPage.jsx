import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import ReviewsList from "../components/feedback/ReviewsList";
import FeedbackForm from "../components/feedback/FeedbackForm";
import { MessageSquarePlus } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackPage() {
  const [session, setSession] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSuccess = () => {
    setShowForm(false);
    setRefreshKey((old) => old + 1); // Trigger re-fetch of reviews
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">
              Guest Reviews
            </h1>
            <p className="text-secondary-200 max-w-2xl">
              See what others are saying about their adventures with Shahrul.
            </p>
          </div>

          <button
            onClick={() => {
              if (!session) {
                window.location.href = "/auth"; // Simple redirect for now
              } else {
                setShowForm(!showForm);
              }
            }}
            className="mt-4 md:mt-0 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2"
          >
            <MessageSquarePlus className="w-5 h-5" />
            {session
              ? showForm
                ? "Cancel Review"
                : "Write a Review"
              : "Sign in to Review"}
          </button>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="max-w-2xl mx-auto">
                <FeedbackForm onSuccess={handleSuccess} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ReviewsList key={refreshKey} />
      </div>
    </div>
  );
}
