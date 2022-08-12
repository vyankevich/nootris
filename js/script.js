$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});

new Swiper(".items-slider ", {
  spaceBetween: 10,
  loop: false,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
