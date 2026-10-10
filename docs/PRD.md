# PRD: Website Profil SMK Telkom Purwokerto

## 1. Ringkasan Produk

| Item | Keterangan |
|---|---|
| Nama produk | Website Profil SMK Telkom Purwokerto |
| Jenis | Website frontend statis (tanpa database, API, backend, auth, atau TypeScript) |
| Tech stack | Next.js (App Router), JavaScript (.js), Tailwind CSS, React Component, `next/link` |
| Tujuan | Tugas kuliah: menerapkan routing, layout, component, dynamic route, dan styling di Next.js |
| Target pengguna | Calon siswa, orang tua, siswa, alumni, dan dosen penilai |

> Catatan struktur: project ini TIDAK memakai folder `src/`. Folder `app/`, `components/`, dan `data/` berada langsung di root project.

> Catatan: tugas menyebut SMA, sedangkan website ini untuk SMK. Gunakan istilah "SMK" secara konsisten di seluruh konten.

---

## 2. Tujuan

**Tujuan produk**
- Menampilkan identitas dan informasi SMK Telkom Purwokerto secara profesional.
- Memudahkan pengunjung membaca profil sekolah dan berita terbaru.

**Tujuan akademik**
- Memenuhi seluruh 12 ketentuan minimal pada tugas.
- Menunjukkan struktur kode yang rapi, dengan component reusable dan tanpa copy-paste.

---

## 3. Ruang Lingkup

**Termasuk (wajib)**
- Halaman Home `/`, About `/about`, Berita `/berita`, dan Detail Berita `/berita/[id]`.
- Navbar dan Footer dipasang lewat `layout.js`.
- Minimal 6 berita (data simulasi).
- Minimal 3 component dan responsive sederhana.

**Termasuk (nilai tambah, opsional)**
- `/jurusan`: program keahlian
- `/galeri`: foto kegiatan
- `/kontak`: alamat dan peta (sebagai link, bukan API)
- `/prestasi` dan `/ekstrakurikuler`

**Tidak termasuk**
- TypeScript, database, API, backend, login/register, CMS.

---

## 4. Persona Pengguna

| Persona | Kebutuhan | Fitur yang relevan |
|---|---|---|
| Calon siswa | Mengenal jurusan, suasana sekolah, dan kegiatan | Home, Jurusan, Galeri |
| Orang tua | Alamat, profil, dan kredibilitas sekolah | About, Kontak |
| Siswa/alumni | Kabar terbaru sekolah | Berita |
| Dosen penilai | Kelengkapan ketentuan tugas | Seluruh halaman wajib |

---

## 5. Identitas Visual dan Palet Warna

Identitas Telkom memakai warna **merah, putih, dan abu-abu/hitam**. Pada lambang institusi Telkom, merah melambangkan semangat dan keberanian, putih melambangkan kebersihan dan ketulusan, sedangkan abu-abu/silver melambangkan teknologi modern. Palet berikut mengikuti identitas tersebut.

> **Penting:** kode HEX resmi SMK Telkom Purwokerto tidak ditemukan. Nilai di bawah adalah pendekatan dari warna Telkom. Sesuaikan dengan color picker pada logo resmi sekolah.

| Peran | Nama | HEX (usulan) | Tailwind | Penggunaan |
|---|---|---|---|---|
| Primary | Telkom Red | `#E31E24` | `bg-[#E31E24]` | Tombol, aksen, judul penting |
| Primary dark | Deep Red | `#B3141A` | `hover:bg-[#B3141A]` | Hover tombol, aksen footer |
| Neutral dark | Charcoal | `#1F2937` | `bg-gray-800` | Footer, teks judul, overlay hero |
| Neutral mid | Slate Gray | `#6B7280` | `text-gray-500` | Teks sekunder, tanggal berita |
| Neutral light | Soft Gray | `#F3F4F6` | `bg-gray-100` | Latar section selang-seling |
| Base | White | `#FFFFFF` | `bg-white` | Latar utama, teks di atas merah |

**Proporsi:** sekitar 60% putih/abu muda, 30% abu gelap, 10% merah sebagai aksen.

