const input = document.getElementById('validation-input')

const dataLength = input.getAttribute('data-length')

input.addEventListener('input', (symbols) => {

const symbolsLength = symbols.currentTarget.value.length


    if (symbolsLength === Number(dataLength)) {
        input.classList.remove("invalid")
        input.classList.add("valid")
        console.log(input.classList)
    } else {

        input.classList.remove("valid")
        input.classList.add("invalid")
        console.log(input.classList)
}
})