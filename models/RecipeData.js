import EventBus from "../utils/eventBus.js";

export class RecipeData {
    constructor() {
        this.products = null;
    }

    fetchData() {
        fetch('/getRecipe').then((response) => response.json()).then((data) => {
            this.products = data;

            EventBus.emit('getRecipe', data);
        })
    }
}
