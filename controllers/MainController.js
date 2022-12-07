import {MainView} from "../views/MainView.js";
import {RecipeData} from "../models/RecipeData.js";

export class MainController {
    async process() {
        const view = new MainView();
        view.render();

        const recipeCards = new RecipeData();
        recipeCards.fetchData();
    }
}
