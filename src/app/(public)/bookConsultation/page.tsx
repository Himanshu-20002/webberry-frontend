"use client";

import { useState } from "react";
import { apiFetch } from "@/app/lib/api";

export default function BookConsultationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await apiFetch("/bookings", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          time,
          notes,
        }),
      });

      setSuccessMsg("Booking request submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setNotes("");
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Book Consultation</h1>
      <p>Select date and time. We will confirm your booking.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px" }}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Time (Example: 11:00 AM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ padding: "10px", minHeight: "120px" }}
        />

        {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ padding: "10px" }}
        >
          {loading ? "Submitting..." : "Confirm Booking"}
        </button>
      </div>
    </>
  );
}
