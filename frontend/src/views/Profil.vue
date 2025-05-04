<template>
    <div class="profil-page">
      <Header />
      <main class="profil-content fade-in">
        <h1>Bienvenue {{ form.prenom }} 👋</h1>
  
        <section class="profil-details">
          <h2>Votre profil ludique :</h2>
          <ul>
            <li><strong>Année de publication favorite :</strong> {{ form.annee }}</li>
            <li><strong>Nombre minimum de joueurs :</strong> {{ form.joueurs }}</li>
            <li><strong>Durée de jeu préférée :</strong> {{ form.duree }}</li>
            <li><strong>Âge minimum :</strong> {{ form.age }}</li>
            <li><strong>Catégorie préférée :</strong> {{ form.categorie }}</li>
          </ul>
  
          <router-link to="/recommendations" class="cta-button">Voir mes jeux recommandés 🎯</router-link>
        </section>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { reactive } from 'vue'
  
  // Ici normalement tu récupéreras les données de l'utilisateur connecté
  // Pour l'instant on simule avec des valeurs statiques :
  
  const form = reactive({
    prenom: 'Amel',
    annee: 2024,
    joueurs: 2,
    duree: '30-60 min',
    age: 12,
    categorie: 'Stratégie'
  })
  </script>
  
  <style scoped>
  .profil-content {
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    color: white;
  }
  
  .profil-details {
    text-align: left;
    margin-top: 30px;
  }
  
  h2 {
    margin-bottom: 15px;
    color: white;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 12px;
    font-size: 1.1rem;
    color: white;
  }
  
  .cta-button {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 30px;
    background-color: #ffcc00;
    color: #3b0a58;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
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
  