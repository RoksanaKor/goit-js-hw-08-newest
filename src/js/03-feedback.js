import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// const object = {
//   email: form.elements.email.value,
//   message: form.elements.message.value,
// };
// const dataJSON = JSON.stringify(object);

form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';

form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

form.elements.email.addEventListener(
  'input',
  _.throttle(event => {
    localStorage.setItem(localStorageKey, event.target.value);
  }, 500)
);

form.elements.message.addEventListener(
  'input',
  _.throttle(event => {
    localStorage.setItem(localStorageKey, event.target.value);
  }, 500)
);

form.addEventListener(
  'submit',
  _.throttle(event => {
    event.preventDefault();
    console.log(localStorage.getItem(localStorageKey));
    localStorage.removeItem(localStorageKey);
    form.elements.email.value = '';
    form.elements.message.value = '';
  }, 500)
);
