import {HelloPage} from './components/helloPage.js';

const div = document.querySelector('div');
const page = new HelloPage(div);
page.render();
