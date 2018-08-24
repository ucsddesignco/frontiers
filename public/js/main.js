/*
 * main.js
 */

function highlightNav() {
  // Get current scroll position
  const position = $(this).scrollTop();

  // Compare current scroll position with position of each section
  $('.nav-item').each(function() {
    const targetid = "#" + $(this).text().toLowerCase();
    const target = $(targetid).offset().top + -150;

    // Reset highlighting
    $(this).removeClass('active');

    // Highlight target
    if (position >= target && position < target + $(targetid).height()) {
      $(this).addClass('active');
    }

    // Highlight Sign-Up if at bottom of page
    if (position >= $(document).height() - $(window).height()) {
      $('.nav-item').removeClass('active');
      $('.nav-item:last-child').addClass('active');
    }

    // Highlight Sponsors if near bottom of page
    else if (position >= $(document).height() - $(window).height() - 200) {
      $('.nav-item').removeClass('active');
      $('.nav-item:nth-last-child(2)').addClass('active');
    }
  });
}

/*
 * Main function
 */
var main = function() {
  highlightNav();

  /* FAQ DRAWER TOGGLE */
  $('.q').click(function() {
    $(this).closest('.qa-container').find('.a').slideToggle(300);
    $(this).toggleClass('active');
  });

  /* NAV ITEM CLICK ACTION */
  $(".nav-item").click(function() {
    const dest = "#" + $(this).text().toLowerCase();

    $hamburger.toggleClass("is-active");
    $(".nav-drawer").fadeToggle(200);

   $('html, body').animate({
      scrollTop: $(dest).offset().top + -70
   }, 500);
  });

  /* HIGHLIGHT ACTIVE MENU ITEM */
  $(window).scroll(function() {
    highlightNav();
  });

  /* HAMBURGER MENU */
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    // If menu is closed and scrolltop is not 0
    if (!$hamburger.hasClass("is-active") && $(window).scrollTop() > 0) {
      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".nav-drawer").slideToggle(400);
    } else {
      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".nav-drawer").slideToggle(400);
    }
  });

};

$(document).ready(main);
