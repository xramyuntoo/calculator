let firstNum = "";
let secondNum = "";
let input = "";
let total = "";
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
    firstNum = "";
    secondNum = "";
    input = "";
    total = "";
    screen.textContent = input;
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
divide.addEventListener("click", () => {
    operator = "/";
});
const seven = document.createElement("button");
seven.textContent = "7";
seven.addEventListener("click", () => {
    input += "7";
    screen.textContent = input;
});
const eight = document.createElement("button");
eight.textContent = "8";
eight.addEventListener("click", () => {
    input += "8";
    screen.textContent = input;
});
const nine = document.createElement("button");
nine.textContent = "9";
nine.addEventListener("click", () => {
    input += "9";
    screen.textContent = input;
});
const multiply = document.createElement("button");
multiply.textContent = "×";
multiply.addEventListener("click", () => {
    operator = "*";
});
const four = document.createElement("button");
four.textContent = "4";
four.addEventListener("click", () => {
    input += "4";
    screen.textContent = input;
});
const five = document.createElement("button");
five.textContent = "5";
five.addEventListener("click", () => {
    input += "5";
    screen.textContent = input;
});
const six = document.createElement("button");
six.textContent = "6";
six.addEventListener("click", () => {
    input += "6";
    screen.textContent = input;
});
const subtract = document.createElement("button");
subtract.textContent = "-";
const one = document.createElement("button");
one.textContent = "1";
one.addEventListener("click", () => {
    input += "1";
    screen.textContent = input;
});
const two = document.createElement("button");
two.textContent = "2";
two.addEventListener("click", () => {
    input += "2";
    screen.textContent = input;
});
const three = document.createElement("button");
three.textContent = "3"; 
three.addEventListener("click", () => {
    input += "3";
    screen.textContent = input;
});
const addition = document.createElement("button");
addition.textContent = "+";
const zero = document.createElement("button");
zero.textContent = "0";
zero.addEventListener("click", () => {
    input += "0";
    screen.textContent = input;
})
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