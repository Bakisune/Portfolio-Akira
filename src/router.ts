import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import GameDev_Design from "./views/GameDev_Design.vue";
import Dev_UXUIDesign from "./views/Dev_UX-UIDesign.vue";
import Illustration from "./views/Illustration.vue";
import UnderConstrution from "./views/UnderConstrution.vue";
import NotFoundPage from "./views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/gamedev-design", name: "GameDevDesign", component: GameDev_Design },
  {
    path: "/dev-ux-uidesign",
    name: "DevUXUIDesign",
    component: Dev_UXUIDesign,
  },
  { path: "/illustration", name: "Illustration", component: Illustration },
  { path: "/soon", name: "UnderConstruction", component: UnderConstrution },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
