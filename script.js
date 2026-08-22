// ==========================================
// KASUS MINGGUAN SISTEM
// ==========================================

const weeklyCases = [

  {
    category: "🤖 Teknologi & Digital",
    level: 1,
    title: "AI dan Jawaban Instan",
    description:
      "Semakin banyak siswa menggunakan AI untuk mendapatkan jawaban tugas. " +
      "Masalahnya, sebagian siswa langsung menyalin jawaban tanpa memahami prosesnya. " +
      "Bagaimana cara memanfaatkan AI tanpa membuat siswa kehilangan kemampuan berpikir?"
  },

  {
    category: "🌍 Lingkungan & Perubahan Iklim",
    level: 1,
    title: "Sampah Sekolah",
    description:
      "Sampah plastik masih banyak ditemukan setelah jam istirahat. " +
      "Sekolah sudah menyediakan tempat sampah, tetapi kebiasaan siswa belum berubah. " +
      "Bagaimana cara mengurangi masalah tersebut?"
  },

  {
    category: "🎓 Pendidikan & Pelajar",
    level: 2,
    title: "Belajar Hanya Saat Ujian",
    description:
      "Sebagian siswa belajar secara intensif hanya ketika ujian sudah dekat. " +
      "Setelah ujian selesai, materi sering dilupakan. " +
      "Bagaimana sekolah dapat mendorong kebiasaan belajar yang lebih konsisten?"
  },

  {
    category: "🏙️ Sosial & Masyarakat",
    level: 2,
    title: "Informasi yang Belum Terverifikasi",
    description:
      "Sebuah informasi viral beredar di grup siswa. " +
      "Sebagian siswa langsung menyebarkannya tanpa memeriksa sumber. " +
      "Bagaimana cara membuat siswa lebih kritis terhadap informasi?"
  },

  {
    category: "💰 Ekonomi & Masa Depan",
    level: 2,
    title: "Pekerjaan dan Otomatisasi",
    description:
      "Perkembangan teknologi membuat beberapa pekerjaan dapat dilakukan secara otomatis. " +
      "Di sisi lain, teknologi juga menciptakan pekerjaan baru. " +
      "Apa yang sebaiknya dipersiapkan siswa sejak sekolah?"
  },

  {
    category: "🏛️ Kebijakan & Masalah Publik",
    level: 3,
    title: "Teknologi dalam Layanan Publik",
    description:
      "Sebuah daerah ingin menggunakan teknologi untuk mempercepat pelayanan masyarakat. " +
      "Namun, sebagian masyarakat khawatir terhadap privasi dan keamanan data. " +
      "Bagaimana membuat solusi yang tetap efisien tetapi melindungi masyarakat?"
  }

];


// ------------------------------------------
// MENENTUKAN MINGGU
// ------------------------------------------

function getWeekNumber(date = new Date()) {

  const firstDay =
    new Date(date.getFullYear(), 0, 1);

  const days =
    Math.floor(
      (date - firstDay) / 86400000
    );

  return Math.ceil(
    (days + firstDay.getDay() + 1) / 7
  );
}


// ------------------------------------------
// MEMILIH KASUS
// ------------------------------------------

function getWeeklyCase() {

  const week =
    getWeekNumber();

  const stored =
    localStorage.getItem("sistemWeeklyCase");

  if (stored) {

    const saved =
      JSON.parse(stored);

    if (
      saved.year === new Date().getFullYear() &&
      saved.week === week
    ) {
      return saved.case;
    }
  }

  /*
    Prototype:
    setiap minggu memilih kasus berbeda.
    Untuk versi banyak siswa, pemilihan ini
    nantinya dipindahkan ke database.
  */

  const randomIndex =
    Math.floor(
      Math.random() * weeklyCases.length
    );

  const selected =
    weeklyCases[randomIndex];

  localStorage.setItem(
    "sistemWeeklyCase",
    JSON.stringify({
      year: new Date().getFullYear(),
      week: week,
      case: selected
    })
  );

  return selected;
}


// ------------------------------------------
// LOAD KASUS
// ------------------------------------------

function loadWeeklyCase() {

  const weeklyCase =
    getWeeklyCase();

  document.getElementById("caseCategory")
    .textContent = weeklyCase.category;

  document.getElementById("caseLevel")
    .textContent = weeklyCase.level;

  document.getElementById("caseTitle")
    .textContent = weeklyCase.title;

  document.getElementById("caseDescription")
    .textContent = weeklyCase.description;

  document.getElementById("caseDeadline")
    .textContent =
      "⏳ Deadline: Minggu ini";

  loadSavedWeeklyCase();
}


// ------------------------------------------
// DATA KASUS MINGGUAN
// ------------------------------------------

function getWeeklyData() {

  const stored =
    localStorage.getItem("sistemWeeklyProgress");

  if (stored) {
    return JSON.parse(stored);
  }

  return {
    week: getWeekNumber(),
    submitted: false,
    score: 0,
    answers: {}
  };
}


