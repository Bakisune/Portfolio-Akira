
import { createRouter, createWebHashHistory } from "vue-router"
//DEFINE ROUTE COMPONENTS
const Home= { template: "<div>Home</div>"}
const About = { template: "<div>About</div>"}

//DEFINE SOME ROUTES
const routes = [
{path: "/", component: Home},
{path: "/about", component: About}
]

//CRIA A INSTÂNCIA DO ROUTER
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
