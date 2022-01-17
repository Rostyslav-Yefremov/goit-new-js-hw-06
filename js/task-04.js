const counterRef = document.querySelector('#value');
console.log(counterRef);
const decrement = document.querySelector('[data-action="decrement"]');
console.log('Это декремент', decrement.dataset.action);
const increment = document.querySelector('[data-action="increment"]');
console.log('Это инкремент', increment.dataset.action);

let counterValue = 0;

decrement.addEventListener('click', () => {
  console.log('Вычитаю');
  counterValue -= 1;
  counterRef.textContent = counterValue;
});

increment.addEventListener('click', () => {
  console.log('Прибавляю');
  counterValue += 1;
  counterRef.textContent = counterValue;
});
