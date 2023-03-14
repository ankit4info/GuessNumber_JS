'use strict';
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number detected';
  } else if (SecretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (SecretNumber < guess) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'go lower';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8b0000';
      document.querySelector('.message').textContent = 'game over!!!';
    }
  } else if (SecretNumber > guess) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'go Higher';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8b0000';
      document.querySelector('.message').textContent = 'game over!!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});
