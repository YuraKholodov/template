(function () {
  const menuBtn = document.querySelector(".menu__btn");
  const menuMobile = document.querySelector(".header__menu");

  menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu--open");
  });

  // Слайдер feedback

  new Swiper(".feedback__slider", {
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".feedback__pagination",
    },
  });

  // Слайдер certificates

  new Swiper(".certificates__slider", {
    slidesPerView: 3,
    spaceBetween: 15,

    pagination: {
      el: ".certificates__pagination",
    },
  });
})();
