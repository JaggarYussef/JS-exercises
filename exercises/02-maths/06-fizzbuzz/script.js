/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function fizzbuzzer(n){
 
    if (n % 5 == 0 && n % 3 == 0 ){
        console.log(n  +  " fizzbuzz")
    }else if(n % 3 == 0){
        console.log(n  +  " fiz")
    } else    if (n % 5 == 0){
        console.log(n  +  " buzz")
    }
}


(()=> {

    for(let i = 1; i  <= 100; i++){
        fizzbuzzer(i);
    }

    

})();