// ------------------------------------------
// SIMPAN JAWABAN
// ------------------------------------------

function saveWeeklyAnswers() {

  const data =
    getWeeklyData();

  data.answers = {

    S1:
      document.getElementById("caseS1").value,

    I:
      document.getElementById("caseI").value,

    S2:
      document.getElementById("caseS2").value,

    T:
      document.getElementById("caseT").value,

    E:
      document.getElementById("caseE").value,

    M:
      document.getElementById("caseM").value
  };

  data.week =
    getWeekNumber();

  localStorage.setItem(
    "sistemWeeklyProgress",
    JSON.stringify(data)
  );
}


// ------------------------------------------
// KUMPULKAN KASUS
// ------------------------------------------

function submitWeeklyCase() {

  const fields = [

    document.getElementById("caseS1").value.trim(),

    document.getElementById("caseI").value.trim(),

    document.getElementById("caseS2").value.trim(),

    document.getElementById("caseT").value.trim(),

    document.getElementById("caseE").value.trim(),

    document.getElementById("caseM").value.trim()

  ];

  // Semua bagian wajib diisi
  if (fields.some(answer => answer.length < 20)) {

    alert(
      "Setiap bagian harus dijawab minimal 20 karakter. " +
      "Coba jelaskan pemikiranmu lebih lengkap."
    );

    return;
  }

  const data =
    getWeeklyData();

  if (data.submitted) {

    alert(
      "Kasus minggu ini sudah dikumpulkan."
    );

    return;
  }

  /*
    Prototype penilaian:

    Partisipasi = 40 poin
    Kualitas analisis = sampai 30 poin
    Solusi = sampai 20 poin
    Ketepatan/kelengkapan = 10 poin
  */

  let score = 40;

  const totalLength =
    fields.reduce(
      (total, answer) =>
        total + answer.length,
      0
    );

  // Analisis
  if (totalLength >= 300) {
    score += 10;
  }

  if (totalLength >= 600) {
    score += 10;
  }

  if (totalLength >= 900) {
    score += 10;
  }

  // Solusi / tindakan
  const solution =
    document.getElementById("caseM").value;

  if (solution.length >= 100) {
    score += 10;
  }

  if (solution.length >= 200) {
    score += 10;
  }

  // Maksimal 100
  score =
    Math.min(score, 100);

  data.submitted = true;
  data.score = score;

  saveWeeklyAnswers();

  localStorage.setItem(
    "sistemWeeklyProgress",
    JSON.stringify(data)
  );

  /*
    Masukkan ke poin keaktifan.
    Untuk menghindari poin dobel,
    hanya dilakukan sekali.
  */

  if (!daily.weeklyCaseCompleted) {

    daily.weeklyCaseCompleted = true;
    daily.weeklyCaseScore = score;

    // Skor kasus langsung menjadi poin keaktifan
    addPoints(score);

    saveData();
  }

  document.getElementById("caseSubmitButton")
    .disabled = true;

  document.getElementById("caseSubmitButton")
    .textContent =
      "✅ Kasus Sudah Dikumpulkan";

  document.getElementById("caseScoreInfo")
    .textContent =
      "Skor kasus: " +
      score +
      "/100 poin";

  updateDashboard();

  alert(
    "Kasus berhasil dikumpulkan!\n\n" +
    "Skor: " +
    score +
    "/100\n" +
    "Poin keaktifan telah ditambahkan."
  );
}


// ------------------------------------------
// LOAD DATA YANG SUDAH TERSIMPAN
// ------------------------------------------

function loadSavedWeeklyCase() {

  const data =
    getWeeklyData();

  if (
    data.week !== getWeekNumber()
  ) {
    return;
  }

  if (data.answers) {

    document.getElementById("caseS1").value =
      data.answers.S1 || "";

    document.getElementById("caseI").value =
      data.answers.I || "";

    document.getElementById("caseS2").value =
      data.answers.S2 || "";

    document.getElementById("caseT").value =
      data.answers.T || "";

    document.getElementById("caseE").value =
      data.answers.E || "";

    document.getElementById("caseM").value =
      data.answers.M || "";
  }

  if (data.submitted) {

    document.getElementById("caseSubmitButton")
      .disabled = true;

    document.getElementById("caseSubmitButton")
      .textContent =
        "✅ Kasus Sudah Dikumpulkan";

    document.getElementById("caseScoreInfo")
      .textContent =
        "Skor kasus: " +
        data.score +
        "/100 poin";
  }
}


// ------------------------------------------
// AUTOSAVE
// ------------------------------------------

document.querySelectorAll(
  "#caseS1, #caseI, #caseS2, #caseT, #caseE, #caseM"
).forEach(textarea => {

  textarea.addEventListener(
    "input",
    saveWeeklyAnswers
  );

});


// Jalankan saat halaman dibuka
loadWeeklyCase();
