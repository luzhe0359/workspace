import { createApp } from "vue";
import router from "./router"
import App from "./App"

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    // .use(ElementPlus)
    .mount(document.getElementById("app"))