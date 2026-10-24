import ProfilAdminClient from "@/app/admin/profil/ProfilAdminClient";

export const metadata = {
  title: "Kelola Profil | Admin SMK Telkom Purwokerto",
  description: "Kelola data profil sekolah yang ditampilkan pada user view.",
};

export default function AdminProfilPage() {
  return <ProfilAdminClient />;
}
