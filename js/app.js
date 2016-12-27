$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    arrows: true,
    prevArrow: "<button class=\"slider__arrow slider__arrow--prev\" type=\"button\"></button>",
    nextArrow: "<button class=\"slider__arrow slider__arrow--next\" type=\"button\"></button>",
    dotsClass: "slider__dots",
    dots: true,
    draggable: false
  });
});
