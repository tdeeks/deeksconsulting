// Thomas Deeks Consulting — minimal interactions
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal-on-scroll
  const items = document.querySelectorAll(".reveal");
  if (items.length) {
    if (prefersReduced) {
      items.forEach(el => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.12 });

      items.forEach(el => io.observe(el));
    }
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
