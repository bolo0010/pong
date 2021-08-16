export default class Scoreboard {
    #scorePlayer1;
    #scorePlayer2;
    constructor() {
        this.#scorePlayer1 = 0;
        this.#scorePlayer2 = 0;
        this.#changeScoreboardScores(true);
        this.#changeScoreboardScores(false);
    }

    getScorePlayer1() {
        return this.#scorePlayer2;
    }

    getScorePlayer2() {
        return this.#scorePlayer2;
    }

    setScorePlayer1() {
        this.#scorePlayer1++;
        this.#changeScoreboardScores(true);
    }

    setScorePlayer2() {
        this.#scorePlayer2++;
        this.#changeScoreboardScores(false);
    }

    #changeScoreboardScores(player) {
        const scoreBoardPlayer1 = document.querySelector(".game-scoreboard__player1--score");
        const scoreBoardPlayer2 = document.querySelector(".game-scoreboard__player2--score");

        if (player)
            scoreBoardPlayer1.textContent = this.#scorePlayer1.toString();
        else
            scoreBoardPlayer2.textContent = this.#scorePlayer2.toString();
    }
}