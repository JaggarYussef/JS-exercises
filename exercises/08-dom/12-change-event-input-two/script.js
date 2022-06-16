/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let input= document.getElementById('pass-one');
    let indicator= document.getElementById('validity');


    input.addEventListener('input', () => {
 
        
     console.log();

      if(input.value.length >= 8 && input.value.replace(/[^0-9]/g,"").length >= 2){
      indicator.innerText = "ok"

     }
    })






})();
