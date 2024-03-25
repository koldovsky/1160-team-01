const contactsButtons = document.querySelectorAll(".contacts__button");

contactsButtons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    event.target.style.setProperty("--mouse-x", x + "px");
    event.target.style.setProperty("--mouse-y", y + "px");
  });
});
