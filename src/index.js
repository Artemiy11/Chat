import {sum} from './modules/sum';
import "handlebars-helpers";

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString(); 