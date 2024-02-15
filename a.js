
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
    function addToDisplay(value) {
        let numElement = document.getElementById('num');
        let resultElement = document.getElementById('result');
        numElement.value += value;
        resultElement.value += value; // Optionally, you can add the value to the result display as well
    }
    function add() {
        let num = parseFloat(document.getElementById('num').value);
        let result = num + num;
        document.getElementById('result').value = result;
    };

    function sub() {
        let num = parseFloat(document.getElementById('num').value);
        let result = num - num;
        document.getElementById('result').value = result;
    };

    function mult() {
        let num = parseFloat(document.getElementById('num').value);
        let result = num * num;
        document.getElementById('result').value = result;
    };

    function div() {
        let num = parseFloat(document.getElementById('num').value);
        let result = num / num;
        document.getElementById('result').value = result;
    };

    // Other mathematical functions
    function sqrt() {
        let num = parseFloat(document.getElementById('num').value);
        let result = Math.sqrt(num); // Corrected variable name
        document.getElementById('result').value = result;
    }
    
    function power() {
        let num1 = parseFloat(document.getElementById('num1').value); // Assuming num1 and num2 are used for power operation
        let num2 = parseFloat(document.getElementById('num2').value);
        let result = Math.pow(num1, num2); // Corrected variable names
        document.getElementById('result').value = result;
    }
    
    function log() {
        let num = parseFloat(document.getElementById('num').value);
        let result = Math.log(num); // Corrected function name
        document.getElementById('result').value = result;
    }

    function sin() {
        let num = parseFloat(document.getElementById('num').value);
        let result = Math.sin(num);
        document.getElementById('result').value = result;
    };

    function cos() {
        let num = parseFloat(document.getElementById('num').value);
        let result = Math.cos(num);
        document.getElementById('result').value = result;
    };

    function tan() {
        let num = parseFloat(document.getElementById('num').value);
        let result = Math.tan(num);
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

