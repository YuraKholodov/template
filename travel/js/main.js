(function () {
  const body = document.querySelector("body");
  const heroForm = body.querySelector(".hero__form");
  const modalHeroForm = body.querySelector('.modal .hero__form')

  heroForm.addEventListener("click", toggleDate);
  modalHeroForm.addEventListener("click", toggleDate);

  function toggleDate(event) {
    const target = event.target;
    const btnDate = target.closest(".select__date-btn");
    if (!btnDate) return;
    console.log('rl')

    const date = target.closest(".select__wrapper");
    const dateInput = date.querySelector(".select__date-input");
    const dateInputMobile = heroForm.querySelector(
      ".select__date-input--mobile"
    );
    const modalDateInputMobile = modalHeroForm.querySelector(
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
      if (modalDateInputMobile) {
        modalDateInputMobile.style.maxHeight = 0;
        modalDateInputMobile.style.marginBottom = 0;
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
      if (modalDateInputMobile) {
        modalDateInputMobile.style.maxHeight = modalDateInputMobile.scrollHeight + "px";
        modalDateInputMobile.style.marginBottom = 10 + "px";
      }
    }
  }

  // Бургер меню

  const headerTop = body.querySelector(".header__top");
  headerTop.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu(event) {
    const target = event.target;
    const btnBurger = target.closest(".burger-icon");
    const navLink = target.closest(".header__nav-link");
    const btnConsult = target.closest(".header__btn--mobile");

    if (!btnBurger && !navLink && !btnConsult) return;

    body.classList.toggle("header__nav--active");
  }

  // Модалка найти программу

  const modal = body.querySelector(".modal");
  const modalButton = document.querySelector(".header__form-btn-mobile");

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    body.classList.toggle("body--opened-modal");
  }

  function closeModal(event) {
    event.preventDefault();

    const target = event.target;

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal")
    ) {
      body.classList.remove("body--opened-modal");
    }
  }
})();
