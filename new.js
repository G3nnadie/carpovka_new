


var accordion = function() {
  $('.w-accordion-header').on('click', function() {
    $(this).next('.w-accordion-body').not(':animated').slideToggle(200)
  })
  $('.w-accordion-header').click(function () {
    $(this).parent('.w-accordion li').toggleClass('active');
  });
}
accordion();