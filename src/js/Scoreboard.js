export default class Scoreboard {
    #scorePlayer1;

    #scorePlayer2;

    constructor() {
    	this.#scorePlayer1 = 0;
    	this.#scorePlayer2 = 0;
    	this.#changeScoreboardScores(true);
    	this.#changeScoreboardScores(false);
    }

    get scorePlayer1() {
    	return this.#scorePlayer1;
    }

    get scorePlayer2() {
    	return this.#scorePlayer2;
    }

    increaseScorePlayer1() {
    	this.#scorePlayer1 += 1;
    	this.#changeScoreboardScores(true);
    }

    increaseScorePlayer2() {
    	this.#scorePlayer2 += 1;
    	this.#changeScoreboardScores(false);
    }

    #changeScoreboardScores(player) {
    	const scoreBoardPlayer1 = document.querySelector('.game-scoreboard__player1--score');
    	const scoreBoardPlayer2 = document.querySelector('.game-scoreboard__player2--score');

    	// eslint-disable-next-line max-len
    	if (player) { scoreBoardPlayer1.textContent = this.#scorePlayer1.toString(); } else { scoreBoardPlayer2.textContent = this.#scorePlayer2.toString(); }
    }
}
