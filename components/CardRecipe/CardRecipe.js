import {RecipeCard} from "../RecipeCard/RecipeCard.js";


export class CardRecipe {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
       
    }

    render(data) {


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