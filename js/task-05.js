const input = document.getElementById('name-input')

const output = document.getElementById('name-output')

input.addEventListener('input', (text) => {
    output.innerHTML = text.currentTarget.value

    if (text.currentTarget.value === '') {

        output.innerHTML = 'Anonymous'
    }
})
