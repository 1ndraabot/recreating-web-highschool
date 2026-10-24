"use client";

import { useState, useEffect } from "react";
import { useAdminData } from "@/components/AdminDataProvider";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";
import Button from "@/components/Button";
import type { AdminBerita } from "@/data/admin";

export default function BeritaAdminClient() {
  const { isAuthenticated } = useAuth();
  const { berita, setBerita } = useAdminData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<AdminBerita> & { id: string }>({
    id: "",
    judul: "",
    tanggal: "",
    gambar: "",
    ringkasan: "",
    isi: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingId) {
      const item = berita.find((b) => b.id === editingId);
      if (item) setForm({ ...item });
    } else {
      setForm({ id: "", judul: "", tanggal: "", gambar: "", ringkasan: "", isi: "" });
    }
  }, [berita, editingId]);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.judul || !form.tanggal || !form.gambar || !form.ringkasan || !form.isi) {
      setError("Semua field harus diisi.");
      return;
    }

    const newBerita: AdminBerita = {
      id: form.id || `berita-${Date.now()}`,
      judul: form.judul,
      tanggal: form.tanggal,
      gambar: form.gambar,
      ringkasan: form.ringkasan,
      isi: form.isi,
    };

    let next: AdminBerita[];
    if (editingId) {
      next = berita.map((b) => (b.id === editingId ? newBerita : b));
    } else {
      next = [...berita, newBerita];
    }

    setBerita(next);
    setEditingId(null);
    setForm({ id: "", judul: "", tanggal: "", gambar: "", ringkasan: "", isi: "" });
  };

  const handleEdit = (item: AdminBerita) => {
    setEditingId(item.id);
    setForm({ ...item });
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Yakin ingin menghapus berita ini?")) {
      setBerita(berita.filter((b) => b.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ id: "", judul: "", tanggal: "", gambar: "", ringkasan: "", isi: "" });
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#F3F4F6] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1F2937]">Kelola Berita</h1>
            <p className="text-[#6B7280]">
              Edit data berita yang ditampilkan pada halaman user view.
            </p>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 rounded-lg border border-gray-300 text-[#1F2937] font-medium hover:bg-gray-100 transition"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        {/* Form Tambah / Edit Berita */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mb-8">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">
            {editingId ? "Edit Berita" : "Tambah Berita Baru"}
          </h2>

          {error && (
            <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Judul Berita
              </label>
              <input
                type="text"
                value={form.judul}
                onChange={(e) => handleChange("judul", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Masukkan judul berita"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Tanggal
              </label>
              <input
                type="text"
                value={form.tanggal}
                onChange={(e) => handleChange("tanggal", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Contoh: 10 Oktober 2026"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Path Gambar (di /public)
              </label>
              <input
                type="text"
                value={form.gambar}
                onChange={(e) => handleChange("gambar", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="/ppdb.png"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Ringkasan
              </label>
              <textarea
                value={form.ringkasan}
                onChange={(e) => handleChange("ringkasan", e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Ringkasan singkat berita"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#1F2937] mb-1">
                Isi Lengkap
              </label>
              <textarea
                value={form.isi}
                onChange={(e) => handleChange("isi", e.target.value)}
                rows={6}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
                placeholder="Isi lengkap berita (pisahkan paragraf dengan enter dua kali)"
                required
              />
            </div>

            <div className="md:col-span-2 flex gap-3 pt-2">
              <Button type="submit" variant="primary">
                {editingId ? "Simpan Perubahan" : "Tambah Berita"}
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                disabled={!editingId}
                className="bg-gray-200 text-[#1F2937] hover:bg-gray-300"
              >
                Batal
              </Button>
            </div>
          </form>
        </div>

        {/* Daftar Berita */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-[#1F2937]">Daftar Berita</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-sm font-semibold text-[#6B7280]">#</th>
                  <th className="px-6 py-3 text-sm font-semibold text-[#6B7280]">Judul</th>
                  <th className="px-6 py-3 text-sm font-semibold text-[#6B7280]">Tanggal</th>
                  <th className="px-6 py-3 text-sm font-semibold text-[#6B7280]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {berita.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 text-sm text-[#6B7280]">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">
                      {item.judul}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6B7280]">{item.tanggal}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="text-xs px-3 py-1.5 bg-[#E31E24] text-white rounded hover:bg-[#B3141A]"
                      >
                        Edit
                      </Button>
                      <Button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded hover:bg-red-200"
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-[#6B7280]">
          Data disimpan di Local Storage dan akan langsung tercermin pada user view.
        </div>
      </div>
    </div>
  );
}
