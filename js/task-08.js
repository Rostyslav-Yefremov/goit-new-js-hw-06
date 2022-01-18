const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formProperties = event.currentTarget.elements;

  const formData = {
    email: formProperties.email.value,
    password: formProperties.password.value,
  };

  if (formData.email === '' || formData.password === '') {
    return alert('Пожалуйста, заполните все поля! Я вас очень прошу.');
  }

  console.log(formData);
  event.currentTarget.reset();
});
