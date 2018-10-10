import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import routerConfig from "./router"
import store from './utils/store.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter(routerConfig)
new Vue({
    el: "#app",
    router: router,
    store,
    render: h => h(App)
})