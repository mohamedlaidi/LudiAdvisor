// frontend/src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios  from 'axios'

// 1) Si on avait déjà un token dans le localStorage, on le remet dans axios
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const app = createApp(App)
app.use(router)
app.mount('#app')
