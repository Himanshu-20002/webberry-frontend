"use client";

import { useRouter } from "next/navigation";
import { removeToken } from "@/app/lib/auth"

export default function AdminTopbar() {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/admin/login");
  };

  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p style={{ fontWeight: "bold" }}>Admin Panel</p>

      <button onClick={handleLogout} style={{ padding: "6px 12px" }}>
        Logout
      </button>
    </header>
  );
}
