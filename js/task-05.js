const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
});
