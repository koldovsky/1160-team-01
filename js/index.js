function init() {
  import("./common.header.partial.js");
  import("./what-to-expect.partial.js");
  import("./index.about-us.partial.js");
  import("./special-offers-pop-up.js");
  import("./special-offers-countdown.js");
  import("./dishes-carousel.js");
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
