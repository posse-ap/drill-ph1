const container = document.querySelector('.container');
const button = document.querySelector('.js-openModal');
const closeButton = document.querySelector('.js-closeModal');

button.addEventListener('click', () => {
  container.classList.add('openModal');
});

closeButton.addEventListener('click', () => {

});