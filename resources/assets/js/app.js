import Vue from 'vue'
import router from  './routers';
import Vuetify from 'vuetify'
import bootstrap from './bootstrap'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.use(Vuetify);
Vue.use(VueFullPage);

import App from './views/App';

Vue.component('header-component', require('./components/HeaderComponent').default);
Vue.component('carousel-component', require('./components/CarouselComponent').default);
Vue.component('footer-component', require('./components/FooterComponent').default);
Vue.component('goods-component', require('./components/GoodsComponent').default);

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    bootstrap
});