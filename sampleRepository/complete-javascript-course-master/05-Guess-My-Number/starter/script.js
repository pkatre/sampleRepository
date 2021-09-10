'use strict';
/*console.log(document.querySelector('.message').textContent); //reading the content of the element
document.querySelector('.message').textContent = 'correct Number!'; //manipulate the start guessing content with correct number
document.querySelector('.number').textContent = 13; //DOM manipulation
document.querySelector('.score').textContent = 10; //DOM manipulation

console.log((document.querySelector('.guess').value = 23)); //in this input field no text content is present so we taken a value here
console.log(document.querySelector('.guess').value); //we manipulate the value that is 23*/

//implementing game logic set the number in quesrtion mark
let secretNumber = Math.trunc(Math.random() * 20) + 1; //number starts from 0 we want number between 1 to 20 so multiply 20
let score = 20;
let highscore = 0;

//handling click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //we do not call function here we just defined here
  //JS call this function as soon as the event happe
  //here we do DOM manipulation

  console.log(typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //When player win
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess too high
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
