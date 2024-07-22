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

  // Аккордеон

  const accordeon = document.querySelector(".accordeon");
  accordeon.addEventListener("click", toggleAccordeon);

  function toggleAccordeon(event) {
    const target = event.target;

    if (!target.classList.contains("accordeon__title")) return;

    const accordeonItemsList = accordeon.querySelectorAll(".accordeon__item");
    const accordeonCurItem = target.closest(".accordeon__item");
    const accordeonCurContent = accordeonCurItem.querySelector(
      ".accordeon__content"
    );

    accordeonItemsList.forEach((item) => {
      if (
        item != accordeonCurItem &&
        item.classList.contains("accordeon__item--active")
      ) {
        item.classList.remove("accordeon__item--active");
        item.querySelector(".accordeon__content").style.maxHeight = 0;
      }
    });

    accordeonCurItem.classList.toggle("accordeon__item--active");

    if (accordeonCurItem.classList.contains("accordeon__item--active")) {
      accordeonCurContent.style.maxHeight =
        accordeonCurContent.scrollHeight + "px";
    } else {
      accordeonCurContent.style.maxHeight = 0;
    }
  }
})();
