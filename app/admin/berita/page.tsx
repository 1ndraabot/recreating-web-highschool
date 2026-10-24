import BeritaAdminClient from "@/app/admin/berita/BeritaAdminClient";

export const metadata = {
  title: "Kelola Berita | Admin SMK Telkom Purwokerto",
  description: "Kelola data berita yang ditampilkan pada user view.",
};

export default function AdminBeritaPage() {
  return <BeritaAdminClient />;
}
