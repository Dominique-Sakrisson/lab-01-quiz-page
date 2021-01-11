// import functions and grab DOM elements

import {countsAsAYes} from './utils.js';

// initialize state
const testStart = document.getElementById('test-button');
const result = document.getElementById('result-message');
const scoreDisplay = document.getElementById('results-score');

const tryAgain = 'Hit the button for another try';

testStart.addEventListener('click', () => {
// set event listeners to update state and testHandler(event)
//variable to count the user's correct answer count
    let rightAnswers = 0;

    //alert user welcoming to the test
    alert('hello welcome to your test');

    //get the users first name
    const firstName = prompt('So nice to meet you, whats your name?');
    if (!firstName) return;

    //prompt user for their last name
    const lastName = prompt(`Hello ${firstName} what is your last name?`);
    console.log(lastName);
    if (!lastName) return;

    //confirm that user wants to take part in the test
    const confirmation = confirm(`Alright ${firstName} ${lastName} are you ready for a quiz? Ok or cancel:`);
    console.log(confirmation);
    if (!confirmation) return;

    alert('Here you go, answer with y / n anything else is automatic miss');
    //first question
    const answer1 = prompt('Is the lobster mushroom a parasitic fungus?');
    if (countsAsAYes(answer1)) rightAnswers++;
    console.log('first answer: ' + answer1);



    
    
});