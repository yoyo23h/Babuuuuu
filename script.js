// Countdown (Home page only)
const daysEl = document.getElementById("days");

if (daysEl) {
  const targetDate = new Date("April 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
    daysEl.innerText = days > 0 ? days : 0;
  }, 1000);
}

// Smooth page transitions
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location = this.href;
      }, 400);
    }
  });
});

// Surprise reveal
const surpriseBtn = document.querySelector(".surprise-btn");
const overlay = document.querySelector(".surprise-overlay");

if (surpriseBtn && overlay) {
  surpriseBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });
}