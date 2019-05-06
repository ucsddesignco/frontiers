/*
 * main.js
 */

"use strict";

var lgScreen = 960;

function getID(navItem) {
  return "#" + $(navItem).text().trim().replace(/\s+/g, "-").toLowerCase();
}

function highlightNav() {
  // Get current scroll position
  var position = $(this).scrollTop();

  // Compare current scroll position with position of each section
  $(".nav-item").each(function () {
    var targetid = getID(this);
    var target = $(targetid).offset().top + -150;

    // Highlight Partners if at bottom of page
    if (position >= $(document).height() - $(window).height()) {
      $(".nav-item").removeClass("active");
      $(".nav-item:nth-last-child(2)").addClass("active");
    }
    // Highlight target
    else if (position >= target && position < target + $(targetid).height()) {
        $(this).addClass("active");
      } else {
        // Reset highlighting
        $(this).removeClass("active");
      }
  });
}

/*
 * Main function
 */
var main = function main() {
  if (window.location.pathname == '/') {
    highlightNav();
  }

  $(".arrow-yellow").each(function () {
    $(this).append($("<span></span>").load("assets/images/arrow.html"));
  });

  $(".arrow-white").each(function () {
    $(this).append($("<span></span>").load("assets/images/arrow-white.html"));
  });

  $(".arrow").hover(function () {
    $(this).parent().find("svg").css("width", "3rem");
  }, function () {
    $(this).parent().find("svg").css("width", "2rem");
  });

  /* FAQ DRAWER TOGGLE */
  $(".q").click(function () {
    $(this).closest(".faq-item").find(".a").slideToggle(300);
    $(this).toggleClass("active");
  });

  /* NAV ITEM CLICK ACTION */
  $(".nav-item").click(function () {
    // Determine offsets
    var offset = undefined;
    var lastChildOffset = undefined;
    if ($(window).width() < lgScreen) {
      offset = -70;
      lastChildOffset = 0; // -200
    } else {
        offset = 5;
        lastChildOffset = 0;
      }

    var dest = getID(this);

    // Only fade out menu if mobile
    if ($(window).width() < lgScreen) {
      $hamburger.toggleClass("is-active");
      $(".nav-drawer-mobile").fadeToggle(200);
    }

    // Return if dest = Sign Up
    if (dest == "#sign-up") {
      return;
    }

    // Don't scroll to bottom if dest = Partners
    if (dest == "#partners") {
      $("html, body").animate({
        scrollTop: $(dest).offset().top + lastChildOffset
      }, 500);
    } else {
      $("html, body").animate({
        scrollTop: $(dest).offset().top + offset
      }, 500);
    }
  });

  /* HIGHLIGHT ACTIVE MENU ITEM */
  $(window).scroll(function () {
    highlightNav();
  });

  /* Ensure menu is showing on desktop */
  $(window).resize(function () {
    if ($(window).width() >= lgScreen) {
      if ($hamburger.hasClass("is-active")) {
        // Toggle hamburger open/close
        $hamburger.toggleClass("is-active");
        // Toggle menu
        $(".nav-drawer-mobile").hide();
      }
    }
  });

  /* HAMBURGER MENU */
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    // If menu is closed and scrolltop is not 0
    if (!$hamburger.hasClass("is-active") && $(window).scrollTop() > 0) {
      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".nav-drawer-mobile").fadeToggle(200);
    } else {
      // Toggle hamburger open/close
      $hamburger.toggleClass("is-active");
      // Toggle menu
      $(".nav-drawer-mobile").fadeToggle(200);
    }
  });
};

$(document).ready(main);