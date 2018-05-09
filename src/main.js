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
// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Home },
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar }
//   ]
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
