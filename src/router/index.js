import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import FirstPage from '../components/index.vue';

export default{
    routes:[
        {
            path:'/',
            redirect:'/firstpage'
        },
        {
            path:'/firstpage',
            component:FirstPage
        }
    ]
}