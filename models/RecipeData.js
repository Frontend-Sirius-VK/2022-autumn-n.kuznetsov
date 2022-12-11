
import EventBus from "../utils/eventBus.js";

export class RecipeData {
    constructor() {
     this.recipe = null;
    }

    fetchData() {
        fetch('/getRecipe')
            .then((response) => {

                return response.json();
            })

            .then((data) => {
                this.recipe = data;
                EventBus.emit('recipe-data:got-data', data);
            })
}
}