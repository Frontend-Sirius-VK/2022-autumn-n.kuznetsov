export class RecipeCard {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(recipe) {
        const {url_image, name_recipe, category_recipe, time, description_recipe, author} = recipe;
        this.container = document.createElement('div');
        this.container.classList.add('recipeCard');

        const authorRecipe = document.createElement('div');
        authorRecipe.textContent = author;
        this.container.append(authorRecipe);
        authorRecipe.classList.add('recipe-card-author');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        const image = document.createElement('img');
        image.src = url_image;
        imageContainer.append(image);
        this.container.appendChild(imageContainer);
        image.classList.add('recipe-card-image');
  

        const recipeName = document.createElement('div');
        recipeName.textContent = name_recipe;
        this.container.append(recipeName);
        recipeName.classList.add('recipe-card-name');
        
        const recipetime = document.createElement('div');
        recipetime.textContent = `${time} min`;
        this.container.append(recipetime);
        recipetime.classList.add('recipe-card-time');
        

        const recipeDescription = document.createElement('div');
        recipeDescription.textContent = description_recipe;
        recipeDescription.classList.add('recipe-card-description');

        this.container.append(recipeDescription);
        
        this.parent.append(this.container);
    }
}