**Tipografi:** font sans-serif modern (Poppins atau Inter) lewat `next/font/google`. Judul `font-bold` (`text-3xl` s.d. `text-5xl`), isi `text-base` dengan `leading-relaxed`.

---

## 6. Sitemap dan Struktur URL

```
/                  -> Home
/about             -> Tentang sekolah
/berita            -> Daftar berita
/berita/[id]       -> Detail berita (slug)
/jurusan           -> (opsional) Program keahlian
/galeri            -> (opsional) Galeri kegiatan
/kontak            -> (opsional) Kontak & alamat
```

Contoh slug berita: `/berita/ppdb-2026`, `/berita/juara-lks-web-technologies`.

---

## 7. Kebutuhan Fungsional

### FR-1 Layout Global (`app/layout.js`)
- Memuat `<Navbar />`, `{children}`, dan `<Footer />`.
- Mengatur font, metadata (title, description), dan `lang="id"`.

### FR-2 Navbar (`components/Navbar.js`)
- Kiri: logo dan nama "SMK Telkom Purwokerto".
- Kanan: Home | About | Berita (+ halaman tambahan).
- Memakai `<Link>`, bukan `<a>`.
- Mobile: hamburger menu sederhana (`useState` dan `"use client"`).
- Gaya: latar putih, garis bawah merah, hover teks merah.

### FR-3 Home (`app/page.js`)
1. **Hero**: banner foto sekolah dengan overlay gelap, nama sekolah, tagline, dan 2 tombol (Tentang Kami, Lihat Berita).
2. **Sambutan Kepala Sekolah**: foto dan teks singkat.
3. **Tentang singkat**: ringkasan sekolah dan angka statistik (jumlah jurusan, siswa, akreditasi).
4. **Berita terbaru**: 3 `BeritaCard` dengan link ke `/berita`.
5. **CTA**: ajakan mengenal sekolah lebih jauh (tombol ke `/about` atau `/kontak`).

### FR-4 About (`app/about/page.js`)
Profil sekolah, sejarah singkat, visi, misi, alamat, dan fasilitas. Opsional: prestasi, ekstrakurikuler, program unggulan.

Alamat: data direktori sekolah mencantumkan nama resmi SMKS Telekomunikasi Sandhy Putra Purwokerto di Jl. D.I. Panjaitan No. 128, Purwokerto, Kabupaten Banyumas, Jawa Tengah. **Verifikasi dengan sumber resmi sekolah sebelum dipakai.**

### FR-5 Daftar Berita (`app/berita/page.js`)
- Grid kartu: 1 kolom (mobile), 2 kolom (tablet), 3 kolom (desktop).
- Minimal 6 berita. Tiap kartu berisi gambar, judul, tanggal, ringkasan, dan tombol "Baca Selengkapnya".

### FR-6 Detail Berita (`app/berita/[id]/page.js`)
- Mengambil data berita berdasarkan parameter `id` dari file data lokal.
- Menampilkan judul, tanggal, gambar, isi lengkap, dan tombol `<Link>` "Kembali ke Berita".
- Jika id tidak ditemukan, tampilkan pesan "Berita tidak ditemukan" (atau `notFound()`).

### FR-7 Footer (`components/Footer.js`)
Nama sekolah, alamat, tautan cepat, dan `© 2026 SMK Telkom Purwokerto`. Latar charcoal, teks putih, garis atas merah.

### FR-8 Component Reusable

| Component | Fungsi |
|---|---|
| `Navbar.js` | Navigasi global |
| `Footer.js` | Footer global |
| `BeritaCard.js` | Kartu berita (dipakai di Home dan Berita) |
| `Hero.js` | Banner Home |
| `SectionTitle.js` | Judul section konsisten (opsional) |
| `Button.js` | Tombol merah/outline (opsional) |

---

## 8. Struktur Data (Tanpa Backend)

Simpan data berita di file JavaScript lokal, misalnya `data/berita.js`:

```js
export const berita = [
  {
    id: "ppdb-2026",
    judul: "...",
    tanggal: "10 Oktober 2026",
    gambar: "/berita1.jpg",
    ringkasan: "...",
    isi: "...",
  },
  // minimal 6 item
];
```

