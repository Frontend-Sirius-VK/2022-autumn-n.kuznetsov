import {helloPage} from './components/helloPage.js';

const body = document.querySelector('body');
const page = new helloPage(body);
page.elementAdd();