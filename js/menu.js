function init() {
    import("./common.header.partial.js");
  }
  
  const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });
  