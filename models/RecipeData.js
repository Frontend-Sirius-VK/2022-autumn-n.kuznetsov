
import EventBus from "../utils/eventBus.js";

export class RecipeData {
    constructor() {
     this.recipe = null;
    }

    fetchData() {
        fetch('/getRecipe')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('recipeCard:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('recipeCard:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('recipeCard:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('recipe-card:got-data', data);
        })
}
}