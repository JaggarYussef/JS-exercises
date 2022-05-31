/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let operandOne = document.getElementById("op-one").value
    let operandTwo = document.getElementById("op-two").value

    document.getElementById("addition").addEventListener("click", () => {

        alert(+operandOne + +operandTwo);
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        alert(operandOne - operandTwo);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        alert(operandOne * operandTwo);
    });

    document.getElementById("division").addEventListener("click", () => {
        alert(operandOne / operandTwo);
    });
})();
