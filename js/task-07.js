const input = document.getElementById('font-size-control')

const text = document.getElementById('text')



input.addEventListener('input', () => {

    const inputValue = input.value
    console.log(inputValue)

    text.style.fontSize = inputValue + "px"

})