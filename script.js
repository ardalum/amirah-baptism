// Text Animation
const gradient = document.getElementById("gradient");

let typewriter = new Typewriter(gradient, {
  loop: true,
});

typewriter
  .typeString("Christening")
  .pauseFor(2500)
  .deleteAll()
  .typeString("and")
  .pauseFor(1000)
  .deleteAll()
  .typeString("1st Birthday")
  .pauseFor(2500)
  .start();
// *******************************************************************************
