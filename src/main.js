import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import routerConfig from "./router"
import store from './utils/store.js';

Vue.use(VueRouter)

const router = new VueRouter(routerConfig)
new Vue({
    el: "#app",
    router: router,
    store,
    render: h => h(App)
})