**Usulan 6 topik berita simulasi:**
1. Pembukaan PPDB 2026
2. Juara lomba kompetensi siswa (LKS)
3. Kunjungan industri ke perusahaan teknologi
4. Pelantikan pengurus OSIS
5. Workshop coding atau jaringan
6. Peringatan hari besar nasional di sekolah

---

## 9. Struktur Project

```
web-smk-telkom/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── about/page.js
│   ├── berita/
│   │   ├── page.js
│   │   └── [id]/page.js
│   ├── jurusan/page.js      (opsional)
│   ├── galeri/page.js       (opsional)
│   └── kontak/page.js       (opsional)
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   └── BeritaCard.js
├── data/
│   └── berita.js
└── public/
    ├── logo.png
    ├── sekolah.jpg
    └── berita1.jpg ... berita6.jpg
```

---

## 10. Kebutuhan Non-Fungsional

- **Responsive:** rapi di mobile (>=360px), tablet, dan desktop memakai prefix `sm:`, `md:`, `lg:`.
- **Konsistensi:** warna dan spacing seragam di semua halaman.
- **Aksesibilitas:** kontras teks memadai, `alt` pada semua gambar, ukuran tombol cukup untuk sentuhan.
- **Performa:** gambar dikompres dan memakai `next/image` bila memungkinkan.
- **Kebersihan kode:** tidak ada navbar/footer yang ditulis ulang, dan tidak semua kode ditumpuk di `page.js`.

---

## 11. Penerapan Tailwind (Syarat Styling)

| Syarat | Contoh class |
|---|---|
| Background | `bg-[#E31E24]`, `bg-gray-100` |
| Text color | `text-white`, `text-gray-500` |
| Font size / weight | `text-4xl font-bold` |
| Padding / margin | `px-6 py-3`, `mt-8 mb-4` |
| Flex / grid | `flex items-center justify-between`, `grid md:grid-cols-3 gap-6` |
| Border / rounded | `border border-gray-200 rounded-xl` |
| Hover | `hover:bg-[#B3141A] transition` |

Contoh tombol utama:

```jsx
<Link
  href="/berita"
  className="bg-[#E31E24] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#B3141A] transition"
>
  Lihat Berita
</Link>
```

---

## 12. Kriteria Penerimaan (Checklist Tugas)

| No | Kriteria | Status |
|---|---|---|
| 1 | Halaman `/` berjalan | [ ] |
| 2 | Halaman `/about` berjalan | [ ] |
| 3 | Halaman `/berita` berjalan | [ ] |
| 4 | Detail `/berita/[id]` berjalan untuk semua berita | [ ] |
| 5 | Navbar via `layout.js` | [ ] |
| 6 | Footer via `layout.js` | [ ] |
| 7 | Tailwind CSS digunakan | [ ] |
| 8 | Minimal 6 berita | [ ] |
| 9 | Minimal 3 component | [ ] |
| 10 | Navigasi memakai `Link` | [ ] |
| 11 | Responsive | [ ] |
| 12 | JavaScript (bukan TypeScript) | [ ] |

---

## 13. Rencana Pengerjaan

| Tahap | Pekerjaan |
|---|---|
| 1 | Setup project (`create-next-app`: JavaScript, Tailwind, App Router) dan siapkan aset di `public/` |
| 2 | Layout, Navbar, dan Footer |
| 3 | Data berita, `BeritaCard`, dan halaman Berita |
| 4 | Detail berita (dynamic route) |
| 5 | Home dan About |
| 6 | Halaman tambahan (opsional) |
| 7 | Uji responsive, rapikan kode, dan cek checklist |

---

## 14. Risiko dan Catatan

- **Aset gambar:** pakai foto dan logo asli dari situs atau media sosial resmi sekolah, atau dokumentasi sendiri. Jika tidak ada, gunakan placeholder.
- **Konten simulasi:** tidak masalah selama masuk akal, sesuai ketentuan tugas.
- **Orisinalitas:** sesuaikan struktur dan desain dengan identitas SMK Telkom, jangan hanya mengganti teks dari contoh dosen.
