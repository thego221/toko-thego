import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Product from '../components/Product.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
