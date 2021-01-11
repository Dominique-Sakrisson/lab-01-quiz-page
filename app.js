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

    //second question
    const answer2 = prompt('Based off the reading, can you buy lobster mushrooms globally?');
    if (!countsAsAYes(answer2)) rightAnswers++;
    console.log('first answer: ' + answer2);

    //third question
    const answer3 = prompt('Is the lobster mushroom toxic?');
    if (!countsAsAYes(answer3)) rightAnswers++;


    //calulate results message
    alert('okay, calculating your score');

    if(rightAnswers <= 1){
        result.style.visibility = 'visible';
        scoreDisplay.textContent = `You scored ${rightAnswers}/ 3 `;
        scoreDisplay.style.color = 'red';
    } else if (rightAnswers === 2) {
        result.style.visibility = 'visible';
        scoreDisplay.textContent = `You scored ${rightAnswers}/ 3 `;
        scoreDisplay.style.color = 'yellow';
    } else if (rightAnswers === 3){
        result.style.visibility = 'visible';
        scoreDisplay.textContent = `You scored ${rightAnswers}/ 3 `;
        scoreDisplay.style.color = 'green';
        scoreDisplay.style.fontSize = '1.4rem';
    }



    
    
});