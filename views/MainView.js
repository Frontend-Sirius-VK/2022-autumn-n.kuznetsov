import {DescriptionSiteEda} from '../components/DescriptionSiteEda/DescriptionSiteEda.js';
import {Header} from '../components/Header/Header.js';

import EventBus from '../utils/eventBus.js';
import { CardRecipe } from '../components/CardRecipe/CardRecipe.js';



export class MainView {
    constructor() {
        this.header = null;
        this.recipeCard = null;
        this.description = null
        this.container = null
        this.root = document.querySelector('#root');
        EventBus.on('recipe-data:got-data', this.update.bind(this));
        EventBus.on('recipe-card:not-found', this.errorUpdate.bind(this));
        EventBus.on('recipe-card:bad-request', this.errorUpdate.bind(this));
        EventBus.on('recipe-card:server-error', this.errorUpdate.bind(this));
    }

    render() {
        this.container = document.createElement('div');
        const header = document.createElement('header');
        header.classList.add('header');
        this.header = new Header(header);

        const description = document.createElement('description');
        description.classList.add('description');
        this.description = new DescriptionSiteEda(description);

        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe');
        this.recipeCard = new CardRecipe(recipeContainer);
        

        this.container.append(header, description, recipeContainer);
        this.root.append(this.container);
        this.header.render(header);
        this.description.render(description);
        
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.recipeCard.update(data);
    }

    renderError(data) {
        this.container.innerHTML = '';

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
        if (this.recipeCard) {
            this.recipeCard.innerHTML = '';
        }
        this.renderError(data);
    }

}
