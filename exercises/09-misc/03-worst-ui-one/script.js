/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let rangeInput= document.getElementById("slider");
  let target = document.getElementById("target");

  rangeInput.addEventListener('click', () => {

    
    let difference= rangeInput.value - 0460000000;
    console.log("range" + rangeInput.value);
    console.log(difference);
     
     target.innerHTML= "+" + rangeInput.value;
  })
})();
