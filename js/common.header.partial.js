const burgerMenu = document.querySelector(".header__menu-btn");
const headerNavMenu = document.querySelector(".header__nav-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerNavMenu.classList.toggle("active");

  if (headerNavMenu.classList.contains("active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

document.querySelectorAll(".header__nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    headerNavMenu.classList.remove("active");
  })
);

function disableScroll() {
  const scrollY = window.scrollY;

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
}

function enableScroll() {
  const scrollY = parseInt(document.body.style.top || "0", 10);
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
}
