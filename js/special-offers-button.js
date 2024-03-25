const contacts__button = document.getElementById("contacts__button");

contacts__button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    contacts__button.style.setProperty('--mouse-x', x + "px");
    contacts__button.style.setProperty('--mouse-y', y + "px");
});
