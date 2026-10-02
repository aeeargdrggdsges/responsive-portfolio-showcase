# Panduan Lengkap Pengelolaan Website Portofolio

Selamat datang! Website portofolio ini dibangun khusus dengan arsitektur ringan, performa cepat (<1 detik muat), responsif di semua tipe layar (HP, tablet, laptop), dan terintegrasi formulir kontak otomatis.

Dokumen ini disusun sebagai panduan praktis agar Anda dapat mengelola, menambah karya baru, dan mengatur email penerima formulir tanpa memerlukan keahlian koding yang rumit.

---

## 1. Cara Mengatur Email Penerima Formulir Kontak

Website ini telah dilengkapi integrasi **Web3Forms** (layanan pengiriman formulir langsung ke email tanpa perlu sewa server backend khusus, 100% gratis hingga 250 pesan/bulan).

### Langkah Pengaturan (Kurang dari 1 Menit):
1. Buka file `projects-data.js`.
2. Temukan baris berikut:
   ```javascript
   contactEmail: "kontak.aryapratama@gmail.com",
   web3formsAccessKey: "YOUR_ACCESS_KEY_HERE",
   ```
3. Ganti `contactEmail` dengan alamat email Anda sendiri.
4. Buka situs [https://web3forms.com](https://web3forms.com) di browser Anda.
5. Masukkan alamat email Anda, lalu klik **"Create Access Key"**.
6. Cek inbox email Anda, salin Access Key yang diberikan, lalu tempelkan ke `web3formsAccessKey: "kode-key-anda-disini"`.
7. Selesai! Sekarang setiap pengunjung yang mengirim pesan melalui formulir kontak akan langsung masuk ke inbox email Anda lengkap dengan nama pengirim dan subjeknya.

> **Fitur Keamanan Anti-Spam:** Formulir ini sudah dibekali teknologi *Honeypot (`_botcheck`)*. Kolom ini tidak terlihat oleh manusia biasa, namun jika robot/spammer mencoba mengirim spam otomatis, sistem akan langsung menolaknya secara diam-diam.

---

## 2. Cara Menambah & Mengedit Proyek Baru

Semua data proyek disimpan rapi dan terpusat di dalam file `projects-data.js` pada bagian array `projects`.

### Format Menambah Proyek Baru:
Cukup salin (copy) satu blok kurung kurawal `{ ... }` di bawah ini, lalu tempelkan (paste) di dalam daftar `projects` pada `projects-data.js`:

```javascript
{
  id: "proyek-7", // Pastikan ID ini unik (misal: proyek-7, proyek-8)
  title: "Nama Proyek Baru Anda",
  category: "web", // Pilihan: "web", "design", atau "app"
  categoryLabel: "Web Development", // Label yang tampil di kartu
  summary: "Ringkasan 1-2 kalimat mengenai karya ini untuk ditampilkan di kartu depan.",
  image: "https://images.unsplash.com/photo-contoh.jpg", // Tautan gambar atau folder lokal assets/gambar.jpg
  featured: true,
  year: "2026",
  client: "Nama Klien / Instansi",
  tags: ["Responsive", "Figma", "Branding"], // Tag kecil di bawah kartu
  demoUrl: "https://link-karya-live-anda.com", // Link tombol lihat proyek
  description: "Penjelasan lengkap mengenai latar belakang proyek, tantangan desain, dan solusi yang Anda kerjakan."
},
```

### Tips Penggunaan Gambar:
- Gunakan gambar dengan rasio 16:9 atau 16:10 (misal: 1200 x 750 piksel).
- Anda dapat mengompres gambar terlebih dahulu di [TinyPNG](https://tinypng.com) agar ukuran file tetap ringan (<150 KB) dan website tetap memuat dengan sekejap.

---

## 3. Pengaturan Dasar SEO (Search Engine Optimization)

Website ini sudah dipasangi struktur metadata lengkap untuk mesin pencari Google dan kartu pratinjau sosial (WhatsApp, Facebook, LinkedIn, Twitter).

### Mengubah Judul & Deskripsi di Google:
Buka file `index.html`, lalu cari bagian `<head>`:
```html
<title>Website Portofolio Profesional & Responsif | Nama Anda</title>
<meta name="description" content="Tuliskan rangkuman keahlian Anda di sini..." />
```

### Mengubah Gambar Pratinjau saat Link Dibagikan di WhatsApp:
Cari bagian Open Graph di `index.html`:
```html
<meta property="og:image" content="URL_GAMBAR_PREVIEW_ANDA.jpg" />
```

---

## 4. Cara Publikasi / Hosting Gratis (Live dalam 3 Menit)

Website ini adalah solusi statis murni (*Jamstack*) tanpa ketergantungan database MySQL yang berat, sehingga dapat di-hosting secara **GRATIS** dan sangat aman dengan opsi berikut:

### Opsi A: Vercel / Netlify (Paling Direkomendasikan)
1. Buat akun di [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
2. Tarik (*drag & drop*) folder website ini ke dashboard Vercel / Netlify.
3. Dalam 30 detik website Anda akan langsung aktif dengan domain `namaanda.vercel.app` lengkap dengan sertifikat SSL gratis (HTTPS).
4. Anda dapat menyambungkan domain kustom sendiri (misal: `namaanda.com` atau `.id`) dengan mudah.

### Opsi B: Hosting cPanel Biasa
1. Buka cPanel hosting Anda > masuk ke **File Manager**.
2. Masuk ke folder `public_html`.
3. Upload seluruh file dari folder ini (`index.html`, `styles.css`, `script.js`, `projects-data.js`).
4. Situs Anda langsung online!

---

## 5. Pertanyaan & Bantuan Lebih Lanjut
Jika Anda membutuhkan bantuan modifikasi tampilan lebih lanjut, penambahan fitur animasi, atau integrasi domain khusus, kami siap memberikan pendampingan penuh!
