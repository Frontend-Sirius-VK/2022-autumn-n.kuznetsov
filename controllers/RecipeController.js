
import {RecipeView} from '../views/RecipeView.js';
import {pageData} from '../models/pageData.js';
import EventBus from '../utils/eventBus.js';

export class PostController {
    process(id) {
        const view = new RecipeView();
        view.render();

        const recipeCard = new pageData();
        EventBus.emit('oneRecipeCard:loading');
        recipeCard.fetchDataById(id);
    }
}