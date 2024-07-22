const accordion = document.querySelector(".accordion");
const accordionItemsList = accordion.querySelectorAll(".accordion__item");

accordion.addEventListener("click", toggleAccordion);

function toggleAccordion(event) {
  const target = event.target;
  const accordionBtn = target.closest(".accordion__btn");

  if (!accordionBtn) return;

  const currentItem = accordionBtn.parentElement;
  const currentContent = currentItem.querySelector(".accordion__content");

  accordionItemsList.forEach((elem) => {
    if (
      elem != currentItem &&
      elem.classList.contains("accordion__item--active")
    ) {
      elem.classList.remove("accordion__item--active");
      elem.querySelector(".accordion__content").style.maxHeight = 0;
    }
  });

  if (currentItem.classList.contains("accordion__item--active")) {
    currentItem.classList.remove("accordion__item--active");
    currentContent.style.maxHeight = 0;
  } else {
    currentItem.classList.add("accordion__item--active");
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  }
}

const activeAccordion = accordionItemsList[2];
const activeContent = activeAccordion.querySelector(".accordion__content");

activeAccordion.classList.add("accordion__item--active");
activeContent.style.maxHeight = activeContent.scrollHeight + "px";
