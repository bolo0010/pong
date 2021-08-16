import {
    ballRadius,
    gameFieldInnerWidth,
    gameFieldInnerHeight,
    easySpeedBall,
    mediumSpeedBall,
    hardSpeedBall,
    easySpeedDebugBall, mediumSpeedDebugBall, hardSpeedDebugBall
} from "./variables";

export default class Ball {
    #context
    ballXPosition;
    ballYPosition;
    ballMoveChangeX;
    ballMoveChangeY;
    debugBallMoveChangeX;
    debugBallMoveChangeY;
    constructor(context, difficulty) {
        this.#context = context;
        if (difficulty === "easy")
        {
            this.ballMoveChangeX = easySpeedBall;
            this.ballMoveChangeY = -easySpeedBall;
            this.debugBallMoveChangeX = easySpeedDebugBall;
            this.debugBallMoveChangeY = -easySpeedDebugBall;
        } else if (difficulty === "medium")
        {
            this.ballMoveChangeX = mediumSpeedBall;
            this.ballMoveChangeY = -mediumSpeedBall;
            this.debugBallMoveChangeX = mediumSpeedDebugBall;
            this.debugBallMoveChangeY = -mediumSpeedDebugBall;
        } else {
            this.ballMoveChangeX = hardSpeedBall;
            this.ballMoveChangeY = -hardSpeedBall;
            this.debugBallMoveChangeX = hardSpeedDebugBall;
            this.debugBallMoveChangeY = -hardSpeedDebugBall;
        }
    }

    drawBall(debug, debugMode) {
        this.#context.beginPath();
        this.#context.arc(this.ballXPosition, this.ballYPosition, ballRadius, 0, 2 * Math.PI, false);
        if (debug && debugMode)
            this.#context.fillStyle = 'red';
        else if (!debug)
            this.#context.fillStyle = 'white';
        else
            this.#context.fillStyle = 'transparent';
        this.#context.fill();
        this.#context.closePath();
    }

    createBall(debug, debugMode) {
        this.ballXPosition = gameFieldInnerWidth / 2;
        this.ballYPosition = gameFieldInnerHeight / 2;
        this.drawBall(debug, debugMode);
    }
}