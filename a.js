
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
function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        console.error('Invalid input. Please enter valid numbers.');
        return;
    }
    let result = num1 + num2;
    document.getElementById('result').value = result;
};
    
function sub() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').value = result;
};
    
function mult() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').value = result;
};
    
function div() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num / num2;
    document.getElementById('result').value = result;
};
    
// Other mathematical functions
function sqrt() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let result = Math.sqrt(num1); // Corrected variable name
    document.getElementById('result').value = result;
}
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
function log() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let result = Math.log(num1); // Corrected function name
    document.getElementById('result').value = result;
}

    
// Evaluate function to perform calculation
function evaluate() {
    let expression = document.getElementById("result").value;
    let result;
    try {
        result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
    
        // Clear function to clear the screen
function clr() {
    document.getElementById("result").value = "";
    currentInput = "";
}