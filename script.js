let firstNum = "";
let secondNum = "";
let lastNum = "";
let input = "";
let total = "";
let operator = "";
let hasDecimal = false; 
let errorMessage = "nice try"

function calculate (firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            total = (parseFloat(firstNum)) + (parseFloat(secondNum));
            break;
        case "-":
            total = parseFloat(firstNum) - parseFloat(secondNum);
            break;
        case "/":
            if (parseFloat(secondNum) == 0) {
                total = errorMessage;
            } else {
                total = parseFloat(firstNum) / parseFloat(secondNum);
            }
            break;
        case "*":
            total = parseFloat(firstNum) * parseFloat(secondNum);
            break;
        default:
            console.log("calculate function switch default hit");
    }
    if (total % 1 == 0) {
        hasDecimal = false;
    }
    return +parseFloat(total).toFixed(5);
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

const clear = document.createElement("button");
clear.textContent = "C";
clear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    input = "";
    total = "";
    lastNum = "";
    hasDecimal = false;
    screen.textContent = input;
    console.log("clear: input is now " + input);
});
const posOrNeg = document.createElement("button");
posOrNeg.textContent = "+/-";
posOrNeg.addEventListener("click", () => {
    if (input != "") {
        input = input * -1;
        lastNum = ""; 
    }
    screen.textContent = input;
});
const percentage = document.createElement("button");
percentage.textContent = "%";
percentage.addEventListener("click", () => {
    if (input != "") {
        input = input / 100;
        lastNum = ""; 
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
        lastNum = "";  
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
        lastNum = "";    
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
        lastNum = "";  
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
        lastNum = "";    
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
period.addEventListener("click", () => {
    console.log("has decimal: " + hasDecimal);
    if (!hasDecimal) {
        input += "."
        hasDecimal = true;
        lastNum = ""; 
        screen.textContent = input;
    }
});
const equals = document.createElement("button");
equals.textContent = "=";
equals.addEventListener("click", () => {
    if (firstNum == errorMessage) {
        firstNum = "";
        secondNum = "";
        lastNum = "";
        total = "";
    } else if (operator != "" && input != "" && lastNum == "") {
        secondNum = input;
        lastNum = input;
        firstNum = calculate(firstNum, secondNum, operator);
        input = firstNum;
        secondNum = "";
        screen.textContent = firstNum;  
    } else if (operator != "" && input != "") {
        firstNum = calculate(firstNum, lastNum, operator);
        input = firstNum;
        screen.textContent = firstNum;
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