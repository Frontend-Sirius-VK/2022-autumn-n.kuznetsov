import EventBus from "../utils/eventBus.js";

export class RecipePage {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        EventBus.on('recipe-page:load', this.render.bind(this));
    }

    render(data) {
        
    }
}