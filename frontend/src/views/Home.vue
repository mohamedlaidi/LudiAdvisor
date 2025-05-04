<template>
    <div class="page">
      <Header />
      <main class="main-content fade-in">
        <h1>Bienvenue sur LudiAdvisor 🎲</h1>
        <p>
          Vous cherchez le jeu de société parfait pour une soirée entre amis, en famille, ou pour explorer de nouveaux mondes ludiques ?
          <br><br>
          <strong>LudiAdvisor</strong> est votre guide personnel :
          <ul>
            <li>🎯 Recommandations personnalisées selon vos envies et votre style de jeu</li>
            <li>🔍 Exploration facile des meilleurs jeux adaptés à vos préférences</li>
            <li>🏆 Défis ludiques pour découvrir chaque semaine de nouveaux jeux</li>
            <li>🗣️ Feedback et avis communautaires pour mieux choisir</li>
          </ul>
          <br>
          Créez votre compte en quelques clics et entrez dans l'univers de LudiAdvisor !
        </p>
        <router-link to="/register" class="cta-button">Créer mon compte</router-link>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  </script>
  
  <style scoped>
  /* >>> Ici tu colles tout ton CSS que tu viens d'envoyer <<< */
  .main-content {
  text-align: center;
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
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

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

ul li {
  margin-bottom: 10px;
}

/* Button style amélioré */
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

  
  .main-content {
    text-align: center;
    padding: 50px 20px;
    max-width: 800px;
    margin: 0 auto;
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
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  /* Button style amélioré */
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
  </style>
  