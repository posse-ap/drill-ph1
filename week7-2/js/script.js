"use strict";

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input[type="text"]')

form.addEventListener('submit', e => {

  inputs.forEach(input => console.log(input.value))
})

