/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
  }
  
  

(() => {
    let numbers= []; 

    for(let i= 0; i < 10; i++){
        numbers[i]= getRandomInt(0, 101);
    } 

    console.log(numbers)

 
    document.getElementById("run").addEventListener('click', () => {
        let petit= document.getElementById("min").innerHTML
        console.log(petit);
        let grand= document.getElementById("max").innerHTML; 
      
        let somme= document.getElementById("sum").innerHTML; 
        let moyenne= document.getElementById("average").innerHTML; 

        for (let i= 0; i < numbers.length; i++ ){
            let counter= `n-${+i + 1}`;
            console.log(counter)
            document.getElementById(counter).innerHTML= numbers[i]

            //__________STATS___________________________
             //__________PETIT___________________________
         
             if (petit == "-"){ 
                petit= `${numbers[i]}`;
                 console.log("first if log " + petit);
                }else if (petit > numbers[i]){
                    petit= `${numbers[i]}`;
                    console.log("smaller ");
                    console.log("petit should be  " + petit);
                }



            //__________GRAND___________________________    
                
              
             if (grand == "-"){ 
                grand= numbers[i];
               }else if (grand  < numbers[i]){
                   grand= numbers[i];
               }
            
                    
            //__________SOMME___________________________  
            if (somme == "-"){
                somme= numbers[0]
                console.log(" first cond excuted");
                continue;
            }else{
                somme += numbers[i];
                console.log(" second cond excuted");
                console.log(somme)
            }
            
            
        }
        
     console.log(" value of somme " + somme);
     moyenne = somme / 10;
   
     })

})();
