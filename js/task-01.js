const categories = document.getElementById('categories')


const number = categories.children.length;

console.log(`Number of categories: ${number}`)


const item = document.querySelectorAll('.item')

item.forEach(function(element) {
    const itemh2 = element.querySelector('h2')
    const itemElementsNumber = element.querySelector('ul')
    
    console.log(`Category: ${itemh2.textContent}
Elements: ${itemElementsNumber.children.length}`)
}
)
