/**
 * KONFIGURASI SITUS & DATA PORTOFOLIO
 * 
 * Panduan Singkat untuk Klien:
 * 1. Ganti 'clientEmail' di bawah dengan alamat email Anda untuk menerima pesan formulir kontak.
 * 2. Untuk menambah proyek baru, cukup salin salah satu blok proyek di dalam array 'projects'
 *    lalu sesuaikan judul, kategori, deskripsi, dan gambarnya.
 */

const SITE_CONFIG = {
  // Informasi Profil Pemilik Portofolio
  ownerName: "Arya Pratama",
  profession: "Digital Designer & Web Specialist",
  tagline: "Membantu bisnis & kreator mewujudkan kehadiran digital yang elegan, cepat, dan berdaya jual.",
  location: "Garut & Bandung, Indonesia",
  status: "Tersedia untuk Proyek Baru",
  
  // Konfigurasi Email Formulir Kontak
  // Masukkan email Anda di sini untuk menerima pesan langsung
  contactEmail: "kontak.aryapratama@gmail.com",
  
  // Access Key Web3Forms (Layanan gratis langsung kirim ke email tanpa perlu backend server)
  // Dapatkan key gratis dalam 10 detik di https://web3forms.com cukup dengan memasukkan email Anda
  web3formsAccessKey: "YOUR_ACCESS_KEY_HERE",

  // Statistik Ringkas
  stats: [
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "48+", label: "Proyek Selesai" },
    { value: "100%", label: "Kepuasan Klien" },
    { value: "<24 Jam", label: "Waktu Respon" }
  ],

  // Keahlian Utama
  skills: [
    { name: "Web Design & UI/UX", level: "Figma, Wireframing, Prototyping" },
    { name: "Responsive Development", level: "HTML5, Modern CSS, JavaScript, WordPress" },
    { name: "SEO & Performance", level: "Core Web Vitals, On-Page SEO, Speed Optimization" },
    { name: "Brand & Visual Identity", level: "Logo, Typografi, Design System" }
  ],

  // Daftar Proyek Portofolio
  projects: [
    {
      id: "proyek-1",
      title: "Kopi Kamojang - E-Commerce & Landing Page",
      category: "web",
      categoryLabel: "Web Development",
      summary: "Situs etalase dan landing page responsif untuk produsen kopi khas Garut dengan pemesanan langsung WhatsApp.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      featured: true,
      year: "2026",
      client: "Kamojang Coffee Roasters",
      tags: ["Responsive Web", "SEO Friendly", "Speed Optimized", "UI/UX"],
      demoUrl: "https://example.com/kopi-kamojang",
      description: "Proyek ini mencakup perancangan antarmuka yang mengedepankan identitas lokal dan kemudahan navigasi. Waktu muat halaman di bawah 1 detik dengan optimasi gambar generasi baru (WebP), integrasi tombol pemesanan cepat via WhatsApp API, serta struktur SEO yang menduduki peringkat atas kata kunci lokal."
    },
    {
      id: "proyek-2",
      title: "Artha Studio - Arsitektur & Interior",
      category: "design",
      categoryLabel: "UI/UX & Branding",
      summary: "Portofolio visual minimalis dengan galeri foto beresolusi tinggi dan animasi transisi halus.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      featured: true,
      year: "2026",
      client: "Artha Architecture Studio",
      tags: ["Minimalist UI", "Interactive Gallery", "Typography", "Fast Load"],
      demoUrl: "https://example.com/artha-studio",
      description: "Desain portofolio arsitektur bertema bold minimalism. Menggunakan tipografi fluid dan ruang negatif (negative space) untuk menonjolkan keindahan karya arsitektur tanpa distraksi visual berlebih."
    },
    {
      id: "proyek-3",
      title: "Batik Sunda Gallery - Katalog Interaktif",
      category: "web",
      categoryLabel: "Web Development",
      summary: "Katalog online produk kerajinan batik dengan filter kategori dinamis dan pencarian instan.",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
      featured: true,
      year: "2025",
      client: "Galeri Batik Priangan",
      tags: ["Responsive Design", "Filter Dinamis", "Schema.org SEO"],
      demoUrl: "https://example.com/batik-gallery",
      description: "Platform showcase untuk memperkenalkan motif batik khas Jawa Barat ke pasar internasional. Dilengkapi dengan dukungan multi-bahasa, struktur data Schema.org untuk cuplikan kaya di Google, dan antarmuka ramah perangkat ponsel pintar."
    },
    {
      id: "proyek-4",
      title: "Klinik Sehat Garut - Situs Layanan & Jadwal",
      category: "web",
      categoryLabel: "Web Development",
      summary: "Website profil klinik medis dengan sistem janji temu online dan formulir konsultasi cepat.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      featured: false,
      year: "2025",
      client: "Klinik Sehat Keluarga",
      tags: ["Formulir Validasi", "Aksesibilitas WCAG", "Mobile First"],
      demoUrl: "https://example.com/klinik-sehat",
      description: "Situs ramah aksesibilitas dengan skema warna berstandar WCAG AAA, waktu akses cepat untuk pengguna jaringan seluler 3G/4G, serta formulir pendaftaran yang terhubung langsung ke notifikasi tim customer service."
    },
    {
      id: "proyek-5",
      title: "Nirwana Resort & Villa - Booking Showcase",
      category: "design",
      categoryLabel: "UI/UX & Branding",
      summary: "Tampilan website mewah untuk resor pegunungan dengan virtual tour foto 360 dan kartu penawaran harga.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      featured: false,
      year: "2025",
      client: "Nirwana Hospitality",
      tags: ["Luxury UI", "Responsive", "Glassmorphism"],
      demoUrl: "https://example.com/nirwana-resort",
      description: "Desain visual bernuansa resor alam premium dengan efek visual halus, tata letak grid asimetris yang rapi, dan formulir kueri reservasi yang responsif di semua resolusi layar."
    },
    {
      id: "proyek-6",
      title: "PustakaDigital - Aplikasi Web Edukasi",
      category: "app",
      categoryLabel: "Mobile & Web App",
      summary: "Antarmuka aplikasi web perpustakaan digital untuk meminjam buku dan membaca artikel ilmiah.",
      image: "https://images.unsplash.com/photo-1507842229451-7f01be837453?auto=format&fit=crop&w=800&q=80",
      featured: false,
      year: "2024",
      client: "Yayasan Pendidikan Nusantara",
      tags: ["Progressive Web App", "Dark Mode", "High Performance"],
      demoUrl: "https://example.com/pustaka-digital",
      description: "Aplikasi web ringan dengan dukungan mode gelap otomatis, pencarian instan sisi klien (client-side search), dan konsumsi kuota data minimalis."
    }
  ]
};

// Ekspor untuk pemakaian modul bila diperlukan
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
