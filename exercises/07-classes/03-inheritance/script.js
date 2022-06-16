/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }


    class Dog extends Animal {
        constructor(name, greeting){
            super(name, greeting)
            this.name= name;
            this.greeting= greeting;
          
        }

    }


    class Cat  extends Animal {
        constructor(name, greeting){
            super(name, greeting)
            this.name= name;
            this.greeting= greeting;
         
        }

    }


    document.getElementById("run").addEventListener('click', ()  => {

       cat= new Cat("kiity", "meow")
       console.log(cat.sayHello())
       dog= new Dog("doggy", "wof")
       console.log(dog.sayHello());
          
    })

   
   
    
})();
