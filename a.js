
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
    let currentInput = "";
    let operation = null;

    // Clear Display Function
    function clearDisplay() {
        document.getElementById("display").value = "";
        currentInput = "";
        operation = null;
    }   

// Append to Display Function
    function appendToDisplay(value) {
        currentInput += value;
        document.getElementById("display").value = currentInput;
    }

// Set Operation Function
    function setOperation(op) {
        operation = op;
        currentInput += ` ${op} `;
        document.getElementById("display").value = currentInput;
    }
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
    
    function power() {
        let num1 = parseFloat(document.getElementById('num1').value); // Assuming num1 and num2 are used for power operation
        let num2 = parseFloat(document.getElementById('num2').value);
        let result = Math.pow(num1, num2); // Corrected variable names
        document.getElementById('result').value = result;
    }
    
    function log() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let result = Math.log(num1); // Corrected function name
        document.getElementById('result').value = result;
    }

    function sin() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let result = Math.sin(num1);
        document.getElementById('result').value = result;
    };

    function cos() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let result = Math.cos(num1);
        document.getElementById('result').value = result;
    };

    function tan() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let result = Math.tan(num1);
        document.getElementById('result').value = result;
    };

    // Evaluate function to perform calculation
    function evaluate() {
        // let screen = document.getElementById('screen');
        // try {
        //     let result = eval(screen.value);
        //     screen.value = result;
        // } catch (error) {
        //     screen.value = 'Error';
        // }
        let operator = document.getElementById('operator').value;
    
    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            sub();
            break;
        case '*':
            mult();
            break;
        case '/':
            div();
            break;
        default:
            document.getElementById('result').value = 'Error: Invalid operator';
            break;
    }
    }
    // Clear function to clear the screen
    function clr() {
        document.getElementById('result').value = '';
    }

    document.getElementById("display").value = result;
    currentInput = `${result}`;
    operation = null;
