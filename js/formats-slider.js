const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  //   direction: "vertical", це не потрібно
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--activ",
  },

  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar", це не потрібно
  //   },
});
