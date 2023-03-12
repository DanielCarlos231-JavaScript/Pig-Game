'use strict';
// import * as dices from '/*.png';
// console.log(dices);

const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player00 = document.querySelector('.player--0');
const player01 = document.querySelector('.player--1');
let num = 1;
let score = 0;

const newGame = () => {
	dice.style.display = 'none';
	player00.querySelector('#score--0').textContent = 0;
	player01.querySelector('#score--1').textContent = 0;
	player00.querySelector('#current--0').textContent = 0;
	player01.querySelector('#current--1').textContent = 0;
	player00.classList.add('player--active');
	player01.classList.remove('player--active');
};

const holdScore = () => {
	if (player00.classList.contains('player--active')) {
		score += Number(player00.querySelector('#score--0').textContent);
		player00.querySelector('#score--0').textContent = score;
		player00.querySelector('#current--0').textContent = 0;
		player00.classList.remove('player--active');
		player01.classList.add('player--active');

		if (score >= 100) {
			alert('Player 01 Wins!!');
			newGame();
		}
	} else {
		score += Number(player01.querySelector('#score--1').textContent);
		player01.querySelector('#score--1').textContent = score;
		player01.querySelector('#current--1').textContent = 0;
		player01.classList.remove('player--active');
		player00.classList.add('player--active');

		if (score >= 100) {
			alert('Player 02 Wins!!');
			newGame();
		}
	}
	score = 0;
};

const rollDice = () => {
	dice.style.display = 'block';
	num = Math.trunc(Math.random() * 6) + 1;
	dice.src = 'assets/dice' + num + '.png';

	console.log(dice.src);

	if (player00.classList.contains('player--active')) {
		score = Number(player00.querySelector('#current--0').textContent);
		score += num;

		if (num === 1) {
			score = 0;
		}

		player00.querySelector('#current--0').textContent = score;
	} else {
		score = Number(player01.querySelector('#current--1').textContent);
		score += num;

		if (num === 1) {
			score = 0;
		}

		player01.querySelector('#current--1').textContent = score;
	}
};

newGame();
btnRoll.addEventListener('click', rollDice);
btnNewGame.addEventListener('click', newGame);
btnHold.addEventListener('click', holdScore);
