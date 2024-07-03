(function () {
  // Burger----------------------------------------
  document.addEventListener("click", burgerInit);

  function burgerInit(event) {
    const target = event.target;

    const burgerIcon = target.closest(".burger-icon");
    const burgerNavLink = target.closest(".nav__link");
    const clientWidth = document.documentElement.clientWidth;

    if ((!burgerIcon && !burgerNavLink) || clientWidth > 900) return;

    document.body.classList.toggle("body--opened-menu");
  }

  // Modal window-------------------------------------

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

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal")
    ) {
      document.body.classList.remove("body--opened-modal");
    }
  }

  // Tabs--------------------------------------------

  const tabControls = document.querySelector(".tab-controls");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(event) {
    const tabControl = event.target.closest(".tab-controls__link");

    if (!tabControl) return;
    event.preventDefault();
    if (tabControl.classList.contains("tab-controls__link--active")) return;

    const tabContentId = tabControl.getAttribute("href");
    const tabContent = document.querySelector(tabContentId);
    const activeControl = document.querySelector(".tab-controls__link--active");
    const showTabContent = document.querySelector(".tab-content--show");

    if (activeControl)
      activeControl.classList.remove("tab-controls__link--active");
    if (showTabContent) showTabContent.classList.remove("tab-content--show");

    tabControl.classList.add("tab-controls__link--active");
    tabContent.classList.add("tab-content--show");
  }

  // Accordion

  const accordionList = document.querySelectorAll(".accordion-list");
  // Навешиваем на все аккордеоны событие
  accordionList.forEach((element) => {
    element.addEventListener("click", (event) => {
      // Текущий таргет (аккордеон)
      const accordionCurrentList = event.currentTarget;
      // Кнопка на которую нажали
      const accordionControl = event.target.closest(".accordion-list__control");
      // Проверка что нажали на кнопку
      if (!accordionControl) return;
      // Находим все открытые элементы в текущем листе
      const openedItems = accordionCurrentList.querySelectorAll(
        ".accordion-list__item--opened"
      );
      // Находим родителя кнопки
      const accordionItem = accordionControl.parentElement;
      // Находим соседний эл-т кнопки
      const accordionContent = accordionControl.nextElementSibling;

      if (openedItems) {
        openedItems.forEach((elem) => {
          // Сворачиваем все элементы кроме кликнутого
          if (elem !== accordionItem) {
            elem.classList.remove("accordion-list__item--opened");
            elem.querySelector(".accordion-list__content").style.maxHeight =
              null;
          }
        });
      }
      // Переключаем на кликнутом элементе модификатор
      accordionItem.classList.toggle("accordion-list__item--opened");
      // Скрываем или открываем элемент в зависимости от модификатора
      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();
