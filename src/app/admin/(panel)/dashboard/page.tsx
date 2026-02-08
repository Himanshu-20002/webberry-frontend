"use client";

import { useAuthGuard } from "@/app/lib/useAuthGuard";

export default function AdminDashboardPage() {
  useAuthGuard();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Admin stats will be shown here.</p>
    </>
  );
}
