import { createApp } from "vue";
import router from "./router"
import App from "./App"

createApp(App).use(router).mount(document.getElementById("app"))