import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWeekend,
  addMonths,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useAvailability } from "@/hooks/useAvailability";
import BookingDrawer from "@/components/booking/BookingDrawer";
import SEO from "../components/SEO";

import { CalendarSkeleton } from "@/components/skeletons/CalendarSkeleton";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { availability, loading } = useAvailability(currentDate);
  const [selectedDate, setSelectedDate] = useState(null);

  if (loading) {
    return <CalendarSkeleton />;
  }

  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const getStatus = (day) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const dayData = availability[dateStr];

    // Default rule: Weekends available, Weekdays unavailable
    const isWeekendDay = isWeekend(day);

    // If override exists, use it. Else use default.
    const isAvailable = dayData?.is_available ?? isWeekendDay;

    if (!isAvailable) return "unavailable";

    return "available";
  };

  const handleDateClick = (day) => {
    const status = getStatus(day);
    if (status === "available") {
      setSelectedDate(day);
    }
  };

  return (
    <div className="container py-8 max-w-4xl">
      <SEO
        title="Availability Calendar"
        description="Check Shahrul's availability for private tours in Malaysia."
      />
      <h1 className="text-3xl font-bold mb-2">Check Availability</h1>
      <p className="text-muted-foreground mb-8">
        Browse open slots for your private tour. Weekend slots are available by
        default.
      </p>

      <div className="w-full max-w-md mx-auto p-4 bg-card rounded-xl shadow-sm border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay.getDay() }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}

          {days.map((day) => {
            const status = getStatus(day);
            const dateStr = format(day, "yyyy-MM-dd");
            const dayData = availability[dateStr];
            const slotCount = dayData?.slots ? dayData.slots.length : 0;

            return (
              <button
                key={day.toString()}
                onClick={() => handleDateClick(day)}
                className={cn(
                  "h-10 w-full rounded-md flex flex-col items-center justify-center text-sm transition-colors relative",
                  status === "available" &&
                    "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400",
                  status === "full" &&
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                  status === "unavailable" &&
                    "bg-muted text-muted-foreground opacity-50 cursor-not-allowed",
                )}
                disabled={status === "unavailable"}
              >
                <span>{format(day, "d")}</span>
                {status === "available" && slotCount > 0 && (
                  <span className="w-1 h-1 rounded-full bg-current absolute bottom-1" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex gap-4 justify-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-100 border border-green-200 dark:bg-green-900/30 dark:border-green-800"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-100 border border-red-200 dark:bg-red-900/30 dark:border-red-800"></div>
            <span>Full</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-muted border border-border"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>

      <BookingDrawer
        isOpen={!!selectedDate}
        onClose={() => setSelectedDate(null)}
        date={selectedDate || new Date()}
        availability={
          selectedDate ? availability[format(selectedDate, "yyyy-MM-dd")] : null
        }
      />
    </div>
  );
}
