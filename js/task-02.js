const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listRef = document.querySelector('#ingredients');

const listIngredients = ingredients.map((el) => {
  const items = document.createElement('li');

  items.textContent = el;
  items.classList.add('item');

  return items;
});

listRef.append(...listIngredients);

console.log(listRef);
