import AdminFeedbackManager from "@/components/admin/AdminFeedbackManager";
import AvailabilityManager from "@/components/admin/AvailabilityManager";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Basic security check (RLS handles the real security)
  // Ideally check for specific admin claim or ID
  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="container py-8 bg-dark-900 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-display font-bold mb-8">
          Admin Dashboard
        </h1>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Availability</h2>
          <AvailabilityManager />
        </section>

        <section>
          <AdminFeedbackManager />
        </section>
      </div>
    </div>
  );
}
