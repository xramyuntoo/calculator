let firstNum = "";
let secondNum = "";
let input = "";
let total = "";
let operator = "";
console.log(parseInt(total));

function calculate (firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            total = (parseInt(firstNum)) + (parseInt(secondNum));
            break;
        case "-":
            total = parseInt(firstNum) - parseInt(secondNum);
            break;
        case "/":
            if (parseInt(secondNum) === 0) {
                let str = "You cant do that";
                screen.textContent = str;
            } else {
                total = parseInt(firstNum) / parseInt(secondNum);
            }
            break;
        case "*":
            total = parseInt(firstNum) * parseInt(secondNum);
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
    console.log("clear: input is now " + input);
});
const posOrNeg = document.createElement("button");
posOrNeg.textContent = "+/-";
posOrNeg.addEventListener("click", () => {
    if (input != "") {
        input = input * -1;
    }
    screen.textContent = input;
});
const percentage = document.createElement("button");
percentage.textContent = "%";
percentage.addEventListener("click", () => {
    if (input != "") {
        input = input / 100;
    }
    screen.textContent = input;
});
const divide = document.createElement("button");
divide.textContent = "÷";
divide.addEventListener("click", () => {
    if (input != "") {
        firstNum = input;
        input = "";
        screen.textContent = firstNum;
        operator = "/";   
    }
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
    if (input != "") {
        firstNum = input;
        input = "";
        screen.textContent = firstNum;
        operator = "*";   
    }
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
subtract.addEventListener("click", () => {
    if (input != "") {
        firstNum = input;
        input = "";
        screen.textContent = firstNum;
        operator = "-";   
    }
})
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
addition.addEventListener("click", () => {
    if (input != "") {
        firstNum = input;
        input = "";
        screen.textContent = firstNum;
        operator = "+";   
    }
})
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
equals.addEventListener("click", () => {
    if (operator != "" && input != "") {
        secondNum = input;
        input = calculate(firstNum, secondNum, operator);
        screen.textContent = input;
        operator = "";
        firstNum = input;
        secondNum = "";
    }
})

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