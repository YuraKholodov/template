const burgerIcon = document.querySelector(".burger-icon");
const body = document.querySelector("body");

burgerIcon.addEventListener("click", () => {
  body.classList.toggle("body--opened-menu");
});
