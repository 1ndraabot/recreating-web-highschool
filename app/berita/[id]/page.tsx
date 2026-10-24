"use client";

import { useAdminData } from "@/components/AdminDataProvider";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BeritaParams {
  params: Promise<{ id: string }>;
}

export default function BeritaDetail({ params }: BeritaParams) {
  const router = useRouter();
  const { berita } = useAdminData();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const resolve = async () => {
      const { id } = await params;
      const found = berita.find((b) => b.id === id);
      if (found) {
        setItem(found);
      } else {
        notFound();
      }
    };
    resolve();
  }, [berita, params]);

  if (!item) return null;

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
        {item.isi.split("\n\n").map((paragraph: string, index: number) => (
          <p key={index} className="mb-4 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
