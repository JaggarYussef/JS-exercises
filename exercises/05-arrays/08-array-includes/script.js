/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
      
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "pomme",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener('click', () => {

        for(let i= 0; i <= fruits.length ; i++){
            let holder= fruits[i];
            if(holder == "pomme"){
               console.log("oui " + i)
               
            }

        } 
     })
})();
