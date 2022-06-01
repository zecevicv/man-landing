/* #Banner Slider
======================================================= */
if (document.querySelector('.banner .swiper')) {
  new Swiper('.banner .swiper', {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: '.banner .next',
      prevEl: '.banner .prev',
    },
  });
}