import Logo from '../../assets/images/logo.jpg';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {

        const header = document.createElement('header');
        header.classList.add('header');

        const headerStyle = document.createElement('div');
        headerStyle.classList.add('header_style');

        const icons = document.createElement('img');
        icons.src = Logo;

        const recipe = document.createElement('div');
        const linkRecipe = document.createElement('a');
        linkRecipe.classList.add('links');
        linkRecipe.innerHTML += 'Рецепты';
        recipe.append(linkRecipe);

        const journal = document.createElement('div');
        const linkJournal = document.createElement('a');
        linkJournal.classList.add('links');
        linkJournal.innerHTML += 'Журнал';
        journal.append(linkJournal);


        const ideas = document.createElement('div');
        const linkIdeas = document.createElement('a');
        linkIdeas.classList.add('links');
        linkIdeas.innerHTML += 'Идеи';
        ideas.append(linkIdeas);

        const author = document.createElement('div');
        const linkAuthor = document.createElement('a');
        linkAuthor.classList.add('links');
        linkAuthor.innerHTML += 'Авторы';
        author.append(linkAuthor);

        const login = document.createElement('div');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.innerHTML += 'Войти';
        login.append(linkLogin);


        headerStyle.append(icons, recipe, journal, ideas, author, login);

        header.append(headerStyle);

        container.append(header);
    }
}

