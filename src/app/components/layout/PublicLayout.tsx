import PublicFooter from "./Footer";
import PublicNavbar from "./Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />
      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
      <PublicFooter />
    </div>
  );
}
