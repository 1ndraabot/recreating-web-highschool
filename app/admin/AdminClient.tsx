"use client";

import { useAuth } from "@/components/AuthProvider";
import { useAdminData } from "@/components/AdminDataProvider";
import Link from "next/link";
import Button from "@/components/Button";

export default function AdminClient() {
  const { isAuthenticated, logout, user } = useAuth();
  const { berita, profil } = useAdminData();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#F3F4F6] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1F2937]">Dashboard Admin</h1>
            <p className="text-[#6B7280]">
              Selamat datang, {user?.username}. Kelola konten yang ditampilkan
              pada user view.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/berita"
              className="px-4 py-2.5 rounded-lg border border-gray-300 text-[#1F2937] font-medium hover:bg-gray-100 transition"
            >
              Kelola Berita
            </Link>
            <Link
              href="/admin/profil"
              className="px-4 py-2.5 rounded-lg border border-gray-300 text-[#1F2937] font-medium hover:bg-gray-100 transition"
            >
              Kelola Profil
            </Link>
            <Button
              onClick={() => logout()}
              variant="outline"
              className="bg-[#1F2937] text-white border-transparent hover:bg-[#E31E24]"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <div className="text-sm font-semibold text-[#6B7280]">Total Berita</div>
            <div className="text-3xl font-bold text-[#E31E24] mt-1">{berita.length}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <div className="text-sm font-semibold text-[#6B7280]">Nama Sekolah</div>
            <div className="text-xl font-bold text-[#1F2937] mt-1 truncate">
              {profil.nama}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <div className="text-sm font-semibold text-[#6B7280]">Akreditasi</div>
            <div className="text-3xl font-bold text-[#E31E24] mt-1">{profil.akreditasi}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <div className="text-sm font-semibold text-[#6B7280]">Jumlah Jurusan</div>
            <div className="text-3xl font-bold text-[#E31E24] mt-1">{profil.jumlahJurusan}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-xl shadow border border-gray-200">
          <h2 className="text-xl font-bold text-[#1F2937] mb-6">Tindakan Cepat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/admin/berita"
              className="p-4 border border-gray-200 rounded-lg hover:bg-[#F3F4F6] hover:border-[#E31E24] transition text-left"
            >
              <h3 className="font-bold text-[#1F2937] mb-1">Edit Data Berita</h3>
              <p className="text-sm text-[#6B7280]">
                Tambah, ubah, atau hapus berita yang ditampilkan di halaman user.
              </p>
            </Link>
            <Link
              href="/admin/profil"
              className="p-4 border border-gray-200 rounded-lg hover:bg-[#F3F4F6] hover:border-[#E31E24] transition text-left"
            >
              <h3 className="font-bold text-[#1F2937] mb-1">Edit Profil Sekolah</h3>
              <p className="text-sm text-[#6B7280]">
                Ubah nama, alamat, kontak, visi, misi, dan data sekolah lainnya.
              </p>
            </Link>
            <div className="p-4 border border-gray-200 rounded-lg bg-[#F3F4F6] text-left opacity-60">
              <h3 className="font-bold text-[#1F2937] mb-1">Pengguna Admin</h3>
              <p className="text-sm text-[#6B7280]">
                Username: {user?.username}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#6B7280]">
          Semua perubahan disimpan otomatis ke Local Storage dan akan langsung
          ditampilkan pada user view.
        </div>
      </div>
    </div>
  );
}
