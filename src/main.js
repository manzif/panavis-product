import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import CreateProduct from './components/CreateProduct'
import ProductDisplay from './components/ProductDisplay'

const routes = [
  { path: '/', component: CreateProduct },
  { path: '/product', component: ProductDisplay }  
]

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
