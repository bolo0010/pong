import Paddle from "./Paddle";

export default class Player {
	paddle
	constructor(context) {
		this.paddle = new Paddle(true, context);
		this.paddle.createPaddle();
	}
}