let buttons = document.querySelectorAll("input[type='button']");
let numbers = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".arithmetic-func");
let equal = document.querySelector("#equal");
let decimal = document.querySelector("#decimal");
let display = document.querySelector("#result");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        const key = e.target;
        const keyContent = key.value;
        const displayedNum = display.value;
        if (display.value === '0') {
            display.value = keyContent;
        }
        else {
            display.value = displayedNum + key.value;
        }
    })
});

clear.addEventListener("click", () => {
    display.value = '0';
})

del.addEventListener("click", () => {
    const arr = []
    for(let i of display.value){
        arr.push(i);
    }
    const arr2 = arr.slice(0, -1);
    display.value = null; 
    for(let i of arr2){
        display.value += i;
    }
})

/**operations.forEach((operator) => {
    operator.addEventListener("click", () => {

    })
})**/

const calculate = (n1, operator, n2) => {
    if(operator.value === '+') {
        result = n1 + n2;
    }
    else if(operator.value === '-') {
        result = n1 - n2;
    }
    else if(operator.value === '*') {
        result = n1 * n2;
    }
    else if(operator.value === '/') {
        result = n1 / n2;
    }
    else if(operator.value === '%') {
        result = n1 % n2;
    }
};
