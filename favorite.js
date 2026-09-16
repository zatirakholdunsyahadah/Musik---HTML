// Menampilkan semua lagu yang sudah disimpan
function tampilkanFavorite() {

  const container = document.getElementById("favorite-container");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const favorite =
    JSON.parse(localStorage.getItem("favorite")) || [];

  // Jika Favorite masih kosong
  if (favorite.length === 0) {

    const pesan = document.createElement("p");

    pesan.textContent = "Belum ada lagu favorite.";
    pesan.className = "favorite-empty";

    container.appendChild(pesan);

    return;
  }

  // Menampilkan setiap lagu
  favorite.forEach(function (musik) {

    const card = document.createElement("article");
    card.className = "favorite-card";

    // Gambar lagu
    const image = document.createElement("img");

    image.src = musik.image;
    image.alt = musik.title;

    // Judul lagu
    const title = document.createElement("h3");

    title.textContent = musik.title;

    // Artist
    const artist = document.createElement("p");

    artist.textContent = musik.artist;

    // Tombol hapus
    const button = document.createElement("button");

    button.textContent = "Hapus";
    button.className = "favorite-button";

    button.addEventListener("click", function () {

      // Mengambil kembali data Favorite
      let dataFavorite =
        JSON.parse(localStorage.getItem("favorite")) || [];

      // Menghapus lagu yang dipilih
      dataFavorite = dataFavorite.filter(function (item) {

        return !(
          item.title === musik.title &&
          item.artist === musik.artist
        );

      });

      // Menyimpan data Favorite yang baru
      localStorage.setItem(
        "favorite",
        JSON.stringify(dataFavorite)
      );

      // Menampilkan ulang daftar Favorite
      tampilkanFavorite();

    });

    // Memasukkan elemen ke dalam card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(button);

    // Memasukkan card ke container
    container.appendChild(card);

  });
}

// Menampilkan Favorite ketika halaman dibuka
tampilkanFavorite();