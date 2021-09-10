'use strict';
//selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Strating conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //active player 0 then assign it to activepalyer 1 else activeplayer 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //it gives number between 0 and 5 so we add 1 here
    console.log(dice);

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //it display the dice image of whatever number comes

    //3.Check for rolled 1:if true, switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice; //currentScore = currentScore+dice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]+currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if players score ixs >=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    //Finish the game

    //3.switch to next player
  }
});
