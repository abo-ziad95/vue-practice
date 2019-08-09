import Vue from 'vue'
import vueRouter from 'vue-router';
import {routes } from './router';
import App from './App.vue';
import store from './store/store';
import Axios from 'axios'
import vueResource from 'vue-resource'
Vue.use(vueRouter);
Vue.use(vueResource);

Vue.http.options.root = 'https://stocks-trader-ba7b0.firebaseio.com'

// Axios.defaults.baseURL = 'https://stocks-trader-ba7b0.firebaseio.com';
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new vueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
