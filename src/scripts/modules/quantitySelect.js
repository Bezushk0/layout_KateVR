export const setupQuantitySelect = () => {
  const orderPlace = document.getElementById('order-place');

  const setupSelect = (selectElement) => {
    const currentValue = selectElement.querySelector('.select__current-value');
    const listWrapper = selectElement.querySelector('.select__list-wrapper');
    const items = Array.from(listWrapper.querySelectorAll('.select__item'));

    selectElement.addEventListener('click', () => {
      listWrapper.classList.toggle('select__list-wrapper--visible');
    });

    listWrapper.addEventListener('click', (event) => {
      const li = event.target.closest('.select__item');

      if (!li) return;

      const selectedValue = li.textContent.trim();
      currentValue.textContent = selectedValue;

      const selectedLi = selectElement.querySelector('.select__item--selected');
      selectedLi?.classList.remove('select__item--selected');
      li.classList.add('select__item--selected');

      listWrapper.classList.remove('select__list-wrapper--visible');
    });
  };

  const setupQuantity = (orderElement) => {
    const price = orderElement.querySelector('.order__price-count');
    const qtySelect = orderElement.querySelector('.select-qty');
    const qtySelectValue = qtySelect.querySelector('.select-qty__current-value');
    const qtySelectList = qtySelect.querySelector('.select-qty__list-wrapper');
    const qtyItems = Array.from(qtySelectList.querySelectorAll('.select-qty__item'));

    qtySelect.addEventListener('click', () => {
      const selectedValue = qtySelectValue.textContent.trim();
      qtyItems.forEach((item) => {
        item.classList.toggle('hidden', item.textContent === selectedValue);
      });
      qtySelectList.classList.toggle('select-qty__list-wrapper--visible');
    });

    qtySelectList.addEventListener('click', (event) => {
      const li = event.target.closest('.select-qty__item');
      if (!li || li.classList.contains('hidden')) return;

      const liText = li.textContent.trim();
      qtySelectValue.textContent = liText;
      price.textContent = `${+liText * 1200}$`;

      const selectedLi = qtySelect.querySelector('.select-qty__item--selected');
      selectedLi?.classList.remove('select-qty__item--selected');
      li.classList.add('select-qty__item--selected');

      qtySelectList.classList.remove('select-qty__list-wrapper--visible');
    });
  };

  // Настройка выбора количества
  setupQuantity(orderPlace);

  // Настройка всех выпадающих списков
  const selects = document.querySelectorAll('.select');
  selects.forEach(setupSelect);
};
