const value = document.getElementById('value')

let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]')

const incrementButton = document.querySelector('button[data-action="increment"]')

decrementButton.addEventListener("click", () => {

    counterValue--

    value.innerHTML = counterValue;
})

incrementButton.addEventListener("click", () => {

    counterValue++

    value.innerHTML = counterValue;
})
