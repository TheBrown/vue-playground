import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../components/About.vue'
import EventMethod from '../views/EventMethod.vue'
import Data from '../views/Data.vue'
import Compute from '../views/Compute.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/eventandmethod',
        name: 'eventandmethod',
        component: EventMethod
    },
    {
        path: '/data',
        name: 'data',
        component: Data
    },
    {
        path: '/compute',
        name: 'compute',
        component: Compute
    },

]

const router = new VueRouter({
    routes
});

export default router