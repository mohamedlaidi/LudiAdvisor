<template>
    <div class="recommendations-page">
      <Header />
      <main class="recommendations-content fade-in">
        <h1>Vos jeux recommandés 🎯</h1>
  
        <div class="games-grid">
          <div v-for="game in games" :key="game.id" class="game-card">
            <h2>{{ game.name }}</h2>
            <p><strong>Catégorie :</strong> {{ game.category }}</p>
            <p><strong>Nombre de joueurs :</strong> {{ game.players }}</p>
            <p><strong>Durée :</strong> {{ game.duration }}</p>
            <p><strong>Âge minimum :</strong> {{ game.age }} ans</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  // Liste de jeux recommandés (exemples)
  const games = ref([
    {
      id: 1,
      name: 'Catan',
      category: 'Stratégie',
      players: '3-4',
      duration: '60-90 min',
      age: 10
    },
    {
      id: 2,
      name: 'Dixit',
      category: 'Famille',
      players: '3-6',
      duration: '30 min',
      age: 8
    },
    {
      id: 3,
      name: 'Pandemic',
      category: 'Coopératif',
      players: '2-4',
      duration: '45 min',
      age: 10
    },
    {
      id: 4,
      name: 'Uno',
      category: 'Cartes',
      players: '2-10',
      duration: '20 min',
      age: 7
    }
  ])
  </script>
  
  <style scoped>
  .recommendations-content {
    max-width: 1000px;
    margin: 50px auto;
    padding: 30px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 30px;
    color: white;
  }
  
  .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .game-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    transition: transform 0.3s ease;
  }
  
  .game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
  
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
  