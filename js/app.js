/* #Banner Slider
======================================================= */
if (document.querySelector('.banner .swiper')) {
  const thumbs = new Swiper('.banner .slider .swiper', {
    breakpoints: {
      0: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: '.banner .slider .next',
      prevEl: '.banner .slider .prev',
    },
  });
  
  const gallery = new Swiper('.banner .img .swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    thumbs: {
      swiper: thumbs
    }
  });

  
}