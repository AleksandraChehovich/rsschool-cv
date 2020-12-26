const calcCase = document.querySelector('.calc_buttons');
const clearButton = document.querySelector(".calc_button__clear");
const numberButtons = document.getElementsByClassName("calc_button__number");
const operationButtons = document.getElementsByClassName("calc_button__operation");
const pointButton = document.querySelector(".calc_button__point");
const display = document.querySelector(".calc_display__input");
let operatorPressed = false;
let currentOperator = '';
let currentNumber = 0;
let inMemory = '';

calcCase.onclick = function(event) {
    let button = event.target;
    if (button.dataset.number) {
        enterDataNumber(button.textContent);
    } else if (button.dataset.operation) {
        enterOperation(button.textContent);
    } else if (button.dataset.dot) {
        putDecimalPoint();
    } else if (button.dataset.clear) {
        clearDisplayAndMemory();
    } else return null;
}

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
        } else {
            currentNumber = Number(inMemory);  
        }
            display.value = currentNumber;
            currentOperator = operation;
    };        
};


const clearDisplayAndMemory = (btn) => {
        display.value = '0';
        currentNumber = 0;
        operatorPressed = false;
        currentOperator = '';
        inMemory ='';
};

const putDecimalPoint = () => {
    if (display.value === '0') {
        display.value = '0.';
    } else if (display.value.indexOf(".") === -1) { 
        display.value +=  '.';
    };
};
