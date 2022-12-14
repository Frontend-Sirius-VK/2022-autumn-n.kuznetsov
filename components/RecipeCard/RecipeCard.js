export class RecipeCard {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(recipe) {
        const {url_image, name_recipe, category_recipe, time, description_recipe, author} = recipe;
        this.container = document.createElement('div');
        this.container.classList.add('recipeCard')

        const card = document.createElement('div');
        card.classList.add('card');
        this.container.append(card);

        const authorRecipe = document.createElement('div');
        authorRecipe.author = author;
        authorRecipe.classList.add('recipe-card-author');
        this.container.append(authorRecipe);

        const image = document.createElement('img');
        image.src = url_image;
        image.classList.add('recipe-card-image');
        this.container.appendChild(image);

        const recipeName = document.createElement('div');
        recipeName.name_recipe = name_recipe;
        recipeName.classList.add('recipe-card-name');
        this.container.append(recipeName);
        

        const recipeCategory = document.createElement('div');
        recipeCategory.textContent = category_recipe;
        recipeCategory.classList.add('recipe-card-category')
        this.container.append(recipeCategory);
        

        const recipetime = document.createElement('div');
        recipetime.textContent = `${time} min`;
        recipetime.classList.add('recipe-card-time')
        this.container.append(recipetime);
        

        const recipeDescription = document.createElement('div');
        recipeDescription.textContent = description_recipe;
        recipeDescription.classList.add('recipe-card-description')

        this.container.append(recipeDescription);
        
        this.parent.append(this.container);
    }
}