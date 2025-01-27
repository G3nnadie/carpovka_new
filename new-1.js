

// Specialists sl only PC
if( $(window).width() > 768) {
  var swiper = new Swiper(".w-specialists__sl", {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".w-specialists__next",
      prevEl: ".w-specialists__prev",
    },
  });
}