import {RecipeCard} from "../RecipeCard/RecipeCard.js";

export class CardRecipe {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        this.container = document.createElement('div');
        data.forEach((recipe) => {
            const recipeCard = new RecipeCard(this.container);
            recipeCard.render(recipe.url_image, recipe.name_recipe, recipe.category_recipe, recipe.time, recipe.description_recipe);
            console.log(recipe.url_image)
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