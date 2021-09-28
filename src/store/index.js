import { createStore } from "vuex";
import router from '../router/index';
import decode from 'jwt-decode';

export default createStore({
	state: {
		token: null,
		usuario: null
	},
	mutations: {
	  setToken(state,token){
		state.token = token;
	  },
	  setUsuario(state,usuario){
		state.usuario = usuario;
	  }
	},
	actions: {
	    guardarToken({commit}, token){
		commit("setToken", token);
	        commit("setUsuario", decode(token));
		localStorage.setItem("token", token);
		router.push({name: 'Inicio'});
	    }
	},autoLogin({commit}){
	    let token = localStorage.getItem("token");
		if (token){
		   commit("setToken", token);
		   commit("setUsuario", decode(token));
		}
		router.push({name: 'Inicio'});
	},
	salir({commit}){
	  commit("setToken", null);
	  commit("setUsuario", null);
          localStorage.removeItem("token");
	  router.push({name: 'Inicio'});
	}

});
