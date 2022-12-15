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
        icons.src = './assets/images/logo.jpg';
        
        const recipe = document.createElement('div');
        const linkRecipe = document.createElement('a');
        linkRecipe.classList.add('links');
        linkRecipe.href = '#';
        linkRecipe.innerHTML += 'Рецепты';
        recipe.append(linkRecipe);

        const journal = document.createElement('div');
        const linkJournal = document.createElement('a');
        linkJournal.classList.add('links');
        linkJournal.href = '#';
        linkJournal.innerHTML += 'Журнал';
        journal.append(linkJournal);


        const ideas = document.createElement('div');
        const linkIdeas = document.createElement('a');
        linkIdeas.classList.add('links');
        linkIdeas.href = '#';
        linkIdeas.innerHTML += 'Идеи';
        ideas.append(linkIdeas);

        const avtor = document.createElement('div');
        const linkAvtor = document.createElement('a');
        linkAvtor.classList.add('links');
        linkAvtor.href = '#';
        linkAvtor.innerHTML += 'Авторы';
        avtor.append(linkAvtor);

        const login = document.createElement('div');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.href = '#';
        linkLogin.innerHTML += 'Войти';
        login.append(linkLogin);


        headerStyle.append(icons, recipe, journal, ideas, avtor, login);

        header.appendChild(headerStyle);

        container.appendChild(header);
    }
}
