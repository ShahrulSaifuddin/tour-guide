import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

export function useBookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    const { data, error } = await supabase
      .from("bookings")
      .select(
        `
        *,
        booking_slots (
          start_time,
          end_time,
          slot_key
        )
      `,
      )
      .eq("user_id", user.id)
      .order("date", { ascending: true });

    if (error) {
      console.error("Error fetching bookings:", error);
    } else {
      setBookings(data);
    }
    setLoading(false);
  }, [user]);

  const createBooking = async (bookingData) => {
    if (!user) throw new Error("User not logged in");

    const { data, error } = await supabase
      .from("bookings")
      .insert([{ ...bookingData, user_id: user.id }])
      .select();

    if (error) throw error;
    return data;
  };

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { bookings, loading, createBooking, refresh: fetchBookings };
}
