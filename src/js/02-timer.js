import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
let timeToTarget = '';
let selectedDate = '';
startBtn.addEventListener('click', startCount);

const daysToTarget = document.querySelector('span[data-days]');
const hoursToTarget = document.querySelector('span[data-hours]');
const minutesToTarget = document.querySelector('span[data-minutes]');
const secondsToTarget = document.querySelector('span[data-seconds]');
// console.log("​days", days)

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      // alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
});

function startCount() {
  const interval = setInterval(() => {
    const currentTime = new Date();
    let time = convertMs(selectedDate - currentTime);
  
    daysToTarget.textContent = addLeadingZero(time.days);
    hoursToTarget.textContent = addLeadingZero(time.hours);
    minutesToTarget.textContent = addLeadingZero(time.minutes);
    secondsToTarget.textContent = addLeadingZero(time.seconds);

    if (selectedDate - currentTime < 1000) {
      clearInterval(interval);
      // return;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
