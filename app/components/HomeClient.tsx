"use client";

import Hero from "@/components/Hero";
import Button from "@/components/Button";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { useAdminData } from "@/components/AdminDataProvider";

export default function HomeClient() {
  const { berita, profil } = useAdminData();

  // Statistik singkat (di tampilkan di seksi Tentang Singkat)
  const statistik = [
    { label: "Jumlah Jurusan", value: profil.jumlahJurusan },
    { label: "Jumlah Siswa", value: profil.jumlahSiswa },
    { label: "Akreditasi", value: profil.akreditasi },
  ];

  // 3 berita terbaru (data sudah urut, ambil 3 pertama)
  const beritaTerbaru = berita.slice(0, 3);

  return (
    <>
      {/* === Hero === */}
      <Hero />

      {/* === Sambutan Kepala Sekolah === */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/kepalasekolah.png"
              alt={`Foto ${profil.kepala?.nama ?? ""}, ${profil.kepala?.jabatan ?? ""}`}
              width={1374}
              height={1145}
              className="w-full h-auto object-cover rounded-xl shadow-md mx-auto"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1F2937]">
                Sambutan Kepala Sekolah
              </h2>
              {/* TODO: verifikasi teks sambutan dengan Kepala Sekolah yang sesuai */}
              <p className="text-base text-[#1F2937] leading-relaxed">
                Selamat datang di situs resmi SMK Telkom Purwokerto. Sebagai sekolah
                yang berkomitmen menghasilkan lulusan berkompetensi tinggi, kami
                terus memperbarui kurikulum dan fasilitas agar melayaruh positif bagi
                generasi muda yang ingin meniti karier di bidang teknologi informasi
                dan jaringan.
              </p>
              <p className="text-base text-[#1F2937] leading-relaxed">
                Kami mengajak seluruh calon siswa, orang tua, dan mitra untuk
                bergabung bersama kami dalam membangun ekosistem belajar yang
                inovatif dan berbasis kompetensi.
              </p>
              <p className="font-semibold text-[#1F2937]">
                {profil.kepala.nama}
              </p>
              <p className="text-[#6B7280]">{profil.kepala.jabatan}</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Tentang Singkat === */}
      <section className="bg-[#F3F4F6] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tentang Singkat"
            subtitle={profil.tagline}
          />

          {/* Ringkasan singkat */}
          <p className="text-center max-w-3xl mx-auto text-base text-[#1F2937] leading-relaxed mb-10">
            {profil.sejarah}
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {statistik.map((s) => (
              <div
                key={s.label}
                className="bg-white py-6 rounded-xl shadow border border-gray-200"
              >
                <div className="text-3xl font-bold text-[#E31E24]">{s.value}</div>
                <div className="mt-1 text-sm text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Berita Terbaru === */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Berita Terbaru"
            subtitle="Ikuti perkembangan terbaru kami."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {beritaTerbaru.map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/berita" variant="primary">
              Lihat Semua Berita
            </Button>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="bg-[#1F2937] text-white py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Siap Bergabung dengan Kami?
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Kenali lebih dalam tentang program keahlian dan lingkungan belajar kami.
        </p>
        <Button href="/about" variant="primary">
          Temukan Lebih Lanjut
        </Button>
      </section>
    </>
  );
}
