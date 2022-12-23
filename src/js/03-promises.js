import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const allInput = document.querySelectorAll('input');
const delayInput = allInput[0];
const stepInput = allInput[1];
const amountInput = allInput[2];

form.addEventListener('submit', onClick);

function onClick(evt) {
  evt.preventDefault();

  setTimeout(() => {
    for (let i = 1; i <= amountInput.value; i += 1) {
      createPromise(i, i * stepInput.value)
        .then(res => {
          Notiflix.Notify.success(res);
        })
        .catch(rej => {
          Notiflix.Notify.failure(rej);
        });
    }
  }, delayInput.value);
}

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}
