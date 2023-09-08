"use strict";

const titleInputElement = document.querySelector("#song-title");
const addOrUpdateButtonElement = document.querySelector("#add-or-update-button");
let currentEditingElement = null;

document.querySelectorAll('.edit-button').forEach((btn) => {
  btn.addEventListener('click', function() {
    const songElement = btn.parentElement.querySelector('span');
    titleInputElement.value = songElement.textContent;
    currentEditingElement = songElement;
    addOrUpdateButtonElement.textContent = '更新';
  });
});

addOrUpdateButtonElement.addEventListener('click', function() {
  if (currentEditingElement) {
    // ここを追加しましょう
  }
});