// TODO: verifikasi seluruh data berikut dengan sumber resmi SMK Telkom Purwokerto
// semua nilai di bawah adalah data simulasi (dummy) untuk keperluan tugas.

export interface Jurusan {
  id: string;
  nama: string;
  deskripsi: string;
}

export interface Fasilitas {
  nama: string;
}

export interface Profil {
  nama: string;
  namaSingkat: string;
  tagline: string;
  alamat: string;
  telepon: string;
  email: string;
  website: string;
  akreditasi: string;
  jumlahSiswa: string;
  jumlahJurusan: string;
  sejarah: string;
  visi: string;
  misi: string[];
  kepala: {
    nama: string;
    jabatan: string;
  };
  jurusan: Jurusan[];
  fasilitas: Fasilitas[];
}

export const profil: Profil = {
  nama: "SMK Telkom Purwokerto",
  namaSingkat: "ST",
  tagline:
    "Pendidikan Kejurian Unggul di Bidang Teknologi Informasi dan Jaringan",
  alamat:
    "Jl. D.I. Panjaitan No. 128, Purwokerto, Kabupaten Banyumas, Jawa Tengah 53145",
  telepon: "(0281) 123456", // TODO: verifikasi dengan data resmi
  email: "info@smktelkom-pwt.sch.id", // TODO: verifikasi dengan data resmi
  website: "https://smktelkom-pwt.sch.id", // TODO: verifikasi
  akreditasi: "A",
  jumlahSiswa: "1.200+",
  jumlahJurusan: "4",
  sejarah:
    "SMK Telkom Purwokerto (SMKS Telekomunikasi Sandhy Putra Purwokerto) adalah " +
    "sekolah menengah kejurian negeri yang berada di bawah pengelolaan " +
    "Badan Pengelolaan Pendidikan dan Kepala Sekolah. Sekolah ini didirikan " +
    "sebag sebagai bagian dari inisiatif pendidikan vokasi Telkom untuk " +
    "menghasilkan tenaga ahli yang siap kerja di bidang teknologi informasi, " +
    "jaringan, dan konektivitas pada era digital.",
  visi:
    "Menjadi SMK Unggul yang menghasilkan lulusan kompeten, berkarakter, " +
    "dan siap menghadapi tren teknologi global.",
  misi: [
    "Menyelenggarakan pembelajaran berbasis kompetensi dan proyek nyata.",
    "Meningkatkan kapasitas siswa di bidang pemrograman dan jaringan komputer.",
    "Membangun kemitraan dengan industri teknologi lokal dan nasional.",
    "Menanamkan karakter nusantara dan nasionalisme pada generasi muda.",
  ],
  kepala: {
    nama: "Drs. Budi Santoso, M.Pd.", // TODO: verifikasi dengan data resmi
    jabatan: "Kepala Sekolah",
  },
  jurusan: [
    {
      id: "pplg",
      nama: "PPLG",
      deskripsi: "Pengembangan Perangkat Lunak",
    },
    {
      id: "dkv",
      nama: "DKV",
      deskripsi: "Desain Komunikasi Visual",
    },
    {
      id: "akl",
      nama: "AKL",
      deskripsi: "Akuntansi dan Keuangan Lembaga",
    },
    {
      id: "psisi",
      nama: "PSISI",
      deskripsi: "Pengembangan Sistem Informasi dan Jaringan",
    },
  ],
  fasilitas: [
    { nama: "Laboratorium Komputer" },
    { nama: "Kelas Ber-AC" },
    { nama: "Perpustakaan" },
    { nama: "Lapangan Olahraga" },
    { nama: "Ruang Guru" },
    { nama: "Kantin" },
  ],
};
