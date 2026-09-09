# KeDA Tech Test

Repository ini berisi jawaban untuk dua bagian tes frontend KeDA: tiga fungsi
JavaScript dan landing page React. Landing page menggunakan nama Stockly,
dengan konsep produk pencatatan stok dan keuntungan usaha.

## Menjalankan proyek

Jalankan perintah berikut dari folder proyek:

```bash
npm install
npm run dev
```



## Soal 1: fungsi JavaScript

Solusi ada di `src/algorithms/`. 

Cara menjalankan

```bash
npm run test -- src/algorithms/algorithms.test.js
```

Untuk menjalankan input manual klik node di terminal lalu

```js
const { sortDescending } = await import('./src/algorithms/sortDescending.js')
const { maxSubarraySum } = await import('./src/algorithms/maxSubarraySum.js')
const { sumEvenNestedValues } = await import('./src/algorithms/sumEvenNestedValues.js')

sortDescending([1, 2, 4, 3]) // [4, 3, 2, 1]
maxSubarraySum([100, 200, 300, 400], 2) // 700
sumEvenNestedValues({ a: 2, nested: { b: 4, c: 3 } }) // 6
```


## Soal 2: landing page

Halaman berisi Hero, About, Pricing, Contact, serta popup Login. Navigasi menuju
section di halaman yang sama. Paket yang ditampilkan adalah Basic, Business,
dan Entrepreneur. Layout menyesuaikan ukuran layar dan warna mengikuti mode
terang atau gelap perangkat.

Login dan form kontak hanya demo tampilan, tidak mengirim data ke server.
Pencatatan stok, chart, export Excel, dan prediksi AI disebut sebagai benefit
paket saja, bukan fitur aplikasi yang sudah dibuat. Tidak ada backend atau
database dalam proyek ini.

## Pilihan teknologi

- **React JavaScript** mengikuti ketentuan tes. Komponen dipisah per section
  supaya mudah ditemukan dan dibaca.
- **Vite** untuk development server dan build. Next.js tidak digunakan karena
  halaman ini tidak membutuhkan server rendering, API routes, atau banyak rute.
- **CSS biasa** untuk layout, warna, dan responsivitas. Kebutuhannya masih bisa
  ditangani tanpa Sass atau UI library.
- **HTML native** untuk validasi form dan elemen `<dialog>` pada popup login.
- **Vitest dan React Testing Library** untuk pengujian algoritma dan interaksi
  komponen. ESLint digunakan untuk pemeriksaan kode.
- **Outfit Variable** dari paket `@fontsource-variable/outfit` untuk font yang
  disertakan dalam build, tanpa mengambil font dari layanan eksternal saat dibuka.

## Letak file

```text
src/
  algorithms/   Tiga fungsi dan unit test-nya
  assets/       Ilustrasi
  components/   Komponen section dan popup login
  App.jsx       Susunan halaman dan state popup
  App.test.jsx  Test komponen
  styles.css    Style seluruh halaman
```


## Sumber ilustrasi

- [Analytics Setup](https://undraw.co/illustration/analytics-setup_ptrz)
- [Order Status](https://undraw.co/illustration/order-status_swsl)

