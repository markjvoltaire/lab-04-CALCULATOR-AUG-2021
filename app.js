// import functions

import { add, multiply } from './functions.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
//console.dir(addNumber1, addNumber2, addButton, addAnswer);//
// set event listeners 
addButton.addEventListener('click', ()=>{
    
    const nom1 = Number(addNumber1.value);
    const nom2 = Number(addNumber2.value);
    // console.log('userclicked', nom1,nom2); 
    addAnswer.textContent = add(nom1, nom2);
 
});




    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
