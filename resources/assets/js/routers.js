import Vue from 'vue'
import Router from 'vue-router';
import Hello from './views/Hello'
import Home from './views/Home'
import Error from './views/Error.vue'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        },
        { path: '*', redirect: '/error' }
    ],
});

export default router;
