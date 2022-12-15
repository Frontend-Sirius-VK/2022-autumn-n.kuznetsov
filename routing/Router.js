import {MainController} from '../controllers/MainController.js';
import {RecipeController} from '../controllers/RecipeController.js';
import EventBus from "../utils/eventBus.js";



const routes = [
    {
        path: `^/$`,
        controller: MainController
    },
    {
        path: `^/recipe/(\\w+)`,
        controller: RecipeController
    },
]


export class Router {
    constructor() {
        EventBus.off('recipe-page:loading');
        EventBus.off('recipe:loading');
        EventBus.off('recipe-card:got-data');
        EventBus.off('recipe-card:not-found');
        EventBus.off('recipe-card:bad-request');
        EventBus.off('recipe-card:server-error');
        EventBus.off('recipe-page:got-data');
        EventBus.off('recipe-page-card:not-found');
        EventBus.off('recipe-page-card:bad-request');
        EventBus.off('recipe-page-card:server-error');
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {
            event.preventDefault();

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    getID() {
        const pathParser = window.location.pathname.split('/')
        let id;
        if (pathParser[1] === 'undefined') {
            id = pathParser[2]
        }
        return id
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const id = this.getID();
        const controllerСheck = new MainController();
        const {pathname} = window.location;
        const result = routes.find((route) => {
            const regexp = new RegExp(route.path );
            const matches = pathname.match(regexp);

            return Boolean(matches)
        });

        if (!result) {
            console.log('404')
        }
        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        if (result.controller !== controllerСheck){
            controller.process(id);
        } else {
            controller.process();
        }

    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();
