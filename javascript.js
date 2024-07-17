let firstNum = 0;
let secondNum = 0;
let operator = "";
let equated = 0;

let buttons = document.querySelectorAll(".button");
let mainDisplay = document.querySelector(".main");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].classList.contains("number")) {
            if (mainDisplay.textContent === firstNum || mainDisplay.textContent === equated) {
                mainDisplay.textContent = "";
            }

            if (mainDisplay.textContent.length === 13) {
                mainDisplay.textContent = mainDisplay.textContent;
            } else {
                mainDisplay.textContent += buttons[i].textContent;
            }

        } else if (buttons[i].textContent === "AC") {
            mainDisplay.textContent = "";
            firstNum = 0;
            secondNum = 0;
            operator = "";
            equated = 0;

        } else if (buttons[i].textContent === "del") {
            mainDisplay.textContent = mainDisplay.textContent.slice(0, mainDisplay.textContent.length - 1);

        } else if (buttons[i].classList.contains("operate")) {
            if (operator !== "") {
                secondNum = mainDisplay.textContent;
                mainDisplay.textContent = operate(operator, firstNum, secondNum);
                mainDisplay.textContent = mainDisplay.textContent.slice(0, 13);
                equated = mainDisplay.textContent;
                firstNum = equated;
                operator = buttons[i].textContent;
            } else {
                firstNum = mainDisplay.textContent;
                operator = buttons[i].textContent;
            }

        } else if (buttons[i].textContent === "=") {
            secondNum = mainDisplay.textContent;
            mainDisplay.textContent = operate(operator, firstNum, secondNum);
            mainDisplay.textContent = mainDisplay.textContent.slice(0, 13);
            equated = mainDisplay.textContent;
            operator = "";
        } else if (buttons[i].textContent === "+/-") {
            mainDisplay.textContent = changeSign(+mainDisplay.textContent);
        }
    });
}

function add(numOne, numTwo) {
    return +numOne + +numTwo;
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

function mod(numOne, numTwo) {
    return numOne % numTwo;
}

function changeSign(number) {
    if (number < 0) {
        return Math.abs(number);
    }
    return -number;
}

function operate(operand, numOne, numTwo) {
    switch(operand) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
        case "%":
            return mod(numOne, numTwo); 
    }
}
  