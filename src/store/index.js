import { createStore } from 'vuex';
import axios from 'axios';
import qs from 'qs';
import router from '../router';

export default createStore({

    
    state() {
       
      return {
        token: "",
        expiration = 
      }
    },
    mutations: {
        loginUser(state, payload){
            state.token = payload.access_token;
            state.expiration = new Date(model.expiration)
        }
    },
    actions: {
        
        async login(context, payload) {
            const res = await axios({
                method: 'post',
                url: `http://127.0.0.1:8000/auth/jwt/login`,
                data: qs.stringify({
                    username: payload.email,
                    password: payload.password
                }),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            });
            const response = await res.data;
            
            context.commit('loginUser', response);
            router.push('/tabs/tab1');
        
        }
       
    },
    getters: {
      userToken(state){
          return state.token;
      }
    },
  })