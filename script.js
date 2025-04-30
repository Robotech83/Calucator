let display = document.getElementById('display');
let currentInput = '';

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Function to append operators (+, -, *, /) to the display
function appendOperator(operator) {
    // Prevent multiple operators in a row
    if (currentInput !== '' && !isOperator(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Use eval() to evaluate the expression
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error'; // If there's an error, show 'Error'
        currentInput = '';
    }
}

// Helper function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
