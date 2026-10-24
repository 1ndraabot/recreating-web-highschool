import BeritaListClient from "@/app/berita/BeritaListClient";

export const metadata = {
  title: "Berita | SMK Telkom Purwokerto",
  description: "Informasi dan berita terbaru SMK Telkom Purwokerto.",
};

export default function BeritaPage() {
  return <BeritaListClient />;
}
