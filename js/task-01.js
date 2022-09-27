const categories = document.getElementById('categories')


const number = categories.children.length;

const numberOfCategories = `Number of categories: ${number}`

console.log(numberOfCategories)

const item = document.querySelectorAll('.item')

const itemName = document.querySelectorAll('.item h2')

const itemElements = document.querySelectorAll('.item ul')

item.forEach(function(element) {
    const itemh2 = element.querySelector('h2')
    const itemElementsNumber = element.querySelector('ul')
    
    console.log(`Category: ${itemh2.textContent}
Elements: ${itemElementsNumber.children.length}`)
}
)
