let firstNum = 0;
let secondNum = 0;
let operator = "";

let buttons = document.querySelectorAll(".button");

function add(numOne, numTwo) {
    return numOne + numTwo;
}
  
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(operand, numOne, numTwo) {
    switch(operand) {
        case "+":
            add(numOne, numTwo);
        case "-":
            subtract(numOne, numTwo);
        case "*":
            multiply(numOne, numTwo);
        case "/":
            divide(numOne, numTwo);
    }
}
  