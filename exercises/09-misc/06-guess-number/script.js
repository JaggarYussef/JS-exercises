/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
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

  let guessNum = getRandomInt(1, 101);

  function guesser(){
    let shot=  window.prompt("Guess number between 1 and 100")

    if(shot == guessNum){
        alert('well done!')
    }
    if(shot > guessNum){
        console.log("try smaller");
       guesser();
    } 
    
    if(shot < guessNum){
        console.log("try bigger")
        guesser();
    }
    
    
  }
  

(() => {
 
 console.log(guessNum);
 
guesser();

})();
