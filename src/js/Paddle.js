import {paddleWidth, gameFieldInnerWidth, gameFieldInnerHeight, paddleColor} from "./variables";

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

	setPaddleStartSize(newSize) {
		this.#paddleStartSize = newSize;
	}

	getPaddleStartSize() {
		return this.#paddleStartSize;
	}

	drawPaddle(start) {
		this.#context.beginPath();
		this.#context.rect(this.#paddleStartSize, this.#top ? 0 : gameFieldInnerHeight - 10, paddleWidth, 10);
		this.#context.fillStyle = this.#color;
		this.#context.fill();
		this.#context.stroke();
		this.#context.closePath();
	}

	createPaddle() {
		this.#paddleStartSize = Math.random() * ((gameFieldInnerWidth-paddleWidth) - 10) + 10;
		this.drawPaddle(this.#paddleStartSize);
		return this.#paddleStartSize;
	}
}