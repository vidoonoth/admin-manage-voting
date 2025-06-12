const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const contentMain = document.getElementById("content-main");
const navLinks = document.querySelectorAll("nav a");

// Fungsi untuk memuat konten dari file HTML lain
async function loadContent(pageName) {
  try {
    const response = await fetch(`pages/${pageName}.html`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    contentMain.innerHTML = html;

    // Jika halaman yang dimuat adalah 'dashboard' atau 'results', inisialisasi chart
    if (pageName === 'results' || pageName === 'dashboard') {
      const chartCanvas = document.getElementById("votingChart");
      if (chartCanvas) {
        initializeVotingChart();
      }
      // Tambahkan inisialisasi chart partisipasi untuk dashboard
      const participationCanvas = document.getElementById("participationChart");
      if (participationCanvas) {
        initializeParticipationChart();
      }
    }
  } catch (error) {
    console.error("Gagal memuat halaman:", error);
    contentMain.innerHTML = `<p class="text-red-500">Gagal memuat konten. ${error.message}</p>`;
  }
}

// Toggle sidebar untuk mobile
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

// sembunyikan sidebar ketika click bagian luar pada mobile
document.addEventListener("click", (event) => {
  if (
    window.innerWidth < 768 &&
    !sidebar.contains(event.target) &&
    !sidebarToggle.contains(event.target)
  ) {
    sidebar.classList.add("-translate-x-full");
  }
});

// Handle navigation dan section display
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    const targetSectionId = link.getAttribute("data-section");

    // hapus active class dari semua links
    navLinks.forEach((nav) => nav.classList.remove("active-link"));

    // Add active class untuk click link
    link.classList.add("active-link");

    // Load content untuk target section
    loadContent(targetSectionId);

    // tutup sidebar pada mobile sesudah click link
    if (window.innerWidth < 768) {
      sidebar.classList.add("-translate-x-full");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  loadContent("dashboard");
});