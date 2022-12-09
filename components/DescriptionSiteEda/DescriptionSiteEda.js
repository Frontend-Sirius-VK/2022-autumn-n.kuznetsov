
export class DescriptionSiteEda {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {

        const descriptions = document.createElement('div');
        descriptions.classList.add('description');

        const descriptionEda = document.createElement('div');
        descriptionEda.classList.add('descriptionEda_style');

        const heading = document.createElement('h1');
        heading.classList.add('description_heading');
        heading.innerHTML += 'Рецепты';

        const description = document.createElement('p');
        description.classList.add('descriptionEda_text');
        description.innerHTML += 'Ищите рецепты, выбирая категорию блюда, его подкатегорию, кухню или меню. А в дополнительных фильтрах можно искать по нужному (или ненужному) ингредиенту: просто начните писать его название и сайт подберет соответствующий.';

        descriptionEda.append(heading, description);

        descriptions.appendChild(descriptionEda);

        this.parent.appendChild(descriptions);
    }
}