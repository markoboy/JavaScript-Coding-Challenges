const ItalianMenu = (() => {
  let _dishes = [];

  function getVegetarianDishes() {
    return _dishes.filter(d => d.vegetarian);
  }

  function setVegetarianDishes(dishes) {
    _dishes = dishes;
  }

  function _getListItem(content) {
    const li = document.createElement('li');
    li.textContent = content;

    return li;
  }

  function renderVegetarianDishes(list, dishes) {
    const fragment = document.createDocumentFragment();

    for(const dish of dishes) {
      fragment.appendChild(_getListItem(dish.name));
    }

    list.appendChild(fragment);
  }

  return {
    getVegetarianDishes,
    setVegetarianDishes,
    renderVegetarianDishes,
  };
})();
