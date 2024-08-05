import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./style.css";

const pinia = createPinia();
const app = createApp(App).use(pinia).use(router).mount("#app");
