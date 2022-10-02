const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.getElementById('ingredients')


for (let i = 0; i <= ingredients.length - 1; i++) {

  const li = document.createElement('li')

  li.textContent = ingredients[i];
  li.setAttribute('class', 'item')
  ul.appendChild(li);
  
}



/*
ingredients.map((el) => {
  const li = document.createElement('li')

  li.textContent = el
  li.setAttribute('class', 'item')
  ul.appendChild(li);
}
)
*/
