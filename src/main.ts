import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/css/icon.css';
// 引入 element-plus 样式
import 'element-plus/dist/index.css';
// 引入 element-plus 图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);

// 全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
