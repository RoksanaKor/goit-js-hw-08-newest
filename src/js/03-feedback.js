// import { _ } from 'lodash';

// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';
// const formEmail = document.querySelector("[name='email']");
// const formMessage = document.querySelector("[name='message']");

// function saveInput() {
//   const email = formEmail.value.trim();
//   const message = formMessage.value.trim();
//   const formData = {
//     email,
//     message,
//   };
// }

// try {
//   const stringedData = JSON.stringify(formData);
//   localStorage.setItem(localStorageKey, stringedData);
// } catch (error) {
//   console.log('stringify error:' + error);
// }

// const throttleSaveInput = _.throttle(saveInput, 500);

// formEmail.addEventListener('input', throttleSaveInput);
// formMessage.addEventListener('input', throttleSaveInput);
// form.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const sentData = {
//     email: formEmail.value.trim(),
//     message: formMessage.value.trim(),
//   };
//   if (sentData.email === '' || sentData.message === '') {
//     alert('Fill all the fields.');
//   } else {
//     console.log(sentData);
//     localStorage.removeItem(localStorageKey);
//     formEmail.value = null;
//     formMessage.value = null;
//   }
// }

// try {
//   const parsedData = JSON.parse(localStorage.getItem(localStorageKey));
//   if (parsedData.email !== '' || parsedData.message !== '') {
//     formEmail.value = parsedData.email;
//     formMessage.value = parsedData.message;
//   }
// } catch (error) {
//   console.log('parse error:' + error);
// }

import _ from 'lodash';

const emailInput = document.querySelector("[name='email']");
const messageInput = document.querySelector("[name='message']");
const form = document.querySelector('.feedback-form');

function saveInput() {
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const data = {
    email,
    message,
  };

  try {
    const stringedData = JSON.stringify(data);
    localStorage.setItem('feedback-form-state', stringedData);
  } catch (error) {
    console.log('stringedData error: ' + error);
  }
}

const throttleSave = _.throttle(saveInput, 500);

emailInput.addEventListener('input', throttleSave);
messageInput.addEventListener('input', throttleSave);
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const sentData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  if (sentData.email === '' || sentData.message === '') {
    alert('Both fields must be filled before sending');
  } else {
    console.log(sentData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = null;
    messageInput.value = null;
  }
}

try {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parsedData.email !== '' || parsedData.message !== '') {
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
} catch (error) {
  console.log('parsedData error: ' + error);
}
