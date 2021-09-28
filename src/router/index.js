import { createRouter, createWebHashHistory } from "vue-router";
import Section1 from "../views/Section1.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Section1,
      meta: {
         libre: true		
      }
  },
  {
    path: "/single:id",
    name: "Single",
    component: () =>
      import(/* webpackChunkName: "single" */ "../views/Single.vue"),
    meta:{
	libre: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta:{
	libre: true
    }
  },
  {
    path: "/subir",
    name: "Subir",
    component: () =>
      import(/* webpackChunkName: "subir" */ "../views/Subir.vue"),
    meta: {
	administrador: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
	libre: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
    if (to.matched.some((record)=> record.meta.libre )){
        next();
    } else if (
	store.state.usuario && 
	store.state.usuario.rol == 'Administrador'
    ) {
	if (to.matched.some((record) => record.meta.administrador)) {
	   next();	
	}
    } else {
	next({ name: "Login" });
    }
});

export default router;
