const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.getElementById("ingredients");

// for (const element of ingredients) {
//   const ingredient = document.createElement('li');
//   ingredient.textContent = element;
//   ingredient.classList.add('item');
//   listElements.append(ingredient);
// }

  ingredients.map((el) => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');
  listElements.append(ingredient);
  return ingredient;
})
