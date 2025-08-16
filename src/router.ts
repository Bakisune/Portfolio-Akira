import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import GameDev_Design from './views/GameDev_Design.vue';
import Dev_UXUIDesign from './views/Dev_UX-UIDesign.vue';
import Illustration from './views/Illustration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/gamedev-design', component: GameDev_Design },
  { path: '/dev-ux-uidesign', component: Dev_UXUIDesign },
  { path: '/illustration', component: Illustration },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
