import AdminClient from "@/app/admin/AdminClient";

export const metadata = {
  title: "Dashboard Admin | SMK Telkom Purwokerto",
  description: "Dashboard administrator untuk mengelola konten website.",
};

export default function AdminDashboard() {
  return <AdminClient />;
}
