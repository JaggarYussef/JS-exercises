/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

     let nameHero = document.getElementById('hero-name').value;
     let alter= document.getElementById('hero-alter-ego').value;
     let powers= document.getElementById('hero-powers').value;
     let push;
    const link=  ' http://localhost:3000';



    document.getElementById('run').addEventListener('click', ()=> {
        console.log(nameHero);
        push = [{id: 7, name: nameHero, alterEgo: alter, abilities:  powers }]
        fetch(link + '/heroes', {
            method: 'POST',
           
            body: JSON.stringify(push),
        }).then(response => response.json())
        .then(push => {
            console.log('success', push);
        })
        .catch((error) => {
            console.log('error', error);
        })

    })

})();
