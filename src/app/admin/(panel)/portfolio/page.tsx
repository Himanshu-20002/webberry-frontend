"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";
import { useAuthGuard } from "@/app/lib/useAuthGuard";

export default function AdminPortfolioPage() {
  useAuthGuard();

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [client, setClient] = useState("");
  const [results, setResults] = useState("");
  const [status, setStatus] = useState("draft");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const fetchPortfolio = async () => {
    setLoading(true);

    try {
      const token = getToken();

      const res = await apiFetch("/portfolio/admin/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setItems(res.data || []);
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

      await apiFetch("/portfolio", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          category,
          description,
          imageUrl,
          client,
          results,
          status,
        }),
      });

      setMsg("Portfolio item created successfully!");

      setTitle("");
      setCategory("");
      setDescription("");
      setImageUrl("");
      setClient("");
      setResults("");
      setStatus("draft");

      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <>
      <h1>Portfolio CMS</h1>

      <h2 style={{ marginTop: "20px" }}>Add New Portfolio Item</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "600px",
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Category (SEO / Website / Branding)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Results (example: +70% leads)"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "10px", minHeight: "100px" }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleCreate} style={{ padding: "10px" }}>
          Create Portfolio Item
        </button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>All Portfolio Items</h2>

      {loading ? (
        <p>Loading portfolio items...</p>
      ) : items.length === 0 ? (
        <p>No portfolio items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id} style={{ marginBottom: "16px" }}>
              <strong>{item.title}</strong> ({item.status}) <br />
              <small>
                {item.category} | Client: {item.client}
              </small>
              <p>{item.results}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
