# Mission 5: Protect the Social Network 🛡️
### Project: The Secure Guard (React Native)

Aplikasi mobile berbasis React Native yang difokuskan pada sistem autentikasi yang aman dan ramah pengguna. Project ini mencakup pembuatan formulir Login, Registrasi dengan validasi ketat, dan navigasi antar layar.

---

## 🚀 Fitur Utama

1.  **Screen 1 (Login):** Form input Email & Password dilengkapi dengan tombol navigasi ke halaman pendaftaran.
2.  **Screen 2 (Register):** Form pendaftaran lengkap (Nama, Email, Phone, Pass, Confirm Pass) dengan logika keamanan tingkat lanjut.
3.  **Screen 3 (Home):** Pesan selamat datang (*Welcome Message*) dinamis yang menampilkan nama pengguna setelah berhasil masuk/daftar.

---

## 🔒 Security Logic (Logika Keamanan)

Aplikasi ini mengimplementasikan beberapa lapisan keamanan data dan kenyamanan antarmuka:

-   **Validasi Email (RegEx):** Memastikan format email yang dimasukkan pengguna valid (menggunakan Regular Expression).
-   **Validasi Phone:** Memastikan input nomor telepon hanya berupa angka dan memiliki panjang minimal 10 digit.
-   **Match Check:** Memastikan *Password* dan *Confirm Password* identik sebelum data dikirim.
-   **Keyboard Handling:** Menggunakan `KeyboardAvoidingView` untuk memastikan tombol "Submit" atau "Login" tidak tertutup oleh keyboard saat pengguna sedang mengetik.

---

## 📸 Preview Program

> **Catatan:** Masukkan GIF atau screenshot aplikasi kamu di bawah ini agar dosen bisa melihat program berjalan tanpa harus melakukan instalasi.

![App Greetings]<video src="/./preview.mp4" controls width="100%">
</video>

---

## 🔗 Tautan Penting

-   **Expo Snack:** [Klik di sini untuk mencoba langsung di Browser](https://snack.expo.dev/@marchel19/pertemuan5)

---

## 🛠️ Teknologi yang Digunakan

-   React Native
-   Expo Managed Workflow
-   React Navigation (Stack Navigator)
-   JavaScript (ES6+)

---

*"A good dev builds a feature. A great dev builds a secure experience."* 💪🔥
