const API = "https://pane-api-phi.vercel.app/musics.json";

// Mengecek apakah lagu sudah ada di Favorite
function cekFavorite(musik) {
  const favorite = JSON.parse(localStorage.getItem("favorite")) || [];

  for (let i = 0; i < favorite.length; i++) {
    if (
      favorite[i].title === musik.title &&
      favorite[i].artist === musik.artist
    ) {
      return true;
    }
  }

  return false;
}

// Mengambil data musik dari API
fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    const container = document.getElementById("index-container");

    // Mengambil 10 lagu pertama untuk Featured Music
    data.slice(0, 10).forEach(function (musik) {

      // Membuat card
      const card = document.createElement("article");
      card.className = "index-card";

      // Membuat gambar
      const image = document.createElement("img");
      image.src = musik.image;
      image.alt = musik.title;

      // Membuat judul lagu
      const title = document.createElement("h3");
      title.textContent = musik.title;

      // Membuat nama artist
      const artist = document.createElement("p");
      artist.textContent = musik.artist;

      // Membuat tombol Favorite
      const favorite = document.createElement("span");
      favorite.textContent = "♥";
      favorite.className = "index-favorite";

      // Mengecek Favorite
      if (cekFavorite(musik)) {
        favorite.classList.add("active");
      }

      // Ketika tombol Favorite diklik
      favorite.addEventListener("click", function () {

        let dataFavorite =
          JSON.parse(localStorage.getItem("favorite")) || [];

        if (cekFavorite(musik)) {
          alert("Lagu ini sudah ada di Favorite");
          return;
        }

        dataFavorite.push(musik);

        localStorage.setItem(
          "favorite",
          JSON.stringify(dataFavorite)
        );

        favorite.classList.add("active");

        alert("Berhasil menambahkan lagu ke Favorite");
      });

      // Memasukkan elemen ke dalam card
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(artist);
      card.appendChild(favorite);

      // Memasukkan card ke dalam container
      container.appendChild(card);
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });