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

        const pageContainer = document.createElement('div');
        pageContainer.classList.add('page-container');

        const authorContainer = document.createElement('div');
        authorContainer.classList.add('card-author-recipe');
        authorContainer.textContent = author;
        pageContainer.append(authorContainer);

        const authorButton = document.createElement('button');
        authorButton.classList.add('author-btn')
        pageContainer.append(authorButton);

        const pageIngredient = document.createElement('div');
        pageIngredient.classList.add('page-ingredient');


        const imageRecipe = document.createElement('img');
        imageRecipe.classList.add('card-image-content');
        imageRecipe.src = url_image;
        pageIngredient.append(imageRecipe);

        const pageDetails = document.createElement('div');
        pageDetails.classList.add('page-details');

        const headerName = document.createElement('a');
        headerName.classList.add('card-title-recipe');
        headerName.textContent = name_recipe;
        pageDetails.append(headerName);

        const categotyRecipe = document.createElement('div');
        categotyRecipe.classList.add('card-categoty-recipe');
        categotyRecipe.textContent = category_recipe;
        pageDetails.append(categotyRecipe);
        pageIngredient.append(pageDetails);


        const content = document.createElement('a');
        content.classList.add('card-description-recipe');
        content.textContent = description_recipe;
        pageIngredient.append(content);

        const searchButton = document.createElement('button');
        searchButton.classList.add('search-btn')
        searchButton.textContent = 'Рецепт'
        pageIngredient.append(searchButton);


        this.container.append(pageContainer, pageIngredient);
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
