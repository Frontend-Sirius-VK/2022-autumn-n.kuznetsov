export class RecipeCard {
    constructor(parent) {
        this.parent = parent;
    }

    render(url_image, name_recipe, category_recipe, time, description_recipe) {
        const container = document.createElement('div');
        container.classList.add('recipeCard')

        const image = document.createElement('img');
        image.url_image = url_image;
        image.classList.add('recipe-card-image');
        container.appendChild(image);

        const recipeName = document.createElement('div');
        recipeName.name_recipe = name_recipe;
        container.append(recipeName);
        recipeName.classList.add('recipe-card-name');

        const recipeCategory = document.createElement('div');
        recipeCategory.textContent = category_recipe;
        container.append(recipeCategory);
        recipeCategory.classList.add('recipe-card-category')

        const recipetime = document.createElement('div');
        recipetime.textContent = `${time} min`;
        container.append(recipetime);
        recipetime.classList.add('recipe-card-time')

        const recipeDescription = document.createElement('div');
        recipeDescription.textContent = description_recipe;
        container.append(recipeDescription);
        recipeDescription.classList.add('recipe-card-description')

        
        this.parent.append(container);
    }
}
