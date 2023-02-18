import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(saveDataOnInput, 500));
feedbackForm.addEventListener('submit', submitForm, { once: true });
const dataForm = {};

function saveDataOnInput() {
  dataForm.email = feedbackForm.email.value;
  dataForm.message = feedbackForm.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function checkOnForm() {
  if (localStorage) {
    const localStorageData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    feedbackForm.email.value = localStorageData.email;
    feedbackForm.message.value = localStorageData.message;
  }
}

function submitForm(e) {
  e.preventDefault();
  console.log(dataForm);
  localStorage.clear();
  feedbackForm.reset();
}
checkOnForm();
