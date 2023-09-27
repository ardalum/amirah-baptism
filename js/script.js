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

// setAttribute upon load
let m = document.getElementById("m");
let w = document.getElementById("w");
let v = document.getElementById("v");
let p = document.getElementById("p");

m.setAttribute("href", "https://m.me/arvin109");
w.setAttribute("href", "https://wa.me/639952601148");
v.setAttribute("href", "viber://chat?number=%2B639952601148");
p.setAttribute("href", "tel:+639952601148");

let m1 = document.getElementById("m1");
let w1 = document.getElementById("w1");
let v1 = document.getElementById("v1");
let p1 = document.getElementById("p1");

m1.setAttribute("href", "https://m.me/pearly.andres");
w1.setAttribute("href", "https://wa.me/639182744939");
v1.setAttribute("href", "viber://chat?number=%2B639182744939");
p1.setAttribute("href", "tel:+639182744939");
