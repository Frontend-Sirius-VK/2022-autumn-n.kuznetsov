import {RecipeCard} from '../RecipeCard/RecipeCard.js';
import EventBus from '/utils/eventBus.js';
import {Loader} from '../loader/loader.js';


export class CardRecipe {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        EventBus.on('recipe:loading', this.render.bind(this));
    }

    render(data) {

        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        this.container = document.createElement('div');
        data.forEach((recipe) => {
            const recipeCard = new RecipeCard(this.container);
            recipeCard.render(recipe);
        });
        this.parent.append(this.container);
    }


update(data) {
    if (this.container) {
        this.container.innerHTML = '';
    }
    this.render(data);
}
}