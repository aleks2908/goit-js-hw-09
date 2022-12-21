const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-Stop]');

startBtn.addEventListener('click', startChangeBgColor);
stoptBtn.addEventListener('click', stopChangeBgColor);

let changeBgColorInterval = null;

function startChangeBgColor() {
  startBtn.disabled = true;
  changeBgColorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBgColor() {
  startBtn.disabled = false;
  clearInterval(changeBgColorInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
