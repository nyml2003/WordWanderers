import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElIcons from "@element-plus/icons-vue";

const app = createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
for (const iconName in ElIcons) {
  app.component(iconName, ElIcons[iconName]);
}