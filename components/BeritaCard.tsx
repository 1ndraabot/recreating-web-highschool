import Link from "next/link";
import { type Berita } from "@/data/berita";

export interface BeritaCardProps {
  item: Berita;
}

export default function BeritaCard({ item }: BeritaCardProps) {
  return (
    <Link href={`/berita/${item.id}`} className="group block">
      <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        {/* Gambar */}
        <img
          src={item.gambar}
          alt={item.judul}
          className="w-full h-40 object-cover"
        />

        {/* Konten */}
        <div className="p-4 flex-1 flex flex-col">
          <time className="text-xs text-[#6B7280] mb-2">{item.tanggal}</time>
          <h3 className="font-semibold text-[#1F2937] text-lg leading-tight group-hover:text-[#E31E24] transition-colors mb-2 line-clamp-2">
            {item.judul}
          </h3>
          <p className="text-sm text-[#6B7280] mb-3 line-clamp-3">{item.ringkasan}</p>
          <span className="mt-auto inline-block text-sm font-semibold text-[#E31E24] group-hover:underline">
            Baca Selengkapnya →
          </span>
        </div>
      </article>
    </Link>
  );
}
