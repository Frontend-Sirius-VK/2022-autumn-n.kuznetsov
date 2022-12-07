import {DescriptionSiteEda} from "../components/DescriptionSiteEda/DescriptionSiteEda.js";
import {Header} from "../components/Header/Header.js";
import {EventBus} from "../utils/eventBus.js";
import { CardRecipe } from "../components/CardRecipe/CardRecipe.js";


export class MainView {
    constructor() {
        this.header = null;
        this.recipeCard = null;
        this.container = null;
        this.description = null
        EventBus.on('getRecipe', this.update.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        container.classList.add('page-container');

        const header = document.createElement('header');
        header.classList.add('header');
        this.header = new Header(headerElement);

        const description = document.createElement('description');
        description.classList.add('description');
        this.description = new DescriptionSiteEda(descriptionElement);

        const recipeContainer = document.createElement('div');
        this.resipeCard = new CardRecipe(recipeContainer);
        recipeContainer.append(this.recipeCard);

        this.container.append(headerElement, descriptionElement, recipeContainer);
        root.append(this.container);
        this.header.render(headerElement);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.recipeCard.update(data);
    }
}
