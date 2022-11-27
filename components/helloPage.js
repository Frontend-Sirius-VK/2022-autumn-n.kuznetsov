export class helloPage {
    constructor(element) {
        this.element = element;
    }

    elementAdd() {
        const helloElement = document.createElement('h1');
        helloElement.textContent = 'Hello world';
        this.element.appendChild(helloElement);
    }
}