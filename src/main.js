// import Vue from 'vue'
// import App from './App.vue'
// import axios from 'axios'
// import VueRouter from 'vue-router'
// import router from './routes'

// window.Vue = Vue
// window.axios = axios

// Vue.use(VueRouter)

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),

//   created() {
//     // axios -> ajax 
//   }
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'

import "../node_modules/bulma/css/bulma.css"

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
