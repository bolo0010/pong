import "/src/sass/style.sass";
import Main from "./Main";
import getCanvas from "./canvas";

document.addEventListener('DOMContentLoaded', (event) => {
    const context = getCanvas();
    const main = new Main(context);
    main.addListenersOnButtons();
})




