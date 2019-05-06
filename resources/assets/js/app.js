import Vue from 'vue'
import router from  './routers';
import Vuetify from 'vuetify'
import bootstrap from './bootstrap'

Vue.use(Vuetify);

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