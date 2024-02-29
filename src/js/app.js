import {isWebp} from "./modules/webp.js";
import {slider} from "./modules/slider.js";

isWebp();
document.addEventListener('DOMContentLoaded', () => {
    slider('.slider');
})