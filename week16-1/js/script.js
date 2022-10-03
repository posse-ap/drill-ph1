'use strict';

const button = document.getElementById('js-button');
const loader = document.getElementById('js-loader');
let isClicked = false;

button.addEventListener('click', () => {

  isClicked = true;

  if(isClicked) {
    loader.classList.add('is-show');
    setTimeout(() => {
      loader.classList.remove('is-show');
    }, 3000);
  }
});
