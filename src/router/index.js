import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Section1 from "../components/Section1.vue";

const routes = [
  {
    path: "/",
    name: "Section1",
    component: Section1,
  },
  {
    path: "/single:id",
    name: "Single",
    component: () =>
      import(/* webpackChunkName: "single" */ "../views/Single.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/subir",
    name: "Subir",
    component: () =>
      import(/* webpackChunkName: "subir" */ "../views/Subir.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
