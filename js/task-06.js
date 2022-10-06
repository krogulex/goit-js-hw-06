const input = document.getElementById("validation-input");

const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", (symbols) => {
  const symbolsLength = symbols.currentTarget.value.length;

  if (symbolsLength === Number(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
