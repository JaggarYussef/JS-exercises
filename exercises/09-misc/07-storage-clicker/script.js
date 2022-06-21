/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    let store= localStorage.getItem('counter');
(() => {
    
    let val = document.getElementById("target");
    let counter = parseInt(val.innerHTML);
    
    console.log('this is value of ' + counter);
    if(store != null){
        val.innerHTML= store;
        counter= store;
    }
 

    
    document.getElementById("increment").addEventListener('click', () => {
       
        val.innerHTML = counter++;
        
        localStorage.setItem('counter', counter);
        store = counter;
        console.log("this is store " + store);
        //console.log(val.innerHTML);
        
        
        
        
    })
  

  
})();
