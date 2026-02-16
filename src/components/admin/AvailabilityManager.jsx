import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { ChevronLeft, ChevronRight, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { useAvailability } from "@/hooks/useAvailability";

export default function AvailabilityManager() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { availability, refresh } = useAvailability(currentDate); // Removed loading
  const [processing, setProcessing] = useState(false);

  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  const toggleDate = async (date) => {
    if (processing) return;
    setProcessing(true);

    const dateStr = format(date, "yyyy-MM-dd");
    // Removed unused currentStatus

    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const effectivelyAvailable =
      availability[dateStr]?.is_available ?? isWeekend;

    const newStatus = !effectivelyAvailable;

    const { error } = await supabase.from("availability_days").upsert({
      date: dateStr,
      is_available: newStatus,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Error toggling date:", error);
      alert("Failed to update availability");
    } else {
      await refresh();
    }
    setProcessing(false);
  };

  const generateSlots = async (date) => {
    if (processing) return;
    setProcessing(true);
    const dateStr = format(date, "yyyy-MM-dd");

    const slots = [
      {
        date: dateStr,
        slot_key: "Morning",
        start_time: "09:00",
        end_time: "13:00",
        capacity: 10,
      },
      {
        date: dateStr,
        slot_key: "Afternoon",
        start_time: "14:00",
        end_time: "18:00",
        capacity: 10,
      },
    ];

    const { error } = await supabase.from("booking_slots").insert(slots);

    if (error) {
      console.error("Error creating slots:", error);
      alert("Failed to generate slots");
    } else {
      await refresh();
    }
    setProcessing(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Manage Availability</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentDate((d) => new Date(d.setMonth(d.getMonth() - 1)))
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="min-w-[120px] text-center font-medium">
            {format(currentDate, "MMMM yyyy")}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentDate((d) => new Date(d.setMonth(d.getMonth() + 1)))
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-muted-foreground py-2"
          >
            {d}
          </div>
        ))}

        {Array.from({ length: firstDay.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const dayData = availability[dateStr];
          const isWeekend = day.getDay() === 0 || day.getDay() === 6;
          const isAvailable = dayData?.is_available ?? isWeekend;
          const hasSlots = dayData?.slots?.length > 0;

          return (
            <div
              key={dateStr}
              className={cn(
                "min-h-[100px] border rounded-md p-2 flex flex-col justify-between transition-colors",
                isAvailable
                  ? "bg-green-50/50 border-green-200"
                  : "bg-slate-50 border-slate-200",
              )}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium">{format(day, "d")}</span>
                <button
                  onClick={() => toggleDate(day)}
                  disabled={processing}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {isAvailable ? (
                    <Unlock className="h-3 w-3" />
                  ) : (
                    <Lock className="h-3 w-3" />
                  )}
                </button>
              </div>

              <div className="space-y-1">
                {hasSlots ? (
                  <div className="text-xs text-green-600 font-medium">
                    {dayData.slots.length} slots active
                  </div>
                ) : isAvailable ? (
                  <Button
                    variant="ghost"
                    className="w-full h-auto py-1 px-0 text-[10px] text-blue-600 hover:text-blue-700"
                    onClick={() => generateSlots(day)}
                  >
                    + Gen Slots
                  </Button>
                ) : (
                  <div className="text-[10px] text-muted-foreground">
                    Closed
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
