
import EventBus from "../utils/eventBus.js";

export class RecipeData {
    constructor(url_image = '', name_recipe = 'название рецепта', category_recipe = 'категория рецепта', time = 0, description_recipe = 'описание рецепта') {
        this.url_image = url_image;
        this.name_recipe = name_recipe;
        this.category_recipe = category_recipe;
        this.time = time;
        this.description_recipe = description_recipe;
    }

    fetchData() {
        fetch('/getRecipe').then((response) => response.json()).then((data) => {
            EventBus.emit('recipe-data:got-data', data);
        })
    }
}
