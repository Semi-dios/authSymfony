import Vue from 'vue';
import VueRouter from 'vue-router';

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)


import {ValidationObserver, ValidationProvider , extend} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules'


//install rules vee-validate
Object.keys(rules).forEach(rule=> {
    extend(rule, rules[rule]);
})
import App from './App';


Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(VueRouter);

import router from './router/index';
import store from './store/index';



new Vue ({
    el: "#app",
    router,
    store,
    render: h=> h(App)
})