document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open'); // tambahkan/hapus class "open"
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });
});
    // Set tahun di footer
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Tandai link aktif berdasarkan URL
    const links = document.querySelectorAll(".nav-link");
    const path = location.pathname.split("/").pop() || "index.html";
    links.forEach((a) => {
        const href = a.getAttribute("href");
        if (href === path) a.classList.add("active");
    });

    // Simple audio preview: pause others when one plays
    const audios = document.querySelectorAll("audio");
    audios.forEach((a) => {
        a.addEventListener("play", () => {
        audios.forEach((x) => {
            if (x !== a) x.pause();
        });
        });
    });
    
