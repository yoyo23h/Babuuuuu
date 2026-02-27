// 🔥 SET YOUR MEETING DATE HERE
const meetingDate = new Date("April 15, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = meetingDate - now;

  const days = Math.ceil(distance / (1000 * 60 * 60 * 24));

  const countdownElement = document.getElementById("countdown");
  const dynamicNumbers = document.querySelectorAll(".dynamic-number");

  if (countdownElement) {
    countdownElement.innerText = days >= 0 ? days : 0;
  }

  dynamicNumbers.forEach(el => {
    el.innerText = days >= 0 ? days : 0;
  });
}

updateCountdown();
setInterval(updateCountdown, 3600000);


// 🎬 Slow Dramatic Fade Transition
function nextPage(page) {
  document.body.style.transition = "opacity 1.2s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = page;
  }, 1200);
}