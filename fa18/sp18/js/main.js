$(document).ready(function() {
  console.log('JS loaded!');

  $(".mobile-link").click(function() {
    $(".df-nav").toggleClass("nav-open");
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  function toggleChevron(e) {
    const prev = $(e.target).prev();
    prev.find('i.indicator').toggleClass('fa-chevron-down fa-chevron-up');
  }

  $('.df__faq').on('hidden.bs.collapse', toggleChevron);
  $('.df__faq').on('shown.bs.collapse', toggleChevron);
});
