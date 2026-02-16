import { useBookings } from "@/hooks/useBookings";
import { useAuth } from "@/context/AuthContext";
import { format } from "date-fns";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import SEO from "../components/SEO";

export default function MyBookingsPage() {
  const { user } = useAuth();
  const { bookings, loading, refresh } = useBookings();

  const handleCancel = async (id) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    const { error } = await supabase
      .from("bookings")
      .update({ status: "cancelled" })
      .eq("id", id);

    if (error) {
      alert("Error cancelling booking");
    } else {
      refresh();
    }
  };

  if (!user) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
        <p className="mb-8">Please sign in to view your bookings.</p>
        <Link to="/auth">
          <Button>Sign In</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-3xl">
      <SEO title="My Bookings" />
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/10">
          <p className="text-muted-foreground mb-4">
            You haven't made any bookings yet.
          </p>
          <Link to="/calendar">
            <Button>Check Availability</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">
                    {format(new Date(booking.date), "MMMM d, yyyy")}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Slot: {booking.booking_slots?.slot_key} (
                    {booking.booking_slots?.start_time?.slice(0, 5)} -{" "}
                    {booking.booking_slots?.end_time?.slice(0, 5)})
                  </p>
                  <p>Destination: {booking.destination}</p>
                  <p>Group Size: {booking.group_size} pax</p>
                </div>
              </div>

              {booking.status === "confirmed" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCancel(booking.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Cancel Booking
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
