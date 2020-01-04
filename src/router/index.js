import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../components/About.vue'
import EventMethod from '../views/EventMethod.vue'

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

]

const router = new VueRouter({
    routes
});

export default router