const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// let value = input.value
// text.style.fontSize = `${value}px`;
// console.log(value)

input.addEventListener('input', ({target: {value}}) => {
    text.style.fontSize = value + 'px'
 })