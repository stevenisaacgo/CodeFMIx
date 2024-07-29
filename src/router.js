import { createMemoryHistory, createRouter } from "vue-router";

import InitialPage from "./pages/InitialPage.vue";

import HtmlPage from "./pages/HtmlPage.vue";
import CssPage from "./pages/CssPage.vue";
import JavaScriptPage from "./pages/JavaScriptPage.vue";

const routes = [
    { path: "/", component: InitialPage },
    { path: "/html", component: HtmlPage },
    { path: "/css", component: CssPage },
    { path: "/javascript", component: JavaScriptPage },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
