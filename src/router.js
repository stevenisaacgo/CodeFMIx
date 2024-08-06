import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import InitialPage from "./pages/InitialPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

import GamePage from "./pages/GamePage.vue";
import CreditsPage from "./pages/CreditsPage.vue";

const routes = [
    { path: "/", component: InitialPage, name: "initial" },
    { path: "/home", component: HomePage, name: "home" },
    { path: "/gamepage", component: GamePage, name: "gamepage" },
    { path: "/credits", component: CreditsPage, name: "credits" },
    { path: "/:pathMatch(.*)*", component: NotFoundPage, name: "notfound" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
