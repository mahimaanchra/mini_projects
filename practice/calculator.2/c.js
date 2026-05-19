const clearBtn = document.getElementById('clear-button');
const resultElement = document.querySelector('.result');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const substractBtn = document.getElementById('substract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');

const numberBtns = document.querySelectorAll('.number'); 

let result = '';
let operation = '';
let previousOperand = ''; 

const appendNumber = (number) => {
    if (number === '.' && result.includes('.')) return;
    result = result + number;
    updateDisplay();
}

const updateDisplay = () => {
    if (operation) {
        resultElement.innerText = `${previousOperand} ${operation} ${result}`;
    } else {
        resultElement.innerText = result || 0;
    }
}

const selectOperator = (operatorValue) => {
    if (result === '') return;

    if (operation !== '' && previousOperand !== '') {
        calculateResult();
    }

    operation = operatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
}

const calculateResult = () => {
    let evaluatedResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            evaluatedResult = prev + current;
            break;
        case '-':
            evaluatedResult = prev - current;
            break;
        case '/':
        if(current === 0 ){
            evaluatedResult = "Infinity";
        break;
        }else{
            evaluatedResult = prev / current;
            break;
    }
        case '*':
            evaluatedResult = prev * current;
            break;
        default:
            return;
    }
    result = evaluatedResult.toString();
    operation = '';
    previousOperand = '';
}

const clearDisplay = () => {
    result = '';
    previousOperand = '';
    operation = '';
    updateDisplay();
}

const deleteLastDigit = () => {
    if (result === '' && operation !== '') {
        operation = '';
        result = previousOperand; 
        previousOperand = '';
        updateDisplay();
        return;
    }
    
    if (result === '') return;
    
    result = result.slice(0, -1);
    updateDisplay();
}

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    })
});

decimalBtn.addEventListener('click', () => appendNumber('.'));
addBtn.addEventListener('click', () => selectOperator('+'));
substractBtn.addEventListener('click', () => selectOperator('-'));
divideBtn.addEventListener('click', () => selectOperator('/'));
multiplyBtn.addEventListener('click', () => selectOperator('*'));

equalBtn.addEventListener('click', () => {
    if (result === '') return;
    calculateResult();
    updateDisplay();
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLastDigit);
