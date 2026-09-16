Mini Projek Kelola Penjualan Pakaian (C++)

Aplikasi berbasis console (CLI) yang dibuat menggunakan bahasa pemrograman C++ untuk membantu mengelola sistem penjualan pakaian pada toko Nabonek Fashion. Aplikasi ini menyediakan fitur untuk menambahkan data pakaian baru, melakukan transaksi pembelian dengan perhitungan diskon, mengelola pembayaran tunai, serta melihat rekapitulasi laporan pendapatan penjualan.

Fitur Utama
Menu Utama
1. Tambah Pakaian Baru: Memungkinkan admin untuk menambahkan data pakaian baru berupa nama pakaian, harga, stok awal, dan kategori pakaian seperti Baju, Celana, Jaket, atau Kaos.
2. Menu Pembelian: Digunakan untuk melakukan proses transaksi pembelian pakaian.
Menampilkan daftar kategori dan item pakaian beserta harga dan stok yang tersedia.
Sistem Diskon Berjenjang: Perhitungan potongan harga berdasarkan jumlah pembelian, yaitu Qty ≥ 3 mendapatkan diskon 50%, Qty ≥ 5 mendapatkan diskon 70%, dan Qty ≥ 10 mendapatkan diskon 80%.
Validasi Pembayaran Tunai: Sistem memeriksa kecukupan uang pembayaran. Jika uang yang diberikan kurang, pengguna diminta melakukan pembayaran kembali sampai jumlahnya mencukupi.
Perhitungan Kembalian: Sistem secara otomatis menghitung jumlah uang kembalian setelah pembayaran mencukupi.
Struk Pembelian: Menampilkan rincian transaksi setelah proses pembayaran berhasil.
3. Laporan Penjualan: Menampilkan riwayat transaksi yang telah berhasil dilakukan beserta total pendapatan atau grand total penjualan.
Alur Sistem
Program Dimulai: Pengguna menjalankan aplikasi melalui console dan sistem menampilkan menu utama.
Memilih Menu: Pengguna memilih proses yang ingin dilakukan, yaitu menambah pakaian, melakukan pembelian, atau melihat laporan penjualan.
Tambah Pakaian: Jika memilih menu tambah pakaian, admin memasukkan nama pakaian, kategori, harga, dan jumlah stok. Data kemudian disimpan ke dalam sistem dan dapat digunakan untuk transaksi.
Memilih Menu Pembelian: Pengguna memilih kategori pakaian kemudian memilih item yang ingin dibeli berdasarkan daftar pakaian yang tersedia.
Memasukkan Jumlah Pembelian: Pengguna menentukan jumlah pakaian yang akan dibeli. Sistem melakukan pengecekan terhadap ketersediaan stok.
Perhitungan Harga dan Diskon: Sistem menghitung total harga berdasarkan jumlah barang yang dibeli. Jika jumlah pembelian memenuhi ketentuan, sistem memberikan diskon sesuai dengan tingkatan yang telah ditentukan.
Pembayaran Tunai: Pengguna memasukkan jumlah uang yang digunakan untuk membayar. Sistem melakukan validasi apakah uang tersebut mencukupi total pembayaran.
Validasi Pembayaran: Jika uang kurang, sistem meminta pengguna memasukkan pembayaran kembali. Jika uang mencukupi, sistem melanjutkan ke proses berikutnya.
Menghitung Kembalian: Apabila terdapat kelebihan pembayaran, sistem menghitung dan menampilkan jumlah uang kembalian.
Memperbarui Stok: Setelah transaksi berhasil, jumlah stok pakaian akan dikurangi sesuai dengan jumlah barang yang dibeli.
Mencetak Struk: Sistem menampilkan rincian transaksi yang berisi informasi pakaian, jumlah pembelian, harga, diskon, total pembayaran, uang pembayaran, dan kembalian.
Menyimpan Transaksi: Data transaksi yang berhasil akan dicatat sehingga dapat digunakan pada menu laporan penjualan.
Laporan Penjualan: Admin dapat memilih menu laporan untuk melihat riwayat transaksi serta mengetahui total pendapatan penjualan.
Program Selesai: Setelah selesai menggunakan sistem, pengguna dapat memilih keluar dari aplikasi.
