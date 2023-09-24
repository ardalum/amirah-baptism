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
