import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';

export class RecipePage {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        EventBus.on('recipe-page:loading', this.render.bind(this));
    }

    render(data) {

        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        const {id, url_image, name_recipe, category_recipe, time, description_recipe, author} = data;
        this.container = document.createElement('div');
        this.container.classList.add('card-page')

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('card-title');
        const headerName = document.createElement('a');
        headerName.classList.add('card-title-recipe');

        headerName.textContent = name_recipe;
        headerContainer.append(headerName);

        const authorContainer = document.createElement('div');
        authorContainer.classList.add('card-author');

        const authorText = document.createElement('div');
        authorText.classList.add('card-author-recipe');
        authorText.textContent = author;

        authorContainer.append(authorText);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('card-image');

        const imageRecipe = document.createElement('img');
        imageRecipe.classList.add('card-image-content');
        imageRecipe.src = url_image;

        imageContainer.append(imageRecipe);

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('card-description');

        const content = document.createElement('a');
        content.classList.add('card-description-recipe');

        content.textContent = description_recipe;url_image, name_recipe, category_recipe, time, 
        

        descriptionContainer.append(content);

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('card-categoty');

        const categotyRecipe = document.createElement('div');
        categotyRecipe.classList.add('card-categoty-recipe');
        categotyRecipe.textContent = category_recipe;

        categoryContainer.append(categotyRecipe);

        this.container.append(headerContainer, authorContainer, imageContainer, descriptionContainer, categoryContainer);
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
