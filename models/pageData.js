import EventBus from '../utils/eventBus.js';

export class PageData {
    constructor() {
        this.recipe = null;
    }

    fetchDataById(id) {
        fetch(`/getRecipeById/${id}`)
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('recipe-page-card:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('recipe-page-card:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('recipe-page-card:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('recipe-page:got-data', data);
            })
    }
}
