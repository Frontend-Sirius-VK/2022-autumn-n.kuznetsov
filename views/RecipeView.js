import {Header} from '../components/Header/Header.js';
import {RecipePage} from '../components/RecipePage/RecipePage.js';
import EventBus from '../utils/eventBus.js';

export class RecipeView {
    constructor() {
        this.containerPage = null;
        this.header = null;
        this.recipePage = null;
        this.root = document.querySelector('#root');
        EventBus.on('recipe-page-card:got-data', this.update.bind(this));
        EventBus.on('recipe-page-card:not-found', this.renderError.bind(this));
        EventBus.on('recipe-page-card:bad-request', this.renderError.bind(this));
        EventBus.on('recipe-page-card:server-error', this.renderError.bind(this));
    }

    render() {
        this.root.innerHTML = ''
        this.containerPage = document.createElement('div');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        this.header = new Header(headerContainer);

        const pageContainer = document.createElement('div');
        this.recipePage = new RecipePage(pageContainer);

        this.containerPage.append(headerContainer, pageContainer);
        this.root.append(this.containerPage);
        

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data) {
            return;
        }
        this.recipePage.update(data);
    }

    renderError(data) {
        if (this.containerPage) {
            this.containerPage.innerHTML = '';
        }
        this.container = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('container-error-status');
        errorStatus.textContent = data.title;

        const errorText = document.createElement('p');
        errorText.classList.add('container-error-text');
        errorText.textContent = data.description;

        errorContainer.append(errorStatus, errorText);

        this.container.append(headerElement ,errorContainer);
        this.root.append(this.container);
        this.header.render(headerElement);
    }

}
