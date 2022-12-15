
import {RecipeView} from '../views/RecipeView.js';
import {PageData} from '../models/pageData.js';
import EventBus from '../utils/eventBus.js';

export class RecipeController {
    process(id) {
        const view = new RecipeView();
        view.render();

        const recipeCard = new PageData();
        EventBus.emit('recipe-page:loading');
        recipeCard.fetchDataById(id);
    }
}
