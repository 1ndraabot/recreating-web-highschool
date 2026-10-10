// TODO: verifikasi isi, tanggal, dan gambar berita dengan sumber resmi SMK Telkom Purwokerto.
// Semua berita di bawah adalah data simulasi (dummy). Gambar sudah menunjuk ke aset
// lokal di folder `public/` sesuai judul masing-masing berita.

export interface Berita {
  id: string;
  judul: string;
  tanggal: string;
  gambar: string; // URL atau path lokal, cukup ganti string ini
  ringkasan: string;
  isi: string;
}

export const berita: Berita[] = [
  {
    id: "ppdb-2026",
    judul: "Pembukaan PPDB 2026/2027 - SMK Telkom Purwokerto Menerima 600 Peserta",
    tanggal: "10 Oktober 2026",
    gambar: "/ppdb.png",
    ringkasan:
      "Penerimaan Peserta Didik Baru (PPDB) SMK Telkom Purwokerto Tahun Pelajaran 2026/2027 telah resmi dibuka untuk enam program kejurian dengan total kapasitas 600 peserta didik.",
    isi: "Penerimaan Peserta Didik Baru (PPDB) SMK Telkom Purwokerto Tahun Pelajaran 2026/2027 telah resmi dibuka. Sekolah menyediakan total kapasitas sebanyak 600 peserta didik yang tersebar di enam program kejurian, meliputi PPLG, DKV, AKL, PSISI, dan dua program keahlian baru.\n\nProses pendaftaran dilakukan secara daring melalui sistem resmi Dinas Pendidikan. Calon peserta didik dapat mendaftarkan diri mulai tanggal 10 Oktober 2026 pukul 08.00 WIB. Syarat utama adalahIjazah SD/MI (atau setarad), Kartu Keluarga, dan pas foto terbaru ukuran 3x4.\n\nKami mengundang seluruh calon siswa, orang tua, dan wali murid untuk mengunjungi situs resmi PPDB kami atau menghubungi petugas terkait di Sekolah Menengah Kejuruan Telekomunikasi Sandhy Putra Purwokerto.",
  },
  {
    id: "juara-lks-2026",
    judul: "Tim PPLG SMK Telkom Raih 3 Medali Emas di LKS Nasional",
    tanggal: "5 Oktober 2026",
    gambar: "/threemedals.png",
    ringkasan:
      "Tim siswa Program Keahlian PPLG meraih prestasi gemilang dengan tiga medali emas dan dua medali perak pada Lomba Kompetensi Siswa (LKS) Nasional tingkat akhir.",
    isi: "Bangga!\n\nTim siswa Program Keahlian Pengembangan Perangkat Lunak dan Gimnastik (PPLG) dari SMK Telkom Purwokerto meraih prestasi yang membanggakan pada Lomba Kompetensi Siswa (LKS) Nasional 2026. Dari enam peserta yang dikirim, tiga diantaranya berhasil meraih medali emas, sementara dua siswa lainnya meraih medali perak.\n\nJuara emas kami raih pada kompetensi Rekayasa Perangkat Lunak, Keamanan Jaringan, dan Desain Multimedia. Sementara itu, medali perak kami dapatkan pada kompetensi Jaringan Komputer dan Pemrograman Dasar. Prestasi ini adalah hasil dari semangat belajar dan latihan tekun selama enam bulan terakhir.",
  },
  {
    id: "kunjungan-industri-telkom",
    judul: "Rombel PPLG Kunjungi Kantor Pusat Telkom di Jakarta",
    tanggal: "28 September 2026",
    gambar: "/kunjunganindustri.png",
    ringkasan:
      "Siswa kelas XII PPLG mengikuti kunjungan industri ke kantor pusat Telkom Indonesia di Jakarta untuk memahami dunia profesional di bidang teknologi dan jaringan.",
    isi: "Untuk memperluas wawasan dan mengasah kompetensi, kelas XII Program Keahlian PPLG mengikuti kunjungan industri ke kantor pusat Telkom Indonesia di Jakarta, Senin, 28 September 2026.\n\nKunjungan ini bertujuan untuk memberikan exposure langsung tentang dunia profesional di bidang telekomunikasi, pengembangan perangkat lunak, serta manajemen jaringan komputer. Siswa didampingi oleh tiga guru pendamping selama enam jam di kantor pusat Telkom.",
  },
  {
    id: "pelantikan-osis-2026",
    judul: "Pelantikan Pengurus OSIS 2026/2027",
    tanggal: "20 September 2026",
    gambar: "/pelantikanosis.png",
    ringkasan:
      "Perayaan pelantikan pengurus Organisasi Siswa (OSIS) yang baru 2026/2027 digelar khidup di Aula Sekolah dengan penuh warna dan semangat kepemimpinan.",
    isi: "Aula Sekolah kami dipenuhi suasana khidup pada Selasa, 20 September 2026, untuk pelaksanaan pelantikan Pengurus Organisasi Siswa (OSIS) periode 2026/2027.\n\nDalam sambutannya, Kepala Sekolah menekankan pentingnya peran OSIS sebagai wadah pengembangan diri dan pembinaan karakter sosial para siswa. Pemilihan ketua dan wakil ketua OSIS dilakukan secara demokratis melalui pemilu internal yang transparan.",
  },
  {
    id: "workshop-coding-2026",
    judul: "SMK Telkom Gelar Workshop Coding dan Jaringan untuk 200 Peserta",
    tanggal: "12 September 2026",
    gambar: "/workshopcoding.png",
    ringkasan:
      "Workshop pengembangan web dan konfigurasi jaringan berhasil diselenggarakan dengan lebih dari 200 peserta dari siswa, guru, dan komunitas sekolah.",
    isi: "Pada hari Minggu, 12 September 2026, kami mengadakan workshop dua hari bertemakan 'Coding & Networking' yang mengundang lebih dari 200 peserta dari kalangan siswa, guru, dan komunitas sekolah.\n\nWorkshop ini mencakup modul pengembangan web dengan framework modern, pengenalan konsep jaringan komputer, serta praktik langsung konfigurasi perangkat jaringan. Narasumber workshop kami undang dari komunitas developer lokal dan profesional Telekomunikasi.",
  },
  {
    id: "hari-kemerdekaan-2026",
    judul: "Peringatan Hari Kemerdekaan RI ke-81 di SMK Telkom Purwokerto",
    tanggal: "17 Agustus 2026",
    gambar: "/harikemerdekaan.png",
    ringkasan:
      "Peringatan Hari Kemerdekaan Republik Indonesia ke-81 di peringkat sekolah berlangsung penuh khidup, dimulai dari upacana bendera hingga lomba keageman dan kesenian.",
    isi: "Hari Kemerdekaan Republik Indonesia ke-81 ditaburi suasana penuh kasotisman di kampus kami. Pada Senin, 17 Agustus 2026, seluruh warga sekolah berkumpul di lapangan untuk Upacana Bendera dan pengibaran bendera putih.\n\nSebagai ranggaiannya, selama satu minggu sekolah menggelar berbagai lomba, termasuk lomba kesenian, kompetisi olahraga antar-kelas, dan pameran sejarah kemerdekaan yang menarik perhatian peserta didik maupun orang tua.",
  },
];
