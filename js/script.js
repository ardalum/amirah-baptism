// Text Animation
const gradient = document.getElementById("gradient");

let typewriter = new Typewriter(gradient, {
  loop: true,
});

typewriter
  .typeString("Baptism")
  .pauseFor(1500)
  .deleteAll()
  .typeString("and")
  .pauseFor(1000)
  .deleteAll()
  .typeString("1st Birthday")
  .pauseFor(1500)
  .start();
// *******************************************************************************

// Countdown Timer

let countdownDate = new Date("Nov 18, 2023 08:00:00").getTime();

let timer = setInterval(function () {
  let now = new Date().getTime();

  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).textContent = `${days} Days ${hours} Hours ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").textContent = "Celebrated";
  }
}, 1000);
