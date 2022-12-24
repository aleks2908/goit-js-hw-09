import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);

function onClick(evt) {
  evt.preventDefault();

  const allInput = document.querySelectorAll('input');
  let delay = Number(allInput[0].value);
  const step = Number(allInput[1].value);
  const amount = Number(allInput[2].value);

  evt.currentTarget.reset();

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(res => {
        Notiflix.Notify.success(res);
      })
      .catch(rej => {
        Notiflix.Notify.failure(rej);
      });
    delay += step;
  }
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
