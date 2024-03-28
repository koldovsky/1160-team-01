let time = 900;
const countDown = document.getElementById("countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" +seconds: seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time--;
}
