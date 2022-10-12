// let counterValue = 0
// function func () {
//   counterValue = counterValue += 1
// }
// const setFocusBtn = document.querySelector('[data-action="increment"]');

// setFocusBtn.addEventListener("click", func);

//   console.log(counterValue)




// let counterValue = 0
// const text = document.querySelector('[data-action="increment"]');
//   text.addEventListener("click", function () {this.counterValue = counterValue += 1});
//   console.log(counterValue)




  let counterValue = 0
const text = document.querySelector('[data-action="increment"]');
text.addEventListener("click", () => {
    counterValue = counterValue += 1
    value.textContent = counterValue
    console.log(counterValue)
  });
  const text2 = document.querySelector('[data-action="decrement"]');
text2.addEventListener("click", () => {
    counterValue = counterValue -= 1
    value.textContent = counterValue
    console.log(counterValue)
  });