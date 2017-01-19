import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'


Vue.use(VueRouter);

// Create a global filter to output funds in currency format
Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes // This is ES6. Instead of routes: routes we can short it with this.
});


new Vue({
  el: '#app',
  router, // Same ES6 as above,
  store,
  render: h => h(App)
})
