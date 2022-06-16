/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    let message = ["Je suis un texte qui va apparaître dans un effet !"]
    let pos= 0;
    let speed= 100;
    
         function typeWriter(){
    
            console.log("called");
            console.log(message[0].substring(0, pos))
             document.getElementById("target").innerHTML= message[0].substring(0, pos) + "<span>\u25ae/</span> ";
             if (pos++ != message[0].length){
                 setTimeout(typeWriter, speed)
             }
         }
         

         typeWriter();
})();






