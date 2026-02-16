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
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="mb-8">
        <AvailabilityManager />
      </div>
    </div>
  );
}
