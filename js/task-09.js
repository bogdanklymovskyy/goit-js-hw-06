function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const link = document.querySelector('.change-color');
const body = document.querySelector('body')
const span = document.querySelector('.color');


let color = getRandomHexColor()


link.addEventListener("click", () => {
body.style.backgroundColor = color
span.textContent = color
});