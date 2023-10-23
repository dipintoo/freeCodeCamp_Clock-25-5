# [4/5] Clock 25 + 5

**SELAMAT!** kamu sudah berhasil menyelesaikan project ketiga [Drum Mechine](https://github.com/dipintoo/freeCodeCamp_Markdown-Previewer). Sekarang kita lanjut ke project keempat dari lima project yang harus kamu selesaikan dan lolos test untuk bisa meraih sertifikasi [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/) dari freeCodeCamp!

## Teknologi yang digunakan

Sebenarnya kamu bebas menggunakan kombinasi manapun dari HTML, JavaScript, CSS, Bootstrap, SASS, React, and jQuery. Dalam project [Clock 25 + 5](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock) ini, saya coba kombinasi HTML, CSS dan React (JavaScript) 👍🏻.

## User Stories:

1. Saya dapat melihat elemen dengan ID `break-label` yang berisi string (misalnya, "Break Length").
2. Saya dapat melihat elemen dengan ID `session-label` yang berisi string (misalnya, "Session Length").
3. Saya dapat melihat dua elemen yang dapat diklik dengan ID `break-decrement` dan `session-decrement`
4. Saya dapat melihat dua elemen yang dapat diklik dengan ID `break-increment` dan `session-increment`
5. Saya dapat melihat elemen dengan ID `break-length`, yang secara default menampilkan nilai 5.
6. Saya dapat melihat elemen dengan ID `session-length`, yang secara default menampilkan nilai 25.
7. Saya dapat melihat elemen dengan ID `timer-label`, yang berisi string yang menunjukkan sesi sedang berjalan misalnya `Session`
8. Saya dapat melihat elemen dengan ID `time-left`. CATATAN: Terjeda atau berjalan, nilai dalam bidang ini selalu harus ditampilkan dalam format mm:ss yaitu 25:00.
9. Saya dapat melihat elemen yang dapat diklik dengan ID `start_stop`
10. Saya dapat melihat elemen yang dapat diklik dengan ID `reset`
11. Saat saya mengklik elemen dengan ID `reset`, timer yang sedang berjalan harus dihentikan, nilai dalam `break-length` harus kembali menjadi 5, nilai dalam `session-length` harus kembali menjadi 25, dan elemen dengan ID `time-left` harus diatur ulang ke keadaan defaultnya.
12. Saat saya mengklik elemen dengan ID `break-decrement`, nilai dalam `break-length` berkurang sebesar 1, dan saya dapat melihat nilai yang diperbarui.
13. Saat saya mengklik elemen dengan ID `break-increment`, nilai dalam `break-length` bertambah sebesar 1, dan saya dapat melihat nilai yang diperbarui.
14. Saat saya mengklik elemen dengan ID `session-decrement`, nilai dalam `session-length` berkurang sebesar 1, dan saya dapat melihat nilai yang diperbarui.
15. Saat saya mengklik elemen dengan ID `session-increment`, nilai dalam `session-length` bertambah sebesar 1, dan saya dapat melihat nilai yang diperbarui.
16. Saya tidak boleh mengatur panjang sesi istirahat ke <= 0.
17. Saya tidak boleh mengatur panjang sesi atau istirahat > 60.
18. Saat pertama kali saya mengklik elemen dengan ID `start_stop`, timer harus mulai berjalan dari nilai yang saat ini ditampilkan dalam `session-length`, bahkan jika nilainya telah ditambahkan atau dikurangkan dari nilai awal 25.
19. Jika timer sedang berjalan, elemen dengan ID `time-left` harus menampilkan waktu yang tersisa dalam format mm:ss (berkurang sebesar 1 dan memperbarui tampilan setiap 1000ms).
20. Jika timer sedang berjalan dan saya mengklik elemen dengan ID `start_stop`, hitung mundur harus dijeda.
21. Jika timer sedang dijeda dan saya mengklik elemen dengan ID `start_stop,` hitung mundur harus melanjutkan dari titik di mana dijeda.
22. Saat hitungan mundur sesi mencapai nol (CATATAN: timer HARUS mencapai 00:00), dan hitungan mundur baru dimulai, elemen dengan ID `timer-label` harus menampilkan string yang mengindikasikan jeda telah dimulai.
23. Saat hitungan mundur sesi mencapai nol (CATATAN: timer HARUS mencapai 00:00), hitungan mundur istirahat baru harus dimulai, menghitung mundur dari nilai yang saat ini ditampilkan dalam elemen `break-length`
24. Saat hitungan mundur istirahat mencapai nol (CATATAN: timer HARUS mencapai 00:00), dan hitungan mundur baru dimulai, elemen dengan ID `timer-label` harus menampilkan string yang mengindikasikan sesi telah dimulai.
25. Saat hitungan mundur istirahat mencapai nol (CATATAN: timer HARUS mencapai 00:00), hitungan mundur sesi baru harus dimulai, menghitung mundur dari nilai yang saat ini ditampilkan dalam elemen `session-length`
26. Saat hitungan mundur mencapai nol (CATATAN: timer HARUS mencapai 00:00), suara yang mengindikasikan waktu habis harus diputar. Ini harus menggunakan tag audio HTML5 dan memiliki ID `beep`
27. Elemen audio dengan ID `beep` harus memiliki durasi 1 detik atau lebih.
28. Elemen audio dengan ID `beep` harus dihentikan dan diulang dari awal saat elemen dengan ID `reset` diklik.

## Coding dan Testing

Kamu bisa ngoding langsung menggunakan template [codepen](https://codepen.io/pen?template=MJjpwO). Di dalamnya sudah include aplikasi testing dari freeCodeCamp. Jangan lupa **Select Test Suite** sesuai dengan project mana yang kamu kerjakan saat ini. 

## Submit

Setelah lolos semua test, kamu bisa menggunakan Url dari codepen untuk mengisi [**Solution Link**](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock) sebagai jawaban dari project ini.

**Selamat mengembangkan Clock 25 + 5** ⏲️🎧

[***Next Project - [5/5] React Calculator >>***](https://github.com/dipintoo/freeCodeCamp_React-Calculator)
