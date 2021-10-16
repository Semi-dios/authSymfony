import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store/index';

Vue.use(VueRouter);


/* View */

import Home from '../Views/Home.vue';
import Login from '../Views/Login.vue';
import Register from '../Views/Register.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/register',
        component: Register,
        name: 'Register'
    },

        
]
const router = new VueRouter({
    routes:routes
}  
)


export default router;