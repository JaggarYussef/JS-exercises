/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function generate_table() {
    // creates a <table> element and a <tbody> element
     const tbl = document.createElement("table");
     const tblBody = document.createElement("tbody");
   
     // creating all cells
     for (let i = 0; i < 2; i++) {
       // creates a table row
       const row = document.createElement("tr");
   
       for (let j = 0; j < 2; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         const cell = document.createElement("td");
         const cellText = document.createTextNode("cell in row "+i+", column "+j);
         cell.appendChild(cellText);
         row.appendChild(cell);
       }
   
       // add the row to the end of the table body
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <body>
     document.body.appendChild(tbl);
     // sets the border attribute of tbl to '2'
     tbl.setAttribute("border", "2");
   }
   

(() => {
    const link=  ' http://localhost:3000';
    let holder;

    document.getElementById('run').addEventListener('click', ()=> {

        let temp= document.querySelector('#target');
        //let clon= temp.content.cloneNode(true);
        document.querySelector('.material').appendChild(temp);
       
        fetch(link + '/heroes').then(response => {

                response.json().then(json => {

                    for(let i = 0; i < json.length; i++){
                        let p = document.createElement('li');
                        p.innerHTML = json[i].name
                        document.querySelector('#target').appendChild(p);

                    }
                
                })
        })
  

    })
})();
