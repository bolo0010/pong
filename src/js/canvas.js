import { gameFieldInnerHeight, gameFieldInnerWidth, canvas } from './variables';

export default function getCanvas() {
	canvas.width = gameFieldInnerWidth;
	canvas.height = gameFieldInnerHeight;
	return canvas.getContext('2d');
}
