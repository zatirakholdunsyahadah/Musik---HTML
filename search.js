const API = "https://pane-api-phi.vercel.app/musics.json";

let searchMusic = [];

const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const container = document.getElementById("search-container");

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

// Menampilkan hasil pencarian
function tampilkanSearch(data) {

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (data.length === 0) {

    const pesan = document.createElement("p");

    pesan.textContent = "Musik tidak ditemukan.";
    pesan.className = "search-empty";

    container.appendChild(pesan);

    return;
  }

  data.forEach(function (musik) {

    const card = document.createElement("article");
    card.className = "search-card";

    const image = document.createElement("img");
    image.src = musik.image;
    image.alt = musik.title;

    const title = document.createElement("h3");
    title.textContent = musik.title;

    const artist = document.createElement("p");
    artist.textContent = musik.artist;

    // Tombol Play
    const play = document.createElement("button");

    play.textContent = "▶ Play";
    play.className = "search-play";

    play.addEventListener("click", function () {

      const modal = document.getElementById("player-modal");
      const player = document.getElementById("player");
      const playerTitle = document.getElementById("player-title");

      playerTitle.textContent = musik.title;
      player.src = musik.embed;

      modal.style.display = "flex";
    });

    // Tombol Favorite
    const favorite = document.createElement("span");

    favorite.textContent = "♥";
    favorite.className = "search-favorite";

    if (cekFavorite(musik)) {
      favorite.classList.add("active");
    }

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

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(play);
    card.appendChild(favorite);

    container.appendChild(card);
  });
}

// Mengambil data musik dari API
fetch(API)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    searchMusic = data;

  })
  .catch(function (error) {
    console.error("Error:", error);
  });

// Tombol Search
button.addEventListener("click", function () {

  const keyword = input.value.toLowerCase();

  const hasil = searchMusic.filter(function (musik) {

    return (
      musik.title.toLowerCase().includes(keyword) ||
      musik.artist.toLowerCase().includes(keyword)
    );

  });

  tampilkanSearch(hasil);
});

// Search menggunakan tombol Enter
input.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    button.click();
  }

});

// Tombol menutup player
const close = document.getElementById("player-close");

close.addEventListener("click", function () {

  const modal = document.getElementById("player-modal");
  const player = document.getElementById("player");

  player.src = "";
  modal.style.display = "none";

});