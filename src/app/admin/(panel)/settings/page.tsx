"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";
import { useAuthGuard } from "@/app/lib/useAuthGuard";

export default function AdminSettingsPage() {
  useAuthGuard();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const fetchSettings = async () => {
    setLoading(true);

    try {
      const res = await apiFetch("/settings");

      const s = res.data;

      setPhone(s.phone || "");
      setWhatsapp(s.whatsapp || "");
      setEmail(s.email || "");
      setAddress(s.address || "");

      setInstagram(s.socials?.instagram || "");
      setFacebook(s.socials?.facebook || "");
      setLinkedin(s.socials?.linkedin || "");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMsg("");
    setError("");

    try {
      const token = getToken();

      await apiFetch("/settings", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone,
          whatsapp,
          email,
          address,
          socials: {
            instagram,
            facebook,
            linkedin,
          },
        }),
      });

      setMsg("Settings updated successfully!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  if (loading) return <p>Loading settings...</p>;

  return (
    <>
      <h1>Settings</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "600px",
        }}
      >
        <h2>Business Info</h2>

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ padding: "10px", minHeight: "80px" }}
        />

        <h2>Social Links</h2>

        <input
          placeholder="Instagram URL"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Facebook URL"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          style={{ padding: "10px" }}
        />

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSave} disabled={saving} style={{ padding: "10px" }}>
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </>
  );
}
