import type { Metadata } from "next";
import AdminPanel from "@/components/admin/AdminPanel";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Админ | Tesla",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Section className="flex flex-col gap-10">
      <AdminPanel />
    </Section>
  );
}
