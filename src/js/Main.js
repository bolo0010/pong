import {
    ballRadius,
    canvas,
    difficulty,
    gameFieldInnerHeight,
    gameFieldInnerWidth,
    paddleWidth,
    pointsToWin
} from "./variables";
import Ball from "./Ball";
import Player from "./Player";
import Ai from "./Ai";
import Scoreboard from "./Scoreboard";

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
    constructor(context) {
        this.setDifficulty("easy");
        this.setPointsToWin(3);
        this.#context = context;
    }

    getDifficulty() {
        return this.#difficulty;
    }

    getPointsToWin() {
        return this.#pointsToWin;
    }

    setDifficulty(choice) {
        const value = difficulty.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{})[choice];
        if (typeof value === "undefined")
            throw new Error("There is no such a value! Check variables.js file and constructor of the object!");
        this.#difficulty = value;
        this.#changeTextInButtons(false, choice)
    }

    setPointsToWin(choice) {
        const value = pointsToWin.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{})[choice];
        if (typeof value === "undefined")
            throw new Error("There is no such a value! Check variables.js file and constructor of the object!");
        this.#pointsToWin = value;
        this.#changeTextInButtons(true, choice);
    }

    #changeTextInButtons = (choice, option) => {
        let selectedButton;
        if (choice)
            selectedButton = document.querySelector(".game-options__buttons--points");
        else
            selectedButton = document.querySelector(".game-options__buttons--difficulty");
        selectedButton.textContent = choice ? option.toString() : option.charAt(0).toUpperCase() + option.slice(1);
    };

    addListenersOnButtons = () => {
        const buttons = [...document.querySelectorAll(".game-options__buttons")];
        buttons.forEach(btn => btn.addEventListener('click', this.#handleListenersOnButtons))
    }

    #selectNextValueFromObject = (choice) => {
        let condition;
        if (choice === difficulty) condition = this.#difficulty;
        else condition = this.#pointsToWin;
        for (let i = 0; i < choice.length-1; i++) {
            if (choice[i].key === condition)
                return choice[i + 1].value;
            else if (i === choice.length-2)
                return  choice[0].value;
        }
    }

    #disableButtons(isStarted) {
        const start = document.querySelector(".game-options__buttons--start");
        const points = document.querySelector(".game-options__buttons--points");
        const difficulty = document.querySelector(".game-options__buttons--difficulty");

        if (isStarted)
        {
            start.textContent = "Restart";
            start.setAttribute("dataset", "data-started");
        } else
        {
            start.textContent = "Start";
            start.removeAttribute("dataset", "data-started");
        }

        points.classList.toggle("game-options__buttons--disabled");
        difficulty.classList.toggle("game-options__buttons--disabled");
    }

    #handleListenersOnButtons = (e) => {
        const dataButtonAttribute = e.target.dataset.button;
        switch (dataButtonAttribute) {
            case "start":
            {
                if (e.target.hasAttribute("dataset", "data-started"))
                {
                    cancelAnimationFrame(this.#requestAnimationFrameID);
                    this.#context.clearRect(0, 0, gameFieldInnerWidth,  gameFieldInnerHeight);
                    this.#disableButtons(false);
                    canvas.removeEventListener("mousemove", this.#mouseMoveHandler.bind(this), false);
                    break;
                }
                this.#ball = new Ball(this.#context, this.#difficulty);
                this.#debugBall = new Ball(this.#context, this.#difficulty);
                this.#player1 = new Player(this.#context);
                this.#player2 = new Ai(this.#context);
                this.#scoreboard = new Scoreboard();
                this.#ball.createBall(false, this.#debugMode);
                this.#debugBall.createBall(true, this.#debugMode);
                canvas.addEventListener("mousemove", this.#mouseMoveHandler.bind(this), false);
                setTimeout(this.#draw.bind(this), 1000)
                this.#disableButtons(true);
                break;
            }
            case "points":
            {
                this.setPointsToWin(this.#selectNextValueFromObject(pointsToWin));
                break;
            }
            case "difficulty":
            {
                this.setDifficulty(this.#selectNextValueFromObject(difficulty));
                break;
            }
            case "debug":
            {
                this.#debugMode = !this.#debugMode;
                document.querySelector(".game-options__buttons--debug").classList.toggle("game-options__buttons--on");
                break;
            }
            default:
                throw new Error('Sorry! There is no such a button!');
        }
    }

    #mouseMoveHandler(event) {
        const relativeX = event.offsetX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width)
            this.#player1.paddle.setPaddleStartSize(relativeX - paddleWidth/2);
    }

    #checkIsWin(player) {
        if (player)
            return this.#scoreboard.getScorePlayer1() >= this.#pointsToWin;
        else
            return this.#scoreboard.getScorePlayer2() >= this.#pointsToWin;
    }

    #draw() {
        let cancelDraw = false;
        this.#context.clearRect(0, 0, gameFieldInnerWidth,  gameFieldInnerHeight);
        this.#ball.drawBall(false, this.#debugMode);
        this.#debugBall.drawBall(true, this.#debugMode );
        this.#player1.paddle.drawPaddle();
        //debugBall
        if(this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX > gameFieldInnerWidth-ballRadius || this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX < ballRadius) {
            this.#debugBall.debugBallMoveChangeX = -this.#debugBall.debugBallMoveChangeX;
        }
        if(this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY > canvas.height-ballRadius || this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY < ballRadius) {
            this.#debugBall.debugBallMoveChangeY = -this.#debugBall.debugBallMoveChangeY;
        }
        //ball
        if(this.#ball.ballXPosition +  this.#ball.ballMoveChangeX > gameFieldInnerWidth-ballRadius || this.#ball.ballXPosition +  this.#ball.ballMoveChangeX < ballRadius) {
            this.#ball.ballMoveChangeX = -this.#ball.ballMoveChangeX;
        }
        if(this.#ball.ballYPosition + this.#ball.ballMoveChangeY < ballRadius) {
            this.#ball.ballMoveChangeY = -this.#ball.ballMoveChangeY;
        }
        else if(this.#ball.ballYPosition + this.#ball.ballMoveChangeY > gameFieldInnerHeight-ballRadius) {
            if(this.#ball.ballXPosition > this.#player1.paddle.getPaddleStartSize() && this.#ball.ballXPosition < this.#player1.paddle.getPaddleStartSize() + paddleWidth) {
                this.#ball.ballMoveChangeY = -this.#ball.ballMoveChangeY;
            }
            else {
                this.#scoreboard.setScorePlayer2();
                cancelDraw = true;
                console.log(this.#checkIsWin())
                if (!this.#checkIsWin(false)){
                    this.#context.clearRect(0, 0, gameFieldInnerWidth,  gameFieldInnerHeight);
                    this.#ball = new Ball(this.#context, this.#difficulty);
                    this.#debugBall = new Ball(this.#context, this.#difficulty);
                    this.#ball.createBall(false);
                    this.#debugBall.createBall(true);
                    setTimeout(requestAnimationFrame(this.#draw.bind(this)), 1000);
                } else {
                    alert("Player 2 win!");
                    this.#context.clearRect(0, 0, gameFieldInnerWidth,  gameFieldInnerHeight);
                    this.#disableButtons(false);
                    canvas.removeEventListener("mousemove", this.#mouseMoveHandler.bind(this), false);
                }
            }
        }
        this.#ball.ballXPosition = this.#ball.ballXPosition + this.#ball.ballMoveChangeX;
        this.#ball.ballYPosition = this.#ball.ballYPosition + this.#ball.ballMoveChangeY;

        this.#debugBall.ballXPosition = this.#debugBall.ballXPosition + this.#debugBall.debugBallMoveChangeX;
        this.#debugBall.ballYPosition = this.#debugBall.ballYPosition + this.#debugBall.debugBallMoveChangeY;
        if (cancelDraw)
            cancelAnimationFrame(this.#requestAnimationFrameID);
        else
            this.#requestAnimationFrameID = requestAnimationFrame(this.#draw.bind(this));
    }
}