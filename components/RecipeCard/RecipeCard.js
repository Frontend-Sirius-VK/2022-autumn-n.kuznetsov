export class RecipeCard {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(recipe) {
        const {id, url_image, name_recipe, category_recipe, time, description_recipe, author} = recipe;
        this.container = document.createElement('div');
        this.container.classList.add('recipeCard');
        
        const card = document.createElement('div');
        card.classList.add('card')

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body')
        

        const authorRecipe = document.createElement('div');
        authorRecipe.textContent = author;
        cardBody.append(authorRecipe);
        authorRecipe.classList.add('recipe-card-author');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        const image = document.createElement('img');
        image.src = url_image;
        imageContainer.append(image);
        card.appendChild(imageContainer);
        image.classList.add('recipe-card-image');
  

        const recipeName = document.createElement('a');
        recipeName.textContent = name_recipe;
        recipeName.href = `/recipe/${id}`
        cardBody.append(recipeName);
        recipeName.classList.add('recipe-card-name');
        
        const recipetime = document.createElement('div');
        recipetime.textContent = `${time} min`;
        cardBody.append(recipetime);
        recipetime.classList.add('recipe-card-time');
        

        const recipeDescription = document.createElement('div');
        recipeDescription.textContent = description_recipe;
        recipeDescription.classList.add('recipe-card-description');

        cardBody.append(recipeDescription);
        card.append(cardBody);
        this.container.append(card);
        
        this.parent.append(this.container);
    }
}