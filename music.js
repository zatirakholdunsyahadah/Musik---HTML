const API = "https://pane-api-phi.vercel.app/musics.json";

let daftarMusic = [];

const container = document.getElementById("daftar-container");
const sort = document.getElementById("daftar-sort");

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

// Menampilkan daftar musik
function tampilkanMusic(data) {

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  data.forEach(function (musik) {

    const card = document.createElement("article");
    card.className = "daftar-card";

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
    play.className = "daftar-play";

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
    favorite.className = "daftar-favorite";

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

    daftarMusic = data;

    tampilkanMusic(daftarMusic);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

// Mengurutkan musik
sort.addEventListener("change", function () {

  if (sort.value === "az") {

    daftarMusic.sort(function (a, b) {

      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }

      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }

      return 0;
    });

  } else if (sort.value === "za") {

    daftarMusic.sort(function (a, b) {

      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      }

      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }

      return 0;
    });
  }

  tampilkanMusic(daftarMusic);
});

// Tombol menutup player
const close = document.getElementById("player-close");

close.addEventListener("click", function () {

  const modal = document.getElementById("player-modal");
  const player = document.getElementById("player");

  player.src = "";
  modal.style.display = "none";
});