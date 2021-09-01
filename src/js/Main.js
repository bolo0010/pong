import {
	aiPaddleDrawSpeed,
	ballRadius,
	canvas,
	difficulty,
	gameFieldInnerHeight,
	gameFieldInnerWidth,
	paddleWidth,
	pointsToWin,
} from './variables';
import Ball from './Ball';
import Player from './Player';
import Ai from './Ai';
import Scoreboard from './Scoreboard';
import getCanvas from "./canvas";

export default class Main {
	#difficulty;

	#pointsToWin;

	#context;

	#ball;

	#debugBall;

	#player1;

	#player2;

	#requestAnimationFrameID;

	#scoreboard;

	#debugMode = false;

	#drawDebug;

	constructor() {
		this.setDifficulty('easy');
		this.setPointsToWin(3);
	}

	getDifficulty() {
		return this.#difficulty;
	}

	getPointsToWin() {
		return this.#pointsToWin;
	}

	setDifficulty(choice) {
		const value = difficulty.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})[choice];
		if (typeof value === 'undefined') throw new Error('There is no such a value! Check variables.js file and constructor of the object!');
		this.#difficulty = value;
		this.#changeTextInButtons(false, choice);
	}

	setPointsToWin(choice) {
		const value = pointsToWin.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {})[choice];
		if (typeof value === 'undefined') throw new Error('There is no such a value! Check variables.js file and constructor of the object!');
		this.#pointsToWin = value;
		this.#changeTextInButtons(true, choice);
	}

	#changeTextInButtons = (choice, option) => {
		let selectedButton;
		if (choice) selectedButton = document.querySelector('.game-options__buttons--points');
		else selectedButton = document.querySelector('.game-options__buttons--difficulty');
		selectedButton.textContent = choice ? option.toString() : option.charAt(0).toUpperCase() + option.slice(1);
	};

	addListenersOnButtons = () => {
		const buttons = [...document.querySelectorAll('.game-options__buttons')];
		buttons.forEach((btn) => btn.addEventListener('click', this.#handleListenersOnButtons));
	}

	// eslint-disable-next-line consistent-return
	#selectNextValueFromObject = (choice) => {
		let condition;
		if (choice === difficulty) condition = this.#difficulty;
		else condition = this.#pointsToWin;
		for (let i = 0; i < choice.length - 1; i += 1) {
			if (choice[i].key === condition) return choice[i + 1].value;
			if (i === choice.length - 2) return choice[0].value;
		}
	}

	// eslint-disable-next-line class-methods-use-this
	#disableButtons(isStarted) {
		const startButton = document.querySelector('.game-options__buttons--start');
		const pointsButton = document.querySelector('.game-options__buttons--points');
		const difficultyButton = document.querySelector('.game-options__buttons--difficulty');

		if (isStarted) {
			startButton.textContent = 'Restart';
			startButton.setAttribute('dataset', 'data-started');
		} else {
			startButton.textContent = 'Start';
			startButton.removeAttribute('dataset', 'data-started');
		}

		pointsButton.classList.toggle('game-options__buttons--disabled');
		difficultyButton.classList.toggle('game-options__buttons--disabled');
	}

	#randomBallStartDirection() {
		const direction = Math.floor(Math.random() * 4 + 1);
		switch (direction) {
		case 1:
		{
			this.#debugBall.debugBallMoveChangeX = -this.#debugBall.debugBallMoveChangeX;
			this.#ball.ballMoveChangeX = -this.#ball.ballMoveChangeX;
			break;
		}
		case 2:
		{
			this.#debugBall.debugBallMoveChangeY = -this.#debugBall.debugBallMoveChangeY;
			this.#ball.ballMoveChangeY = -this.#ball.ballMoveChangeY;
			break;
		}
		case 3:
		{
			this.#debugBall.debugBallMoveChangeX = -this.#debugBall.debugBallMoveChangeX;
			this.#debugBall.debugBallMoveChangeY = -this.#debugBall.debugBallMoveChangeY;

			this.#ball.ballMoveChangeX = -this.#ball.ballMoveChangeX;
			this.#ball.ballMoveChangeY = -this.#ball.ballMoveChangeY;
			break;
		}
		default:
			break;
		}
	}

	#handleMoveTouch(event) {
		const relativeX = event.changedTouches[0].screenX - canvas.offsetLeft;
		if (relativeX > 0 && relativeX < canvas.width) this.#player1.paddle.paddleStartSize = relativeX - paddleWidth / 2;
	}

	#mouseMoveHandler(event) {
		const relativeX = event.offsetX - canvas.offsetLeft;
		if (relativeX > 0 && relativeX < canvas.width) this.#player1.paddle.paddleStartSize = relativeX - paddleWidth / 2;
	}

	#setMobileOptions(isStarted) {
		if (window.innerWidth > 1024) return;
		const gameScoreboard = document.querySelector('.game-scoreboard');
		const gameOptions = document.querySelector('.game-options');

		if (isStarted) {
			gameScoreboard.style.opacity = 0.2;
			gameOptions.style.opacity = 0.2;
		} else {
			gameScoreboard.style.opacity = 0;
			gameOptions.style.opacity = 1;
		}
	}

	#handleListenersOnButtons = (e) => {
		const dataButtonAttribute = e.target.dataset.button;
		switch (dataButtonAttribute) {
		case 'start':
		{
			if (e.target.hasAttribute('dataset', 'data-started')) {
				this.#setMobileOptions(false);
				cancelAnimationFrame(this.#requestAnimationFrameID);
				this.#context.clearRect(0, 0, gameFieldInnerWidth, gameFieldInnerHeight);
				this.#disableButtons(false);
				canvas.removeEventListener('mousemove', this.#mouseMoveHandler.bind(this), false);
				document.removeEventListener('touchmove', this.#handleMoveTouch.bind(this), false);
				break;
			}
			this.#context = getCanvas();
			this.#setMobileOptions(true);
			this.#ball = new Ball(this.#context, this.#difficulty);
			this.#debugBall = new Ball(this.#context, this.#difficulty);
			this.#player1 = new Player(this.#context);
			this.#player2 = new Ai(this.#context);
			this.#scoreboard = new Scoreboard();
			this.#ball.createBall(false, this.#debugMode);
			this.#debugBall.createBall(true, this.#debugMode);
			this.#drawDebug = true;
			this.#randomBallStartDirection();
			canvas.addEventListener('mousemove', this.#mouseMoveHandler.bind(this), false);
			document.addEventListener('touchmove', this.#handleMoveTouch.bind(this), false);
			requestAnimationFrame(this.#draw.bind(this));
			this.#disableButtons(true);
			break;
		}
		case 'points':
		{
			this.setPointsToWin(this.#selectNextValueFromObject(pointsToWin));
			break;
		}
		case 'difficulty':
		{
			this.setDifficulty(this.#selectNextValueFromObject(difficulty));
			break;
		}
		case 'debug':
		{
			this.#debugMode = !this.#debugMode;
			document.querySelector('.game-options__buttons--debug').classList.toggle('game-options__buttons--on');
			break;
		}
		default:
			throw new Error('Sorry! There is no such a button!');
		}
	}

	#checkIsWin(player) {
		if (player) return this.#scoreboard.scorePlayer1 >= this.#pointsToWin;
		return this.#scoreboard.scorePlayer2 >= this.#pointsToWin;
	}

	#paddleCollisions(player) {
		let cancelDraw = false;
		if (this.#ball.ballXPosition > player.paddle.paddleStartSize && this.#ball.ballXPosition < player.paddle.paddleStartSize + paddleWidth) {
			this.#ball.ballMoveChangeY = -this.#ball.ballMoveChangeY;
		} else {
			// eslint-disable-next-line no-unused-expressions
			if (player === this.#player1) this.#scoreboard.increaseScorePlayer2();
			else this.#scoreboard.increaseScorePlayer1();
			cancelDraw = true;
			const isWinner = this.#checkIsWin(player !== this.#player1);
			if (!isWinner) {
				this.#context.clearRect(0, 0, gameFieldInnerWidth, gameFieldInnerHeight);
				this.#ball = new Ball(this.#context, this.#difficulty);
				this.#debugBall = new Ball(this.#context, this.#difficulty);
				this.#ball.createBall(false);
				this.#debugBall.createBall(true);
				this.#drawDebug = true;
				this.#randomBallStartDirection();
				requestAnimationFrame(this.#draw.bind(this));
			} else {
				// eslint-disable-next-line no-alert
				alert(`Player ${player === this.#player1 ? '2' : '1'} win!`);
				this.#context.clearRect(0, 0, gameFieldInnerWidth, gameFieldInnerHeight);
				this.#setMobileOptions(false);
				this.#disableButtons(false);
				canvas.removeEventListener('mousemove', this.#mouseMoveHandler.bind(this), false);
				document.removeEventListener('touchmove', this.#handleMoveTouch.bind(this), false);
			}
		}
		return cancelDraw;
	}

	#draw() {
		let cancelDraw = false;
		this.#context.clearRect(0, 0, gameFieldInnerWidth, gameFieldInnerHeight);
		this.#ball.drawBall(false, this.#debugMode);
		this.#debugBall.drawBall(true, this.#debugMode);
		this.#player1.paddle.drawPaddle();
		this.#player2.paddle.drawPaddle();
		for (let i = aiPaddleDrawSpeed; i > 0; i -= 1) this.#player2.ai(this.#debugBall.ballXPosition);
		// debugBall
		if (this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX > gameFieldInnerWidth - ballRadius || this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX < ballRadius) {
			this.#debugBall.debugBallMoveChangeX = -this.#debugBall.debugBallMoveChangeX;
		}
		if (this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY > canvas.height - ballRadius || this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY < ballRadius) {
			this.#drawDebug = false;
			this.#debugBall.debugBallMoveChangeY = -this.#debugBall.debugBallMoveChangeY;
		}
		// ball
		if (this.#ball.ballXPosition + this.#ball.ballMoveChangeX > gameFieldInnerWidth - ballRadius || this.#ball.ballXPosition + this.#ball.ballMoveChangeX < ballRadius) {
			this.#ball.ballMoveChangeX = -this.#ball.ballMoveChangeX;
		}
		if (this.#ball.ballYPosition + this.#ball.ballMoveChangeY < ballRadius) {
			this.#drawDebug = true;
			cancelDraw = this.#paddleCollisions(this.#player2);
		} else if (this.#ball.ballYPosition + this.#ball.ballMoveChangeY > gameFieldInnerHeight - ballRadius) {
			this.#drawDebug = true;
			cancelDraw = this.#paddleCollisions(this.#player1);
		}

		this.#ball.ballXPosition = this.#ball.ballXPosition + this.#ball.ballMoveChangeX;
		this.#ball.ballYPosition = this.#ball.ballYPosition + this.#ball.ballMoveChangeY;

		if (this.#drawDebug) {
			this.#debugBall.ballXPosition = this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX;
			this.#debugBall.ballYPosition = this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY;
		}
		if (cancelDraw) cancelAnimationFrame(this.#requestAnimationFrameID);
		else this.#requestAnimationFrameID = requestAnimationFrame(this.#draw.bind(this));
	}
}
