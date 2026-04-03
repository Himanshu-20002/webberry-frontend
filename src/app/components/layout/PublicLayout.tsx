import Footer from "./Footer";
import PublicNavbar from "./Navbar";
import { ContactProvider } from "@/context/ContactContext";
import { Contact } from "./section/Contact";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <div className="min-h-screen bg-[#0d0e0c] text-white selection:bg-[#bbff1b] selection:text-[#0d0e0c] overflow-x-hidden">
        <PublicNavbar />
        <main className="w-full relative flex flex-col">{children}</main>
        <Footer />
        <Contact />
      </div>
    </ContactProvider>
  );
}
