/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(() => {
    (() => {

        
        let colorArray= ["green", "red", "blue", "black", "blue", "orange"]
       
    
        document.getElementById("run").addEventListener('click', () => {

            console.log(randomBetween(0, 5))
    
            document.body.style.backgroundColor= colorArray[randomBetween(1, 5)];
    
        })
    
    })();
    
})();
