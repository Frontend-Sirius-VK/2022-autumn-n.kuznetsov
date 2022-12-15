export class Loader {
    constructor(parent) {
        this.parent = parent;
    }
    render() {
        const loaderPage = document.createElement('div');
        loaderPage.className = 'loaderPage';
        const loader = document.createElement('div');
        loader.className = 'loader-container';
        const figure = document.createElement('div');
        figure.className = 'figure';
        loader.append(figure);
        loaderPage.append(loader);

        const flat = document.createElement('div');
        flat.className = 'loader flat-01';
        const loader2 = document.createElement('div');
        loader2.className = 'loader-container';
        const cube = document.createElement('div');
        cube.className = 'cube';
        const cube1 = document.createElement('div');
        cube1.className = 'cube';
        const cube2 = document.createElement('div');
        cube2.className = 'cube';
        const cube3 = document.createElement('div');
        cube3.className = 'cube';
        const cube4 = document.createElement('div');
        cube4.className = 'cube';
        const cube5 = document.createElement('div');
        cube5.className = 'cube';
        const cube6 = document.createElement('div');
        cube6.className = 'cube';
        const cube7 = document.createElement('div');
        cube7.className = 'cube';
        const cube8 = document.createElement('div');
        cube8.className = 'cube';
        const cube9 = document.createElement('div');
        cube9.className = 'cube';

        loader2.append(cube, cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9);
        flat.append(loader2)

        this.parent.append(loaderPage, flat);
    }
}
