(function () {
  const heroForm = document.querySelector(".hero__form");

  heroForm.addEventListener("click", toggleDate);

  function toggleDate(event) {
    const target = event.target;
    const btnDate = target.closest(".select__date-btn");
    if (!btnDate) return;

    const date = target.closest(".select__wrapper");
    const dateInput = date.querySelector(".select__date-input");
    const dateInputMobile = heroForm.querySelector(
      ".select__date-input--mobile"
    );

    if (date.classList.contains("select__wrapper--active")) {
      date.classList.remove("select__wrapper--active");
      if (dateInput) {
        dateInput.style.maxHeight = 0;
      }
      if (dateInputMobile) {
        dateInputMobile.style.maxHeight = 0;
        dateInputMobile.style.marginBottom = 0;
      }
    } else {
      date.classList.add("select__wrapper--active");
      if (dateInput) {
        dateInput.style.maxHeight = dateInput.scrollHeight + "px";
      }
      if (dateInputMobile) {
        dateInputMobile.style.maxHeight = dateInputMobile.scrollHeight + "px";
        dateInputMobile.style.marginBottom = 10 + "px";
      }
    }
  }

  // Бургер меню

  const headerTop = document.querySelector(".header__top");
  headerTop.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu(event) {
    const target = event.target;
    const btnBurger = target.closest(".burger-icon");
    const navLink = target.closest(".header__nav-link");
    const btnConsult = target.closest(".header__btn--mobile");

    if (!btnBurger && !navLink && !btnConsult) return;

    headerTop.classList.toggle("header__nav--active");
  }
})();
