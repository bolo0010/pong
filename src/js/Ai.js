import Paddle from './Paddle';
import { paddleWidth } from './variables';

export default class Ai {
	paddle

	constructor(context) {
		this.paddle = new Paddle(false, context);
		this.paddle.createPaddle();
	}

	ai(debugBallX) {
		if (debugBallX - (paddleWidth / 2) > this.paddle.paddleStartSize + 5) this.paddle.paddleStartSize += 1;
		else if (debugBallX - (paddleWidth / 2) < this.paddle.paddleStartSize - 5) 	this.paddle.paddleStartSize += -1;
	}
}
