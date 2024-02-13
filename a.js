const add = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)    
    var result = num1 + num2
    document.getElementById('result').innerHTML = result
}
const sub = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 - num2
    document.getElementById('result').innerHTML = result
}
const mult = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 * num2
    document.getElementById('result').innerHTML = result
}
const div = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 / num2
    document.getElementById('result').innerHTML = result
}
const sqrt = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = 0.5
    var result = num1 * num2
    document.getElementById('result').innerHTML = result
}
const power = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var result = num1 ** num2
    document.getElementById('result').innerHTML = result
}