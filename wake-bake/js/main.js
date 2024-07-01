(function () {
  document.addEventListener("click", burgerInit);

  function burgerInit(event) {
    const target = event.target;

    const burgerIcon = target.closest(".burger-icon");
    const burgerNavLink = target.closest(".nav__link");
    const clientWidth = document.documentElement.clientWidth;

    if ((!burgerIcon && !burgerNavLink) || clientWidth > 900) return;

    document.body.classList.toggle("body--opened-menu");
  }

  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".about__img-button");

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    document.body.classList.toggle("body--opened-modal");
  }

  function closeModal(event) {
    event.preventDefault();

    const target = event.target;
    console.dir(target)

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal")
    ) {
      document.body.classList.remove("body--opened-modal");
    }
  }
})();
