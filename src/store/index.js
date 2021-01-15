import { createStore } from 'vuex';
import axios from 'axios';
import qs from 'qs';
import router from '../router';
import facility from './modules/facility/index.js';


export default createStore({

    
    state() {
       
      return {
        token: "",
        expiration: Date.now(),
      }
    },

    modules: {
        facility
    },
    mutations: {
        loginUser(state, payload){
            state.token = payload.access_token;
            state.expiration = new Date(payload.expiration)
        },
        clearToken: (state) => {
            state.token = "";
          }
    },
    actions: {
        
        async login(context, payload) {
            const res = await axios({
                method: 'post',
                url: `http://192.168.1.5:8000/auth/jwt/login`,
                data: qs.stringify({
                    username: payload.email,
                    password: payload.password
                }),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            });
            const response = await res.data;
            
            context.commit('loginUser', response);
            router.push('/tabs/tab1');
        
        },
        logout: (context) => {
            context.commit("clearToken");
            router.push("/login");
          }
       
    },
    getters: {
      userToken(state){
          return state.token;
      },
      isAuthenticated: (state) => {
          return state.token.length > 0  ;
      }
    },
  })