"use client";

import { useEffect, useState } from "react";
import { useAuthGuard } from "@/app/lib/useAuthGuard";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";

export default function AdminBookingsPage() {
  useAuthGuard();

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = getToken();

        const res = await apiFetch("/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBookings(res.data.bookings);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <>
      <h1>Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} style={{ marginBottom: "10px" }}>
              <strong>{booking.name}</strong> - {booking.date} {booking.time} -{" "}
              {booking.status}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
