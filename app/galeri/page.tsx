import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Galeri | SMK Telkom Purwokerto",
  description: "Dokumentasi kegiatan dan suasana SMK Telkom Purwokerto.",
};

// Galeri — gambar ada di public/. TODO: ganti dengan foto kegiatan asli bila tersedia.
// Catatan: galeri3 berekstensi .jpeg (bukan .jpg).
const galeri = [
  { id: 1, alt: "Peserta didik dalam kelas laboratorium", img: "/galeri1.jpg" },
  { id: 2, alt: "Kegiatan lomba siswa", img: "/galeri2.jpg" },
  { id: 3, alt: "Kunjungan industri", img: "/galeri3.jpeg" },
  { id: 4, alt: "Acara pelantikan OSIS", img: "/galeri4.jpg" },
  { id: 5, alt: "Workshop coding", img: "/galeri5.jpg" },
  { id: 6, alt: "Upacara hari kemerdekaan", img: "/galeri6.jpg" },
];

export default function Galeri() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Galeri Kegiatan"
          subtitle="Dokumentasi momen dan kegiatan terkini di lingkungan sekolah."
        />

        {/* Grid gambar responsif */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galeri.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl shadow border border-gray-200"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
