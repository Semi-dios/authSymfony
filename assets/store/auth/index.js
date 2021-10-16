import store from '../index';
import axios from 'axios';

export default {
    namespaced: true,
    state: {
        token: null,
        user : null
    },
    getters :{
        isAuthenticated(state) {
            return state.token && state.user
        },
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, user) {
           state.user = user;
        },
        setToken(state, token) {
            state.token = token;
         },
    }, 
    actions: {
        async register(_, form){
            return await axios.post('/register', form)
            .then((res)=> {
                console.log(res)
            }).catch((error)=>error)
        }, 
        async login({dispatch}, form) {
            let response = await axios.post('/api/login', form)
            console.log(form)
            console.log(response)
            .catch((error)=> {
                console.log(error)
            })

            return dispatch('attempt', response.data.token);

        },
        async attempt({commit, state}, token) {
            if(token) {
                commit('setToken',token);
            }

            if(!state.token) {
                return;
            }
            try {
                let response = await axios.get('/api/getUser')
                console.log('hola')
                commit('setUser', JSON.parse(response.data))
            } catch (error) {
                commit('setUser', null);
                commit('setToken', null);
            }
        }
    }
}