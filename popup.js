// popup.js

// Fungsi untuk menampilkan pop-up
function showPopup() {
    // Membuat elemen div untuk pop-up
    var popup = document.createElement("div");
    popup.style.backgroundColor = "#f8f8f8";
    popup.style.border = "1px solid #ccc";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.zIndex = "1000";

    // Isi pop-up
    popup.innerHTML = "<p>Ini adalah pop-up sederhana!</p>";

    // Menambahkan pop-up ke dalam body dokumen
    document.body.appendChild(popup);

    // Menutup pop-up setelah beberapa detik (contoh: 3 detik)
    setTimeout(function () {
        document.body.removeChild(popup);
    }, 3000);
}
