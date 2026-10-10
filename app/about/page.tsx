import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { profil } from "@/data/profil";

export const metadata = {
  title: "Tentang | SMK Telkom Purwokerto",
  description:
    "Profil, visi, misi, sejarah, alamat, dan fasilitas SMK Telkom Purwokerto.",
};

export default function About() {
  // TODO: verifikasi semua data di bawah dengan sumber resmi sekolah
  return (
    <div className="bg-white text-[#1F2937]">
      {/* Judul */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="Tentang Kami"
          subtitle="Mengenal lebih dekat SMK Telkom Purwokerto."
        />

        {/* Ringkasan singkat */}
        <p className="mt-6 text-center max-w-2xl mx-auto text-lg leading-relaxed">
          {profil.tagline}
        </p>
        <p className="mt-4 text-center text-sm text-[#6B7280]">
          Akreditasi: <span className="font-semibold">({profil.akreditasi})</span>
          {"  |  "}
          Jurusan: <span className="font-semibold">{profil.jumlahJurusan}</span>
          {"  |  "}
          Siswa: <span className="font-semibold">{profil.jumlahSiswa}</span>
        </p>
      </div>

      {/* Sejarah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Sejarah Singkat</h2>
        {/* TODO: verifikasi dan lengkapi sejarah sekolah */}
        <p className="text-base leading-relaxed whitespace-pre-line">
          {profil.sejarah}
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Visi & Misi</h2>

        {/* Visi */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#E31E24] mb-2">Visi</h3>
          <div className="bg-[#F3F4F6] border-l-4 border-[#E31E24] p-4 rounded-r-lg">
            <p className="text-base italic leading-relaxed">
              &ldquo;{profil.visi}&rdquo;
            </p>
          </div>
        </div>

        {/* Misi */}
        <div>
          <h3 className="text-lg font-semibold text-[#E31E24] mb-2">Misi</h3>
          <ul className="space-y-3">
            {profil.misi.map((m, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E31E24] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Alamat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Lokasi & Kontak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold text-[#6B7280]">Nama Resmi:</span>{" "}
              SMKS Telekomunikasi Sandhy Putra Purwokerto
            </p>
            {/* TODO: verifikasi alamat resmi sekolah */}
            <p>
              <span className="font-semibold text-[#6B7280]">Alamat:</span>{" "}
              {profil.alamat}
            </p>
            <p>
              <span className="font-semibold text-[#6B7280]">Telepon:</span>{" "}
              {profil.telepon}
            </p>
            <p>
              <span className="font-semibold text-[#6B7280]">Email:</span>{" "}
              {profil.email}
            </p>
            <p>
              <span className="font-semibold text-[#6B7280]">Website:</span>{" "}
              {profil.website}
            </p>
            <div className="pt-2">
              <Link
                href={`/kontak`}
                className="inline-block text-sm font-semibold text-[#E31E24] hover:text-[#B3141A]"
              >
                Lihat peta &rarr;
              </Link>
            </div>
          </div>

          {/* Google Maps link (bukan API) */}
          <div className="rounded-xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="Peta SMK Telkom Purwokerto"
              className="w-full h-56 sm:h-full"
              frameBorder="0"
              style={{ border: 0 }}
              // TODO: ganti ke link peta resmi bila tersedia
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                profil.alamat
              )}&output=embed`}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Fasilitas Sekolah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profil.fasilitas.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#F3F4F6] rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors"
            >
              <span className="flex-shrink-0 w-2 h-2 bg-[#E31E24] rounded-full" />
              {/* TODO: verifikasi daftar fasilitas sebenarnya */}
              <span className="text-base text-[#1F2937]">{f.nama}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
