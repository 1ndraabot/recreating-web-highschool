import SectionTitle from "@/components/SectionTitle";
import { profil } from "@/data/profil";

export const metadata = {
  title: "Kontak | SMK Telkom Purwokerto",
  description:
    "Hubungi SMK Telkom Purwokerto melalui alamat, telepon, email, dan lokasi peta.",
};

export default function Kontak() {
  return (
    <div className="bg-[#F3F4F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Hubungi Kami"
          subtitle="Hubungi kami untuk pertanyaan lebih lanjut tentang pendaftaran, jurusan, atau kerjasama."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Kontak */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-5">
            {/* TODO: verifikasi nomor telepon dan email resmi sekolah */}
            <div>
              <span className="text-sm font-semibold text-[#6B7280]">Alamat</span>
              <p className="text-[#1F2937] leading-relaxed">
                {profil.alamat}
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#6B7280]">Telepon</span>
              <p className="text-[#1F2937]">{profil.telepon}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#6B7280]">
                Email
              </span>
              <p className="text-[#1F2937]">{profil.email}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#6B7280]">Website</span>
              <p className="text-[#1F2937]">{profil.website}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#6B7280]">
                Jam Sekolah
              </span>
              <p className="text-[#1F2937] leading-relaxed">
                Senin - Jumat: 07.30 - 16.00
                <br />
                Sabtu: 07.30 - 12.00
              </p>
            </div>
          </div>

          {/* Peta (link, bukan API) — TODO: ganti ke embed peta resmi bila tersedia */}
          <div className="rounded-xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="Peta SMK Telkom Purwokerto"
              className="w-full h-96"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                profil.alamat
              )}&output=embed`}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
