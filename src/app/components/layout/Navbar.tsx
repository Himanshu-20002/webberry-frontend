import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export default function PublicNavbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Web<span className="text-primary">Berry</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/portfolio"
            className="text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/book-consultation">Book Call</Link>
          </Button>

          <Button asChild>
            <Link href="/admin/login">Admin</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
