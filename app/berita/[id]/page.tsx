import { notFound } from "next/navigation";
import Link from "next/link";
import { berita, type Berita } from "@/data/berita";

interface BeritaParams {
  params: Promise<{ id: string }>;
}

// Beri tahu Next.js semua slug berita agar setiap halaman diprerender statis
export async function generateStaticParams() {
  return berita.map((item) => ({
    id: item.id,
  }));
}

// Metadata dinamis berdasarkan slug
export async function generateMetadata({ params }: BeritaParams) {
  const { id } = await params;
  const item = berita.find((b) => b.id === id);

  if (!item) {
    return {
      title: "Berita tidak ditemukan | SMK Telkom Purwokerto",
      description: "Halaman berita yang diminta tidak ditemukan.",
    };
  }

  return {
    title: `${item.judul} | SMK Telkom Purwokerto`,
    description: item.ringkasan,
  };
}

export default async function BeritaDetail({ params }: BeritaParams) {
  const { id } = await params;
  const item: Berita | undefined = berita.find((b) => b.id === id);

  // Slug tidak ditemukan -> 404 via notFound()
  if (!item) {
    notFound();
    return null;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tombol kembali */}
      <Link
        href="/berita"
        className="mb-8 inline-flex items-center text-sm font-semibold text-[#E31E24] hover:text-[#B3141A] transition-colors"
      >
        ← Kembali ke Berita
      </Link>

      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
        {item.judul}
      </h1>

      {/* Tanggal */}
      <time className="block text-sm text-[#6B7280] mb-6">{item.tanggal}</time>

      {/* Gambar utama */}
      <img
        src={item.gambar}
        alt={item.judul}
        className="w-full h-auto rounded-xl mb-6"
      />

      {/* Isi berita (dipisahkan per paragraf dengan \n\n) */}
      <div className="text-[#1F2937]">
        {item.isi.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
