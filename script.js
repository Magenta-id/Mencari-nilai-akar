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

// Js kuis
window.initAkarQuiz = function() {
    // Pengaman awal jika kontainer kuis belum termuat
    const stepChapter = document.getElementById('step-chapter');
    if (!stepChapter) return;

    // Bank Soal Lengkap: Setiap Bab & Level memiliki 5 soal penuh
    const bankSoal = {
        bulat: {
            1: [
                { level: "Level 1", question: "Berapakah hasil dari akar kuadrat sempurna dari $\\sqrt{529}$?", options: ["21", "23", "27", "29"], answer: 1, explanation: "Pecah $5 \\mid 29$ (belakang 9). Kuadrat terdekat untuk 5 adalah 2 ($2^2=4$). Jawaban yang tepat adalah 23." },
                { level: "Level 1", question: "Berapakah nilai dari $\\sqrt{576}$?", options: ["24", "26", "16", "34"], answer: 0, explanation: "Pecah $5 \\mid 76$ (belakang 6, kemungkinan 4 atau 6). Kuadrat terdekat untuk 5 adalah 2. Hasil yang tepat adalah 24." },
                { level: "Level 1", question: "Berapakah hasil dari $\\sqrt{676}$?", options: ["24", "26", "34", "36"], answer: 1, explanation: "Pecah $6 \\mid 76$ (belakang 6). Kuadrat terdekat untuk 6 adalah 2 ($2^2=4$). Kandidat 24 atau 26. Cek $26^2 = 676$." },
                { level: "Level 1", question: "Berapakah nilai dari $\\sqrt{729}$?", options: ["23", "27", "37", "21"], answer: 1, explanation: "Pecah $7 \\mid 29$ (belakang 9). Kuadrat terdekat untuk 7 adalah 2. Hasil yang tepat adalah 27." },
                { level: "Level 1", question: "Berapakah akar kuadrat dari $\\sqrt{784}$?", options: ["26", "28", "32", "38"], answer: 1, explanation: "Pecah $7 \\mid 84$ (belakang 4). Kuadrat terdekat untuk 7 adalah 2 ($2^2=4$). Hasil yang tepat adalah 28." }
            ],
            2: [
                { level: "Level 2", question: "Berapakah hasil dari $\\sqrt{961}$?", options: ["31", "33", "37", "39"], answer: 0, explanation: "Pecah $9 \\mid 61$ (belakang 1). Kuadrat terdekat untuk 9 adalah 3 ($3^2=9$). Cek $31^2 = 961$." },
                { level: "Level 2", question: "Berapakah nilai dari $\\sqrt{1024}$?", options: ["32", "34", "36", "38"], answer: 0, explanation: "Pecah $10 \\mid 24$ (belakang 4). Kuadrat terdekat untuk 10 adalah 3 ($3^2=9$). Hasil yang tepat adalah 32." },
                { level: "Level 2", question: "Berapakah hasil dari $\\sqrt{1156}$?", options: ["32", "34", "36", "38"], answer: 1, explanation: "Pecah $11 \\mid 56$ (belakang 6). Kuadrat terdekat untuk 11 adalah 3 ($3^2=9$). Hasil yang tepat adalah 34." },
                { level: "Level 2", question: "Berapakah nilai dari $\\sqrt{1296}$?", options: ["34", "36", "44", "46"], answer: 1, explanation: "Pecah $12 \\mid 96$ (belakang 6). Kuadrat terdekat untuk 12 adalah 3 ($3^2=9$). Hasilnya adalah 36." },
                { level: "Level 2", question: "Berapakah akar kuadrat dari $\\sqrt{1369}$?", options: ["33", "37", "39", "43"], answer: 1, explanation: "Pecah $13 \\mid 69$ (belakang 9). Kuadrat terdekat untuk 13 adalah 3 ($3^2=9$). Hasil yang tepat adalah 37." }
            ],
            3: [
                { level: "Level 3", question: "Berapakah hasil dari $\\sqrt{1521}$?", options: ["33", "37", "39", "41"], answer: 2, explanation: "Pecah $15 \\mid 21$ (belakang 1). Kuadrat terdekat untuk 15 adalah 3 ($3^2=9$). Hasil yang tepat adalah 39." },
                { level: "Level 3", question: "Berapakah nilai dari $\\sqrt{1681}$?", options: ["39", "41", "43", "49"], answer: 1, explanation: "Pecah $16 \\mid 81$ (belakang 1). Kuadrat terdekat untuk 16 adalah 4 ($4^2=16$). Hasil yang tepat adalah 41." },
                { level: "Level 3", question: "Berapakah hasil dari $\\sqrt{1849}$?", options: ["41", "43", "47", "49"], answer: 1, explanation: "Pecah $18 \\mid 49$ (belakang 9). Kuadrat terdekat untuk 18 adalah 4 ($4^2=16$). Hasil yang tepat adalah 43." },
                { level: "Level 3", question: "Berapakah nilai dari $\\sqrt{2025}$?", options: ["43", "45", "47", "55"], answer: 1, explanation: "Pecah $20 \\mid 25$ (belakang 5). Kuadrat terdekat untuk 20 adalah 4 ($4^2=16$). Hasil yang tepat adalah 45." },
                { level: "Level 3", question: "Berapakah akar kuadrat dari $\\sqrt{2209}$?", options: ["43", "47", "49", "51"], answer: 1, explanation: "Pecah $22 \\mid 09$ (belakang 9). Kuadrat terdekat untuk 22 adalah 4 ($4^2=16$). Hasil yang tepat adalah 47." }
            ],
            4: [
                { level: "Level 4", question: "Berapakah hasil dari $\\sqrt{2809}$?", options: ["51", "53", "57", "59"], answer: 1, explanation: "Pecah $28 \\mid 09$ (belakang 9). Kuadrat terdekat untuk 28 adalah 5 ($5^2=25$). Hasil yang tepat adalah 53." },
                { level: "Level 4", question: "Berapakah nilai dari $\\sqrt{3364}$?", options: ["52", "58", "62", "68"], answer: 1, explanation: "Pecah $33 \\mid 64$ (belakang 4). Kuadrat terdekat untuk 33 adalah 5 ($5^2=25$). Hasilnya adalah 58." },
                { level: "Level 4", question: "Berapakah hasil dari $\\sqrt{3969}$?", options: ["61", "63", "67", "69"], answer: 1, explanation: "Pecah $39 \\mid 69$ (belakang 9). Kuadrat terdekat untuk 39 adalah 6 ($6^2=36$). Hasil yang tepat adalah 63." },
                { level: "Level 4", question: "Berapakah nilai dari $\\sqrt{4489}$?", options: ["63", "67", "69", "71"], answer: 1, explanation: "Pecah $44 \\mid 89$ (belakang 9). Kuadrat terdekat untuk 44 adalah 6 ($6^2=36$). Hasil yang tepat adalah 67." },
                { level: "Level 4", question: "Berapakah akar kuadrat dari $\\sqrt{5041}$?", options: ["69", "71", "73", "79"], answer: 1, explanation: "Pecah $50 \\mid 41$ (belakang 1). Kuadrat terdekat untuk 50 adalah 7 ($7^2=49$). Hasil yang tepat adalah 71." }
            ],
            5: [
                { level: "Level 5", question: "Berapakah hasil dari $\\sqrt{5776}$ (Tantangan Ekstrem)?", options: ["74", "76", "84", "86"], answer: 1, explanation: "Pecah $57 \\mid 76$ (belakang 6). Kuadrat terdekat untuk 57 adalah 7 ($7^2=49$). Hasilnya adalah 76." },
                { level: "Level 5", question: "Berapakah nilai dari $\\sqrt{6241}$ (Tantangan Ekstrem)?", options: ["79", "81", "89", "91"], answer: 0, explanation: "Pecah $62 \\mid 41$ (belakang 1). Kuadrat terdekat untuk 62 adalah 7 ($7^2=49$). Hasilnya adalah 79." },
                { level: "Level 5", question: "Berapakah hasil dari $\\sqrt{6889}$ (Tantangan Ekstrem)?", options: ["73", "83", "87", "93"], answer: 1, explanation: "Pecah $68 \\mid 89$ (belakang 9). Kuadrat terdekat untuk 68 adalah 8 ($8^2=64$). Hasilnya adalah 83." },
                { level: "Level 5", question: "Berapakah nilai dari $\\sqrt{7569}$ (Tantangan Ekstrem)?", options: ["77", "83", "87", "93"], answer: 2, explanation: "Pecah $75 \\mid 69$ (belakang 9). Kuadrat terdekat untuk 75 adalah 8 ($8^2=64$). Hasilnya adalah 87." },
                { level: "Level 5", question: "Berapakah akar kuadrat dari $\\sqrt{9409}$ (Tantangan Ekstrem)?", options: ["93", "97", "99", "91"], answer: 1, explanation: "Pecah $94 \\mid 09$ (belakang 9). Kuadrat terdekat untuk 94 adalah 9 ($9^2=81$). Hasilnya adalah 97." }
            ]
        },
        pohon: {
            1: [
                { level: "Level 1", question: "Gunakan Pohon Faktor untuk menyederhanakan $\\sqrt{12}$:", options: ["$2\\sqrt{3}$", "$3\\sqrt{2}$", "$4\\sqrt{3}$", "$2\\sqrt{6}$"], answer: 0, explanation: "Faktorisasi 12 = $4 \\times 3 = (2 \\times 2) \\times 3$, keluar menjadi $2\\sqrt{3}$." },
                { level: "Level 1", question: "Bentuk sederhana dari $\\sqrt{18}$ adalah:", options: ["$2\\sqrt{3}$", "$3\\sqrt{2}$", "$9\\sqrt{2}$", "$3\\sqrt{3}$"], answer: 1, explanation: "Faktorisasi 18 = $9 \\times 2 = (3 \\times 3) \\times 2$, keluar menjadi $3\\sqrt{2}$." },
                { level: "Level 1", question: "Bentuk sederhana dari $\\sqrt{20}$ adalah:", options: ["$2\\sqrt{5}$", "$4\\sqrt{5}$", "$5\\sqrt{2}$", "$2\\sqrt{10}$"], answer: 0, explanation: "Faktorisasi 20 = $4 \\times 5 = (2 \\times 2) \\times 5$, keluar menjadi $2\\sqrt{5}$." },
                { level: "Level 1", question: "Gunakan Pohon Faktor untuk menyederhanakan $\\sqrt{24}$:", options: ["$2\\sqrt{6}$", "$4\\sqrt{6}$", "$6\\sqrt{2}$", "$3\\sqrt{8}$"], answer: 0, explanation: "Faktorisasi 24 = $4 \\times 6 = (2 \\times 2) \\times 6$, keluar menjadi $2\\sqrt{6}$." },
                { level: "Level 1", question: "Bentuk sederhana dari $\\sqrt{27}$ adalah:", options: ["$3\\sqrt{3}$", "$9\\sqrt{3}$", "$3\\sqrt{9}$", "$2\\sqrt{3}$"], answer: 0, explanation: "Faktorisasi 27 = $9 \\times 3 = (3 \\times 3) \\times 3$, keluar menjadi $3\\sqrt{3}$." }
            ],
            2: [
                { level: "Level 2", question: "Bentuk sederhana dari $\\sqrt{32}$ adalah:", options: ["$4\\sqrt{2}$", "$8\\sqrt{2}$", "$2\\sqrt{8}$", "$16\\sqrt{2}$"], answer: 0, explanation: "Faktorisasi 32 = $16 \\times 2 = (4 \\times 4) \\times 2$, keluar menjadi $4\\sqrt{2}$." },
                { level: "Level 2", question: "Bentuk sederhana dari $\\sqrt{45}$ adalah:", options: ["$5\\sqrt{3}$", "$3\\sqrt{5}$", "$9\\sqrt{5}$", "$3\\sqrt{15}$"], answer: 1, explanation: "Faktorisasi 45 = $9 \\times 5 = (3 \\times 3) \\times 5$, keluar menjadi $3\\sqrt{5}$." },
                { level: "Level 2", question: "Bentuk sederhana dari $\\sqrt{48}$ adalah:", options: ["$4\\sqrt{3}$", "$8\\sqrt{3}$", "$6\\sqrt{2}$", "$2\\sqrt{12}$"], answer: 0, explanation: "Faktorisasi 48 = $16 \\times 3 = (4 \\times 4) \\times 3$, keluar menjadi $4\\sqrt{3}$." },
                { level: "Level 2", question: "Bentuk sederhana dari $\\sqrt{50}$ adalah:", options: ["$5\\sqrt{2}$", "$2\\sqrt{5}$", "$25\\sqrt{2}$", "$5\\sqrt{5}$"], answer: 0, explanation: "Faktorisasi 50 = $25 \\times 2 = (5 \\times 5) \\times 2$, keluar menjadi $5\\sqrt{2}$." },
                { level: "Level 2", question: "Bentuk sederhana dari $\\sqrt{63}$ adalah:", options: ["$3\\sqrt{7}$", "$7\\sqrt{3}$", "$9\\sqrt{7}$", "$3\\sqrt{21}$"], answer: 0, explanation: "Faktorisasi 63 = $9 \\times 7 = (3 \\times 3) \\times 7$, keluar menjadi $3\\sqrt{7}$." }
            ],
            3: [
                { level: "Level 3", question: "Bentuk sederhana dari $\\sqrt{72}$ adalah:", options: ["$6\\sqrt{2}$", "$8\\sqrt{3}$", "$9\\sqrt{2}$", "$4\\sqrt{6}$"], answer: 0, explanation: "Faktorisasi 72 = $36 \\times 2 = (6 \\times 6) \\times 2$, keluar menjadi $6\\sqrt{2}$." },
                { level: "Level 3", question: "Bentuk sederhana dari $\\sqrt{75}$ adalah:", options: ["$3\\sqrt{5}$", "$5\\sqrt{3}$", "$15\\sqrt{3}$", "$5\\sqrt{5}$"], answer: 1, explanation: "Faktorisasi 75 = $25 \\times 3 = (5 \\times 5) \\times 3$, keluar menjadi $5\\sqrt{3}$." },
                { level: "Level 3", question: "Bentuk sederhana dari $\\sqrt{80}$ adalah:", options: ["$4\\sqrt{5}$", "$5\\sqrt{4}$", "$8\\sqrt{10}$", "$16\\sqrt{5}$"], answer: 0, explanation: "Faktorisasi 80 = $16 \\times 5 = (4 \\times 4) \\times 5$, keluar menjadi $4\\sqrt{5}$." },
                { level: "Level 3", question: "Bentuk sederhana dari $\\sqrt{98}$ adalah:", options: ["$7\\sqrt{2}$", "$14\\sqrt{2}$", "$7\\sqrt{7}$", "$2\\sqrt{7}$"], answer: 0, explanation: "Faktorisasi 98 = $49 \\times 2 = (7 \\times 7) \\times 2$, keluar menjadi $7\\sqrt{2}$." },
                { level: "Level 3", question: "Bentuk sederhana dari $\\sqrt{108}$ adalah:", options: ["$6\\sqrt{3}$", "$9\\sqrt{2}$", "$4\\sqrt{6}$", "$12\\sqrt{3}$"], answer: 0, explanation: "Faktorisasi 108 = $36 \\times 3 = (6 \\times 6) \\times 3$, keluar menjadi $6\\sqrt{3}$." }
            ],
            4: [
                { level: "Level 4", question: "Bentuk sederhana dari $\\sqrt{125}$ adalah:", options: ["$5\\sqrt{5}$", "$25\\sqrt{5}$", "$5\\sqrt{25}$", "$15\\sqrt{5}$"], answer: 0, explanation: "Faktorisasi 125 = $25 \\times 5 = (5 \\times 5) \\times 5$, keluar menjadi $5\\sqrt{5}$." },
                { level: "Level 4", question: "Bentuk sederhana dari $\\sqrt{128}$ adalah:", options: ["$6\\sqrt{2}$", "$8\\sqrt{2}$", "$8\\sqrt{4}$", "$4\\sqrt{8}$"], answer: 1, explanation: "Faktorisasi 128 menghasilkan kelompok $8 \\times 8 \\times 2$, keluar menjadi $8\\sqrt{2}$." },
                { level: "Level 4", question: "Bentuk sederhana dari $\\sqrt{147}$ adalah:", options: ["$7\\sqrt{3}$", "$3\\sqrt{7}$", "$21\\sqrt{7}$", "$7\\sqrt{7}$"], answer: 0, explanation: "Faktorisasi 147 = $49 \\times 3 = (7 \\times 7) \\times 3$, keluar menjadi $7\\sqrt{3}$." },
                { level: "Level 4", question: "Bentuk sederhana dari $\\sqrt{200}$ adalah:", options: ["$10\\sqrt{2}$", "$20\\sqrt{2}$", "$10\\sqrt{5}$", "$5\\sqrt{8}$"], answer: 0, explanation: "Faktorisasi 200 = $100 \\times 2 = (10 \\times 10) \\times 2$, keluar menjadi $10\\sqrt{2}$." },
                { level: "Level 4", question: "Bentuk sederhana dari $\\sqrt{243}$ adalah:", options: ["$3\\sqrt{3}$", "$9\\sqrt{3}$", "$27\\sqrt{3}$", "$9\\sqrt{9}$"], answer: 1, explanation: "Faktorisasi 243 = $(3 \\times 3) \\times (3 \\times 3) \\times 3$, keluar menjadi $9\\sqrt{3}$." }
            ],
            5: [
                { level: "Level 5", question: "Bentuk sederhana dari $\\sqrt{288}$ (Tantangan Ekstrem):", options: ["$12\\sqrt{2}$", "$14\\sqrt{2}$", "$16\\sqrt{2}$", "$12\\sqrt{3}$"], answer: 0, explanation: "Faktorisasi 288 = $144 \\times 2 = (12 \\times 12) \\times 2$, keluar menjadi $12\\sqrt{2}$." },
                { level: "Level 5", question: "Bentuk sederhana dari $\\sqrt{392}$ (Tantangan Ekstrem):", options: ["$14\\sqrt{2}$", "$12\\sqrt{3}$", "$16\\sqrt{2}$", "$14\\sqrt{3}$"], answer: 0, explanation: "Faktorisasi 392 = $196 \\times 2 = (14 \\times 14) \\times 2$, keluar menjadi $14\\sqrt{2}$." },
                { level: "Level 5", question: "Bentuk sederhana dari $\\sqrt{500}$ (Tantangan Ekstrem):", options: ["$10\\sqrt{5}$", "$25\\sqrt{2}$", "$50\\sqrt{2}$", "$20\\sqrt{5}$"], answer: 0, explanation: "Faktorisasi 500 = $100 \\times 5 = (10 \\times 10) \\times 5$, keluar menjadi $10\\sqrt{5}$." },
                { level: "Level 5", question: "Bentuk sederhana dari $\\sqrt{800}$ (Tantangan Ekstrem):", options: ["$20\\sqrt{2}$", "$40\\sqrt{2}$", "$10\\sqrt{8}$", "$25\\sqrt{2}$"], answer: 0, explanation: "Faktorisasi 800 = $400 \\times 2 = (20 \\times 20) \\times 2$, keluar menjadi $20\\sqrt{2}$." },
                { level: "Level 5", question: "Bentuk sederhana dari $\\sqrt{1568}$ (Tantangan Ekstrem):", options: ["$24\\sqrt{2}$", "$28\\sqrt{2}$", "$32\\sqrt{2}$", "$28\\sqrt{3}$"], answer: 1, explanation: "Faktorisasi 1568 = $784 \\times 2 = (28 \\times 28) \\times 2$, keluar menjadi $28\\sqrt{2}$." }
            ]
        },
        desimal: {
            1: [
                { level: "Level 1", question: "Estimasi desimal dari $\\sqrt{5}$ (akar terdekat $\\sqrt{4} = 2$):", options: ["2,25", "2,20", "2,50", "2,10"], answer: 0, explanation: "Rumus: $2 + \\frac{5 - 4}{2(2)} = 2 + \\frac{1}{4} = 2,25$." },
                { level: "Level 1", question: "Estimasi desimal dari $\\sqrt{8}$ (akar terdekat $\\sqrt{9} = 3$):", options: ["2,833", "2,750", "2,900", "2,650"], answer: 0, explanation: "Rumus: $3 + \\frac{8 - 9}{2(3)} = 3 - \\frac{1}{6} \\approx 2,833$." },
                { level: "Level 1", question: "Estimasi desimal dari $\\sqrt{10}$ (akar terdekat $\\sqrt{9} = 3$):", options: ["3,167", "3,250", "3,100", "3,333"], answer: 0, explanation: "Rumus: $3 + \\frac{10 - 9}{2(3)} = 3 + \\frac{1}{6} \\approx 3,167$." },
                { level: "Level 1", question: "Estimasi desimal dari $\\sqrt{12}$ (akar terdekat $\\sqrt{9} = 3$):", options: ["3,25", "3,50", "3,80", "3,10"], answer: 1, explanation: "Rumus: $3 + \\frac{12 - 9}{2(3)} = 3 + \\frac{3}{6} = 3 + 0,5 = 3,5$." },
                { level: "Level 1", question: "Estimasi desimal dari $\\sqrt{15}$ (akar terdekat $\\sqrt{16} = 4$):", options: ["3,875", "3,750", "3,900", "3,650"], answer: 0, explanation: "Rumus: $4 + \\frac{15 - 16}{2(4)} = 4 - \\frac{1}{8} = 3,875$." }
            ],
            2: [
                { level: "Level 2", question: "Estimasi desimal dari $\\sqrt{18}$ (akar terdekat $\\sqrt{16} = 4$):", options: ["4,250", "4,125", "4,400", "4,500"], answer: 0, explanation: "Rumus: $4 + \\frac{18 - 16}{2(4)} = 4 + \\frac{2}{8} = 4,25$." },
                { level: "Level 2", question: "Estimasi desimal dari $\\sqrt{24}$ (akar terdekat $\\sqrt{25} = 5$):", options: ["4,900", "4,800", "4,950", "4,750"], answer: 0, explanation: "Rumus: $5 + \\frac{24 - 25}{2(5)} = 5 - \\frac{1}{10} = 4,9$." },
                { level: "Level 2", question: "Estimasi desimal dari $\\sqrt{28}$ (akar terdekat $\\sqrt{25} = 5$):", options: ["5,300", "5,150", "5,450", "5,600"], answer: 0, explanation: "Rumus: $5 + \\frac{28 - 25}{2(5)} = 5 + \\frac{3}{10} = 5,3$." },
                { level: "Level 2", question: "Estimasi desimal dari $\\sqrt{35}$ (akar terdekat $\\sqrt{36} = 6$):", options: ["5,917", "5,833", "5,750", "6,100"], answer: 0, explanation: "Rumus: $6 + \\frac{35 - 36}{2(6)} = 6 - \\frac{1}{12} \\approx 5,917$." },
                { level: "Level 2", question: "Estimasi desimal dari $\\sqrt{40}$ (akar terdekat $\\sqrt{36} = 6$):", options: ["6,333", "6,167", "6,500", "6,200"], answer: 0, explanation: "Rumus: $6 + \\frac{40 - 36}{2(6)} = 6 + \\frac{4}{12} = 6 + \\frac{1}{3} \\approx 6,333$." }
            ],
            3: [
                { level: "Level 3", question: "Estimasi desimal dari $\\sqrt{50}$ (akar terdekat $\\sqrt{49} = 7$):", options: ["7,071", "7,142", "7,250", "6,928"], answer: 0, explanation: "Rumus: $7 + \\frac{50 - 49}{2(7)} = 7 + \\frac{1}{14} \\approx 7,071$." },
                { level: "Level 3", question: "Estimasi desimal dari $\\sqrt{55}$ (akar terdekat $\\sqrt{49} = 7$):", options: ["7,429", "7,286", "7,571", "7,143"], answer: 0, explanation: "Rumus: $7 + \\frac{55 - 49}{2(7)} = 7 + \\frac{6}{14} = 7 + \\frac{3}{7} \\approx 7,429$." },
                { level: "Level 3", question: "Estimasi desimal dari $\\sqrt{60}$ (akar terdekat $\\sqrt{64} = 8$):", options: ["7,750", "7,875", "7,625", "7,500"], answer: 0, explanation: "Rumus: $8 + \\frac{60 - 64}{2(8)} = 8 - \\frac{4}{16} = 8 - 0,25 = 7,75$." },
                { level: "Level 3", question: "Estimasi desimal dari $\\sqrt{70}$ (akar terdekat $\\sqrt{64} = 8$):", options: ["8,375", "8,250", "8,500", "8,125"], answer: 0, explanation: "Rumus: $8 + \\frac{70 - 64}{2(8)} = 8 + \\frac{6}{16} = 8 + 0,375 = 8,375$." },
                { level: "Level 3", question: "Estimasi desimal dari $\\sqrt{80}$ (akar terdekat $\\sqrt{81} = 9$):", options: ["8,944", "8,500", "9,120", "8,880"], answer: 0, explanation: "Rumus: $9 + \\frac{80 - 81}{2(9)} = 9 - \\frac{1}{18} \\approx 8,944$." }
            ],
            4: [
                { level: "Level 4", question: "Estimasi desimal dari $\\sqrt{95}$ (akar terdekat $\\sqrt{100} = 10$):", options: ["9,750", "9,800", "9,650", "9,850"], answer: 0, explanation: "Rumus: $10 + \\frac{95 - 100}{2(10)} = 10 - \\frac{5}{20} = 10 - 0,25 = 9,75$." },
                { level: "Level 4", question: "Estimasi desimal dari $\\sqrt{110}$ (akar terdekat $\\sqrt{100} = 10$):", options: ["10,500", "10,250", "10,750", "10,400"], answer: 0, explanation: "Rumus: $10 + \\frac{110 - 100}{2(10)} = 10 + \\frac{10}{20} = 10 + 0,5 = 10,5$." },
                { level: "Level 4", question: "Estimasi desimal dari $\\sqrt{130}$ (akar terdekat $\\sqrt{121} = 11$):", options: ["11,409", "11,250", "11,550", "11,180"], answer: 0, explanation: "Rumus: $11 + \\frac{130 - 121}{2(11)} = 11 + \\frac{9}{22} \\approx 11,409$." },
                { level: "Level 4", question: "Estimasi desimal dari $\\sqrt{150}$ (akar terdekat $\\sqrt{144} = 12$):", options: ["12,250", "12,416", "12,125", "12,600"], answer: 0, explanation: "Rumus: $12 + \\frac{150 - 144}{2(12)} = 12 + \\frac{6}{24} = 12,25$." },
                { level: "Level 4", question: "Estimasi desimal dari $\\sqrt{170}$ (akar terdekat $\\sqrt{169} = 13$):", options: ["13,038", "13,150", "13,250", "12,950"], answer: 0, explanation: "Rumus: $13 + \\frac{170 - 169}{2(13)} = 13 + \\frac{1}{26} \\approx 13,038$." }
            ],
            5: [
                { level: "Level 5", question: "Estimasi desimal dari $\\sqrt{220}$ (Tantangan Ekstrem, terdekat $\\sqrt{225}=15$):", options: ["14,833", "14,650", "14,900", "14,500"], answer: 0, explanation: "Rumus: $15 + \\frac{220 - 225}{2(15)} = 15 - \\frac{5}{30} = 15 - 0,167 \\approx 14,833$." },
                { level: "Level 5", question: "Estimasi desimal dari $\\sqrt{350}$ (Tantangan Ekstrem, terdekat $\\sqrt{324}=18$):", options: ["18,722", "18,500", "18,900", "18,333"], answer: 0, explanation: "Rumus: $18 + \\frac{350 - 324}{2(18)} = 18 + \\frac{26}{36} \\approx 18,722$." },
                { level: "Level 5", question: "Estimasi desimal dari $\\sqrt{500}$ (Tantangan Ekstrem, terdekat $\\sqrt{484}=22$):", options: ["22,364", "22,150", "22,500", "22,200"], answer: 0, explanation: "Rumus: $22 + \\frac{500 - 484}{2(22)} = 22 + \\frac{16}{44} \\approx 22,364$." },
                { level: "Level 5", question: "Estimasi desimal dari $\\sqrt{750}$ (Tantangan Ekstrem, terdekat $\\sqrt{729}=27$):", options: ["27,389", "27,150", "27,600", "27,200"], answer: 0, explanation: "Rumus: $27 + \\frac{750 - 729}{2(27)} = 27 + \\frac{21}{54} \\approx 27,389$." },
                { level: "Level 5", question: "Estimasi desimal dari $\\sqrt{1050}$ (Tantangan Ekstrem, terdekat $\\sqrt{1024}=32$):", options: ["32,406", "31,850", "33,120", "32,800"], answer: 0, explanation: "Rumus: $32 + \\frac{1050 - 1024}{2(32)} = 32 + \\frac{26}{64} \\approx 32,406$." }
            ]
        },
        campuran: {
            1: [
                { level: "Level 1", question: "[Campuran L1] Akar kuadrat sempurna dari $\\sqrt{529}$:", options: ["21", "23", "27", "29"], answer: 1, explanation: "Hasil akhirnya adalah 23." },
                { level: "Level 1", question: "[Campuran L1] Bentuk sederhana dari $\\sqrt{12}$:", options: ["$2\\sqrt{3}$", "$3\\sqrt{2}$", "$4\\sqrt{3}$", "$2\\sqrt{6}$"], answer: 0, explanation: "Faktorisasi menghasilkan $2\\sqrt{3}$." },
                { level: "Level 1", question: "[Campuran L1] Estimasi desimal dari $\\sqrt{5}$ (terdekat $\\sqrt{4}=2$):", options: ["2,25", "2,20", "2,50", "2,10"], answer: 0, explanation: "Rumus taksiran menghasilkan $2,25$." },
                { level: "Level 1", question: "[Campuran L1] Nilai dari $\\sqrt{576}$:", options: ["24", "26", "16", "34"], answer: 0, explanation: "Hasil yang tepat adalah 24." },
                { level: "Level 1", question: "[Campuran L1] Bentuk sederhana dari $\\sqrt{18}$:", options: ["$2\\sqrt{3}$", "$3\\sqrt{2}$", "$9\\sqrt{2}$", "$3\\sqrt{3}$"], answer: 1, explanation: "Faktorisasi menghasilkan $3\\sqrt{2}$." }
            ],
            2: [
                { level: "Level 2", question: "[Campuran L2] Nilai dari $\\sqrt{729}$:", options: ["23", "27", "37", "21"], answer: 1, explanation: "Hasil akhirnya adalah 27." },
                { level: "Level 2", question: "[Campuran L2] Bentuk sederhana dari $\\sqrt{108}$:", options: ["$6\\sqrt{3}$", "$9\\sqrt{2}$", "$4\\sqrt{6}$", "$12\\sqrt{3}$"], answer: 0, explanation: "Faktorisasi menghasilkan $6\\sqrt{3}$." },
                { level: "Level 2", question: "[Campuran L2] Estimasi desimal dari $\\sqrt{50}$ (terdekat $\\sqrt{49}=7$):", options: ["7,071", "7,142", "7,250", "6,928"], answer: 0, explanation: "Rumus taksiran menghasilkan $\\approx 7,071$." },
                { level: "Level 2", question: "[Campuran L2] Nilai dari $\\sqrt{1024}$:", options: ["32", "34", "36", "38"], answer: 0, explanation: "Hasil yang tepat adalah 32." },
                { level: "Level 2", question: "[Campuran L2] Bentuk sederhana dari $\\sqrt{48}$:", options: ["$4\\sqrt{3}$", "$8\\sqrt{3}$", "$6\\sqrt{2}$", "$2\\sqrt{12}$"], answer: 0, explanation: "Faktorisasi menghasilkan $4\\sqrt{3}$." }
            ],
            3: [
                { level: "Level 3", question: "[Campuran L3] Hasil dari $\\sqrt{1296}$:", options: ["34", "36", "44", "46"], answer: 1, explanation: "Hasil kuadratnya adalah 36." },
                { level: "Level 3", question: "[Campuran L3] Bentuk sederhana dari $\\sqrt{128}$:", options: ["$6\\sqrt{2}$", "$8\\sqrt{2}$", "$8\\sqrt{4}$", "$4\\sqrt{8}$"], answer: 1, explanation: "Faktorisasi menghasilkan $8\\sqrt{2}$." },
                { level: "Level 3", question: "[Campuran L3] Estimasi desimal dari $\\sqrt{80}$ (terdekat $\\sqrt{81}=9$):", options: ["8,944", "8,500", "9,120", "8,880"], answer: 0, explanation: "Rumus taksiran menghasilkan $\\approx 8,944$." },
                { level: "Level 3", question: "[Campuran L3] Nilai dari $\\sqrt{1681}$:", options: ["39", "41", "43", "49"], answer: 1, explanation: "Hasil yang tepat adalah 41." },
                { level: "Level 3", question: "[Campuran L3] Bentuk sederhana dari $\\sqrt{75}$:", options: ["$3\\sqrt{5}$", "$5\\sqrt{3}$", "$15\\sqrt{3}$", "$5\\sqrt{5}$"], answer: 1, explanation: "Faktorisasi menghasilkan $5\\sqrt{3}$." }
            ],
            4: [
                { level: "Level 4", question: "[Campuran L4] Nilai dari $\\sqrt{3364}$:", options: ["52", "58", "62", "68"], answer: 1, explanation: "Hasil kuadratnya adalah 58." },
                { level: "Level 4", question: "[Campuran L4] Bentuk sederhana dari $\\sqrt{243}$:", options: ["$3\\sqrt{3}$", "$9\\sqrt{3}$", "$27\\sqrt{3}$", "$9\\sqrt{9}$"], answer: 1, explanation: "Faktorisasi menghasilkan $9\\sqrt{3}$." },
                { level: "Level 4", question: "[Campuran L4] Estimasi desimal dari $\\sqrt{150}$ (terdekat $\\sqrt{144}=12$):", options: ["12,250", "12,416", "12,125", "12,600"], answer: 0, explanation: "Rumus taksiran menghasilkan $12,25$." },
                { level: "Level 4", question: "[Campuran L4] Nilai dari $\\sqrt{4489}$:", options: ["63", "67", "69", "71"], answer: 1, explanation: "Hasil yang tepat adalah 67." },
                { level: "Level 4", question: "[Campuran L4] Bentuk sederhana dari $\\sqrt{200}$:", options: ["$10\\sqrt{2}$", "$20\\sqrt{2}$", "$10\\sqrt{5}$", "$5\\sqrt{8}$"], answer: 0, explanation: "Faktorisasi menghasilkan $10\\sqrt{2}$." }
            ],
            5: [
                { level: "Level 5", question: "[Campuran L5] Hasil dari $\\sqrt{7569}$ (Tantangan Ekstrem):", options: ["77", "83", "87", "93"], answer: 2, explanation: "Hasil kuadratnya adalah 87." },
                { level: "Level 5", question: "[Campuran L5] Bentuk sederhana dari $\\sqrt{1568}$ (Ekstrem):", options: ["$24\\sqrt{2}$", "$28\\sqrt{2}$", "$32\\sqrt{2}$", "$28\\sqrt{3}$"], answer: 1, explanation: "Faktorisasi menghasilkan $28\\sqrt{2}$." },
                { level: "Level 5", question: "[Campuran L5] Estimasi desimal $\\sqrt{1050}$ (Ekstrem):", options: ["32,406", "31,850", "33,120", "32,800"], answer: 0, explanation: "Menggunakan basis terdekat 32 menghasilkan $32,406$." },
                { level: "Level 5", question: "[Campuran L5] Nilai dari $\\sqrt{6241}$ (Tantangan Ekstrem):", options: ["79", "81", "89", "91"], answer: 0, explanation: "Hasil yang tepat adalah 79." },
                { level: "Level 5", question: "[Campuran L5] Bentuk sederhana $\\sqrt{500}$ (Ekstrem):", options: ["$10\\sqrt{5}$", "$25\\sqrt{2}$", "$50\\sqrt{2}$", "$20\\sqrt{5}$"], answer: 0, explanation: "Faktorisasi menghasilkan $10\\sqrt{5}$." }
            ]
        }
    };

    let selectedChapter = '';
    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;

    // Definisikan fungsi tombol agar bisa diakses secara global di dalam scope ini
    window.selectChapter = function(chapterKey) {
        selectedChapter = chapterKey;
        document.getElementById('step-chapter').style.display = 'none';
        document.getElementById('step-level').style.display = 'flex';
        document.getElementById('menu-instruction').innerText = "Pilih tingkat kesulitan (Level):";
    };

    window.selectLevel = function(levelNum) {
        currentQuestions = [...bankSoal[selectedChapter][levelNum]];
        currentIndex = 0;
        score = 0;

        document.getElementById('step-level').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('quiz-result').style.display = 'none';

        loadQuestion();
    };

    function loadQuestion() {
        const q = currentQuestions[currentIndex];
        
        document.getElementById('question-progress').innerHTML = `Soal ${currentIndex + 1} dari ${currentQuestions.length} &bull; <span style="color:#2563eb; font-weight:600;">${q.level}</span>`;
        document.getElementById('question-text').innerHTML = q.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerHTML = opt;
            btn.onclick = () => selectOption(idx, btn);
            optionsContainer.appendChild(btn);
        });

        document.getElementById('feedback-box').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';

        if (window.MathJax && window.MathJax.typeset) {
            window.MathJax.typeset();
        }
    }

    function selectOption(selectedIndex, selectedBtn) {
        const q = currentQuestions[currentIndex];
        const optionButtons = document.querySelectorAll('.btn-option');

        optionButtons.forEach(btn => btn.disabled = true);

        const feedbackBox = document.getElementById('feedback-box');
        feedbackBox.style.display = 'block';

        if (selectedIndex === q.answer) {
            selectedBtn.classList.add('correct');
            feedbackBox.innerHTML = `<strong>✔ Benar!</strong> ${q.explanation}`;
            feedbackBox.style.background = '#f0fdf4';
            feedbackBox.style.color = '#166534';
            score++;
        } else {
            selectedBtn.classList.add('incorrect');
            optionButtons[q.answer].classList.add('correct');
            feedbackBox.innerHTML = `<strong>✖ Kurang tepat.</strong> ${q.explanation}`;
            feedbackBox.style.background = '#fef2f2';
            feedbackBox.style.color = '#991b1b';
        }

        if (window.MathJax && window.MathJax.typeset) {
            window.MathJax.typeset();
        }

        document.getElementById('next-btn').style.display = 'block';
    }

    window.nextQuestion = function() {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    };

    function showResult() {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';

        document.getElementById('score-text').innerText = `Skor kamu: ${score} dari ${currentQuestions.length}`;
        
        const messageEl = document.getElementById('score-message');
        if (score === currentQuestions.length) {
            messageEl.innerText = "🏆 Sempurna! Kamu berhasil menjawab semua soal di level ini dengan benar!";
        } else if (score >= 3) {
            messageEl.innerText = "👍 Bagus sekali! Pertahankan ketelitianmu untuk level berikutnya.";
        } else {
            messageEl.innerText = "💪 Tetap semangat! Coba pelajari materinya lagi lalu taklukkan level ini.";
        }
    }

    window.backToChapter = function() {
        document.getElementById('step-chapter').style.display = 'flex';
        document.getElementById('step-level').style.display = 'none';
        document.getElementById('menu-instruction').innerText = "Pilih bab materi yang ingin kamu uji:";
    };

    window.backToLevel = function() {
        document.getElementById('step-level').style.display = 'flex';
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('menu-instruction').innerText = "Pilih tingkat kesulitan (Level):";
    };
};
