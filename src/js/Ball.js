import {
	ballRadius,
	easySpeedBall,
	mediumSpeedBall,
	hardSpeedBall,
	easySpeedDebugBall, mediumSpeedDebugBall, hardSpeedDebugBall, ballColor,
} from './variables';
import Field from './Field';

export default class Ball {
    #context

    #ballXPosition;

    #ballYPosition;

    #ballMoveChangeX;

	#ballMoveChangeY;

    #debugBallMoveChangeX;

    #debugBallMoveChangeY;

    constructor(context, difficulty) {
    	this.#context = context;
    	if (difficulty === 'easy') {
    		this.#ballMoveChangeX = easySpeedBall;
    		this.#ballMoveChangeY = -easySpeedBall;
    		this.#debugBallMoveChangeX = easySpeedDebugBall;
    		this.#debugBallMoveChangeY = -easySpeedDebugBall;
    	} else if (difficulty === 'medium') {
    		this.#ballMoveChangeX = mediumSpeedBall;
    		this.#ballMoveChangeY = -mediumSpeedBall;
    		this.#debugBallMoveChangeX = mediumSpeedDebugBall;
    		this.#debugBallMoveChangeY = -mediumSpeedDebugBall;
    	} else {
    		this.#ballMoveChangeX = hardSpeedBall;
    		this.#ballMoveChangeY = -hardSpeedBall;
    		this.#debugBallMoveChangeX = hardSpeedDebugBall;
    		this.#debugBallMoveChangeY = -hardSpeedDebugBall;
    	}
    }

    set ballXPosition(value) {
    	this.#ballXPosition = value;
    }

    set ballYPosition(value) {
    	this.#ballYPosition = value;
    }

    set ballMoveChangeX(value) {
    	this.#ballMoveChangeX = value;
    }

    set ballMoveChangeY(value) {
    	this.#ballMoveChangeY = value;
    }

    set debugBallMoveChangeX(value) {
    	this.#debugBallMoveChangeX = value;
    }

    set debugBallMoveChangeY(value) {
    	this.#debugBallMoveChangeY = value;
    }

    get ballXPosition() {
    	return this.#ballXPosition;
    }

    get ballYPosition() {
    	return this.#ballYPosition;
    }

    get ballMoveChangeX() {
    	return this.#ballMoveChangeX;
    }

    get ballMoveChangeY() {
    	return this.#ballMoveChangeY;
    }

    get debugBallMoveChangeX() {
    	return this.#debugBallMoveChangeX;
    }

    get debugBallMoveChangeY() {
    	return this.#debugBallMoveChangeY;
    }

    drawBall(debug, debugMode) {
    	this.#context.beginPath();
    	this.#context.arc(this.#ballXPosition, this.#ballYPosition, ballRadius, 0, 2 * Math.PI, false);
    	if (debug && debugMode) { this.#context.fillStyle = 'red'; } else if (!debug) { this.#context.fillStyle = ballColor; } else { this.#context.fillStyle = 'transparent'; }
    	this.#context.fill();
    	this.#context.closePath();
    }

    createBall(debug, debugMode) {
    	this.#ballXPosition = Field.gameFieldInnerWidth / 2;
    	this.#ballYPosition = Field.gameFieldInnerHeight / 2;
    	this.drawBall(debug, debugMode);
    }
}
