
document.addEventListener('DOMContentLoaded', function() {
    // Get references to all buttons
    const buttons = document.querySelectorAll('.calculator .button');

    // Loop through each button and attach a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Call a function based on the button's class or ID
            const buttonId = button.classList[0]; // Assuming the first class is the relevant one
            switch (buttonClass) {
                case 'zero':
                    addToDisplay('0');
                    break;
                case 'one':
                    addToDisplay('1');
                    break;
                case 'two':
                    addToDisplay('2');
                    break;
                case 'three':
                    addToDisplay('3');
                    break;
                case 'four':
                    addToDisplay('4');
                    break;
                case 'five':
                    addToDisplay('5');
                    break;
                case 'six':
                    addToDisplay('6');
                    break;
                case 'seven':
                    addToDisplay('7');
                    break;
                case 'eight':
                    addToDisplay('8');
                    break;
                case 'nine':
                    addToDisplay('9');
                    break;
                case 'add':
                    add();
                    break;
                case 'sub':
                    sub();
                    break;
                case 'multiplied':
                    multiplied();
                    break;
                case 'divide':
                    divide();
                    break;
                case 'sqrt':
                    sqrt();
                    break;
                case 'power':
                    power();
                    break;
                case 'sin':
                    sin();
                    break;
                case 'cos':
                    cos();
                    break;
                case 'tan':
                    tan();
                    break;
                case 'log':
                    log();
                    break;
                case 'equal':
                    evaluated();
                    break;
                case 'del':
                    clr();
                    break;
                default:
                    // Handle unknown button
                    console.log('Unknown button clicked');
            }
        });
    });
});
let currentInput = "";
            
// Adds to the Display Function
function addToDisplay(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

// Basic Operations
function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 + num2;
    document.getElementById('result').value = result;
};
            
function sub() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 - num2;
    document.getElementById('result').value = result;
};
            
function multiplied() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 * num2;
    document.getElementById('result').value = result;
};
            
function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = num1 / num2;
    document.getElementById('result').value = result;
};
            
// Scientific functions
function sqrt() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let result = Math.sqrt(num1);
    document.getElementById('result').value = result;
}
function power() {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 ** num2
    document.getElementById('result').value = result;
}
function sin() {
    var num1 = parseFloat(document.getElementById('result').value)
    var result = Math.sin(num1)
    document.getElementById('result').value = result;
}
function cos() {
    var num1 = parseFloat(document.getElementById('result').value)
    var result = Math.cos(num1)
    document.getElementById('result').value = result;
}
function tan() {
    var num1 = parseFloat(document.getElementById('result').value)
    var result = Math.tan(num1)
    document.getElementById('result').value = result;
}
function log() {
    let num1 = parseFloat(document.getElementById('result').value);
    let result = Math.log(num1);
    document.getElementById('result').value = result;
}
        
// Evaluates the expression
function evaluated() {
    let expression = document.getElementById("result").value;
    // console.log(expression)
    let result;
    try {
        result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}            
// Clears the screen
function clr() {
    document.getElementById("result").value = "";
    currentInput = "";
}