/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

     class Person  {
        constructor (name, lastName ){
            this.name= name;
            this.lastName= lastName;

        }

        introduce(){
            return "hello my name is " +  this.name + ' '+ this.lastName; 
        }
     }

     
   document.getElementById("run").addEventListener('click', ()  => {
   
        const person= new Person("Djager", "Al-Yussef");
        console.log(person);
        console.log( person.introduce());

      
})
})();
