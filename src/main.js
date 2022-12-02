import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import axios from 'axios'
 
Vue.prototype.$axios=axios;

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
