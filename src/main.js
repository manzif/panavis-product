import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import CreateProduct from './components/CreateProduct'
import ProductDisplay from './components/ProductDisplay'
import Test from './components/Test'

const routes = [
  { path: '/', component: CreateProduct },
  { path: '/product', component: ProductDisplay },
  { path: '/test', component: Test }  
]

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
