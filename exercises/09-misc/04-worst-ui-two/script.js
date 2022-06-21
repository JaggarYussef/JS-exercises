/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  function innerEvent(button){
    let targetNum=  parseInt(target.innerHTML);
    let bSum= parseInt(button.innerHTML);
    let sum= targetNum + bSum;
    console.log( sum);
    target.innerHTML  = "+" + sum;

     //the new random value is determined according to the given min max in the buttons and becomes
     //the value that is going to be displayed on the clicked button. 
     button.innerHTML= getRandomInt(button.getAttribute("data-min"), button.getAttribute("data-max"));
  }
  

(() => {
 
    let target= document.getElementById("target");
    let b1 = document.getElementById("part-one");
    let b2 = document.getElementById("part-two");
    let b3 = document.getElementById("part-three");
    let b4 = document.getElementById("part-four");
    

    


    b1.addEventListener('click', () => {
   
        innerEvent(b1);
    })

    
    b2.addEventListener('click', () => {
        innerEvent(b2);
        
    })

    b3.addEventListener('click', () => {
        innerEvent(b3);
        
    })

    b4.addEventListener('click', () => {
        innerEvent(b4);
    })

    




})();
