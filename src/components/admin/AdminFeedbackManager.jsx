import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Loader2, Eye, EyeOff, Edit, Save, X } from "lucide-react";

export default function AdminFeedbackManager() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", message: "" });

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("feedback")
        .select(
          `
          *,
          profiles:user_id (full_name, email)
        `,
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  }

  async function toggleVisibility(id, currentStatus) {
    try {
      const { error } = await supabase
        .from("feedback")
        .update({ is_hidden: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      // Optimistic update
      setReviews(
        reviews.map((r) =>
          r.id === id ? { ...r, is_hidden: !currentStatus } : r,
        ),
      );
    } catch (error) {
      console.error("Error updating visibility:", error);
      alert("Failed to update visibility");
    }
  }

  function startEdit(review) {
    setEditingId(review.id);
    setEditForm({ title: review.title, message: review.message });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm({ title: "", message: "" });
  }

  async function saveEdit(id) {
    try {
      const { error } = await supabase
        .from("feedback")
        .update({
          title: editForm.title,
          message: editForm.message,
          edited_by_admin: true,
        })
        .eq("id", id);

      if (error) throw error;

      // Optimistic update
      setReviews(
        reviews.map((r) =>
          r.id === id
            ? {
                ...r,
                title: editForm.title,
                message: editForm.message,
                edited_by_admin: true,
              }
            : r,
        ),
      );
      cancelEdit();
    } catch (error) {
      console.error("Error saving edit:", error);
      alert("Failed to save changes");
    }
  }

  if (loading)
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6">Feedback Moderation</h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`p-4 rounded-lg border ${
              review.is_hidden
                ? "bg-red-500/10 border-red-500/30"
                : "bg-white/5 border-white/10"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">
                  {review.profiles?.full_name || "Unknown"}
                  <span className="text-xs font-normal text-secondary-200 ml-2">
                    ({review.profiles?.email})
                  </span>
                </span>
                <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded">
                  {review.rating} ★
                </span>
                {review.is_hidden && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                    HIDDEN
                  </span>
                )}
                {review.edited_by_admin && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
                    EDITED
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleVisibility(review.id, review.is_hidden)}
                  className="p-1 hover:bg-white/10 rounded text-secondary-200 hover:text-white"
                  title={review.is_hidden ? "Unhide" : "Hide"}
                >
                  {review.is_hidden ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button
                  onClick={() => startEdit(review)}
                  className="p-1 hover:bg-white/10 rounded text-secondary-200 hover:text-white"
                  title="Edit"
                >
                  <Edit size={18} />
                </button>
              </div>
            </div>

            {editingId === review.id ? (
              <div className="space-y-2 mt-2">
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm({ ...editForm, title: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-white"
                />
                <textarea
                  value={editForm.message}
                  onChange={(e) =>
                    setEditForm({ ...editForm, message: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-white h-24"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={cancelEdit}
                    className="px-3 py-1 text-sm text-secondary-200 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => saveEdit(review.id)}
                    className="px-3 py-1 text-sm bg-primary-600 hover:bg-primary-500 text-white rounded flex items-center gap-1"
                  >
                    <Save size={14} /> Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h4 className="font-bold text-sm text-white">{review.title}</h4>
                <p className="text-sm text-secondary-100">{review.message}</p>
                {review.photo_url && (
                  <div className="mt-2 text-xs text-blue-400">
                    <a
                      href={review.photo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Photo
                    </a>
                  </div>
                )}
              </>
            )}

            <div className="mt-2 text-xs text-secondary-300">
              {new Date(review.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
