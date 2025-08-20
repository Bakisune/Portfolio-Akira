import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import NotFoundPage from "./views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
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
