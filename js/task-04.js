document.querySelector(`button[data-action="decrement"]`).addEventListener("click", fnDecrement);
document.querySelector(`button[data-action="increment"]`).addEventListener("click", fnIncrement);

let counterValue = 0;


function fnDecrement() {
    currentValue(counterValue - 1);
};
function fnIncrement() {
    currentValue(counterValue + 1);
};



const currentValue = item => {
    if(counterValue === item) return;
    counterValue = item;
    document.querySelector(`#value`).textContent = String(item);
};