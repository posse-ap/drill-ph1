"use strict";

document.getElementById("all").addEventListener("click", function() {
    displayProducts("product");
});

document.getElementById("electronics").addEventListener("click", function() {
    displayProducts("product-electronics");
});

document.getElementById("clothing").addEventListener("click", function() {
    displayProducts("product-clothing");
});

function displayProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    // const products = document.querySelectorAll(".product");
  });
}