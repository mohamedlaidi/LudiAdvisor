import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profil from '../views/Profil.vue'
import Recommendation from '../views/Recommendation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profil', 
    name: 'Profil',
    component: Profil
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: Recommendation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
