/*
 * main.js
 */

/*
 * Main function
 */
var main = function() {

$('.q').click(function() {
  $(this).closest('.qa-container').find('.a').slideToggle();
});

};

$(document).ready(main);
