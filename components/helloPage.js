export class HelloPage {
    constructor(element) {
        this.element = element;
    }

    render() {
        const helloElement = document.createElement('h1');
        helloElement.textContent = 'Hello world';
        this.element.appendChild(helloElement);
    }
}
