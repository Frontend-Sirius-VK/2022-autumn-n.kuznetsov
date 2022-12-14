import {Header} from '../components/Header/Header.js';
import {RecipePage} from '../components/RecipePage/RecipePage.js';
import EventBus from '../utils/eventBus.js';

export class RecipeView {
    constructor() {
        this.container = null;
        this.header = null;
        this.recipe = null;

        EventBus.on('recipe-page-card:got-data', this.update.bind(this));
        EventBus.on('recipe-page-card:not-found', this.errorUpdate.bind(this));
        EventBus.on('recipe-page-card:bad-request', this.errorUpdate.bind(this));
        EventBus.on('recipe-page-card:server-error', this.errorUpdate.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        root.innerHTML = '';
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const pageContainer = document.createElement('div');
        pageContainer.classList.add('recipe');
        this.recipe = new RecipePage(pageContainer);

        this.container.append(headerContainer, pageContainer);
        this.container.append(pageContainer);
        root.append(this.container);

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data || !Object.keys(data)) {
            return;
        }
        this.recipe.innerHTML = '';
        this.recipe.update(data);
    }

    renderError(data) {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container__div');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('error-container-error-status__p');
        errorStatus.textContent = data[0];

        const errorText = document.createElement('p');
        errorText.classList.add('error-container-error-text__p');
        errorText.textContent = data[1];

        errorContainer.append(errorStatus, errorText);

        this.container.append(errorContainer);
        root.append(this.container);
    }

    errorUpdate(data) {
        if (this.recipe) {
            this.recipe.innerHTML = '';
        }
        this.renderError(data);
    }
}