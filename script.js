const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const strengths = document.querySelectorAll('.strength > div');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

passwordInput.addEventListener('input', (e) => {
  const length = e.target.value.length;
  const score = length === 16 ? 4 : length >= 12 ? 3 : length >= 8 ? 2 : length >= 6 ? 1 : 0;
  if (score === 4) {
    strengths.forEach((strength) => (strength.style.backgroundColor = 'green'));
  } else if (score === 3) {
    strengths.forEach(
      (strength, index) =>
        (strength.style.backgroundColor = `${index < score ? 'purple' : 'lightgray'}`),
    );
  } else if (score === 2) {
    strengths.forEach(
      (strength, index) =>
        (strength.style.backgroundColor = `${index < score ? 'yellow' : 'lightgray'}`),
    );
  } else if (score === 1) {
    strengths.forEach(
      (strength, index) =>
        (strength.style.backgroundColor = `${index < score ? 'red' : 'lightgray'}`),
    );
  } else {
    strengths.forEach((strength) => (strength.style.backgroundColor = 'lightgray'));
  }
});

confirmPasswordInput.addEventListener('focus', (e) => {
  e.target.classList.remove('error');
  passwordInput.classList.remove('error');
  if (passwordInput.nextElementSibling) {
    passwordInput.nextElementSibling.remove();
  }
});

confirmPasswordInput.addEventListener('blur', (e) => {
  if (e.target.value !== passwordInput.value) {
    e.target.classList.add('error');
    passwordInput.classList.add('error');
    const message = document.createElement('p');
    message.textContent = '* Passwords do not match';
    message.classList.add('message');
    passwordInput.parentElement.appendChild(message);
  }
});
