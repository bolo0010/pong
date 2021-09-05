import { canvas } from './variables';
import Field from './Field';

export default function getCanvas() {
	Field.resize();
	canvas.width = Field.gameFieldInnerWidth;
	canvas.height = Field.gameFieldInnerHeight;
	return canvas.getContext('2d');
}
