// Nonaktifkan pemulihan posisi scroll otomatis browser
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Jika URL mengandung hash (#), bersihkan hash tanpa reload halaman
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }

  // Langsung reset posisi layar ke paling atas sebelum konten selesai dirender
  window.scrollTo(0, 0);

// Mengambil elemen tombol berdasarkan ID
const btnBackToTop = document.getElementById("btnBackToTop");

// Menampilkan tombol hanya jika halaman di-scroll ke bawah sejauh 300px
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
};

// Fungsi untuk menggulir halaman kembali ke paling atas secara halus saat tombol diklik
btnBackToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Memastikan semua format math bekerja setelah HTML dimuat
window.addEventListener('load', function () {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch(function (err) {
      console.log('MathJax error: ' + err.message);
    });
  }
});
