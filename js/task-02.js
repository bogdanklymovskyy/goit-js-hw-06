const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (const iterator of ingredients) {
  const createli = document.createElement("li");
console.log(createli)
  document.querySelector('#ingredients').prepend(createli);
const createp = document.createElement("p");
  createp.textContent = iterator;
  document.querySelector('li').append(createp)
  const classadd = document.querySelector('li').classList.add("item")
console.log(classadd)
}
