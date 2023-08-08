const swiper = new Swiper('.infinite-slider', {
  navigation: {
    nextEl: '.infinite-slider__next',
    prevEl: '.infinite-slider__prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 0,
  autoWidth: false,
  centeredSlides: true,
  loop: true,
  768: {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    centeredSlides: true,
  }
});