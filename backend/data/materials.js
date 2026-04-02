// ============================================================
//  AdaptLearn — Internal Materials Database
//  Sumber: materi JavaScript yang sudah dirangkum
// ============================================================

export const MATERIALS = [
  // ─── BEGINNER ────────────────────────────────────────────
  {
    id: "js-beginner-01",
    title: "Variabel dan Tipe Data",
    level: "Pemula",
    topic: "Variabel",
    format: "Teks",
    thumbnail:
      "https://ecdiyeqcqqchqzwslbce.supabase.co/storage/v1/object/public/image-content/Thumbnail-variabel-dan-tipe-data.webp",
    content_text: `JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif seperti tombol yang bisa diklik, form yang bisa diisi, dan animasi yang bergerak. Sebelum bisa membuat semua itu, hal pertama yang wajib kamu pelajari adalah cara menyimpan data, yaitu menggunakan **variabel**. Di JavaScript modern, ada dua cara utama membuat variabel: \`let\` untuk data yang bisa berubah, dan \`const\` untuk data yang nilainya tetap.

Setiap variabel menyimpan satu jenis data yang disebut **tipe data**. Tipe data paling umum adalah: \`String\` (teks), \`Number\` (angka), \`Boolean\` (True/False), \`Array\` (daftar/kumpulan data), dan \`Object\` (kumpulan data dengan nama/label). Memahami tipe data sangat penting karena JavaScript akan berperilaku berbeda tergantung tipe data apa yang kamu gunakan dalam operasi.

Berikut adalah contoh kode lengkap penggunaan variabel dan tipe data:

\`\`\`javascript
// String — untuk menyimpan teks
const nama = "Budi";
let kota = "Jakarta";

// Number — untuk menyimpan angka
let umur = 17;
const nilaiPI = 3.14;

// Boolean — hanya berisi true atau false
let sudahLogin = false;
const aktif = true;

// Array — daftar data dalam satu variabel
let buah = ["apel", "mangga", "jeruk"];
console.log(buah[0]);
// Output: apel

// Object — data dengan label (key: value)
const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XII"
};
console.log(siswa.nama);
// Output: Budi
\`\`\`

Perhatikan bahwa kita menggunakan \`const\` untuk data yang tidak akan berubah (seperti nama atau konstanta matematika), dan \`let\` untuk data yang mungkin berubah selama program berjalan (seperti skor atau status login). Hindari menggunakan \`var\` karena cara kerjanya lebih membingungkan dan sudah dianggap "kuno" di JavaScript modern.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 1,
  },
  {
    id: "js-beginner-02",
    title: "Operator Dasar",
    level: "Pemula",
    topic: "Operator",
    format: "Teks",
    thumbnail:
      "https://ecdiyeqcqqchqzwslbce.supabase.co/storage/v1/object/public/image-content/Thumbnail-operator-dasar.webp",
    content_text: `Setelah sebelumnya kamu berhasil menyimpan data ke dalam variabel, langkah berikutnya adalah **melakukan operasi** terhadap data tersebut. Operator adalah simbol atau kata kunci yang digunakan untuk melakukan perhitungan, perbandingan, atau manipulasi nilai. JavaScript memiliki berbagai jenis operator, tapi yang paling mendasar adalah **operator aritmatika** (untuk berhitung) dan **operator perbandingan** (untuk membandingkan dua nilai).

Operator aritmatika yang wajib kamu hafal adalah \`+\` (penjumlahan), \`-\` (pengurangan), \`*\` (perkalian), \`/\` (pembagian), dan \`%\` (sisa bagi/modulus). Sementara itu, operator perbandingan digunakan untuk membandingkan dua nilai dan hasilnya selalu \`true\` atau \`false\`. Yang sering membingungkan pemula adalah perbedaan \`==\` dan \`===\` — keduanya membandingkan nilai, tapi \`===\` jauh lebih ketat karena juga memeriksa **tipe datanya**.

\`\`\`javascript
// Operator Aritmatika
let a = 10;
let b = 3;

console.log(a + b);  // 13   — penjumlahan
console.log(a - b);  // 7    — pengurangan
console.log(a * b);  // 30   — perkalian
console.log(a / b);  // 3.33 — pembagian
console.log(a % b);  // 1    — sisa bagi (10 dibagi 3, sisa 1)

// Operator Perbandingan
console.log(5 == "5");   // true  — hanya bandingkan nilai
console.log(5 === "5");  // false — bandingkan nilai DAN tipe data
console.log(10 > 5);     // true
console.log(3 < 1);      // false
\`\`\`

Selalu gunakan \`===\` (triple equals) daripada \`==\` (double equals) saat membandingkan nilai. Ini adalah salah satu **best practice** paling dasar di JavaScript karena \`==\` bisa memberikan hasil yang mengejutkan ketika membandingkan angka dengan teks yang terlihat sama.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 2,
  },
  {
    id: "js-beginner-03",
    title: "Percabangan (Conditionals)",
    level: "Pemula",
    topic: "Conditionals",
    format: "Teks",
    thumbnail: null,
    content_text: `Bayangkan kamu membuat program yang bisa memberikan respons berbeda tergantung kondisi, misalnya: *"jika nilai di atas 75, tampilkan 'Lulus', jika tidak tampilkan 'Remedial'"*. Inilah fungsi dari **percabangan** atau *conditionals*. Di JavaScript, percabangan ditulis menggunakan \`if\`, \`else if\`, dan \`else\` — tiga kata kunci yang bekerja bersama untuk membuat keputusan dalam kode.

Cara kerjanya sederhana:
- JavaScript akan memeriksa kondisi di dalam tanda kurung \`()\`.
- Jika kondisinya \`true\`, maka blok kode di dalam \`{}\` akan dijalankan.
- Jika \`false\`, program akan melompat ke kondisi berikutnya (\`else if\`) atau ke blok \`else\` sebagai pilihan terakhir.
- Kamu bisa menumpuk banyak kondisi dengan \`else if\` untuk membuat logika yang lebih kompleks.

\`\`\`javascript
let nilai = 82;

if (nilai >= 90) {
  console.log("Grade A — Sempurna! 🎉");
} else if (nilai >= 75) {
  console.log("Grade B — Bagus! 👍");
} else if (nilai >= 60) {
  console.log("Grade C — Cukup, terus semangat!");
} else {
  console.log("Grade D — Yuk belajar lebih giat! 💪");
}
// Output: Grade B — Bagus! 👍
\`\`\`

Penting untuk diingat bahwa JavaScript memeriksa kondisi dari atas ke bawah secara berurutan — begitu satu kondisi \`true\` ditemukan, blok kode itu dijalankan dan sisanya dilewati. Ini artinya **urutan penulisan kondisi sangat berpengaruh** pada hasil program kamu.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 3,
  },
  {
    id: "js-beginner-04",
    title: "Perulangan Dasar (Loops)",
    level: "Pemula",
    topic: "Loops",
    format: "Teks",
    thumbnail: null,
    content_text: `Pernahkah kamu berpikir: *"gimana caranya program bisa mencetak 100 angka tanpa nulis kode sebanyak 100 baris?"* Jawabannya adalah **perulangan** atau *loop*! Loop memungkinkan kamu menjalankan sebuah blok kode berkali-kali secara otomatis. Jenis loop yang paling umum untuk pemula adalah \`for\` loop, yang terdiri dari tiga bagian: nilai awal, kondisi berhenti, dan langkah perubahan.

Struktur \`for\` loop ditulis seperti ini: \`for (mulai; kondisi; langkah)\`:
- Bagian **"mulai"** menentukan dari mana kita mulai menghitung.
- **"kondisi"** menentukan kapan loop berhenti.
- **"langkah"** menentukan berapa perubahan setiap putaran.

Loop ini sangat berguna saat kamu ingin mengolah setiap item dalam sebuah Array satu per satu.

\`\`\`javascript
// Contoh 1: Cetak angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
  console.log("Angka ke-" + i);
}
// Output: Angka ke-1, Angka ke-2, ... Angka ke-5

// Contoh 2: Loop melalui Array
let daftarSiswa = ["Ani", "Budi", "Citra", "Dodi"];

for (let i = 0; i < daftarSiswa.length; i++) {
  console.log("Halo, " + daftarSiswa[i] + "!");
}
// Output: Halo, Ani! | Halo, Budi! | Halo, Citra! | Halo, Dodi!
\`\`\`

Perhatikan bahwa \`i\` di sini adalah nama variabel penghitung (bisa juga dinamai apa saja, tapi \`i\` adalah format umum). Array di JavaScript dimulai dari **indeks 0**, bukan 1 — jadi elemen pertama adalah \`array[0]\`, bukan \`array[1]\`. Ini adalah hal yang sering membingungkan pemula, jadi perhatikan baik-baik!

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 4,
  },
  {
    id: "js-beginner-05",
    title: "Fungsi Sederhana",
    level: "Pemula",
    topic: "Functions",
    format: "Teks",
    thumbnail: null,
    content_text: `Seiring berjalannya waktu program yang kamu buat akan semakin besar, kamu akan sering menemukan blok kode yang perlu diulang di banyak tempat. Daripada menulis ulang kode yang sama, kamu bisa mengemasnya menjadi sebuah **fungsi**. Fungsi adalah "wadah" untuk menyimpan sekumpulan instruksi yang bisa dipanggil kapan saja dan dari mana saja dalam program. Di JavaScript, cara membuat fungsi yang paling dasar adalah dengan *function declaration*.

Struktur fungsi terdiri dari: kata kunci \`function\`, nama fungsi, **parameter** (data yang dimasukkan ke fungsi), dan **return** (nilai yang dikembalikan fungsi). Parameter adalah seperti "bahan baku" yang kamu berikan ke fungsi, dan \`return\` adalah "hasil jadi" yang fungsi kembalikan ke kamu. Sebuah fungsi bisa memiliki banyak parameter, atau tidak memiliki parameter sama sekali.

\`\`\`javascript
// Fungsi tanpa parameter
function sapa() {
  console.log("Halo! Selamat belajar JavaScript! 😊");
}

// Fungsi dengan parameter dan return
function tambah(angka1, angka2) {
  return angka1 + angka2;
}

// Fungsi yang lebih kompleks
function hitungLuasSegitiga(alas, tinggi) {
  let luas = (alas * tinggi) / 2;
  return luas;
}

// Cara memanggil fungsi
sapa();                                  // Output: Halo! Selamat belajar JavaScript!
console.log(tambah(5, 3));              // Output: 8
console.log(hitungLuasSegitiga(10, 6)); // Output: 30
\`\`\`

Setelah fungsi dibuat, kamu tinggal **memanggil** namanya diikuti tanda kurung \`()\` untuk menjalankannya. Jika fungsi membutuhkan data, masukkan data tersebut ke dalam tanda kurung saat memanggil. Ini adalah konsep yang akan terus kamu gunakan di semua level JavaScript — jadi pastikan kamu sudah benar-benar paham sebelum lanjut ke level berikutnya!

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 5,
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────
  {
    id: "js-intermediate-01",
    title: "DOM Manipulation",
    level: "Menengah",
    topic: "DOM",
    format: "Teks",
    thumbnail: null,
    content_text: `Selama ini kamu belajar JavaScript yang hasilnya hanya muncul di *console*. Sekarang saatnya membuat JavaScript benar-benar **mengubah tampilan website**! Caranya adalah melalui **DOM Manipulation**. DOM (*Document Object Model*) adalah representasi struktur HTML sebagai "pohon objek" yang bisa diakses dan diubah oleh JavaScript. Dengan DOM, kamu bisa mengubah teks, warna, menambah/hapus elemen, bahkan merespons klik pengguna — semuanya tanpa reload halaman.

Ada beberapa cara untuk memilih elemen HTML dari JavaScript:
- \`getElementById()\` — untuk memilih berdasarkan id.
- \`querySelector()\` — untuk memilih dengan selektor CSS.
- \`querySelectorAll()\` — untuk memilih banyak elemen sekaligus.

Setelah elemen dipilih, kamu bisa mengubah teksnya dengan \`.textContent\` atau \`.innerHTML\`, mengubah gayanya dengan \`.style\`, atau menambahkan respons klik dengan \`.addEventListener()\`.

\`\`\`html
<!-- File HTML -->
<h1 id="judul">Halo, Dunia!</h1>
<button id="tombol">Klik Aku</button>
<p id="pesan"></p>
\`\`\`

\`\`\`javascript
// Memilih elemen
const judul = document.getElementById("judul");
const tombol = document.querySelector("#tombol");
const pesan = document.getElementById("pesan");

// Mengubah konten dan style
judul.textContent = "Selamat Datang di JavaScript!";
judul.style.color = "blue";

// Merespons klik pengguna
tombol.addEventListener("click", function() {
  pesan.textContent = "Tombol berhasil diklik! 🎉";
  pesan.style.color = "green";
});
\`\`\`

DOM Manipulation adalah fondasi dari semua pengembangan frontend saat ini. Tanpa memahami DOM, kamu tidak akan bisa membuat website yang interaktif dan dinamis. Setelah kamu kuasai ini, kamu akan mulai mengerti bagaimana framework seperti React dan Vue bekerja — karena pada dasarnya mereka semua memanipulasi DOM, hanya dengan cara yang lebih terorganisir.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 1,
  },
  {
    id: "js-intermediate-02",
    title: "Arrow Functions & ES6+",
    level: "Menengah",
    topic: "ES6",
    format: "Teks",
    thumbnail: null,
    content_text: `JavaScript terus berkembang, dan pada tahun 2015, versi baru bernama **ES6 (ECMAScript 2015)** hadir membawa banyak fitur keren yang membuat kode lebih ringkas dan mudah dibaca. Tiga fitur yang paling sering digunakan adalah:
- **Arrow Functions** — cara penulisan fungsi yang lebih pendek.
- **Template Literals** — cara menggabungkan teks dan variabel yang lebih rapi.
- **Destructuring** — cara mengambil nilai dari Array/Object dengan lebih mudah.

**Arrow function** menggunakan tanda \`=>\` dan membuat penulisan fungsi jauh lebih singkat. **Template literal** menggunakan backtick \`\\\`\` dan memungkinkan kamu menyisipkan variabel langsung ke dalam teks dengan \`\${variabel}\` tanpa perlu tanda \`+\`. **Destructuring** memungkinkan kamu mengambil nilai dari Object atau Array dan langsung menyimpannya ke dalam variabel-variabel baru hanya dalam satu baris.

\`\`\`javascript
// Arrow Function — lebih pendek dari function biasa
const tambah = (a, b) => a + b;
console.log(tambah(3, 4)); // Output: 7

// Template Literal — gabungkan teks dan variabel dengan rapi
const nama = "Dina";
const umur = 19;
console.log(\`Halo, nama saya \${nama} dan umur saya \${umur} tahun.\`);
// Output: Halo, nama saya Dina dan umur saya 19 tahun.

// Object Destructuring — ambil nilai dari object langsung
const siswa = { nama: "Eko", kelas: "XI", nilai: 88 };
const { nama: namaSiswa, kelas, nilai } = siswa;
console.log(namaSiswa); // Output: Eko

// Array Destructuring
const warna = ["merah", "hijau", "biru"];
const [pertama, kedua] = warna;
console.log(pertama); // Output: merah
\`\`\`

Fitur-fitur ES6+ ini bukan sekadar "gaya penulisan baru" — mereka benar-benar membuat kode lebih **bersih, singkat, dan mudah dibaca**. Hampir semua kode JavaScript modern (termasuk di React, Node.js, dan framework lainnya) ditulis menggunakan sintaks ES6+, jadi menguasai ini adalah keharusan sebelum kamu melangkah ke level berikutnya.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 2,
  },
  {
    id: "js-intermediate-03",
    title: "Array Methods",
    level: "Menengah",
    topic: "Array",
    format: "Teks",
    thumbnail: null,
    content_text: `Dalam dunia nyata, kamu hampir selalu bekerja dengan sekumpulan data — misalnya daftar produk, daftar pengguna, daftar nilai, dan sebagainya. JavaScript menyediakan **method bawaan yang sangat powerful** untuk mengolah data Array, yaitu \`.map()\`, \`.filter()\`, dan \`.reduce()\`. Ketiga method ini adalah inti dari pemrograman modern berbasis data dan wajib dikuasai setiap developer JavaScript.

Berikut penjelasan singkat ketiganya:
- \`.map()\` — mengubah setiap elemen array menjadi sesuatu yang baru dan mengembalikan array baru.
- \`.filter()\` — menyaring elemen array berdasarkan kondisi tertentu dan mengembalikan array baru yang hanya berisi elemen yang lolos saringan.
- \`.reduce()\` — "merangkum" seluruh elemen array menjadi satu nilai tunggal, misalnya menjumlahkan semua angka dalam array.

\`\`\`javascript
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .map() — kalikan setiap angka dengan 2
const dikali2 = angka.map(n => n * 2);
console.log(dikali2);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// .filter() — ambil hanya angka yang genap
const hanyaGenap = angka.filter(n => n % 2 === 0);
console.log(hanyaGenap);
// Output: [2, 4, 6, 8, 10]

// .reduce() — jumlahkan semua angka
const total = angka.reduce((akumulasi, n) => akumulasi + n, 0);
console.log(total);
// Output: 55

// Contoh nyata: hitung total harga belanjaan
const produk = [
  { nama: "Buku", harga: 25000 },
  { nama: "Pulpen", harga: 5000 },
  { nama: "Tas", harga: 150000 }
];
const totalBelanja = produk.reduce((total, item) => total + item.harga, 0);
console.log(\`Total belanja: Rp\${totalBelanja}\`);
// Output: Total belanja: Rp180000
\`\`\`

Ketiga method ini tidak mengubah array asli (*non-mutating*) — mereka selalu mengembalikan array atau nilai baru. Ini adalah konsep penting yang membuat kode lebih **aman dan mudah di-debug**. Biasakan menggunakan method-method ini karena kamu akan menjumpainya hampir di setiap codebase JavaScript yang profesional.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 3,
  },
  {
    id: "js-intermediate-04",
    title: "Asynchronous JS — Callback & Promises",
    level: "Menengah",
    topic: "Async",
    format: "Teks",
    thumbnail: null,
    content_text: `Inilah salah satu konsep yang paling membingungkan tapi paling penting di JavaScript. Secara umum, JavaScript berjalan satu baris per baris dari atas ke bawah (*synchronous*). Tapi ada operasi yang butuh waktu lama — seperti mengambil data dari server atau membaca file besar. Jika JavaScript harus menunggu operasi itu selesai, seluruh website akan *"freeze"*! Inilah mengapa JavaScript memiliki konsep **Asynchronous** — kemampuan untuk menjalankan operasi yang butuh waktu tanpa menghentikan eksekusi kode lainnya.

**Callback** adalah fungsi yang diberikan sebagai argumen ke fungsi lain, dan akan dijalankan setelah proses selesai. Cara ini adalah cara lama dan bisa menjadi sangat rumit jika ditumpuk-tumpuk (fenomena ini disebut *"callback hell"*). **Promise** hadir sebagai solusi yang lebih bersih — sebuah Promise adalah "janji" bahwa suatu operasi akan selesai di masa depan, dan hasilnya bisa ditangani dengan \`.then()\` (jika berhasil) atau \`.catch()\` (jika gagal).

\`\`\`javascript
// Contoh Callback — simulasi proses yang butuh waktu
function prosesData(data, callback) {
  setTimeout(() => {        // Simulasi delay 2 detik
    const hasil = data * 2;
    callback(hasil);
  }, 2000);
}

prosesData(5, (hasil) => {
  console.log("Hasilnya:", hasil); // Muncul setelah 2 detik: Hasilnya: 10
});

// Contoh Promise — cara yang lebih bersih
const ambilData = new Promise((resolve, reject) => {
  const berhasil = true;
  setTimeout(() => {
    if (berhasil) {
      resolve("Data berhasil diambil! ✅");
    } else {
      reject("Gagal mengambil data ❌");
    }
  }, 1500);
});

ambilData
  .then(pesan => console.log(pesan))   // Jika berhasil
  .catch(error => console.log(error)); // Jika gagal
\`\`\`

Pahami bahwa kode setelah Promise tidak menunggu Promise selesai — ia langsung dieksekusi lebih dulu. Inilah inti dari *asynchronous programming*: kode terus berjalan, dan hasilnya "menyusul" ketika sudah siap. Konsep ini adalah dasar wajib sebelum kamu mempelajari \`async/await\` di level Advanced.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 4,
  },
  {
    id: "js-intermediate-05",
    title: "Fetch API",
    level: "Menengah",
    topic: "API",
    format: "Teks",
    thumbnail: null,
    content_text: `Sekarang kamu sudah paham konsep asynchronous — saatnya menggunakannya untuk hal yang benar-benar praktis seperti **mengambil data dari internet**! Di dunia nyata, data seperti informasi cuaca, daftar film, atau data pengguna tersimpan di server dan bisa diakses melalui **API** (*Application Programming Interface*). JavaScript memiliki \`Fetch API\` bawaan untuk mengambil data ini, dan library **Axios** sebagai alternatif yang lebih mudah digunakan.

\`Fetch API\` mengembalikan sebuah Promise — artinya kamu bisa menggunakannya dengan \`.then()\` dan \`.catch()\`. Alur kerjanya:
1. \`fetch(url)\` mengirim permintaan ke server.
2. Server merespons.
3. Kamu ubah responnya ke format JSON dengan \`.json()\`.
4. Gunakan datanya.

Format **JSON** (*JavaScript Object Notation*) adalah format standar pertukaran data di internet, mirip dengan Object di JavaScript.

\`\`\`javascript
// Menggunakan Fetch API
const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
  .then(response => response.json())    // Ubah respons ke format JSON
  .then(data => {
    console.log(\`Nama: \${data.name}\`);
    console.log(\`Email: \${data.email}\`);
  })
  .catch(error => {
    console.log("Terjadi error:", error);
  });

// Contoh dengan Axios (lebih simple, perlu install dulu: npm install axios)
// axios.get(url)
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
\`\`\`

Perbedaan utama \`Fetch\` vs \`Axios\`: \`Fetch\` sudah tersedia secara bawaan di browser tapi perlu dua langkah \`.then()\` untuk mendapat data JSON. \`Axios\` perlu diinstall tapi langsung memberikan data JSON tanpa langkah ekstra, juga otomatis memberikan pesan error yang lebih jelas. Untuk project profesional, banyak developer lebih memilih Axios karena lebih praktis dan fiturnya lebih lengkap.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 5,
  },

  // ─── ADVANCED ─────────────────────────────────────────────
  {
    id: "js-advanced-01",
    title: "Async/Await & Error Handling",
    level: "Mahir",
    topic: "Async",
    format: "Teks",
    thumbnail: null,
    content_text: `Di level Intermediate kamu sudah belajar Promise dengan \`.then()\` dan \`.catch()\`. Sekarang ada cara yang **jauh lebih bersih dan mudah dibaca**: \`async/await\`. Dengan \`async/await\`, kode asynchronous bisa ditulis layaknya kode synchronous biasa — dari atas ke bawah, tanpa perlu merantai banyak \`.then()\`. Ini bukan fitur baru yang berbeda, melainkan "pembungkus" yang lebih elegan untuk Promise.

Cara kerjanya:
- Tambahkan kata \`async\` di depan fungsi untuk menjadikannya fungsi asynchronous.
- Gunakan \`await\` di depan operasi yang butuh waktu (seperti \`fetch\`). \`await\` akan "menunggu" Promise selesai sebelum melanjutkan ke baris berikutnya.
- Untuk menangani error, gunakan blok \`try...catch\` — semua kode yang mungkin gagal diletakkan di dalam \`try\`, dan jika ada error, blok \`catch\` akan menangkapnya agar aplikasi tidak crash.

\`\`\`javascript
async function ambilDataPengguna(userId) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);

    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }

    const pengguna = await response.json();
    console.log(\`Nama: \${pengguna.name}\`);
    console.log(\`Email: \${pengguna.email}\`);
    return pengguna;

  } catch (error) {
    console.error("Terjadi error:", error.message);
    return null;

  } finally {
    // Blok ini SELALU dijalankan, berhasil atau gagal
    console.log("Proses selesai.");
  }
}

ambilDataPengguna(1);
\`\`\`

> **Best Practice:** Selalu gunakan \`try...catch\` di setiap fungsi \`async\` — jangan pernah membiarkan Promise yang gagal tanpa penanganan error. Gunakan juga blok \`finally\` untuk membersihkan resource atau mematikan loading indicator, karena \`finally\` akan selalu berjalan baik ketika sukses maupun ketika error.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 1,
  },
  {
    id: "js-advanced-02",
    title: "State Management",
    level: "Mahir",
    topic: "React",
    format: "Teks",
    thumbnail: null,
    content_text: `Saat aplikasi kamu makin besar — misalnya ada halaman login, halaman profil, keranjang belanja, dan notifikasi — kamu mulai butuh cara untuk **berbagi data antar komponen** tanpa harus "melempar-lempar" data lewat banyak lapisan props. Inilah masalah yang dipecahkan oleh **State Management**. Di React, solusi bawaan yang paling umum adalah **Context API**, yang memungkinkan kamu membuat "gudang data global" yang bisa diakses oleh komponen mana saja.

Arsitektur State Management pada dasarnya terdiri dari tiga bagian:
- **State** — data yang disimpan.
- **Provider** — komponen pembungkus yang menyediakan akses ke data global.
- **Consumer** — komponen yang menggunakan data tersebut.

\`\`\`javascript
// context/AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Cara penggunaan di komponen manapun:
// const { user, login, logout } = useAuth();
\`\`\`

Untuk aplikasi yang sangat besar dengan state yang kompleks, Context API mungkin terasa terbatas — di sinilah library seperti **Redux** atau **Zustand** hadir. Namun untuk sebagian besar aplikasi skala menengah, Context API sudah lebih dari cukup. Prinsipnya tetap sama: pisahkan logika data dari logika tampilan, dan pastikan alur data selalu bisa dilacak dengan jelas.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 2,
  },
  {
    id: "js-advanced-03",
    title: "RESTful API dengan Express.js",
    level: "Mahir",
    topic: "Backend",
    format: "Teks",
    thumbnail: null,
    content_text: `Di level ini, kamu bergerak ke dunia **backend** — sisi server yang tidak dilihat pengguna tapi menjadi "otak" dari aplikasi. **Express.js** adalah framework Node.js yang paling populer untuk membangun server dan API. Sebuah **RESTful API** mengikuti aturan standar: setiap URL merepresentasikan sebuah *resource* (seperti \`/users\`, \`/products\`), dan operasi terhadap resource tersebut ditentukan oleh **HTTP Method** — \`GET\` (baca), \`POST\` (buat baru), \`PUT\` (update), \`DELETE\` (hapus).

\`\`\`javascript
// server.js — Setup dasar Express.js
const express = require("express");
const app = express();

app.use(express.json());

let produk = [
  { id: 1, nama: "Laptop", harga: 8000000 },
  { id: 2, nama: "Mouse", harga: 150000 },
];

// GET /produk — Ambil semua produk
app.get("/produk", (req, res) => {
  res.json({ success: true, data: produk });
});

// GET /produk/:id — Ambil satu produk berdasarkan ID
app.get("/produk/:id", (req, res) => {
  const item = produk.find(p => p.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Produk tidak ditemukan" });
  res.json({ success: true, data: item });
});

// POST /produk — Tambah produk baru
app.post("/produk", (req, res) => {
  const { nama, harga } = req.body;
  const baru = { id: produk.length + 1, nama, harga };
  produk.push(baru);
  res.status(201).json({ success: true, data: baru });
});

app.listen(3000, () => console.log("Server berjalan di port 3000 🚀"));
\`\`\`

Selalu berikan **HTTP Status Code** yang tepat dalam respons: \`200\` untuk sukses, \`201\` untuk data baru berhasil dibuat, \`400\` untuk request yang salah, \`401\` untuk tidak terautentikasi, \`404\` untuk data tidak ditemukan, dan \`500\` untuk error server.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 3,
  },
  {
    id: "js-advanced-04",
    title: "Authentication & Security",
    level: "Mahir",
    topic: "Security",
    format: "Teks",
    thumbnail: null,
    content_text: `Autentikasi adalah proses memverifikasi **siapa** pengguna yang sedang menggunakan aplikasimu. Implementasi autentikasi yang buruk bisa menjadi celah keamanan yang fatal. Standar industri modern menggunakan **JWT (JSON Web Token)** — sebuah "kartu tanda pengenal digital" yang diberikan ke pengguna setelah login berhasil, dan harus disertakan di setiap request selanjutnya sebagai bukti identitas.

Ada beberapa **prinsip keamanan fundamental** yang wajib diterapkan:
1. Jangan pernah menyimpan password dalam bentuk teks biasa — selalu *hash* menggunakan library seperti \`bcrypt\`.
2. Simpan semua konfigurasi sensitif di file \`.env\` dan **jangan pernah** commit file ini ke GitHub.
3. Validasi semua input dari pengguna di sisi server.

\`\`\`javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: "Email tidak terdaftar" });

    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) return res.status(401).json({ message: "Password salah" });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ success: true, token });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
\`\`\`

> **Best Practice Keamanan tambahan:** Gunakan \`HTTPS\`, terapkan *rate limiting* untuk mencegah brute force, gunakan \`CORS\` dengan konfigurasi ketat, dan selalu update dependency secara berkala.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 4,
  },
  {
    id: "js-advanced-05",
    title: "Optimization",
    level: "Mahir",
    topic: "Performance",
    format: "Teks",
    thumbnail: null,
    content_text: `Aplikasi yang lambat adalah aplikasi yang ditinggalkan pengguna. Di level advanced, kamu tidak hanya harus membuat aplikasi yang "berfungsi" — tapi juga yang **cepat dan efisien**. Optimasi mencakup dua area utama: performa frontend dan efisiensi backend.

Di sisi **frontend**, teknik utama optimasi meliputi:
- *Lazy loading* — hanya muat komponen/gambar saat dibutuhkan.
- *Memoization* dengan \`React.memo\` dan \`useMemo\` — hindari render ulang yang tidak perlu.
- *Code splitting* — pecah bundle JavaScript menjadi file kecil.

Di sisi **backend**, fokus pada efisiensi query database — gunakan *indexing*, terapkan *pagination*, dan gunakan *caching*.

\`\`\`javascript
// ❌ BURUK: Ambil semua data sekaligus
app.get("/produk", async (req, res) => {
  const semua = await db.query("SELECT * FROM produk"); // Berbahaya!
  res.json(semua);
});

// ✅ BAIK: Gunakan Pagination
app.get("/produk", async (req, res) => {
  const halaman = parseInt(req.query.page) || 1;
  const perHalaman = parseInt(req.query.limit) || 10;
  const offset = (halaman - 1) * perHalaman;

  const produk = await db.query(
    "SELECT * FROM produk ORDER BY id LIMIT $1 OFFSET $2",
    [perHalaman, offset]
  );

  res.json({
    data: produk.rows,
    halaman,
    totalHalaman: Math.ceil(total / perHalaman)
  });
});

// React Optimization
import { memo, useMemo } from "react";

const KartuProduk = memo(({ produk }) => {
  return <div>{produk.nama} - Rp{produk.harga}</div>;
});

function DaftarProduk({ produk, diskon }) {
  const produkDiskon = useMemo(() => {
    return produk.map(p => ({ ...p, hargaDiskon: p.harga * (1 - diskon) }));
  }, [produk, diskon]);

  return produkDiskon.map(p => <KartuProduk key={p.id} produk={p} />);
}
\`\`\`

Ingat prinsip klasik: **"Don't optimize prematurely"** — jangan menghabiskan waktu mengoptimasi sesuatu yang belum menjadi masalah nyata. Gunakan alat seperti **Chrome DevTools Profiler** dan **Lighthouse** untuk mengidentifikasi *bottleneck* yang sebenarnya.

### 📚 Referensi
- [MDN Web Docs — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools — JavaScript Tutorial](https://www.w3schools.com/js/)`,
    order: 5,
  },
];

// Helper: map level string
export const LEVEL_ORDER = { Pemula: 1, Menengah: 2, Mahir: 3 };
export const LEVEL_NEXT = { Pemula: "Menengah", Menengah: "Mahir", Mahir: null };
export const LEVEL_PREV = { Pemula: null, Menengah: "Pemula", Mahir: "Menengah" };
