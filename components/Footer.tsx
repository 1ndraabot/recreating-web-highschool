import Link from "next/link";
import { profil } from "@/data/profil";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Berita", href: "/berita" },
  { name: "Jurusan", href: "/jurusan" },
  { name: "Galeri", href: "/galeri" },
  { name: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white pt-12 border-t-4 border-[#E31E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand + Kontak */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              {/* Latar putih agar logo (warna gelap) tetap kontras di footer charcoal */}
              <img
                src="/Logo-SMK-Telkom-Purwokerto.svg"
                alt="Logo SMK Telkom Purwokerto"
                className="h-8 sm:h-10 w-auto object-contain bg-white rounded-lg px-2 py-1"
              />
              <span className="text-xl font-bold text-white">{profil.nama}</span>
            </Link>
            <p className="text-sm text-gray-300">{profil.alamat}</p>
            <p className="text-sm text-gray-300">Telpon: {profil.telepon}</p>
            <p className="text-sm text-gray-300">Email: {profil.email}</p>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurusan */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Jurusan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {profil.jurusan.map((j) => (
                <li key={j.id}>{j.nama}</li>
              ))}
            </ul>
          </div>

          {/* Jam Sekolah */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg">Jam Sekolah</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Senin - Jumat: 07.30 - 16.00</li>
              <li>Sabtu: 07.30 - 12.00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © 2026 {profil.nama}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
