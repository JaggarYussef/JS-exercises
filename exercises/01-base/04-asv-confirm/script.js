/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    

let response = false;


while(response == false){
     
    let age= window.prompt("how old are you? ")
    let gender= window.prompt("Gender?")
    let city= window.prompt("From which city ?")

 correct = confirm("are the following details correct: " + age + ' ' + gender + ' '+ city )
if(correct == true){
    alert("good for you");
      response= true;
    }
} 

