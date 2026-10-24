"use client";

import { useState } from "react";
import { useAdminData } from "@/components/AdminDataProvider";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";
import Button from "@/components/Button";
import type { AdminProfil, AdminJurusan, AdminFasilitas } from "@/data/admin";

export default function ProfilAdminClient() {
  const { isAuthenticated } = useAuth();
  const { profil, setProfil } = useAdminData();
  const [form, setForm] = useState<AdminProfil>({ ...profil });
  const [error, setError] = useState("");

  const handleInput = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleKepalaInput = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      kepala: { ...prev.kepala, [key]: value },
    }));
  };

  const handleMisiChange = (index: number, value: string) => {
    setForm((prev) => {
      const misi = [...prev.misi];
      misi[index] = value;
      return { ...prev, misi };
    });
  };

  const handleJurusanChange = (index: number, key: string, value: string) => {
    setForm((prev) => {
      const jurusan = [...prev.jurusan];
      jurusan[index] = { ...jurusan[index], [key]: value };
      return { ...prev, jurusan };
    });
  };

  const handleFasilitasChange = (index: number, value: string) => {
    setForm((prev) => {
      const fasilitas = [...prev.fasilitas];
      fasilitas[index] = { nama: value };
      return { ...prev, fasilitas };
    });
  };

  const addMisi = () => {
    setForm((prev) => ({ ...prev, misi: [...prev.misi, ""] }));
  };

  const removeMisi = (index: number) => {
    setForm((prev) => {
      const misi = prev.misi.filter((_, i) => i !== index);
      return { ...prev, misi };
    });
  };

  const addJurusan = () => {
    setForm((prev) => ({
      ...prev,
      jurusan: [...prev.jurusan, { id: "", nama: "", deskripsi: "" }],
    }));
  };

  const removeJurusan = (index: number) => {
    setForm((prev) => {
      const jurusan = prev.jurusan.filter((_, i) => i !== index);
      return { ...prev, jurusan };
    });
  };

  const addFasilitas = () => {
    setForm((prev) => ({ ...prev, fasilitas: [...prev.fasilitas, { nama: "" }] }));
  };

  const removeFasilitas = (index: number) => {
    setForm((prev) => {
      const fasilitas = prev.fasilitas.filter((_, i) => i !== index);
      return { ...prev, fasilitas };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.nama || !form.tagline || !form.alamat) {
      setError("Nama sekolah, tagline, dan alamat wajib diisi.");
      return;
    }
    setProfil(form);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#F3F4F6] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kelola Profil Sekolah</h1>
            <p className="text-[#6B7280]">
              Edit data profil yang ditampilkan di Home, About, dan Footer.
            </p>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 rounded-lg border border-gray-300 text-[#1F2937] font-medium hover:bg-gray-100 transition"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow border border-gray-200 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Nama Sekolah
              </label>
              <input
                type="text"
                value={form.nama}
                onChange={(e) => handleInput("nama", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Akreditasi
              </label>
              <input
                type="text"
                value={form.akreditasi}
                onChange={(e) => handleInput("akreditasi", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Tagline
              </label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => handleInput("tagline", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Alamat
              </label>
              <input
                type="text"
                value={form.alamat}
                onChange={(e) => handleInput("alamat", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Telepon
              </label>
              <input
                type="text"
                value={form.telepon}
                onChange={(e) => handleInput("telepon", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleInput("email", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Website
              </label>
              <input
                type="url"
                value={form.website}
                onChange={(e) => handleInput("website", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Jumlah Siswa
              </label>
              <input
                type="text"
                value={form.jumlahSiswa}
                onChange={(e) => handleInput("jumlahSiswa", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Jumlah Jurusan
              </label>
              <input
                type="text"
                value={form.jumlahJurusan}
                onChange={(e) => handleInput("jumlahJurusan", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
              />
            </div>
          </div>

          {/* Kepala Sekolah */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-base font-bold text-[#1F2937] mb-4">Kepala Sekolah</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  value={form.kepala.nama}
                  onChange={(e) => handleKepalaInput("nama", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-1">
                  Jabatan
                </label>
                <input
                  type="text"
                  value={form.kepala.jabatan}
                  onChange={(e) => handleKepalaInput("jabatan", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Sejarah */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-1">
              Sejarah
            </label>
            <textarea
              value={form.sejarah}
              onChange={(e) => handleInput("sejarah", e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
            />
          </div>

          {/* Visi */}
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-1">
              Visi
            </label>
            <input
              type="text"
              value={form.visi}
              onChange={(e) => handleInput("visi", e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
            />
          </div>

          {/* Misi */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-base font-bold text-[#1F2937] mb-4">Misi</h3>
            <div className="space-y-3">
              {form.misi.map((m, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#E31E24] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={m}
                      onChange={(e) => handleMisiChange(i, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => removeMisi(i)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-1.5"
                  >
                    Hapus
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={addMisi}
                variant="outline"
                className="text-sm px-4 py-2"
              >
                + Tambah Misi
              </Button>
            </div>
          </div>

          {/* Jurusan */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-base font-bold text-[#1F2937] mb-4">Jurusan</h3>
            <div className="space-y-3">
              {form.jurusan.map((j, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                  <div>
                    <input
                      type="text"
                      value={j.id}
                      onChange={(e) => handleJurusanChange(i, "id", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition text-sm"
                      placeholder="id"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={j.nama}
                      onChange={(e) => handleJurusanChange(i, "nama", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition text-sm"
                      placeholder="nama"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      value={j.deskripsi}
                      onChange={(e) => handleJurusanChange(i, "deskripsi", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition text-sm"
                      placeholder="deskripsi"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => removeJurusan(i)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-2 col-span-1 md:col-span-1"
                  >
                    Hapus
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={addJurusan} variant="outline" className="text-sm px-4 py-2">
                + Tambah Jurusan
              </Button>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-base font-bold text-[#1F2937] mb-4">Fasilitas</h3>
            <div className="space-y-3">
              {form.fasilitas.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <input
                    type="text"
                    value={f.nama}
                    onChange={(e) => handleFasilitasChange(i, e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] outline-none transition"
                  />
                  <Button
                    type="button"
                    onClick={() => removeFasilitas(i)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-2.5"
                  >
                    Hapus
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={addFasilitas} variant="outline" className="text-sm px-4 py-2">
                + Tambah Fasilitas
              </Button>
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-auto">
            Simpan Perubahan Profil
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-[#6B7280]">
          Data disimpan di Local Storage dan akan langsung tercermin pada user view.
        </div>
      </div>
    </div>
  );
}
