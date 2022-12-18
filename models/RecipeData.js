
import EventBus from "../utils/eventBus.js";

export class RecipeData {
    constructor() {
        this.recipe = null;
    }

    fetchData() {
        fetch('/getRecipe').then((response) => response.json()).then((data) => {
            EventBus.emit('recipe-data:got-data', data);
        })
    }
}

