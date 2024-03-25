const burgerMenu = document.querySelector(".header__menu-btn");
const headerNavMenu = document.querySelector(".header__nav-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerNavMenu.classList.toggle("active");
});

document.querySelectorAll(".header__nav-list").forEach((n) =>
  n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    headerNavMenu.classList.remove("active");
  })
);
