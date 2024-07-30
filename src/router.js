import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import InitialPage from "./pages/InitialPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

import HtmlPage from "./pages/HtmlPage.vue";
import CssPage from "./pages/CssPage.vue";
import JavaScriptPage from "./pages/JavaScriptPage.vue";

const routes = [
    { path: "/", component: InitialPage, name: "initial" },
    { path: "/home", component: HomePage, name: "home" },
    { path: "/html", component: HtmlPage, name: "html" },
    { path: "/css", component: CssPage, name: "css" },
    { path: "/javascript", component: JavaScriptPage, name: "javascript" },
    { path: "/:pathMatch(.*)*", component: NotFoundPage, name: "notfound" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
