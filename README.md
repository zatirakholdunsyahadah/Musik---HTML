ZATIFY — Find Your Vibe, Play Your Music 🎧

ZATIFY atau “Find Your Vibe, Play Your Music” merupakan website musik yang dibuat untuk membantu pengguna mencari, menemukan, dan mendengarkan berbagai lagu secara lebih mudah dan interaktif. Website ini dikembangkan menggunakan HTML, CSS, dan JavaScript dengan memanfaatkan API untuk mengambil dan menampilkan data musik secara dinamis. ZATIFY memiliki tampilan yang dibuat dengan konsep modern dan menarik sehingga pengguna dapat menjelajahi berbagai musik sesuai dengan selera mereka. Website ini menyediakan beberapa halaman utama seperti Home, Music, Search, Favorite, dan Feedback. Pengguna dapat melihat daftar musik, mencari lagu berdasarkan judul atau artis, memutar lagu, serta menyimpan lagu yang disukai ke dalam daftar favorit.

Fitur Utama
Menu Utama
1. Home: Menampilkan halaman utama ZATIFY yang berisi informasi dan tampilan awal website musik serta mengarahkan pengguna ke berbagai fitur yang tersedia.
2. Music: Menampilkan daftar musik yang tersedia lengkap dengan informasi seperti judul lagu, nama artis, album, dan fitur untuk memutar musik.
3. Search: Memungkinkan pengguna mencari musik berdasarkan judul lagu atau nama artis sehingga pengguna dapat menemukan lagu yang diinginkan dengan lebih cepat.
4. Favorite: Digunakan untuk menyimpan dan menampilkan daftar lagu yang disukai oleh pengguna. Data lagu favorit disimpan menggunakan localStorage sehingga tetap tersedia pada browser.
5. Feedback: Menyediakan halaman bagi pengguna untuk memberikan pendapat, saran, maupun masukan mengenai website ZATIFY.
6. Play Music: Pengguna dapat menekan tombol play pada lagu yang dipilih untuk mulai mendengarkan musik melalui fitur pemutar yang tersedia.
7. API Music: Data musik diperoleh dari API sehingga daftar musik dapat ditampilkan secara dinamis tanpa harus menuliskan seluruh data lagu secara manual di dalam HTML.
8. Local Storage: Digunakan untuk menyimpan data musik yang ditambahkan ke dalam daftar favorit pada browser pengguna.
Alur Sistem
Website Dimulai: Pengguna membuka website ZATIFY dan sistem menampilkan halaman Home sebagai halaman awal.
Menampilkan Data Musik: Website mengambil data musik dari API menggunakan JavaScript kemudian mengolah data tersebut dalam format JSON.
Menampilkan Daftar Musik: Data yang berhasil diperoleh dari API ditampilkan ke dalam halaman Music dalam bentuk daftar atau card musik.
Memilih Musik: Pengguna dapat memilih salah satu lagu yang tersedia untuk melihat informasi musik dan menggunakan fitur play.
Memutar Musik: Pengguna menekan tombol Play pada lagu yang dipilih sehingga musik dapat mulai diputar melalui fitur yang tersedia pada website.
Mencari Musik: Jika pengguna ingin menemukan lagu tertentu, pengguna dapat masuk ke menu Search kemudian memasukkan judul lagu atau nama artis.
Proses Pencarian: JavaScript akan memproses kata kunci pencarian dan melakukan penyaringan terhadap data musik yang tersedia.
Menampilkan Hasil: Sistem menampilkan lagu yang sesuai dengan kata kunci yang dimasukkan oleh pengguna.
Menambahkan Favorite: Pengguna dapat memilih lagu yang disukai dan menambahkannya ke daftar Favorite.
Menyimpan Favorite: Data lagu yang dipilih disimpan menggunakan localStorage pada browser sehingga data favorit dapat digunakan kembali ketika pengguna membuka halaman Favorite.
Menampilkan Favorite: Ketika pengguna membuka menu Favorite, sistem mengambil data dari localStorage kemudian menampilkan kembali lagu-lagu yang telah disimpan.
Memberikan Feedback: Pengguna dapat membuka menu Feedback untuk memberikan saran, pendapat, atau masukan mengenai website.
Interaksi Berlangsung: Seluruh interaksi seperti pencarian, pemutaran musik, penambahan favorite, dan perpindahan halaman diproses menggunakan JavaScript dan DOM manipulation.
Sistem Selesai: Pengguna dapat berpi
