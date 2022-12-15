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
        EventBus.on('recipe-page-card:not-found', this.errorUpdate.bind(this));
        EventBus.on('recipe-page-card:bad-request', this.errorUpdate.bind(this));
        EventBus.on('recipe-page-card:server-error', this.errorUpdate.bind(this));
    }

    render() {
        this.root.innerHTML = ''
        this.containerPage = document.createElement('div');
        this.containerPage.classList.add('page-container');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const pageContainer = document.createElement('div');
        pageContainer.classList.add('recipe');
        this.recipePage = new RecipePage(pageContainer);

        this.containerPage.append(headerContainer, pageContainer);
        this.root.append(this.containerPage);
        

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data) {
            return;
        }
        this.recipePage.innerHTML = '';
        this.recipePage.update(data);
    }

    renderError(data) {
        this.container = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('container-error-status');
        errorStatus.textContent = data[0];

        const errorText = document.createElement('p');
        errorText.classList.add('container-error-text');
        errorText.textContent = data[1];

        errorContainer.append(errorStatus, errorText);

        this.container.append(headerElement ,errorContainer);
        this.root.append(this.container);
        this.header.render(headerElement);
    }

    errorUpdate(data) {
        if (this.containerPage) {
            this.containerPage.innerHTML = '';
        }
        this.renderError(data);
    }
}
