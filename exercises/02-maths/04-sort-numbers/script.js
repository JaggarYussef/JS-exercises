/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const nums = document.getElementById("numbers").value
    console.log(typeof(nums))
    console.log(nums)
    let array = nums.split(",")
    console.log(array)
  
 

    document.getElementById("run").addEventListener("click", () => {
        array.sort(function(a, b){

            return a - b;

        }); 
        console.log('result' +  array)
    });
})();
