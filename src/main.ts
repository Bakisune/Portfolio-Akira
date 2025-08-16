import { createApp } from 'vue';
import './style.css';
import App from './Bakisune.vue';
import router from './router.ts';

createApp(App)
  .use(router) 
  .mount('#app');
