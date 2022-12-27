import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);

function onClick(evt) {
  evt.preventDefault();
  let delayValue = Number(form.elements.delay.value);
  const stepValue = Number(form.elements.step.value);
  const amountValue = Number(form.elements.amount.value);
  form.reset();

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(res => {
        Notiflix.Notify.success(res);
      })
      .catch(rej => {
        Notiflix.Notify.failure(rej);
      });
    delayValue += stepValue;
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
