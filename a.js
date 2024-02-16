
// document.addEventListener('DOMContentLoaded', function() {
//     // Event listener for number buttons
//     const numberButtons = document.querySelectorAll('.number');
//     numberButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             let screen = document.getElementById('screen');
//             screen.value += button.textContent;
//         });
//     });

    // Functions for basic arithmetic operations
    // function addToDisplay(value) {
    //     let screen = document.getElementById('result');
    //     screen.value += value;
    // }
    // function addToDisplay(value) {
    //     let screen = document.getElementById('num', 'result');
    //     screen.value += value;
    // }
    // function addToDisplay(value) {
    //     let numElement = document.getElementById('num');
    //     let resultElement = document.getElementById('result');
    //     numElement.value += value;
    //     resultElement.value += value; // Optionally, you can add the value to the result display as well
    // }
        // Clear Display Function
let currentInput = "";

function clearDisplay() {
    document.getElementById("result").value = "";
    currentInput = "";
}
    
        // Append to Display Function
function addToDisplay(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}
    
        // Basic Arithmetic Operations
const power = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 ** num2
    document.getElementById('result').innerHTML = result
}
const sin = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var result = Math.sin(num1)
    document.getElementById('result').innerHTML = result
}
const cos = () => {
    var num1 = parseFloat(document.getElementById('num1').value)
    var result = Math.cos(num1)
    document.getElementById('result').innerHTML = result
}
const tan = () => {
    var num1 = parseFloat(document.getElementById('num1').value)
    var result = Math.tan(num1)
    document.getElementById('result').innerHTML = result
}

    
    // Evaluate function to perform calculation
function evaluate() {
    let num2 = parseFloat(currentInput); // Get the second operand
    let operator = document.getElementById("operator").value;
    let num1 = parseFloat(document.getElementById("result").value);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Error: Invalid operator";
            break;
    }

    document.getElementById("result").value = result;
    currentInput = result.toString(); // Store the result for further calculations
    }
    
        // Clear function to clear the screen
function clr() {
    document.getElementById("result").value = "";
    currentInput = "";
}