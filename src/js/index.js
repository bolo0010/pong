// eslint-disable-next-line import/no-absolute-path
import '/src/sass/style.sass';
import Main from './Main';
import getCanvas from './canvas';


document.addEventListener('DOMContentLoaded', () => {
	const main = new Main();
	main.addListenersOnButtons();
});
