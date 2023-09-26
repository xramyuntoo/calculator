let firstNum = "";
let secondNum = "";
let total = "0";
let operator = "";
console.log(parseInt(total));

function calculate (firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            total = firstNum + secondNum;
            break;
        case "-":
            total = firstNum - secondNum;
            break;
        case "/":
            total = firstNum / secondNum;
            break;
        case "*":
            total = firstNum / secondNum;
            break;
        default:
            console.log("calculate function switch default hit");
    }
    return total;
}


const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
const calcBackground = document.createElement("div");
calcBackground.id = "calcBackground";
const calculator = document.createElement("div");
calculator.id = "calculator";

const screen = document.createElement("div");
screen.id = "screen";
screen.textContent = total;
const clear = document.createElement("button");
clear.textContent = "C";
clear.addEventListener("click", () => {
    firstNum = "0";
    secondNum = "0";
    total = "0";
});
const posOrNeg = document.createElement("button");
posOrNeg.textContent = "+/-";
posOrNeg.addEventListener("click", () => {
    if (total > 0) {
        total = total * -1;
    } else {
        total = total * 1;
    }
});
const percentage = document.createElement("button");
percentage.textContent = "%";
percentage.addEventListener("click", () => {
    total = total / 100;
});
const divide = document.createElement("button");
divide.textContent = "÷";
const seven = document.createElement("button");
seven.textContent = "7";
const eight = document.createElement("button");
eight.textContent = "8";
const nine = document.createElement("button");
nine.textContent = "9";
const multiply = document.createElement("button");
multiply.textContent = "×";
const four = document.createElement("button");
four.textContent = "4";
const five = document.createElement("button");
five.textContent = "5";
const six = document.createElement("button");
six.textContent = "6";
const subtract = document.createElement("button");
subtract.textContent = "-";
const one = document.createElement("button");
one.textContent = "1";
const two = document.createElement("button");
two.textContent = "2";
const three = document.createElement("button");
three.textContent = "3"; 
const addition = document.createElement("button");
addition.textContent = "+";
const zero = document.createElement("button");
zero.textContent = "0";
const period = document.createElement("button");
period.textContent = ".";
const equals = document.createElement("button");
equals.textContent = "=";

calculator.appendChild(screen);
calculator.appendChild(clear);
calculator.appendChild(posOrNeg);
calculator.appendChild(percentage);
calculator.appendChild(divide);
calculator.appendChild(seven);
calculator.appendChild(eight);
calculator.appendChild(nine);
calculator.appendChild(multiply);
calculator.appendChild(four);
calculator.appendChild(five);
calculator.appendChild(six);
calculator.appendChild(subtract);
calculator.appendChild(one);
calculator.appendChild(two);
calculator.appendChild(three);
calculator.appendChild(addition);
calculator.appendChild(zero);
calculator.appendChild(period);
calculator.appendChild(equals);
calcBackground.appendChild(calculator);
container.appendChild(calcBackground);
body.appendChild(container);