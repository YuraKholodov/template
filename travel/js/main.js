(function () {
  const btnDate = document.querySelector(".select__date-btn");

  btnDate.addEventListener("click", toggleDate);

  function toggleDate(event) {
    const target = event.target;
    const date = target.closest(".select__wrapper");
    const dateInput = date.querySelector(".select__date-input");

    if (date.classList.contains("select__wrapper--active")) {
      date.classList.remove("select__wrapper--active");
      dateInput.style.maxHeight = 0;
    } else {
      date.classList.add("select__wrapper--active");
      dateInput.style.maxHeight = dateInput.scrollHeight + "px";
    }
  }
})();
