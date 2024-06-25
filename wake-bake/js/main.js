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
})();
