import EventBus from "../utils/eventBus.js";

export class RecipePage {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        EventBus.on('pecipe-page:loading', this.render.bind(this));
    }

    render(data) {


        const {id, urlImage, nameRecipe, categoryRecipe, time, descriptionRecipe, author} = data;


        const headerContainer = document.createElement('div');
        headerContainer.classList.add('card-title');
        const headerName = document.createElement('a');
        headerName.classList.add('card-title-recipe');

        headerName.textContent = nameRecipe;

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
        imageRecipe.src = urlImage;

        imageContainer.append(imageRecipe);

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('card-description');

        const content = document.createElement('a');
        content.classList.add('card-description-recipe');

        content.textContent = descriptionRecipe;
        

        descriptionContainer.append(content);

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('card-categoty');

        const categotyRecipe = document.createElement('div');
        categotyRecipe.classList.add('card-categoty-recipe');
        categotyRecipe.textContent = author;

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