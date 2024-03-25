const contactsButtons = document.querySelectorAll(".contacts__button");

contactsButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    e.target.style.setProperty("--mouse-x", x + "px");
    e.target.style.setProperty("--mouse-y", y + "px");
  });
});
