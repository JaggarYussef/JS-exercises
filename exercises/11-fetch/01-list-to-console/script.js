/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {    

    const link=  ' http://localhost:3000';
    let holder;

    document.getElementById('run').addEventListener('click', ()=> {
        
       fetch(link + '/heroes').then(response => {
            response.json().then(json => {
                console.log(json);
                console.log(typeof json);
                
            })
        })

        
  

    })


})();
