"use client";

import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { useAdminData } from "@/components/AdminDataProvider";

export default function BeritaListClient() {
  const { berita } = useAdminData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle
        title="Berita"
        subtitle="Informasi terbaru dan kegiatan terkini dari SMK Telkom Purwokerto."
      />

      {/* Grid: 1 kolom (mobile) → 2 kolom (tablet) → 3 kolom (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {berita.map((item) => (
          <BeritaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
