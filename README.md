# UTS Praktikum Web 2
Nama : Ali Gunawan | Kelas : I241C | NIM : 312410400

## Berikut Hasil Eksperimen

### Step 1 — Tampilan Login Awal

<img width="1919" height="1067" alt="Screenshot 2026-04-29 195040" src="https://github.com/user-attachments/assets/5b375195-b7d1-4c49-8146-cb8f1ed3b736" />

Pada tahap awal, aplikasi menampilkan halaman login sederhana yang berfungsi sebagai pintu masuk ke dalam sistem chat. Pada tampilan ini, pengguna diminta untuk memasukkan username sebelum dapat terhubung ke server. Field input yang tersedia memungkinkan pengguna untuk mengetikkan nama yang akan digunakan sebagai identitas selama sesi chat berlangsung. Setelah username diisi, pengguna dapat menekan tombol “Masuk” untuk melanjutkan ke tahap berikutnya. Pada saat tombol ditekan, sistem akan mulai membuat koneksi ke server menggunakan WebSocket. Jika koneksi berhasil, pengguna akan langsung diarahkan ke halaman utama chat tanpa perlu reload halaman. Tahap ini menunjukkan proses awal bagaimana client mulai berkomunikasi dengan server.

### Step 2 — Tampilan Chat Dua Pengguna (Real-Time)

<img width="1919" height="1064" alt="Screenshot 2026-04-29 194954" src="https://github.com/user-attachments/assets/b4e76745-3b4c-4fb1-bc8c-a5f606703bbb" />

Pada tahap kedua, dilakukan pengujian dengan membuka dua jendela browser secara bersamaan untuk mensimulasikan dua pengguna yang berbeda. Kedua tampilan ini diletakkan berdampingan agar proses komunikasi dapat diamati secara langsung. Masing-masing jendela menggunakan username yang berbeda, sehingga dapat terlihat interaksi antar pengguna secara real-time. Ketika salah satu pengguna mengirim pesan, pesan tersebut langsung muncul di kedua layar hampir tanpa jeda.

Pada tampilan ini juga terlihat beberapa hal penting:

- Pesan dari pengguna sendiri ditampilkan di sisi kanan
- Pesan dari pengguna lain ditampilkan di sisi kiri
- Setiap pesan memiliki timestamp (waktu kirim)
- Terdapat notifikasi ketika pengguna lain bergabung ke dalam chat

Dengan tampilan dua sisi ini, dapat dilihat dengan jelas bahwa setiap aktivitas yang dilakukan oleh satu pengguna langsung diterima oleh pengguna lainnya. Tidak ada proses refresh halaman, yang berarti komunikasi berjalan secara terus-menerus melalui koneksi WebSocket yang aktif.

### Kesimpulan
Dari eksperimen yang dilakukan, dapat disimpulkan bahwa WebSocket mampu menangani komunikasi real-time dengan baik. Pesan yang dikirim oleh satu pengguna dapat langsung diterima oleh pengguna lain tanpa perlu refresh halaman. Dengan koneksi yang tetap terbuka, proses komunikasi menjadi lebih cepat dan efisien dibandingkan HTTP biasa. Oleh karena itu, WebSocket sangat cocok digunakan untuk aplikasi seperti chat yang membutuhkan respon langsung.
