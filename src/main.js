import { createApp } from "vue";
import { createPinia } from 'pinia';
import router from "./router";
import App from "./App.vue";
import "./style.css";

const app = createApp(App).use(router).mount("#app");
const pinia = createPinia();

app.use(pinia);
app.mount('#app');