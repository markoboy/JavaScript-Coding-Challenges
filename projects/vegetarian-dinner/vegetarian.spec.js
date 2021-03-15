const { expect } = chai;

describe('vegetarian.js - base functionality', () => {
  beforeEach(() => {
    ItalianMenu.setVegetarianDishes([
      {
        name: 'Eggplant Parmesan',
        vegetarian: true,
      },
      {
        name: 'Spaghetti & Meatballs',
        vegetarian: false,
      }
    ]);
  });

  it('contains a getVegetarianDishes() method', () => {
    expect(ItalianMenu.getVegetarianDishes).to.be.a('function');
  });

  it('returns all vegetarian dishes when getVegetarianDishes is called', () => {
    const filtered = ItalianMenu.getVegetarianDishes().map(d => d.vegetarian);

    expect(filtered).to.be.an('array');
    expect(filtered).to.include(true);
    expect(filtered).to.not.include(false);
  });

  it('renders all vegetarian dishes on the DOM with renderVegetarianDishes()', () => {
    const ul = document.createElement('ul');
    const dishes = ItalianMenu.getVegetarianDishes();
    ItalianMenu.renderVegetarianDishes(ul, dishes);
    document.body.appendChild(ul);

    expect(ul.firstElementChild.textContent).to.be.equal(dishes[0].name);
    expect(ul.childElementCount).to.be.equal(dishes.length);
  });
});
