import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside
      style={{
        width: "240px",
        borderRight: "1px solid #eee",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>WebBerry Admin</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/leads">Leads</Link>
        <Link href="/admin/bookings">Bookings</Link>
        <Link href="/admin/blogs">Blogs</Link>
        <Link href="/admin/settings">Settings</Link>
        <Link href="/admin/portfolio">Portfolio</Link>
        <Link href="/admin/testimonials">Testimonials</Link>
      </nav>
    </aside>
  );
}
