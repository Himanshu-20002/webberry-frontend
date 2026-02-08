import AdminSidebar from "@/app/components/layout/AdminSidebar";
import AdminTopbar from "@/app/components/layout/AdminTopbar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1 }}>
        <AdminTopbar />
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}
