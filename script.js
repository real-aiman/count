const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
resetButtonEl.addEventListener("click", function () {
    counterValueEl.textContent = 0;
});

decreaseButtonEl.addEventListener("click",function(){
      let currentValue = counterValueEl.textContent;

    let currentValueAsNumber = +currentValue;

    let newValue = currentValueAsNumber - 1;

    if (newValue < 0) {
        newValue = 0;
    }

    counterValueEl.textContent=newValue;
})
increaseButtonEl.addEventListener("click",function(){
      let currentValue = counterValueEl.textContent;

    let currentValueAsNumber = +currentValue;

    let newValue = currentValueAsNumber + 1;

    counterValueEl.textContent=newValue;
});