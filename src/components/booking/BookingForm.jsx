import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useBookings } from "@/hooks/useBookings";

export default function BookingForm({ slot, date, onSuccess, onCancel }) {
  const { createBooking } = useBookings();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: "Ipoh",
    group_size: 2,
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createBooking({
        date,
        slot_id: slot.id,
        destination: formData.destination,
        group_size: parseInt(formData.group_size),
        notes: formData.notes,
      });
      onSuccess?.();
    } catch (error) {
      console.error("Booking failed:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Destination</label>
        <select
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={formData.destination}
          onChange={(e) =>
            setFormData({ ...formData, destination: e.target.value })
          }
        >
          <option value="Ipoh">Ipoh</option>
          <option value="Melaka">Melaka</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Penang">Penang</option>
          <option value="Cameron Highlands">Cameron Highlands</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Group Size</label>
        <input
          type="number"
          min="1"
          max="10"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={formData.group_size}
          onChange={(e) =>
            setFormData({ ...formData, group_size: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Notes (Optional)
        </label>
        <textarea
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      <div className="flex gap-2 pt-2">
        <Button type="submit" className="flex-1" disabled={loading}>
          {loading ? "Confirming..." : "Confirm Booking"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
