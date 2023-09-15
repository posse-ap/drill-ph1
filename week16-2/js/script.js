"use strict";

const editInputElement = document.getElementById("edit-title");
const updateButton = document.getElementById("update-btn");
const bookListElement = document.getElementById("book-list");

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
