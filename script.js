let timer = 60;
const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
  timer--;
  countdown.textContent = timer;

  if (timer <= 0) {
    clearInterval(interval);
    window.location.href = "https://t.me/+e0ZpbdaQuthkNWM9"; // Redirect after 60s
  }
}, 1000);
