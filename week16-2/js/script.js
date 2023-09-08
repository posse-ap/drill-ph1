"use strict";

const editInputElement = document.querySelector("#edit-title");
const updateButton = document.querySelector("#update-btn");
const bookListElement = document.querySelector("#book-list");
let currentEditingElement = null;

bookListElement.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit-btn')) {
    // ここを追加しましょう
  }
});

updateButton.addEventListener('click', function() {
  if (currentEditingElement) {
    // ここを追加しましょう
  }
});
