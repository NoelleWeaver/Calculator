const screen = () =>{}
const add = () =>{
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)    
    var result = num1 + num2
    document.getElementById('result').innerHTML = 'Result: ' + result
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
// const power = () =>{
//     var num1 = parseFloat(document.getElementById('num1').value)
//     var num2 = parseFloat(document.getElementById('num2').value)
//     var result = num1 ** num2
//     document.getElementById('result').innerHTML = result
// }
// const sin = () =>{
//     var num1 = parseFloat(document.getElementById('num1').value)
//     var result = Math.sin(num1)
//     document.getElementById('result').innerHTML = result
// }
// const cos = () => {
//     var num1 = parseFloat(document.getElementById('num1').value)
//     var result = Math.cos(num1)
//     document.getElementById('result').innerHTML = result
// }
// const tan = () => {
//     var num1 = parseFloat(document.getElementById('num1').value)
//     var result = Math.tan(num1)
//     document.getElementById('result').innerHTML = result
// }
function clr() { 
    document.getElementById("result").value = "" 
} 