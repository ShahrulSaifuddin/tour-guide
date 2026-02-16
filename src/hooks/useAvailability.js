import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { startOfMonth, endOfMonth, format } from "date-fns";

export function useAvailability(currentDate) {
  const [availability, setAvailability] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAvailability = useCallback(async () => {
    setLoading(true);
    const startDate = format(startOfMonth(currentDate), "yyyy-MM-dd");
    const endDate = format(endOfMonth(currentDate), "yyyy-MM-dd");

    const { data: days, error: daysError } = await supabase
      .from("availability_days")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate);

    if (daysError) console.error("Error fetching days:", daysError);

    const { data: slots, error: slotsError } = await supabase
      .from("booking_slots")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate);

    if (slotsError) console.error("Error fetching slots:", slotsError);

    const avMap = {};
    if (days) {
      days.forEach((day) => {
        avMap[day.date] = { ...day, type: "override" };
      });
    }

    if (slots) {
      slots.forEach((slot) => {
        if (!avMap[slot.date]) avMap[slot.date] = {};
        if (!avMap[slot.date].slots) avMap[slot.date].slots = [];
        avMap[slot.date].slots.push(slot);
      });
    }

    setAvailability(avMap);
    setLoading(false);
  }, [currentDate]);

  useEffect(() => {
    fetchAvailability();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return { availability, loading, refresh: fetchAvailability };
}
