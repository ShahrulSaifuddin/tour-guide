import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import BookingForm from "./BookingForm";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

export default function BookingDrawer({ isOpen, onClose, date, availability }) {
  const { user } = useAuth();

  if (!isOpen) return null;

  // Removed unused isWeekend

  const slots = availability?.slots || [];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-background h-full shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <h2 className="text-2xl font-bold mb-1">{date.toDateString()}</h2>
        <p className="text-muted-foreground mb-6">
          Select a time slot for your tour.
        </p>

        <div className="space-y-4">
          {slots.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground border rounded-lg border-dashed">
              <p>No specific slots open for this date yet.</p>
              <p className="text-sm mt-2">Contact via WhatsApp to inquire.</p>
            </div>
          ) : (
            slots.map((slot) => (
              <div
                key={slot.id}
                className="border rounded-lg p-4 hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{slot.slot_key}</h3>
                  <span className="text-sm text-muted-foreground">
                    {slot.start_time?.slice(0, 5)} -{" "}
                    {slot.end_time?.slice(0, 5)}
                  </span>
                </div>

                {user ? (
                  <BookingForm
                    slot={slot}
                    date={date}
                    onSuccess={() => {
                      alert("Booking Confirmed!");
                      onClose();
                      // Ideally refresh parent state
                    }}
                    onCancel={() => {}}
                  />
                ) : (
                  <div className="text-center py-4 bg-muted/30 rounded-md">
                    <p className="text-sm mb-2">Sign in to book this slot</p>
                    <Link to="/auth" onClick={onClose}>
                      <Button variant="outline" size="sm">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
