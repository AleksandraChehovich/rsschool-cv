const clearButton = document.querySelector(".calc_button__clear");
const numberButton = document.getElementsByClassName("calc_button__number");
const operationButton = document.getElementsByClassName("calc_button__operation");
const pointButton = document.querySelector(".calc_button__point");
const display = document.querySelector(".calc_display__input");
let operatorPressed = false;
let currentOperator = '';
let currentNumber = 0;
let inMemory = '';

for (let i = 0; i < numberButton.length; i++) {  
    numberButton[i].addEventListener("click", function(event) {
        enterDataNumber(event.target.textContent);
    });
};

for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener("click", function(event) {
        enterOperation(event.target.textContent);
    });
};

clearButton.addEventListener("click", function(event) {
    clearDisplay(event.target.textContent);
    console.log(display.value);
});

pointButton.addEventListener("click", function() {
    putDecimalPoint();
});

const enterDataNumber = (number) => {  
    if (operatorPressed) {
        if (number === '00') {
            number = '0';
            display.value = number;
            operatorPressed = false;
        } else {
        display.value = number;
        operatorPressed = false;
        };
    } else {     
        if (display.value === '0') {
            if (number === '00') {
                number = '0';
                display.value = number;
            } else {
            display.value = number;
            };
        } else {
            display.value += number;
        };
    };
};

const enterOperation = (operation) => {   
        inMemory = display.value;
        
        if(operatorPressed && currentOperator !== '=') {
            display.value = currentNumber;
        } else {
            operatorPressed = true;
            if (currentOperator === '+') {
                currentNumber += Number(inMemory);  
            } else if (currentOperator === '-') {
                currentNumber -= Number(inMemory);  
            } else if (currentOperator === '*') {
                currentNumber *= Number(inMemory);  
            } else if (currentOperator === '/') {
                currentNumber /= Number(inMemory);  
            } else if (currentOperator === '%') {
                currentNumber = ((currentNumber / 100) * Number(inMemory)).toFixed(2);
            } else {currentNumber = Number(inMemory);  
            }
            display.value = currentNumber;
            currentOperator = operation;
        };        
      };

const clearDisplay = (btn) => {
        display.value = '0';
        currentNumber = 0;
        operatorPressed = false;
        currentOperator = '';
        inMemory ='';
};

const putDecimalPoint = () => {
    if (display.value === '0') {
        display.value = '0.';
    } else if (display.value.indexOff(".") === -1) { 
        display.value +=  '.';
    };
};