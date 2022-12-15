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


    getId() {
        const pathName = window.location.pathname;
        const rex = /\w+$/;
        try {
            return pathName.match(rex)[0];
        } catch (error) {
            return;
        }
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const id = this.getId();

        const pathname = window.location.pathname;

        const result = routes.find((route) => {
            const regexp = new RegExp(route.path);
            const matches = pathname.match(regexp);

            if (!matches) {
                return false;
            }
            return true;
        });

        if (!result) {
            return;
        }

        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        controller.process(id);

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
