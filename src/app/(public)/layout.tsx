import PublicLayout from "@/app/components/layout/PublicLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
