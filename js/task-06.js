const input = document.querySelector('#validation-input');
console.log(input);

input.addEventListener('focus', () => {
  console.log('Я получил фокус инпута');
});

input.addEventListener('blur', () => {
  console.log('Я потерял его');
  if (Number(input.dataset.length) !== input.value.length) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
});
