'use strict';

//* console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// *document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//* define score variable
// define random Number
//!-------------------------------------------------------------------------------------

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
let score = 20;
let highScore = 0;
let secretNumber = randomNumber();
console.log(randomNumber(), secretNumber);

//* addEventListener method for CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // No number
  if (!guess) {
    displayMessage('⛔ No number');
    /// Winning Number
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    displayNumber(secretNumber);
    //?document.querySelector('.message').textContent = '🎉 Correct Number';
    //?document.querySelector('.number').textContent = secretNumber;
    // change CSS body color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // high score calc
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    /// Number is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber ? '📉 Number too low' : '📈 Number too high'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎🏻 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//* addEventListener method for AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

//!  if (score > 1) {
//     if (!guess) {
//       document.querySelector('.message').textContent = '⛔ No number';
//     } else if (guess === secretNumber) {
//       document.querySelector('.message').textContent = '🎉 Correct Number';
//     } else if (guess > secretNumber) {
//       document.querySelector('.message').textContent = '📈 Number too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else if (guess < secretNumber) {
//       document.querySelector('.message').textContent = '📉 Number too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent = '👎🏻 You lost the game';
//   }
// });
/// Number is low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Number too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👎🏻 You lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
