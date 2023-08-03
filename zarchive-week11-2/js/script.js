const $container = $('.container');
const $button = $('.js-openModal');
const $closeButton = $('.js-closeModal');

$button.click((e) => {
  $container.addClass('openModal');
})

$closeButton.click(() => {

})