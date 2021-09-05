import {
	paddleWidth, paddleColor,
} from './variables';
import Field from './Field';

export default class Paddle {
	#context

	#paddleStartSize

	#top

	#color

	constructor(player, context) {
	  this.#context = context;
	  this.#color = paddleColor;
	  this.#top = !player;
	}

	set paddleStartSize(value) {
	  this.#paddleStartSize = value;
	}

	get paddleStartSize() {
	  return this.#paddleStartSize;
	}

	drawPaddle() {
	  this.#context.beginPath();
		// eslint-disable-next-line max-len
	  this.#context.rect(this.#paddleStartSize, this.#top ? 0 : Field.gameFieldInnerHeight - 10, paddleWidth, 10);
	  this.#context.fillStyle = this.#color;
	  this.#context.fill();
	  this.#context.stroke();
	  this.#context.closePath();
	}

	createPaddle() {
	  this.#paddleStartSize = Math.random() * ((Field.gameFieldInnerWidth - paddleWidth) - 10) + 10;
	  this.drawPaddle(this.#paddleStartSize);
	  return this.#paddleStartSize;
	}
}
