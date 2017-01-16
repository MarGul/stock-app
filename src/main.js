import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes // This is ES6. Instead of routes: routes we can short it with this.
});


new Vue({
  el: '#app',
  router, // Same ES6 as above
  render: h => h(App)
})
