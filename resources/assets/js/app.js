import Vue from 'vue'
import router from  './routers';
import Vuetify from 'vuetify'

Vue.use(Vuetify);

import App from './views/App'


const app = new Vue({
    el: '#app',
    components: { App },
    router,
});