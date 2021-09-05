export default class Field {
	static gameFieldInnerHeight;

	static gameFieldInnerWidth;

	static resize() {
		this.gameFieldInnerWidth = document.querySelector('.game-field').clientWidth;
		this.gameFieldInnerHeight = document.querySelector('.game-field').clientHeight;
	}
}
