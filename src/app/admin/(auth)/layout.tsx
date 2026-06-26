export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0d0e0c] text-white flex justify-center items-center p-4 sm:p-8 relative overflow-hidden selection:bg-[#bbff1b] selection:text-[#0d0e0c]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bbff1b]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bbff1b]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        {children}
      </div>
    </main>
  );
}
