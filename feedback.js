// Mengambil elemen dari HTML
const name = document.getElementById("feedback-name");
const email = document.getElementById("feedback-email");
const message = document.getElementById("feedback-message");
const button = document.getElementById("feedback-button");
const success = document.getElementById("feedback-success");
const list = document.getElementById("feedback-list");

// Menyimpan semua feedback
let feedback = [];

// Mengecek nama hanya berisi huruf dan spasi
function cekNama(nama) {

  const huruf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  for (let i = 0; i < nama.length; i++) {

    if (!huruf.includes(nama[i])) {
      return false;
    }

  }

  return true;
}

// Mengecek email
function cekEmail(email) {

  const gmail = email.includes("@gmail.com");
  const spasi = email.includes(" ");

  return gmail && spasi === false;
}

// Menampilkan feedback
function tampilkanFeedback() {

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  if (feedback.length === 0) {
    return;
  }

  feedback.forEach(function (data) {

    const card = document.createElement("div");
    card.className = "feedback-card";

    const nama = document.createElement("h3");
    nama.textContent = data.nama;

    const emailUser = document.createElement("p");
    emailUser.textContent = data.email;

    const pesan = document.createElement("p");
    pesan.textContent = data.pesan;

    card.appendChild(nama);
    card.appendChild(emailUser);
    card.appendChild(pesan);

    list.appendChild(card);

  });
}

// Tombol kirim feedback
button.addEventListener("click", function () {

  const nama = name.value;
  const emailUser = email.value;
  const pesan = message.value;

  // Mengecek apakah semua input sudah diisi
  if (
    nama === "" ||
    emailUser === "" ||
    pesan === ""
  ) {

    alert("Semua data harus diisi.");
    return;
  }

  // Mengecek nama
  if (cekNama(nama) === false) {

    alert("Nama hanya boleh menggunakan huruf dan spasi.");
    return;
  }

  // Nama maksimal 30 karakter
  if (nama.length > 30) {

    alert("Nama maksimal 30 karakter.");
    return;
  }

  // Mengecek email
  if (cekEmail(emailUser) === false) {

    alert("Email harus menggunakan Gmail dan tidak boleh ada spasi.");
    return;
  }

  // Membuat data feedback
  const data = {
    nama: nama,
    email: emailUser,
    pesan: pesan
  };

  // Menambahkan feedback ke array
  feedback.push(data);

  // Mengosongkan input
  name.value = "";
  email.value = "";
  message.value = "";

  // Menampilkan pesan berhasil
  success.textContent = "Feedback berhasil dikirim.";
  success.className = "feedback-success";

  // Menampilkan feedback
  tampilkanFeedback();

});