"use client";

import { useEffect, useState } from "react";
import { useAuthGuard } from "@/app/lib/useAuthGuard";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";

export default function AdminLeadsPage() {
  useAuthGuard();

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = getToken();

        const res = await apiFetch("/leads", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLeads(res.data.leads);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Loading leads...</p>;

  return (
    <>
      <h1>Leads</h1>

      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <ul>
          {leads.map((lead) => (
            <li key={lead._id} style={{ marginBottom: "10px" }}>
              <strong>{lead.name}</strong> - {lead.phone} - {lead.status}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
