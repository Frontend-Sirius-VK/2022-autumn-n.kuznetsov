
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
                    EventBus.emit('recipe-card:not-found', {title:'Ошибка 404', description: 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'});
                    return;
                }

                if (status === 400) {
                    EventBus.emit('recipe-card:bad-request', {title: 'Ошибка 400', description: 'Вы ввели некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('recipe-card:server-error', {title: 'Ошибка 500', description: 'Ошибка обращения к сервису. Попробуйте обновить страницу.'});
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('recipe-card:got-data', data);
        })
}
}
