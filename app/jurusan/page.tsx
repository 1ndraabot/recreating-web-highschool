import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { profil } from "@/data/profil";

export const metadata = {
  title: "Jurusan | SMK Telkom Purwokerto",
  description:
    "Daftar program keahlian dan jurusan di SMK Telkom Purwokerto.",
};

export default function Jurusan() {
  return (
    <div className="bg-[#F3F4F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Program Keahlian"
          subtitle="Temukan jalur pendidikan yang sesuai dengan minat dan bakatmu."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: verifikasi dan lengkapi deskripsi tiap jurusan */}
          {profil.jurusan.map((j) => (
            <div
              key={j.id}
              className="bg-white rounded-xl shadow border border-gray-200 p-6 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#E31E24] text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                {j.nama.slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                {j.nama}
              </h3>
              <p className="text-sm text-[#6B7280] flex-1">{j.deskripsi}</p>
              <Link
                href={profil.website}
                className="mt-4 text-sm font-semibold text-[#E31E24] hover:text-[#B3141A] hover:underline text-left"
              >
                Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
