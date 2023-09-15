"use strict";

const titleInputElement = document.getElementById("movie-title");
const updateButtonElement = document.getElementById("update-button");
let currentEditingElement = null;

document.querySelectorAll('.edit-button').forEach((btn) => {
  btn.addEventListener('click', function() {
    // ここを追加しましょう
  });
});

updateButtonElement.addEventListener('click', function() {
  if (currentEditingElement) {
    // ここを追加しましょう
  }
});
