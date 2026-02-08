"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";

export default function PortfolioPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await apiFetch("/portfolio");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) return <p>Loading portfolio...</p>;

  return (
    <>
      <h1>Portfolio</h1>

      {items.length === 0 ? (
        <p>No portfolio items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id} style={{ marginBottom: "16px" }}>
              <strong>{item.title}</strong> - {item.category}
              <br />
              <small>{item.results}</small>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
