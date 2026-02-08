"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";
import { useAuthGuard } from "@/app/lib/useAuthGuard";

export default function AdminTestimonialsPage() {
  useAuthGuard();

  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // form states
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const fetchTestimonials = async () => {
    setLoading(true);

    try {
      const token = getToken();

      const res = await apiFetch("/testimonials/admin/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTestimonials(res.data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    setMsg("");
    setError("");

    try {
      const token = getToken();

      await apiFetch("/testimonials", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          role,
          rating,
          content,
          approved: false,
        }),
      });

      setMsg("Testimonial created (not approved yet).");

      setName("");
      setRole("");
      setRating(5);
      setContent("");

      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleApproval = async (id: string, approved: boolean) => {
    setMsg("");
    setError("");

    try {
      const token = getToken();

      await apiFetch(`/testimonials/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          approved: !approved,
        }),
      });

      setMsg("Testimonial updated.");
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <h1>Testimonials CMS</h1>

      <h2 style={{ marginTop: "20px" }}>Add Testimonial</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "600px",
        }}
      >
        <input
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Role / Business Name"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Testimonial content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "10px", minHeight: "100px" }}
        />

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleCreate} style={{ padding: "10px" }}>
          Create Testimonial
        </button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>All Testimonials</h2>

      {loading ? (
        <p>Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p>No testimonials found.</p>
      ) : (
        <ul>
          {testimonials.map((t) => (
            <li
              key={t._id}
              style={{
                marginBottom: "20px",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              <strong>{t.name}</strong> ({t.rating}⭐) <br />
              <small>{t.role}</small>

              <p>{t.content}</p>

              <p>
                Status:{" "}
                <strong style={{ color: t.approved ? "green" : "red" }}>
                  {t.approved ? "Approved" : "Not Approved"}
                </strong>
              </p>

              <button
                onClick={() => toggleApproval(t._id, t.approved)}
                style={{ padding: "8px 12px" }}
              >
                {t.approved ? "Unapprove" : "Approve"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
