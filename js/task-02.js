const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

//! 1
// ingredients.forEach((el) => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = `${el}`;
//   listEl.insertAdjacentElement('beforeend', liEl)
// });

//! 2
// const markup = ingredients.map(el => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = `${el}`
//   return liEl.outerHTML;
// }).join('');

// listEl.insertAdjacentHTML('beforeend', markup);

//! 3
const newList = ingredients.map(el => `<li class='item'>${el}</li>`).join('');

listEl.insertAdjacentHTML('beforeend', newList);
