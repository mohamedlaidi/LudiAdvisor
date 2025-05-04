<template>
    <div class="login-page">
      <Header />
      <main class="login-form fade-in">
        <h1>Se connecter</h1>
  
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Adresse e-mail</label>
            <input type="email" id="email" v-model="email" required />
          </div>
  
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model="password" required />
          </div>
  
          <button type="submit" class="cta-button">Se connecter</button>
        </form>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email    = ref('')
const password = ref('')

async function handleLogin() {
  try {
    const res = await axios.post('http://localhost:5000/api/login', {
      email:    email.value,
      password: password.value
    })
    // on stocke le token pour les requêtes futures
    localStorage.setItem('token', res.data.token)
    router.push('/profil')
  } catch {
    alert('Identifiants incorrects')
  }
}
</script>

  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 70px auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    text-align: left;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: white;
  }
  
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
    font-weight: bold;
    color: white;
  }
  
  input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    color: #3b0a58;
  }
  
  .cta-button {
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    background-color: #ffcc00;
    color: #3b0a58;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #ffaa00;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  /* Fade-in animation */
  .fade-in {
    animation: fadeIn 1.5s ease forwards;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  