import {MainView} from '../views/MainView.js';
import {RecipeData} from '../models/RecipeData.js';
import EventBus from '../utils/eventBus.js';

export class MainController {
    async process() {
        const view = new MainView();
        view.render();

        const recipeCard = new RecipeData();
        EventBus.emit('recipe:loading');
        recipeCard.fetchData();
    }
}
